import { useState } from 'react';

// --- IMPORTS: Pointing to your 'components' folder ---
import PersonalInfoForm from './components/PersonalInfoForm';
import TravelInfoForm from './components/TravelInfoForm';
import DocumentUploadForm from './components/DocumentUploadForm';
import AdditionalInfoForm from './components/AdditionalInfoForm';
import ProgressTracker from './components/ProgressTracker';
import SuccessModal from './components/SuccessModal';

// Importing types from your global types folder (going up 2 levels to src/types)
import { ApplicationFormData, ValidationError, Country } from '../../types';

// --- CONFIGURATION ---
// 1. Paste the Web App URL you got from Google Apps Script Deploy
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz6b1PFaMnl6A81MXDvtCQIn9kbbuDyPrMmzy_qIFXvEZKYemhXHyMSAiYB1_QpshjD/exec";

// 2. Your WhatsApp Number (No + symbol)
const WHATSAPP_NUMBER = "919087612111";

const ApplicationPortal = () => {
  // 1. STATE MANAGEMENT
  const [currentStep, setCurrentStep] = useState<string>('personal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<ValidationError[]>([]);

  // The Master Data Object
  const [formData, setFormData] = useState<ApplicationFormData>({
    personalInfo: {
      firstName: '', lastName: '', email: '', phone: '',
      dateOfBirth: '', nationality: '', passportNumber: '', passportExpiry: ''
    },
    travelInfo: {
      countryId: '', visaTypeId: '', travelDate: '', returnDate: '', purpose: ''
    },
    documents: [],
    additionalInfo: {
      previousVisas: false, criminalRecord: false, medicalConditions: false,
      emergencyContact: '', emergencyPhone: ''
    }
  });

  // Mock Data (You can move this to a separate data file later)
  const countries: Country[] = [
    {
      id: 'dubai', name: 'Dubai (UAE)', code: 'AE', flag: '🇦🇪',
      heroImage: '', heroImageAlt: '', tagline: '', description: '',
      processingTime: '2-3 Days', successRate: 99, pricing: { embassyFee: '0', serviceFee: 0, totalFee: 0, currency: 'USD', refundPolicy: '' },
      requirements: [], timeline: [], testimonials: [], faqs: [], embassyInfo: { name: '', address: '', phone: '', email: '', website: '', workingHours: '', latitude: 0, longitude: 0 },
      recentUpdates: [], similarDestinations: [], stats: { totalApplications: 0, averageProcessingDays: 0, approvalRate: 0, rejectionReasons: [] },
      visaTypes: [{ id: 'tourist-30', name: '30 Days Tourist', description: '', duration: '', price: 150, processingTime: '2-3 Days', icon: '' }]
    },
    {
      id: 'schengen', name: 'Schengen Area', code: 'EU', flag: '🇪🇺',
      heroImage: '', heroImageAlt: '', tagline: '', description: '',
      processingTime: '15 Days', successRate: 95, pricing: { embassyFee: '0', serviceFee: 0, totalFee: 0, currency: 'EUR', refundPolicy: '' },
      requirements: [], timeline: [], testimonials: [], faqs: [], embassyInfo: { name: '', address: '', phone: '', email: '', website: '', workingHours: '', latitude: 0, longitude: 0 },
      recentUpdates: [], similarDestinations: [], stats: { totalApplications: 0, averageProcessingDays: 0, approvalRate: 0, rejectionReasons: [] },
      visaTypes: [{ id: 'business', name: 'Business Visa', description: '', duration: '', price: 200, processingTime: '15 Days', icon: '' }]
    },
  ];

  // 2. HELPER FUNCTIONS
  const updateFormData = (section: keyof ApplicationFormData, data: any) => {
    setFormData(prev => ({ ...prev, [section]: data }));
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const handleDocumentUpload = async (reqId: string, file: File) => {
    const base64String = await convertToBase64(file);
    const newDoc = {
      id: Math.random().toString(36).substr(2, 9),
      requirementId: reqId,
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      url: URL.createObjectURL(file),
      base64: base64String, // Storing for Google Sheets upload
      uploadedAt: new Date().toISOString(),
      status: 'pending' as const
    };

    setFormData(prev => ({
      ...prev,
      documents: [...prev.documents.filter(d => d.requirementId !== reqId), newDoc]
    }));
  };

  const handleDocumentRemove = (docId: string) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.filter(d => d.id !== docId)
    }));
  };

  // 3. SUBMISSION LOGIC (FIXED WHATSAPP)
  const handleFinalSubmit = async () => {
    setIsSubmitting(true);

    // --- FIX: Prepare Message & Open WhatsApp FIRST (Before Async Fetch) ---
    const message = `
*New Visa Application*
-----------------------------
*Name:* ${formData.personalInfo.firstName} ${formData.personalInfo.lastName}
*Passport:* ${formData.personalInfo.passportNumber}
*Dest:* ${formData.travelInfo.countryId}
*Visa:* ${formData.travelInfo.visaTypeId}
-----------------------------
*Status:* Application Data & Documents Sent.
    `.trim();

    // Open WhatsApp immediately so the browser doesn't block it as a pop-up
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    try {
      // Step A: Send to Google Sheets (Backend)
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
      });

      // Step B: Show Success
      setShowSuccess(true);

    } catch (error) {
      console.error("Error:", error);
      alert("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 4. NAVIGATION CONFIG
  const steps = [
    { id: 'personal', title: 'Personal Info' },
    { id: 'travel', title: 'Travel Details' },
    { id: 'documents', title: 'Documents' },
    { id: 'additional', title: 'Final Review' },
  ];

  const currentStepIndex = steps.findIndex(s => s.id === currentStep);
  const progressPercentage = ((currentStepIndex) / (steps.length - 1)) * 100;

  // 5. RENDER
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto space-y-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-slate-900">Visa Application Portal</h1>
          <p className="text-slate-500">Complete the steps below to secure your travel permit.</p>
        </div>

        {/* --- Progress Tracker --- */}
        <ProgressTracker
          sections={steps.map(s => ({
            id: s.id,
            title: s.title,
            fields: 10,
            completedFields: currentStepIndex > steps.findIndex(x => x.id === s.id) ? 10 : 0,
            completed: currentStepIndex > steps.findIndex(x => x.id === s.id),
            description: "Step details",
            icon: "Check"
          }))}
          currentSection={currentStep}
          completionPercentage={Math.round(progressPercentage)}
          onSectionClick={(id) => { /* Optional: Add logic to jump steps if allowed */ }}
        />

        {/* --- Main Form Container --- */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-200">

          {currentStep === 'personal' && (
            <PersonalInfoForm
              formData={formData.personalInfo}
              onChange={(data) => updateFormData('personalInfo', data)}
              onNext={() => setCurrentStep('travel')}
              errors={errors}
            />
          )}

          {currentStep === 'travel' && (
            <TravelInfoForm
              formData={formData.travelInfo}
              countries={countries}
              onChange={(data) => updateFormData('travelInfo', data)}
              onNext={() => setCurrentStep('documents')}
              onBack={() => setCurrentStep('personal')}
              errors={errors}
            />
          )}

          {currentStep === 'documents' && (
            <DocumentUploadForm
              requirements={[
                { id: 'passport_front', name: 'Passport Front', description: 'Photo page', format: ['jpg', 'pdf'], maxSize: 5000000, required: true, icon: 'FileText' },
                { id: 'photo', name: 'Passport Photo', description: 'White background', format: ['jpg'], maxSize: 2000000, required: true, icon: 'User' }
              ]}
              uploadedDocuments={formData.documents}
              onUpload={handleDocumentUpload}
              onRemove={handleDocumentRemove}
              onNext={() => setCurrentStep('additional')}
              onBack={() => setCurrentStep('travel')}
              errors={errors}
            />
          )}

          {currentStep === 'additional' && (
            <AdditionalInfoForm
              formData={formData.additionalInfo}
              onChange={(data) => updateFormData('additionalInfo', data)}
              onSubmit={handleFinalSubmit}
              onBack={() => setCurrentStep('documents')}
              isSubmitting={isSubmitting}
              errors={errors}
            />
          )}
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccess}
        applicationId={`VS-${Date.now().toString().slice(-6)}`}
        onClose={() => setShowSuccess(false)}
        onTrackApplication={() => console.log("Tracking...")}
      />
    </div>
  );
};

export default ApplicationPortal;
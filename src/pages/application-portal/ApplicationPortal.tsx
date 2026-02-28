import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Globe, Zap } from 'lucide-react';

// --- Sub-Components ---
import PersonalInfoForm from './components/PersonalInfoForm';
import TravelInfoForm from './components/TravelInfoForm';
import DocumentUploadForm from './components/DocumentUploadForm';
import AdditionalInfoForm from './components/AdditionalInfoForm';
import ProgressTracker from './components/ProgressTracker';
import SuccessModal from './components/SuccessModal';

// --- Types ---
import { ApplicationFormData, ValidationError, Country } from '../../types';

const WHATSAPP_NUMBER = "919087612111";

const ApplicationPortal = () => {
  const [currentStep, setCurrentStep] = useState<string>('personal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<ValidationError[]>([]);

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

  // --- Country Data Logic ---
  const countries: Country[] = [
    {
      id: 'dubai', name: 'Dubai (UAE)', code: 'AE', flag: '🇦🇪',
      heroImage: '', heroImageAlt: '', tagline: 'Premium Travel', description: 'Dubai entry permit',
      visaTypes: [{
        id: 'tourist-30',
        name: '30 Days Tourist',
        price: 150,
        processingTime: '2-3 Days',
        description: 'Standard tourist visa for Dubai',
        duration: '30 Days',
        icon: 'Plane'
      }],
      processingTime: '2-3 Days',
      successRate: 99,
      pricing: { embassyFee: '0', serviceFee: 0, totalFee: 150, currency: 'USD', refundPolicy: 'Non-refundable' },
      requirements: [],
      timeline: [],
      testimonials: [],
      faqs: [],
      embassyInfo: { name: '', address: '', phone: '', email: '', website: '', workingHours: '', latitude: 0, longitude: 0 },
      recentUpdates: [],
      similarDestinations: [],
      stats: { totalApplications: 0, averageProcessingDays: 0, approvalRate: 0, rejectionReasons: [] }
    },
    {
      id: 'schengen', name: 'Schengen Area', code: 'EU', flag: '🇪🇺',
      heroImage: '', heroImageAlt: '', tagline: 'European Gateway', description: 'Schengen short stay visa',
      visaTypes: [{
        id: 'business',
        name: 'Business Visa',
        price: 200,
        processingTime: '15 Days',
        description: 'Business visa for Schengen countries',
        duration: '90 Days',
        icon: 'Briefcase'
      }],
      processingTime: '15 Days',
      successRate: 95,
      pricing: { embassyFee: '80', serviceFee: 0, totalFee: 200, currency: 'EUR', refundPolicy: 'Non-refundable' },
      requirements: [],
      timeline: [],
      testimonials: [],
      faqs: [],
      embassyInfo: { name: '', address: '', phone: '', email: '', website: '', workingHours: '', latitude: 0, longitude: 0 },
      recentUpdates: [],
      similarDestinations: [],
      stats: { totalApplications: 0, averageProcessingDays: 0, approvalRate: 0, rejectionReasons: [] }
    },
  ];

  const updateFormData = (section: keyof ApplicationFormData, data: any) => {
    setFormData(prev => ({ ...prev, [section]: data }));
  };

  const handleDocumentUpload = async (reqId: string, file: File) => {
    const newDoc = {
      id: Math.random().toString(36).substr(2, 9),
      requirementId: reqId,
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      url: URL.createObjectURL(file),
      uploadedAt: new Date().toISOString(),
      status: 'pending' as const
    };
    setFormData(prev => ({
      ...prev,
      documents: [...prev.documents.filter(d => d.requirementId !== reqId), newDoc]
    }));
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);

    // 1. CONSTRUCT COMPREHENSIVE WHATSAPP MANIFEST
    const p = formData.personalInfo;
    const t = formData.travelInfo;
    const a = formData.additionalInfo;
    const d = formData.documents;

    const message = `
*🚀 NEW VISA APPLICATION DOSSIER*
---------------------------------------
*IDENTIFICATION:*
• *Name:* ${p.firstName.toUpperCase()} ${p.lastName.toUpperCase()}
• *Email:* ${p.email}
• *Phone:* ${p.phone}
• *DOB:* ${p.dateOfBirth}
• *Nationality:* ${p.nationality.toUpperCase()}
• *Passport:* ${p.passportNumber}
• *Expiry:* ${p.passportExpiry}

*ROUTE DETAILS:*
• *Destination:* ${t.countryId.toUpperCase()}
• *Visa Type:* ${t.visaTypeId}
• *Travel Date:* ${t.travelDate}
• *Return Date:* ${t.returnDate}
• *Purpose:* ${t.purpose.toUpperCase()}

*SECURITY & BACKGROUND:*
• *Prev. Visa:* ${a.previousVisas ? 'YES' : 'NO'}
• *Criminal Record:* ${a.criminalRecord ? 'YES' : 'NO'}
• *Medical Case:* ${a.medicalConditions ? 'YES' : 'NO'}
• *Emergency Contact:* ${a.emergencyContact} (${a.emergencyPhone})

*DOSSIER DOCUMENTS:*
${d.map((doc, i) => `${i + 1}. ${doc.fileName}`).join('\n')}
---------------------------------------
*STATUS:* MANIFEST COMPLETED
_Please review the attached dossier for priority processing._
        `.trim();

    // 2. OPEN WHATSAPP
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // 3. SHOW SUCCESS MODAL
    setShowSuccess(true);
    setIsSubmitting(false);
  };

  const steps = [
    { id: 'personal', title: 'Identity', desc: 'Legal Manifest' },
    { id: 'travel', title: 'Travel', desc: 'Route Details' },
    { id: 'documents', title: 'Dossier', desc: 'File Upload' },
    { id: 'additional', title: 'Finalize', desc: 'Review' },
  ];

  const currentStepIndex = steps.findIndex(s => s.id === currentStep);
  const progressPercentage = ((currentStepIndex + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-[#FDFDFD] py-20 px-4 font-sans antialiased text-slate-900 selection:bg-blue-600/10">
      {/* Background Branding Elements */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-100 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          className="h-full bg-blue-600"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <header className="mb-20 text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-5 h-5 text-blue-600 fill-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Aviation Elite Protocol</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-950 tracking-tighter uppercase italic leading-none">
            Visa <span className="text-blue-600 not-italic font-light">Navigator.</span>
          </h1>
          <p className="text-slate-400 font-medium max-w-lg mx-auto italic">
            Initialize your global mobility dossier via our secure transmission desk.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Progress Manifest */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <ProgressTracker
              sections={steps.map((s, i) => ({
                id: s.id,
                title: s.title,
                description: s.desc,
                completed: currentStepIndex > i,
                fields: 10,
                completedFields: currentStepIndex > i ? 10 : 0,
                icon: "Check"
              }))}
              currentSection={currentStep}
              completionPercentage={Math.round(progressPercentage)}
              onSectionClick={(id) => setCurrentStep(id)}
            />

            <div className="mt-10 p-8 rounded-[2rem] bg-slate-50 border border-slate-100 space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Security Note</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed italic">
                Once submitted, your data is routed directly to our 24/7 Priority Support Desk via WhatsApp for immediate processing.
              </p>
            </div>
          </div>

          {/* Right: Active Filing Desk */}
          <main className="lg:col-span-8 bg-white p-8 md:p-16 rounded-[3rem] border border-slate-100 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.04)] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
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
                      { id: 'passport_front', name: 'Passport Front', description: 'Photo page clarity', format: ['jpg', 'pdf'], maxSize: 5000000, required: true, icon: 'FileText' },
                      { id: 'photo', name: 'Identity Photo', description: 'White background', format: ['jpg'], maxSize: 2000000, required: true, icon: 'User' }
                    ]}
                    uploadedDocuments={formData.documents}
                    onUpload={handleDocumentUpload}
                    onRemove={(id) => setFormData(prev => ({ ...prev, documents: prev.documents.filter(d => d.id !== id) }))}
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
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccess}
        applicationId={`VN-${Date.now().toString().slice(-6)}`}
        onClose={() => setShowSuccess(false)}
      />
    </div>
  );
};

export default ApplicationPortal;
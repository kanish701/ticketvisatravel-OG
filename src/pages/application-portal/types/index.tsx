import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { countriesData } from '../../../data/CountriesData';

// UI Components
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import ProgressTracker from '../components/ProgressTracker';
import PersonalInfoForm from '../components/PersonalInfoForm';
import TravelInfoForm from '../components/TravelInfoForm';
import DocumentUploadForm from '../components/DocumentUploadForm';
import AdditionalInfoForm from '../components/AdditionalInfoForm';
import SuccessModal from '../components/SuccessModal';

// Types
import {
  ApplicationFormData,
  FormSection,
  ValidationError,
  DocumentRequirement,
  UploadedDocument
} from '../../../types';

// Configuration
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz6b1PFaMnl6A81MXDvtCQIn9kbbuDyPrMmzy_qIFXvEZKYemhXHyMSAiYB1_QpshjD/exec";
const WHATSAPP_NUMBER = "919087612111";

const ApplicationPortal = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState('personal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [applicationId, setApplicationId] = useState('');
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const [formData, setFormData] = useState<ApplicationFormData>({
    personalInfo: { firstName: '', lastName: '', email: '', phone: '', dateOfBirth: '', nationality: '', passportNumber: '', passportExpiry: '' },
    travelInfo: { countryId: '', visaTypeId: '', travelDate: '', returnDate: '', purpose: '' },
    documents: [],
    additionalInfo: { previousVisas: false, criminalRecord: false, medicalConditions: false, emergencyContact: '', emergencyPhone: '' }
  });

  const documentRequirements: DocumentRequirement[] = [
    { id: 'passport', name: 'Passport Copy', description: 'Bio page (photo & details)', required: true, format: ['pdf', 'jpg'], maxSize: 10485760, icon: 'FileText' },
    { id: 'photo', name: 'Passport Photo', description: 'Recent, white background', required: true, format: ['jpg'], maxSize: 5242880, icon: 'Camera' }
  ];

  const [sections, setSections] = useState<FormSection[]>([
    { id: 'personal', title: 'Identity', description: 'Legal Manifest', icon: 'User', completed: false, fields: 8, completedFields: 0 },
    { id: 'travel', title: 'Travel Info', description: 'Travel Protocol', icon: 'Plane', completed: false, fields: 5, completedFields: 0 },
    { id: 'documents', title: 'Documents', description: 'File Transmission', icon: 'Upload', completed: false, fields: 2, completedFields: 0 },
    { id: 'additional', title: 'Additional Info', description: 'Final Declaration', icon: 'FileCheck', completed: false, fields: 2, completedFields: 0 }
  ]);

  useEffect(() => {
    updateSectionProgress();
  }, [formData]);

  const updateSectionProgress = () => {
    const updated = [...sections];
    updated[0].completedFields = Object.values(formData.personalInfo).filter(v => v !== '').length;
    updated[0].completed = updated[0].completedFields === 8;
    updated[1].completedFields = Object.values(formData.travelInfo).filter(v => v !== '').length;
    updated[1].completed = updated[1].completedFields === 5;
    const requiredIds = documentRequirements.filter(r => r.required).map(r => r.id);
    updated[2].completedFields = formData.documents.filter(d => requiredIds.includes(d.requirementId)).length;
    updated[2].completed = updated[2].completedFields === requiredIds.length;
    updated[3].completedFields = [formData.additionalInfo.emergencyContact, formData.additionalInfo.emergencyPhone].filter(v => v !== '').length;
    updated[3].completed = updated[3].completedFields === 2;
    setSections(updated);
  };

  const calculateProgress = () => {
    const total = sections.reduce((sum, s) => sum + s.fields, 0);
    const completed = sections.reduce((sum, s) => sum + s.completedFields, 0);
    return Math.round((completed / total) * 100);
  };

  const handleDocumentUpload = (requirementId: string, file: File) => {
    const newDoc: UploadedDocument = {
      id: `doc-${Date.now()}`,
      requirementId,
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      uploadedAt: new Date().toISOString(),
      status: 'pending',
      url: URL.createObjectURL(file)
    };
    setFormData(prev => ({
      ...prev,
      documents: [...prev.documents.filter(d => d.requirementId !== requirementId), newDoc]
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const newId = `VN-${Date.now().toString().slice(-6)}`;
    
    // WhatsApp Format
    const message = `*NEW VISA APPLICATION: ${newId}*%0A` +
      `--------------------------%0A` +
      `*Client:* ${formData.personalInfo.firstName} ${formData.personalInfo.lastName}%0A` +
      `*Destination:* ${formData.travelInfo.countryId}%0A` +
      `*Status:* Dossier Transmitted.`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
        mode: "no-cors",
      });
      setApplicationId(newId);
      setShowSuccessModal(true);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans antialiased text-slate-900 selection:bg-blue-600/10">
      <div className="pt-32 pb-24 max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10">
          <button onClick={() => navigate('/homepage')} className="hover:text-blue-600 transition-colors">Home</button>
          <Icon name="ChevronRight" size={10} className="text-slate-300" />
          <span className="text-slate-950 italic">Application Portal</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Progress Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <ProgressTracker
              sections={sections}
              currentSection={currentSection}
              completionPercentage={calculateProgress()}
              onSectionClick={setCurrentSection}
            />
            
            {/* Help Widget */}
            <div className="mt-8 p-8 rounded-[2.5rem] bg-slate-950 text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                  <Icon name="ShieldCheck" size={80} />
               </div>
               <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-4">Priority Support</h4>
               <p className="text-xs text-slate-400 font-medium leading-relaxed mb-6 italic">
                 "Our consultants are actively monitoring the manifest for any protocol deviations."
               </p>
               <button 
                  onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                  className="w-full py-4 bg-white/10 hover:bg-white text-white hover:text-slate-950 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border border-white/20 hover:border-white"
               >
                 Open Comms-Link
               </button>
            </div>
          </aside>

          {/* Form Content Area */}
          <main className="lg:col-span-8">
            <div className="bg-white p-8 md:p-16 rounded-[3.5rem] border border-slate-100 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.04)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSection}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {currentSection === 'personal' && (
                    <PersonalInfoForm
                      formData={formData.personalInfo}
                      onChange={(data) => setFormData(prev => ({ ...prev, personalInfo: data }))}
                      onNext={() => setCurrentSection('travel')}
                      errors={errors}
                    />
                  )}

                  {currentSection === 'travel' && (
                    <TravelInfoForm
                      formData={formData.travelInfo}
                      onChange={(data) => setFormData(prev => ({ ...prev, travelInfo: data }))}
                      onNext={() => setCurrentSection('documents')}
                      onBack={() => setCurrentSection('personal')}
                      errors={errors}
                      countries={countriesData}
                    />
                  )}

                  {currentSection === 'documents' && (
                    <DocumentUploadForm
                      requirements={documentRequirements}
                      uploadedDocuments={formData.documents}
                      onUpload={handleDocumentUpload}
                      onRemove={(id) => setFormData(prev => ({ ...prev, documents: prev.documents.filter(d => d.id !== id) }))}
                      onNext={() => setCurrentSection('additional')}
                      onBack={() => setCurrentSection('travel')}
                      errors={errors}
                    />
                  )}

                  {currentSection === 'additional' && (
                    <AdditionalInfoForm
                      formData={formData.additionalInfo}
                      onChange={(data) => setFormData(prev => ({ ...prev, additionalInfo: data }))}
                      onSubmit={handleSubmit}
                      onBack={() => setCurrentSection('documents')}
                      errors={errors}
                      isSubmitting={isSubmitting}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </main>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccessModal}
        applicationId={applicationId}
        onClose={() => setShowSuccessModal(false)}
      />
    </div>
  );
};

export default ApplicationPortal;
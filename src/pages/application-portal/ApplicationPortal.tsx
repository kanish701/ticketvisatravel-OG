import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Globe, Zap } from 'lucide-react';

// --- Sub-Components ---
import PersonalInfoForm from './components/PersonalInfoForm';
import TravelInfoForm from './components/TravelInfoForm';
import DocumentUploadForm from './components/DocumentUploadForm';
import AdditionalInfoForm from './components/AdditionalInfoForm';
import ProgressTracker from './components/ProgressTracker';

// --- Types ---
import { ApplicationFormData, ValidationError, Country, DocumentRequirement } from '../../types';
import { countriesData as countries } from '../../data/CountriesData';

const WHATSAPP_NUMBER = "919087612111";

const initialFormData: ApplicationFormData = {
  personalInfo: {
    firstName: '', lastName: '', email: '', phone: '', phoneCode: '',
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
};

const ApplicationPortal = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<string>('personal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const [formData, setFormData] = useState<ApplicationFormData>(initialFormData);

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
    
    // Resolve Labels
    const selectedCountry = countries.find(c => c.id === t.countryId);
    const selectedVisa = selectedCountry?.visaTypes.find(v => v.id === t.visaTypeId);
    
    // Dynamically import data for labels
    const { phoneCountries, visitPurposes } = await import('../../data/PortalData');
    const nationalityLabel = phoneCountries.find(c => c.value === p.nationality)?.label || p.nationality;
    const purposeLabel = visitPurposes.find(v => v.value === t.purpose)?.label || t.purpose;

    const message = `
*🚀 NEW VISA APPLICATION *
---------------------------------------
*IDENTIFICATION:*
• *Name:* ${p.firstName.toUpperCase()} ${p.lastName.toUpperCase()}
• *Email:* ${p.email}
• *Phone:* ${p.phoneCode} ${p.phone}
• *DOB:* ${p.dateOfBirth}
• *Nationality:* ${nationalityLabel.toUpperCase()}
• *Passport:* ${p.passportNumber.toUpperCase()}
• *Expiry:* ${p.passportExpiry}

*ROUTE DETAILS:*
• *Destination:* ${selectedCountry?.name || t.countryId.toUpperCase()}
• *Visa Type:* ${selectedVisa?.name || t.visaTypeId}
• *Travel Date:* ${t.travelDate}
• *Return Date:* ${t.returnDate}
• *Purpose:* ${purposeLabel.toUpperCase()}

*SECURITY & BACKGROUND:*
• *Prev. Visa:* ${a.previousVisas ? 'YES' : 'NO'}
• *Criminal Record:* ${a.criminalRecord ? 'YES' : 'NO'}
• *Medical Case:* ${a.medicalConditions ? 'YES' : 'NO'}
• *Emergency Contact:* ${a.emergencyContact.toUpperCase()} (${a.emergencyPhone})

*Mandatory Documents:*
${d.map((doc, i) => `${i + 1}. ${doc.fileName} (${(doc.fileSize / 1024).toFixed(0)} KB)`).join('\n')}

⚠️ *IMPORTANT:* PLEASE ATTACH THE ${d.length} DOCUMENTS LISTED ABOVE TO THIS CHAT.
---------------------------------------
*STATUS:* APPLICATION COMPLETED
_ If the documents image view is not visible in this chat, please send them in the chat again.
        `.trim();

    // 2. OPEN WHATSAPP
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // 3. TRANSITION TO SUCCESS STEP
    setCurrentStep('success');
    setIsSubmitting(false);
  };

  const resetFormAndRedirect = () => {
    setFormData(initialFormData);
    setCurrentStep('personal');
    navigate('/');
  };

  const steps = [
    { id: 'personal', title: 'Identity', desc: 'Legal Manifest' },
    { id: 'travel', title: 'Travel', desc: 'Route Details' },
    { id: 'documents', title: 'Dossier', desc: 'File Upload' },
    { id: 'additional', title: 'Finalize', desc: 'Review' },
    { id: 'success', title: 'Success', desc: 'Application Submitted' },
    { id: 'error', title: 'Error', desc: 'Application Failed' },
    
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
        {/* <header className="mb-20 text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-5 h-5 text-blue-600 fill-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Aviation Elite Protocol</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-950 tracking-tighter uppercase italic leading-none">
            Ticket Visa<span className="text-blue-600 not-italic font-light">Travel</span>
          </h1>
          <p className="text-slate-400 font-medium max-w-lg mx-auto italic">
            Initialize your global mobility dossier via our secure transmission desk.
          </p>
        </header> */}

        <div className={`grid grid-cols-1 ${['success', 'error'].includes(currentStep) ? '' : 'lg:grid-cols-12'} gap-16 items-start`}>
          {/* Left: Progress Manifest */}
          {!['success', 'error'].includes(currentStep) && (
            <div className="lg:col-span-4 lg:sticky lg:top-32">
            <ProgressTracker
              sections={steps
                .filter(s => !['success', 'error'].includes(s.id))
                .map((s, i, arr) => ({
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
              onSectionClick={(id) => ['success', 'error'].includes(id) ? null : setCurrentStep(id)}
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
          )}

          {/* Right: Active Filing Desk */}
          <main className={`${['success', 'error'].includes(currentStep) ? 'max-w-3xl mx-auto' : 'lg:col-span-8'} bg-white p-8 md:p-16 rounded-[3rem] border border-slate-100 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.04)] relative w-full`}>
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
                    requirements={
                      (countries.find(c => c.id === formData.travelInfo.countryId)?.requirements.map(req => ({
                        id: req.id,
                        name: req.title,
                        description: req.description,
                        format: ['jpg', 'png', 'pdf'],
                        maxSize: 5 * 1024 * 1024, // 5MB default
                        required: req.mandatory,
                        icon: req.icon
                      })) as DocumentRequirement[]) || [
                        { id: 'passport_front', name: 'Passport Front', description: 'Photo page clarity', format: ['jpg', 'pdf'], maxSize: 5000000, required: true, icon: 'FileText' },
                        { id: 'photo', name: 'Identity Photo', description: 'White background', format: ['jpg'], maxSize: 2000000, required: true, icon: 'User' }
                      ]
                    }
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

                {currentStep === 'success' && (
                  <div className="flex flex-col items-center text-center space-y-12 py-10">
                    <div className="relative w-32 h-32">
                      <motion.div 
                        initial={{ scale: 0 }} animate={{ scale: 1 }}
                        className="absolute inset-0 bg-blue-50 rounded-[2.5rem] rotate-12" 
                      />
                      <motion.div 
                        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}
                        className="absolute inset-0 bg-blue-600 rounded-[2.5rem] flex items-center justify-center shadow-xl shadow-blue-100"
                      >
                        <ShieldCheck className="w-12 h-12 text-white" />
                      </motion.div>
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase italic leading-none tracking-tighter">
                        Documents <span className="text-blue-600 not-italic">Transmitted.</span>
                      </h2>
                      <p className="text-slate-400 text-sm font-medium max-w-sm mx-auto">
                        Your application manifest and documents have been successfully routed to our WhatsApp Priority Desk.
                      </p>
                    </div>

                    <div className="w-full max-w-md bg-slate-50 rounded-[2.5rem] p-10 space-y-6 border border-slate-100 text-left">
                      <div className="space-y-2 text-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Transmission Log</span>
                        <div className="h-px bg-slate-200" />
                      </div>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                        {[
                          { label: 'Applicant', value: `${formData.personalInfo.firstName} ${formData.personalInfo.lastName}` },
                          { label: 'Dossier ID', value: `VN-${Date.now().toString().slice(-6)}` },
                          { label: 'Destination', value: countries.find(c => c.id === formData.travelInfo.countryId)?.name || 'Global' },
                          { label: 'Assets', value: `${formData.documents.length} Files Listed` }
                        ].map((item, i) => (
                          <motion.div 
                            key={item.label}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="space-y-1"
                          >
                            <label className="text-[9px] font-bold text-slate-400 uppercase">{item.label}</label>
                            <p className="text-[11px] font-black text-slate-900 uppercase truncate">{item.value}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="flex flex-col items-center gap-6"
                    >
                      <div className="flex items-center gap-3 px-6 py-2 bg-blue-50 text-blue-600 rounded-full border border-blue-100">
                        <Zap className="w-4 h-4 fill-blue-600" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Priority Processing Active</span>
                      </div>

                      <button 
                        onClick={resetFormAndRedirect}
                        className="group flex items-center gap-12 bg-slate-950 text-white pl-12 pr-4 py-4 rounded-full hover:bg-blue-600 transition-all duration-500 shadow-2xl shadow-slate-900/10"
                      >
                        <span className="text-[11px] font-black uppercase tracking-[0.4em]">Finalize & Close</span>
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all duration-500">
                          <Globe className="w-4 h-4" />
                        </div>
                      </button>
                    </motion.div>
                  </div>
                )}

                {currentStep === 'error' && (
                  <div className="flex flex-col items-center text-center space-y-8 py-20">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
                      <ShieldCheck className="w-10 h-10" />
                    </div>
                    <h2 className="text-2xl font-black text-slate-950 uppercase italic tracking-tighter">Transmission Interrupted</h2>
                    <p className="text-slate-400 text-sm max-w-xs mx-auto">We encountered an issue during secure transmission. Please review your data and try again.</p>
                    <button onClick={() => setCurrentStep('additional')} className="text-blue-600 font-bold uppercase text-[10px] tracking-widest hover:underline">Return to Review</button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>

    </div>
  );
};

export default ApplicationPortal;
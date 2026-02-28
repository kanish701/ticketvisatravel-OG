import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Upload, CheckCircle, Trash2, FileText, 
    ArrowRight, ArrowLeft, ShieldCheck, AlertCircle,
    Eye, X
} from 'lucide-react';
import { DocumentRequirement, UploadedDocument, ValidationError } from '../../../types';

interface DocumentUploadFormProps {
  requirements: DocumentRequirement[];
  uploadedDocuments: UploadedDocument[];
  onUpload: (requirementId: string, file: File) => void;
  onRemove: (documentId: string) => void;
  onNext: () => void;
  onBack: () => void;
  errors: ValidationError[];
}

const DocumentUploadForm = ({ requirements, uploadedDocuments, onUpload, onRemove, onNext, onBack, errors }: DocumentUploadFormProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeReqId, setActiveReqId] = useState<string | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && activeReqId) {
      onUpload(activeReqId, e.target.files[0]);
    }
    if (fileInputRef.current) fileInputRef.current.value = '';
    setActiveReqId(null);
  };

  const triggerUpload = (reqId: string) => {
    setActiveReqId(reqId);
    fileInputRef.current?.click();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 py-8 animate-in fade-in duration-500 font-sans">
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        onChange={handleFileSelect} 
        accept=".jpg,.jpeg,.png,.pdf"
      />

      <div className="space-y-4">
        {requirements.map((req, idx) => {
          const uploaded = uploadedDocuments.find(d => d.requirementId === req.id);
          const error = errors.find(e => e.field === req.id);

          return (
            <div 
              key={req.id} 
              className={`group relative py-8 border-b transition-all duration-500 ${
                error ? 'border-red-200 bg-red-50/30 px-6 rounded-2xl' : 'border-slate-100 hover:border-blue-600'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                {/* --- Requirement Info --- */}
                <div className="flex items-start gap-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                    uploaded ? 'bg-green-50 text-green-600' : 'bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600'
                  }`}>
                    {uploaded ? <CheckCircle className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Requirement 0{idx + 1}</span>
                      {req.required && <span className="text-[8px] bg-red-50 text-red-500 px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter">Mandatory</span>}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 tracking-tight">{req.name}</h4>
                    <p className="text-sm text-slate-500 font-light mt-1">{req.description}</p>
                  </div>
                </div>

                {/* --- Upload / Action Area --- */}
                <div className="flex items-center gap-4">
                  <AnimatePresence mode="wait">
                    {uploaded ? (
                      <motion.div 
                        initial={{ opacity: 0, x: 10 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        exit={{ opacity: 0, x: -10 }}
                        className="flex items-center gap-3"
                      >
                        <div className="text-right hidden sm:block">
                          <p className="text-xs font-bold text-slate-900 truncate max-w-[150px] uppercase tracking-tighter">{uploaded.fileName}</p>
                          <p className="text-[10px] text-green-600 font-black uppercase tracking-widest">Verified Slot</p>
                        </div>
                        <button 
                          onClick={() => onRemove(uploaded.id)}
                          className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </motion.div>
                    ) : (
                      <motion.button
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        onClick={() => triggerUpload(req.id)}
                        className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-50 text-slate-900 text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                      >
                        <Upload className="w-4 h-4" />
                        Attach File
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* --- Error Display --- */}
              {error && (
                <div className="mt-4 flex items-center gap-2 text-red-500">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <p className="text-xs font-bold uppercase tracking-tighter">{error.message}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* --- Footer Controls --- */}
      <div className="pt-12 flex flex-col items-center gap-12">
        <div className="flex items-center gap-3 px-6 py-2 bg-slate-50 rounded-full border border-slate-100">
          <ShieldCheck className="w-4 h-4 text-blue-600" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Dossier Security: Encrypted PII Protocol</span>
        </div>

        <div className="flex w-full justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back
          </button>

          <button 
            onClick={onNext}
            className="group flex items-center gap-12 bg-slate-950 text-white pl-12 pr-4 py-4 rounded-full hover:bg-blue-600 transition-all duration-500 shadow-2xl shadow-slate-900/10"
          >
            <span className="text-[11px] font-black uppercase tracking-[0.4em]">
              Review & Submit
            </span>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all duration-500">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
        body { font-family: 'Open Sans', sans-serif; }
      `}</style>
    </div>
  );
};

export default DocumentUploadForm;
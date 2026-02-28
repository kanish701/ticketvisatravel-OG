import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, MessageSquare, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  applicationId: string;
  onClose: () => void;
  onTrackApplication?: () => void;
}

const SuccessModal = ({ isOpen, applicationId, onClose }: SuccessModalProps) => {
  // Lock scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 font-sans">
          
          {/* --- Minimal Glass Backdrop --- */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
            onClick={onClose}
          />

          {/* --- Modal Content --- */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white w-full max-w-md rounded-[3rem] p-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] text-center overflow-hidden border border-slate-100"
          >
            {/* Background Accent */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 to-indigo-400" />
            
            {/* Success Icon Group */}
            <div className="relative w-24 h-24 mx-auto mb-8">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="absolute inset-0 bg-green-50 rounded-[2rem] rotate-12" 
              />
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute inset-0 bg-blue-600 rounded-[2rem] flex items-center justify-center shadow-xl shadow-blue-200"
              >
                <Check size={40} className="text-white stroke-[3px]" />
              </motion.div>
            </div>

            <h2 className="text-4xl font-black text-slate-950 mb-3 tracking-tighter uppercase italic leading-none">
              Dossier <br /> <span className="text-blue-600 not-italic">Transmitted.</span>
            </h2>
            
            <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8 px-4">
              Your application manifest and documents have been successfully routed to our <span className="text-slate-900 font-bold">WhatsApp Priority Desk</span>.
            </p>

            {/* Reference Box */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 mb-10 relative group">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white border border-slate-100 rounded-full">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Reference ID</span>
              </div>
              <p className="text-2xl font-black text-slate-950 tracking-[0.2em] uppercase">
                {applicationId}
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                Submission Protocol Complete
              </div>

              <button 
                onClick={onClose}
                className="group w-full flex items-center justify-between bg-slate-950 text-white pl-10 pr-3 py-3 rounded-full hover:bg-blue-600 transition-all duration-500 shadow-2xl shadow-slate-900/20"
              >
                <span className="text-[11px] font-black uppercase tracking-[0.4em]">
                  Return to Portal
                </span>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all duration-500">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>

              <div className="pt-4 flex items-center justify-center gap-2">
                <Zap className="w-3 h-3 text-blue-500" />
                <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">
                  Estimated Response: 2-4 Hours
                </span>
              </div>
            </div>

          </motion.div>
        </div>
      )}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
        .font-sans { font-family: 'Open Sans', sans-serif; }
      `}</style>
    </AnimatePresence>
  );
};

export default SuccessModal;
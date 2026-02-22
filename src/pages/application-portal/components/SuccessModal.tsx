import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

interface SuccessModalProps {
  isOpen: boolean;
  applicationId: string;
  onClose: () => void;
  onTrackApplication?: () => void;
}

const SuccessModal = ({ isOpen, applicationId, onClose, onTrackApplication }: SuccessModalProps) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl text-center overflow-hidden"
        >
          {/* Confetti / Success Graphic */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="Check" size={40} className="text-green-600" />
          </div>

          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">Application Received</h2>
          <p className="text-slate-500 mb-8">
            Your application has been successfully submitted to our processing team.
          </p>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-8">
            <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Reference ID</p>
            <p className="text-2xl font-mono font-bold text-slate-900 tracking-wider">{applicationId}</p>
          </div>

          <div className="space-y-3">
            {onTrackApplication && (
              <Button fullWidth onClick={onTrackApplication} className="bg-slate-900 text-white hover:bg-slate-800">
                Track Status
              </Button>
            )}
            <Button fullWidth variant="ghost" onClick={onClose}>
              Close
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SuccessModal;
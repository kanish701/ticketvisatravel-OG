import { FormSection } from '../../../types';
import { Check, Compass, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProgressTrackerProps {
  sections: FormSection[];
  currentSection: string;
  completionPercentage: number;
  onSectionClick: (id: string) => void;
}

const ProgressTracker = ({ sections, currentSection, completionPercentage, onSectionClick }: ProgressTrackerProps) => {
  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.02)] font-sans sticky top-32">
      
      {/* --- Technical Header --- */}
      <div className="flex items-end justify-between mb-8">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-blue-600 animate-spin-slow" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Filing Status</span>
          </div>
          <h3 className="text-xl font-black text-slate-900 uppercase italic tracking-tighter">Manifest Audit</h3>
        </div>
        <div className="text-right">
          <span className="text-3xl font-black text-blue-600 italic leading-none">{completionPercentage}%</span>
          <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest mt-1">Completion</p>
        </div>
      </div>

      {/* --- Minimalist Linear Progress --- */}
      <div className="relative w-full h-[3px] bg-slate-50 rounded-full mb-10 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${completionPercentage}%` }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute h-full bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]"
        />
      </div>

      {/* --- Step Manifest --- */}
      <div className="space-y-2">
        {sections.map((section, idx) => {
          const isActive = section.id === currentSection;
          const isCompleted = section.completed;

          return (
            <div 
              key={section.id}
              onClick={() => (isCompleted || isActive) ? onSectionClick(section.id) : null}
              className={`group flex items-center gap-5 p-4 rounded-2xl transition-all duration-500 ${
                isActive 
                  ? 'bg-slate-950 text-white shadow-xl shadow-slate-900/20 translate-x-2' 
                  : 'text-slate-500 hover:bg-slate-50'
              } ${isCompleted || isActive ? 'cursor-pointer' : 'cursor-not-allowed opacity-40'}`}
            >
              {/* Numeric / Status Indicator */}
              <div className={`
                w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-[10px] font-black transition-all duration-500
                ${isCompleted && !isActive ? 'bg-blue-50 text-blue-600' : 
                  isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}
              `}>
                {isCompleted && !isActive ? <Check size={14} strokeWidth={3} /> : <span>0{idx + 1}</span>}
              </div>
              
              <div className="flex-1">
                <h4 className={`text-[11px] font-black uppercase tracking-[0.15em] leading-none mb-1 ${
                  isActive ? 'text-white' : 'text-slate-900'
                }`}>
                  {section.title}
                </h4>
                <p className={`text-[9px] font-medium tracking-tight ${
                  isActive ? 'text-blue-300/80' : 'text-slate-400'
                }`}>
                  {isCompleted ? 'Verification Success' : isActive ? 'Active Protocol' : 'Pending Review'}
                </p>
              </div>

              {isActive && (
                <motion.div 
                  layoutId="activePointer"
                  className="w-1 h-4 bg-blue-500 rounded-full"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* --- Trust Badge Footer --- */}
      <div className="mt-10 pt-8 border-t border-slate-50">
        <div className="flex items-center gap-3 px-4 py-3 bg-slate-50/50 rounded-2xl border border-slate-100">
          <ShieldCheck className="w-4 h-4 text-blue-600" />
          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-tight">
            ISO-27001 <br /> Data Integrity Active
          </span>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default ProgressTracker;
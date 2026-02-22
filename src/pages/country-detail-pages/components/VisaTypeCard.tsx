import { motion } from 'framer-motion';
import { ArrowRight, Globe, ShieldCheck, ScrollText, ChevronRight } from 'lucide-react';
import { VisaType } from '../../../types';

interface VisaTypeCardProps {
  visaType: VisaType;
  index: number;
  onApply: (visaType: VisaType) => void;
}

const VisaTypeCard = ({ visaType, index, onApply }: VisaTypeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <div 
        onClick={() => onApply(visaType)}
        className="group relative h-full bg-white border border-slate-100 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-2xl transition-all duration-700 cursor-pointer overflow-hidden rounded-sm"
      >
        {/* Heritage Accents */}
        <div className="absolute top-0 left-0 w-1 h-0 bg-blue-900 group-hover:h-full transition-all duration-700" />
        <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
          <ScrollText className="w-20 h-20 text-blue-900" />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          
          {/* 1. HEADER SECTION */}
          <div className="flex justify-between items-start mb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                 <ShieldCheck className="w-3 h-3 text-blue-900/40" />
                 <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-900/40">Verified Path</span>
              </div>
              <span className="inline-block px-3 py-1 border border-slate-100 text-[9px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50/50">
                {visaType.duration} Jurisdiction
              </span>
            </div>
            <span className="text-[10px] font-serif italic text-slate-200">Ref: VT-0{index + 1}</span>
          </div>

          {/* 2. CORE CONTENT */}
          <div className="space-y-4 mb-10">
            <h3 className="text-3xl font-serif italic text-slate-900 group-hover:text-blue-900 transition-colors leading-tight">
              {visaType.name}
            </h3>
            <p className="text-sm font-medium text-slate-400 leading-relaxed uppercase tracking-tighter line-clamp-3">
              {visaType.description}
            </p>
          </div>

          {/* 3. FEE LEDGER - Formal Style */}
          <div className="mt-auto space-y-6">
            <div className="flex items-end justify-between border-t border-slate-50 pt-8">
              <div className="space-y-1">
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-300">Certified Fee (INR)</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-serif italic text-slate-900 group-hover:text-blue-900 transition-colors tracking-tighter">
                    ₹{visaType.price.toLocaleString()}
                  </span>
                  <span className="text-[10px] font-black text-slate-300 uppercase">statutory*</span>
                </div>
              </div>

              {/* Action Button - Minimalist Link */}
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-blue-900 group-hover:gap-5 transition-all">
                Initiate <ArrowRight size={14} />
              </div>
            </div>
          </div>

        </div>

        {/* Subtle hover reveal for background grid */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.02] transition-opacity" style={{ 
          backgroundImage: `radial-gradient(#1e3a8a 1px, transparent 1px)`, 
          backgroundSize: '20px 20px' 
        }} />
      </div>
    </motion.div>
  );
};

export default VisaTypeCard;
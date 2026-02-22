import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Clock, CheckCircle, Users, MessageCircle } from 'lucide-react';
import { Country, Currency } from '../../../types';

interface StickySidebarProps {
  country: Country;
  selectedCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  onWhatsAppClick: () => void;
  onApplyClick: () => void;
}

const StickySidebar = ({
  country,
  onWhatsAppClick,
  onApplyClick
}: StickySidebarProps) => {

  const formatPrice = (price: number | string) => {
    if (typeof price === 'string') return price;
    return price.toLocaleString('en-IN');
  };

  return (
    <>
      {/* --- DESKTOP BUREAU SIDEBAR --- */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:block sticky top-32 w-full"
      >
        <div className="bg-white border border-slate-100 p-2 shadow-[0_40px_100px_rgba(0,0,0,0.03)] rounded-sm">
          <div className="border border-blue-900/10 p-8 space-y-10 relative overflow-hidden">
            
            {/* Background Seal Watermark */}
            <div className="absolute -top-10 -right-10 opacity-[0.02] pointer-events-none">
               <ShieldCheck size={200} className="text-blue-900" />
            </div>

            {/* 1. PRICING LEDGER */}
            <div className="text-center space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-900/40">Total Certified Fee</span>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl font-serif italic text-blue-900 pt-2">₹</span>
                <span className="text-6xl font-serif italic text-slate-900 tracking-tighter">
                  {formatPrice(country.pricing.totalFee)}
                </span>
              </div>
              <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest italic font-serif">Inclusive of all jurisdictional taxes</p>
            </div>

            {/* 2. COST BREAKDOWN (Official Receipt Style) */}
            <div className="space-y-6">
               <div className="space-y-4">
                  <div className="flex justify-between items-center group">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-blue-900 transition-colors">Embassy Fee</span>
                    <span className="font-serif italic text-slate-900">
                      {isNaN(Number(country.pricing.embassyFee))
                        ? country.pricing.embassyFee
                        : `₹${formatPrice(Number(country.pricing.embassyFee))}`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center group">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-blue-900 transition-colors">Processing Fee</span>
                    <span className="font-serif italic text-slate-900">
                      ₹{formatPrice(country.pricing.serviceFee)}
                    </span>
                  </div>
               </div>

               <div className="h-px w-full border-t border-dashed border-slate-200" />

               {/* Refund Protocol Note */}
               <div className="flex items-start gap-4 p-4 bg-[#FDFCFB] border border-slate-50">
                  <ShieldCheck size={16} className="text-blue-900/30 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-blue-900 uppercase tracking-widest">Bureau Protocol</p>
                    <p className="text-[11px] font-medium text-slate-500 italic font-serif leading-relaxed">
                       {country.pricing.refundPolicy}
                    </p>
                  </div>
               </div>
            </div>

            {/* 3. PRIMARY ACTIONS */}
            <div className="space-y-4">
              <button
                onClick={onApplyClick}
                className="w-full bg-blue-900 hover:bg-black text-white py-5 text-[10px] font-black uppercase tracking-[0.5em] transition-all flex items-center justify-center gap-4 group"
              >
                Initiate Dossier <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>

              <button
                onClick={onWhatsAppClick}
                className="w-full border border-slate-100 text-slate-400 py-4 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-slate-50 hover:text-blue-900 transition-all flex items-center justify-center gap-3"
              >
                <MessageCircle size={14} className="text-green-600" />
                Expert Advisor
              </button>
            </div>

            {/* 4. VERIFICATION FOOTER */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-50">
               {[
                 { label: "Time", val: country.processingTime, icon: <Clock size={12}/> },
                 { label: "Clearance", val: `${country.successRate}%`, icon: <CheckCircle size={12}/> },
                 { label: "History", val: "6 Yrs", icon: <Users size={12}/> }
               ].map((stat, i) => (
                 <div key={i} className="text-center space-y-1">
                    <div className="text-blue-900/20 flex justify-center mb-1">{stat.icon}</div>
                    <p className="text-[8px] font-black text-slate-300 uppercase tracking-tighter">{stat.label}</p>
                    <p className="text-[10px] font-bold text-slate-900 uppercase">{stat.val}</p>
                 </div>
               ))}
            </div>

          </div>
        </div>
      </motion.div>

      {/* --- MOBILE CONCIERGE BAR --- */}
      <div className="lg:hidden fixed bottom-8 left-4 right-4 z-50">
        <div className="bg-white p-1 shadow-2xl rounded-sm">
           <div className="border border-blue-900/10 p-4 flex items-center justify-between">
              <div>
                <p className="text-[8px] text-slate-400 font-black uppercase tracking-widest">Certified Amount</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-serif italic text-blue-900">₹</span>
                  <span className="text-xl font-serif italic text-slate-900">{formatPrice(country.pricing.totalFee)}</span>
                </div>
              </div>

              <button
                onClick={onApplyClick}
                className="bg-blue-900 text-white px-8 py-4 text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-3"
              >
                Apply <ArrowRight size={14} />
              </button>
           </div>
        </div>
      </div>
    </>
  );
};

export default StickySidebar;
import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Award, ShieldCheck, Globe, Users, Star } from 'lucide-react';

const Counter = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const prefix = value.match(/^[^0-9]*/) || "";
  const suffix = value.replace(/[^%a-zA-Z+]/g, '');

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 50 });

  useEffect(() => {
    if (isInView) motionValue.set(numericValue);
  }, [isInView, numericValue, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Number.isInteger(numericValue) 
          ? Math.floor(latest).toLocaleString() 
          : latest.toFixed(1);
      }
    });
  }, [springValue, numericValue]);

  return (
    <span className="font-serif italic text-blue-900 tracking-tighter">
      <span>{prefix}</span>
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </span>
  );
};

const TrustBar = ({ metrics }: any) => {
  return (
    <section className="py-24 bg-[#FDFCFB] relative overflow-hidden border-y border-slate-100">
      
      {/* Editorial Guilloché Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="h-full w-full" style={{ 
          backgroundImage: `url("https://www.transparenttextures.com/patterns/graphy.png")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header - Classic Center Alignment */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-blue-900/20" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-900">Proven Performance</span>
            <div className="h-[1px] w-12 bg-blue-900/20" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif italic text-slate-900">
            A Legacy of <span className="not-italic text-blue-900 font-black">Success.</span>
          </h2>
        </div>

        {/* The Heritage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-slate-100 bg-white shadow-2xl">
          {metrics.map((metric: any, index: number) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 border-b md:border-b-0 md:border-r border-slate-100 last:border-0 relative group overflow-hidden"
            >
              {/* Internal Frame Decoration */}
              <div className="absolute inset-4 border border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                {/* Minimalist Header */}
                <div className="flex items-center justify-between">
                  <div className="text-blue-900/20 group-hover:text-blue-900 transition-colors duration-500">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black text-slate-300 group-hover:text-blue-900 transition-colors uppercase tracking-widest">
                    Record 0{index + 1}
                  </span>
                </div>

                {/* Animated Value */}
                <div className="text-5xl md:text-6xl">
                  <Counter value={metric.value} />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">
                    {metric.label}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed italic font-serif">
                    {metric.description}
                  </p>
                </div>
              </div>

              {/* Subtle Blue Tint on Hover */}
              <div className="absolute inset-0 bg-blue-900/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Global Accreditation Footer */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
           <div className="flex items-center gap-2"><Award className="w-5 h-5"/> <span className="text-[10px] font-bold uppercase tracking-widest">IATA Certified</span></div>
           <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5"/> <span className="text-[10px] font-bold uppercase tracking-widest">GDPR Secure</span></div>
           <div className="flex items-center gap-2"><Users className="w-5 h-5"/> <span className="text-[10px] font-bold uppercase tracking-widest">ISO 9001 Desk</span></div>
        </div>

      </div>
    </section>
  );
};

export default TrustBar;
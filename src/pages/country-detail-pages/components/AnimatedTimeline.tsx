import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Search, Landmark, PlaneTakeoff, Clock, ShieldCheck } from 'lucide-react';

const TimelineStepItem = ({ step, index, progress, threshold }: any) => {
  const circleBorder = useTransform(progress, [threshold - 0.1, threshold], ['#e2e8f0', '#1e3a8a']);
  const iconOpacity = useTransform(progress, [threshold - 0.1, threshold], [0.2, 1]);
  const yShift = useTransform(progress, [threshold - 0.1, threshold], [15, 0]);

  return (
    <motion.div 
      style={{ y: yShift }}
      className="relative flex items-start gap-8 md:gap-16 mb-20 last:mb-0"
    >
      {/* 1. THE STATUS NODE */}
      <div className="relative z-20 flex-shrink-0 mt-2">
        <motion.div 
          style={{ borderColor: circleBorder }}
          className="w-12 h-12 md:w-16 md:h-16 bg-white border-[1px] flex items-center justify-center rounded-full shadow-sm transition-all duration-700"
        >
          <motion.div style={{ opacity: iconOpacity }} className="text-blue-900">
            {index === 0 && <Search size={24} />}
            {index === 1 && <FileText size={24} />}
            {index === 2 && <Landmark size={24} />}
            {index === 3 && <PlaneTakeoff size={24} />}
          </motion.div>
        </motion.div>
      </div>

      {/* 2. THE CONTENT LEDGER */}
      <div className="flex-1">
        <div className="group relative bg-white border border-slate-100 p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-500 rounded-sm">
          {/* Official Stamp Decoration */}
          <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
            <span className="text-6xl font-serif italic text-blue-900">0{index + 1}</span>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-900/40">Phase 0{index + 1}</span>
                <h3 className="text-2xl md:text-3xl font-serif italic text-slate-900">
                  {step.title}
                </h3>
              </div>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-slate-100 bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400 w-fit">
                <Clock size={12} /> {step.duration}
              </div>
            </div>

            <p className="text-slate-500 text-sm md:text-lg leading-relaxed font-medium max-w-2xl">
              {step.description}
            </p>
          </div>
          
          {/* Visual Divider */}
          <div className="absolute bottom-0 left-0 h-[2px] bg-blue-900 transition-all duration-700 w-0 group-hover:w-full" />
        </div>
      </div>
    </motion.div>
  );
};

const AnimatedTimeline = ({ steps }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  return (
    <section ref={containerRef} className="relative py-32 bg-[#FDFCFB] overflow-hidden">
      
      {/* Precision Grid Texture */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.02]">
        <div className="h-full w-full" style={{ 
          backgroundImage: `linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)`, 
          backgroundSize: '100px 100px' 
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Bureau Header */}
        <div className="text-center mb-32 space-y-6">
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-blue-900/20" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-900">The Roadmap</span>
            <div className="h-[1px] w-12 bg-blue-900/20" />
          </div>
          <h2 className="text-5xl md:text-7xl font-serif italic text-slate-900 leading-none">
            Path to <span className="not-italic font-black text-blue-900">Success.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium italic font-serif max-w-xl mx-auto">
            "A simplified 4-step process designed for total clarity and fast results."
          </p>
        </div>

        <div className="relative">
          {/* Main Spine Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-16 w-[1px] bg-slate-100 z-0" />

          {/* Animated Gold Progress Line */}
          <motion.div 
            className="absolute left-6 md:left-8 top-0 w-[1px] bg-blue-900 z-10 origin-top shadow-[0_0_15px_rgba(30,58,138,0.3)]"
            style={{ scaleY, height: '100%' }}
          />

          <div className="relative z-20">
            {steps.map((step: any, index: number) => (
              <TimelineStepItem 
                key={step.id} 
                step={step} 
                index={index} 
                progress={scrollYProgress}
                threshold={(index + 0.5) / steps.length}
              />
            ))}
          </div>
        </div>

        {/* Safe-Exit Badge */}
        <div className="mt-20 p-10 border border-slate-100 bg-white flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-5">
              <ShieldCheck className="w-10 h-10 text-green-600 opacity-20" />
              <div className="text-left">
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-900">Secure Protocol</p>
                 <p className="text-sm font-serif italic text-slate-400">Your documents are processed through our 6-year verified clearing desk.</p>
              </div>
           </div>
           <button className="bg-blue-900 text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-black transition-all">
              Consult Expert
           </button>
        </div>
      </div>
    </section>
  );
};

export default AnimatedTimeline;
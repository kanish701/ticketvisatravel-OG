import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, FileCheck, Landmark, PlaneTakeoff, Globe, ShieldCheck } from 'lucide-react';

const STEPS = [
  {
    id: 1,
    title: "Initial Consultation",
    label: "PHASE I",
    description: "Begin your journey with a comprehensive profile evaluation by our senior processors.",
    icon: <MapPin className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Document Audit",
    label: "PHASE II",
    description: "Our 3-tier internal audit ensures every document meets strict embassy standards.",
    icon: <FileCheck className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Embassy Filing",
    label: "PHASE III",
    description: "Official submission through our prioritized diplomatic channels for faster clearance.",
    icon: <Landmark className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Grant & Delivery",
    label: "PHASE IV",
    description: "Secure delivery of your approved visa and travel kit directly to your inbox.",
    icon: <PlaneTakeoff className="w-6 h-6" />,
  }
];

const ProcessTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 bg-[#FDFCFB] relative overflow-hidden">

      {/* Editorial Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(#1e3a8a 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-blue-900/20" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-900">Official Protocol</span>
            <div className="h-[1px] w-12 bg-blue-900/20" />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-serif italic text-slate-900 mb-6">
            Our Proven <span className="not-italic text-blue-900 font-black">Method.</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto font-medium leading-relaxed">
            A transparent, four-stage ecosystem designed to convert complex immigration laws into successful travel outcomes.
          </p>
        </div>

        {/* Timeline Implementation */}
        <div className="relative">

          {/* Central Vertical Line (The "Spine") */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-slate-100">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-blue-900 origin-top shadow-[0_0_15px_rgba(30,58,138,0.5)]"
            />
          </div>

          <div className="space-y-24">
            {STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={step.id} className="relative flex items-center justify-between">

                  {/* Left Content (or Spacer) */}
                  <div className={`w-[42%] ${isEven ? 'text-right' : 'order-last text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="space-y-3"
                    >
                      <span className="text-[10px] font-black text-blue-900/30 tracking-widest uppercase italic">
                        {step.label}
                      </span>
                      <h3 className="text-2xl font-serif italic text-slate-900 font-bold">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Central Node (The Marker) */}
                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="w-14 h-14 bg-white border border-slate-100 shadow-xl flex items-center justify-center text-blue-900 rounded-full group hover:bg-blue-900 hover:text-white transition-all duration-500"
                    >
                      {step.icon}
                      {/* Pulse effect for current/active feel */}
                      <div className="absolute inset-0 rounded-full border border-blue-900 animate-ping opacity-10 group-hover:hidden" />
                    </motion.div>
                  </div>

                  {/* Right Spacer (or Content) */}
                  <div className="w-[42%]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Professional Footer Trust-Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-8 bg-blue-900 text-white flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-blue-300" />
            <div className="text-left">
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-300">Data Integrity</p>
              <p className="text-sm font-serif italic">Every application is handled within a secure diplomatic framework.</p>
            </div>
          </div>
          <a
            href="tel:9087612111"
            className="px-8 py-3 bg-white text-blue-900 text-xs font-bold uppercase tracking-widest hover:bg-blue-50 transition-colors inline-block cursor-pointer"
          >
            Consult a Specialist
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ProcessTimeline;
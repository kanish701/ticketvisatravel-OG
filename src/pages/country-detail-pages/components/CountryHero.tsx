import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { ArrowLeft, Clock, ShieldCheck, Globe, ChevronRight } from 'lucide-react';
import { Country } from '../../../types';

interface CountryHeroProps {
  country: Country;
}

const CountryHero = ({ country }: CountryHeroProps) => {
  const navigate = useNavigate();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div ref={ref} className="relative w-full h-[500px] lg:h-[650px] overflow-hidden bg-[#0A0F1A]">

      {/* 1. CINEMATIC ATMOSPHERE */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img
          src={country.heroImage}
          alt={country.heroImageAlt || country.name}
          className="w-full h-full object-cover scale-105"
        />
        {/* Deep Archival Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A]/60 via-transparent to-[#0A0F1A]" />
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
      </motion.div>

      {/* 2. BUREAU NAVIGATION BAR */}
      {/* <div className="absolute top-12 left-8 lg:left-12 z-30">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-4 cursor-pointer text-[10px] font-black uppercase tracking-[0.4em] text-white/60 hover:text-white transition-all"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-2" />
          <span>Return to Home</span>
        </button>
      </div> */}

      {/* 3. CORE CONTENT AREA */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-end pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-end">

          {/* LEFT: The Jurisdictional Profile */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <span className="text-4xl shadow-2xl">{country.flag}</span>
              <div className="h-[1px] w-12 bg-blue-400/30" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-300">
                Official Jurisdiction
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-7xl md:text-9xl font-serif italic text-white leading-[0.85] tracking-tighter">
                {country.name}<span className="not-italic text-blue-400">.</span>
              </h1>
              <p className="text-blue-100/60 max-w-xl text-lg font-medium italic font-serif leading-relaxed border-l border-blue-400/20 pl-8 ml-2">
                "{country.tagline || `Facilitating seamless global transitions to ${country.name} with six years of processing integrity.`}"
              </p>
            </motion.div>
          </div>

          {/* RIGHT: The Certified Summary Ledger */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-1 shadow-2xl">
               <div className="border border-white/5 p-8 space-y-8">
                  
                  {/* Processing Stat */}
                  <div className="flex items-center justify-between group">
                     <div className="space-y-1">
                        <p className="text-[9px] font-black text-blue-300/40 uppercase tracking-widest">Processing Time</p>
                        <p className="text-2xl font-serif italic text-white group-hover:text-blue-300 transition-colors">{country.processingTime}</p>
                     </div>
                     <Clock className="text-blue-300/20" size={24} />
                  </div>

                  <div className="h-px w-full bg-white/5" />

                  {/* Success Stat */}
                  <div className="flex items-center justify-between group">
                     <div className="space-y-1">
                        <p className="text-[9px] font-black text-blue-300/40 uppercase tracking-widest">Clearance Rate</p>
                        <p className="text-2xl font-serif italic text-white group-hover:text-green-400 transition-colors">{country.successRate}% Approved</p>
                     </div>
                     <ShieldCheck className="text-blue-300/20" size={24} />
                  </div>

                  <div className="h-px w-full bg-white/5" />

                  {/* Fee Stat */}
                  <div className="flex items-center justify-between group">
                     <div className="space-y-1">
                        <p className="text-[9px] font-black text-blue-300/40 uppercase tracking-widest">Certified Fee</p>
                        <div className="flex items-baseline gap-1">
                           <span className="text-sm font-serif italic text-blue-300">₹</span>
                           <span className="text-3xl font-serif italic text-white">{country.pricing?.totalFee || '---'}</span>
                        </div>
                     </div>
                     <button className="w-10 h-10 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all">
                        <ChevronRight size={18} />
                     </button>
                  </div>

               </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle Bottom Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
    </div >
  );
};

export default CountryHero;
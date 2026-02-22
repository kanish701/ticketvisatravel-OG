import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MessageCircle, Globe, Shield } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen bg-white flex items-center overflow-hidden">
      
      {/* 1. Subtle Background Texture (Clean) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 w-full grid lg:grid-cols-2 gap-20 items-center pt-20">
        
        {/* LEFT COLUMN: Clean Content */}
        <div className="relative z-10 space-y-12">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-900/40">
              Est. 2024 • Coimbatore
            </span>
            <div className="h-px w-8 bg-blue-900/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-7xl md:text-8xl lg:text-[100px] font-serif italic text-slate-900 leading-[0.9] tracking-tighter">
              Travel <br />
              <span className="not-italic font-black text-blue-900">Refined.</span>
            </h1>
            <p className="text-slate-400 max-w-md text-lg md:text-xl font-medium leading-relaxed">
              Simplifying global movement through expert processing and six years of certified heritage.
            </p>
          </motion.div>

          {/* Action Area */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-10 pt-4"
          >
            <button
              onClick={() => navigate('/services')}
              className="group flex items-center gap-4 bg-blue-900 text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-black transition-all"
            >
              Explore 
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>

            <button
              onClick={() => window.open('https://wa.me/919087612111', '_blank')}
              className="flex items-center gap-3 text-slate-400 hover:text-blue-900 transition-colors py-4 group"
            >
              <MessageCircle size={18} />
              <span className="text-[10px] font-black uppercase tracking-widest border-b border-transparent group-hover:border-blue-900 transition-all">WhatsApp Consult</span>
            </button>
          </motion.div>

          {/* Minimalist Metrics */}
          <div className="pt-12 flex gap-16 border-t border-slate-50">
             <div className="space-y-1">
                <p className="text-2xl font-serif italic text-slate-900">98.2%</p>
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-300">Approval</p>
             </div>
             <div className="space-y-1">
                <p className="text-2xl font-serif italic text-slate-900">120+</p>
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-300">Countries</p>
             </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The Floating Artwork */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          {/* Main Image Frame */}
          <div className="relative aspect-[4/5] w-full max-w-md ml-auto overflow-hidden bg-slate-100 shadow-[0_50px_100px_rgba(0,0,0,0.05)] rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=2666&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-[2s]"
              alt="Voyage"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none" />
          </div>

          {/* Decorative Corner Element */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-blue-900/10" />
          
          {/* Floating Category Note */}
          <div className="absolute top-1/2 -left-20 -rotate-90">
             <div className="flex items-center gap-3">
                <Shield size={12} className="text-blue-900/30" />
                <span className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-300">Certified Handling</span>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
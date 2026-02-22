import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { servicesData } from '../../../data/ServicesData';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Globe, ShieldCheck, Landmark, ScrollText } from 'lucide-react';

const ServiceCategoryHub = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const data = servicesData.find(s => s.id === category);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFCFB]">
        <div className="text-center space-y-6">
          <Landmark className="w-16 h-16 text-blue-900 mx-auto opacity-20" />
          <h1 className="text-2xl font-serif italic text-slate-900">Jurisdiction Not Found</h1>
          <button onClick={() => navigate('/services')} className="text-blue-900 font-bold uppercase tracking-widest text-xs hover:underline">
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 selection:bg-blue-900 selection:text-white pb-32">
      
      {/* 1. ARCHIVAL BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
        <div className="h-full w-full" style={{ 
          backgroundImage: `radial-gradient(#1e3a8a 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} />
      </div>

      {/* 2. DIPLOMATIC HEADER */}
      <header className="relative z-10 pt-32 pb-20 px-6 border-b border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto">
          
          {/* Breadcrumb - Registry Style */}
          <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-12">
            <Link to="/" className="hover:text-blue-900 transition-colors">Archive</Link>
            <ChevronRight size={10} />
            <Link to="/services" className="hover:text-blue-900 transition-colors">Services</Link>
            <ChevronRight size={10} />
            <span className="text-blue-900">{data.title}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-16 items-end">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-12 bg-blue-900/30" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-900">Official Specialization</span>
              </div>
              
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-5xl md:text-7xl font-serif italic text-slate-900 leading-tight"
              >
                {data.title}<span className="not-italic text-blue-900">.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-slate-500 text-lg leading-relaxed font-medium italic font-serif max-w-2xl"
              >
                "{data.description}"
              </motion.p>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="p-8 border border-slate-100 bg-slate-50/50 rounded-sm space-y-4">
                <ShieldCheck className="w-8 h-8 text-blue-900 opacity-30" />
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-loose">
                  All pathways listed within this jurisdiction are verified through our 3-tier internal audit protocol for maximum approval probability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. SUB-SERVICES REGISTRY */}
      <main className="max-w-6xl mx-auto px-6 relative z-20 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-slate-200 border border-slate-200 shadow-2xl">
          {data.subServices.map((sub, index) => (
            <motion.div
              key={sub.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-10 relative overflow-hidden transition-colors hover:bg-slate-50 flex flex-col h-full"
            >
              {/* Card Decoration */}
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <Landmark className="w-20 h-20 text-blue-900" />
              </div>

              <div className="relative z-10 space-y-8 flex-grow">
                <div className="flex justify-between items-start">
                  <div className="px-3 py-1 border border-blue-900/10 rounded-full flex items-center gap-2">
                    <Globe size={10} className="text-blue-900" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-blue-900">{sub.country}</span>
                  </div>
                  <span className="text-[10px] font-serif italic text-slate-300">Record 0{index + 1}</span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-serif italic text-slate-900 group-hover:text-blue-900 transition-colors">
                    {sub.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium uppercase tracking-tighter">
                    {sub.description}
                  </p>
                </div>

                {/* Requirements List - Professional Checklist Style */}
                <div className="space-y-4 pt-4 border-t border-slate-50">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">Mandatory Assessment:</span>
                  <div className="space-y-3">
                    {sub.requirements?.slice(0, 3).map((req, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-blue-900/20 rounded-full" />
                        <span className="text-xs font-serif italic text-slate-600">{req}</span>
                      </div>
                    )) || (
                      <p className="text-xs italic text-slate-400">Documentation varies by profile.</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Action - Formal Button */}
              <div className="relative z-10 pt-10 mt-auto">
                <button 
                  onClick={() => navigate(`/services/${category}/${sub.id}`)}
                  className="w-full py-4 bg-blue-900 text-white text-[10px] font-black uppercase tracking-[0.4em] transition-all hover:bg-black flex items-center justify-center gap-3 group/btn"
                >
                  Initiate Assessment
                  <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* 4. FOOTER ADVISORY */}
      {/* <section className="max-w-4xl mx-auto px-6 mt-32 text-center">
        <div className="p-12 border-8 border-double border-slate-100 bg-white space-y-8">
           <ScrollText className="w-12 h-12 text-blue-900 mx-auto opacity-20" />
           <h3 className="text-3xl font-serif italic text-slate-900">Bespoke Immigration Advisory</h3>
           <p className="text-slate-500 font-medium leading-relaxed max-w-xl mx-auto">
              If your desired travel jurisdiction is not listed above, our senior processors can still facilitate your application through our extended global network.
           </p>
           <button onClick={() => navigate('/contact-us')} className="bg-blue-900 text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-black transition-all">
              Consult Senior Specialist
           </button>
        </div>
      </section> */}

    </div>
  );
};

export default ServiceCategoryHub;
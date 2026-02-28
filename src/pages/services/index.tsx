import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, ShieldCheck, Bookmark, Compass, ChevronRight } from 'lucide-react';
import { servicesData } from '../../data/ServicesData';

const ServicesIndex = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-900 selection:text-white pb-32">

      {/* 1. MINIMALIST TEXTURE (No Images) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* 2. HIGH-CONTRAST HERO */}
      <header className="relative z-10 pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-10">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-[2px] bg-blue-900" />
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-blue-900">Premium Specializations</span>
            <div className="w-12 h-[2px] bg-blue-900" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif italic tracking-tighter leading-none"
          >
            Go <span className="not-italic font-black text-blue-900">Global.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-xl text-lg font-medium tracking-tight leading-relaxed"
          >
            Expertly curated visa pathways for the modern voyager. Six years of surgical precision in international immigration laws.
          </motion.p>

          <div className="flex items-center gap-12 pt-6 opacity-30 grayscale">
            <div className="flex items-center gap-2"><ShieldCheck size={18} /> <span className="text-[10px] font-black uppercase tracking-widest">Verified</span></div>
            <div className="flex items-center gap-2"><Globe size={18} /> <span className="text-[10px] font-black uppercase tracking-widest">120+ Jurisdictions</span></div>
            <div className="flex items-center gap-2"><Compass size={18} /> <span className="text-[10px] font-black uppercase tracking-widest">6yr Heritage</span></div>
          </div>
        </div>
      </header>

      {/* 3. MODERN GALLERY GRID */}
      <main className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={service.id === 'study' ? '/study-abroad' : `/services/${service.id}`}>
                {/* Image Frame - Vertical Focus */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 mb-10 shadow-2xl transition-all duration-700 group-hover:shadow-blue-900/10">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors duration-500" />

                  {/* Floating Number Label */}
                  <div className="absolute top-0 right-0 bg-white px-6 py-4 border-b border-l border-slate-100">
                    <span className="text-xs font-black text-slate-300 group-hover:text-blue-900 transition-colors">0{index + 1}</span>
                  </div>

                  {/* Quick Action Label */}
                  <div className="absolute bottom-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <div className="bg-white px-5 py-3 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest shadow-xl">
                      View Details <ArrowRight size={14} />
                    </div>
                  </div>
                </div>

                {/* Content - Asymmetrical Layout */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                  <div className="md:w-[40%]">
                    <div className="flex items-center gap-2 mb-4">
                      <Bookmark size={14} className="text-blue-900" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-900">{service.id} Desk</span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-serif italic leading-tight group-hover:text-blue-900 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="md:w-[60%] space-y-6">
                    <p className="text-slate-400 text-sm leading-relaxed font-medium uppercase tracking-tighter">
                      {service.description}
                    </p>

                    {/* Sub-Programs Mini List */}
                    <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-50 pt-6">
                      {service.subServices.slice(0, 2).map(sub => (
                        <div key={sub.id} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-blue-900" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{sub.country}</span>
                        </div>
                      ))}
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-200">And more...</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

        </div>
      </main>

      {/* 4. CALL TO ACTION BLOCK (Minimalist) */}
      <section className="max-w-6xl mx-auto px-6 mt-40">
        <div className="bg-blue-900 p-16 md:p-24 flex flex-col items-center text-center space-y-10 relative overflow-hidden">
          {/* Background Texture */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
            backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }} />

          <h2 className="text-4xl md:text-6xl font-serif italic text-white relative z-10 leading-none">
            Not finding your <br /> <span className="not-italic font-black text-blue-300">Destination?</span>
          </h2>

          <p className="text-blue-100/60 max-w-xl text-sm font-bold uppercase tracking-widest leading-loose relative z-10">
            Our Company facilitates global mobility across 120+ territories. Contact our senior specialists for a bespoke profile assessment.
          </p>

          <a
            href="https://wa.me/919087612111"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-900 px-12 py-6 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-blue-50 transition-all relative z-10 shadow-2xl inline-block cursor-pointer"
          >
            Connect with Concierge
          </a>
        </div>
      </section>

    </div>
  );
};

export default ServicesIndex;
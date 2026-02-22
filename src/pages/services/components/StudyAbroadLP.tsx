import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Globe, ArrowRight, Sparkles, Clock, ShieldCheck, Landmark, BookOpenCheck, Users } from 'lucide-react';

const StudyAbroadLP = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', destination: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*OFFICIAL ADMISSIONS INQUIRY*\nStudent: ${formData.name}\nPhone: ${formData.phone}\nJurisdiction: ${formData.destination}`;
    window.open(`https://wa.me/919087612111?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 selection:bg-blue-900 selection:text-white relative overflow-hidden">

      {/* 1. ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?q=80&w=2670&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-20 grayscale"
          alt="Academy Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCFB] via-transparent to-[#FDFCFB]" />
        <div className="absolute inset-0 bg-blue-900/5 mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row relative z-10 pt-32 lg:pt-40 px-6 pb-24">

        {/* LEFT SIDE: The Academic Vision */}
        <div className="lg:w-7/12 lg:pr-20 space-y-12">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="h-[1px] w-12 bg-blue-900/30" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-900/60">Bureau of Education</span>
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-serif italic text-slate-900 leading-[0.9] tracking-tighter"
            >
              The Global <br />
              <span className="not-italic font-black text-blue-900">Scholar.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-slate-500 font-medium italic font-serif leading-relaxed max-w-xl"
            >
              "Engineering your transition to the world's most prestigious universities through six years of verified diplomatic excellence."
            </motion.p>
          </div>

          {/* Excellence Grid */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 border border-slate-100 shadow-2xl">
            {[
              { icon: GraduationCap, title: "700+ Partners", sub: "Global Ivory Towers" },
              { icon: BookOpenCheck, title: "SOP Curation", sub: "Expert Editorial Team" },
              { icon: Users, title: "Visa Desk", sub: "Post-Study Clearance" },
              { icon: ShieldCheck, title: "98% Success", sub: "Verified Outcomes" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 group hover:bg-slate-50 transition-colors">
                <item.icon size={24} className="text-blue-900/30 group-hover:text-blue-900 mb-4 transition-colors" />
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">{item.title}</h4>
                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter">{item.sub}</p>
              </div>
            ))}
          </div>

          {/* Official Seal/Note */}
          <div className="flex items-center gap-6 p-8 border-l-4 border-blue-900 bg-white shadow-sm">
            <Landmark size={32} className="text-blue-900/20" />
            <p className="text-sm font-serif italic text-slate-500 leading-relaxed">
              Admissions for the <span className="text-blue-900 font-bold">Fall 2026</span> session are currently being mapped. Private consultation slots are limited to ensure processing quality.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: The Enrollment Ledger (Form) */}
        <div className="lg:w-5/12 mt-20 lg:mt-0">
          <div className="sticky top-32">
            <div className="bg-white border border-slate-100 p-2 shadow-[0_50px_100px_rgba(30,58,138,0.1)]">
              <div className="border border-blue-900/10 p-10 space-y-10">

                <div className="text-center space-y-2">
                  <div className="flex justify-center mb-4">
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-900"></span>
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif italic text-slate-900 tracking-tight">Admissions Ledger</h3>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-900/40">Request Global Assessment</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Student Identity</label>
                      <input
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-none border-b border-slate-100 py-2 font-serif italic text-lg focus:border-blue-900 outline-none transition-all placeholder:text-slate-100"
                        placeholder="Legal Full Name"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Contact Registry</label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent border-none border-b border-slate-100 py-2 text-sm font-bold focus:border-blue-900 outline-none transition-all placeholder:text-slate-100 uppercase"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Target Jurisdiction</label>
                      <select
                        required
                        className="w-full bg-transparent border-none border-b border-slate-100 py-2 text-sm font-bold focus:border-blue-900 outline-none transition-all appearance-none cursor-pointer uppercase"
                        value={formData.destination}
                        onChange={e => setFormData({ ...formData, destination: e.target.value })}
                      >
                        <option value="">Select Region</option>
                        <option value="UK">United Kingdom</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="Europe">Europe</option>
                      </select>
                    </div>
                  </div>

                  <button className="w-full bg-blue-900 hover:bg-black text-white py-6 text-[10px] font-black uppercase tracking-[0.5em] transition-all flex items-center justify-center gap-4 group">
                    Request Prospectus <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>

                <div className="pt-6 border-t border-slate-50 flex items-center justify-center gap-3">
                  <ShieldCheck size={14} className="text-green-600" />
                  <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest text-center leading-loose">
                    Authenticated Data Node • Ticket Visa Travel Bureau <br /> Coimbatore Division
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudyAbroadLP;
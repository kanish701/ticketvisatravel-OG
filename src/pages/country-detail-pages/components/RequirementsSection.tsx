import { motion } from 'framer-motion';
import { FileCheck, ShieldAlert, ArrowRight, ScrollText, ChevronRight } from 'lucide-react';
import { Requirement } from '../../../types';

interface RequirementsSectionProps {
  requirements: Requirement[];
}

const RequirementsSection = ({ requirements }: RequirementsSectionProps) => {
  const categories = Array.from(new Set(requirements.map(r => r.category)));

  return (
    <section className="py-32 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* --- DIPLOMATIC HEADER --- */}
        <header className="mb-24 space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-12 bg-blue-900/20" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-900">Document Protocol</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <h2 className="text-5xl md:text-7xl font-serif italic text-slate-900 leading-none tracking-tighter">
              Jurisdictional <br /> <span className="not-italic font-black text-blue-900">Briefing.</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium italic font-serif leading-relaxed border-l border-blue-900/10 pl-8">
              "Every submission is audited against current embassy statutes. Please ensure all records are original and verified."
            </p>
          </div>
        </header>

        {/* --- THE AUDIT LEDGER --- */}
        <div className="space-y-32">
          {categories.map((category, catIndex) => {
            const categoryRequirements = requirements.filter(r => r.category === category);

            return (
              <motion.div 
                key={category}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16"
              >
                
                {/* LEFT: Category Ledger Anchor */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="lg:sticky lg:top-40">
                     <div className="space-y-4">
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-blue-900/30">Registry 0{catIndex + 1}</span>
                        <h3 className="text-3xl font-serif italic text-slate-900">
                           {category}
                        </h3>
                        <div className="h-[2px] w-12 bg-blue-900" />
                        <p className="text-xs font-bold text-slate-300 uppercase tracking-widest leading-loose max-w-xs">
                           Review these {categoryRequirements.length} specific records for procedural clearance.
                        </p>
                     </div>
                  </div>
                </div>

                {/* RIGHT: The Requirements Record Cards */}
                <div className="lg:col-span-8 space-y-px bg-slate-100 border border-slate-100 shadow-2xl shadow-blue-900/5">
                  {categoryRequirements.map((req, reqIndex) => (
                    <motion.div
                      key={req.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: reqIndex * 0.05 }}
                      className="group relative bg-white p-10 flex flex-col sm:flex-row gap-10 items-start hover:bg-[#FDFCFB] transition-colors"
                    >
                      {/* Left Border Accent for Mandatory */}
                      {req.mandatory && (
                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-900" />
                      )}

                      {/* Numeric Index Overlay */}
                      <div className="absolute top-4 right-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                         <span className="text-4xl font-serif italic text-blue-900">{reqIndex + 1}</span>
                      </div>
                      
                      {/* Icon State */}
                      <div className={`
                         w-12 h-12 flex items-center justify-center transition-all duration-500
                         ${req.mandatory ? 'text-blue-900' : 'text-slate-200 group-hover:text-blue-900'}
                      `}>
                         <ScrollText size={28} strokeWidth={1.5} />
                      </div>

                      <div className="flex-1 space-y-3">
                         <div className="flex flex-wrap items-center gap-4">
                            <h4 className="text-xl font-serif italic text-slate-900">
                               {req.title}
                            </h4>
                            {req.mandatory && (
                               <span className="px-3 py-1 border border-blue-900/10 text-[8px] font-black uppercase tracking-widest text-blue-900 bg-blue-50/50">
                                  Statutory Record
                               </span>
                            )}
                         </div>
                         
                         <p className="text-sm font-medium text-slate-400 leading-relaxed uppercase tracking-tighter max-w-xl group-hover:text-slate-500 transition-colors">
                            {req.description}
                         </p>
                      </div>

                      <div className="hidden sm:flex items-center self-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                         <ChevronRight size={18} className="text-blue-900" />
                      </div>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* --- AUDIT FOOTER NOTE --- */}
        <footer className="mt-40 p-12 border-4 border-double border-slate-100 text-center space-y-6">
           <ShieldAlert size={32} className="mx-auto text-blue-900/20" />
           <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] max-w-2xl mx-auto leading-loose">
              Failure to provide authentic records results in immediate jurisdictional denial. <br />
              <span className="text-blue-900">Our bureau offers document verification services upon request.</span>
           </p>
        </footer>
      </div>
    </section>
  );
};

export default RequirementsSection;
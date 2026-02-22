import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import { Requirement } from '../../../types';

interface RequirementsSectionProps {
  requirements: Requirement[];
}

const RequirementsSection = ({ requirements }: RequirementsSectionProps) => {
  const categories = Array.from(new Set(requirements.map(r => r.category)));

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-midnight mb-6 tracking-tight">
              Requirements
            </h2>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <p className="text-lg text-slate-500 leading-relaxed border-l-4 border-brand-gold pl-6">
                Please ensure all documents below are valid, clear, and translated if necessary. 
                <span className="block mt-2 text-sm font-bold text-brand-midnight">
                  Mandatory items are highlighted with a textured background.
                </span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* --- CATEGORY BLOCKS --- */}
        <div className="space-y-24">
          {categories.map((category, catIndex) => {
            const categoryRequirements = requirements.filter(r => r.category === category);

            return (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12"
              >
                
                {/* LEFT: Category Anchor */}
                <div className="lg:col-span-4 relative">
                  <div className="lg:sticky lg:top-32">
                     {/* Big Background Number */}
                     <span className="absolute -top-12 -left-6 text-[120px] font-black text-slate-200/50 leading-none select-none pointer-events-none z-0">
                        {catIndex + 1}
                     </span>
                     
                     <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-brand-midnight mb-3">
                           {category}
                        </h3>
                        <div className="h-1 w-12 bg-brand-gold mb-4"></div>
                        <p className="text-sm text-slate-500 font-medium">
                           Review these {categoryRequirements.length} items carefully before submission.
                        </p>
                     </div>
                  </div>
                </div>

                {/* RIGHT: Requirements Cards */}
                <div className="lg:col-span-8 space-y-4">
                  {categoryRequirements.map((req, reqIndex) => (
                    <motion.div
                      key={req.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: reqIndex * 0.1 }}
                      className={`
                        group relative overflow-hidden rounded-xl border transition-all duration-300
                        ${req.mandatory 
                          ? 'bg-white border-brand-gold/40 shadow-[0_4px_20px_-10px_rgba(234,179,8,0.2)] hover:shadow-[0_10px_30px_-10px_rgba(234,179,8,0.3)]' 
                          : 'bg-white border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200'
                        }
                      `}
                    >
                      {/* MANDATORY TEXTURE BACKGROUND */}
                      {req.mandatory && (
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(45deg,#000,#000_10px,transparent_10px,transparent_20px)]"></div>
                      )}

                      <div className="relative p-6 flex flex-col sm:flex-row gap-6 items-start">
                        
                        {/* Icon Box */}
                        <div className={`
                           w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110
                           ${req.mandatory ? 'bg-brand-gold text-brand-midnight' : 'bg-slate-50 text-slate-400'}
                        `}>
                           <Icon name={req.icon} size={24} />
                        </div>

                        <div className="flex-1">
                           <div className="flex justify-between items-start gap-4 mb-2">
                              <h4 className="text-lg font-bold text-brand-midnight">
                                 {req.title}
                              </h4>
                              {req.mandatory && (
                                 <span className="shrink-0 px-3 py-1 bg-brand-midnight text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                                    Required
                                 </span>
                              )}
                           </div>
                           
                           <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600">
                              {req.description}
                           </p>
                        </div>

                        {/* Hover Chevron */}
                        <div className="hidden sm:flex items-center self-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                           <Icon name="ChevronRight" size={20} className="text-slate-300" />
                        </div>

                      </div>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
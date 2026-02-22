import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import { FAQ } from '../../../types';

interface FAQSectionProps {
  faqs: FAQ[];
}

const FAQSection = ({ faqs }: FAQSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openId, setOpenId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...Array.from(new Set(faqs.map(f => f.category)))];

  const filteredFAQs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [faqs, activeCategory, searchQuery]);

  // Animation variants for flying elements
  const planeVariant = {
    initial: { x: '-20%', y: '60vh', opacity: 0, rotate: 10 },
    animate: {
      x: '120vw',
      y: '20vh',
      opacity: [0, 0.6, 0.6, 0], // Fade in/out at edges
      transition: {
        duration: 45,
        ease: 'linear',
        repeat: Infinity,
        delay: 2,
      },
    },
  };

  const flockVariant = {
    initial: { x: '110%', y: '30vh', opacity: 0 },
    animate: {
      x: '-20vw',
      y: '40vh',
      opacity: [0, 0.4, 0.4, 0],
      transition: {
        duration: 60,
        ease: 'linear',
        repeat: Infinity,
        delay: 10,
      },
    },
  };

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden min-h-[800px]">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* 1. The Animated Aurora Mesh (Behind everything) */}
        <motion.div 
           animate={{ 
             rotate: [0, 360],
             scale: [1, 1.1, 0.9, 1] 
           }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-40"
           style={{
             background: 'conic-gradient(from 0deg at 50% 50%, #f8fafc 0deg, #dbeafe 120deg, #fef3c7 240deg, #f8fafc 360deg)',
             filter: 'blur(80px)',
           }}
        />

        {/* --- NEW: FLYING TRAVEL ELEMENTS (Subtle layer) --- */}
        {/* Airplane */}
        <motion.div
          variants={planeVariant}
          initial="initial"
          animate="animate"
          className="absolute z-0 text-slate-400/40 blur-[2px]"
        >
          {/* Assuming 'Plane' is a valid icon name in your AppIcon component */}
          <Icon name="Plane" size={80} />
        </motion.div>

        {/* Flock of Birds */}
        <motion.div
          variants={flockVariant}
          initial="initial"
          animate="animate"
          className="absolute z-0 flex gap-2 text-slate-400/30 blur-[1px]"
        >
          {/* Assuming 'Bird' is a valid icon name */}
          <Icon name="Bird" size={24} className="mt-2" />
          <Icon name="Bird" size={28} />
          <Icon name="Bird" size={22} className="mt-4" />
        </motion.div>


        {/* 2. The Technical Grid Overlay (Gives structure over the aurora and elements) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div 
          className="absolute inset-0 opacity-[0.4]" 
          style={{ 
            backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }}
        ></div>
        
        {/* 3. Radial Fade (Softens edges) */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50"></div>
      </div>


      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8">

        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
             <div className="px-4 py-1.5 rounded-full border border-brand-gold/50 bg-brand-gold/10 backdrop-blur-sm text-brand-gold text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                Help Center
             </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-brand-midnight mb-8 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>

          {/* Search Input */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative max-w-lg mx-auto shadow-2xl shadow-brand-midnight/5 rounded-2xl"
          >
             <input 
                type="text" 
                placeholder="Type to search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-6 pr-14 py-4 bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-brand-midnight font-medium placeholder:text-slate-400 transition-all"
             />
             <div className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gold">
                <Icon name="Search" size={20} />
             </div>
          </motion.div>
        </div>

        {/* --- TABS --- */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
             <button
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={`
                 px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300
                 ${activeCategory === cat 
                   ? 'bg-brand-midnight text-white shadow-lg scale-105' 
                   : 'bg-white/50 text-slate-500 hover:bg-white hover:text-brand-midnight'
                 }
               `}
             >
               {cat}
             </button>
          ))}
        </motion.div>

        {/* --- FAQ CARDS --- */}
        <motion.div layout className="grid gap-4">
          <AnimatePresence mode='popLayout'>
            {filteredFAQs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  layout
                  key={faq.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  // Card Styling
                  className={`
                     group cursor-pointer relative overflow-hidden rounded-2xl border transition-all duration-500
                     ${isOpen 
                        ? 'bg-white border-brand-gold shadow-[0_20px_40px_-10px_rgba(234,179,8,0.15)] z-20 scale-[1.02]' 
                        : 'bg-white/60 border-white/60 hover:bg-white hover:border-slate-200 shadow-sm hover:shadow-md'
                     }
                  `}
                >
                  
                  {/* Active Indicator Bar (Left) */}
                  <div className={`absolute top-0 bottom-0 left-0 w-1 transition-colors duration-500 ${isOpen ? 'bg-brand-gold' : 'bg-transparent'}`}></div>

                  <div className="p-6 pl-8">
                     <div className="flex justify-between items-center gap-4">
                        <h3 className={`text-lg font-bold transition-colors ${isOpen ? 'text-brand-midnight' : 'text-slate-600 group-hover:text-brand-midnight'}`}>
                           {faq.question}
                        </h3>
                        
                        {/* Icon Button */}
                        <div className={`
                           w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300
                           ${isOpen ? 'bg-brand-midnight text-brand-gold rotate-90' : 'bg-slate-100 text-slate-400 group-hover:bg-brand-gold group-hover:text-white'}
                        `}>
                           <Icon name={isOpen ? "Minus" : "Plus"} size={16} />
                        </div>
                     </div>

                     <AnimatePresence>
                        {isOpen && (
                           <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                           >
                              <div className="pt-4 text-slate-500 leading-relaxed text-base border-t border-slate-100 mt-4">
                                 {faq.answer}
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
        
        {/* Empty State */}
        {filteredFAQs.length === 0 && (
           <div className="text-center py-12">
              <p className="text-slate-400 font-medium">No matches found.</p>
           </div>
        )}

      </div>
    </section>
  );
};

export default FAQSection;
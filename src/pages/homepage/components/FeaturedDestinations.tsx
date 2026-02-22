import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Clock, ShieldCheck, Star } from 'lucide-react';
import { countriesData } from '../../../data/CountriesData';

const REGIONS = ['All', 'Schengen', 'Americas', 'Europe', 'Asia', 'Middle East', 'Africa'];

const FeaturedDestinations = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const navigate = useNavigate();

  // 1. MEMOIZED DATA: Prevents heavy mapping on every render
  const processedDestinations = useMemo(() => {
    const regionMap: Record<string, string[]> = {
      'Schengen': ['france', 'germany', 'italy', 'spain', 'netherlands'],
      'Americas': ['usa', 'canada'],
      'Asia': ['japan', 'thailand', 'singapore', 'vietnam'],
      'Middle East': ['dubai', 'saudi_arabia', 'qatar'],
      'Europe': ['uk', 'ireland', 'turkey']
    };

    return countriesData.map(country => {
      let region = 'Other';
      for (const [rName, ids] of Object.entries(regionMap)) {
        if (ids.includes(country.id)) {
          region = rName;
          break;
        }
      }
      return {
        ...country,
        region,
        popular: ['usa', 'uk', 'canada', 'dubai'].includes(country.id)
      };
    });
  }, []);

  // 2. MEMOIZED FILTERING: Only re-runs when selectedRegion changes
  const filtered = useMemo(() => {
    return selectedRegion === 'All'
      ? processedDestinations
      : processedDestinations.filter(d => d.region === selectedRegion);
  }, [selectedRegion, processedDestinations]);

  const handleLoadMore = useCallback(() => {
    setVisibleCount(prev => prev + 8);
  }, []);

  return (
    <section className="py-24 bg-[#FDFCFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-10 bg-blue-900/30" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-900">Official Portals</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif italic text-slate-900">
              Popular <span className="not-italic text-blue-900 font-black">Destinations.</span>
            </h2>
          </div>

          {/* Optimized Tabs */}
          <div className="flex flex-wrap gap-4 border-b border-slate-100 pb-2">
            {REGIONS.map((region) => (
              <button
                key={region}
                onClick={() => { setSelectedRegion(region); setVisibleCount(8); }}
                className={`pb-2 text-xs font-bold uppercase tracking-widest transition-colors relative ${
                  selectedRegion === region ? 'text-blue-900' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {region}
                {selectedRegion === region && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-900" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Optimized Grid with GPU acceleration */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 will-change-transform"
        >
          <AnimatePresence mode="popLayout">
            {filtered.slice(0, visibleCount).map((dest, idx) => (
              <motion.div
                key={dest.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx % 8 * 0.05 }}
                onClick={() => navigate(`/visa/${dest.id}`)}
                className="group cursor-pointer transform-gpu"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-200 mb-6 rounded-sm shadow-sm transition-all duration-500">
                  <img
                    src={dest.heroImage}
                    alt={dest.name}
                    loading="lazy" // Critical for performance
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-6 left-6 flex items-center gap-2">
                    <span className="text-2xl">{dest.flag}</span>
                    {dest.popular && (
                      <div className="bg-white/95 backdrop-blur-md px-2 py-1 flex items-center gap-1 shadow-sm">
                        <Star className="w-2 h-2 text-blue-900 fill-current" />
                        <span className="text-[8px] font-black uppercase text-blue-900 tracking-tighter">Premier</span>
                      </div>
                    )}
                  </div>

                  {/* Trust HUD */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-4 flex justify-between border-t border-slate-100 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-blue-900" />
                      <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">{dest.processingTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3 h-3 text-green-600" />
                      <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">{dest.successRate}% Success</span>
                    </div>
                  </div>
                </div>

                {/* Footer Text */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-serif italic text-slate-900 group-hover:text-blue-900 transition-colors">
                      {dest.name}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-blue-900" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    {dest.visaTypes[0]?.name || 'Standard Entry'}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More */}
        {visibleCount < filtered.length && (
          <div className="mt-20 flex flex-col items-center">
            <button
              onClick={handleLoadMore}
              className="group text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-blue-900 transition-all flex flex-col items-center gap-4"
            >
              <span>Explore More Jurisdictions</span>
              <div className="h-px w-12 bg-slate-200 group-hover:w-20 group-hover:bg-blue-900 transition-all" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedDestinations;
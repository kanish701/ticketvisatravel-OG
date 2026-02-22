import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { SimilarDestination } from '../../../types';

interface SimilarDestinationsProps {
  destinations: SimilarDestination[];
}

const SimilarDestinations = ({ destinations }: SimilarDestinationsProps) => {
  const navigate = useNavigate();

  const handleDestinationClick = (id: string) => {
    navigate(`/country/${id}`);
  };

  // 1. Animation for the Gradient Blobs (The "Aurora")
  const blobVariants = {
    animate: {
      x: [0, 50, -50, 0],
      y: [0, -50, 50, 0],
      scale: [1, 1.2, 0.8, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 15,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  // 2. Animation for the Topographic Lines
  const lineVariants = {
    animate: {
      pathLength: [0, 1, 1, 0],
      opacity: [0, 0.3, 0.3, 0],
      pathOffset: [0, 0, 1, 1],
      transition: {
        duration: 12,
        ease: "linear",
        repeat: Infinity,
      }
    }
  };

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         
         {/* A. Animated Gradient Blobs (The "Light") */}
         <div className="absolute inset-0 opacity-60">
            {/* Gold/Warm Blob */}
            <motion.div
               variants={blobVariants}
               animate="animate"
               className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-brand-gold/30 rounded-full blur-[120px] mix-blend-multiply"
            />
            {/* Cool/Blue Blob (Offset) */}
            <motion.div
               variants={blobVariants}
               animate="animate"
               transition={{ delay: 5 }}
               className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-200/50 rounded-full blur-[100px] mix-blend-multiply"
            />
         </div>

         {/* B. Grain Texture (Adds premium feel) */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

         {/* C. Static Dotted Map Overlay */}
         <div 
            className="absolute inset-0 opacity-[0.05]"
            style={{
               backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/2/2f/World_map_dots_grey.svg')`,
               backgroundSize: 'contain',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat'
            }}
         ></div>

         {/* D. Moving SVG Contour Lines */}
         <svg className="absolute inset-0 w-full h-full text-slate-400/40" preserveAspectRatio="none">
            <motion.path 
               d="M-10,80 Q25,50 50,80 T110,80" 
               fill="none" 
               stroke="currentColor" 
               strokeWidth="1.5"
               variants={lineVariants}
               animate="animate"
            />
            <motion.path 
               d="M-10,50 Q25,20 50,50 T110,50" 
               fill="none" 
               stroke="currentColor" 
               strokeWidth="1.5"
               variants={lineVariants}
               animate="animate"
               transition={{ delay: 4 }}
            />
         </svg>

         {/* Radial Fade to blend edges */}
         <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50"></div>
      </div>


      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200 shadow-sm">
               <Icon name="Map" size={14} className="text-brand-gold" />
               <span className="text-[10px] font-bold uppercase tracking-widest text-brand-midnight">Global Terrain</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-brand-midnight mb-4 tracking-tight">
              Similar Destinations
            </h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto font-medium">
              We've identified these countries as excellent alternatives based on your current visa eligibility score.
            </p>
          </motion.div>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleDestinationClick(destination.id)}
              className="group cursor-pointer h-[420px] relative rounded-[24px] overflow-hidden bg-white shadow-xl hover:shadow-2xl hover:shadow-brand-midnight/10 transition-all duration-500 hover:-translate-y-2 border border-white/40"
            >
               {/* 1. Full Image Background */}
               <div className="absolute inset-0">
                  <Image
                     src={destination.image}
                     alt={destination.imageAlt}
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight/90 via-brand-midnight/30 to-transparent opacity-60 group-hover:opacity-50 transition-opacity"></div>
               </div>

               {/* 2. Top Info (Flag) */}
               <div className="absolute top-5 left-5 right-5 flex justify-between items-start z-20">
                  <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                     <span className="text-xl leading-none">{destination.flag}</span>
                     <span className="text-xs font-bold text-brand-midnight uppercase tracking-wider">{destination.name}</span>
                  </div>
                  
                  {/* Like Button */}
                  <div 
                    onClick={(e) => { e.stopPropagation(); }}
                    className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-midnight transition-colors"
                  >
                     <Icon name="Heart" size={14} />
                  </div>
               </div>

               {/* 3. Bottom Card Content */}
               <div className="absolute bottom-0 inset-x-0 p-6 z-20">
                  
                  {/* Floating Metric Bubble */}
                  <div className="absolute -top-6 right-6 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border-2 border-white/20">
                     {destination.successRate}% Approval
                  </div>

                  {/* Pricing */}
                  <div className="mb-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                     <p className="text-slate-300 text-[10px] font-bold uppercase tracking-widest mb-1">Estimated Cost</p>
                     <div className="flex items-baseline text-white">
                        <span className="text-sm text-brand-gold mr-1">$</span>
                        <span className="text-3xl font-black">{destination.price}</span>
                     </div>
                  </div>

                  {/* Details Row (Collapsible) */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
                     <div className="overflow-hidden">
                        <div className="pt-2 pb-2 flex items-center justify-between border-t border-white/20 mb-3">
                           <div className="flex items-center gap-2 text-white/80">
                              <Icon name="Clock" size={14} className="text-brand-gold" />
                              <span className="text-xs font-medium">{destination.processingTime}</span>
                           </div>
                           <div className="flex items-center gap-2 text-white/80">
                              <Icon name="FileText" size={14} className="text-brand-gold" />
                              <span className="text-xs font-medium">Tourist</span>
                           </div>
                        </div>

                        {/* View Button */}
                        <button 
                           className="w-full py-3 rounded-xl bg-white text-brand-midnight font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:bg-brand-gold transition-colors shadow-lg"
                           onClick={(e) => {
                              e.stopPropagation();
                              handleDestinationClick(destination.id);
                           }}
                        >
                           <span>View Details</span>
                           <Icon name="ArrowRight" size={14} />
                        </button>
                     </div>
                  </div>
               </div>

            </motion.div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-16 text-center md:hidden">
           <Button variant="outline" fullWidth onClick={() => navigate('/destinations')}>
              View All Destinations
           </Button>
        </div>

      </div>
    </section>
  );
};

export default SimilarDestinations;
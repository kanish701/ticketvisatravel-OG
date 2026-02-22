import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { EmbassyInfo } from '../../../types';

interface EmbassyInfoCardProps {
  embassyInfo: EmbassyInfo;
}

const EmbassyInfoCard = ({ embassyInfo }: EmbassyInfoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="group relative w-full bg-white rounded-[32px] overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_30px_60px_-15px_rgba(20,20,40,0.1)] transition-all duration-500">
        
        {/* --- 1. HERO MAP HEADER --- */}
        <div className="relative h-52 w-full overflow-hidden">
           {/* The Map Frame */}
           <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title={`Map showing location of ${embassyInfo.name}`}
              referrerPolicy="no-referrer-when-downgrade"
              // Standardized Google Maps Embed URL
              src={`https://maps.google.com/maps?q=${embassyInfo.latitude},${embassyInfo.longitude}&hl=en&z=14&output=embed`}
              className="border-0 w-full h-full opacity-90 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
              style={{ filter: 'grayscale(100%) contrast(1.1)' }}
           />
           
           {/* Overlay Gradient (Fade to white at bottom) */}
           <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90 pointer-events-none"></div>
           
           {/* Top Badge */}
           <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white shadow-sm flex items-center gap-2 z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-midnight">Open Now</span>
           </div>
        </div>

        {/* --- 2. THE FLOATING SEAL (Icon) --- */}
        <div className="absolute top-40 right-8 z-20">
           <div className="w-20 h-20 bg-brand-midnight rounded-3xl flex items-center justify-center shadow-2xl shadow-brand-midnight/20 border-[4px] border-white transform group-hover:-translate-y-2 group-hover:rotate-6 transition-all duration-500 ease-out">
              <Icon name="Building2" size={32} className="text-brand-gold" />
           </div>
        </div>

        {/* --- 3. CONTENT BODY --- */}
        <div className="px-8 pb-8 -mt-2 relative z-10">
           
           {/* Gold Accent Line */}
           <div className="w-12 h-1.5 bg-brand-gold rounded-full mb-6"></div>

           <h3 className="text-2xl font-black text-brand-midnight mb-2 max-w-[75%] leading-tight">
              {embassyInfo.name}
           </h3>
           <p className="text-sm text-slate-500 font-medium mb-8 flex items-center gap-2">
              <Icon name="Shield" size={14} className="text-brand-gold" />
              Official Diplomatic Mission
           </p>

           {/* Contact Grid */}
           <div className="space-y-3 mb-8">
              
              {/* Address Row */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group/item hover:bg-white hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300">
                 <Icon name="MapPin" size={20} className="text-slate-400 mt-0.5 group-hover/item:text-brand-gold transition-colors" />
                 <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Location</p>
                    <p className="text-sm font-bold text-brand-midnight leading-relaxed line-clamp-2">
                       {embassyInfo.address}
                    </p>
                 </div>
              </div>

              {/* Quick Actions Row */}
              <div className="grid grid-cols-2 gap-3">
                 <a href={`tel:${embassyInfo.phone}`} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-brand-midnight hover:text-white hover:border-brand-midnight group/btn transition-all duration-300">
                    <Icon name="Phone" size={18} className="text-slate-400 group-hover/btn:text-brand-gold transition-colors" />
                    <div className="overflow-hidden min-w-0">
                       <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover/btn:text-white/60 mb-0.5">Call</p>
                       <p className="text-xs font-bold truncate">{embassyInfo.phone}</p>
                    </div>
                 </a>
                 
                 <a href={embassyInfo.website} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-brand-midnight hover:text-white hover:border-brand-midnight group/btn transition-all duration-300">
                    <Icon name="Globe" size={18} className="text-slate-400 group-hover/btn:text-brand-gold transition-colors" />
                    <div className="overflow-hidden min-w-0">
                       <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover/btn:text-white/60 mb-0.5">Visit</p>
                       <p className="text-xs font-bold truncate">Website</p>
                    </div>
                 </a>
              </div>

           </div>

           {/* --- FOOTER ACTION --- */}
           <Button
             variant="default"
             size="lg"
             fullWidth
             onClick={() => window.open(`https://maps.google.com/?q=${embassyInfo.latitude},${embassyInfo.longitude}`, '_blank')}
             className="bg-brand-gold hover:bg-brand-gold/90 text-brand-midnight font-bold rounded-xl shadow-lg shadow-brand-gold/20 flex justify-between items-center px-6 h-14 group/nav transform hover:-translate-y-0.5 transition-all"
           >
             <span>Navigate to Embassy</span>
             <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover/nav:translate-x-1 transition-transform">
                <Icon name="Navigation" size={16} className="text-brand-midnight" />
             </div>
           </Button>

        </div>

      </div>
    </motion.div>
  );
};

export default EmbassyInfoCard;
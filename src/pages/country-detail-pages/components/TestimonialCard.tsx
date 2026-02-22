import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import { Testimonial } from '../../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full pt-4"
    >
      <div className="group relative h-full flex flex-col bg-white rounded-[24px] p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2">
        
        {/* --- DECORATIVE BACKGROUND --- */}
        {/* Massive Gold Quote Watermark */}
        <div className="absolute top-4 right-6 text-9xl leading-none font-serif text-brand-gold opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 pointer-events-none select-none">
           &rdquo;
        </div>
        
        {/* Subtle Gradient Glow at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* --- 1. HEADER: Avatar & Info --- */}
        <div className="relative z-10 flex items-center gap-4 mb-6">
          
          {/* Avatar with Gold Ring */}
          <div className="relative">
             <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-br from-brand-gold to-slate-200 group-hover:from-brand-gold group-hover:to-brand-gold transition-all duration-500">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white">
                   <Image
                      src={testimonial.avatar}
                      alt={testimonial.avatarAlt}
                      className="w-full h-full object-cover"
                   />
                </div>
             </div>
             {/* Tiny Verified Badge on Avatar */}
             <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center border-2 border-white">
                <Icon name="Check" size={10} />
             </div>
          </div>

          <div>
             <h4 className="text-lg font-bold text-brand-midnight">
                {testimonial.name}
             </h4>
             <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wide">
                <span>{testimonial.country}</span>
                <span className="w-1 h-1 rounded-full bg-brand-gold"></span>
                <span className="text-brand-gold">{testimonial.visaType}</span>
             </div>
          </div>
        </div>

        {/* --- 2. CONTENT: The Story --- */}
        <div className="relative z-10 mb-6 flex-grow">
           {/* Star Rating */}
           <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                 <Icon
                    key={i}
                    name="Star"
                    size={14}
                    className={i < testimonial.rating ? 'text-brand-gold fill-brand-gold' : 'text-slate-200'}
                 />
              ))}
           </div>

           <p className="text-base text-brand-midnight/80 italic leading-relaxed">
              "{testimonial.content}"
           </p>
        </div>

        {/* --- 3. ATTACHMENT: Image (If exists) --- */}
        {testimonial.image && (
           <div className="relative z-10 mb-6 group/img cursor-zoom-in">
              <div className="aspect-video rounded-xl overflow-hidden border border-slate-100 shadow-sm relative">
                 <div className="absolute inset-0 bg-brand-midnight/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center text-white font-bold gap-2">
                    <Icon name="Maximize2" size={16} /> View
                 </div>
                 <Image
                    src={testimonial.image}
                    alt={testimonial.imageAlt || 'Proof'}
                    className="w-full h-full object-cover transform group-hover/img:scale-105 transition-transform duration-700"
                 />
              </div>
              <div className="absolute -bottom-3 right-4 bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 z-20">
                 <Icon name="Image" size={12} className="text-brand-gold" /> Evidence
              </div>
           </div>
        )}

        {/* --- 4. FOOTER: The "Stamp" --- */}
        <div className="relative z-10 pt-4 border-t border-dashed border-slate-200 flex justify-between items-center">
           <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              {testimonial.date}
           </div>

           {/* The Stamp Badge */}
           <div className="flex items-center gap-1.5 border border-green-200 bg-green-50 px-3 py-1 rounded-lg transform -rotate-2 group-hover:rotate-0 transition-transform duration-300">
              <Icon name="ShieldCheck" size={14} className="text-green-600" />
              <span className="text-[10px] font-black uppercase text-green-700 tracking-wider">Approved</span>
           </div>
        </div>

      </div>
    </motion.div>
  );
};

export default TestimonialCard;
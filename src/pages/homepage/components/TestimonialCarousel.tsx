import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight, ShieldCheck, Star, MapPin } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Digital Nomad",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    country: "Japan Desk",
    comment: "I was apprehensive about the paperwork for Tokyo. The team treated my application with surgical precision. My e-Visa arrived in 72 hours.",
    rating: 5,
    location: "Tokyo, JP"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Traveler",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    country: "US Embassy Desk",
    comment: "The interview preparation was the deciding factor. I entered the US Consulate with complete confidence and left with an approval.",
    rating: 5,
    location: "New York, USA"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-[#FDFCFB] relative overflow-hidden border-t border-slate-100">
      
      {/* Background Editorial Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02]">
        <h2 className="text-[25vw] font-serif italic text-blue-900 leading-none">Testimony</h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
               <div className="h-[1px] w-12 bg-blue-900/20" />
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-900">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif italic text-slate-900">
              The Voyager’s <span className="not-italic text-blue-900 font-black">Word.</span>
            </h2>
          </div>

          {/* Heritage Navigation */}
          <div className="flex items-center gap-6">
             <button onClick={() => setCurrentIndex(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-900 transition-all">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Previous
             </button>
             <div className="h-8 w-px bg-slate-100" />
             <button onClick={() => setCurrentIndex(prev => (prev + 1) % TESTIMONIALS.length)} className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-900 transition-all">
                Next <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
             </button>
          </div>
        </div>

        {/* Main Testimonial Layout */}
        <div className="bg-white border-[1px] border-slate-100 shadow-[0_40px_100px_rgba(0,0,0,0.03)] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Col: The Detailed Testimony (8 Columns) */}
            <div className="lg:col-span-8 p-10 md:p-20 relative border-r border-slate-50">
               <Quote className="absolute top-10 left-10 w-20 h-20 text-blue-900/5 rotate-180" />
               
               <AnimatePresence mode="wait">
                 <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10"
                 >
                    <div className="flex gap-1 mb-8">
                       {[...Array(5)].map((_, i) => (
                         <Star key={i} className="w-3 h-3 text-blue-900 fill-current" />
                       ))}
                    </div>

                    <p className="text-2xl md:text-3xl font-serif italic text-slate-800 leading-[1.6] mb-12">
                      "{current.comment}"
                    </p>

                    <div className="flex items-center gap-5">
                       <img src={current.avatar} className="w-14 h-14 rounded-full grayscale hover:grayscale-0 transition-all duration-500 border-2 border-slate-50" />
                       <div>
                          <h4 className="text-sm font-black uppercase tracking-widest text-slate-900">{current.name}</h4>
                          <p className="text-xs font-serif italic text-slate-400">{current.role}</p>
                       </div>
                    </div>
                 </motion.div>
               </AnimatePresence>
            </div>

            {/* Right Col: The Verification Log (4 Columns) */}
            <div className="lg:col-span-4 bg-slate-50/50 p-10 md:p-12 flex flex-col justify-between">
               <div className="space-y-10">
                  <div>
                    <span className="text-[10px] font-black text-blue-900 uppercase tracking-widest block mb-4">Official Verification</span>
                    <div className="p-4 bg-white border border-slate-100 space-y-4">
                       <div className="flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-slate-300" />
                          <div>
                             <p className="text-[9px] font-bold text-slate-400 uppercase">Jurisdiction</p>
                             <p className="text-xs font-black text-slate-900 uppercase">{current.country}</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-3">
                          <ShieldCheck className="w-4 h-4 text-green-600" />
                          <div>
                             <p className="text-[9px] font-bold text-slate-400 uppercase">Status</p>
                             <p className="text-xs font-black text-green-700 uppercase">Visa Granted</p>
                          </div>
                       </div>
                    </div>
                  </div>

                  <div className="space-y-4 opacity-50">
                    <p className="text-[9px] leading-relaxed text-slate-400 uppercase font-bold">
                       "Every testimony is verified through our client portal to ensure authenticity of the travel outcome."
                    </p>
                  </div>
               </div>

               <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-black text-slate-300 tracking-tighter uppercase">TVT Service Record</span>
                  <div className="w-6 h-6 border-2 border-slate-100 rounded-full flex items-center justify-center text-[8px] font-bold text-slate-200">
                    {current.id}
                  </div>
               </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TestimonialCarousel;
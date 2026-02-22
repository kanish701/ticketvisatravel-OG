import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Award, Clock, ArrowRight, MessageCircle, Globe } from 'lucide-react';
import Button from '../../../components/ui/Button';

const guarantees = [
  {
    id: 1,
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Expert Verification',
    description: 'Our senior processors conduct a meticulous 40-point audit on every document to ensure a zero-error submission.',
  },
  {
    id: 2,
    icon: <Lock className="w-6 h-6" />,
    title: 'Encryption Standard',
    description: 'All identity data is protected by 256-bit AES military-grade encryption, ensuring your privacy is never compromised.',
  },
  {
    id: 3,
    icon: <Award className="w-6 h-6" />,
    title: 'Unmatched Approval',
    description: 'With a 99.8% success rate over 15,000+ applications, we lead the industry in legal clearance outcomes.',
  },
  {
    id: 4,
    icon: <Clock className="w-6 h-6" />,
    title: 'The Time Promise',
    description: 'We operate on a strict chronological clock. Real-time digital tracking keeps you informed at every milestone.',
  }
];

const GuaranteeSection = () => {
  return (
    <section className="py-24 bg-[#FDFCFB] relative overflow-hidden border-y border-slate-100">
      
      {/* Background Cartographic Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="h-full w-full" style={{ 
          backgroundImage: `url("https://www.transparenttextures.com/patterns/graphy.png")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Header */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-blue-900/20" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-900">Security Protocol</span>
            <div className="h-[1px] w-12 bg-blue-900/20" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-serif italic text-slate-900 mb-6 leading-tight">
            Our Standard of <br /> <span className="not-italic text-blue-900 font-black">Integrity.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium italic font-serif">
            "Combining human intelligence with bank-grade technology to safeguard your global aspirations."
          </p>
        </div>

        {/* The Heritage Guarantee Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-slate-100 bg-white shadow-2xl mb-24">
          {guarantees.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 border-b md:border-b-0 md:border-r border-slate-100 last:border-0 relative group overflow-hidden"
            >
              {/* Internal Framing */}
              <div className="absolute inset-0 bg-blue-900/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 space-y-8">
                <div className="w-12 h-12 flex items-center justify-center text-blue-900 bg-slate-50 group-hover:bg-blue-900 group-hover:text-white transition-all duration-500 rounded-sm">
                  {item.icon}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 uppercase tracking-widest">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-serif italic">
                    {item.description}
                  </p>
                </div>
                
                {/* Visual Anchor */}
                <div className="h-0.5 w-8 bg-blue-900/10 group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Classic CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-blue-900 p-1 md:p-2 shadow-2xl"
        >
          <div className="border border-blue-800/50 p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left relative">
            <Globe className="absolute -top-10 -right-10 w-64 h-64 text-white/5 pointer-events-none" />
            
            <div className="relative z-10 max-w-xl">
              <h3 className="text-3xl md:text-4xl font-serif italic text-white mb-4">
                Begin Your Application Process
              </h3>
              <p className="text-blue-100/70 font-medium">
                Our specialists are ready to evaluate your profile. Experience the difference of a verified travel outcome.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
              <button className="bg-white text-blue-900 px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-blue-50 transition-all flex items-center justify-center gap-3">
                Apply Now <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-white/20 text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                <MessageCircle className="w-4 h-4" /> Consult Specialist
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GuaranteeSection;
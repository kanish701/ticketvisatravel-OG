import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle, ShieldCheck,
  ArrowRight, Gem, Ticket, Sparkles
} from 'lucide-react';

// --- COMPONENT: Premium Input Field ---
// Fixed alignment issues and added smoother transitions
const InputField = ({ label, type = "text", name, placeholder, value, onChange }: any) => (
  <div className="relative group w-full">
    <input
      required
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder=" "
      className="peer w-full bg-transparent border-b border-slate-200 py-4 text-slate-900 placeholder-transparent focus:border-[#D4AF37] focus:outline-none transition-all duration-300 font-sans text-base pt-6"
    />
    <label className="absolute left-0 top-0 text-[10px] uppercase tracking-[0.15em] text-slate-400 font-bold transition-all
      peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case
      peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-[#D4AF37] peer-focus:uppercase peer-focus:tracking-[0.15em] peer-focus:font-bold"
    >
      {label}
    </label>
    {/* Active State Indicator */}
    <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-500 group-focus-within:w-full"></div>
  </div>
);

const DummyTicketPage = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', origin: '', destination: '', travelDate: '', email: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyA3cY-V-CwJwHhlUwFuJ-dp3j2make6IQrmt858ZNFD4sgdzkWDSYREcQLdhIYEyaS/exec';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSingleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, value]) => { formPayload.append(key, value); });
      formPayload.append('submittedAt', new Date().toISOString());
      await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: formPayload });
    } catch (error) { console.error("Error", error); }

    const message = `*🎫 PREMIER TICKET REQUEST*\n────────────────────\n*Client:* ${formData.name}\n*Route:* ${formData.origin} ➝ ${formData.destination}\n*Date:* ${formData.travelDate}\n────────────────────\n*Status:* Awaiting Payment.`.trim();
    window.open(`https://wa.me/919087612111?text=${encodeURIComponent(message)}`, '_blank');
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] font-sans text-slate-900 selection:bg-[#D4AF37] selection:text-white relative">

      {/* --- FIXED BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* World Map Watermark */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
          alt="World Map Background"
          // Removed sepia to reduce golden tint, kept grayscale and low opacity for subtle watermark
          className="w-[120%] h-auto object-cover opacity-[0.04] grayscale contrast-125"
        />
      </div>

      {/* REMOVED THE TWO AMBIENT GOLDEN GLOW DIVS HERE */}

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto max-w-7xl px-6 lg:px-12 py-20 lg:py-28">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* --- LEFT COLUMN: HEADER + FORM (Span 7) --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-10"
          >
            {/* HEADER ALIGNED LEFT FOR BETTER READING FLOW */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-white/50 backdrop-blur-md mb-6">
                <Gem size={10} className="text-[#D4AF37]" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">Official Documentation</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-serif text-slate-900 leading-[1.1] mb-6">
                Verify Your <br />
                <span className="italic text-slate-400 font-light">Global Journey.</span>
              </h1>
              <p className="text-lg text-slate-500 font-light leading-relaxed max-w-lg">
                Secure, verifiable flight itineraries for visa applications.
                Accepted by embassies worldwide.
              </p>
            </div>

            {/* GLASS CARD FORM */}
            <div className="bg-white/60 backdrop-blur-xl p-8 lg:p-12 shadow-[0_20px_60px_-15px_rgba(212,175,55,0.15)] rounded-[2rem] border border-white/80 relative overflow-hidden group">
              {/* Decoration: Top Gold Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50"></div>

              <div className="flex justify-between items-baseline mb-12 border-b border-slate-200/60 pb-6">
                <h2 className="text-2xl font-serif text-slate-900">Ticket Request</h2>
                <div className="text-right">
                  <span className="text-xs text-slate-400 line-through mr-2">₹3000</span>
                  <span className="text-2xl font-serif text-[#D4AF37]">₹1599</span>
                </div>
              </div>

              <form onSubmit={handleSingleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  <InputField label="Traveler Name" name="name" value={formData.name} onChange={handleChange} />
                  <InputField label="WhatsApp Number" name="phone" value={formData.phone} onChange={handleChange} />
                  <InputField label="Origin City" name="origin" value={formData.origin} onChange={handleChange} />
                  <InputField label="Destination" name="destination" value={formData.destination} onChange={handleChange} />
                  <div className="relative">
                    <InputField label="Travel Date" name="travelDate" type="date" value={formData.travelDate} onChange={handleChange} />
                  </div>
                  <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} />
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full bg-slate-900 text-white overflow-hidden rounded-xl py-5 shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.99]"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative flex items-center justify-center gap-3">
                      <span className="text-xs font-bold tracking-[0.25em] uppercase">
                        {isSubmitting ? 'Processing...' : 'Generate Itinerary'}
                      </span>
                      {!isSubmitting && <ArrowRight size={16} className="text-[#D4AF37] group-hover:text-white transition-colors" />}
                    </div>
                  </button>

                  <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-slate-400 uppercase tracking-widest">
                    <ShieldCheck size={12} />
                    <span>Encrypted & Verified PNR</span>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: INFO & TRUST (Span 5) --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-16 lg:pt-32"
          >

            {/* Features List */}
            <div>
              <h3 className="font-serif text-xl text-slate-900 mb-8 flex items-center gap-2">
                <Sparkles size={16} className="text-[#D4AF37]" />
                The Gold Standard
              </h3>
              <ul className="space-y-8">
                {[
                  { title: "Verifiable PNR", desc: "Live status check on airline websites." },
                  { title: "14 Days Validity", desc: "Covers standard visa processing times." },
                  { title: "Embassy Accepted", desc: "Valid for Schengen, US, UK, Canada." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-5 group">
                    <div className="w-px h-12 bg-slate-200 group-hover:bg-[#D4AF37] transition-colors duration-500"></div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Minimalist FAQ Accordion */}
            <div className="border-t border-slate-200 pt-8">
              <h3 className="font-serif text-xl text-slate-900 mb-6">Inquiries</h3>
              <div className="space-y-6">
                {[
                  { q: "Is this ticket valid for visa?", a: "Yes. It creates a legitimate, verifiable PNR." },
                  { q: "Can I fly using this?", a: "No. This is a reservation for proof of travel only." }
                ].map((faq, idx) => (
                  <div key={idx} className="group">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-2 group-hover:text-[#D4AF37] transition-colors">{faq.q}</h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* B2B Call to Action */}
            <div
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:border-[#D4AF37]/50 transition-colors group"
              onClick={() => window.open(`https://wa.me/919087612111?text=Bulk`, '_blank')}
            >
              <div className="flex justify-between items-center">
                <div>
                  <span className="block text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-1">Corporate</span>
                  <h3 className="font-serif text-lg text-slate-900">Bulk Orders?</h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-white transition-all">
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* --- SUCCESS MODAL --- */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white p-10 max-w-sm w-full shadow-2xl rounded-[2rem] text-center border border-white"
            >
              <div className="w-14 h-14 border border-[#D4AF37]/30 bg-[#FFFDF5] rounded-full flex items-center justify-center mx-auto mb-6 text-[#D4AF37]">
                <Ticket size={24} />
              </div>
              <h3 className="text-xl font-serif text-slate-900 mb-2">Request Sent</h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed mb-8">
                Please complete the secure payment on WhatsApp to finalize your document generation.
              </p>
              <button onClick={() => setShowSuccess(false)} className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 hover:text-[#D4AF37] transition-colors">
                Close Window
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default DummyTicketPage;
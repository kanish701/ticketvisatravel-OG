import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, ChevronRight, ShieldCheck, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#FDFCFB] text-slate-900 selection:bg-blue-900 selection:text-white pb-32">

            {/* 1. DIPLOMATIC HERO SECTION */}
            <section className="relative pt-40 pb-24 px-6 border-b border-slate-100 bg-white">
                {/* Precision Grid Texture */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
                    backgroundImage: `linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }} />

                <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-4">
                        <div className="w-12 h-[1px] bg-blue-900/30" />
                        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-900">Direct Concierge</span>
                        <div className="w-12 h-[1px] bg-blue-900/30" />
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-serif italic text-slate-900 tracking-tighter leading-none">
                        Get in <span className="not-italic font-black text-blue-900">Touch.</span>
                    </h1>

                    <p className="text-slate-400 text-lg md:text-xl font-medium italic font-serif leading-relaxed max-w-2xl mx-auto">
                        "Speak with our senior processors for an immediate assessment of your global travel profile."
                    </p>
                </div>
            </section>

            {/* 2. BUREAU CHANNELS */}
            <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 shadow-2xl">
                    {[
                        { label: 'Voice Line', details: '+91 90876 12111', sub: 'Mon-Sat, 9am - 6pm', icon: <Phone size={20} /> },
                        { label: 'Official Email', details: 'ticketvisatravel@gmail.com', sub: 'Priority Response', icon: <Mail size={20} /> },
                        { label: 'Mainland HQ', details: 'Kathir IT Park, Coimbatore', sub: 'Tamil Nadu - 641062', icon: <MapPin size={20} /> }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-10 space-y-6 group hover:bg-slate-50 transition-colors">
                            <div className="text-blue-900 opacity-20 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                            <div className="space-y-2">
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">{item.label}</p>
                                <p className="text-lg font-serif italic text-slate-900">{item.details}</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{item.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. THE INQUIRY LEDGER & MAP */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                    {/* Official Form Ledger */}
                    <div className="lg:col-span-7 bg-white border border-slate-100 p-2 shadow-2xl">
                        <div className="border border-blue-900/10 p-10 md:p-16 space-y-12">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-serif italic text-slate-900">Inquiry Record</h2>
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-900/40">Register your request below</p>
                            </div>

                            {isSubmitted ? (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 space-y-6">
                                    <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mx-auto">
                                        <ShieldCheck size={32} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-serif italic">Message Authenticated</h3>
                                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Our desk will contact you within 24 hours.</p>
                                    </div>
                                    <button onClick={() => setIsSubmitted(false)} className="text-blue-900 font-black uppercase tracking-widest text-[10px] border-b border-blue-900 pb-1">
                                        Send New Record
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="space-y-1">
                                            <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">Full Legal Name</label>
                                            <input name="name" required value={formData.name} onChange={handleChange} className="w-full bg-transparent border-none border-b border-slate-100 py-2 font-serif italic text-lg focus:border-blue-900 outline-none transition-all placeholder:text-slate-100" placeholder="e.g. Johnathan Doe" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                                            <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-transparent border-none border-b border-slate-100 py-2 text-sm font-bold focus:border-blue-900 outline-none transition-all placeholder:text-slate-100 uppercase" placeholder="client@domain.com" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="space-y-1">
                                            <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">Phone Registry</label>
                                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-transparent border-none border-b border-slate-100 py-2 text-sm font-bold focus:border-blue-900 outline-none transition-all placeholder:text-slate-100" placeholder="+91 00000 00000" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">Subject Category</label>
                                            <select name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-transparent border-none border-b border-slate-100 py-2 text-sm font-bold focus:border-blue-900 outline-none transition-all appearance-none cursor-pointer uppercase">
                                                <option value="">Select Protocol</option>
                                                <option value="visa">Visa Protocol</option>
                                                <option value="ticket">Flight Reservation</option>
                                                <option value="other">General Inquiry</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">Message Brief</label>
                                        <textarea name="message" required rows={4} value={formData.message} onChange={handleChange} className="w-full bg-transparent border-none border-b border-slate-100 py-2 font-serif italic text-lg focus:border-blue-900 outline-none transition-all resize-none placeholder:text-slate-100" placeholder="How can our bureau assist you?" />
                                    </div>

                                    <button type="submit" disabled={isSubmitting} className="w-full bg-blue-900 hover:bg-black text-white py-6 text-[10px] font-black uppercase tracking-[0.5em] transition-all flex items-center justify-center gap-4 group">
                                        {isSubmitting ? "Authenticating..." : <>Submit Record <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" /></>}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Desktop Map Overlay */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="bg-white border border-slate-100 p-2 shadow-2xl h-[450px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.656514101487!2d77.06014467586524!3d11.064372553818314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f99e4695027b%3A0xe9650d5071191060!2sKathir%20IT%20Park!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                            ></iframe>
                        </div>

                        {/* WhatsApp Priority Card */}
                        <div className="bg-blue-900 p-10 text-white space-y-6 relative overflow-hidden group cursor-pointer" onClick={() => window.open('https://wa.me/919087612111', '_blank')}>
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                                <MessageCircle size={120} />
                            </div>
                            <div className="relative z-10 space-y-4">
                                <h3 className="text-2xl font-serif italic">Priority Advisory</h3>
                                <p className="text-[10px] font-bold text-blue-200 uppercase tracking-widest leading-loose">
                                    Instant jurisdictional support available via our verified WhatsApp channel.
                                </p>
                                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] pt-4">
                                    Open Channel <ArrowRight size={14} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. OFFICE HOURS REGISTRY */}
            <section className="max-w-4xl mx-auto px-6 text-center">
                <div className="p-12 border-4 border-double border-slate-100 bg-white space-y-6">
                    <Clock size={32} className="mx-auto text-blue-900 opacity-20" />
                    <h3 className="text-2xl font-serif italic text-slate-900">Standard Desk Hours</h3>
                    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <div className="space-y-1">
                            <p className="text-blue-900">Monday — Saturday</p>
                            <p>09:00 AM — 06:00 PM IST</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-red-900/40">Sunday</p>
                            <p>Desk Closed</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
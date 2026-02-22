import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { servicesData } from '../../../data/ServicesData';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Globe, ShieldCheck, Clock, ArrowRight, Landmark, ScrollText, MessageSquare } from 'lucide-react';

const ServiceDetailPage = () => {
    const { category, subType } = useParams();
    const navigate = useNavigate();

    const categoryData = servicesData.find(s => s.id === category);
    const service = categoryData?.subServices.find(sub => sub.id === subType);

    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

    if (!service) return (
        <div className="h-screen flex items-center justify-center font-serif italic text-slate-400">
            Jurisdiction Record Not Found.
        </div>
    );

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = `*OFFICIAL ELIGIBILITY INQUIRY*\nRef: ${service.title}\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nNote: ${formData.message}`;
        window.open(`https://wa.me/919087612111?text=${encodeURIComponent(msg)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-[#FDFCFB] text-slate-900 selection:bg-blue-900 selection:text-white pb-32">

            {/* 1. DIPLOMATIC HEADER SECTION */}
            <header className="relative pt-32 pb-16 px-6 border-b border-slate-100 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Heritage Breadcrumb */}
                    <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-12">
                        <Link to="/" className="hover:text-blue-900 transition-colors">Archive</Link>
                        <ChevronRight size={10} />
                        <Link to={`/services/${category}`} className="hover:text-blue-900 transition-colors capitalize">{category}</Link>
                        <ChevronRight size={10} />
                        <span className="text-blue-900">{service.title}</span>
                    </nav>

                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-7 space-y-8">
                            <div className="flex items-center gap-3">
                                <div className="h-[1px] w-12 bg-blue-900/30" />
                                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-900">Priority Case File</span>
                            </div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-7xl font-serif italic text-slate-900 leading-[1.1]"
                            >
                                {service.title}<span className="not-italic text-blue-900">.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-xl text-slate-500 font-medium italic font-serif leading-relaxed max-w-2xl"
                            >
                                "{service.description}"
                            </motion.p>

                            <div className="flex gap-12 pt-4">
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-2">Success Rate</p>
                                    <p className="text-3xl font-serif italic text-blue-900">98.5%</p>
                                </div>
                                <div className="h-12 w-[1px] bg-slate-100" />
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-2">Processing</p>
                                    <p className="text-3xl font-serif italic text-blue-900">Verified</p>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="lg:col-span-5 relative group"
                        >
                            <div className="absolute -inset-4 border border-blue-900/5 pointer-events-none group-hover:-inset-2 transition-all duration-700" />
                            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
                                <img src={service.heroImage || categoryData?.heroImage} alt="Bureau Detail" className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000" />
                                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* 2. CASE ANALYSIS GRID */}
            <main className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                    {/* LEFT: Briefing Content */}
                    <div className="lg:col-span-7 space-y-24">

                        {/* Section I: Protocol */}
                        <section className="space-y-10">
                            <div className="flex items-center gap-4">
                                <Landmark className="w-6 h-6 text-blue-900/30" />
                                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-blue-900">Section I: Process Protocol</h2>
                            </div>
                            <div className="prose prose-slate prose-lg font-serif text-slate-600 leading-relaxed italic">
                                <p>Navigating the <span className="text-blue-900 font-bold">{service.title}</span> requires an acute understanding of jurisdictional nuances. Our 6-year veteran desk handles the complete lifecycle—from initial statutory mapping to final diplomatic filing.</p>
                            </div>
                        </section>

                        {/* Section II: Mandatory Records */}
                        <section className="space-y-12">
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                <ScrollText className="w-6 h-6 text-blue-900/30" />
                                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-blue-900">Section II: Mandatory Records</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-16">
                                {service.requirements.map((req, i) => (
                                    <div key={i} className="space-y-3 group">
                                        <div className="flex items-center gap-4">
                                            <span className="text-[10px] font-black text-blue-900/20 group-hover:text-blue-900 transition-colors">0{i + 1}</span>
                                            <div className="h-[1px] flex-1 bg-slate-100" />
                                        </div>
                                        <p className="text-sm font-bold text-slate-700 uppercase tracking-tighter leading-relaxed">
                                            {req}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* RIGHT: The Official Ledger (Sticky Form) */}
                    <aside className="lg:col-span-5">
                        <div className="sticky top-32">
                            <div className="bg-white border border-slate-100 p-2 shadow-2xl">
                                <div className="border border-blue-900/10 p-10 space-y-10">
                                    <div className="text-center space-y-2">
                                        <h3 className="text-2xl font-serif italic text-slate-900 tracking-tight">Eligibility Ledger</h3>
                                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-900/40">Request Bureau Assessment</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="space-y-6">
                                            <div className="space-y-1">
                                                <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Legal Name</label>
                                                <input name="name" required value={formData.name} onChange={handleInput} className="w-full bg-transparent border-none border-b border-slate-100 py-2 font-serif italic text-lg focus:border-blue-900 outline-none transition-all placeholder:text-slate-100" placeholder="Johnathan Doe" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Register</label>
                                                <input type="email" name="email" required value={formData.email} onChange={handleInput} className="w-full bg-transparent border-none border-b border-slate-100 py-2 text-sm font-bold focus:border-blue-900 outline-none transition-all placeholder:text-slate-100" placeholder="CLIENT@DOMAIN.COM" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Diplomatic Line (WhatsApp)</label>
                                                <input type="tel" name="phone" required value={formData.phone} onChange={handleInput} className="w-full bg-transparent border-none border-b border-slate-100 py-2 text-sm font-bold focus:border-blue-900 outline-none transition-all placeholder:text-slate-100" placeholder="+91 00000 00000" />
                                            </div>
                                        </div>

                                        <button type="submit" className="w-full bg-blue-900 hover:bg-black text-white py-6 text-[10px] font-black uppercase tracking-[0.5em] transition-all flex items-center justify-center gap-4 group">
                                            Initiate Case <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                        </button>
                                    </form>

                                    <div className="pt-6 border-t border-slate-50 flex items-center justify-center gap-3">
                                        <ShieldCheck size={14} className="text-green-600" />
                                        <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest text-center leading-loose">
                                            Encrypted Submission • Authenticated Processing <br /> Coimbatore Division
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default ServiceDetailPage;
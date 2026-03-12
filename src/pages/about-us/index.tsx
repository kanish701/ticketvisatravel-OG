import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Globe, Clock, ArrowRight, Heart, Star } from 'lucide-react';

const AboutUs: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-50 pb-32">
            
            {/* 1. ULTRA-CLEAN HERO */}
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center justify-center gap-3"
                    >
                        <div className="h-px w-8 bg-blue-600/20" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Established 2018</span>
                        <div className="h-px w-8 bg-blue-600/20" />
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif italic tracking-tighter leading-none"
                    >
                        Travel made <br /> 
                        <span className="not-italic font-black text-blue-900">Simple.</span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto font-medium leading-relaxed"
                    >
                        Applying for a visa doesn't have to be hard. We are here to handle the paperwork so you can focus on your journey.
                    </motion.p>
                </div>
            </section>

            {/* 2. OUR STORY (Asymmetrical Minimalist) */}
            <section className="py-24 px-6 border-y border-slate-50">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    
                    <div className="relative group">
                        <div className="relative aspect-video overflow-hidden rounded-sm bg-slate-100 shadow-2xl transition-all duration-700 group-hover:shadow-blue-900/5">
                            <img 
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069" 
                                alt="Our Story" 
                                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000"
                            />
                        </div>
                        {/* Decorative Corner */}
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-blue-900/10 -z-10" />
                    </div>

                    <div className="space-y-10">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-serif italic text-slate-900">Started in Coimbatore.</h2>
                            <p className="text-slate-500 text-lg leading-relaxed">
                                Six years ago, we noticed that many travelers were confused by complicated visa rules. We decided to build a service that provides <b>clear answers</b> and <b>honest results</b>.
                            </p>
                            <p className="text-slate-400 text-base leading-relaxed">
                                Since then, we have successfully processed thousands of applications. Our secret is simple: we treat your travel dreams as our own priority.
                            </p>
                        </div>

                        <div className="flex gap-12 pt-6 border-t border-slate-50">
                            <div className="space-y-1">
                                <p className="text-3xl font-serif italic text-blue-900">98%</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Approval Rate</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-3xl font-serif italic text-blue-900">10k+</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CORE VALUES (Grid without boxes) */}
            <section className="py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {[
                            {
                                icon: ShieldCheck,
                                title: "Honest",
                                desc: "No false promises. We tell you exactly what your chances are before you pay."
                            },
                            {
                                icon: Clock,
                                title: "Fast",
                                desc: "Our team works daily to ensure your application moves as quickly as possible."
                            },
                            {
                                icon: Star,
                                title: "Proven",
                                desc: "With 6 years of experience, we know exactly what embassies are looking for."
                            }
                        ].map((item, i) => (
                            <div key={i} className="space-y-6 group">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-50 text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-all duration-500">
                                    <item.icon size={20} />
                                </div>
                                <h3 className="text-xl font-serif italic text-slate-900">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed leading-loose">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CALL TO ACTION (Simple Block) */}
            <section className="px-6">
                <div className="max-w-5xl mx-auto bg-slate-900 py-20 px-10 md:px-20 rounded-sm text-center relative overflow-hidden">
                    {/* Minimalist Grid Pattern Overlay */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
                    
                    <div className="relative z-10 space-y-10">
                        <h2 className="text-3xl md:text-5xl font-serif italic text-white leading-tight">
                            Ready to start <br /> <span className="not-italic font-black text-blue-400">your journey?</span>
                        </h2>
                        
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                            <button 
                                onClick={() => navigate('/services')}
                                className="group flex items-center gap-4 bg-white text-slate-900 px-10 py-5 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-blue-50 transition-all"
                            >
                                View Services <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            
                            <button 
                                onClick={() => window.open('https://wa.me/919087612111', '_blank')}
                                className="text-white text-[10px] font-black uppercase tracking-[0.3em] border-b border-white/20 pb-2 hover:border-blue-400 transition-all"
                            >
                                WhatsApp Consult
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUs;
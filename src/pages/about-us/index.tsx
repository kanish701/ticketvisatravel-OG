import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Globe, Clock, Award, ArrowRight, Heart, Users, MapPin } from 'lucide-react';

const AboutUs: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 pb-24">

            {/* 1. SIMPLE HERO SECTION */}
            <section className="pt-32 pb-16 px-6 bg-slate-50">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-blue-600 font-bold uppercase tracking-widest text-xs"
                    >
                        Helping you travel since 2018
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight"
                    >
                        We make your global <br />
                        <span className="text-blue-600">dreams come true.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        Applying for a visa can be stressful and confusing.
                        We started this company to make travel easy, honest, and fast for everyone.
                    </motion.p>
                </div>
            </section>

            {/* 2. OUR STORY SECTION */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden shadow-xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
                            alt="Our Office"
                            className="w-full h-auto"
                        />
                    </motion.div>

                    {/* Text Side */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-slate-900">How we started</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                We began 6 years ago with a small team in Coimbatore. Back then, we saw many people losing money and time because of wrong visa information.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Today, we have helped over <strong>10,000+ people</strong> move to countries like the UK, USA, and Canada. We treat every application like it is our own.
                            </p>
                        </div>

                        {/* Simple Numbers */}
                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                                <p className="text-2xl font-bold text-blue-700">98%</p>
                                <p className="text-sm text-slate-500 font-medium">Approval Rate</p>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                                <p className="text-2xl font-bold text-blue-700">6+ Years</p>
                                <p className="text-sm text-slate-500 font-medium">Expert Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. WHY CHOOSE US (Simple 3-Card Grid) */}
            <section className="py-20 px-6 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Why travelers trust us</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: ShieldCheck,
                                title: "Honest Advice",
                                desc: "We tell you the truth about your chances. If we can't do it, we will tell you honestly.",
                                color: "text-green-600"
                            },
                            {
                                icon: Clock,
                                title: "On-Time Service",
                                desc: "We know your time is valuable. We work fast to make sure you never miss your flight.",
                                color: "text-blue-600"
                            },
                            {
                                icon: Heart,
                                title: "Full Support",
                                desc: "From filling forms to booking flights, we stay with you until you reach your destination.",
                                color: "text-red-500"
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <item.icon size={32} className={`${item.color} mb-6`} />
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. FINAL CALL TO ACTION */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto bg-blue-900 rounded-3xl p-10 md:p-16 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your journey?</h2>
                    <p className="text-blue-100 text-lg mb-10">
                        Stop worrying about paperwork. Let our experts handle everything for you.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => navigate('/services')}
                            className="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                        >
                            See All Services <ArrowRight size={18} />
                        </button>
                        <button
                            onClick={() => window.open('https://wa.me/919087612111', '_blank')}
                            className="px-8 py-4 bg-blue-800 text-white font-bold rounded-xl border border-blue-700 hover:bg-blue-700 transition-colors"
                        >
                            Talk to an Expert
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUs;
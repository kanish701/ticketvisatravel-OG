import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ArrowRight } from 'lucide-react';

const WhatsAppToggle = () => {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = "919087612111";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi! I need help with my visa application.`;

    return (
        <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end gap-6 pointer-events-none">
            
            {/* 1. THE ADVISORY NOTE (Bespoke Style) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="pointer-events-auto bg-white border border-slate-100 p-8 shadow-[0_30px_60px_rgba(0,0,0,0.12)] rounded-sm max-w-[300px] relative overflow-hidden"
                    >
                        {/* Decorative Top Line */}
                        <div className="absolute top-0 left-0 w-full h-[3px] bg-blue-900" />
                        
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-900/40">Bureau Advisory</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-slate-300 hover:text-blue-900 transition-colors"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        <div className="space-y-4 mb-8">
                            <h3 className="text-xl font-serif italic text-slate-900">How can we help?</h3>
                            <p className="text-sm font-medium text-slate-500 leading-relaxed uppercase tracking-tighter">
                                Speak directly with our senior processors for an immediate profile assessment.
                            </p>
                        </div>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between bg-blue-900 hover:bg-black text-white px-6 py-4 transition-all duration-500 group rounded-sm"
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Start Chat</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 2. THE CONCIERGE NODE */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ y: -4 }}
                className={`
                    pointer-events-auto w-14 h-14 flex items-center justify-center transition-all duration-700 rounded-full border
                    ${isOpen 
                        ? 'bg-white border-slate-100 text-blue-900 shadow-xl' 
                        : 'bg-blue-900 border-blue-900 text-white shadow-2xl shadow-blue-900/20'}
                `}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <X size={20} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="relative"
                        >
                            <MessageCircle size={22} strokeWidth={2.5} />
                            {/* Static Notification Dot (Clean) */}
                            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-400 rounded-full border-2 border-blue-900" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
};

export default WhatsAppToggle;
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScroll = () => {
            const currentScrollY = window.scrollY;
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            
            // Show button after 400px
            setIsVisible(currentScrollY > 400);
            
            // Calculate progress percentage for the line
            if (totalHeight > 0) {
                setScrollProgress((currentScrollY / totalHeight) * 100);
            }
        };

        window.addEventListener('scroll', updateScroll);
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="fixed bottom-10 left-10 z-50 flex flex-col items-center gap-4"
                >
                    {/* 1. VERTICAL PROGRESS TRACKER */}
                    <div className="w-[1.5px] h-16 bg-slate-100 relative overflow-hidden">
                        <motion.div 
                            className="absolute top-0 left-0 w-full bg-blue-900 origin-top"
                            style={{ height: `${scrollProgress}%` }}
                        />
                    </div>

                    {/* 2. THE GHOST BUTTON */}
                    <button
                        onClick={scrollToTop}
                        className={cn(
                            "group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500",
                            "bg-white/80 backdrop-blur-md border border-slate-200 text-slate-400",
                            "hover:border-blue-900 hover:text-blue-900 hover:shadow-xl hover:-translate-y-1"
                        )}
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={20} className="transition-transform duration-500 group-hover:-translate-y-0.5" strokeWidth={2} />
                        
                        {/* Interactive Tooltip */}
                        <span className="absolute left-16 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-black uppercase tracking-[0.3em] text-blue-900 whitespace-nowrap pointer-events-none">
                            Back to Top
                        </span>
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BackToTopButton;
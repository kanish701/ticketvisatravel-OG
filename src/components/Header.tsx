import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, MessageCircle, Globe } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'HOME', path: '/homepage' },
    { label: 'SERVICES', path: '/services' },
    { label: 'ABOUT US', path: '/about-us' },
    { label: 'CONTACT US', path: '/contact-us' },
    { label: 'FLIGHT BOOKING', path: '/travel-services' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${
          isScrolled 
            ? 'py-4 bg-white/80 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.02)]' 
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between">
            
            {/* 1. Branding: Clean & Scaled */}
            <Link to="/homepage" className="relative z-10">
              <img
                src="/assets/images/Ticket Visa Travel Logo.png"
                alt="Visa Logo"
                className={`h-10 lg:h-12 w-auto object-contain transition-all duration-500 ${
                  isScrolled ? 'brightness-100' : 'brightness-110'
                }`}
              />
            </Link>

            {/* 2. Central Navigation: The "Minimalist Spine" */}
            <nav className="hidden lg:flex items-center gap-12">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    group relative text-[10px] font-black uppercase tracking-[0.4em] transition-colors duration-300
                    ${isActive(item.path) ? 'text-blue-900' : 'text-slate-400 hover:text-slate-900'}
                  `}
                >
                  {item.label}
                  {/* Modern Animated Underline */}
                  <span className={`absolute -bottom-2 left-0 h-[1.5px] bg-blue-900 transition-all duration-500 ${
                    isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </nav>

            {/* 3. Refined Actions: "Ghost" Style */}
            <div className="hidden lg:flex items-center gap-10">
              <button
                onClick={() => window.open('https://wa.me/919087612111', '_blank')}
                className="flex items-center gap-2 text-slate-400 hover:text-green-600 transition-all duration-300"
              >
                <MessageCircle size={16} strokeWidth={2.5} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Chat</span>
              </button>

              <button
                onClick={() => navigate('/application-portal')}
                className={`
                  px-8 py-3 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500
                  ${isScrolled 
                    ? 'bg-blue-900 text-white hover:bg-black shadow-lg shadow-blue-900/10' 
                    : 'bg-white/10 backdrop-blur-md border border-white/20 text-slate-900 hover:bg-white'
                  }
                `}
              >
                Start Process
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden relative z-10 p-2 text-slate-900"
            >
              <div className="space-y-1.5">
                <div className="w-6 h-0.5 bg-current" />
                <div className="w-4 h-0.5 bg-current ml-auto" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* 4. Full-Screen Minimalist Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-white transition-all duration-700 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-10'
        }`}
      >
        <div className="h-full flex flex-col p-12">
          <div className="flex justify-between items-center mb-24">
            <img src="/assets/images/Ticket Visa Travel Logo.png" className="h-10" alt="Logo" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-900">
              <X size={32} strokeWidth={1} />
            </button>
          </div>

          <nav className="flex flex-col gap-10">
            {navigationItems.map((item, idx) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-serif italic text-slate-900 hover:pl-4 transition-all duration-500"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-8">
            <div className="h-px w-full bg-slate-100" />
            <button
              onClick={() => { navigate('/application-portal'); setIsMobileMenuOpen(false); }}
              className="w-full py-6 bg-blue-900 text-white text-xs font-black uppercase tracking-[0.5em]"
            >
              Apply Portal
            </button>
            <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span>Coimbatore HQ</span>
              <Globe size={14} />
              <span>Est. 2024</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
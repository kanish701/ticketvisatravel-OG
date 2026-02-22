import React from 'react';
import { Link } from 'react-router-dom';
import {
    Facebook, Twitter, Instagram, Linkedin, 
    Mail, MapPin, Phone, MessageCircle, ArrowUpRight
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Main Content Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
                    
                    {/* Column 1: Brand & Bio */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link to="/">
                            <img
                                src="/assets/images/Ticket Visa Travel Logo.png"
                                alt="Logo"
                                className="h-10 w-auto"
                            />
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                            Your trusted partner for global travel and visa processing. 
                            We simplify the journey with expert guidance and 6 years of industry experience.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                                <a key={i} href="https://www.instagram.com/ticketvisatravelcompany/" className="p-2 bg-slate-50 text-slate-400 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-slate-900 mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><Link to="/about-us" className="hover:text-blue-900 transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-blue-900 transition-colors">Our Services</Link></li>
                            <li><Link to="/contact-us" className="hover:text-blue-900 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-slate-900 mb-6">Services</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><Link to="/travel-services" className="hover:text-blue-900 transition-colors">Flight Booking</Link></li>
                            <li><Link to="/services" className="hover:text-blue-900 transition-colors">Study Visas</Link></li>
                            <li><Link to="/services" className="hover:text-blue-900 transition-colors">Work Visas</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl">
                        <h4 className="font-bold text-slate-900 mb-4">Contact Our Desk</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-blue-900 mt-1 shrink-0" />
                                <p className="text-sm text-slate-600">
                                    Block-A, Kathir IT Park, Kathir Campus, Coimbatore, TN - 641062
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-blue-900 shrink-0" />
                                <a href="mailto:ticketvisatravel@gmail.com" className="text-sm text-slate-600 hover:text-blue-900 transition-colors">
                                    ticketvisatravel@gmail.com
                                </a>
                            </div>
                            <button 
                                onClick={() => window.open('https://wa.me/919087612111', '_blank')}
                                className="w-full mt-4 flex items-center justify-center gap-2 bg-blue-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-800 transition-colors"
                            >
                                <MessageCircle size={18} />
                                WhatsApp Expert Chat
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-400">
                        © {currentYear} Ticket Visa Travel. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-slate-400 font-medium">
                        <Link to="/privacy-policy" className="hover:text-slate-900">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-slate-900">Terms & Conditions</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
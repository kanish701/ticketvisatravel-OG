import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, PlaneTakeoff, ShieldCheck, Zap, Navigation, BedDouble, Calendar, ChevronDown, Check, Search, Globe } from 'lucide-react';

type FlightClass = 'economy' | 'business' | 'first' | 'private';

const COUNTRIES = [
    "United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "United Arab Emirates", 
    "India", "Singapore", "Japan", "Switzerland", "Italy", "Spain", "Netherlands", "Qatar", "Thailand"
].sort();

const FlightConcierge: React.FC = () => {
    const [flightClass, setFlightClass] = useState<FlightClass>('business');
    const [isClassOpen, setIsClassOpen] = useState(false);
    const [includeStay, setIncludeStay] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Search States
    const [originSearch, setOriginSearch] = useState('');
    const [destSearch, setDestSearch] = useState('');
    const [activeSearch, setActiveSearch] = useState<'origin' | 'dest' | null>(null);

    const [formData, setFormData] = useState({
        name: '', phone: '', origin: '', destination: '', departureDate: '', arrivalDate: '', requests: ''
    });

    const flightClassOptions = [
        { id: 'private', label: 'Private Jet / Charter' },
        { id: 'first', label: 'First Class' },
        { id: 'business', label: 'Business Class' },
        { id: 'economy', label: 'Premium Economy' },
    ];

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const selectCountry = (type: 'origin' | 'destination', country: string) => {
        setFormData(prev => ({ ...prev, [type]: country }));
        if (type === 'origin') setOriginSearch(country);
        else setDestSearch(country);
        setActiveSearch(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const message = `*NEW BOOKING REQUEST*%0A` +
            `--------------------------%0A` +
            `*Name:* ${formData.name}%0A` +
            `*Phone:* ${formData.phone}%0A` +
            `*Route:* ${formData.origin} ✈️ ${formData.destination}%0A` +
            `*Departure:* ${formData.departureDate}%0A` +
            `*Arrival:* ${formData.arrivalDate}%0A` +
            `*Class:* ${flightClass.toUpperCase()}%0A` +
            `*Stay Included:* ${includeStay ? 'YES' : 'NO'}%0A` +
            `*Requests:* ${formData.requests || 'None'}`;

        window.open(`https://wa.me/919087612111?text=${message}`, '_blank');
        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-[#FDFDFD] font-sans flex items-center justify-center p-0 lg:p-12 selection:bg-blue-600/20 antialiased">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-7xl bg-white shadow-[0_50px_100px_-30px_rgba(0,0,0,0.08)] lg:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row min-h-screen lg:min-h-[850px] border border-slate-100"
            >
                {/* Visual Side */}
                <div className="lg:w-5/12 relative hidden lg:block overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1464039397811-476f652a343b?q=80&w=2543&auto=format&fit=crop" className="absolute inset-0 w-full h-full
                     object-cover grayscale-[20%]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80" />
                    <div className="absolute bottom-16 left-12">
                        <h1 className="text-6xl font-extrabold tracking-tighter text-white leading-none uppercase italic mb-4">Direct<br /><span className="text-blue-500 not-italic font-light text-5xl">Routing.</span></h1>
                    </div>
                </div>

                {/* Form Side */}
                <div className="lg:w-7/12 p-8 lg:p-20 flex flex-col justify-center bg-white">
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <Zap className="w-4 h-4 text-blue-600 fill-blue-600" />
                            <span className="text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase">Flight Manifest Protocol</span>
                        </div>
                        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tighter uppercase leading-none">Book <span className="italic font-light text-blue-600">Now.</span></h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-10">
                        {/* Passenger Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="relative">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Legal Name</label>
                                <input name="name" required onChange={handleInput} className="w-full bg-transparent border-b border-slate-200 py-3 text-sm font-bold focus:border-blue-600 focus:outline-none transition-all" />
                            </div>
                            <div className="relative">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">WhatsApp Number</label>
                                <input name="phone" required onChange={handleInput} className="w-full bg-transparent border-b border-slate-200 py-3 text-sm font-bold focus:border-blue-600 focus:outline-none transition-all" />
                            </div>
                        </div>

                        {/* Searchable Route Selection */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* Origin Search */}
                            <div className="relative">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Departing From</label>
                                <div className="flex items-center border-b border-slate-200 focus-within:border-blue-600 transition-all">
                                    <input 
                                        value={originSearch}
                                        onChange={(e) => {setOriginSearch(e.target.value); setActiveSearch('origin');}}
                                        onFocus={() => setActiveSearch('origin')}
                                        placeholder="Search country..."
                                        className="w-full bg-transparent py-3 text-sm font-bold focus:outline-none"
                                    />
                                    <Navigation className="w-4 h-4 text-slate-300" />
                                </div>
                                <AnimatePresence>
                                    {activeSearch === 'origin' && (
                                        <motion.div initial={{opacity:0, y:5}} animate={{opacity:1, y:0}} exit={{opacity:0}} className="absolute left-0 right-0 top-full mt-2 bg-white border border-slate-100 shadow-2xl rounded-2xl z-50 max-h-48 overflow-y-auto">
                                            {COUNTRIES.filter(c => c.toLowerCase().includes(originSearch.toLowerCase())).map(c => (
                                                <div key={c} onClick={() => selectCountry('origin', c)} className="px-6 py-3 text-xs font-bold uppercase hover:bg-blue-50 cursor-pointer">{c}</div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Destination Search */}
                            <div className="relative">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Arriving At</label>
                                <div className="flex items-center border-b border-slate-200 focus-within:border-blue-600 transition-all">
                                    <input 
                                        value={destSearch}
                                        onChange={(e) => {setDestSearch(e.target.value); setActiveSearch('dest');}}
                                        onFocus={() => setActiveSearch('dest')}
                                        placeholder="Search country..."
                                        className="w-full bg-transparent py-3 text-sm font-bold focus:outline-none"
                                    />
                                    <PlaneTakeoff className="w-4 h-4 text-slate-300" />
                                </div>
                                <AnimatePresence>
                                    {activeSearch === 'dest' && (
                                        <motion.div initial={{opacity:0, y:5}} animate={{opacity:1, y:0}} exit={{opacity:0}} className="absolute left-0 right-0 top-full mt-2 bg-white border border-slate-100 shadow-2xl rounded-2xl z-50 max-h-48 overflow-y-auto">
                                            {COUNTRIES.filter(c => c.toLowerCase().includes(destSearch.toLowerCase())).map(c => (
                                                <div key={c} onClick={() => selectCountry('destination', c)} className="px-6 py-3 text-xs font-bold uppercase hover:bg-blue-50 cursor-pointer">{c}</div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Dates & Dropdown */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="relative">
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2"><Calendar className="w-3 h-3"/> Departure</label>
                                <input type="date" name="departureDate" required onChange={handleInput} className="w-full bg-transparent border-b border-slate-200 py-2 text-sm font-bold focus:border-blue-600 focus:outline-none" />
                            </div>
                            <div className="relative">
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2"><Calendar className="w-3 h-3"/> Return</label>
                                <input type="date" name="arrivalDate" required onChange={handleInput} className="w-full bg-transparent border-b border-slate-200 py-2 text-sm font-bold focus:border-blue-600 focus:outline-none" />
                            </div>
                        </div>

                        {/* Custom Dropdown */}
                        <div className="relative">
                            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Cabin Preference</label>
                            <div className="relative flex items-center justify-between border-b border-slate-200 py-3 cursor-pointer hover:border-slate-400" onClick={() => setIsClassOpen(!isClassOpen)}>
                                <span className="text-sm font-bold text-slate-900 uppercase">{flightClassOptions.find(o => o.id === flightClass)?.label}</span>
                                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isClassOpen ? 'rotate-180 text-blue-600' : ''}`} />
                            </div>
                            <AnimatePresence>
                                {isClassOpen && (
                                    <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:10}} className="absolute left-0 right-0 top-full mt-2 bg-white border border-slate-100 shadow-2xl rounded-2xl z-50 overflow-hidden">
                                        {flightClassOptions.map(o => (
                                            <div key={o.id} onClick={() => {setFlightClass(o.id as FlightClass); setIsClassOpen(false);}} className={`flex items-center justify-between px-6 py-4 cursor-pointer text-xs font-bold uppercase tracking-widest hover:bg-slate-50 ${flightClass === o.id ? 'bg-blue-50 text-blue-600' : 'text-slate-500'}`}>{o.label} {flightClass === o.id && <Check className="w-4 h-4" />}</div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl cursor-pointer hover:bg-slate-100" onClick={() => setIncludeStay(!includeStay)}>
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${includeStay ? 'bg-blue-600 text-white' : 'bg-white text-slate-400'}`}><BedDouble className="w-5 h-5" /></div>
                            <div>
                                <p className="text-[10px] font-black uppercase text-slate-900 tracking-widest leading-none">Hotel Stay</p>
                                <p className="text-[9px] text-slate-400 font-bold mt-1 uppercase">{includeStay ? 'Include Accommodation' : 'Add Stays?'}</p>
                            </div>
                        </div>

                        <div className="pt-6">
                            <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto group flex items-center justify-center gap-8 bg-slate-950 text-white pl-12 pr-4 py-4 rounded-full hover:bg-blue-600 transition-all duration-500 shadow-xl shadow-slate-900/10">
                                <span className="text-[11px] font-black uppercase tracking-[0.5em]">{isSubmitting ? 'Transmitting...' : 'Send to WhatsApp'}</span>
                                <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all duration-500"><ArrowRight size={20} /></span>
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default FlightConcierge;
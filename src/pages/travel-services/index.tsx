import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// --- TYPES ---
type ServiceType = 'flight_hotel' | 'flight' | 'hotel';
type BudgetType = 'economy' | 'business' | 'luxury';

const ConciergeBooking: React.FC = () => {

    // ✅ YOUR GOOGLE SCRIPT URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzxiLT-Qdm5E7_j6NT132lnmnqCJZiD4fyh68HghY8lz0zCnNEPGXAexwcLZhU1FjMD/exec";

    // --- STATE ---
    const [service, setService] = useState<ServiceType>('flight_hotel');
    const [budget, setBudget] = useState<BudgetType>('luxury');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        origin: '',
        destination: '',
        date: '',
        requests: ''
    });

    // --- HANDLERS ---
    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // 1. Prepare Form Data
        const formPayload = new URLSearchParams();
        formPayload.append('name', formData.name);
        formPayload.append('phone', formData.phone);
        formPayload.append('origin', formData.origin);
        formPayload.append('destination', formData.destination);
        formPayload.append('date', formData.date);
        formPayload.append('requests', formData.requests);
        formPayload.append('service', service);
        formPayload.append('budget', budget);

        try {
            // 2. Send ONLY to Google Sheets
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formPayload.toString(),
            });

            // 3. Success Message (No WhatsApp)
            alert("✅ Request successfully sent to our Concierge Team!");

            // Optional: Reset form after success
            setFormData({
                name: '', phone: '', origin: '', destination: '', date: '', requests: ''
            });

        } catch (error) {
            console.error("Error saving to sheet", error);
            alert("❌ There was an error sending your request. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans flex items-center justify-center p-0 lg:p-8">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-7xl bg-white shadow-[0_0_40px_-10px_rgba(0,0,0,0.05)] lg:rounded-3xl overflow-hidden flex flex-col lg:flex-row min-h-screen lg:min-h-[800px]"
            >

                {/* 1. VISUAL SIDE (Left) */}
                <div className="lg:w-5/12 relative hidden lg:block bg-slate-100">
                    <img
                        src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2676&auto=format&fit=crop"
                        alt="Minimal Luxury"
                        className="absolute inset-0 w-full h-full object-cover grayscale-[20%] contrast-[0.9]"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>

                    <div className="absolute bottom-12 left-12 text-white">
                        <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-[#D4AF37]">Private Access</p>
                        <h1 className="text-5xl font-serif leading-tight">
                            The World,<br />Curated.
                        </h1>
                    </div>
                </div>

                {/* 2. FORM SIDE (Right) */}
                <div className="lg:w-7/12 p-8 lg:p-20 flex flex-col justify-center relative">

                    {/* Header */}
                    <div className="mb-16">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase block mb-3">Concierge Service</span>
                        <h2 className="text-3xl lg:text-4xl font-serif text-slate-900">Design your journey.</h2>
                        <div className="w-12 h-[2px] bg-[#D4AF37] mt-6"></div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-12">

                        {/* SERVICE SELECTION */}
                        <div className="flex gap-8 border-b border-slate-100 pb-8">
                            {[
                                { id: 'flight_hotel', label: 'Full Journey' },
                                { id: 'flight', label: 'Aviation' },
                                { id: 'hotel', label: 'Stays' }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setService(item.id as ServiceType)}
                                    className={`text-sm tracking-wide transition-all duration-300 relative ${service === item.id
                                        ? 'text-slate-900 font-medium'
                                        : 'text-slate-400 hover:text-slate-600'
                                        }`}
                                >
                                    {item.label}
                                    {service === item.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute -bottom-9 left-0 right-0 h-[2px] bg-[#D4AF37]"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* INPUTS */}
                        <div className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="group relative">
                                    <input
                                        name="name"
                                        value={formData.name}
                                        required
                                        onChange={handleInput}
                                        placeholder=" "
                                        disabled={isSubmitting}
                                        className="peer w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 placeholder-transparent focus:border-[#D4AF37] focus:outline-none transition-colors"
                                    />
                                    <label className="absolute left-0 -top-3.5 text-xs text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37]">
                                        Full Name
                                    </label>
                                </div>
                                <div className="group relative">
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        required
                                        onChange={handleInput}
                                        placeholder=" "
                                        disabled={isSubmitting}
                                        className="peer w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 placeholder-transparent focus:border-[#D4AF37] focus:outline-none transition-colors"
                                    />
                                    <label className="absolute left-0 -top-3.5 text-xs text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37]">
                                        WhatsApp Number
                                    </label>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="group relative">
                                    <input
                                        name="origin"
                                        value={formData.origin}
                                        onChange={handleInput}
                                        placeholder=" "
                                        disabled={isSubmitting}
                                        className="peer w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 placeholder-transparent focus:border-[#D4AF37] focus:outline-none transition-colors"
                                    />
                                    <label className="absolute left-0 -top-3.5 text-xs text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37]">
                                        Origin
                                    </label>
                                </div>
                                <div className="group relative">
                                    <input
                                        name="destination"
                                        value={formData.destination}
                                        onChange={handleInput}
                                        placeholder=" "
                                        disabled={isSubmitting}
                                        className="peer w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 placeholder-transparent focus:border-[#D4AF37] focus:outline-none transition-colors"
                                    />
                                    <label className="absolute left-0 -top-3.5 text-xs text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37]">
                                        Destination
                                    </label>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
                                <div className="group relative">
                                    <label className="block text-xs text-slate-400 mb-2">Departure Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInput}
                                        disabled={isSubmitting}
                                        className="w-full bg-transparent border-b border-slate-200 py-2 text-slate-900 focus:border-[#D4AF37] focus:outline-none transition-colors font-sans"
                                    />
                                </div>
                                <div className="group relative">
                                    <label className="block text-xs text-slate-400 mb-2">Experience Tier</label>
                                    <select
                                        name="budget"
                                        onChange={(e) => setBudget(e.target.value as BudgetType)}
                                        value={budget}
                                        disabled={isSubmitting}
                                        className="w-full bg-transparent border-b border-slate-200 py-2 text-slate-900 focus:border-[#D4AF37] focus:outline-none transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="luxury">Luxury / First Class</option>
                                        <option value="business">Business Class</option>
                                        <option value="economy">Premium Economy</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div>
                            <textarea
                                name="requests"
                                value={formData.requests}
                                onChange={handleInput}
                                rows={2}
                                disabled={isSubmitting}
                                placeholder="Any specific requirements?"
                                className="w-full bg-slate-50 border-0 rounded-none border-l-2 border-slate-200 p-4 text-sm text-slate-700 placeholder-slate-400 focus:border-[#D4AF37] focus:ring-0 focus:outline-none transition-colors resize-none"
                            ></textarea>
                        </div>

                        <div className="pt-4 flex items-center justify-between">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group flex items-center gap-4 text-slate-900 hover:text-[#D4AF37] transition-colors duration-300 disabled:opacity-50 disabled:cursor-wait"
                            >
                                <span className="font-serif text-lg italic">
                                    {isSubmitting ? 'Sending Request...' : 'Submit to Concierge'}
                                </span>
                                <span className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-300">
                                    <ArrowRight size={18} />
                                </span>
                            </button>
                        </div>

                    </form>
                </div>

            </motion.div>
        </div>
    );
};

export default ConciergeBooking;
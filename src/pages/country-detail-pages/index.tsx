import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// ✅ Import Data & Types
import { Currency, VisaType } from '../../types';
import { countriesData } from '../../data/CountriesData';

// ✅ Import Local Components
import CountryHero from './components/CountryHero';
import VisaTypeCard from './components/VisaTypeCard';
import AnimatedTimeline from './components/AnimatedTimeline';
import StickySidebar from './components/StickySidebar';
import SimilarDestinations from './components/SimilarDestinations';
import Icon from '../../components/AppIcon';

/* TEMPORARY HIDDEN COMPONENTS (Keep imports for when you are ready to enable)
  import RequirementsSection from './components/RequirementsSection';
  import TestimonialCard from './components/TestimonialCard';
  import FAQSection from './components/FAQSection';
  import EmbassyInfoCard from './components/EmbassyInfoCard';
  import PolicyUpdates from './components/PolicyUpdates';
*/

// --- BACKGROUND ANIMATION COMPONENT ---
const BackgroundEffect = () => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.2,
      transition: { duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/2/2f/World_map_dots_grey.svg')`, backgroundSize: '120%' }}></div>
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <motion.path d="M-10,60 Q40,10 110,60" fill="none" stroke="#B45309" strokeWidth="2" strokeDasharray="8 8" variants={pathVariants} initial="hidden" animate="visible" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/20 to-slate-50"></div>
    </div>
  );
};

const CountryDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { countryId } = useParams();

  const country = countriesData.find(c => c.id.toLowerCase() === countryId?.toLowerCase());

  const [selectedCurrency, setSelectedCurrency] = useState<Currency>({ code: 'INR', symbol: '₹', rate: 1 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [countryId, location.pathname]);

  if (!country) return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center relative z-10">
      <BackgroundEffect />
      <h1 className="text-3xl font-bold mb-6">Country Not Found</h1>
      <button onClick={() => navigate('/')} className="px-6 py-3 bg-blue-900 text-white rounded-lg">Return Home</button>
    </div>
  );

  const relatedCountries = countriesData
    .filter((c) => country.similarDestinations?.includes(c.id))
    .map((c) => ({
      id: c.id, name: c.name, code: c.code, flag: c.flag, image: c.heroImage,
      imageAlt: c.heroImageAlt,
      processingTime: c.processingTime, successRate: c.successRate, price: c.pricing.totalFee,
    }));

  const handleWhatsAppClick = () => window.open(`https://wa.me/919087612111?text=Hi! I am interested in ${country.name} visa.`, '_blank');
  const handleApplyClick = () => navigate('/application-portal', { state: { country } });
  const handleVisaTypeApply = (visaType: VisaType) => navigate('/application-portal', { state: { visaType, country } });

  return (
    <div className="min-h-screen relative bg-slate-50">
      <Helmet>
        <title>Apply for {country.name} Visa | Ticket Visa Travel</title>
        <meta name="description" content={`Secure your ${country.name} visa with 99% approval rate.`} />
      </Helmet>

      <BackgroundEffect />

      <div className="pt-16 lg:pt-0 relative z-10">
        <CountryHero country={country} />

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 lg:py-16">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">

            {/* --- MAIN CONTENT --- */}
            <div className="lg:col-span-8 space-y-16">

              {/* 1. Visa Types */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-serif italic text-slate-900">Available Categories</h2>
                  <p className="text-slate-500 mt-2">Select the purpose of your travel to begin the assessment.</p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {country.visaTypes.map((visaType, index) => (
                    <VisaTypeCard key={visaType.id} visaType={visaType} index={index} onApply={handleVisaTypeApply} />
                  ))}
                </div>
              </section>

              {/* 2. Process Timeline */}
              <section>
                <AnimatedTimeline steps={country.timeline} />
              </section>

              {/* HEADING: TEMPORARY HIDDEN SECTIONS
                The following blocks are currently disabled to keep the UI simple.
              */}

              {/* <section id="testimonials">
                 <h2 className="text-2xl font-bold mb-8">Success Stories</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {country.testimonials?.map((t, i) => <TestimonialCard key={t.id} testimonial={t} index={i} />)}
                 </div>
              </section>

              <section id="rejection-prevention">
                 <h2 className="text-2xl font-bold mb-8">Rejection Prevention</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {country.stats?.rejectionReasons?.map((r, i) => (
                       <div key={i} className="p-6 bg-white border border-red-100 rounded-xl">
                          <p className="font-bold text-red-600">{r.reason}</p>
                          <p className="text-sm text-slate-500">{r.prevention}</p>
                       </div>
                    ))}
                 </div>
              </section>

              <section id="embassy-info">
                 <EmbassyInfoCard embassyInfo={country.embassyInfo} />
              </section> 
              */}

            </div>

            {/* --- SIDEBAR --- */}
            <div className="lg:col-span-4 mt-12 lg:mt-0">
              <StickySidebar
                country={country}
                selectedCurrency={selectedCurrency}
                onCurrencyChange={setSelectedCurrency}
                onWhatsAppClick={handleWhatsAppClick}
                onApplyClick={handleApplyClick}
              />
            </div>
          </div>
        </div>

        {/* --- FOOTER CONTENT --- */}
        <div className="relative z-10 space-y-0">
          {/* <RequirementsSection requirements={country.requirements} />
          <PolicyUpdates updates={country.recentUpdates} />
          <FAQSection faqs={country.faqs} /> 
          */}

          <SimilarDestinations destinations={relatedCountries} />
        </div>

        {/* --- BOTTOM CTA --- */}
        <section className="relative z-10 py-20 bg-blue-900 text-white text-center">
          <div className="max-w-4xl mx-auto px-6 space-y-8">
            <h2 className="text-4xl font-serif italic">Ready to start your journey?</h2>
            <p className="text-blue-100/60 max-w-xl mx-auto uppercase tracking-widest text-xs font-bold">
              Join thousands of travelers who trusted Ticket Visa Travel Bureau.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button onClick={handleApplyClick} className="px-10 py-4 bg-white text-blue-900 font-bold uppercase tracking-widest text-xs hover:bg-blue-50 transition-all">
                Start Application
              </button>
              <button onClick={handleWhatsAppClick} className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
                Expert Consultation
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default CountryDetails;
import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

// --- IMPORT COMPONENTS ---
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

// --- IMPORT PAGES ---
import Homepage from './pages/homepage';
import CountryDetailPage from './pages/country-detail-pages';
import ApplicationPortal from './pages/application-portal/types';
// import TrustSecurityCenter from './pages/trust-security-center';
import TravelServices from './pages/travel-services';
// import DummyTicketPage from './pages/dummy-ticket';
// import LiveTrackingDashboard from './pages/live-tracking-dashboard';
import Services from './pages/services';
import NotFound from './pages/NotFound';
import AboutUs from './pages/about-us';
import ContactUs from './pages/contact-us';

// Import New Service Pages
import ServiceCategoryHub from "./pages/services/components/ServiceCategoryHub";
import ServiceDetailPage from "./pages/services/components/ServiceDetailPage";
import StudyAbroadLP from "./pages/services/components/StudyAbroadLP";

// --- SCROLL TO TOP HELPER ---
import BackToTopButton from './components/ui/BackToTopButton';
import WhatsAppToggle from './components/ui/WhatsAppToggle';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white text-slate-900 font-sans">
      <ErrorBoundary>
        <ScrollToTop />
        <BackToTopButton />
        <WhatsAppToggle />

        {/* Global Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow relative">
          <Routes>
            {/* HOME */}
            <Route path="/" element={<Homepage />} />

            {/* CORE FEATURES */}
            <Route path="/application-portal" element={<ApplicationPortal />} />
            <Route path="/travel-services" element={<TravelServices />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/dummy-ticket" element={<DummyTicketPage />} /> */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />

            {/* 1. Hub Pages (e.g., /services/migrate, /services/work) */}
            <Route path="/services/:category" element={<ServiceCategoryHub />} />

            {/* 2. Detail Pages (e.g., /services/work/germany-job-seeker) */}
            <Route path="/services/:category/:subType" element={<ServiceDetailPage />} />

            {/* 3. Special Landing Page */}
            <Route path="/study-abroad" element={<StudyAbroadLP />} />

            {/* DYNAMIC ROUTES */}
            <Route path="/visa/:countryId" element={<CountryDetailPage />} />

            {/* REDIRECTS & 404 */}
            <Route path="/homepage" element={<Navigate to="/" replace />} />
            <Route path="/country-detail-pages" element={<Navigate to="/" replace />} /> {/* Or list page if exists */}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default App;
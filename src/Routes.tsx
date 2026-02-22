import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary"; // ✅ Fixed typo: 'Boundry' -> 'Boundary'
import NotFound from "./pages/NotFound";
// import TrustSecurityCenter from './pages/trust-security-center';
import CountryDetailPages from './pages/country-detail-pages';
import ApplicationPortal from './pages/application-portal';
import Homepage from './pages/homepage';
// import LiveTrackingDashboard from './pages/live-tracking-dashboard';
import TravelServices from "./pages/travel-services";
import DummyTicketPage from "./pages/dummy-ticket";
import ContactUs from "./pages/contact-us";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Main Home Page */}
          <Route path="/" element={<Homepage />} />

          {/* ✅ CRITICAL: This Dynamic Route handles /visa/canada, /visa/japan, etc. */}
          <Route path="/visa/:countryId" element={<CountryDetailPages />} />

          {/* Other Pages */}
          {/* <Route path="/trust-security-center" element={<TrustSecurityCenter />} /> */}
          <Route path="/application-portal" element={<ApplicationPortal />} />
          <Route path="/homepage" element={<Homepage />} />
          {/* <Route path="/live-tracking-dashboard" element={<LiveTrackingDashboard />} /> */}
          <Route path="/travel-services" element={<TravelServices />} />
          <Route path="/dummy-ticket" element={<DummyTicketPage />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* 404 Page (Must be last) */}
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
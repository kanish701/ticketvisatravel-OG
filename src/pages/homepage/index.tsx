import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Added for search navigation

import HeroSection from './components/HeroSection';
// import TrustBar from './components/TrustBar';
import FeaturedDestinations from './components/FeaturedDestinations';
import ProcessTimeline from './components/ProcessTimeline';
import TestimonialCarousel from './components/TestimonialCarousel';
import GuaranteeSection from './components/GuaranteeSection';

// ✅ Imported only the types actually used in this file
import { TrustMetric, SearchSuggestion } from './types';

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // ✅ Initialize Navigation Hook

  // --- Data for Hero Section ---
  const searchSuggestions: SearchSuggestion[] = [
    {
      id: 'usa',
      country: 'United States',
      code: 'US',
      flag: '🇺🇸',
      visaTypes: ['Tourist', 'Business', 'Student'],
      processingTime: '15-30 days'
    },
    {
      id: 'uk',
      country: 'United Kingdom',
      code: 'GB',
      flag: '🇬🇧',
      visaTypes: ['Tourist', 'Business', 'Work'],
      processingTime: '10-20 days'
    },
    {
      id: 'canada',
      country: 'Canada',
      code: 'CA',
      flag: '🇨🇦',
      visaTypes: ['Tourist', 'Study', 'Work'],
      processingTime: '20-40 days'
    },
    {
      id: 'australia',
      country: 'Australia',
      code: 'AU',
      flag: '🇦🇺',
      visaTypes: ['Tourist', 'Work', 'Student'],
      processingTime: '15-25 days'
    },
    {
      id: 'germany',
      country: 'Germany',
      code: 'DE',
      flag: '🇩🇪',
      visaTypes: ['Schengen', 'Business', 'Student'],
      processingTime: '10-15 days'
    },
    {
      id: 'france',
      country: 'France',
      code: 'FR',
      flag: '🇫🇷',
      visaTypes: ['Schengen', 'Tourist', 'Business'],
      processingTime: '10-15 days'
    },
    {
      id: 'japan',
      country: 'Japan',
      code: 'JP',
      flag: '🇯🇵',
      visaTypes: ['Tourist', 'Business', 'Work'],
      processingTime: '5-10 days'
    },
    {
      id: 'singapore',
      country: 'Singapore',
      code: 'SG',
      flag: '🇸🇬',
      visaTypes: ['Tourist', 'Business', 'Work'],
      processingTime: '3-5 days'
    }
  ];

  // --- Data for Trust Bar ---
  const trustMetrics: TrustMetric[] = [
    {
      id: '1',
      label: 'Success Rate',
      value: '99.8%',
      icon: 'TrendingUp',
      description: 'Industry-leading approval rate'
    },
    {
      id: '2',
      label: 'Applications Processed',
      value: '10,000+',
      icon: 'Users',
      description: 'Trusted by travelers worldwide'
    },
    {
      id: '3',
      label: 'Average Processing',
      value: '12 Days',
      icon: 'Clock',
      description: 'Faster than industry average'
    },
    {
      id: '4',
      label: 'Customer Satisfaction',
      value: '4.9/5',
      icon: 'Star',
      description: 'Based on 2,500+ reviews'
    }
  ];

  // ✅ Fixed Search Handler: Navigates to the dynamic visa page
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      // e.g. "Japan" -> "/visa/japan"
      navigate(`/visa/${query.toLowerCase()}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />

        {/* <TrustBar metrics={trustMetrics} /> */}

        {/* ✅ FIXED: No props passed (Component handles its own data) */}
        <FeaturedDestinations />

        {/* ✅ FIXED: No props passed */}
        <ProcessTimeline />

        {/* ✅ FIXED: No props passed */}
        <TestimonialCarousel />

        <GuaranteeSection />
      </main>
    </div>
  );
};

export default Homepage;
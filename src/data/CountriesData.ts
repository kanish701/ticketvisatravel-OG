import { Country } from '../types';

export const countriesData: Country[] = [
  // =========================================================================
  // 1. NORTH AMERICA
  // =========================================================================
  {
    id: 'usa',
    name: 'United States',
    code: 'US',
    flag: '🇺🇸',
    heroImage: 'https://images.unsplash.com/photo-1569521862953-e999a7f8b1e5?auto=format&fit=crop&q=80',
    heroImageAlt: 'New York City Skyline',
    tagline: 'Land of Opportunities',
    description: 'Secure your US B1/B2 visa for tourism, business, and medical travel with expert guidance on DS-160 and interview prep.',
    processingTime: '3-5 business days (Post-Interview)',
    successRate: 85.0,
    pricing: {
      embassyFee: "Notify Later",
      serviceFee: 7999,
      totalFee: 7999,
      currency: 'INR',
      refundPolicy: 'Service fee non-refundable; Gov fee non-refundable'
    },
    visaTypes: [
      {
        id: 'us-b1b2',
        name: 'B-1/B-2 Tourist & Business',
        description: 'Standard visitor visa for tourism, family visits, and business meetings.',
        duration: '10 Years',
        price: 7999,
        processingTime: '3-5 days after interview',
        icon: 'Globe'
      },
      {
        id: 'us-b1b2',
        name: 'Student Visa',
        description: 'For international students pursuing academic studies or language training programs in the USA.',
        duration: '10 Years',
        price: 7999,
        processingTime: '3-5 days after interview',
        icon: 'Globe'
      },
      {
        id: 'us-b1b2',
        name: 'H-1B Skilled Worker Visa',
        description: 'For professionals working in specialty occupations such as IT, engineering, healthcare, and finance.',
        duration: '10 Years',
        price: 7999,
        processingTime: '3-5 days after interview',
        icon: 'Globe'
      },
      
    ],
    requirements: [
      {
        id: 'us-1',
        category: 'Identity',
        title: 'Current & Old Passports',
        description: 'Valid for 6 months beyond stay. Old passports show travel history.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'us-2',
        category: 'Application',
        title: 'DS-160 Confirmation',
        description: 'Barcoded confirmation page of the online application.',
        mandatory: true,
        icon: 'FileCheck'
      },
      {
        id: 'us-3',
        category: 'Appointment',
        title: 'Appointment Letter',
        description: 'Printed confirmation of OFC and Consular slots.',
        mandatory: true,
        icon: 'Calendar'
      },
      {
        id: 'us-4',
        category: 'Financial',
        title: 'Financial Proofs',
        description: 'Bank statements, ITR (3 years), and liquid asset proof.',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'us-5',
        category: 'Employment',
        title: 'Employment Proof',
        description: 'Pay slips, leave sanction letter, or business registration.',
        mandatory: true,
        icon: 'Briefcase'
      },
      {
        id: 'us-6',
        category: 'Identity',
        title: 'US Visa Photo',
        description: '5x5cm (2x2 inch) white background, recent.',
        mandatory: true,
        icon: 'Image'
      }
    ],
    timeline: [
      {
        id: 'us-t1',
        step: 1,
        title: 'DS-160 Filing',
        description: 'Complete the extensive online application form.',
        duration: '2-3 Days',
        status: 'completed',
        icon: 'Monitor'
      },
      {
        id: 'us-t2',
        step: 2,
        title: 'Fee Payment',
        description: 'Create profile & pay $185 visa fee.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'CreditCard'
      },
      {
        id: 'us-t3',
        step: 3,
        title: 'Booking Slots',
        description: 'Schedule Biometrics (OFC) & Consular Interview.',
        duration: 'Varies',
        status: 'upcoming',
        icon: 'Calendar'
      },
      {
        id: 'us-t4',
        step: 4,
        title: 'Biometrics (OFC)',
        description: 'Photo & Fingerprints at Visa Application Center.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'UserCheck'
      },
      {
        id: 'us-t5',
        step: 5,
        title: 'Visa Interview',
        description: 'In-person interview at the US Embassy/Consulate.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Users'
      },
      {
        id: 'us-t6',
        step: 6,
        title: 'Passport Delivery',
        description: 'Stamped passport delivered or available for pickup.',
        duration: '3-5 Days',
        status: 'upcoming',
        icon: 'Package'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Rohan Mehta',
        visaType: 'Business Traveler',
        country: 'Bangalore',
        rating: 5,
        content: 'The mock interview preparation was a game changer. I was nervous about explaining my client meetings, but the team helped me refine my answers. Got my visa approved in Chennai in 2 minutes!',
        avatar: 'https://i.pravatar.cc/150?u=rohan',
        avatarAlt: 'Rohan Mehta',
        date: 'Recently',
        processingTime: '2 minutes'
      },
      {
        id: 't2',
        name: 'Priya & Suresh Reddy',
        visaType: 'Parents',
        country: 'Hyderabad',
        rating: 5,
        content: 'Applying for a visa to visit our daughter in Texas seemed complicated. This agency handled the DS-160 perfectly and guided us on how to present our property documents. Highly recommended.',
        avatar: 'https://i.pravatar.cc/150?u=priya',
        avatarAlt: 'Priya & Suresh Reddy',
        date: 'Recently',
        processingTime: 'Standard'
      },
      {
        id: 't3',
        name: 'Anjali Sharma',
        visaType: 'Tourist',
        country: 'Delhi',
        rating: 4,
        content: 'Great service. The appointment waiting time for US visas is long, but they kept monitoring for earlier slots and managed to advance my appointment by 2 months.',
        avatar: 'https://i.pravatar.cc/150?u=anjali',
        avatarAlt: 'Anjali Sharma',
        date: 'Recently',
        processingTime: 'Advanced by 2 months'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Do I need to book flight tickets before the visa interview?',
        answer: 'No, the US Consulate strongly advises AGAINST buying flight tickets before your visa is approved. You only need to present a tentative itinerary.',
        category: 'Travel'
      },
      {
        id: 'faq2',
        question: 'What is the "214(b)" rejection?',
        answer: 'This is the most common rejection reason. It means the officer was not convinced you have strong enough ties (job, family, property) to return to India after your trip.',
        category: 'Policy'
      },
      {
        id: 'faq3',
        question: 'If my visa is rejected, do I get a refund?',
        answer: 'No, the US Government visa fee ($185) is non-refundable and non-transferable, regardless of the outcome.',
        category: 'Fees'
      },
      {
        id: 'faq4',
        question: 'How long is the B1/B2 visa valid for?',
        answer: 'For Indian citizens, it is typically issued for 10 years with multiple entries. However, the duration of each stay (usually 6 months) is determined at the port of entry.',
        category: 'Validity'
      }
    ],
    embassyInfo: {
      name: 'U.S. Embassy New Delhi',
      address: 'Shantipath, Chanakyapuri, New Delhi - 110021',
      phone: '91-11-2419-8000',
      email: 'support-india@usvisascheduling.com',
      website: 'https://in.usembassy.gov/',
      workingHours: 'Mon-Fri 8:00 AM - 5:00 PM',
      latitude: 28.59,
      longitude: 77.19
    },
    recentUpdates: [],
    stats: {
      totalApplications: 125000,
      averageProcessingDays: 5,
      approvalRate: 85,
      rejectionReasons: [
        {
          reason: 'Potential Immigrant Intent (214b)',
          percentage: 65,
          prevention: 'Demonstrate strong ties to home country (job, property, family) to prove you will return.'
        },
        {
          reason: 'Insufficient Ties to Home Country',
          percentage: 35,
          prevention: 'Provide solid evidence of stable employment, property ownership, and family responsibilities in India.'
        }
      ]
    },
    similarDestinations: ['canada', 'uk', 'australia']
  },
  {
    id: 'canada',
    name: 'Canada',
    code: 'CA',
    flag: '🇨🇦',
    heroImage: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80',
    heroImageAlt: 'Toronto Skyline and CN Tower',
    tagline: 'The True North Strong and Free',
    description: 'Experience the breathtaking landscapes and vibrant cities of Canada with our simplified visitor visa process.',
    processingTime: '25-45 business days',
    successRate: 82.0,
    pricing: {
      embassyFee: "Notify Later",
      serviceFee: 7999,
      totalFee: 7999,
      currency: 'INR',
      refundPolicy: 'Service fee non-refundable; Gov fee non-refundable'
    },
    visaTypes: [
      {
        id: 'ca-visitor',
        name: 'Visitor Visa (Temporary Resident Visa)',
        description: 'For tourism, visiting family/friends, or short business trips.',
        duration: 'Up to 10 Years',
        price: 7999,
        processingTime: '30-45 days',
        icon: 'Map'
      }
    ],
    requirements: [
      {
        id: 'ca-1',
        category: 'Identity',
        title: 'Valid Passport',
        description: 'Valid for at least 6 months beyond stay. Old passports recommended.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'ca-2',
        category: 'Financial',
        title: 'Financial Proofs',
        description: 'Bank statements (6 months), ITR (3 years), Pay slips, or Sponsorship letter.',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'ca-3',
        category: 'Employment',
        title: 'Employment Proof',
        description: 'NOC Letter, Salary slips (for employees) or GST/Business registration (for self-employed).',
        mandatory: true,
        icon: 'Briefcase'
      },
      {
        id: 'ca-4',
        category: 'Application',
        title: 'Travel History',
        description: 'Copies of previous visas (US, UK, Schengen) to improve approval odds.',
        mandatory: false,
        icon: 'Globe'
      },
      {
        id: 'ca-5',
        category: 'Application',
        title: 'Cover Letter',
        description: 'Detailed itinerary and purpose of visit explanation.',
        mandatory: true,
        icon: 'FileCheck'
      },
      {
        id: 'ca-6',
        category: 'Identity',
        title: 'Digital Photo',
        description: '35mm x 45mm, white background, recent (within 6 months).',
        mandatory: true,
        icon: 'Image'
      }
    ],
    timeline: [
      {
        id: 'ca-t1',
        step: 1,
        title: 'Document Upload',
        description: 'Upload all required documents to the IRCC portal.',
        duration: '1-2 Days',
        status: 'completed',
        icon: 'Upload'
      },
      {
        id: 'ca-t2',
        step: 2,
        title: 'Submission & Payment',
        description: 'Submit application and pay CAD $185 fees.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'CreditCard'
      },
      {
        id: 'ca-t3',
        step: 3,
        title: 'Biometrics Letter (BIL)',
        description: 'Receive Biometric Instruction Letter within 24-48 hours.',
        duration: '1-2 Days',
        status: 'upcoming',
        icon: 'Mail'
      },
      {
        id: 'ca-t4',
        step: 4,
        title: 'Biometrics Appointment',
        description: 'Visit VFS Global for fingerprints and photo.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'UserCheck'
      },
      {
        id: 'ca-t5',
        step: 5,
        title: 'Processing',
        description: 'Wait for IRCC decision (processing times vary).',
        duration: '3-6 Weeks',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'ca-t6',
        step: 6,
        title: 'Passport Submission',
        description: 'Submit passport to VFS for stamping upon approval.',
        duration: '5-7 Days',
        status: 'upcoming',
        icon: 'Package'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Arjun Malhotra',
        visaType: 'Tourist',
        country: 'Mumbai',
        rating: 5,
        content: 'Canada visa forms are notoriously confusing, but the team handled the IRCC portal upload seamlessly. The cover letter they drafted was excellent.',
        avatar: 'https://i.pravatar.cc/150?u=arjun',
        avatarAlt: 'Arjun Malhotra',
        date: 'Last Month',
        processingTime: '35 Days'
      },
      {
        id: 't2',
        name: 'Sarah Fernandez',
        visaType: 'Family Visit',
        country: 'Goa',
        rating: 4,
        content: 'I was visiting my brother in Toronto. They guided me on exactly what documents my brother needed to send from Canada (Invitation letter, T4 slips). Very helpful.',
        avatar: 'https://i.pravatar.cc/150?u=sarah',
        avatarAlt: 'Sarah Fernandez',
        date: '2 Months Ago',
        processingTime: '40 Days'
      },
      {
        id: 't3',
        name: 'Karthik & Meena',
        visaType: 'Tourist',
        country: 'Chennai',
        rating: 5,
        content: 'We had a previous rejection, so we were worried. The experts analyzed our profile and suggested adding more property valuation proofs. We got approved this time!',
        avatar: 'https://i.pravatar.cc/150?u=karthik',
        avatarAlt: 'Karthik & Meena',
        date: 'Recently',
        processingTime: '45 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Do I need to submit my physical passport immediately?',
        answer: 'No. For Canada, you first submit a digital application. You only submit your physical passport to VFS after you receive the "Passport Request Letter" from IRCC.',
        category: 'Process'
      },
      {
        id: 'faq2',
        question: 'Is a travel itinerary or flight booking mandatory?',
        answer: 'While not strictly mandatory for the initial upload, providing a tentative itinerary strengthens your case. However, DO NOT purchase tickets until the visa is approved.',
        category: 'Travel'
      },
      {
        id: 'faq3',
        question: 'What is the CAN+ program?',
        answer: 'Indian nationals who have held a Canadian visa in the last 10 years or currently hold a valid US non-immigrant visa may qualify for expedited processing with fewer financial documents.',
        category: 'Programs'
      },
      {
        id: 'faq4',
        question: 'How much funds do I need to show?',
        answer: 'There is no fixed amount, but a general rule is CAD $1,000 per week of stay, plus flight costs. You must prove the funds are accessible and stable.',
        category: 'Financial'
      }
    ],
    embassyInfo: {
      name: 'High Commission of Canada',
      address: '7/8 Shantipath, Chanakyapuri, New Delhi - 110021',
      phone: '011-4178-2000',
      email: 'delhi-im-enquiry@international.gc.ca',
      website: 'https://www.canada.ca/en/immigration-refugees-citizenship.html',
      workingHours: 'Mon-Fri 8:30 AM - 4:45 PM',
      latitude: 28.59,
      longitude: 77.19
    },
    recentUpdates: [],
    stats: {
      totalApplications: 90000,
      averageProcessingDays: 35,
      approvalRate: 82,
      rejectionReasons: [
        {
          reason: 'Purpose of Visit',
          percentage: 40,
          prevention: 'Ensure your itinerary is detailed and logical. Explain exactly why you are visiting.'
        },
        {
          reason: 'Financial Stability',
          percentage: 30,
          prevention: 'Avoid large recent deposits in your bank account. Show consistent history or strong sponsorship.'
        },
        {
          reason: 'Family Ties to Canada vs India',
          percentage: 30,
          prevention: 'Prove you have stronger reasons to return to India (job, family, assets) than to stay in Canada.'
        }
      ]
    },
    similarDestinations: ['usa', 'uk', 'australia']
  },
  {
    id: 'mexico',
    name: 'Mexico',
    code: 'MX',
    flag: '🇲🇽',
    heroImage: 'https://i.natgeofe.com/n/6c02ad5a-977b-4f12-b9c0-02ffb0736e07/metropolitan-cathedral-zocalo-mexico-city.JPG',
    heroImageAlt: 'Chichen Itza, Yucatan',
    tagline: 'Land of the Aztecs & Mayas',
    description: 'Explore the vibrant culture, ancient ruins, and stunning beaches of Mexico. (Note: Visa-free entry available for valid US/UK/Schengen visa holders).',
    processingTime: '2-5 business days (Post-Interview)',
    successRate: 88.0,
    pricing: {
      embassyFee: "Notify Later",
      serviceFee: 7999,
      totalFee: 7999,
      currency: 'INR',
      refundPolicy: 'Service fee non-refundable; Gov fee paid directly at Embassy'
    },
    visaTypes: [
      {
        id: 'mx-tourist',
        name: 'Tourist Visa (Turista)',
        description: 'For tourism, transit, or unpaid business activities.',
        duration: '180 Days (Up to 10 Years Validity)',
        price: 7999,
        processingTime: '2-5 days after interview',
        icon: 'Sun'
      }
    ],
    requirements: [
      {
        id: 'mx-1',
        category: 'Identity',
        title: 'Valid Passport',
        description: 'Original + Photocopy of first and last page. Valid for 6 months.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'mx-2',
        category: 'Financial',
        title: 'Financial Solvency (Strong)',
        description: 'Bank statements (last 3 months) showing avg balance ~₹3 Lakhs OR Pay slips (last 3 months) showing ~₹90k/month income.',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'mx-3',
        category: 'Employment',
        title: 'Employment Letter',
        description: 'Original NOC/Leave letter on company letterhead with joining date and salary details.',
        mandatory: true,
        icon: 'Briefcase'
      },
      {
        id: 'mx-4',
        category: 'Application',
        title: 'Visa Application Form',
        description: 'Printed on one double-sided page, filled and signed.',
        mandatory: true,
        icon: 'FileCheck'
      },
      {
        id: 'mx-5',
        category: 'Identity',
        title: 'Photo',
        description: '1 recent color photo (3.5 x 4.5 cm), white background, no glasses, face fully visible.',
        mandatory: true,
        icon: 'Image'
      },
      {
        id: 'mx-6',
        category: 'Appointment',
        title: 'MiConsulado Appointment',
        description: 'Confirmed appointment printout from the MiConsulado system.',
        mandatory: true,
        icon: 'Calendar'
      }
    ],
    timeline: [
      {
        id: 'mx-t1',
        step: 1,
        title: 'Document Prep',
        description: 'Gather financial proofs (crucial for Mexico) and employment letters.',
        duration: '1-2 Days',
        status: 'completed',
        icon: 'FileText'
      },
      {
        id: 'mx-t2',
        step: 2,
        title: 'Book Appointment',
        description: 'Create account on MiConsulado and book slot for Delhi embassy.',
        duration: 'Varies',
        status: 'upcoming',
        icon: 'Calendar'
      },
      {
        id: 'mx-t3',
        step: 3,
        title: 'Form Filling',
        description: 'Fill the application form manually or digitally (print double-sided).',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Edit'
      },
      {
        id: 'mx-t4',
        step: 4,
        title: 'Submission & Interview',
        description: 'Visit Embassy, submit docs, pay fee (Cash/Card), and give biometrics.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Users'
      },
      {
        id: 'mx-t5',
        step: 5,
        title: 'Processing',
        description: 'Embassy evaluates application (usually very fast).',
        duration: '2-5 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'mx-t6',
        step: 6,
        title: 'Collection',
        description: 'Collect passport personally or authorize a representative.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'CheckCircle'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Vikram Singh',
        visaType: 'Tourist',
        country: 'Gurgaon',
        rating: 5,
        content: 'I did not know about the strict financial requirements. The team helped me format my bank statements to clearly highlight the maintaining balance of ₹3 Lakhs, which was the key to approval.',
        avatar: 'https://i.pravatar.cc/150?u=vikram',
        avatarAlt: 'Vikram Singh',
        date: 'Last Month',
        processingTime: '3 Days'
      },
      {
        id: 't2',
        name: 'Neha Kapoor',
        visaType: 'Business',
        country: 'Mumbai',
        rating: 4,
        content: 'Getting an appointment on the MiConsulado website is tough, but this agency monitored it for me and secured a slot next week. The interview was smooth.',
        avatar: 'https://i.pravatar.cc/150?u=neha',
        avatarAlt: 'Neha Kapoor',
        date: '3 Months Ago',
        processingTime: '2 Days'
      },
      {
        id: 't3',
        name: 'Rahul & Aishwarya',
        visaType: 'Honeymoon',
        country: 'Bangalore',
        rating: 5,
        content: 'We planned a Cancun trip. Since we did not have US visas, we needed this. Process was surprisingly fast once the appointment was done. Got passports back in 48 hours!',
        avatar: 'https://i.pravatar.cc/150?u=rahul',
        avatarAlt: 'Rahul & Aishwarya',
        date: 'Recently',
        processingTime: '2 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'I have a valid US Visa. Do I need a Mexico visa?',
        answer: 'NO. If you hold a valid multiple-entry visa for the USA, UK, Canada, Japan, or Schengen area, you do NOT need a Mexican visa. You can enter visa-free.',
        category: 'Exemptions'
      },
      {
        id: 'faq2',
        question: 'How strict are the financial requirements?',
        answer: 'Very strict. You must show EITHER a monthly tax-free income of approx ₹90,000 OR an average monthly balance of approx ₹3,00,000 for the last 3 months. Cash deposits are often rejected.',
        category: 'Financial'
      },
      {
        id: 'faq3',
        question: 'Can I pay the visa fee online?',
        answer: 'No. The visa fee (approx ₹4,900) must be paid at the Embassy on the day of the appointment, usually via Cash or specific bank deposit as instructed upon arrival.',
        category: 'Fees'
      },
      {
        id: 'faq4',
        question: 'Is the interview mandatory?',
        answer: 'Yes. All applicants must appear in person at the Embassy in New Delhi for a consular interview and biometric data collection.',
        category: 'Process'
      }
    ],
    embassyInfo: {
      name: 'Embassy of Mexico in India',
      address: 'C-8, Anand Niketan, New Delhi - 110021',
      phone: '011-2411-7180',
      email: 'contactoconind@sre.gob.mx',
      website: 'https://embamex.sre.gob.mx/india/',
      workingHours: 'Mon-Fri 9:00 AM - 5:00 PM',
      latitude: 28.57,
      longitude: 77.16
    },
    recentUpdates: [],
    stats: {
      totalApplications: 12000,
      averageProcessingDays: 3,
      approvalRate: 88,
      rejectionReasons: [
        {
          reason: 'Insufficient Solvency',
          percentage: 70,
          prevention: 'Ensure your bank balance meets the minimum average threshold (~₹3L) consistently for 3 months.'
        },
        {
          reason: 'Unclear Employment Status',
          percentage: 20,
          prevention: 'Provide a clear NOC letter on company letterhead stating tenure (must be >1 year for income route).'
        }
      ]
    },
    similarDestinations: ['brazil', 'peru', 'colombia']
  },

  // =========================================================================
  // 2. SOUTH AMERICA
  // =========================================================================
  {
    id: 'brazil',
    name: 'Brazil',
    code: 'BR',
    flag: '🇧🇷',
    heroImage: 'https://cdn.britannica.com/22/266122-050-DC806202/statue-Christ-the-Redeemer-Rio-de-Janiero-Brazil.jpg',
    heroImageAlt: 'Rio de Janeiro',
    tagline: 'Rhythm of South America',
    description: 'Experience the Carnival, Amazon rainforest, and vibrant culture with a Brazil tourist visa.',
    processingTime: '15-20 business days',
    successRate: 92.0,
    pricing: {
      embassyFee: "Notify Later",
      serviceFee: 7999,
      totalFee: 7999,
      currency: 'INR',
      refundPolicy: 'Service fee non-refundable; Gov fee non-refundable'
    },
    visaTypes: [
      {
        id: 'br-tourist',
        name: 'Tourist Visa (VIVIS)',
        description: 'For tourism, visiting friends/relatives, and cultural events.',
        duration: '90 Days',
        price: 7999,
        processingTime: '15 Days',
        icon: 'Sun'
      },
      {
        id: 'br-business',
        name: 'Business Visa (VIVIS)',
        description: 'For business meetings, trade fairs, and corporate events (unpaid).',
        duration: '90 Days',
        price: 7999,
        processingTime: '15 Days',
        icon: 'Briefcase'
      }
    ],
    requirements: [
      {
        id: 'br-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for at least 6 months with 2 blank pages.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'br-2',
        category: 'Travel',
        title: 'Flight Itinerary',
        description: 'Confirmed round-trip flight booking.',
        mandatory: true,
        icon: 'Plane'
      },
      {
        id: 'br-3',
        category: 'Finance',
        title: 'Proof of Funds',
        description: 'Original bank statements (last 3 months) with bank seal & signature.',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'br-4',
        category: 'Employment',
        title: 'Leave/NOC Letter',
        description: 'Letter from employer on company letterhead approving leave.',
        mandatory: true,
        icon: 'Briefcase'
      },
      {
        id: 'br-5',
        category: 'Travel',
        title: 'Hotel Booking',
        description: 'Proof of accommodation for the entire duration of stay.',
        mandatory: true,
        icon: 'Hotel'
      },
      {
        id: 'br-6',
        category: 'Medical',
        title: 'Yellow Fever Vaccination',
        description: 'Certificate is mandatory for returning to India.',
        mandatory: true,
        icon: 'Activity'
      }
    ],
    timeline: [
      {
        id: 'br-t1',
        step: 1,
        title: 'Document Gathering',
        description: 'Collect financials, employment proof, and flight/hotel bookings.',
        duration: '1-2 Days',
        status: 'completed',
        icon: 'FolderOpen'
      },
      {
        id: 'br-t2',
        step: 2,
        title: 'Online Registration (RER)',
        description: 'Fill RER form on MFA portal, upload docs, and sign receipt.',
        duration: '1 Day',
        status: 'completed',
        icon: 'FileText'
      },
      {
        id: 'br-t3',
        step: 3,
        title: 'e-Consular Validation',
        description: 'Upload docs to e-Consular system for mandatory pre-check.',
        duration: '2-5 Days',
        status: 'upcoming',
        icon: 'Send'
      },
      {
        id: 'br-t4',
        step: 4,
        title: 'Fee & Appointment',
        description: 'Pay fee at bank and book submission slot after validation.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Calendar'
      },
      {
        id: 'br-t5',
        step: 5,
        title: 'Submission',
        description: 'Submit original passport and physical documents at Embassy.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Briefcase'
      },
      {
        id: 'br-t6',
        step: 6,
        title: 'Visa Collection',
        description: 'Collect passport with stamped visa after processing.',
        duration: '10-15 days',
        status: 'upcoming',
        icon: 'CheckCircle'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Rajesh Gupta',
        visaType: 'Business',
        country: 'Mumbai',
        rating: 5,
        content: 'I needed to visit São Paulo for a trade show. The e-Consular process was confusing, but the team handled the uploads perfectly. Got my visa in 12 days.',
        avatar: 'https://i.pravatar.cc/150?u=rajesh',
        avatarAlt: 'Rajesh Gupta',
        date: 'Last Month',
        processingTime: '12 Days'
      },
      {
        id: 't2',
        name: 'Sneha & Amit',
        visaType: 'Tourist',
        country: 'Delhi',
        rating: 5,
        content: 'We planned a trip for the Rio Carnival. They advised us to apply 2 months in advance because of the rush. The itinerary they created was detailed and helped us get approval easily.',
        avatar: 'https://i.pravatar.cc/150?u=sneha',
        avatarAlt: 'Sneha & Amit',
        date: '3 Months Ago',
        processingTime: '18 Days'
      },
      {
        id: 't3',
        name: 'Dr. Fernandes',
        visaType: 'Conference',
        country: 'Goa',
        rating: 4,
        content: 'The Yellow Fever vaccination requirement was something I missed, but the checklist saved me. Professional service.',
        avatar: 'https://i.pravatar.cc/150?u=fernandes',
        avatarAlt: 'Dr. Fernandes',
        date: 'Recently',
        processingTime: '15 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Is Yellow Fever vaccination mandatory?',
        answer: 'Yes, for returning to India from Brazil, it is mandatory. For entering Brazil, it is highly recommended, and officials may check it.',
        category: 'Health'
      },
      {
        id: 'faq2',
        question: 'Can I just walk into the Embassy for submission?',
        answer: 'No. You must first get your documents "validated" via the online e-Consular system. Only after approval can you book a slot to visit.',
        category: 'Process'
      },
      {
        id: 'faq3',
        question: 'Does the Brazil visa allow multiple entries?',
        answer: 'Yes, the Tourist Visa (VIVIS) is typically issued for 1 year with multiple entries, allowing stays of up to 90 days per visit.',
        category: 'Validity'
      },
      {
        id: 'faq4',
        question: 'What financial proof is accepted?',
        answer: 'Only original bank statements with a bank seal and signature are accepted. Online printouts without a stamp are frequently rejected.',
        category: 'Requirements'
      }
    ],
    embassyInfo: {
      name: 'Embassy of the Federative Republic of Brazil',
      address: '8, Dr. A.P.J. Abdul Kalam Road, New Delhi - 110011',
      phone: '011-2301-7301',
      email: 'consular.newdelhi@itamaraty.gov.br',
      website: 'http://novadelhi.itamaraty.gov.br/',
      workingHours: 'Mon-Fri 9:00 AM - 5:00 PM',
      latitude: 28.5970,
      longitude: 77.2170
    },
    recentUpdates: [],
    stats: {
      totalApplications: 4800,
      averageProcessingDays: 15,
      approvalRate: 92,
      rejectionReasons: [
        {
          reason: 'Unstamped Bank Statements',
          percentage: 60,
          prevention: 'Ensure all bank statements are physically stamped and signed by the bank.'
        },
        {
          reason: 'Incomplete RER Form',
          percentage: 40,
          prevention: 'Upload all documents to the RER portal clearly before printing the receipt.'
        }
      ]
    },
    similarDestinations: ['argentina', 'peru']
  },
  {
    id: 'argentina',
    name: 'Argentina',
    code: 'AR',
    flag: '🇦🇷',
    heroImage: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&q=80',
    heroImageAlt: 'Perito Moreno Glacier, Patagonia',
    tagline: 'Land of Silver & Tango',
    description: 'Experience the passion of Tango, the peaks of Patagonia, and the wines of Mendoza. (Free visa for Indians; AVE option available for US visa holders).',
    processingTime: '10-15 business days',
    successRate: 90.0,
    pricing: {
      embassyFee: "Notify Later", // "Gratis" (Free) for Indian Citizens for standard Tourist Visa
      serviceFee: 7999, // Professional fee for documentation & interview prep
      totalFee: 7999,
      currency: 'INR',
      refundPolicy: 'Service fee non-refundable; Visa is gratis'
    },
    visaTypes: [
      {
        id: 'ar-sticker',
        name: 'Tourist Visa (Sticker)',
        description: 'Standard paper visa for Indians without US/Schengen visas.',
        duration: '90 Days',
        price: 7999,
        processingTime: '10-15 Days',
        icon: 'FileText'
      },
      {
        id: 'ar-ave',
        name: 'AVE (Electronic Authorization)',
        description: 'Online visa ONLY for valid US B2 or Schengen visa holders.',
        duration: '90 Days',
        price: 4500, // Approx $50 USD Gov Fee
        processingTime: '20 Days',
        icon: 'Wifi'
      }
    ],
    requirements: [
      {
        id: 'ar-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 6 months. Must have at least 2 blank pages.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'ar-2',
        category: 'Application',
        title: 'Notarized Cover Letter',
        description: 'Personal letter explaining the trip, notarized by a public notary (Strict Requirement).',
        mandatory: true,
        icon: 'FileCheck'
      },
      {
        id: 'ar-3',
        category: 'Financial',
        title: 'Bank Statements',
        description: 'Last 6 months original statements with bank stamp. Credit card copy often requested.',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'ar-4',
        category: 'Employment',
        title: 'Employment Proof',
        description: 'Salary slips (3 months) + NOC Letter on company letterhead (translated to Spanish ideally).',
        mandatory: true,
        icon: 'Briefcase'
      },
      {
        id: 'ar-5',
        category: 'Travel',
        title: 'Confirmed Itinerary',
        description: 'Round-trip flights and hotel bookings for the *entire* duration.',
        mandatory: true,
        icon: 'Map'
      },
      {
        id: 'ar-6',
        category: 'Appointment',
        title: 'Personal Interview',
        description: 'Mandatory in-person interview at the Embassy in Delhi or Consulate in Mumbai.',
        mandatory: true,
        icon: 'Users'
      }
    ],
    timeline: [
      {
        id: 'ar-t1',
        step: 1,
        title: 'Document Prep',
        description: 'Draft itinerary and get the personal cover letter notarized.',
        duration: '2-3 Days',
        status: 'completed',
        icon: 'Edit'
      },
      {
        id: 'ar-t2',
        step: 2,
        title: 'Email Request',
        description: 'Email scanned docs to Embassy to request an appointment slot.',
        duration: '2-4 Days',
        status: 'upcoming',
        icon: 'Mail'
      },
      {
        id: 'ar-t3',
        step: 3,
        title: 'Appointment Confirmation',
        description: 'Receive interview date via email (can take 1-2 weeks to schedule).',
        duration: 'Varies',
        status: 'upcoming',
        icon: 'Calendar'
      },
      {
        id: 'ar-t4',
        step: 4,
        title: 'Interview & Submission',
        description: 'Visit Embassy for interview. Submit passport if approved.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'UserCheck'
      },
      {
        id: 'ar-t5',
        step: 5,
        title: 'Stamping',
        description: 'Passport stamping typically takes 2-5 working days after interview.',
        duration: '5 Days',
        status: 'upcoming',
        icon: 'Stamp'
      },
      {
        id: 'ar-t6',
        step: 6,
        title: 'Collection',
        description: 'Collect passport personally or authorize an agent.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'CheckCircle'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Aditya Roy',
        visaType: 'Tourist (Sticker)',
        country: 'Pune',
        rating: 5,
        content: 'I was surprised that the visa fee is actually zero for Indians! The agency charged only for the consultation and helped me draft the notarized letter in Spanish, which the officer really appreciated.',
        avatar: 'https://i.pravatar.cc/150?u=aditya',
        avatarAlt: 'Aditya Roy',
        date: 'Last Month',
        processingTime: '18 Days'
      },
      {
        id: 't2',
        name: 'Meera Iyer',
        visaType: 'AVE (E-Visa)',
        country: 'Bangalore',
        rating: 5,
        content: 'I have a US Visa, so I applied for the AVE. It was all online and super easy. Got the approval in 3 weeks. Saved me a trip to Delhi!',
        avatar: 'https://i.pravatar.cc/150?u=meera',
        avatarAlt: 'Meera Iyer',
        date: '2 Months Ago',
        processingTime: '21 Days'
      },
      {
        id: 't3',
        name: 'Kabir Singh',
        visaType: 'Business',
        country: 'Delhi',
        rating: 4,
        content: 'The interview was detailed. They asked about my specific meetings in Buenos Aires. Preparation is key. The team prepped me with mock questions which helped.',
        avatar: 'https://i.pravatar.cc/150?u=kabir',
        avatarAlt: 'Kabir Singh',
        date: 'Recently',
        processingTime: '12 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Is the Argentina visa really free for Indians?',
        answer: 'Yes. Under a bilateral agreement, the government visa fee for "Tourist" and "Business" visas is GRATIS (Zero) for Indian nationals. You only pay service charges to agents.',
        category: 'Fees'
      },
      {
        id: 'faq2',
        question: 'What is the AVE visa?',
        answer: 'AVE (Autorización de Viaje Electrónica) is an online visa option available ONLY to Indians who already hold a valid US B2 Visa or a Schengen Visa. It costs ~$50 USD.',
        category: 'Types'
      },
      {
        id: 'faq3',
        question: 'Do I need to translate my documents?',
        answer: 'It is highly recommended (and often required) to translate the employment letter and cover letter into Spanish. Notarization of the cover letter is almost always mandatory.',
        category: 'Documents'
      },
      {
        id: 'faq4',
        question: 'Is the interview mandatory?',
        answer: 'Yes. For the standard sticker visa, a personal interview at the Embassy in New Delhi or Consulate in Mumbai is mandatory for all applicants.',
        category: 'Process'
      }
    ],
    embassyInfo: {
      name: 'Embassy of the Argentine Republic',
      address: 'F-3/3, Vasant Vihar, New Delhi - 110057',
      phone: '011-4078-1900',
      email: 'secon_eindi@mrecic.gov.ar',
      website: 'https://eindi.cancilleria.gob.ar/',
      workingHours: 'Mon-Fri 9:00 AM - 5:00 PM',
      latitude: 28.5580,
      longitude: 77.1650
    },
    recentUpdates: [],
    stats: {
      totalApplications: 3200,
      averageProcessingDays: 12,
      approvalRate: 90,
      rejectionReasons: [
        {
          reason: 'Missing Notarization',
          percentage: 45,
          prevention: 'Ensure your cover letter is signed and notarized by a public notary.'
        },
        {
          reason: 'Vague Itinerary',
          percentage: 30,
          prevention: 'Provide a day-wise plan with confirmed hotel bookings for every single night.'
        }
      ]
    },
    similarDestinations: ['brazil', 'chile', 'peru']
  },

  // =========================================================================
  // 3. EUROPE
  // =========================================================================
  {
    id: 'uk',
    name: 'United Kingdom',
    code: 'UK',
    flag: '🇬🇧',
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80',
    heroImageAlt: 'London, Big Ben and Westminster Bridge',
    tagline: 'Great Britain & Northern Ireland',
    description: 'Explore the rich history of London, the Scottish Highlands, and the Welsh coast with the UK Standard Visitor Visa.',
    processingTime: '15 working days (3 Weeks)',
    successRate: 85.0,
    pricing: {
      embassyFee: "Notify Later", // Approx £127 at consular exchange rate
      serviceFee: 7999,
      totalFee: 7999,
      currency: 'INR',
      refundPolicy: 'Service fee non-refundable; Gov fee non-refundable once biometrics done'
    },
    visaTypes: [
      {
        id: 'uk-standard',
        name: 'Standard Visitor Visa',
        description: 'For tourism, visiting family/friends, and business meetings.',
        duration: '6 Months',
        price: 7999,
        processingTime: '15 Working Days',
        icon: 'Umbrella'
      },
      {
        id: 'uk-long2',
        name: 'Long-term Standard Visitor (2 Years)',
        description: 'Multiple entry visa valid for 2 years (max stay 6 months per visit).',
        duration: '2 Years',
        price: 7999,
        processingTime: '15 Working Days',
        icon: 'Clock'
      }
    ],
    requirements: [
      {
        id: 'uk-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for travel. Must have at least 1 blank page (front and back).',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'uk-2',
        category: 'Financial',
        title: 'Bank Statements',
        description: 'Last 6 months original statements. Must show "disposable income" clearly.',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'uk-3',
        category: 'Employment',
        title: 'Employment Proof',
        description: 'Letter from employer stating role, salary, and approved leave.',
        mandatory: true,
        icon: 'Briefcase'
      },
      {
        id: 'uk-4',
        category: 'Accommodation',
        title: 'Proof of Accommodation',
        description: 'Hotel booking or Invitation Letter from host with their passport/BRP copy.',
        mandatory: true,
        icon: 'Home'
      },
      {
        id: 'uk-5',
        category: 'Travel',
        title: 'Travel History',
        description: 'Evidence of previous travel (Old passports) is highly beneficial.',
        mandatory: false,
        icon: 'Globe'
      },
      {
        id: 'uk-6',
        category: 'Application',
        title: 'VFS Appointment Confirmation',
        description: 'Printed appointment letter for the Visa Application Centre.',
        mandatory: true,
        icon: 'Calendar'
      }
    ],
    timeline: [
      {
        id: 'uk-t1',
        step: 1,
        title: 'Online Application',
        description: 'Fill the form on GOV.UK and pay the visa fee online.',
        duration: '1-2 Days',
        status: 'completed',
        icon: 'Monitor'
      },
      {
        id: 'uk-t2',
        step: 2,
        title: 'Book Appointment',
        description: 'Book a biometric slot at your nearest VFS Global centre.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Calendar'
      },
      {
        id: 'uk-t3',
        step: 3,
        title: 'Document Upload',
        description: 'Scan and upload all supporting documents to the VFS portal (Self-upload).',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Upload'
      },
      {
        id: 'uk-t4',
        step: 4,
        title: 'Biometrics Visit',
        description: 'Visit VFS centre for fingerprints and photo (Must bring passport).',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'UserCheck'
      },
      {
        id: 'uk-t5',
        step: 5,
        title: 'Processing',
        description: 'Application sent to UKVI. Standard time is 15 working days.',
        duration: '15 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'uk-t6',
        step: 6,
        title: 'Passport Collection',
        description: 'Collect passport from VFS or receive via courier (if purchased).',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Package'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Siddharth Menon',
        visaType: 'Tourist',
        country: 'Kochi',
        rating: 5,
        content: 'I heard UK visas are strict about "funds parking". The team guided me to show my mutual funds and fixed deposits correctly instead of just transferring cash to savings.',
        avatar: 'https://i.pravatar.cc/150?u=siddharth',
        avatarAlt: 'Siddharth Menon',
        date: 'Last Month',
        processingTime: '16 Days'
      },
      {
        id: 't2',
        name: 'Pooja Bansal',
        visaType: 'Visit Family',
        country: 'Delhi',
        rating: 4,
        content: 'My mother was visiting my sister in London. The invitation letter format provided by the agency was perfect. We used the "Keep My Passport" service which was helpful.',
        avatar: 'https://i.pravatar.cc/150?u=pooja',
        avatarAlt: 'Pooja Bansal',
        date: '3 Months Ago',
        processingTime: '14 Days'
      },
      {
        id: 't3',
        name: 'Ravi & Sonali',
        visaType: 'Honeymoon',
        country: 'Mumbai',
        rating: 5,
        content: 'We opted for the "Priority Visa" service because our flight was close. It cost extra but we actually got the visa in 4 days! Worth it for peace of mind.',
        avatar: 'https://i.pravatar.cc/150?u=ravi',
        avatarAlt: 'Ravi & Sonali',
        date: 'Recently',
        processingTime: '4 Days (Priority)'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'How much money do I need to show in my bank?',
        answer: 'There is no fixed amount, but you must show enough to cover your trip costs + have money left over for your life in India. Usually, 2x your trip cost is a safe benchmark.',
        category: 'Financial'
      },
      {
        id: 'faq2',
        question: 'Can I use the "Priority Service"?',
        answer: 'Yes. For an additional fee (approx £500), you can get a decision in 5 working days. "Super Priority" (approx £1000) gives a decision by the next working day.',
        category: 'Services'
      },
      {
        id: 'faq3',
        question: 'What is the most common reason for rejection?',
        answer: 'Unexplained large deposits in your bank account. If you suddenly deposit ₹5 Lakhs before applying without proof of source, it will likely be rejected.',
        category: 'Rejection'
      },
      {
        id: 'faq4',
        question: 'Do I need to submit my physical passport?',
        answer: 'Yes. You must leave your passport at the VFS centre unless you purchase the "Keep My Passport" value-added service.',
        category: 'Process'
      }
    ],
    embassyInfo: {
      name: 'British High Commission New Delhi',
      address: 'Shantipath, Chanakyapuri, New Delhi - 110021',
      phone: '011-2419-2100',
      email: 'web.newdelhi@fco.gov.uk',
      website: 'https://www.gov.uk/world/organisations/british-high-commission-new-delhi',
      workingHours: 'Mon-Fri 9:00 AM - 5:00 PM',
      latitude: 28.59,
      longitude: 77.19
    },
    recentUpdates: [],
    stats: {
      totalApplications: 65000,
      averageProcessingDays: 15,
      approvalRate: 85,
      rejectionReasons: [
        {
          reason: 'Unclear Source of Funds',
          percentage: 55,
          prevention: 'Do not make large cash deposits before applying. Explain every large credit in your cover letter.'
        },
        {
          reason: 'Ties to Home Country',
          percentage: 30,
          prevention: 'Provide clear proof of employment, property, or family in India to show you will return.'
        }
      ]
    },
    similarDestinations: ['ireland', 'france', 'germany']
  },
  {
    id: 'france',
    name: 'France',
    code: 'FR',
    flag: '🇫🇷',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80',
    heroImageAlt: 'Eiffel Tower, Paris',
    tagline: 'Rendezvous in Paris & Beyond',
    description: 'Experience the art, fashion, and cuisine of France with the standard Schengen Visitor Visa.',
    processingTime: '15-20 working days',
    successRate: 88.5,
    pricing: {
      embassyFee: "Notify Later", // Approx €90 (Subject to exchange rate)
      serviceFee: 7999, // Your Agency Fee
      // vfsFee: 3200, // Approx VFS Service Charge (payable at center)
      totalFee: 7999, // Total Estimate
      currency: 'INR',
      refundPolicy: 'Service fee non-refundable; Gov & VFS fees non-refundable'
    },
    visaTypes: [
      {
        id: 'fr-tourist',
        name: 'Short Stay Visa (Tourist)',
        description: 'Standard "Type C" Schengen visa for tourism and leisure.',
        duration: '90 Days (in 180-day period)',
        price: 7999,
        processingTime: '15 Working Days',
        icon: 'Sun'
      },
      {
        id: 'fr-business',
        name: 'Short Stay Visa (Business)',
        description: 'For corporate meetings, conferences, or trade fairs.',
        duration: '90 Days',
        price: 7999,
        processingTime: '15 Working Days',
        icon: 'Briefcase'
      }
    ],
    requirements: [
      {
        id: 'fr-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 3 months beyond return date. Issued within last 10 years.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'fr-2',
        category: 'Insurance',
        title: 'Travel Insurance',
        description: 'Minimum coverage of €30,000 required. Must cover "Schengen Area".',
        mandatory: true,
        icon: 'Shield'
      },
      {
        id: 'fr-3',
        category: 'Financial',
        title: 'Proof of Funds',
        description: 'Bank statements (last 3 months) showing sufficient balance (~€120/day).',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'fr-4',
        category: 'Employment',
        title: 'Employment Proof',
        description: 'Leave sanction letter, Salary slips (3 months), and ITR acknowledgment.',
        mandatory: true,
        icon: 'Briefcase'
      },
      {
        id: 'fr-5',
        category: 'Accommodation',
        title: 'Proof of Accommodation',
        description: 'Hotel bookings or "Attestation d’accueil" (if staying with a host).',
        mandatory: true,
        icon: 'Home'
      },
      {
        id: 'fr-6',
        category: 'Application',
        title: 'Biometric Exemption',
        description: 'Check if you provided fingerprints in the last 59 months for Schengen.',
        mandatory: false,
        icon: 'Fingerprint'
      }
    ],
    timeline: [
      {
        id: 'fr-t1',
        step: 1,
        title: 'France-Visas Form',
        description: 'Complete application on France-Visas portal & print receipt.',
        duration: '1-2 Days',
        status: 'completed',
        icon: 'Monitor'
      },
      {
        id: 'fr-t2',
        step: 2,
        title: 'Book Appointment',
        description: 'Schedule submission slot at VFS Global centre.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Calendar'
      },
      {
        id: 'fr-t3',
        step: 3,
        title: 'Submission & Biometrics',
        description: 'Submit files and give biometrics (if not exempt). Pay VFS fees.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'UserCheck'
      },
      {
        id: 'fr-t4',
        step: 4,
        title: 'Consulate Processing',
        description: 'File reviewed by Embassy of France (Delhi/Mumbai/etc).',
        duration: '15-20 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'fr-t5',
        step: 5,
        title: 'Passport Return',
        description: 'Collect passport from VFS or receive via courier.',
        duration: '1-2 Days',
        status: 'upcoming',
        icon: 'Package'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Aisha Khan',
        visaType: 'Tourist',
        country: 'Bangalore',
        rating: 5,
        content: 'I was worried about the "Attestation d’accueil" since I was staying with my aunt in Lyon. The team explained exactly what she needed to get from her local town hall. Smooth process.',
        avatar: 'https://i.pravatar.cc/150?u=aisha',
        avatarAlt: 'Aisha Khan',
        date: 'Last Month',
        processingTime: '12 Days'
      },
      {
        id: 't2',
        name: 'Rohan & Suman',
        visaType: 'Honeymoon',
        country: 'Delhi',
        rating: 4,
        content: 'Paris was our dream. The agency helped us book refundable hotels for the application so we did not lose money if the visa was delayed. Got it in 15 days exactly.',
        avatar: 'https://i.pravatar.cc/150?u=rohan_suman',
        avatarAlt: 'Rohan & Suman',
        date: '2 Months Ago',
        processingTime: '15 Days'
      },
      {
        id: 't3',
        name: 'Mr. Verma',
        visaType: 'Business',
        country: 'Mumbai',
        rating: 5,
        content: 'I had a Schengen visa from 2 years ago (Germany). They correctly identified I was "Biometric Exempt" which saved me time at the center. Very knowledgeable.',
        avatar: 'https://i.pravatar.cc/150?u=verma',
        avatarAlt: 'Mr. Verma',
        date: 'Recently',
        processingTime: '10 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Do I need to book my flight tickets before applying?',
        answer: 'The Embassy requires a flight *reservation* or itinerary. It is strongly advised NOT to buy fully paid/non-refundable tickets until the visa is approved.',
        category: 'Travel'
      },
      {
        id: 'faq2',
        question: 'What is the "Biometric Exemption"?',
        answer: 'If you have provided fingerprints for any Schengen visa in the last 59 months, you do not need to give them again. You must provide a copy of the old visa sticker.',
        category: 'Process'
      },
      {
        id: 'faq3',
        question: 'Can I visit other countries like Switzerland or Italy?',
        answer: 'Yes. A France Schengen Visa allows you to travel to all 27 Schengen countries. However, France must be your main destination (longest stay) or first point of entry.',
        category: 'Validity'
      },
      {
        id: 'faq4',
        question: 'How much bank balance is required?',
        answer: 'There is no fixed rule, but a general guideline is to show €120 (approx ₹11,000) for every day of your intended stay, excluding prepaid hotel costs.',
        category: 'Financial'
      }
    ],
    embassyInfo: {
      name: 'Embassy of France in India',
      address: '2/50-E, Shantipath, Chanakyapuri, New Delhi - 110021',
      phone: '011-4319-6100',
      email: 'webmaster@ambafrance-in.org',
      website: 'https://in.ambafrance.org/',
      workingHours: 'Mon-Fri 8:30 AM - 1:00 PM, 2:00 PM - 5:30 PM',
      latitude: 28.58,
      longitude: 77.19
    },
    recentUpdates: [],
    stats: {
      totalApplications: 70000,
      averageProcessingDays: 15,
      approvalRate: 88,
      rejectionReasons: [
        {
          reason: 'Justification for Purpose of Stay',
          percentage: 45,
          prevention: 'Ensure your itinerary is detailed and logical. Avoid vague plans like "sightseeing" without specifics.'
        },
        {
          reason: 'Insufficient Means of Subsistence',
          percentage: 35,
          prevention: 'Maintain a healthy average bank balance for 3 months. Avoid sudden large deposits.'
        }
      ]
    },
    similarDestinations: ['switzerland', 'germany', 'italy']
  },
  {
    id: 'germany',
    name: 'Germany',
    code: 'DE',
    flag: '🇩🇪',
    heroImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80',
    heroImageAlt: 'Neuschwanstein Castle, Bavaria',
    tagline: 'Heart of Europe',
    description: 'Discover the precision of German engineering, the beauty of the Bavarian Alps, and the history of Berlin.',
    processingTime: '15 calendar days',
    successRate: 91.0,
    pricing: {
      embassyFee: "Notify Later", // Approx €90
      serviceFee: 7999,
      // vfsFee: 1800, // Approx VFS Service Charge
      totalFee: 17899,
      currency: 'INR',
      refundPolicy: 'Service fee non-refundable; Gov & VFS fees non-refundable'
    },
    visaTypes: [
      {
        id: 'de-tourist',
        name: 'Schengen Visa (Type C)',
        description: 'For tourism, visiting family/friends, and cultural trips.',
        duration: '90 Days (in 180-day period)',
        price: 7999,
        processingTime: '15 Days',
        icon: 'Beer'
      },
      {
        id: 'de-business',
        name: 'Business Visa',
        description: 'For trade fair visits (Messe) and corporate meetings.',
        duration: '90 Days',
        price: 7999,
        processingTime: '15 Days',
        icon: 'Briefcase'
      }
    ],
    requirements: [
      {
        id: 'de-1',
        category: 'Identity',
        title: 'Valid Passport',
        description: 'Issued within last 10 years, valid for 3 months after trip, 2 blank pages.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'de-2',
        category: 'Application',
        title: 'Videx Form',
        description: 'Completed Videx online application form with high-quality printout.',
        mandatory: true,
        icon: 'Monitor'
      },
      {
        id: 'de-3',
        category: 'Financial',
        title: 'Bank Statements (Stamped)',
        description: 'Last 3 months original statements with BANK SEAL. (Strictly enforced).',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'de-4',
        category: 'Insurance',
        title: 'Travel Health Insurance',
        description: 'Min coverage €30,000. Must cover "Schengen States" and repatriation.',
        mandatory: true,
        icon: 'Shield'
      },
      {
        id: 'de-5',
        category: 'Employment',
        title: 'Proof of Employment',
        description: 'Leave letter, Salary slips (3 months), and ITR. Business owners need GST/Registration.',
        mandatory: true,
        icon: 'Briefcase'
      },
      {
        id: 'de-6',
        category: 'Photo',
        title: 'Biometric Photos',
        description: '35mm x 45mm, 80% face coverage, white background (Strict adherence needed).',
        mandatory: true,
        icon: 'Camera'
      }
    ],
    timeline: [
      {
        id: 'de-t1',
        step: 1,
        title: 'Videx Application',
        description: 'Fill the Videx form online. It generates a barcode which is crucial.',
        duration: '1-2 Days',
        status: 'completed',
        icon: 'Edit'
      },
      {
        id: 'de-t2',
        step: 2,
        title: 'Appointment Booking',
        description: 'Book slot at VFS Global. (Demand is high, book 2 months ahead).',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Calendar'
      },
      {
        id: 'de-t3',
        step: 3,
        title: 'Submission',
        description: 'Submit physical documents and give biometrics at VFS.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'UserCheck'
      },
      {
        id: 'de-t4',
        step: 4,
        title: 'Embassy Processing',
        description: 'German Mission processes the file. (Usually very punctual).',
        duration: '15 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'de-t5',
        step: 5,
        title: 'Passport Return',
        description: 'Collect passport via courier or in-person.',
        duration: '1-2 Days',
        status: 'upcoming',
        icon: 'Package'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Karan Patel',
        visaType: 'Business (Messe)',
        country: 'Ahmedabad',
        rating: 5,
        content: 'I was going for the Hannover Messe. The agency knew exactly how to present the "Trade Fair Pass" and the invitation letter. Got my visa in just 5 days!',
        avatar: 'https://i.pravatar.cc/150?u=karan',
        avatarAlt: 'Karan Patel',
        date: 'Last Month',
        processingTime: '5 Days'
      },
      {
        id: 't2',
        name: 'Deepika Rao',
        visaType: 'Tourist',
        country: 'Hyderabad',
        rating: 4,
        content: 'German visa rules are strict. My photo was initially rejected at VFS, but the agency had warned me to carry extras just in case. Saved my appointment.',
        avatar: 'https://i.pravatar.cc/150?u=deepika',
        avatarAlt: 'Deepika Rao',
        date: '2 Months Ago',
        processingTime: '15 Days'
      },
      {
        id: 't3',
        name: 'The Vermas',
        visaType: 'Visit Family',
        country: 'Delhi',
        rating: 5,
        content: 'Visiting our son in Munich. The team helped us draft the "Verpflichtungserklärung" (formal obligation letter) process for our son in Germany. Very technical but smooth.',
        avatar: 'https://i.pravatar.cc/150?u=vermas',
        avatarAlt: 'The Vermas',
        date: 'Recently',
        processingTime: '12 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'What is the "Videx" form?',
        answer: 'Videx is the mandatory online application form for German visas. You must fill it digitally, print it (including the 7th page with the barcode), and sign it.',
        category: 'Application'
      },
      {
        id: 'faq2',
        question: 'Can I submit online bank statements?',
        answer: 'NO. The German Embassy is extremely strict. You must submit PHYSICAL bank statements issued by the bank with an original stamp and signature. PDFs are often rejected.',
        category: 'Documents'
      },
      {
        id: 'faq3',
        question: 'What is a "Verpflichtungserklärung"?',
        answer: 'If you are visiting family and they are sponsoring you, they may need to get this formal "Declaration of Commitment" from their local Alien\'s Authority in Germany.',
        category: 'Sponsorship'
      },
      {
        id: 'faq4',
        question: 'Is travel insurance mandatory?',
        answer: 'Yes, absolutely. It must cover at least €30,000 for medical expenses and repatriation across the entire Schengen area. Without it, the application will not be accepted.',
        category: 'Insurance'
      }
    ],
    embassyInfo: {
      name: 'Embassy of the Federal Republic of Germany',
      address: '6/50G, Shanti Path, Chanakyapuri, New Delhi - 110021',
      phone: '011-4419-9199',
      email: 'visa@newd.diplo.de',
      website: 'https://india.diplo.de/',
      workingHours: 'Mon-Thu 8:00 AM - 5:00 PM, Fri 8:00 AM - 2:00 PM',
      latitude: 28.59,
      longitude: 77.19
    },
    recentUpdates: [],
    stats: {
      totalApplications: 60000,
      averageProcessingDays: 15,
      approvalRate: 91,
      rejectionReasons: [
        {
          reason: 'Unstamped Bank Statements',
          percentage: 40,
          prevention: 'Visit your bank branch and get physical stamps on all pages of your statement.'
        },
        {
          reason: 'Invalid Travel Insurance',
          percentage: 25,
          prevention: 'Ensure your insurance policy explicitly states "Schengen" and covers the full €30,000 limit.'
        }
      ]
    },
    similarDestinations: ['austria', 'switzerland', 'france']
  },
  {
    id: 'italy',
    name: 'Italy',
    code: 'IT',
    flag: '🇮🇹',
    heroImage: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80',
    heroImageAlt: 'Venice Grand Canal',
    tagline: 'La Dolce Vita',
    description: 'Explore the ancient ruins of Rome, the art of Florence, and the canals of Venice with the Italy Schengen Visa.',
    processingTime: '15-20 working days',
    successRate: 88.0,
    pricing: {
      embassyFee: "Notify Later", // €90 (Fixed exchange rate for 2026)
      serviceFee: 7999, // Your Agency Fee
      // vfsFee: 2400, // Approx VFS Service Charge
      totalFee: 7999,
      currency: 'INR',
      refundPolicy: 'Service fee non-refundable; Gov & VFS fees non-refundable'
    },
    visaTypes: [
      {
        id: 'it-tourist',
        name: 'Tourist Visa (C-Type)',
        description: 'Short stay visa for tourism, leisure, and sightseeing.',
        duration: '90 Days (in 180-day period)',
        price: 7999,
        processingTime: '15 Working Days',
        icon: 'Pizza'
      },
      {
        id: 'it-business',
        name: 'Business Visa',
        description: 'For meetings, trade fairs, and industrial visits.',
        duration: '90 Days',
        price: 7999,
        processingTime: '15 Working Days',
        icon: 'Briefcase'
      }
    ],
    requirements: [
      {
        id: 'it-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 3 months after return. Must have 2 blank pages.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'it-2',
        category: 'Financial',
        title: 'Physical Bank Statements',
        description: 'Last 6 months ORIGINAL statements with physical bank stamp & signature (No PDFs).',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'it-3',
        category: 'Accommodation',
        title: 'Hotel/Sponsorship Proof',
        description: 'Confirmed hotel vouchers OR "Lettera di Invito" (Invitation Letter) from an Italian host.',
        mandatory: true,
        icon: 'Home'
      },
      {
        id: 'it-4',
        category: 'Employment',
        title: 'Employment Proof',
        description: 'NOC/Leave letter on company letterhead, Salary slips (3 months), and ITR.',
        mandatory: true,
        icon: 'Briefcase'
      },
      {
        id: 'it-5',
        category: 'Insurance',
        title: 'Travel Insurance',
        description: 'Min coverage €30,000. Must be valid for the entire Schengen area.',
        mandatory: true,
        icon: 'Shield'
      },
      {
        id: 'it-6',
        category: 'Application',
        title: 'Photo Checklist',
        description: '35x45mm, white background, 80% face coverage. No teeth visible.',
        mandatory: true,
        icon: 'Camera'
      }
    ],
    timeline: [
      {
        id: 'it-t1',
        step: 1,
        title: 'Application Form',
        description: 'Download and fill the Schengen Visa Application Form (Type C).',
        duration: '1 Day',
        status: 'completed',
        icon: 'Edit'
      },
      {
        id: 'it-t2',
        step: 2,
        title: 'Book Appointment',
        description: 'Book slot at VFS Global (Strictly based on your State of Residence).',
        duration: '1-3 Days',
        status: 'upcoming',
        icon: 'Calendar'
      },
      {
        id: 'it-t3',
        step: 3,
        title: 'Submission',
        description: 'Submit physical docs & give biometrics at VFS Centre.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'UserCheck'
      },
      {
        id: 'it-t4',
        step: 4,
        title: 'Embassy Processing',
        description: 'File reviewed by the Italian Embassy/Consulate.',
        duration: '15-20 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'it-t5',
        step: 5,
        title: 'Collection',
        description: 'Collect passport. Check for "Visto" sticker details immediately.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Package'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Priya Sharma',
        visaType: 'Tourist',
        country: 'Delhi',
        rating: 5,
        content: 'I almost got rejected because I printed my bank statement from netbanking. The agency caught this error and made me get the physical stamp from the bank branch. Saved my trip!',
        avatar: 'https://i.pravatar.cc/150?u=priya_it',
        avatarAlt: 'Priya Sharma',
        date: 'Last Month',
        processingTime: '18 Days'
      },
      {
        id: 't2',
        name: 'Amit Verma',
        visaType: 'Business',
        country: 'Mumbai',
        rating: 4,
        content: 'The "Lettera di Invito" format is very specific. My Italian partner used an old format, but the team here provided the correct 2026 version. Processing was a bit slow (20 days).',
        avatar: 'https://i.pravatar.cc/150?u=amit_it',
        avatarAlt: 'Amit Verma',
        date: '2 Months Ago',
        processingTime: '20 Days'
      },
      {
        id: 't3',
        name: 'The Iyers',
        visaType: 'Family Visit',
        country: 'Bangalore',
        rating: 5,
        content: 'We live in Bangalore so we had to apply at VFS Bangalore only. The jurisdiction rules are strict! The team helped us prepare the sponsorship documents perfectly.',
        avatar: 'https://i.pravatar.cc/150?u=iyers',
        avatarAlt: 'The Iyers',
        date: 'Recently',
        processingTime: '15 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Can I apply from any VFS centre in India?',
        answer: 'NO. Italy enforces strict consular jurisdiction. You must apply at the centre that covers the state where you have resided for the last 6 months (e.g., North India residents -> Delhi, South -> Mumbai/Bangalore/Chennai).',
        category: 'Jurisdiction'
      },
      {
        id: 'faq2',
        question: 'Is a flight ticket required?',
        answer: 'Italy requires confirmed *reservations* (PNR) for round-trip flights. Fully paid tickets are not mandatory but highly recommended if your travel dates are close.',
        category: 'Travel'
      },
      {
        id: 'faq3',
        question: 'What is the "Lettera di Invito"?',
        answer: 'If staying with friends or family, they must fill out this specific "Invitation Letter" form and email it directly to the Consulate, along with a copy of their ID/Passport.',
        category: 'Accommodation'
      },
      {
        id: 'faq4',
        question: 'Does Italy allow "Visa Shopping"?',
        answer: 'No. If you apply for an Italian visa but spend most of your time in France, you may be stopped at the border. Italy must be your main destination (longest stay).',
        category: 'Validity'
      }
    ],
    embassyInfo: {
      name: 'Embassy of Italy in New Delhi',
      address: '50-E, Chandragupta Marg, Chanakyapuri, New Delhi - 110021',
      phone: '011-2611-4355',
      email: 'visti.newdelhi@esteri.it',
      website: 'https://ambnewdelhi.esteri.it/',
      workingHours: 'Mon-Fri 9:00 AM - 5:00 PM',
      latitude: 28.59,
      longitude: 77.19
    },
    recentUpdates: [],
    stats: {
      totalApplications: 55000,
      averageProcessingDays: 18,
      approvalRate: 88,
      rejectionReasons: [
        {
          reason: 'Incorrect Jurisdiction',
          percentage: 30,
          prevention: 'Apply only at the VFS centre designated for your state of residence.'
        },
        {
          reason: 'Online Bank Statements',
          percentage: 45,
          prevention: 'Submit only original, physically stamped bank statements. E-statements are often rejected.'
        }
      ]
    },
    similarDestinations: ['france', 'spain', 'greece']
  },
  {
    id: 'spain',
    name: 'Spain',
    code: 'ES',
    flag: '🇪🇸',
    heroImage: 'https://media.istockphoto.com/id/509288876/photo/tossa-de-mar-on-the-costa-brava-catalunya-spain.jpg?s=612x612&w=0&k=20&c=51Nw_Kd-_SDBd_RiBSqjv4JC5ZKDeO6oYfv6niYYNNQ=',
    heroImageAlt: 'Plaza de España, Seville',
    tagline: 'Passion in Every Corner',
    description: 'Experience the flamenco rhythms of Seville, the architecture of Barcelona, and the beaches of Ibiza.',
    processingTime: '15-20 working days',
    successRate: 89.5,
    pricing: {
      embassyFee: "Notify Later", // Approx €90 (Fixed exchange rate)
      serviceFee: 7999, // Your Agency Fee
      // blsFee: 1800, // BLS International Service Charge (Approx)
      totalFee: 7999,
      currency: 'INR',
      refundPolicy: 'Service fee non-refundable; Gov & BLS fees non-refundable'
    },
    visaTypes: [
      {
        id: 'es-tourist',
        name: 'Tourist Visa',
        description: 'For tourism, holidays, and visiting family.',
        duration: '90 Days (in 180-day period)',
        price: 7999,
        processingTime: '15 Working Days',
        icon: 'Sun'
      },
      {
        id: 'es-business',
        name: 'Business Visa',
        description: 'For corporate meetings and trade conferences.',
        duration: '90 Days',
        price: 7999,
        processingTime: '15 Working Days',
        icon: 'Briefcase'
      }
    ],
    requirements: [
      {
        id: 'es-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 3 months beyond intended stay. Must have 2 blank pages.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'es-2',
        category: 'Application',
        title: 'Visa Application Form',
        description: 'Completed Schengen Visa form (English or Spanish) signed in blue ink.',
        mandatory: true,
        icon: 'Edit'
      },
      {
        id: 'es-3',
        category: 'Financial',
        title: 'Bank Statements',
        description: 'Last 6 months original statements with bank stamp. Online printouts not accepted.',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'es-4',
        category: 'Insurance',
        title: 'Travel Medical Insurance',
        description: 'Coverage of €30,000 for the entire Schengen area.',
        mandatory: true,
        icon: 'Shield'
      },
      {
        id: 'es-5',
        category: 'Employment',
        title: 'Occupation Proof',
        description: 'NOC from employer, Salary slips (3 months), or Business Registration (GST).',
        mandatory: true,
        icon: 'Briefcase'
      },
      {
        id: 'es-6',
        category: 'Accommodation',
        title: 'Proof of Stay',
        description: 'Hotel bookings for full duration or official "Carta de Invitación" (private accommodation).',
        mandatory: true,
        icon: 'Home'
      }
    ],
    timeline: [
      {
        id: 'es-t1',
        step: 1,
        title: 'Form Filling',
        description: 'Download and fill the Spain Schengen application form.',
        duration: '1 Day',
        status: 'completed',
        icon: 'FileText'
      },
      {
        id: 'es-t2',
        step: 2,
        title: 'Book Appointment',
        description: 'Book slot on the BLS International website (Select correct jurisdiction).',
        duration: '1-3 Days',
        status: 'upcoming',
        icon: 'Calendar'
      },
      {
        id: 'es-t3',
        step: 3,
        title: 'Submission at BLS',
        description: 'Submit documents and provide biometrics at the BLS Centre.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'UserCheck'
      },
      {
        id: 'es-t4',
        step: 4,
        title: 'Embassy Processing',
        description: 'Application reviewed by the Embassy of Spain.',
        duration: '15 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'es-t5',
        step: 5,
        title: 'Collection',
        description: 'Collect passport from BLS or via courier.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Package'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Ananya Deshmukh',
        visaType: 'Tourist',
        country: 'Mumbai',
        rating: 4,
        content: 'I almost booked an appointment with VFS by mistake! The team corrected me to use BLS International. The Mumbai BLS centre was crowded, but my documents were perfect so it went fast.',
        avatar: 'https://i.pravatar.cc/150?u=ananya',
        avatarAlt: 'Ananya Deshmukh',
        date: 'Last Month',
        processingTime: '14 Days'
      },
      {
        id: 't2',
        name: 'Rahul Khanna',
        visaType: 'Business',
        country: 'Delhi',
        rating: 5,
        content: 'My business trip was urgent. Spain processes faster than other Schengen countries usually. I got my passport back in just 10 working days.',
        avatar: 'https://i.pravatar.cc/150?u=rahul_sp',
        avatarAlt: 'Rahul Khanna',
        date: '3 Months Ago',
        processingTime: '10 Days'
      },
      {
        id: 't3',
        name: 'The Mehtas',
        visaType: 'Family Holiday',
        country: 'Ahmedabad',
        rating: 5,
        content: 'We travelled to Barcelona and Ibiza. The agency ensured our itinerary showed internal transfers clearly, which the officer specifically looks for.',
        avatar: 'https://i.pravatar.cc/150?u=mehtas',
        avatarAlt: 'The Mehtas',
        date: 'Recently',
        processingTime: '15 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Do I apply at VFS Global?',
        answer: 'NO. Spain visa applications are processed by BLS International. You must visit a BLS centre, not VFS.',
        category: 'Process'
      },
      {
        id: 'faq2',
        question: 'What is the "Carta de Invitación"?',
        answer: 'If staying with a friend/relative, a simple email invitation is NOT enough. They must obtain an official "Carta de Invitación" from the Spanish police station in their city.',
        category: 'Accommodation'
      },
      {
        id: 'faq3',
        question: 'Can I apply in Delhi if I live in Bangalore?',
        answer: 'No. Jurisdiction is strict. South India residents must apply at the Mumbai Consulate jurisdiction (BLS centres in Mumbai/Chennai/Bangalore). North India goes to Delhi.',
        category: 'Jurisdiction'
      },
      {
        id: 'faq4',
        question: 'Is travel insurance mandatory?',
        answer: 'Yes. Minimum coverage of €30,000 valid for all Schengen countries is required.',
        category: 'Insurance'
      }
    ],
    embassyInfo: {
      name: 'Embassy of Spain in New Delhi',
      address: '12, Prithviraj Road, New Delhi - 110011',
      phone: '011-4129-3000',
      email: 'emb.newdelhi.vis@maec.es',
      website: 'https://www.exteriores.gob.es/Embajadas/nuevadelhi',
      workingHours: 'Mon-Fri 9:00 AM - 1:00 PM',
      latitude: 28.60,
      longitude: 77.22
    },
    recentUpdates: [],
    stats: {
      totalApplications: 45000,
      averageProcessingDays: 15,
      approvalRate: 89,
      rejectionReasons: [
        {
          reason: 'Missing "Carta de Invitación"',
          percentage: 35,
          prevention: 'Ensure your host sends the official police-issued invitation document, not just a letter.'
        },
        {
          reason: 'Unstamped Bank Statements',
          percentage: 40,
          prevention: 'Submit original statements with the bank\'s wet seal and signature.'
        }
      ]
    },
    similarDestinations: ['portugal', 'france', 'italy']
  },
  {
    id: 'netherlands',
    name: 'Netherlands',
    code: 'NL',
    flag: '🇳🇱',
    heroImage: 'https://media.istockphoto.com/id/477307170/photo/night-city-view-of-amsterdam-the-netherlands.jpg?s=612x612&w=0&k=20&c=ALSX7lL09Mf114X-b7txCUmI9fyN1VB_SCToEhXatu4=',
    heroImageAlt: 'Canals of Amsterdam',
    tagline: 'Land of Tulips & Canals',
    description: 'Explore the artistic heritage of Amsterdam, the modern architecture of Rotterdam, and the fields of Keukenhof.',
    processingTime: '15-45 calendar days',
    successRate: 92.5,
    pricing: {
      embassyFee: "Notify Later", // Approx €90 (Fixed Consular Exchange Rate)
      serviceFee: 7999, // Your Agency Fee
      // vfsFee: 2200, // Approx VFS Service Charge
      totalFee: 7999,
      currency: 'INR',
      refundPolicy: 'Service fee non-refundable; Gov & VFS fees non-refundable'
    },
    visaTypes: [
      {
        id: 'nl-tourist',
        name: 'Tourist Visa (Type C)',
        description: 'Short stay for tourism, cycling tours, and leisure.',
        duration: '90 Days (in 180-day period)',
        price: 7999,
        processingTime: '15-20 Days',
        icon: 'Sun'
      },
      {
        id: 'nl-visit',
        name: 'Visiting Family/Friends',
        description: 'For visiting relatives using the specific "Garantstelling" form.',
        duration: '90 Days',
        price: 7999,
        processingTime: '15-20 Days',
        icon: 'Users'
      },
      {
        id: 'nl-orange',
        name: 'Carpet Visa (Business)',
        description: 'Expedited business visa for employees of registered companies (Orange Carpet Prog).',
        duration: 'Up to 5 Years',
        price: 7999,
        processingTime: '5-10 Days',
        icon: 'Briefcase'
      }
    ],
    requirements: [
      {
        id: 'nl-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 3 months after return. Must have 2 blank pages.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'nl-2',
        category: 'Accommodation',
        title: 'Proof of Sponsorship Form',
        description: 'If visiting family, the "Bewijs van garantstelling" form is MANDATORY (Legalized if sponsored).',
        mandatory: true,
        icon: 'FileCheck'
      },
      {
        id: 'nl-3',
        category: 'Financial',
        title: 'Bank Statements',
        description: 'Last 3 months original statements with bank stamp. Online printouts rejected.',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'nl-4',
        category: 'Insurance',
        title: 'Travel Insurance',
        description: 'Min coverage €30,000 valid for all Schengen countries.',
        mandatory: true,
        icon: 'Shield'
      },
      {
        id: 'nl-5',
        category: 'Employment',
        title: 'Employment Proof',
        description: 'Leave letter, Salary slips (3 months), ITR. Business owners need GST.',
        mandatory: true,
        icon: 'Briefcase'
      },
      {
        id: 'nl-6',
        category: 'Application',
        title: 'Application Form',
        description: 'Completed online via the Netherlands Worldwide portal, printed and signed.',
        mandatory: true,
        icon: 'Monitor'
      }
    ],
    timeline: [
      {
        id: 'nl-t1',
        step: 1,
        title: 'Online Form',
        description: 'Fill application on "Netherlands Worldwide" website.',
        duration: '1 Day',
        status: 'completed',
        icon: 'Edit'
      },
      {
        id: 'nl-t2',
        step: 2,
        title: 'Host Preparation',
        description: 'Host in NL gets "Garantstelling" form legalized at their municipality (if applicable).',
        duration: '3-7 Days',
        status: 'upcoming',
        icon: 'UserCheck'
      },
      {
        id: 'nl-t3',
        step: 3,
        title: 'Book Appointment',
        description: 'Schedule VFS Global appointment.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Calendar'
      },
      {
        id: 'nl-t4',
        step: 4,
        title: 'Submission',
        description: 'Submit documents and biometrics at VFS.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Briefcase'
      },
      {
        id: 'nl-t5',
        step: 5,
        title: 'Assessment',
        description: 'Regional Support Office (RSO) assesses the file. Can take up to 45 days.',
        duration: '15-20 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'nl-t6',
        step: 6,
        title: 'Collection',
        description: 'Passport returned via courier or collection.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Package'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Karthik Nair',
        visaType: 'Visit Family',
        country: 'Kochi',
        rating: 5,
        content: 'I was visiting my sister in Eindhoven. She didn\'t know about the "legalization" of the sponsorship form. This agency told us exactly how to get the stamp from the municipality. It saved us a rejection!',
        avatar: 'https://i.pravatar.cc/150?u=karthik_nl',
        avatarAlt: 'Karthik Nair',
        date: 'Last Month',
        processingTime: '18 Days'
      },
      {
        id: 't2',
        name: 'Tanya Singh',
        visaType: 'Tourist',
        country: 'Delhi',
        rating: 4,
        content: 'The VFS process was smooth, but the Netherlands asks for a lot of details on the itinerary. The team helped me write a day-wise plan that looked professional.',
        avatar: 'https://i.pravatar.cc/150?u=tanya_nl',
        avatarAlt: 'Tanya Singh',
        date: '3 Months Ago',
        processingTime: '15 Days'
      },
      {
        id: 't3',
        name: 'Mr. & Mrs. Goel',
        visaType: 'Business (Orange Carpet)',
        country: 'Mumbai',
        rating: 5,
        content: 'My company is part of the Orange Carpet Visa Facility. The agency handled the simplified paperwork perfectly. Got the visa in just 5 working days.',
        avatar: 'https://i.pravatar.cc/150?u=goel_nl',
        avatarAlt: 'Mr. & Mrs. Goel',
        date: 'Recently',
        processingTime: '5 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'What is the "Bewijs van garantstelling" form?',
        answer: 'It is a specific Dutch government form for "Proof of sponsorship and/or private accommodation". If you are staying with someone, they MUST fill this out. If they sponsor you, their signature must be legalized by the municipality.',
        category: 'Documents'
      },
      {
        id: 'faq2',
        question: 'How long does processing take?',
        answer: 'Standard time is 15 calendar days. However, the Netherlands Ministry warns that it can take up to 45 days if more detailed assessment is needed, so apply early.',
        category: 'Processing'
      },
      {
        id: 'faq3',
        question: 'Is flight booking mandatory?',
        answer: 'Only a flight *reservation* is required for the application. Do not pay for the full ticket until the visa is approved.',
        category: 'Travel'
      },
      {
        id: 'faq4',
        question: 'Can I track my application?',
        answer: 'Yes, VFS Global provides a tracking number. Netherlands applications are often sent to the Regional Support Office (RSO) in Asia or the Hague for decision.',
        category: 'Process'
      }
    ],
    embassyInfo: {
      name: 'Embassy of the Netherlands in India',
      address: '6/50 F, Shantipath, Chanakyapuri, New Delhi - 110021',
      phone: '011-2419-7600',
      email: 'nde@minbuza.nl',
      website: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/india',
      workingHours: 'Mon-Fri 9:00 AM - 5:00 PM',
      latitude: 28.59,
      longitude: 77.19
    },
    recentUpdates: [],
    stats: {
      totalApplications: 38000,
      averageProcessingDays: 18,
      approvalRate: 92.5,
      rejectionReasons: [
        {
          reason: 'Invalid Sponsorship Form',
          percentage: 50,
          prevention: 'Ensure your host provides the official "Bewijs van garantstelling" form, not a simple typed letter.'
        },
        {
          reason: 'Insufficient Means',
          percentage: 30,
          prevention: 'Show €55 per person per day if staying in a hotel, or €34 if staying with a host.'
        }
      ]
    },
    similarDestinations: ['belgium', 'germany', 'france']
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    code: 'CH',
    flag: '🇨🇭',
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80',
    heroImageAlt: 'The Matterhorn, Zermatt',
    tagline: 'Playground of Europe',
    description: 'Experience the majestic Alps, pristine lakes, and world-class hospitality with the Swiss Schengen Visa.',
    processingTime: '10-15 working days',
    successRate: 94.0,
    pricing: {
      embassyFee: "Notify Later", // Approx €90 (Subject to current Consular Exchange Rate)
      serviceFee: 7999, // Your Agency Fee
      // vfsFee: 2690, // VFS Global Service Charge
      totalFee: 7999,
      currency: 'INR',
      refundPolicy: 'Service fee non-refundable; Gov & VFS fees non-refundable'
    },
    visaTypes: [
      {
        id: 'ch-tourist',
        name: 'Tourist Visa (Type C)',
        description: 'For tourism, skiing holidays, and visiting family.',
        duration: '90 Days (in 180-day period)',
        price: 7999,
        processingTime: '10-15 Days',
        icon: 'Snowflake'
      },
      {
        id: 'ch-business',
        name: 'Business Visa',
        description: 'For corporate meetings, Davos summit, or UN visits.',
        duration: '90 Days',
        price: 7999,
        processingTime: '10-15 Days',
        icon: 'Briefcase'
      },
      {
        id: 'ch-cascade',
        name: 'Cascade Visa (Long Term)',
        description: '2 or 5-year multiple entry visa for frequent travelers (New 2025/26 Rule).',
        duration: '2-5 Years',
        price: 7999,
        processingTime: '15 Days',
        icon: 'TrendingUp'
      }
    ],
    requirements: [
      {
        id: 'ch-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 3 months beyond return. Must have 2 blank pages.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'ch-2',
        category: 'Accommodation',
        title: 'Confirmed Hotel Bookings',
        description: 'Must cover every single night. Swiss authorities often verify these with hotels directly.',
        mandatory: true,
        icon: 'Home'
      },
      {
        id: 'ch-3',
        category: 'Financial',
        title: 'Bank Statements',
        description: 'Last 6 months original statements with bank stamp & signature.',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'ch-4',
        category: 'Insurance',
        title: 'Travel Insurance',
        description: 'Min coverage €30,000. Must be valid for the entire Schengen area.',
        mandatory: true,
        icon: 'Shield'
      },
      {
        id: 'ch-5',
        category: 'Employment',
        title: 'Employment Proof',
        description: 'Leave letter, Salary slips (3 months), ITR. Business owners need GST/Registration.',
        mandatory: true,
        icon: 'Briefcase'
      },
      {
        id: 'ch-6',
        category: 'Application',
        title: 'Cover Letter',
        description: 'Detailed day-wise itinerary explaining your movement between cities (Interlaken, Lucerne, etc.).',
        mandatory: true,
        icon: 'Map'
      }
    ],
    timeline: [
      {
        id: 'ch-t1',
        step: 1,
        title: 'Online Form',
        description: 'Complete the application on the official "Swiss-Visa" portal.',
        duration: '1 Day',
        status: 'completed',
        icon: 'Edit'
      },
      {
        id: 'ch-t2',
        step: 2,
        title: 'Book Appointment',
        description: 'Schedule slot at VFS Global (Select correct jurisdiction).',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Calendar'
      },
      {
        id: 'ch-t3',
        step: 3,
        title: 'Submission',
        description: 'Submit documents and biometrics at VFS.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'UserCheck'
      },
      {
        id: 'ch-t4',
        step: 4,
        title: 'Processing',
        description: 'Embassy of Switzerland reviews file (High scrutiny on hotels).',
        duration: '10-15 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'ch-t5',
        step: 5,
        title: 'Passport Return',
        description: 'Collect passport via courier or in-person.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Package'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Rishabh & Mira',
        visaType: 'Honeymoon',
        country: 'Mumbai',
        rating: 5,
        content: 'We planned a 10-day trip to Zermatt and Interlaken. The agency warned us about the "cancelled booking" rejection trap. They managed our hotel proofs perfectly until the visa arrived.',
        avatar: 'https://i.pravatar.cc/150?u=rishabh_ch',
        avatarAlt: 'Rishabh & Mira',
        date: 'Last Month',
        processingTime: '12 Days'
      },
      {
        id: 't2',
        name: 'Dr. Alok Gupta',
        visaType: 'Conference',
        country: 'Delhi',
        rating: 5,
        content: 'I travel to Geneva often for UN meetings. Thanks to the new Cascade rule advice, I applied for a long-term visa and actually got a 2-year validity! No more applying every 6 months.',
        avatar: 'https://i.pravatar.cc/150?u=alok_ch',
        avatarAlt: 'Dr. Alok Gupta',
        date: '2 Months Ago',
        processingTime: '10 Days'
      },
      {
        id: 't3',
        name: 'Simran Kaur',
        visaType: 'Visit Family',
        country: 'Chandigarh',
        rating: 4,
        content: 'Visiting my brother in Zurich. The sponsorship process was smooth, but VFS Chandigarh had no appointments. The team helped me secure a slot in Delhi instead.',
        avatar: 'https://i.pravatar.cc/150?u=simran_ch',
        avatarAlt: 'Simran Kaur',
        date: 'Recently',
        processingTime: '15 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'What is the "Cascade Regime" for Indians?',
        answer: 'It is a new EU rule. If you have lawfully used two Schengen visas in the last 3 years, you are eligible for a 2-year multiple-entry visa. If you use that correctly, you can get a 5-year visa next.',
        category: 'Validity'
      },
      {
        id: 'faq2',
        question: 'Why are Swiss visas rejected often?',
        answer: 'The most common reason is "Unreliable Accommodation Proof". If you book a hotel and cancel it immediately after applying, the Embassy often finds out and rejects the visa.',
        category: 'Rejection'
      },
      {
        id: 'faq3',
        question: 'Do I need a Swiss Travel Pass before applying?',
        answer: 'No, it is not mandatory for the visa application, though showing it can strengthen your "proof of transport" if you are doing a multi-city tour.',
        category: 'Travel'
      },
      {
        id: 'faq4',
        question: 'Can I enter other countries with this visa?',
        answer: 'Yes, but Switzerland must be your main destination. If you land in Paris but spend 5 days in France and 10 days in Switzerland, you must apply for a Swiss visa.',
        category: 'Travel'
      }
    ],
    embassyInfo: {
      name: 'Embassy of Switzerland in India',
      address: 'Nyaya Marg, Chanakyapuri, New Delhi - 110021',
      phone: '011-4995-9500',
      email: 'newdelhi.visa@eda.admin.ch',
      website: 'https://www.eda.admin.ch/newdelhi',
      workingHours: 'Mon-Thu 9:00 AM - 12:00 PM',
      latitude: 28.59,
      longitude: 77.18
    },
    recentUpdates: [],
    stats: {
      totalApplications: 62000,
      averageProcessingDays: 12,
      approvalRate: 94.0,
      rejectionReasons: [
        {
          reason: 'Cancelled Hotel Bookings',
          percentage: 60,
          prevention: 'Maintain valid, confirmed hotel bookings throughout the entire processing period.'
        },
        {
          reason: 'Insufficient Funds for Expensive Stay',
          percentage: 20,
          prevention: 'Switzerland is expensive. Show higher daily funds (approx CHF 100/day) compared to other EU countries.'
        }
      ]
    },
    similarDestinations: ['austria', 'france', 'italy']
  },
  {
    id: 'austria',
    name: 'Austria',
    code: 'AT',
    flag: '🇦🇹',
    heroImage: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&q=80',
    heroImageAlt: 'Hallstatt Village by the Lake',
    tagline: 'Imperial Architecture & Alpine Charm',
    description: 'Waltz through Vienna’s palaces, explore Salzburg’s musical heritage, and ski in the Austrian Alps.',
    processingTime: '15 calendar days',
    successRate: 91.5,
    pricing: {
      embassyFee: "Notify Later", // Approx €90 (Fixed Consular Exchange Rate)
      serviceFee: 7999, // Your Agency Fee
      // vfsFee: 1800, // Approx VFS Service Charge
      totalFee: 7999,
      currency: 'INR',
      refundPolicy: 'Service fee non-refundable; Gov & VFS fees non-refundable'
    },
    visaTypes: [
      {
        id: 'at-tourist',
        name: 'Tourist Visa (Type C)',
        description: 'For sightseeing, holidays, and cultural visits.',
        duration: '90 Days (in 180-day period)',
        price: 7999,
        processingTime: '15 Days',
        icon: 'Mountain'
      },
      {
        id: 'at-business',
        name: 'Business Visa',
        description: 'For meetings, conferences, and trade fairs.',
        duration: '90 Days',
        price: 7999,
        processingTime: '15 Days',
        icon: 'Briefcase'
      },
      {
        id: 'at-visit',
        name: 'Visitor Visa (Family/Friends)',
        description: 'For visiting relatives, often requiring the EVE (Electronic Guarantee).',
        duration: '90 Days',
        price: 7999,
        processingTime: '15 Days',
        icon: 'Users'
      }
    ],
    requirements: [
      {
        id: 'at-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 3 months beyond return. Must have 2 blank pages.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'at-2',
        category: 'Sponsorship',
        title: 'EVE ID Number',
        description: 'If sponsored, provide the 8-digit ID of the Electronic Declaration of Commitment (EVE).',
        mandatory: false,
        icon: 'Shield'
      },
      {
        id: 'at-3',
        category: 'Financial',
        title: 'Bank Statements',
        description: 'Last 6 months original statements with bank stamp. Updated till 1 week before applying.',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'at-4',
        category: 'Insurance',
        title: 'Travel Insurance',
        description: 'Min €30,000 coverage. *Must cover Winter Sports if traveling in ski season.*',
        mandatory: true,
        icon: 'Activity'
      },
      {
        id: 'at-5',
        category: 'Employment',
        title: 'Employment Proof',
        description: 'Leave letter, Salary slips (3 months), ITR. Student ID for students.',
        mandatory: true,
        icon: 'Briefcase'
      },
      {
        id: 'at-6',
        category: 'Accommodation',
        title: 'Proof of Stay',
        description: 'Confirmed hotel bookings or invitation details.',
        mandatory: true,
        icon: 'Home'
      }
    ],
    timeline: [
      {
        id: 'at-t1',
        step: 1,
        title: 'Application Form',
        description: 'Download and fill the Schengen Visa Application Form.',
        duration: '1 Day',
        status: 'completed',
        icon: 'Edit'
      },
      {
        id: 'at-t2',
        step: 2,
        title: 'Book Appointment',
        description: 'Book slot at VFS Global Austria centre.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Calendar'
      },
      {
        id: 'at-t3',
        step: 3,
        title: 'Submission',
        description: 'Submit physical documents and biometrics at VFS.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'UserCheck'
      },
      {
        id: 'at-t4',
        step: 4,
        title: 'Embassy Processing',
        description: 'Embassy of Austria reviews the file (Strict itinerary checks).',
        duration: '15 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'at-t5',
        step: 5,
        title: 'Passport Return',
        description: 'Collect passport via courier or in-person.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Package'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Aditi Rao',
        visaType: 'Tourist',
        country: 'Pune',
        rating: 5,
        content: 'I wanted to see the Sound of Music locations in Salzburg. The VFS team in Pune was helpful, and the agency ensured my travel insurance specifically covered the "hiking" activity I planned.',
        avatar: 'https://i.pravatar.cc/150?u=aditi_at',
        avatarAlt: 'Aditi Rao',
        date: 'Last Month',
        processingTime: '14 Days'
      },
      {
        id: 't2',
        name: 'Suresh Menon',
        visaType: 'Visit Family',
        country: 'Kochi',
        rating: 5,
        content: 'My daughter studies in Vienna. She got the EVE (Electronic Guarantee) done from the police station there. Once I had that ID number, the visa approval was very fast.',
        avatar: 'https://i.pravatar.cc/150?u=suresh_at',
        avatarAlt: 'Suresh Menon',
        date: '2 Months Ago',
        processingTime: '12 Days'
      },
      {
        id: 't3',
        name: 'Vikram Sethi',
        visaType: 'Business',
        country: 'Delhi',
        rating: 4,
        content: 'Austria is strict about bank statements. I had to go back to the bank to get a fresh stamp because the ink was faded. But once submitted, I got the visa in 10 days.',
        avatar: 'https://i.pravatar.cc/150?u=vikram_at',
        avatarAlt: 'Vikram Sethi',
        date: 'Recently',
        processingTime: '10 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'What is the "EVE" (Elektronische Verpflichtungserklärung)?',
        answer: 'It is an electronic declaration of liability. If you are being sponsored, your host in Austria must apply for this at their local Aliens Police. You just need the ID number they receive.',
        category: 'Sponsorship'
      },
      {
        id: 'faq2',
        question: 'Do I need specific winter sports insurance?',
        answer: 'Yes, if you are traveling during winter (Nov-Mar) and plan to ski or even visit high-altitude ski resorts, the Embassy checks if your insurance covers "Winter Sports" accidents.',
        category: 'Insurance'
      },
      {
        id: 'faq3',
        question: 'Can I use online bank statements?',
        answer: 'No. Like Germany, Austria requires original bank statements with a physical bank stamp and signature. E-statements are often rejected.',
        category: 'Financial'
      },
      {
        id: 'faq4',
        question: 'Is the itinerary important?',
        answer: 'Very. Do not just list cities. Mention "Visit to Schönbrunn Palace" or "Day trip to Hallstatt". Vague itineraries like "Sightseeing in Vienna" for 5 days are viewed with suspicion.',
        category: 'Application'
      }
    ],
    embassyInfo: {
      name: 'Austrian Embassy New Delhi',
      address: 'EP-13, Chandragupta Marg, Chanakyapuri, New Delhi - 110021',
      phone: '011-2419-2700',
      email: 'new-delhi-ob@bmeia.gv.at',
      website: 'https://www.bmeia.gv.at/en/austrian-embassy-new-delhi/',
      workingHours: 'Mon-Fri 9:00 AM - 5:00 PM',
      latitude: 28.59,
      longitude: 77.19
    },
    recentUpdates: [],
    stats: {
      totalApplications: 28000,
      averageProcessingDays: 15,
      approvalRate: 91.5,
      rejectionReasons: [
        {
          reason: 'Missing EVE for Sponsorship',
          percentage: 45,
          prevention: 'If staying with friends/family who pay for you, ensure they complete the EVE process in Austria first.'
        },
        {
          reason: 'Inadequate Insurance Coverage',
          percentage: 25,
          prevention: 'Ensure insurance covers full €30,000 and explicitly includes winter sports if applicable.'
        }
      ]
    },
    similarDestinations: ['germany', 'switzerland', 'hungary']
  },
  {
    id: 'greece',
    name: 'Greece',
    code: 'GR',
    flag: '🇬🇷',
    heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80',
    heroImageAlt: 'Oia, Santorini at Sunset',
    tagline: 'Cradle of Western Civilization',
    description: 'Experience the turquoise waters of the Aegean, the ancient Acropolis, and the white-washed islands of the Cyclades.',
    processingTime: '15-20 calendar days',
    successRate: 87.0,
    pricing: {
      embassyFee: "Notify Later",
      serviceFee: 7999, // Your Agency Fee
      // vfsFee: 2730, // Approx Service Charge (Subject to new provider)
      totalFee: 19999,
      currency: 'INR',
      refundPolicy: 'Service fee non-refundable; Gov & Provider fees non-refundable'
    },
    visaTypes: [
      {
        id: 'gr-tourist',
        name: 'Tourist Visa (Type C)',
        description: 'For island hopping, historical sightseeing, and leisure.',
        duration: '90 Days (in 180-day period)',
        price: 7999,
        processingTime: '15 Days',
        icon: 'Sun'
      },
      {
        id: 'gr-business',
        name: 'Business Visa',
        description: 'For meetings, conferences, and shipping industry events.',
        duration: '90 Days',
        price: 7999,
        processingTime: '15 Days',
        icon: 'Briefcase'
      }
    ],
    requirements: [
      {
        id: 'gr-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 3 months after return. Issued within last 10 years.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'gr-2',
        category: 'Itinerary',
        title: 'Internal Transfer Proof',
        description: 'CRITICAL: Ferry tickets or domestic flights between islands (e.g., Athens -> Santorini).',
        mandatory: true,
        icon: 'Map'
      },
      {
        id: 'gr-3',
        category: 'Financial',
        title: 'Bank Statements',
        description: 'Last 3 months original updated statements. Closing balance must cover €50/day min.',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'gr-4',
        category: 'Insurance',
        title: 'Travel Insurance',
        description: 'Min coverage €30,000 valid for all Schengen countries.',
        mandatory: true,
        icon: 'Shield'
      },
      {
        id: 'gr-5',
        category: 'Employment',
        title: 'Employment Proof',
        description: 'NOC from employer, Salary slips (3 months), ITR.',
        mandatory: true,
        icon: 'Briefcase'
      },
      {
        id: 'gr-6',
        category: 'Accommodation',
        title: 'Confirmed Hotel Vouchers',
        description: 'Must match the flight/ferry dates perfectly for every night.',
        mandatory: true,
        icon: 'Home'
      }
    ],
    timeline: [
      {
        id: 'gr-t1',
        step: 1,
        title: 'Online Application',
        description: 'Complete the form online (GVCW portal used historically, verify current link).',
        duration: '1 Day',
        status: 'completed',
        icon: 'Monitor'
      },
      {
        id: 'gr-t2',
        step: 2,
        title: 'Book Appointment',
        description: 'Schedule submission slot (Check if VFS/BLS has taken over from GVCW).',
        duration: '1-2 Days',
        status: 'upcoming',
        icon: 'Calendar'
      },
      {
        id: 'gr-t3',
        step: 3,
        title: 'Submission',
        description: 'Submit physical docs and biometrics.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'UserCheck'
      },
      {
        id: 'gr-t4',
        step: 4,
        title: 'Embassy Processing',
        description: 'Embassy of Greece reviews the file.',
        duration: '15 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'gr-t5',
        step: 5,
        title: 'Passport Return',
        description: 'Collect passport via courier or in-person.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Package'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Nikhil & Riya',
        visaType: 'Honeymoon',
        country: 'Bangalore',
        rating: 5,
        content: 'We planned a honeymoon in Santorini and Mykonos. The agency insisted we book the ferries (Seajets) BEFORE applying. Good thing we did, the officer asked for them!',
        avatar: 'https://i.pravatar.cc/150?u=nikhil_gr',
        avatarAlt: 'Nikhil & Riya',
        date: 'Last Month',
        processingTime: '15 Days'
      },
      {
        id: 't2',
        name: 'Mr. Bharadwaj',
        visaType: 'Tourist',
        country: 'Chennai',
        rating: 4,
        content: 'The service provider situation was confusing in Jan 2026. The team guided me to the correct temporary submission centre in Delhi. Very helpful in a chaotic time.',
        avatar: 'https://i.pravatar.cc/150?u=bharadwaj',
        avatarAlt: 'Mr. Bharadwaj',
        date: 'Recently',
        processingTime: '18 Days'
      },
      {
        id: 't3',
        name: 'Deepa Malik',
        visaType: 'Business',
        country: 'Mumbai',
        rating: 5,
        content: 'Attending a shipping conference in Athens. My invitation letter was in Greek, which is preferred. Got the visa in 10 working days.',
        avatar: 'https://i.pravatar.cc/150?u=deepa_gr',
        avatarAlt: 'Deepa Malik',
        date: '3 Months Ago',
        processingTime: '10 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Do I apply at VFS or GVCW?',
        answer: 'Update Jan 2026: GVCW has ceased operations. A new provider is being appointed. Please check the Embassy of Greece website for the immediate interim submission location.',
        category: 'Process'
      },
      {
        id: 'faq2',
        question: 'What is the "Island Hopping" rule?',
        answer: 'If you plan to visit multiple islands, you MUST provide proof of transport (ferry tickets or flights) between them. Gaps in the itinerary are a primary cause for rejection.',
        category: 'Itinerary'
      },
      {
        id: 'faq3',
        question: 'Is a hotel booking enough?',
        answer: 'Yes, but it must be verifiable. Do not use "pay at hotel" options that don\'t require a credit card if possible, as these are seen as high risk for cancellation.',
        category: 'Accommodation'
      },
      {
        id: 'faq4',
        question: 'How much funds do I need?',
        answer: 'Greece requires proof of sufficient means of subsistence, generally calculated at €50 per day of stay, with a minimum of €300 for stays up to 5 days.',
        category: 'Financial'
      }
    ],
    embassyInfo: {
      name: 'Embassy of Greece in New Delhi',
      address: 'EP-32, Dr. S. Radhakrishnan Marg, Chanakyapuri, New Delhi - 110021',
      phone: '011-2688-0700',
      email: 'gremb.del@mfa.gr',
      website: 'https://www.mfa.gr/missionsabroad/en/india-en',
      workingHours: 'Mon-Fri 8:30 AM - 4:00 PM',
      latitude: 28.59,
      longitude: 77.18
    },
    recentUpdates: [],
    stats: {
      totalApplications: 35000,
      averageProcessingDays: 16,
      approvalRate: 87.0,
      rejectionReasons: [
        {
          reason: 'Unexplained Itinerary Gaps',
          percentage: 50,
          prevention: 'Provide tickets for every single transfer between islands. Do not leave days "open" without accommodation.'
        },
        {
          reason: 'Insufficient Subsistence Funds',
          percentage: 30,
          prevention: 'Maintain a balance that covers at least €50/day + flight/hotel costs.'
        }
      ]
    },
    similarDestinations: ['italy', 'spain', 'turkey']
  },
  {
    id: 'portugal',
    name: 'Portugal',
    code: 'PT',
    flag: '🇵🇹',
    heroImage: 'https://www.kiwi.com/stories/wp-content/uploads/2025/04/portugal-river-porto-scaled-1.jpg',
    heroImageAlt: 'Tram 28 in Lisbon',
    tagline: 'Europe’s West Coast',
    description: 'Discover the golden beaches of the Algarve, the vineyards of the Douro Valley, and the historic charm of Lisbon.',
    processingTime: '15-45 calendar days',
    successRate: 86.5,
    pricing: {
      embassyFee: "Notify Later", // Approx €90 (Consular Rate)
      serviceFee: 7999, // Your Agency Fee
      // vfsFee: 2100, // VFS Service Charge
      totalFee: 7999,
      currency: 'INR',
      refundPolicy: 'Service fee non-refundable; Gov & VFS fees non-refundable'
    },
    visaTypes: [
      {
        id: 'pt-tourist',
        name: 'Tourist Visa (Type C)',
        description: 'Short stay for tourism, holidays, and religious pilgrimage (Fatima).',
        duration: '90 Days (in 180-day period)',
        price: 7999,
        processingTime: '20-30 Days',
        icon: 'Sun'
      },
      {
        id: 'pt-jobseeker',
        name: 'Job Seeker Visa',
        description: 'Special 120-day visa to look for work (High demand, stricter checks).',
        duration: '120 Days (Extendable +60)',
        price: 10500, // Higher fee due to complexity
        processingTime: '45-60 Days',
        icon: 'Search'
      },
      {
        id: 'pt-business',
        name: 'Business Visa',
        description: 'For corporate meetings, conferences, and trade.',
        duration: '90 Days',
        price: 7999,
        processingTime: '15-20 Days',
        icon: 'Briefcase'
      }
    ],
    requirements: [
      {
        id: 'pt-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 3 months after return. Must have 2 blank pages.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'pt-2',
        category: 'Sponsorship',
        title: 'Term of Responsibility',
        description: 'If sponsored, host must sign the official "Termo de Responsabilidade" form.',
        mandatory: true,
        icon: 'FileCheck'
      },
      {
        id: 'pt-3',
        category: 'Financial',
        title: 'Bank Statements',
        description: 'Last 3-6 months original statements with bank stamp. Online prints rejected.',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'pt-4',
        category: 'Insurance',
        title: 'Travel Insurance',
        description: 'Min coverage €30,000 valid for all Schengen countries (Medical & Repatriation).',
        mandatory: true,
        icon: 'Shield'
      },
      {
        id: 'pt-5',
        category: 'Employment',
        title: 'Employment Proof',
        description: 'NOC from employer, Salary slips (3 months), ITR. Business owners need GST.',
        mandatory: true,
        icon: 'Briefcase'
      },
      {
        id: 'pt-6',
        category: 'Accommodation',
        title: 'Proof of Stay',
        description: 'Confirmed hotel bookings or Term of Responsibility from host.',
        mandatory: true,
        icon: 'Home'
      }
    ],
    timeline: [
      {
        id: 'pt-t1',
        step: 1,
        title: 'Online Application',
        description: 'Fill the form on the E-Visa Portal (Portal das Comunidades).',
        duration: '1 Day',
        status: 'completed',
        icon: 'Monitor'
      },
      {
        id: 'pt-t2',
        step: 2,
        title: 'Jurisdiction Check',
        description: 'Determine if you apply at VFS (Delhi jurisdiction) or VFS (Goa/Mumbai jurisdiction).',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'MapPin'
      },
      {
        id: 'pt-t3',
        step: 3,
        title: 'Book Appointment',
        description: 'Book slot at VFS Global (Slots are often scarce).',
        duration: 'Varies',
        status: 'upcoming',
        icon: 'Calendar'
      },
      {
        id: 'pt-t4',
        step: 4,
        title: 'Submission',
        description: 'Submit documents and biometrics at VFS.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'UserCheck'
      },
      {
        id: 'pt-t5',
        step: 5,
        title: 'Embassy Processing',
        description: 'File reviewed by Embassy (Delhi) or Consulate (Goa).',
        duration: '20-40 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'pt-t6',
        step: 6,
        title: 'Passport Return',
        description: 'Collect passport via courier or in-person.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Package'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Savio D’Souza',
        visaType: 'Visit Family',
        country: 'Goa',
        rating: 5,
        content: 'Applying from Goa is different. I had to go to the VFS in Panjim. My uncle in Lisbon sent the "Termo de Responsabilidade" which made the process smooth. Got it in 25 days.',
        avatar: 'https://i.pravatar.cc/150?u=savio',
        avatarAlt: 'Savio D’Souza',
        date: 'Last Month',
        processingTime: '25 Days'
      },
      {
        id: 't2',
        name: 'Ramesh Gupta',
        visaType: 'Tourist',
        country: 'Delhi',
        rating: 4,
        content: 'I live in Delhi so I applied at VFS Shivaji Stadium. The appointment wait was long (2 weeks), but the agency helped me monitor the slots daily.',
        avatar: 'https://i.pravatar.cc/150?u=ramesh_pt',
        avatarAlt: 'Ramesh Gupta',
        date: '3 Months Ago',
        processingTime: '30 Days'
      },
      {
        id: 't3',
        name: 'Anita Desai',
        visaType: 'Job Seeker',
        country: 'Mumbai',
        rating: 5,
        content: 'The Job Seeker visa checklist is very specific about "proof of accommodation" for the full 120 days. The team helped me arrange a valid refundable booking.',
        avatar: 'https://i.pravatar.cc/150?u=anita_pt',
        avatarAlt: 'Anita Desai',
        date: 'Recently',
        processingTime: '55 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Where should I apply (Jurisdiction)?',
        answer: 'If you live in Maharashtra, Goa, Daman, Diu, Dadra & Nagar Haveli, you MUST apply under the **Consulate in Goa** jurisdiction (VFS Mumbai/Pune/Goa). All other states apply under **Embassy in Delhi**.',
        category: 'Jurisdiction'
      },
      {
        id: 'faq2',
        question: 'What is the "Termo de Responsabilidade"?',
        answer: 'It is the official Portuguese sponsorship form. If a friend/relative invites you and covers costs, they must sign this. If they only offer housing but you pay, a different invitation format is used.',
        category: 'Sponsorship'
      },
      {
        id: 'faq3',
        question: 'Why does Portugal take so long?',
        answer: 'Due to the immense popularity of the "Job Seeker" and "D7" visas, the consular staff is overwhelmed. Even Tourist visas can take 30-45 days during peak season.',
        category: 'Processing'
      },
      {
        id: 'faq4',
        question: 'Can I track my application?',
        answer: 'Yes, via the VFS Global website. Note that status often remains "Under Process" for weeks without update until the decision is made.',
        category: 'Process'
      }
    ],
    embassyInfo: {
      name: 'Embassy of Portugal in New Delhi',
      address: '4, Panchsheel Marg, Chanakyapuri, New Delhi - 110021',
      phone: '011-4607-1000',
      email: 'visas.novadeli@mne.pt',
      website: 'https://novadeli.embaixadaportugal.mne.gov.pt/en/',
      workingHours: 'Mon-Fri 9:00 AM - 5:00 PM',
      latitude: 28.59,
      longitude: 77.18
    },
    recentUpdates: [],
    stats: {
      totalApplications: 30000,
      averageProcessingDays: 35,
      approvalRate: 86.5,
      rejectionReasons: [
        {
          reason: 'Incorrect Jurisdiction',
          percentage: 40,
          prevention: 'Check your state of residence carefully. A Mumbai resident cannot apply in Delhi.'
        },
        {
          reason: 'Invalid Proof of Accommodation',
          percentage: 30,
          prevention: 'For Job Seeker visas, 120 days of accommodation proof is mandatory. For tourists, full stay coverage is required.'
        }
      ]
    },
    similarDestinations: ['spain', 'italy', 'greece']
  },
  {
    id: 'sweden',
    name: 'Sweden',
    code: 'SE',
    flag: '🇸🇪',
    heroImage: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&q=80',
    heroImageAlt: 'Gamla Stan, Stockholm',
    tagline: 'Innovation & Nature',
    description: 'Experience the Northern Lights, the archipelago of Stockholm, and the "Fika" culture of Sweden.',
    processingTime: '15-20 calendar days',
    successRate: 91.0,
    pricing: {
      embassyFee: "Notify Later", // Approx €90 (Fixed Consular Exchange Rate)
      serviceFee: 7999, // Your Agency Fee
      // vfsFee: 1690, // Approx VFS Service Charge
      totalFee: 7999,
      currency: 'INR',
      refundPolicy: 'Service fee non-refundable; Gov & VFS fees non-refundable'
    },
    visaTypes: [
      {
        id: 'se-tourist',
        name: 'Tourist Visa (Type C)',
        description: 'Short stay for tourism, sightseeing, and leisure.',
        duration: '90 Days (in 180-day period)',
        price: 7999,
        processingTime: '15 Days',
        icon: 'Sun'
      },
      {
        id: 'se-visit',
        name: 'Visiting Family/Friends',
        description: 'Strictly requires "Form 241011" filled by the host in Sweden.',
        duration: '90 Days',
        price: 7999,
        processingTime: '15-20 Days',
        icon: 'Users'
      },
      {
        id: 'se-business',
        name: 'Business Visa',
        description: 'For meetings, conferences, and corporate training.',
        duration: '90 Days',
        price: 7999,
        processingTime: '15 Days',
        icon: 'Briefcase'
      }
    ],
    requirements: [
      {
        id: 'se-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 3 months beyond return. Must have 2 blank pages.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'se-2',
        category: 'Sponsorship',
        title: 'Form 241011 (Crucial)',
        description: 'MANDATORY for family visits. Host must fill and sign this specific form.',
        mandatory: true,
        icon: 'FileCheck'
      },
      {
        id: 'se-3',
        category: 'Financial',
        title: 'Bank Statements',
        description: 'Last 6 months original statements. Must show approx SEK 450 (₹3,600) per day of stay.',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'se-4',
        category: 'Insurance',
        title: 'Travel Insurance',
        description: 'Min coverage €30,000 valid for all Schengen countries.',
        mandatory: true,
        icon: 'Shield'
      },
      {
        id: 'se-5',
        category: 'Employment',
        title: 'Employment Proof',
        description: 'NOC from employer, Salary slips (3 months), ITR. Business owners need GST/Registration.',
        mandatory: true,
        icon: 'Briefcase'
      },
      {
        id: 'se-6',
        category: 'Identity',
        title: 'Personbevis (Host)',
        description: 'If visiting family, host must provide their Swedish "Civic Registration" (Personbevis).',
        mandatory: false,
        icon: 'UserCheck'
      }
    ],
    timeline: [
      {
        id: 'se-t1',
        step: 1,
        title: 'Application Form',
        description: 'Fill the Schengen Visa form on VFS Global or Sweden Abroad website.',
        duration: '1 Day',
        status: 'completed',
        icon: 'Edit'
      },
      {
        id: 'se-t2',
        step: 2,
        title: 'Book Appointment',
        description: 'Book slot at VFS Global (New Delhi centre moved Jan 2026).',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Calendar'
      },
      {
        id: 'se-t3',
        step: 3,
        title: 'Submission',
        description: 'Submit physical documents and biometrics at VFS.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'UserCheck'
      },
      {
        id: 'se-t4',
        step: 4,
        title: 'Embassy Processing',
        description: 'Embassy of Sweden in New Delhi reviews file.',
        duration: '15 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'se-t5',
        step: 5,
        title: 'Passport Return',
        description: 'Collect passport via courier or in-person.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Package'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Arjun Nair',
        visaType: 'Visit Friend',
        country: 'Bangalore',
        rating: 5,
        content: 'I was visiting my friend in Gothenburg. I had no idea about "Form 241011". The agency sent me the PDF to forward to my friend. Saved my application from rejection!',
        avatar: 'https://i.pravatar.cc/150?u=arjun_se',
        avatarAlt: 'Arjun Nair',
        date: 'Last Month',
        processingTime: '16 Days'
      },
      {
        id: 't2',
        name: 'Meena Iyer',
        visaType: 'Business',
        country: 'Mumbai',
        rating: 4,
        content: 'Sweden is efficient. I applied for a business meeting in Stockholm. The Consulate in Mumbai doesn\'t process visas, so it went to Delhi. Got it back in 12 days.',
        avatar: 'https://i.pravatar.cc/150?u=meena_se',
        avatarAlt: 'Meena Iyer',
        date: '2 Months Ago',
        processingTime: '12 Days'
      },
      {
        id: 't3',
        name: 'The Kapoors',
        visaType: 'Tourist',
        country: 'Delhi',
        rating: 5,
        content: 'We went for the Northern Lights in Kiruna. The team helped us show the internal train bookings to the north, which made our itinerary look very genuine.',
        avatar: 'https://i.pravatar.cc/150?u=kapoors',
        avatarAlt: 'The Kapoors',
        date: 'Recently',
        processingTime: '15 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'What is Form 241011?',
        answer: 'It is the official "Invitation" form required by the Swedish Migration Agency. Your host in Sweden must fill it out. A simple typed letter is usually NOT accepted for family visits.',
        category: 'Documents'
      },
      {
        id: 'faq2',
        question: 'Can I apply at the Consulate in Mumbai?',
        answer: 'No. The Consulate General in Mumbai does NOT process visas. All applications from India are assessed by the Embassy of Sweden in New Delhi, though you can submit documents at any VFS centre.',
        category: 'Jurisdiction'
      },
      {
        id: 'faq3',
        question: 'How much money do I need per day?',
        answer: 'The Swedish Migration Agency requires you to have approx SEK 450 (approx ₹3,600) per person per day, unless your host is covering all costs (which must be proven).',
        category: 'Financial'
      },
      {
        id: 'faq4',
        question: 'Is travel insurance mandatory?',
        answer: 'Yes, insurance covering at least €30,000 for medical costs and repatriation is mandatory for the Schengen visa.',
        category: 'Insurance'
      }
    ],
    embassyInfo: {
      name: 'Embassy of Sweden in New Delhi',
      address: '4-5 Nyaya Marg, Chanakyapuri, New Delhi - 110021',
      phone: '011-4419-7100',
      email: 'ambassaden.new-delhi-visum@gov.se',
      website: 'https://www.swedenabroad.se/en/embassies/india-new-delhi/',
      workingHours: 'Mon-Fri 9:00 AM - 12:00 PM (Visa Section)',
      latitude: 28.59,
      longitude: 77.19
    },
    recentUpdates: [],
    stats: {
      totalApplications: 22000,
      averageProcessingDays: 15,
      approvalRate: 91.0,
      rejectionReasons: [
        {
          reason: 'Missing Form 241011',
          percentage: 50,
          prevention: 'Ensure your host fills the correct government invitation form, not a personal letter.'
        },
        {
          reason: 'Insufficient Daily Funds',
          percentage: 30,
          prevention: 'Your bank balance must clearly show SEK 450/day availability after deducting flight/hotel costs.'
        }
      ]
    },
    similarDestinations: ['norway', 'finland', 'denmark']
  },
  {
    id: 'norway',
    name: 'Norway',
    code: 'NO',
    flag: '🇳🇴',
    heroImage: 'https://images.pexels.com/photos/3019893/pexels-photo-3019893.jpeg?cs=srgb&dl=pexels-ela-yudhanira-1570636-3019893.jpg&fm=jpg',
    heroImageAlt: 'Geirangerfjord',
    tagline: 'Powered by Nature',
    description: 'Experience the majestic fjords, the midnight sun, and the Northern Lights with the Norway Schengen Visa.',
    processingTime: '15-20 calendar days',
    successRate: 92.0,
    pricing: {
      embassyFee: "Notify Later",
      serviceFee: 7999, // Your Agency Fee
      // vfsFee: 2200, // Approx VFS Service Charge
      totalFee: 7999,
      currency: 'INR',
      refundPolicy: 'Service fee non-refundable; Gov fee non-refundable once application sent to UDI'
    },
    visaTypes: [
      {
        id: 'no-tourist',
        name: 'Tourist Visa (Type C)',
        description: 'For fjord cruises, Northern Lights tours, and general tourism.',
        duration: '90 Days (in 180-day period)',
        price: 7999,
        processingTime: '15 Days',
        icon: 'Mountain'
      },
      {
        id: 'no-visit',
        name: 'Visiting Family/Friends',
        description: 'Requires the specific "Guarantee Form" stamped by Norwegian police.',
        duration: '90 Days',
        price: 7999,
        processingTime: '15-20 Days',
        icon: 'Users'
      },
      {
        id: 'no-business',
        name: 'Business Visa',
        description: 'For meetings, maritime industry events, and conferences.',
        duration: '90 Days',
        price: 7999,
        processingTime: '15 Days',
        icon: 'Briefcase'
      }
    ],
    requirements: [
      {
        id: 'no-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 3 months beyond return. Must have 2 blank pages.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'no-2',
        category: 'Application',
        title: 'UDI Cover Letter',
        description: 'The "Cover Letter" generated from the UDI Portal after online payment. Must be signed.',
        mandatory: true,
        icon: 'FileCheck'
      },
      {
        id: 'no-3',
        category: 'Sponsorship',
        title: 'Guarantee Form',
        description: 'If sponsored, the original "Guarantee Form for Visits" stamped by police in Norway.',
        mandatory: false,
        icon: 'Shield'
      },
      {
        id: 'no-4',
        category: 'Financial',
        title: 'Bank Statements',
        description: 'Last 3-6 months original statements. Norway requires approx NOK 500/day if staying with friends.',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'no-5',
        category: 'Insurance',
        title: 'Travel Insurance',
        description: 'Min coverage €30,000 valid for all Schengen countries.',
        mandatory: true,
        icon: 'Shield'
      },
      {
        id: 'no-6',
        category: 'Employment',
        title: 'Employment Proof',
        description: 'NOC from employer, Salary slips (3 months), ITR. Business owners need GST.',
        mandatory: true,
        icon: 'Briefcase'
      }
    ],
    timeline: [
      {
        id: 'no-t1',
        step: 1,
        title: 'UDI Portal Registration',
        description: 'Create account on UDI.no, fill application, and PAY FEE ONLINE.',
        duration: '1 Day',
        status: 'completed',
        icon: 'Monitor'
      },
      {
        id: 'no-t2',
        step: 2,
        title: 'Book Appointment',
        description: 'Book submission slot at VFS Global (You need the UDI reference number).',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Calendar'
      },
      {
        id: 'no-t3',
        step: 3,
        title: 'Submission',
        description: 'Submit physical docs (including signed Cover Letter) & biometrics.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'UserCheck'
      },
      {
        id: 'no-t4',
        step: 4,
        title: 'Embassy Processing',
        description: 'Royal Norwegian Embassy reviews the file.',
        duration: '15 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'no-t5',
        step: 5,
        title: 'Passport Return',
        description: 'Collect passport via courier or in-person.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Package'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Rohan Malhotra',
        visaType: 'Tourist',
        country: 'Delhi',
        rating: 5,
        content: 'I was confused about the UDI portal payment. The agency helped me register and pay the fee online, then printed the Cover Letter for me. Smooth process for my Northern Lights trip!',
        avatar: 'https://i.pravatar.cc/150?u=rohan_no',
        avatarAlt: 'Rohan Malhotra',
        date: 'Last Month',
        processingTime: '15 Days'
      },
      {
        id: 't2',
        name: 'Sneha Patil',
        visaType: 'Visit Family',
        country: 'Mumbai',
        rating: 5,
        content: 'Visiting my sister in Oslo. She got the Guarantee Form stamped by the police there. Once I included that original paper, the visa was approved in just 12 days.',
        avatar: 'https://i.pravatar.cc/150?u=sneha_no',
        avatarAlt: 'Sneha Patil',
        date: '3 Months Ago',
        processingTime: '12 Days'
      },
      {
        id: 't3',
        name: 'Capt. Verma',
        visaType: 'Business (Maritime)',
        country: 'Chennai',
        rating: 4,
        content: 'Norwegian visa officers are strict about the purpose of visit. The team helped me draft a strong cover letter explaining my meetings in Bergen.',
        avatar: 'https://i.pravatar.cc/150?u=verma_no',
        avatarAlt: 'Capt. Verma',
        date: 'Recently',
        processingTime: '14 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Do I pay the visa fee at VFS?',
        answer: 'NO. For Norway, you must pay the visa fee (approx €90) ONLINE on the UDI website while registering. At VFS, you only pay the service charges.',
        category: 'Fees'
      },
      {
        id: 'faq2',
        question: 'What is the "Guarantee Form for Visits"?',
        answer: 'If you don\'t have enough own funds, your host in Norway can sponsor you. They must fill a specific form and get it stamped by the Police or Tax Office in Norway.',
        category: 'Sponsorship'
      },
      {
        id: 'faq3',
        question: 'Is Norway expensive for visa funds?',
        answer: 'Yes. You generally need to show access to approx NOK 500 (₹4,000) per day if staying with friends/family, or significantly more if staying in hotels.',
        category: 'Financial'
      },
      {
        id: 'faq4',
        question: 'Can I see the Northern Lights with this visa?',
        answer: 'Yes! A standard Tourist Visa allows you to travel to Tromsø, Svalbard (check specific rules for Svalbard), and anywhere else in Norway.',
        category: 'Travel'
      }
    ],
    embassyInfo: {
      name: 'Royal Norwegian Embassy in New Delhi',
      address: '50-C, Shantipath, Chanakyapuri, New Delhi - 110021',
      phone: '011-4177-9200',
      email: 'emb.newdelhi@mfa.no',
      website: 'https://www.norway.no/en/india/',
      workingHours: 'Mon-Thu 9:00 AM - 4:00 PM, Fri 9:00 AM - 1:00 PM',
      latitude: 28.59,
      longitude: 77.19
    },
    recentUpdates: [],
    stats: {
      totalApplications: 18000,
      averageProcessingDays: 15,
      approvalRate: 92.0,
      rejectionReasons: [
        {
          reason: 'Missing UDI Cover Letter',
          percentage: 40,
          prevention: 'You MUST finish the online UDI process and print the Cover Letter before going to VFS.'
        },
        {
          reason: 'Insufficient Funds',
          percentage: 35,
          prevention: 'Norway has a high cost of living. Ensure your bank balance reflects ability to support yourself (~₹4000/day minimum).'
        }
      ]
    },
    similarDestinations: ['sweden', 'finland', 'iceland']
  },
  {
    id: 'ireland',
    name: 'Ireland',
    code: 'IE',
    flag: '🇮🇪',
    heroImage: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80',
    heroImageAlt: 'Cliffs of Moher',
    tagline: 'The Emerald Isle',
    description: 'Experience the rugged coastlines, historic castles, and warm hospitality of Ireland. (Check BIVS eligibility for dual UK-Ireland travel).',
    processingTime: '20-25 working days',
    successRate: 88.0,
    pricing: {
      embassyFee: "Notify Later", // €60 Single Entry (Consular Rate)
      serviceFee: 7999,
      // vfsFee: 4100, // Approx VFS Service Charge + Courier
      totalFee: 7999,
      currency: 'INR',
      refundPolicy: 'Service fee non-refundable; Gov & VFS fees non-refundable'
    },
    visaTypes: [
      {
        id: 'ie-tourist',
        name: 'Short Stay \'C\' (Tourist)',
        description: 'For tourism and sightseeing. Valid for 90 days.',
        duration: '90 Days',
        price: 7999,
        processingTime: '25 Days',
        icon: 'Clover'
      },
      {
        id: 'ie-visit',
        name: 'Visit Family/Friend',
        description: 'Strict requirements for invitation letters and host financials.',
        duration: '90 Days',
        price: 7999,
        processingTime: '25 Days',
        icon: 'Users'
      }
    ],
    requirements: [
      {
        id: 'ie-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 6 months after return. Must include full color copies of ALL previous passports.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'ie-2',
        category: 'Application',
        title: 'AVATS Online Form',
        description: 'Summary sheet from AVATS portal, printed and signed.',
        mandatory: true,
        icon: 'Monitor'
      },
      {
        id: 'ie-3',
        category: 'Financial',
        title: 'Bank Statements (6 Months)',
        description: 'Original statements on bank paper. Highlight all salary credits and explain large deposits.',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'ie-4',
        category: 'Employment',
        title: 'Employment Proof',
        description: 'Employer letter stating role, salary, tenure, and dates of approved leave.',
        mandatory: true,
        icon: 'Briefcase'
      },
      {
        id: 'ie-5',
        category: 'Application',
        title: 'Application Letter',
        description: 'A personal letter explaining exactly why you want to visit and promising to observe visa conditions.',
        mandatory: true,
        icon: 'Edit'
      }
    ],
    timeline: [
      {
        id: 'ie-t1',
        step: 1,
        title: 'AVATS Application',
        description: 'Complete form on the Irish Immigration website (AVATS).',
        duration: '1 Day',
        status: 'completed',
        icon: 'Monitor'
      },
      {
        id: 'ie-t2',
        step: 2,
        title: 'Fee Payment',
        description: 'Pay visa fee online (or via draft depending on centre).',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'CreditCard'
      },
      {
        id: 'ie-t3',
        step: 3,
        title: 'VFS Appointment',
        description: 'Submit physical documents and biometrics at VFS Ireland.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'UserCheck'
      },
      {
        id: 'ie-t4',
        step: 4,
        title: 'Embassy Processing',
        description: 'File assessed by Visa Office in New Delhi (Detailed financial check).',
        duration: '20-25 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'ie-t5',
        step: 5,
        title: 'Passport Return',
        description: 'Collect passport via courier.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Package'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Sean D\'Souza',
        visaType: 'Tourist (BIVS)',
        country: 'Mumbai',
        rating: 5,
        content: 'I applied for a UK visa with BIVS. It allowed me to take a train from Belfast to Dublin without applying for a separate Irish visa! Best travel hack ever.',
        avatar: 'https://i.pravatar.cc/150?u=sean',
        avatarAlt: 'Sean D\'Souza',
        date: 'Last Month',
        processingTime: '20 Days'
      },
      {
        id: 't2',
        name: 'Anjali Menon',
        visaType: 'Visit Family',
        country: 'Kochi',
        rating: 4,
        content: 'The paperwork is heavy. They wanted 6 months of bank statements and my son\'s utility bills from Cork. But the agency organized it well.',
        avatar: 'https://i.pravatar.cc/150?u=anjali_ie',
        avatarAlt: 'Anjali Menon',
        date: '3 Months Ago',
        processingTime: '28 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'What is BIVS?',
        answer: 'The British Irish Visa Scheme allows Indian nationals to travel to both the UK and Ireland using a single short-stay visa, provided it has the "BIVS" endorsement.',
        category: 'Visa Types'
      },
      {
        id: 'faq2',
        question: 'Why do they need 6 months of bank statements?',
        answer: 'Ireland is very strict about financial stability. They check for "funds parking" (borrowing money just for the visa). You must explain every large deposit.',
        category: 'Financial'
      },
      {
        id: 'faq3',
        question: 'How long does it take?',
        answer: 'Standard processing is 20-25 working days (4-5 weeks). Apply at least 6-8 weeks before your travel date.',
        category: 'Processing'
      }
    ],
    embassyInfo: {
      name: 'Embassy of Ireland, New Delhi',
      address: 'C-17, Malcha Marg, Chanakyapuri, New Delhi - 110021',
      phone: '011-4940-3200',
      email: 'newdelhivisaoffice@dfa.ie',
      website: 'https://www.dfa.ie/irish-embassy/india/',
      workingHours: 'Mon-Fri 9:30 AM - 1:30 PM',
      latitude: 28.59,
      longitude: 77.18
    },
    recentUpdates: [],
    stats: {
      totalApplications: 18000,
      averageProcessingDays: 25,
      approvalRate: 88,
      rejectionReasons: [
        {
          reason: 'Unexplained Funds (Funds Parking)',
          percentage: 45,
          prevention: 'Do not deposit lump sums before applying. If you do, provide a verifiable source (e.g., property sale deed, bonus slip).'
        },
        {
          reason: 'Vague Ties to Home',
          percentage: 30,
          prevention: 'Provide strong evidence of employment, family, and assets in India to prove you will return.'
        }
      ]
    },
    similarDestinations: ['uk', 'scotland', 'france']
  },
  {
    id: 'russia',
    name: 'Russia',
    code: 'RU',
    flag: '🇷🇺',
    heroImage: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80',
    heroImageAlt: 'St. Basil\'s Cathedral, Moscow',
    tagline: 'The Great East',
    description: 'Explore the Red Square, the Hermitage Museum, and the Trans-Siberian Railway. (E-Visa available for short stays).',
    processingTime: '4-20 calendar days',
    successRate: 95.0,
    pricing: {
      embassyFee: "Notify Later", // Approx $52 USD for E-Visa
      serviceFee: 7999, // Your Agency Fee
      totalFee: 7999,
      currency: 'INR',
      refundPolicy: 'Service fee non-refundable; Gov fee non-refundable'
    },
    visaTypes: [
      {
        id: 'ru-evisa',
        name: 'Unified E-Visa',
        description: 'Online visa for stays up to 16 days. Valid for 60 days.',
        duration: '16 Days',
        price: 4600, // Gov fee only
        processingTime: '4 Days',
        icon: 'Monitor'
      },
      {
        id: 'ru-sticker',
        name: 'Tourist Sticker Visa',
        description: 'For stays longer than 16 days. Requires Tourist Voucher.',
        duration: '30/90 Days',
        price: 7999,
        processingTime: '15-20 Days',
        icon: 'FileText'
      }
    ],
    requirements: [
      {
        id: 'ru-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 6 months beyond return. Must have 2 blank pages.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'ru-2',
        category: 'Application',
        title: 'Photo (Digital/Physical)',
        description: 'For E-Visa: JPEG. For Sticker: 35x45mm, white background.',
        mandatory: true,
        icon: 'Camera'
      },
      {
        id: 'ru-3',
        category: 'Invitation',
        title: 'Tourist Voucher',
        description: 'MANDATORY for Sticker Visa: Official "Tourist Confirmation" from a Russian tour operator.',
        mandatory: false,
        icon: 'FileCheck'
      },
      {
        id: 'ru-4',
        category: 'Insurance',
        title: 'Travel Insurance',
        description: 'Medical insurance covering the entire period of stay.',
        mandatory: true,
        icon: 'Shield'
      }
    ],
    timeline: [
      {
        id: 'ru-t1',
        step: 1,
        title: 'Determine Visa Type',
        description: 'Choose E-Visa (Short stay) or Sticker Visa (Long stay).',
        duration: '1 Day',
        status: 'completed',
        icon: 'MapPin'
      },
      {
        id: 'ru-t2',
        step: 2,
        title: 'Online Application',
        description: 'Fill form on Ministry of Foreign Affairs website (E-Visa or Sticker form).',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Monitor'
      },
      {
        id: 'ru-t3',
        step: 3,
        title: 'Submission / Payment',
        description: 'E-Visa: Pay online. Sticker: Submit at Russian Visa Centre.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'CreditCard'
      },
      {
        id: 'ru-t4',
        step: 4,
        title: 'Processing',
        description: 'E-Visa: 4 Days. Sticker Visa: 10-20 Days.',
        duration: '4-20 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'ru-t5',
        step: 5,
        title: 'Download / Collect',
        description: 'Print E-Visa notification or collect passport with sticker.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'CheckCircle'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Vikram Singh',
        visaType: 'E-Visa',
        country: 'Delhi',
        rating: 5,
        content: 'The E-Visa is a lifesaver! I applied on Tuesday and got the PDF on Friday. No need to visit the embassy. Just make sure your photo meets the exact specs.',
        avatar: 'https://i.pravatar.cc/150?u=vikram_ru',
        avatarAlt: 'Vikram Singh',
        date: 'Last Month',
        processingTime: '3 Days'
      },
      {
        id: 't2',
        name: 'Elena & Raj',
        visaType: 'Tourist Sticker',
        country: 'Mumbai',
        rating: 4,
        content: 'We wanted to stay for 25 days, so we needed the sticker visa. The agency arranged the "Tourist Voucher" for us, which is the most confusing part.',
        avatar: 'https://i.pravatar.cc/150?u=elena_raj',
        avatarAlt: 'Elena & Raj',
        date: '2 Months Ago',
        processingTime: '15 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Is the Russian E-Visa available for Indians?',
        answer: 'Yes. Indians can apply for a Unified E-Visa valid for the entire Russian Federation. It allows a single entry for a stay of up to 16 days.',
        category: 'E-Visa'
      },
      {
        id: 'faq2',
        question: 'What is a Tourist Voucher?',
        answer: 'For a sticker visa, you cannot just show a Booking.com confirmation. You need a "Tourist Confirmation" document issued by a Russian hotel or tour agency registered with the MFA.',
        category: 'Documents'
      },
      {
        id: 'faq3',
        question: 'Can I extend the 16-day E-Visa?',
        answer: 'No. The 16-day limit is strict. If you overstay, you will face heavy fines, deportation, and a ban on re-entry. If you need more time, apply for a sticker visa.',
        category: 'Validity'
      }
    ],
    embassyInfo: {
      name: 'Embassy of the Russian Federation',
      address: 'Shantipath, Chanakyapuri, New Delhi - 110021',
      phone: '011-2687-3799',
      email: 'consuldelhi@mid.ru',
      website: 'https://india.mid.ru/en/',
      workingHours: 'Mon-Fri 9:00 AM - 5:00 PM',
      latitude: 28.59,
      longitude: 77.18
    },
    recentUpdates: [],
    stats: {
      totalApplications: 25000,
      averageProcessingDays: 4,
      approvalRate: 95.0,
      rejectionReasons: [
        {
          reason: 'Incorrect Photo Specs (E-Visa)',
          percentage: 60,
          prevention: 'For E-Visa, the digital photo must be strictly rectangular (aspect ratio 35:45) with specific background settings. This is the #1 rejection reason.'
        },
        {
          reason: 'Missing Tourist Voucher (Sticker)',
          percentage: 20,
          prevention: 'Do not submit a hotel confirmation email. You must buy an official "Tourist Confirmation" (Voucher) from a registered agency.'
        }
      ]
    },
    similarDestinations: ['kazakhstan', 'turkey', 'china']
  },
  {
    id: 'turkey',
    name: 'Turkey',
    code: 'TR',
    flag: '🇹🇷',
    heroImage: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80',
    heroImageAlt: 'Hot Air Balloons, Cappadocia',
    tagline: 'Connect to Culture',
    description: 'From the Bosphorus in Istanbul to the fairy chimneys of Cappadocia. (E-Visa ONLY for valid US/UK/Schengen visa holders).',
    processingTime: '1-15 calendar days',
    successRate: 90.0,
    pricing: {
      embassyFee: "Notify Later", // ~$43 USD (E-Visa) OR ~₹12,500 (Sticker Visa)
      serviceFee: 7999, // Your Agency Fee
      // gatewayFee: 4500, // Gateway International Service Charge (Sticker Only)
      totalFee: 7999, // Estimate for Sticker Visa Total
      currency: 'INR',
      refundPolicy: 'Service fee non-refundable; Gov/Gateway fees non-refundable'
    },
    visaTypes: [
      {
        id: 'tr-evisa',
        name: 'Tourist E-Visa (Conditional)',
        description: 'Instant visa ONLY for holders of valid US/UK/Ireland/Schengen visa.',
        duration: '30 Days',
        price: 3650, // ~$43
        processingTime: '1 Day',
        icon: 'Wifi'
      },
      {
        id: 'tr-sticker',
        name: 'Tourist Sticker Visa',
        description: 'Standard paper visa for those without US/UK/Schengen visas.',
        duration: '30 Days',
        price: 12500, // High fee (~$150+)
        processingTime: '15 Days',
        icon: 'Stamp'
      }
    ],
    requirements: [
      {
        id: 'tr-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 6 months beyond travel. Large size (5x6cm) photos required for Sticker Visa.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'tr-2',
        category: 'Eligibility',
        title: 'Valid Supporting Visa (E-Visa Only)',
        description: 'Must hold a valid US, UK, Ireland, or Schengen visa to qualify for E-Visa.',
        mandatory: false,
        icon: 'CheckSquare'
      },
      {
        id: 'tr-3',
        category: 'Financial',
        title: 'Bank Statements',
        description: 'Last 3 months original statements stamped by bank. (Strict for Sticker Visa).',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'tr-4',
        category: 'Employment',
        title: 'Employment Proof',
        description: 'Salary slips, NOC on letterhead, and GST registration if self-employed.',
        mandatory: true,
        icon: 'Briefcase'
      },
      {
        id: 'tr-5',
        category: 'Accommodation',
        title: 'Hotel & Flights',
        description: 'Confirmed round-trip flights and hotel vouchers for the entire duration.',
        mandatory: true,
        icon: 'Home'
      }
    ],
    timeline: [
      {
        id: 'tr-t1',
        step: 1,
        title: 'Check Eligibility',
        description: 'Do you have a US/UK/Schengen visa? Yes -> E-Visa. No -> Sticker Visa.',
        duration: '1 Day',
        status: 'completed',
        icon: 'HelpCircle'
      },
      {
        id: 'tr-t2',
        step: 2,
        title: 'Application',
        description: 'E-Visa: Apply on evisa.gov.tr. Sticker: Fill form on Gateway International.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Monitor'
      },
      {
        id: 'tr-t3',
        step: 3,
        title: 'Submission (Sticker Only)',
        description: 'Book appointment at Gateway International centre (NOT VFS).',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'UserCheck'
      },
      {
        id: 'tr-t4',
        step: 4,
        title: 'Processing',
        description: 'E-Visa: Instant. Sticker Visa: 15 Working Days.',
        duration: '1-15 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'tr-t5',
        step: 5,
        title: 'Collection',
        description: 'Receive E-Visa by email or collect passport from Gateway.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Package'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Aisha Khan',
        visaType: 'E-Visa',
        country: 'Hyderabad',
        rating: 5,
        content: 'I had a valid US B1/B2 visa, so I got the Turkey E-Visa in literally 5 minutes. It cost only $43. Super easy!',
        avatar: 'https://i.pravatar.cc/150?u=aisha_tr',
        avatarAlt: 'Aisha Khan',
        date: 'Last Month',
        processingTime: '5 Minutes'
      },
      {
        id: 't2',
        name: 'Rahul Verma',
        visaType: 'Sticker Visa',
        country: 'Delhi',
        rating: 4,
        content: 'I didn\'t have a US/UK visa, so I had to go through the Sticker process via Gateway International. It was expensive (~₹15k total) and took 3 weeks, but approved.',
        avatar: 'https://i.pravatar.cc/150?u=rahul_tr',
        avatarAlt: 'Rahul Verma',
        date: '3 Months Ago',
        processingTime: '20 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Can I get a visa on arrival?',
        answer: 'No. Indians are NOT eligible for Visa on Arrival in Turkey.',
        category: 'Visa Types'
      },
      {
        id: 'faq2',
        question: 'I don\'t have a US/UK visa. Can I get an E-Visa?',
        answer: 'No. If you do not hold a valid visa/residence permit from the US, UK, Ireland, or Schengen zone, you MUST apply for a Sticker Visa at a Gateway International centre.',
        category: 'Eligibility'
      },
      {
        id: 'faq3',
        question: 'Who processes the Turkey visa?',
        answer: 'E-Visas are processed by the Ministry online. Sticker visas are handled by Gateway International (the authorized service provider), not VFS Global.',
        category: 'Process'
      }
    ],
    embassyInfo: {
      name: 'Embassy of the Republic of Türkiye',
      address: 'N-50, Nyaya Marg, Chanakyapuri, New Delhi - 110021',
      phone: '011-2688-9053',
      email: 'embassy.newdelhi@mfa.gov.tr',
      website: 'http://newdelhi.emb.mfa.gov.tr',
      workingHours: 'Mon-Fri 9:30 AM - 5:30 PM',
      latitude: 28.59,
      longitude: 77.19
    },
    recentUpdates: [],
    stats: {
      totalApplications: 40000,
      averageProcessingDays: 10,
      approvalRate: 90.0,
      rejectionReasons: [
        {
          reason: 'Invalid E-Visa Support',
          percentage: 70,
          prevention: 'Applying for an E-Visa with an expired US/UK/Schengen visa is the #1 error. The supporting visa MUST be valid on the day you enter Turkey.'
        },
        {
          reason: 'Insufficient Bank Balance (Sticker)',
          percentage: 20,
          prevention: 'For sticker visas, you must show roughly ₹1 Lakh+ balance to prove you can fund the trip.'
        }
      ]
    },
    similarDestinations: ['greece', 'dubai', 'egypt']
  },

  // =========================================================================
  // 4. ASIA
  // =========================================================================
  {
    id: 'japan',
    name: 'Japan',
    code: 'JP',
    flag: '🇯🇵',
    heroImage: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&q=80',
    heroImageAlt: 'Mount Fuji and Chureito Pagoda',
    tagline: 'Land of the Rising Sun',
    description: 'Experience the perfect blend of ancient traditions and futuristic technology, from Kyoto\'s temples to Tokyo\'s neon streets.',
    processingTime: '5-8 working days',
    successRate: 96.0,
    pricing: {
      embassyFee: "Notify Later",
      serviceFee: 7999, // Your Agency Fee

      // gatewayFee: 0,
      totalFee: 9349,
      currency: 'INR',
      refundPolicy: 'Service fee non-refundable; Gov fee is often not charged if rejected (unique to Japan)'
    },
    visaTypes: [
      {
        id: 'jp-evisa',
        name: 'Tourist e-Visa',
        description: 'Single entry only. Fully digital process. Valid for 90 days.',
        duration: '90 Days',
        price: 7999,
        processingTime: '5-7 Days',
        icon: 'Wifi'
      },
      {
        id: 'jp-sticker',
        name: 'Tourist Sticker Visa',
        description: 'Required for Double/Multiple entry or if e-Visa is not suitable.',
        duration: '90 Days / 5 Years',
        price: 7999,
        processingTime: '5-8 Days',
        icon: 'Stamp'
      },
      {
        id: 'jp-business',
        name: 'Business Visa',
        description: 'For meetings and cultural exchange. Requires invitation from Japan.',
        duration: '90 Days',
        price: 7999,
        processingTime: '5 Days',
        icon: 'Briefcase'
      }
    ],
    requirements: [
      {
        id: 'jp-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 6 months. Must have 2 blank pages. Old passports recommended.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'jp-2',
        category: 'Financial',
        title: 'Bank Statements',
        description: 'Last 6 months updated statement. Digital bank statements are OFTEN REJECTED; get physical stamps.',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'jp-3',
        category: 'Financial',
        title: 'ITR (3 Years)',
        description: 'Income Tax Returns for the last 3 assessment years are mandatory.',
        mandatory: true,
        icon: 'FileBarChart'
      },
      {
        id: 'jp-4',
        category: 'Employment',
        title: 'Employment Proof',
        description: 'NOC / Leave letter, Salary slips (last 3 months), or Company Registration.',
        mandatory: true,
        icon: 'Briefcase'
      },
      {
        id: 'jp-5',
        category: 'Itinerary',
        title: 'Day-to-Day Schedule',
        description: 'A very detailed daily plan (stay, contact, activity) using the official MOFA template.',
        mandatory: true,
        icon: 'Map'
      },
      {
        id: 'jp-6',
        category: 'Accommodation',
        title: 'Confirmed Hotel Bookings',
        description: 'Must match the itinerary exactly. "Pay at hotel" is acceptable if confirmed.',
        mandatory: true,
        icon: 'Home'
      }
    ],
    timeline: [
      {
        id: 'jp-t1',
        step: 1,
        title: 'Document Prep',
        description: 'Gather docs and fill the specific "Schedule of Stay" form.',
        duration: '1-2 Days',
        status: 'completed',
        icon: 'Edit'
      },
      {
        id: 'jp-t2',
        step: 2,
        title: 'Submission (VFS)',
        description: 'Submit physical docs at VFS (for Sticker) or apply online (for e-Visa).',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'UserCheck'
      },
      {
        id: 'jp-t3',
        step: 3,
        title: 'Embassy Processing',
        description: 'Review by Consulate General of Japan. (No interview usually).',
        duration: '4-5 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'jp-t4',
        step: 4,
        title: 'Payment Notification',
        description: 'For e-Visa: You receive an email to pay the fee at the VFS centre (cash/card).',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'CreditCard'
      },
      {
        id: 'jp-t5',
        step: 5,
        title: 'Issuance',
        description: 'Collect passport (Sticker) or download "Visa Issuance Notice" (e-Visa).',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'CheckCircle'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Kabir Das',
        visaType: 'Tourist e-Visa',
        country: 'Bangalore',
        rating: 5,
        content: 'The e-Visa process was strange—I applied online but had to go to VFS just to pay the fee! But it was still faster than submitting the passport. Got it in 5 days.',
        avatar: 'https://i.pravatar.cc/150?u=kabir_jp',
        avatarAlt: 'Kabir Das',
        date: 'Last Month',
        processingTime: '5 Days'
      },
      {
        id: 't2',
        name: 'Sneha & Rohan',
        visaType: 'Sticker Visa',
        country: 'Delhi',
        rating: 5,
        content: 'We wanted a 5-year multiple entry visa since we visit often. The agency helped us draft the "Reason for Multiple Entry" letter. We actually got it!',
        avatar: 'https://i.pravatar.cc/150?u=sneha_rohan',
        avatarAlt: 'Sneha & Rohan',
        date: '3 Months Ago',
        processingTime: '6 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Can I use a screenshot of my e-Visa?',
        answer: 'NO. At the airport, you must log in to the visa portal on your phone and show the "Visa Issuance Notice" live. Screenshots or PDFs are NOT accepted.',
        category: 'E-Visa'
      },
      {
        id: 'faq2',
        question: 'Is the visa fee really only ₹500?',
        answer: 'Yes, the government fee is very low for Indians. However, VFS service charges and courier fees add another ₹850-₹1500 to the cost.',
        category: 'Fees'
      },
      {
        id: 'faq3',
        question: 'How strict is the "Schedule of Stay"?',
        answer: 'Very strict. You must list the hotel name, address, and phone number for every single night. Gaps in the schedule will lead to rejection.',
        category: 'Documents'
      },
      {
        id: 'faq4',
        question: 'Do I need 6 months of bank statements?',
        answer: 'Yes. Japan looks for financial stability. A sudden large deposit right before applying is a red flag. Consistent balance is key.',
        category: 'Financial'
      }
    ],
    embassyInfo: {
      name: 'Embassy of Japan in India',
      address: 'Plot No. 4&5, 50-G, Shantipath, Chanakyapuri, New Delhi - 110021',
      phone: '011-4610-4810',
      email: 'jpemb-cons@nd.mofa.go.jp',
      website: 'https://www.in.emb-japan.go.jp/',
      workingHours: 'Mon-Fri 9:00 AM - 1:00 PM, 2:00 PM - 5:30 PM',
      latitude: 28.59,
      longitude: 77.19
    },
    stats: {
      totalApplications: 45000,
      averageProcessingDays: 5,
      approvalRate: 96.0,
      rejectionReasons: [
        {
          reason: 'Incomplete Schedule of Stay',
          percentage: 45,
          prevention: 'Fill the official itinerary form day-by-day with hotel contact details. Do not write "Touring Tokyo" for 5 days without specifics.'
        },
        {
          reason: 'Bank Statement Issues',
          percentage: 30,
          prevention: 'Submit physical bank statements with original stamps. E-statements are often rejected.'
        }
      ]
    },
    similarDestinations: ['south_korea', 'singapore', 'thailand'],
    recentUpdates: []
  },
  {
    id: 'south_korea',
    name: 'South Korea',
    code: 'KR',
    flag: '🇰🇷',
    heroImage: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&q=80',
    heroImageAlt: 'Gyeongbokgung Palace, Seoul',
    tagline: 'Imagine Your Korea',
    description: 'From the bustling streets of Seoul to the peaceful Jeju Island, experience the K-Wave firsthand.',
    processingTime: '10-15 working days',
    successRate: 91.5,
    pricing: {
      embassyFee: "Notify Later", // Approx $40 for Single Entry
      serviceFee: 7999, // Your Agency Fee
      totalFee: 12779,
      currency: 'INR',
      refundPolicy: 'Service fee non-refundable; Gov & VFS fees non-refundable'
    },
    visaTypes: [
      {
        id: 'kr-tourist',
        name: 'Tourist Visa (C-3-9)',
        description: 'Standard short-term visa for tourism. Valid for 90 days.',
        duration: '90 Days',
        price: 7999,
        processingTime: '10-15 Days',
        icon: 'Map'
      },
      {
        id: 'kr-business',
        name: 'Business Visa (C-3-4)',
        description: 'For market research, meetings, and consultations.',
        duration: '90 Days',
        price: 7999,
        processingTime: '10-15 Days',
        icon: 'Briefcase'
      },
      {
        id: 'kr-multiple',
        name: 'Multiple Entry Visa',
        description: 'For frequent travelers (requires previous OECD travel history).',
        duration: '5 Years',
        price: 7650, // Approx $90
        processingTime: '15 Days',
        icon: 'Stamp'
      }
    ],
    requirements: [
      {
        id: 'kr-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 6 months beyond travel. 2 blank pages required.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'kr-2',
        category: 'Application',
        title: 'Application Form',
        description: '5-page standard Visa Application Form (filled in English).',
        mandatory: true,
        icon: 'Edit'
      },
      {
        id: 'kr-3',
        category: 'Financial',
        title: 'Bank Statements & ITR',
        description: 'Last 6 months original stamped statements + ITR for last 2 years.',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'kr-4',
        category: 'Employment',
        title: 'Employment Certificate',
        description: 'Certificate of Employment / Student ID / Business Registration.',
        mandatory: true,
        icon: 'Briefcase'
      },
      {
        id: 'kr-5',
        category: 'Itinerary',
        title: 'Travel Plan',
        description: 'Detailed daily schedule in Korea.',
        mandatory: true,
        icon: 'Map'
      },
      {
        id: 'kr-6',
        category: 'Accommodation',
        title: 'Hotel & Flights',
        description: 'Confirmed hotel vouchers and return flight tickets.',
        mandatory: true,
        icon: 'Home'
      }
    ],
    timeline: [
      {
        id: 'kr-t1',
        step: 1,
        title: 'Form Filling',
        description: 'Download and fill the 5-page application form.',
        duration: '1 Day',
        status: 'completed',
        icon: 'Edit'
      },
      {
        id: 'kr-t2',
        step: 2,
        title: 'Submission',
        description: 'Visit VFS Global (South Korea centre) to submit documents.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'UserCheck'
      },
      {
        id: 'kr-t3',
        step: 3,
        title: 'Embassy Processing',
        description: 'File reviewed by Korean Embassy/Consulate.',
        duration: '10-15 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'kr-t4',
        step: 4,
        title: 'Passport Return',
        description: 'Collect passport via courier.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Package'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Priya Sharma',
        visaType: 'Tourist (C-3-9)',
        country: 'Delhi',
        rating: 5,
        content: 'I was worried about the interview, but there was none! I just submitted my docs at VFS Delhi. The "Health Condition Report" form was removed from the checklist this year, which saved time.',
        avatar: 'https://i.pravatar.cc/150?u=priya_kr',
        avatarAlt: 'Priya Sharma',
        date: 'Last Month',
        processingTime: '12 Days'
      },
      {
        id: 't2',
        name: 'Arun Kumar',
        visaType: 'Multiple Entry',
        country: 'Chennai',
        rating: 5,
        content: 'Since I had visited OECD countries before, the agency suggested I apply for the 5-year multiple entry visa. It cost a bit more but got approved easily.',
        avatar: 'https://i.pravatar.cc/150?u=arun_kr',
        avatarAlt: 'Arun Kumar',
        date: '2 Months Ago',
        processingTime: '14 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Is Jeju Island visa-free for Indians?',
        answer: 'Generally NO. Indians can only enter Jeju visa-free if they hold a valid visa for US/Canada/Aus/NZ/Europe and are transiting, OR are part of a specific group tour. Solo Indian travelers usually need a visa.',
        category: 'Visa Types'
      },
      {
        id: 'faq2',
        question: 'Do I need a "Health Condition Report"?',
        answer: 'This requirement (from the COVID era) has generally been removed for standard tourist visas, but always check the latest VFS checklist as rules change often.',
        category: 'Documents'
      },
      {
        id: 'faq3',
        question: 'What is the processing time?',
        answer: 'It takes about 10-15 working days. Unlike Japan, there is no expedited 3-day service for standard tourist visas.',
        category: 'Processing'
      },
      {
        id: 'faq4',
        question: 'Can I apply for a Multiple Entry visa?',
        answer: 'Yes, if you have visited South Korea before, or have visited OECD countries (like USA, Schengen, UK) in the past, you are eligible for a 5-year multiple entry visa.',
        category: 'Eligibility'
      }
    ],
    embassyInfo: {
      name: 'Embassy of the Republic of Korea',
      address: '9, Chandragupta Marg, Chanakyapuri Extension, New Delhi - 110021',
      phone: '011-4200-7000',
      email: 'india_visa@mofa.go.kr',
      website: 'https://overseas.mofa.go.kr/in-en/index.do',
      workingHours: 'Mon-Fri 9:00 AM - 12:30 PM, 2:00 PM - 5:00 PM',
      latitude: 28.59,
      longitude: 77.18
    },
    stats: {
      totalApplications: 20000,
      averageProcessingDays: 12,
      approvalRate: 91.5,
      rejectionReasons: [
        {
          reason: 'Vague Purpose of Visit',
          percentage: 40,
          prevention: 'Ensure your itinerary is logical. "Just walking around Seoul" for 15 days is often rejected. List specific tourist sites.'
        },
        {
          reason: 'Insufficient Ties to India',
          percentage: 30,
          prevention: 'Submit strong employment proof (NOC, salary slips) to show you have a job to return to.'
        }
      ]
    },
    recentUpdates: [],
    similarDestinations: ['japan', 'taiwan', 'vietnam']
  },
  {
    id: 'thailand',
    name: 'Thailand',
    code: 'TH',
    flag: '🇹🇭',
    heroImage: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&q=80',
    heroImageAlt: 'Longtail boats in Phi Phi Islands',
    tagline: 'Amazing Thailand',
    description: 'Visa-Free entry for 60 days. Mandatory Digital Arrival Card (TDAC) required before flight.',
    processingTime: 'Instant (Visa Exemption) / 1 Day (TDAC)',
    successRate: 99.0,
    pricing: {
      embassyFee: "Notify Later", // Exemption is Free (Tourism Tax of 300 THB starts Feb 2026)
      serviceFee: 0, // DIY TDAC
      totalFee: 0,
      currency: 'INR',
      refundPolicy: 'N/A'
    },
    visaTypes: [
      {
        id: 'th-exempt',
        name: 'Visa Exemption (60 Days)',
        description: 'Standard entry for tourism. No visa fee.',
        duration: '60 Days (Extendable by 30 days)',
        price: 0,
        processingTime: 'Instant',
        icon: 'Stamp'
      },
      {
        id: 'th-voa',
        name: 'Visa on Arrival',
        description: 'Paid option (2000 THB) valid for only 15 days. Not recommended.',
        duration: '15 Days',
        price: 5000,
        processingTime: 'On Arrival',
        icon: 'Clock'
      }
    ],
    requirements: [
      {
        id: 'th-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 6 months. Must have 2 blank pages.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'th-2',
        category: 'Registration',
        title: 'TDAC (Digital Arrival Card)',
        description: 'MANDATORY. Must fill online at least 72 hours before departure (replaced TM6).',
        mandatory: true,
        icon: 'Monitor'
      },
      {
        id: 'th-3',
        category: 'Financial',
        title: 'Proof of Funds',
        description: 'Cash requirement: 10,000 THB per person or 20,000 THB per family (Random checks).',
        mandatory: true,
        icon: 'Cash'
      },
      {
        id: 'th-4',
        category: 'Travel',
        title: 'Return Flight',
        description: 'Confirmed return ticket within 60 days.',
        mandatory: true,
        icon: 'Plane'
      }
    ],
    timeline: [
      {
        id: 'th-t1',
        step: 1,
        title: 'TDAC Registration',
        description: 'Complete Digital Arrival Card online 3 days before trip.',
        duration: '1 Day',
        status: 'completed',
        icon: 'Monitor'
      },
      {
        id: 'th-t2',
        step: 2,
        title: 'Currency',
        description: 'Exchange INR/USD to THB (Ensure 10k THB cash in hand).',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Cash'
      },
      {
        id: 'th-t3',
        step: 3,
        title: 'Immigration',
        description: 'Present Passport + TDAC QR Code for 60-day stamp.',
        duration: 'Instant',
        status: 'upcoming',
        icon: 'Stamp'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Rohan Das',
        visaType: 'Visa Free',
        country: 'Mumbai',
        rating: 5,
        content: 'The new TDAC system is strict. The airline checked my TDAC QR code before giving the boarding pass. Immigration was fast though.',
        avatar: 'https://i.pravatar.cc/150?u=rohan_th',
        avatarAlt: 'Rohan Das',
        date: 'Last Month',
        processingTime: 'Instant'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Is the Visa FREE?',
        answer: 'Yes. The 60-day exemption has zero government fees. Do not confuse this with the 2000 THB Visa on Arrival.',
        category: 'Fees'
      },
      {
        id: 'faq2',
        question: 'What is TDAC?',
        answer: 'It is the "Thailand Digital Arrival Card". It replaces the old paper forms. All foreigners must fill it online before flying.',
        category: 'Process'
      },
      {
        id: 'faq3',
        question: 'Is there a Tourism Tax?',
        answer: 'Not yet. The 300 THB "Kha Yeap Pan Din" tax is expected to start in February 2026.',
        category: 'Fees'
      }
    ],
    embassyInfo: {
      name: 'Royal Thai Embassy, New Delhi',
      address: 'D-1/3, Vasant Vihar, New Delhi - 110057',
      phone: '011-2615-9300',
      email: 'contact@thaiemb.org.in',
      website: 'https://newdelhi.thaiembassy.org/',
      workingHours: 'Mon-Fri 9:00 AM - 12:30 PM',
      latitude: 28.55,
      longitude: 77.16
    },
    recentUpdates: [],
    stats: {
      totalApplications: 200000,
      averageProcessingDays: 0,
      approvalRate: 99.0,
      rejectionReasons: [
        {
          reason: 'Missing TDAC',
          percentage: 60,
          prevention: 'Fill the Digital Arrival Card online. Airlines may deny boarding without it.'
        },
        {
          reason: 'No Return Ticket',
          percentage: 30,
          prevention: 'You must have a confirmed flight out of Thailand within 60 days.'
        }
      ]
    },
    similarDestinations: ['vietnam', 'bali', 'malaysia']
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    code: 'MY',
    flag: '🇲🇾',
    heroImage: 'https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?auto=format&fit=crop&q=80',
    heroImageAlt: 'Kuala Lumpur Skyline',
    tagline: 'Truly Asia',
    description: 'Experience the diverse culture of Malaysia. Visa-Free entry for Indian tourists extended through 2026.',
    processingTime: 'Instant (MDAC required 3 days prior)',
    successRate: 97.0,
    pricing: {
      embassyFee: "Notify Later", // Visa-Free for 30 days
      serviceFee: 0, // DIY MDAC is free
      totalFee: 0,
      currency: 'INR',
      refundPolicy: 'N/A'
    },
    visaTypes: [
      {
        id: 'my-free',
        name: 'Visa Free Entry (Recommended)',
        description: 'Valid for stays up to 30 days. Requires MDAC registration.',
        duration: '30 Days',
        price: 0,
        processingTime: 'Instant',
        icon: 'Stamp'
      },
      {
        id: 'my-evisa',
        name: 'eVISA (Long Stay)',
        description: 'For stays exceeding 30 days. Paid option.',
        duration: '30 Days (Extendable)',
        price: 3800, // Approx Govt Fee + Processing
        processingTime: '2-3 Business Days',
        icon: 'Globe'
      }
    ],
    requirements: [
      {
        id: 'my-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 6 months beyond entry. Must have 2 blank pages.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'my-2',
        category: 'Registration',
        title: 'MDAC (Digital Card)',
        description: 'MANDATORY. Must fill online at imigresen-online.imi.gov.my 3 days before travel.',
        mandatory: true,
        icon: 'Monitor'
      },
      {
        id: 'my-3',
        category: 'Travel',
        title: 'Return Ticket',
        description: 'Confirmed return flight ticket within 30 days. Strictly checked.',
        mandatory: true,
        icon: 'Plane'
      },
      {
        id: 'my-4',
        category: 'Accommodation',
        title: 'Hotel Booking',
        description: 'Proof of stay for the ENTIRE duration of the trip.',
        mandatory: true,
        icon: 'Home'
      },
      {
        id: 'my-5',
        category: 'Financial',
        title: 'Proof of Funds',
        description: 'Approx $50-$100 USD per day. Cash or Credit Cards accepted.',
        mandatory: true,
        icon: 'CreditCard'
      }
    ],
    timeline: [
      {
        id: 'my-t1',
        step: 1,
        title: 'MDAC Registration',
        description: 'Complete the Malaysia Digital Arrival Card online 3 days before departure.',
        duration: '1 Day',
        status: 'completed',
        icon: 'Edit'
      },
      {
        id: 'my-t2',
        step: 2,
        title: 'Document Prep',
        description: 'Print your MDAC PIN, Return Flight Tickets, and Hotel Vouchers.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'FileText'
      },
      {
        id: 'my-t3',
        step: 3,
        title: 'Arrival & Entry',
        description: 'Proceed to immigration. Show Passport + MDAC PIN for 30-day stamp.',
        duration: 'Instant',
        status: 'upcoming',
        icon: 'Stamp'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Sanjay Patel',
        visaType: 'Visa Free',
        country: 'Ahmedabad',
        rating: 5,
        content: 'I was skeptical about it being free, but it really is! You just need the MDAC email. I filled it 2 days before and had no issues at KLIA.',
        avatar: 'https://i.pravatar.cc/150?u=sanjay_my',
        avatarAlt: 'Sanjay Patel',
        date: 'Last Month',
        processingTime: 'Instant'
      },
      {
        id: 't2',
        name: 'Meera Reddy',
        visaType: 'Visa Free',
        country: 'Bangalore',
        rating: 4,
        content: 'Strict immigration. They asked for my hotel voucher for every single night. Make sure you don\'t just book the first night!',
        avatar: 'https://i.pravatar.cc/150?u=meera_my',
        avatarAlt: 'Meera Reddy',
        date: '2 Months Ago',
        processingTime: 'Instant'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Is the Visa Free status confirmed for 2026?',
        answer: 'Yes. The Malaysian government has extended the visa exemption for Indian nationals until December 31, 2026.',
        category: 'Validity'
      },
      {
        id: 'faq2',
        question: 'Is MDAC mandatory?',
        answer: 'Yes. Even though the visa is free, you CANNOT enter Malaysia without registering for the MDAC at least 3 days prior to arrival.',
        category: 'Process'
      },
      {
        id: 'faq3',
        question: 'Can I extend the 30-day pass?',
        answer: 'No. The Social Visit Pass is strictly for 30 days and cannot be extended or converted to a work visa.',
        category: 'Validity'
      }
    ],
    embassyInfo: {
      name: 'High Commission of Malaysia',
      address: '50-M Satya Marg, Chanakyapuri, New Delhi',
      phone: '011-2419-5930',
      email: 'mwdelhi@kln.gov.my',
      website: 'https://www.kln.gov.my/web/ind_new-delhi',
      workingHours: 'Mon-Fri 9am-4pm',
      latitude: 28.60,
      longitude: 77.17
    },
    recentUpdates: [
      // {
      //   date: '2025-12-15',
      //   title: 'Visa Free Extension',
      //   description: 'Malaysia confirms extension of Visa-Free entry for Indians until Dec 31, 2026.'
      // }
    ],
    stats: {
      totalApplications: 25000,
      averageProcessingDays: 0,
      approvalRate: 97,
      rejectionReasons: [
        {
          reason: 'Missing MDAC Registration',
          percentage: 70,
          prevention: 'Register online 3 days before your flight.'
        },
        {
          reason: 'Incomplete Accommodation Proof',
          percentage: 20,
          prevention: 'Ensure hotel bookings cover your entire stay duration.'
        }
      ]
    },
    similarDestinations: ['singapore', 'thailand', 'indonesia']
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    code: 'VN',
    flag: '🇻🇳',
    heroImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80',
    heroImageAlt: 'Ha Long Bay',
    tagline: 'Timeless Charm',
    description: 'Explore Ha Long Bay, Hoi An, and Hanoi. (Mandatory 90-Day E-Visa for Indians).',
    processingTime: '3-5 Working Days',
    successRate: 98.0,
    pricing: {
      embassyFee: "Notify Later",
      serviceFee: 0, // DIY is recommended
      totalFee: 2150,
      currency: 'INR',
      refundPolicy: 'Government fee is non-refundable'
    },
    visaTypes: [
      {
        id: 'vn-evisa-single',
        name: 'E-Visa (Single Entry)',
        description: 'Standard tourist visa. Valid for up to 90 days.',
        duration: '90 Days',
        price: 2150, // $25 USD
        processingTime: '3-5 Working Days',
        icon: 'User'
      },
      {
        id: 'vn-evisa-multi',
        name: 'E-Visa (Multiple Entry)',
        description: 'Valid for up to 90 days with unlimited entries.',
        duration: '90 Days',
        price: 4300, // $50 USD
        processingTime: '3-5 Working Days',
        icon: 'Users'
      }
    ],
    requirements: [
      {
        id: 'vn-1',
        category: 'Identity',
        title: 'Passport Scan',
        description: 'Clear color scan of passport bio page (no glare, no fingers).',
        mandatory: true,
        icon: 'Scan'
      },
      {
        id: 'vn-2',
        category: 'Identity',
        title: 'Digital Photo',
        description: 'Portrait photo (4x6cm ratio), white background, no glasses.',
        mandatory: true,
        icon: 'Camera'
      },
      {
        id: 'vn-3',
        category: 'Payment',
        title: 'International Card',
        description: 'Credit/Debit card enabled for international USD payments.',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'vn-4',
        category: 'Travel',
        title: 'Entry Port',
        description: 'Must select specific entry checkpoint (e.g., Noi Bai Int Airport) on application.',
        mandatory: true,
        icon: 'MapPin'
      }
    ],
    timeline: [
      {
        id: 'vn-t1',
        step: 1,
        title: 'Apply Online',
        description: 'Submit application on official portal (evisa.xuatnhapcanh.gov.vn).',
        duration: '1 Day',
        status: 'completed',
        icon: 'Monitor'
      },
      {
        id: 'vn-t2',
        step: 2,
        title: 'Payment',
        description: 'Pay $25 (Single) or $50 (Multi) USD fee online.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'CreditCard'
      },
      {
        id: 'vn-t3',
        step: 3,
        title: 'Processing',
        description: 'Wait 3-5 working days. Check status using registration code.',
        duration: '3-5 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'vn-t4',
        step: 4,
        title: 'Download & Print',
        description: 'Download E-Visa PDF. Print 2 color copies.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Printer'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Vikram Singh',
        visaType: 'E-Visa (Single)',
        country: 'Delhi',
        rating: 5,
        content: 'I applied on Monday and got the PDF on Thursday. The official site is a bit slow but works. Total cost was just ₹2100.',
        avatar: 'https://i.pravatar.cc/150?u=vikram_vn',
        avatarAlt: 'Vikram Singh',
        date: 'Last Month',
        processingTime: '3 Days'
      },
      {
        id: 't2',
        name: 'Anjali Desai',
        visaType: 'E-Visa (Multi)',
        country: 'Mumbai',
        rating: 4,
        content: 'I needed the multiple entry visa to visit Cambodia and return. It costs $50 but totally worth it for the flexibility.',
        avatar: 'https://i.pravatar.cc/150?u=anjali_vn',
        avatarAlt: 'Anjali Desai',
        date: '3 Months Ago',
        processingTime: '5 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Is Vietnam Visa Free for Indians?',
        answer: 'No. Unlike Thailand and Malaysia, Vietnam still requires a visa. The E-Visa is mandatory and costs $25.',
        category: 'Visa Types'
      },
      {
        id: 'faq2',
        question: 'Why was my E-Visa rejected?',
        answer: 'The most common reason is a name mismatch. You must enter your full name exactly as it appears in the machine-readable zone (ICAO line) of your passport.',
        category: 'Rejection'
      },
      {
        id: 'faq3',
        question: 'Can I use Visa on Arrival?',
        answer: 'VOA is largely obsolete for tourists now that the 90-day E-Visa exists. VOA requires a pricey pre-approval letter and is not recommended.',
        category: 'Visa Types'
      }
    ],
    embassyInfo: {
      name: 'Embassy of Vietnam in New Delhi',
      address: 'EP-7A, Chandragupta Marg, Chanakyapuri, New Delhi - 110021',
      phone: '011-2687-9868',
      email: 'vnemb.in@gmail.com',
      website: 'https://vnembassy-newdelhi.mofa.gov.vn/',
      workingHours: 'Mon-Fri 9:30 AM - 5:00 PM',
      latitude: 28.59,
      longitude: 77.18
    },
    recentUpdates: [
      // {
      //   date: '2025-08-15',
      //   title: 'E-Visa Validity Extended',
      //   description: 'Vietnam E-Visa validity increased from 30 days to 90 days for all countries.'
      // }
    ],
    stats: {
      totalApplications: 95000,
      averageProcessingDays: 4,
      approvalRate: 98.0,
      rejectionReasons: [
        {
          reason: 'Name Mismatch',
          percentage: 75,
          prevention: 'Type your name EXACTLY as on the passport ICAO line (bottom lines).'
        },
        {
          reason: 'Poor Photo Quality',
          percentage: 15,
          prevention: 'Upload a studio-quality jpg. Do not crop the chin or hair.'
        }
      ]
    },
    similarDestinations: ['thailand', 'cambodia', 'laos']
  },
  {
    id: 'indonesia',
    name: 'Indonesia',
    code: 'ID',
    flag: '🇮🇩',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80',
    heroImageAlt: 'Pura Ulun Danu Bratan, Bali',
    tagline: 'Wonderful Indonesia',
    description: 'Experience the beaches of Bali, the culture of Yogyakarta, and the marine life of Komodo. (Mandatory Visa on Arrival + Bali Levy).',
    processingTime: 'Instant (e-VoA)',
    successRate: 97.0,
    pricing: {
      embassyFee: "Notify Later",
      serviceFee: 0, // DIY Recommended
      totalFee: 3550,
      currency: 'INR',
      refundPolicy: 'Government fees are non-refundable'
    },
    visaTypes: [
      {
        id: 'id-evoa',
        name: 'e-VoA (B1) - Recommended',
        description: 'Electronic Visa on Arrival. Allows use of Autogates at Bali/Jakarta airports.',
        duration: '30 Days (Extendable once)',
        price: 2700, // ~IDR 500,000
        processingTime: 'Instant',
        icon: 'Monitor'
      },
      {
        id: 'id-b211a',
        name: 'Visit Visa (60 Days)',
        description: 'Pre-arranged visa for longer stays. Apply 1 week in advance.',
        duration: '60 Days',
        price: 8200, // ~IDR 1,500,000
        processingTime: '5-7 Days',
        icon: 'PalmTree'
      }
    ],
    requirements: [
      {
        id: 'id-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for at least 6 months beyond entry date. Must have 2 blank pages.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'id-2',
        category: 'Travel',
        title: 'Return Flight Ticket',
        description: 'Confirmed return or onward ticket. Strictly checked by airlines.',
        mandatory: true,
        icon: 'Plane'
      },
      {
        id: 'id-3',
        category: 'Tax',
        title: 'Bali Tourist Levy',
        description: 'Mandatory IDR 150,000 payment receipt (QR Code) from "Love Bali" portal.',
        mandatory: true,
        icon: 'Receipt'
      },
      {
        id: 'id-4',
        category: 'Accommodation',
        title: 'Hotel Booking',
        description: 'Proof of stay for at least the first few nights.',
        mandatory: true,
        icon: 'Home'
      },
      {
        id: 'id-5',
        category: 'Identity',
        title: 'Digital Photo',
        description: 'Passport-style photo (jpg) for e-VoA application.',
        mandatory: false,
        icon: 'Camera'
      }
    ],
    timeline: [
      {
        id: 'id-t1',
        step: 1,
        title: 'Apply e-VoA',
        description: 'Visit molina.imigrasi.go.id 48hrs before flight. Upload passport & photo.',
        duration: '1 Day',
        status: 'completed',
        icon: 'Monitor'
      },
      {
        id: 'id-t2',
        step: 2,
        title: 'Pay Fees',
        description: 'Pay IDR 500,000 for Visa and IDR 150,000 for Bali Levy online.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'CreditCard'
      },
      {
        id: 'id-t3',
        step: 3,
        title: 'Arrival',
        description: 'Use the Autogates at Ngurah Rai Airport (Bali) with your e-VoA QR code.',
        duration: 'Instant',
        status: 'upcoming',
        icon: 'Stamp'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Karan Mehta',
        visaType: 'e-VoA',
        country: 'Mumbai',
        rating: 5,
        content: 'The e-VoA is a lifesaver. I saw a huge line for the manual payment counter, but I just scanned my passport at the Autogate and was out in 2 minutes!',
        avatar: 'https://i.pravatar.cc/150?u=karan_id',
        avatarAlt: 'Karan Mehta',
        date: 'Last Month',
        processingTime: 'Instant'
      },
      {
        id: 't2',
        name: 'Simran Kaur',
        visaType: 'Visa on Arrival',
        country: 'Delhi',
        rating: 4,
        content: 'I didn\'t apply online and had to queue to pay cash. It took 45 mins. Also, don\'t forget the separate Bali Levy—they checked my QR code at the exit.',
        avatar: 'https://i.pravatar.cc/150?u=simran_id',
        avatarAlt: 'Simran Kaur',
        date: '2 Months Ago',
        processingTime: '45 Mins'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Is Indonesia Visa Free for Indians?',
        answer: 'No. Indians must pay for a Visa on Arrival (IDR 500,000). The "Visa Free" status was revoked post-pandemic.',
        category: 'Visa Types'
      },
      {
        id: 'faq2',
        question: 'What is the Bali Levy?',
        answer: 'It is a mandatory tourism tax of IDR 150,000 (approx ₹850) introduced in 2024 for cultural preservation. You must pay it separately from the visa.',
        category: 'Fees'
      },
      {
        id: 'faq3',
        question: 'Can I extend the 30-day visa?',
        answer: 'Yes. You can extend it once for another 30 days. If you entered via e-VoA, you can extend online. If via counter VoA, you must visit an immigration office.',
        category: 'Validity'
      }
    ],
    embassyInfo: {
      name: 'Embassy of the Republic of Indonesia',
      address: '50-A, Kautilya Marg, Chanakyapuri, New Delhi - 110021',
      phone: '011-2611-8642',
      email: 'newdelhi.kbri@kemlu.go.id',
      website: 'https://kemlu.go.id/newdelhi/en',
      workingHours: 'Mon-Fri 9:00 AM - 5:00 PM',
      latitude: 28.59,
      longitude: 77.18
    },
    recentUpdates: [
      // {
      //   date: '2024-02-14',
      //   title: 'Bali Tourist Levy Implemented',
      //   description: 'All foreign tourists must pay IDR 150,000 levy upon entry to Bali.'
      // }
    ],
    stats: {
      totalApplications: 300000,
      averageProcessingDays: 0,
      approvalRate: 97.0,
      rejectionReasons: [
        {
          reason: 'Passport Validity < 6 Months',
          percentage: 60,
          prevention: 'Strictly enforced. If your passport expires in 5 months 29 days, you will be denied entry.'
        },
        {
          reason: 'No Return Ticket',
          percentage: 30,
          prevention: 'Airlines will not issue a boarding pass without proof of return/onward travel.'
        }
      ]
    },
    similarDestinations: ['thailand', 'vietnam', 'philippines']
  },
  {
    id: 'sri_lanka',
    name: 'Sri Lanka',
    code: 'LK',
    flag: '🇱🇰',
    heroImage: 'https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&q=80',
    heroImageAlt: 'Colombo Skyline and Lotus Tower',
    tagline: 'Pearl of the Indian Ocean',
    description: 'Experience pristine beaches, tea plantations, and ancient temples. (Visa fee waived for Indians, but online ETA is mandatory).',
    processingTime: '24-48 Hours',
    successRate: 98.5,
    pricing: {
      embassyFee: "Notify Later", // Fee Waived for Indian Nationals (Tourist Only)
      serviceFee: 0, // DIY Recommended
      totalFee: 0,
      currency: 'INR',
      refundPolicy: 'N/A'
    },
    visaTypes: [
      {
        id: 'lk-eta',
        name: 'Tourist ETA (Free Scheme)',
        description: 'Mandatory pre-authorization. Fee is currently waived for Indians.',
        duration: '30 Days',
        price: 0,
        processingTime: '1-2 Days',
        icon: 'Island'
      },
      {
        id: 'lk-business',
        name: 'Business ETA',
        description: 'For meetings and trade. Not part of the free scheme.',
        duration: '30 Days',
        price: 4200, // Approx $50 USD
        processingTime: '2-3 Days',
        icon: 'Briefcase'
      }
    ],
    requirements: [
      {
        id: 'lk-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for at least 6 months from the date of arrival.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'lk-2',
        category: 'Application',
        title: 'ETA Approval',
        description: 'Must have the "ETA Approval Notice" email printed or on phone.',
        mandatory: true,
        icon: 'CheckCircle'
      },
      {
        id: 'lk-3',
        category: 'Travel',
        title: 'Return Ticket',
        description: 'Confirmed return flight within 30 days.',
        mandatory: true,
        icon: 'Plane'
      },
      {
        id: 'lk-4',
        category: 'Financial',
        title: 'Proof of Funds',
        description: 'Sufficient funds for stay (approx $30-50 per day).',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'lk-5',
        category: 'Health',
        title: 'Yellow Fever Cert',
        description: 'Only if arriving from a Yellow Fever endemic country (not usually for direct India flights).',
        mandatory: false,
        icon: 'Activity'
      }
    ],
    timeline: [
      {
        id: 'lk-t1',
        step: 1,
        title: 'Apply Online',
        description: 'Fill ETA application on eta.gov.lk. Select "Tourist" (Indian nationals get fee waiver).',
        duration: '1 Day',
        status: 'completed',
        icon: 'Monitor'
      },
      {
        id: 'lk-t2',
        step: 2,
        title: 'Approval',
        description: 'Receive ETA confirmation via email within 24 hours.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Mail'
      },
      {
        id: 'lk-t3',
        step: 3,
        title: 'Arrival',
        description: 'Present Passport + ETA at Immigration. No fee payment needed.',
        duration: 'Instant',
        status: 'upcoming',
        icon: 'Stamp'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Rahul Verma',
        visaType: 'Tourist ETA',
        country: 'Chennai',
        rating: 5,
        content: 'I was surprised that I didn\'t have to pay anything! I just filled the form online, got the email in 2 hours, and walked through immigration in Colombo.',
        avatar: 'https://i.pravatar.cc/150?u=rahul_lk',
        avatarAlt: 'Rahul Verma',
        date: 'Last Month',
        processingTime: '2 Hours'
      },
      {
        id: 't2',
        name: 'Sneha Pillai',
        visaType: 'Tourist ETA',
        country: 'Bangalore',
        rating: 4,
        content: 'Make sure you use the official .gov.lk website! My friend used a fake site and paid ₹3000 unnecessarily. The official one is free for us.',
        avatar: 'https://i.pravatar.cc/150?u=sneha_lk',
        avatarAlt: 'Sneha Pillai',
        date: '3 Months Ago',
        processingTime: '1 Day'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Is the Visa completely free?',
        answer: 'Yes. For Indian nationals, the government visa fee is currently waived. However, you MUST still complete the online ETA application process.',
        category: 'Fees'
      },
      {
        id: 'faq2',
        question: 'Do I need a Visa on Arrival?',
        answer: 'Technically, the ETA *is* your pre-approval. If you arrive without an ETA, you might be able to get one at the airport counter, but you risk long queues and potential administrative fees.',
        category: 'Process'
      },
      {
        id: 'faq3',
        question: 'Can I extend my stay?',
        answer: 'Yes, the initial 30-day tourist entry can be extended for up to 6 months by visiting the Department of Immigration in Colombo.',
        category: 'Validity'
      }
    ],
    embassyInfo: {
      name: 'High Commission of Sri Lanka in India',
      address: '27, Kautilya Marg, Chanakyapuri, New Delhi - 110021',
      phone: '011-2301-0201',
      email: 'slhcnd@slhcdelhi.org',
      website: 'https://www.slhcdelhi.org/',
      workingHours: 'Mon-Fri 9:00 AM - 4:15 PM',
      latitude: 28.60,
      longitude: 77.18
    },
    recentUpdates: [
      // {
      //   date: '2026-01-01',
      //   title: 'Free Visa Extension',
      //   description: 'Sri Lanka extends the Visa Fee Waiver scheme for India, China, Russia, and others through 2026.'
      // }
    ],
    stats: {
      totalApplications: 45000,
      averageProcessingDays: 1,
      approvalRate: 98.5,
      rejectionReasons: [
        {
          reason: 'Incorrect Passport Details',
          percentage: 80,
          prevention: 'Double-check passport number and expiry date on the ETA form. Typos require a new application.'
        },
        {
          reason: 'Existing ETA',
          percentage: 10,
          prevention: 'You cannot apply for a new ETA if you already have a valid one active.'
        }
      ]
    },
    similarDestinations: ['maldives', 'thailand', 'bali']
  },
  {
    id: 'singapore',
    name: 'Singapore',
    code: 'SG',
    flag: '🇸🇬',
    heroImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80',
    heroImageAlt: 'Marina Bay Sands and Skyline',
    tagline: 'The Lion City',
    description: 'Experience the futuristic gardens, world-class shopping, and hawker food. (Visa requires Authorized Agent submission).',
    processingTime: '3-5 Working Days',
    successRate: 99.0,
    pricing: {
      embassyFee: "Notify Later",
      serviceFee: 1000, // Average Authorized Agent Fee
      totalFee: 3100,
      currency: 'INR',
      refundPolicy: 'Government fee non-refundable; Service fee non-refundable'
    },
    visaTypes: [
      {
        id: 'sg-tourist',
        name: 'Tourist Visa',
        description: 'Multiple entry visa valid for 30 days to 2 years (at discretion).',
        duration: '30 Days (per entry)',
        price: 3100,
        processingTime: '3-5 Days',
        icon: 'Send'
      },
      {
        id: 'sg-business',
        name: 'Business Visa',
        description: 'For meetings and conferences. Requires Form V39A (Letter of Introduction).',
        duration: '30 Days',
        price: 3100,
        processingTime: '3-5 Days',
        icon: 'Briefcase'
      }
    ],
    requirements: [
      {
        id: 'sg-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 6 months beyond entry. Must have 2 blank pages.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'sg-2',
        category: 'Application',
        title: 'Form 14A',
        description: 'Duly filled and signed application form. Critical document.',
        mandatory: true,
        icon: 'Edit'
      },
      {
        id: 'sg-3',
        category: 'Identity',
        title: 'Photos (Matte Finish)',
        description: '2 recent photos (35x45mm), white background, MATTE finish (Strict requirement).',
        mandatory: true,
        icon: 'Camera'
      },
      {
        id: 'sg-4',
        category: 'Registration',
        title: 'SG Arrival Card',
        description: 'Mandatory online declaration 3 days before travel (Free).',
        mandatory: true,
        icon: 'Monitor'
      },
      {
        id: 'sg-5',
        category: 'Employment',
        title: 'Cover Letter',
        description: 'Personal cover letter explaining travel dates and employment details.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'sg-6',
        category: 'Financial',
        title: 'Bank Statements',
        description: 'Last 3 months updated bank statements (if first-time traveler).',
        mandatory: false,
        icon: 'CreditCard'
      }
    ],
    timeline: [
      {
        id: 'sg-t1',
        step: 1,
        title: 'Find Agent',
        description: 'Locate an "Authorized Visa Agent" (AVA) in your city.',
        duration: '1 Day',
        status: 'completed',
        icon: 'Search'
      },
      {
        id: 'sg-t2',
        step: 2,
        title: 'Submit Docs',
        description: 'Submit physical passport and Form 14A to the agent.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'UserCheck'
      },
      {
        id: 'sg-t3',
        step: 3,
        title: 'Processing',
        description: 'Agent submits to ICA. Processing takes 3-5 days.',
        duration: '3-5 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'sg-t4',
        step: 4,
        title: 'E-Visa Issued',
        description: 'Agent sends the E-Visa PDF to your email.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Mail'
      },
      {
        id: 'sg-t5',
        step: 5,
        title: 'SG Arrival Card',
        description: 'Fill SG Arrival Card online 3 days before flight.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Monitor'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Rakesh Menon',
        visaType: 'Tourist Visa',
        country: 'Kochi',
        rating: 5,
        content: 'Singapore photos are tricky! My first photo was rejected because it was glossy. The agency insisted on "matte finish" and they were right. Got the visa in 3 days.',
        avatar: 'https://i.pravatar.cc/150?u=rakesh_sg',
        avatarAlt: 'Rakesh Menon',
        date: 'Last Month',
        processingTime: '3 Days'
      },
      {
        id: 't2',
        name: 'Priya Das',
        visaType: 'Business Visa',
        country: 'Delhi',
        rating: 4,
        content: 'I needed a local sponsor for the business visa (Form V39A). My client in Singapore signed it via SingPass and it was approved instantly.',
        avatar: 'https://i.pravatar.cc/150?u=priya_sg',
        avatarAlt: 'Priya Das',
        date: '2 Months Ago',
        processingTime: '2 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Can I apply for a Singapore visa online myself?',
        answer: 'No. Indian nationals must apply through an Authorized Visa Agent (AVA) or have a local Singaporean friend/relative submit the application online using their SingPass.',
        category: 'Process'
      },
      {
        id: 'faq2',
        question: 'What is the SG Arrival Card?',
        answer: 'It is a mandatory digital form for immigration and health declaration. It is FREE and must be filled 3 days before arrival. It is NOT a visa.',
        category: 'Documents'
      },
      {
        id: 'faq3',
        question: 'Why do I need matte finish photos?',
        answer: 'The Singapore High Commission strictly requires matte or semi-matte photos to prevent glare when scanning. Glossy photos are frequently rejected.',
        category: 'Requirements'
      }
    ],
    embassyInfo: {
      name: 'Singapore High Commission',
      address: 'E-6 Chandragupta Marg, Chanakyapuri, New Delhi - 110021',
      phone: '011-4600-0800',
      email: 'singhc_del@mfa.sg',
      website: 'https://www.mfa.gov.sg/New-Delhi',
      workingHours: 'Mon-Fri 9:00 AM - 5:00 PM',
      latitude: 28.59,
      longitude: 77.18
    },
    recentUpdates: [],
    stats: {
      totalApplications: 60000,
      averageProcessingDays: 4,
      approvalRate: 99.0,
      rejectionReasons: [
        {
          reason: 'Incorrect Photo Format',
          percentage: 50,
          prevention: 'Ensure photos are 35x45mm, white background, and MATTE finish.'
        },
        {
          reason: 'Incomplete Form 14A',
          percentage: 30,
          prevention: 'Fill every field in Form 14A. Do not leave blanks; use "NA" if not applicable.'
        }
      ]
    },
    similarDestinations: ['malaysia', 'thailand', 'hong_kong']
  },
  {
    id: 'china',
    name: 'China',
    code: 'CN',
    flag: '🇨🇳',
    heroImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80',
    heroImageAlt: 'Great Wall of China',
    tagline: 'The Middle Kingdom',
    description: 'Explore the Great Wall, the Forbidden City, and the Bund. (Biometric exemption active for 2026).',
    processingTime: '4-5 business days',
    successRate: 96.5,
    pricing: {
      embassyFee: "Notify Later",
      serviceFee: 7999, // Your Agency Fee
      totalFee: 12917,
      currency: 'INR',
      refundPolicy: 'Service fee non-refundable; Gov fee non-refundable'
    },
    visaTypes: [
      {
        id: 'cn-lvisa',
        name: 'L Visa (Tourist)',
        description: 'Standard tourist visa. Single or Double entry.',
        duration: '30 Days (per entry)',
        price: 7999,
        processingTime: '4-5 Days',
        icon: 'Map'
      },
      {
        id: 'cn-mvisa',
        name: 'M Visa (Business)',
        description: 'For commercial trade activities. Requires invitation letter.',
        duration: '30-90 Days',
        price: 7999,
        processingTime: '4-5 Days',
        icon: 'Briefcase'
      }
    ],
    requirements: [
      {
        id: 'cn-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 6 months. Must have 2 blank pages.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'cn-2',
        category: 'Application',
        title: 'COVA Form',
        description: 'China Online Visa Application form. Must be filled without errors.',
        mandatory: true,
        icon: 'Monitor'
      },
      {
        id: 'cn-3',
        category: 'Identity',
        title: 'Photo (Specific)',
        description: '33x48mm, white background, no jewelry/glasses. Strict compliance required.',
        mandatory: true,
        icon: 'Camera'
      },
      {
        id: 'cn-4',
        category: 'Travel',
        title: 'Proof of Travel',
        description: 'Round-trip flight tickets and confirmed hotel vouchers covering the full stay.',
        mandatory: true,
        icon: 'Plane'
      },
      {
        id: 'cn-5',
        category: 'Financial',
        title: 'Bank Statement',
        description: 'Last 6 months statement with original bank stamp (balance ~₹1.5 Lakhs).',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'cn-6',
        category: 'Employment',
        title: 'NOC / Employment Proof',
        description: 'Leave sanction letter from employer or business registration.',
        mandatory: true,
        icon: 'Briefcase'
      }
    ],
    timeline: [
      {
        id: 'cn-t1',
        step: 1,
        title: 'COVA Application',
        description: 'Fill the form online. Upload photo. Print confirmation page.',
        duration: '1 Day',
        status: 'completed',
        icon: 'Edit'
      },
      {
        id: 'cn-t2',
        step: 2,
        title: 'Appointment',
        description: 'Book slot at Chinese Visa Application Service Center (New Delhi/Mumbai/Kolkata).',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Calendar'
      },
      {
        id: 'cn-t3',
        step: 3,
        title: 'Submission',
        description: 'Submit physical docs. (Biometrics exempted for eligible tourists in 2026).',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'UserCheck'
      },
      {
        id: 'cn-t4',
        step: 4,
        title: 'Processing',
        description: 'Embassy assesses application. Standard time is 4 days.',
        duration: '4 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'cn-t5',
        step: 5,
        title: 'Collection',
        description: 'Collect passport or receive via courier.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Package'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Suresh Iyer',
        visaType: 'L Visa (Tourist)',
        country: 'Bangalore',
        rating: 5,
        content: 'I was dreading the biometric appointment in Delhi, but the agency told me about the 2026 exemption! I didn\'t have to travel to Delhi at all. They handled everything.',
        avatar: 'https://i.pravatar.cc/150?u=suresh_cn',
        avatarAlt: 'Suresh Iyer',
        date: 'Last Month',
        processingTime: '5 Days'
      },
      {
        id: 't2',
        name: 'Meilin Gupta',
        visaType: 'M Visa',
        country: 'Mumbai',
        rating: 4,
        content: 'The photo requirements are very strict. My first photo was rejected because of earrings. But the processing speed is incredible now—got it in 4 days.',
        avatar: 'https://i.pravatar.cc/150?u=meilin_cn',
        avatarAlt: 'Meilin Gupta',
        date: '3 Months Ago',
        processingTime: '4 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Do I need to give fingerprints?',
        answer: 'For 2026, Indian nationals applying for single or double-entry tourist (L), business (M), family visit (Q2), and transit (G) visas are EXEMPT from fingerprint collection.',
        category: 'Process'
      },
      {
        id: 'faq2',
        question: 'Is the visa fee reduced?',
        answer: 'Yes, the Chinese Embassy has extended the reduced visa fee policy until December 31, 2026. The government fee is currently ₹2900 (plus service charges).',
        category: 'Fees'
      },
      {
        id: 'faq3',
        question: 'Can I use a 10-year old photo?',
        answer: 'No. China is extremely strict about photos. It must be taken within the last 6 months, white background, no jewelry, forehead visible. Old photos lead to instant rejection.',
        category: 'Requirements'
      }
    ],
    embassyInfo: {
      name: 'Chinese Visa Application Service Center (New Delhi)',
      address: 'Concourse Floor, Baba Kharak Singh Marg, Shivaji Stadium Metro Station, New Delhi - 110001',
      phone: '91-9999036735',
      email: 'delhicentre@visaforchina.org',
      website: 'https://www.visaforchina.cn/DEL3_EN/',
      workingHours: 'Mon-Fri 9:00 AM - 3:00 PM',
      latitude: 28.63,
      longitude: 77.21
    },
    recentUpdates: [
      {
        id: "1",
        date: '2026-01-04',
        title: 'Biometric Exemption Extended',
        description: 'Fingerprint exemption for short-term visas extended through Dec 31, 2026.'
      },
      {
        id: "2",
        date: '2026-01-04',
        title: 'Fee Reduction Extended',
        description: 'Reduced visa fees for Indian nationals extended through Dec 31, 2026.'
      }
    ],
    stats: {
      totalApplications: 12000,
      averageProcessingDays: 5,
      approvalRate: 96.5,
      rejectionReasons: [
        {
          reason: 'Photo Non-Compliance',
          percentage: 40,
          prevention: 'Ensure photo is recent (6 months), white background, no jewelry, and ears/forehead visible.'
        },
        {
          reason: 'Incomplete COVA Form',
          percentage: 30,
          prevention: 'The online form must cover 5-10 years of employment and travel history accurately.'
        }
      ]
    },
    similarDestinations: ['hong_kong', 'japan', 'south_korea']
  },
  {
    id: 'maldives',
    name: 'Maldives',
    code: 'MV',
    flag: '🇲🇻',
    heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80',
    heroImageAlt: 'Overwater Villas in Maldives',
    tagline: 'The Sunny Side of Life',
    description: 'Enjoy the pristine atolls with a Free Visa on Arrival. (Mandatory IMUGA form required before flight).',
    processingTime: 'Instant (On Arrival)',
    successRate: 99.9,
    pricing: {
      embassyFee: "Notify Later", // Visa is Free
      serviceFee: 0, // IMUGA is Free (DIY)
      totalFee: 0,
      currency: 'INR',
      refundPolicy: 'N/A'
    },
    visaTypes: [
      {
        id: 'mv-tourist',
        name: 'Visa on Arrival',
        description: 'Free entry for tourism. valid for 30 days.',
        duration: '30 Days (Extendable)',
        price: 0,
        processingTime: 'Instant',
        icon: 'Sun'
      },
      {
        id: 'mv-business',
        name: 'Business Visa',
        description: 'Requires prior approval from the Ministry of Economic Development.',
        duration: 'Varies',
        price: 0, // Fees vary by duration
        processingTime: '5-7 Days',
        icon: 'Briefcase'
      }
    ],
    requirements: [
      {
        id: 'mv-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for at least 6 months. Machine-readable.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'mv-2',
        category: 'Registration',
        title: 'IMUGA Form',
        description: 'MANDATORY. Fill "Traveller Declaration" on imuga.immigration.gov.mv within 96 hours of flight.',
        mandatory: true,
        icon: 'Monitor'
      },
      {
        id: 'mv-3',
        category: 'Accommodation',
        title: 'Hotel Booking',
        description: 'Confirmed reservation for the entire stay. Strictly checked.',
        mandatory: true,
        icon: 'Home'
      },
      {
        id: 'mv-4',
        category: 'Travel',
        title: 'Return Flight',
        description: 'Confirmed return/onward ticket out of Maldives.',
        mandatory: true,
        icon: 'Plane'
      },
      {
        id: 'mv-5',
        category: 'Financial',
        title: 'Proof of Funds',
        description: 'Approx $100 USD per day (Credit card/Cash). Rarely checked if hotel is prepaid.',
        mandatory: false,
        icon: 'CreditCard'
      }
    ],
    timeline: [
      {
        id: 'mv-t1',
        step: 1,
        title: 'Bookings',
        description: 'Confirm Hotel and Return Flight (Mandatory before flying).',
        duration: '1 Day',
        status: 'completed',
        icon: 'Book'
      },
      {
        id: 'mv-t2',
        step: 2,
        title: 'IMUGA Declaration',
        description: 'Fill IMUGA form online 96 hours (4 days) before travel. Save QR Code.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Monitor'
      },
      {
        id: 'mv-t3',
        step: 3,
        title: 'Arrival',
        description: 'Present Passport + IMUGA QR Code at immigration counter.',
        duration: 'Instant',
        status: 'upcoming',
        icon: 'Stamp'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Neha Gupta',
        visaType: 'Visa on Arrival',
        country: 'Delhi',
        rating: 5,
        content: 'Smooth process! I filled the IMUGA form on my phone at the Delhi airport boarding gate. Immigration in Male just scanned my passport and let me in.',
        avatar: 'https://i.pravatar.cc/150?u=neha_mv',
        avatarAlt: 'Neha Gupta',
        date: 'Last Month',
        processingTime: 'Instant'
      },
      {
        id: 't2',
        name: 'Amit Oberoi',
        visaType: 'Visa on Arrival',
        country: 'Mumbai',
        rating: 4,
        content: 'They strictly checked my return ticket. Keep a hard copy or offline PDF ready. The Green Tax was already added to my hotel bill.',
        avatar: 'https://i.pravatar.cc/150?u=amit_mv',
        avatarAlt: 'Amit Oberoi',
        date: '3 Months Ago',
        processingTime: 'Instant'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Is the visa really free?',
        answer: 'Yes. The 30-day Tourist Visa on Arrival is free of charge for Indian nationals.',
        category: 'Fees'
      },
      {
        id: 'faq2',
        question: 'What happens if I forget the IMUGA form?',
        answer: 'You will be stopped at immigration and asked to fill it on your phone/kiosk, which causes significant delays. It is best to do it before flying.',
        category: 'Process'
      },
      {
        id: 'faq3',
        question: 'Can I extend my stay?',
        answer: 'Yes, the 30-day visa can be extended up to 90 days by applying at the Immigration Head Office in Male and paying a fee (approx 750 MVR).',
        category: 'Validity'
      }
    ],
    embassyInfo: {
      name: 'High Commission of the Maldives',
      address: 'B-16, Vasant Marg, Vasant Vihar, New Delhi - 110057',
      phone: '011-4143-5701',
      email: 'admin@maldiveshighcom.in',
      website: 'https://www.maldiveshighcom.in/',
      workingHours: 'Mon-Fri 9:00 AM - 4:00 PM',
      latitude: 28.55,
      longitude: 77.16
    },
    recentUpdates: [],
    stats: {
      totalApplications: 50000,
      averageProcessingDays: 0,
      approvalRate: 99.9,
      rejectionReasons: [
        {
          reason: 'No Return Ticket',
          percentage: 80,
          prevention: 'You must have a confirmed flight out of Maldives within 30 days.'
        },
        {
          reason: 'Passport Validity',
          percentage: 15,
          prevention: 'Passport must be valid for 6 months from the date of ENTRY.'
        }
      ]
    },
    similarDestinations: ['sri_lanka', 'thailand', 'bali']
  },
  {
    id: 'philippines',
    name: 'Philippines',
    code: 'PH',
    flag: '🇵🇭',
    heroImage: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80',
    heroImageAlt: 'El Nido, Palawan',
    tagline: 'It\'s More Fun in the Philippines',
    description: 'Explore the 7,000+ islands. (New: 14-Day Visa Free Entry for Indians).',
    processingTime: 'Instant (Visa Free) / 10 Days (Sticker)',
    successRate: 98.0,
    pricing: {
      embassyFee: "Notify Later", // Visa-Free for 14 days
      serviceFee: 0, // eTravel is Free (DIY)
      totalFee: 0,
      currency: 'INR',
      refundPolicy: 'N/A'
    },
    visaTypes: [
      {
        id: 'ph-free-14',
        name: 'Visa Free Entry (14 Days)',
        description: 'Standard tourist entry. Non-convertible. Extendable by 7 days.',
        duration: '14 Days',
        price: 0,
        processingTime: 'Instant',
        icon: 'Sun'
      },
      {
        id: 'ph-ajacssuk',
        name: 'Visa Free (AJACSSUK)',
        description: '30 Days entry if holding valid US, UK, Schengen, Japan, Aus, Can, or SG visa.',
        duration: '30 Days',
        price: 0,
        processingTime: 'Instant',
        icon: 'Star'
      },
      {
        id: 'ph-sticker',
        name: 'Tourist Visa (Long Stay)',
        description: 'Paper visa for stays > 14/30 days. Apply at Embassy.',
        duration: '59 Days',
        price: 3800, // Approx
        processingTime: '10-12 Days',
        icon: 'FileText'
      }
    ],
    requirements: [
      {
        id: 'ph-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 6 months beyond stay. Must have blank pages.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'ph-2',
        category: 'Registration',
        title: 'eTravel QR Code',
        description: 'MANDATORY. Register on etravel.gov.ph 3 days before flight. Free of charge.',
        mandatory: true,
        icon: 'Monitor'
      },
      {
        id: 'ph-3',
        category: 'Travel',
        title: 'Return/Onward Ticket',
        description: 'Confirmed ticket out of Philippines within the visa-free period (14/30 days).',
        mandatory: true,
        icon: 'Plane'
      },
      {
        id: 'ph-4',
        category: 'Financial',
        title: 'Proof of Funds',
        description: 'Cash, Credit Cards, or Bank Statement showing capacity to fund the trip.',
        mandatory: false,
        icon: 'Wallet'
      },
      {
        id: 'ph-5',
        category: 'Accommodation',
        title: 'Hotel Booking',
        description: 'Proof of accommodation for the duration of stay.',
        mandatory: true,
        icon: 'Home'
      }
    ],
    timeline: [
      {
        id: 'ph-t1',
        step: 1,
        title: 'Check Eligibility',
        description: 'Determine if you qualify for 14-day or 30-day (AJACSSUK) visa-free entry.',
        duration: '1 Day',
        status: 'completed',
        icon: 'CheckCircle'
      },
      {
        id: 'ph-t2',
        step: 2,
        title: 'eTravel Registration',
        description: 'Register on eTravel portal 72 hours before flight. Save QR code.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Monitor'
      },
      {
        id: 'ph-t3',
        step: 3,
        title: 'Arrival',
        description: 'Present Passport, Return Ticket, and eTravel QR at immigration.',
        duration: 'Instant',
        status: 'upcoming',
        icon: 'Stamp'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Rohan Gupta',
        visaType: 'Visa Free (14 Days)',
        country: 'Mumbai',
        rating: 5,
        content: 'I was surprised it was actually free! Immigration asked for my return ticket and hotel booking for all 5 days. Smooth process.',
        avatar: 'https://i.pravatar.cc/150?u=rohan_ph',
        avatarAlt: 'Rohan Gupta',
        date: 'Last Month',
        processingTime: 'Instant'
      },
      {
        id: 't2',
        name: 'Sneha & Amit',
        visaType: 'Visa Free (AJACSSUK)',
        country: 'Bangalore',
        rating: 5,
        content: 'We used our valid US B1/B2 visas to get the 30-day entry. The officer checked the US visa validity and stamped us in immediately.',
        avatar: 'https://i.pravatar.cc/150?u=sneha_ph',
        avatarAlt: 'Sneha & Amit',
        date: '3 Months Ago',
        processingTime: 'Instant'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Is the 14-day entry really free?',
        answer: 'Yes. Indian nationals can enter the Philippines for up to 14 days without paying any visa fee, provided they have a return ticket and hotel booking.',
        category: 'Fees'
      },
      {
        id: 'faq2',
        question: 'What is the "AJACSSUK" privilege?',
        answer: 'It grants 30 days visa-free entry if you have a valid visa from USA, Japan, Australia, Canada, Schengen, Singapore, or UK.',
        category: 'Visa Types'
      },
      {
        id: 'faq3',
        question: 'Can I extend the 14-day visa?',
        answer: 'Yes, it is extendable ONE time for an additional 7 days (Total 21 days) at the Bureau of Immigration office in Philippines.',
        category: 'Validity'
      }
    ],
    embassyInfo: {
      name: 'Embassy of the Philippines',
      address: '50-N, Nyaya Marg, Chanakyapuri, New Delhi - 110021',
      phone: '011-2688-9091',
      email: 'newdelhi.pe@dfa.gov.ph',
      website: 'https://newdelhipe.dfa.gov.ph/',
      workingHours: 'Mon-Fri 9:00 AM - 5:00 PM',
      latitude: 28.59,
      longitude: 77.18
    },
    recentUpdates: [
      // {
      //   date: '2025-10-26',
      //   title: 'Visa Free Entry Launched',
      //   description: 'Philippines officially launches 14-day Visa Free entry for Indian nationals.'
      // }
    ],
    stats: {
      totalApplications: 6000,
      averageProcessingDays: 0,
      approvalRate: 98,
      rejectionReasons: [
        {
          reason: 'No Return Ticket',
          percentage: 70,
          prevention: 'You MUST have a confirmed ticket out of the Philippines within the 14/30 day window.'
        },
        {
          reason: 'Derogatory Record',
          percentage: 20,
          prevention: 'Previous overstays or blacklisting in the Philippines will trigger denial.'
        }
      ]
    },
    similarDestinations: ['thailand', 'indonesia', 'vietnam']
  },
  {
    id: 'cambodia',
    name: 'Cambodia',
    code: 'KH',
    flag: '🇰🇭',
    heroImage: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80',
    heroImageAlt: 'Angkor Wat at Sunrise',
    tagline: 'Kingdom of Wonder',
    description: 'Explore the ancient temples of Angkor and the vibrant streets of Phnom Penh. (Mandatory e-Arrival Card required).',
    processingTime: '3 Business Days (E-Visa)',
    successRate: 99.0,
    pricing: {
      embassyFee: "Notify Later",
      serviceFee: 0, // DIY Recommended
      totalFee: 3100,
      currency: 'INR',
      refundPolicy: 'Government fee non-refundable'
    },
    visaTypes: [
      {
        id: 'kh-evisa',
        name: 'Tourist E-Visa (Type T)',
        description: 'Online pre-approval. Skip the VoA queues.',
        duration: '30 Days',
        price: 3100, // ~$36 USD
        processingTime: '3 Days',
        icon: 'Monitor'
      },
      {
        id: 'kh-voa',
        name: 'Visa on Arrival',
        description: 'Pay cash at the counter upon landing.',
        duration: '30 Days',
        price: 2600, // $30 USD
        processingTime: 'On Arrival',
        icon: 'Stamp'
      }
    ],
    requirements: [
      {
        id: 'kh-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 6 months beyond entry. Must have 1 blank page.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'kh-2',
        category: 'Registration',
        title: 'e-Arrival Card',
        description: 'MANDATORY. Fill online within 7 days of flight. Replaces paper forms.',
        mandatory: true,
        icon: 'Phone'
      },
      {
        id: 'kh-3',
        category: 'Identity',
        title: 'Digital/Physical Photo',
        description: 'Recent passport-sized photo (white background).',
        mandatory: true,
        icon: 'Camera'
      },
      {
        id: 'kh-4',
        category: 'Financial',
        title: 'Visa Fee (Cash)',
        description: 'If using VoA, carry exactly $30 USD in crisp, new notes.',
        mandatory: false,
        icon: 'Cash'
      }
    ],
    timeline: [
      {
        id: 'kh-t1',
        step: 1,
        title: 'Apply E-Visa',
        description: 'Apply on evisa.gov.kh 1 week before trip (Recommended).',
        duration: '1 Day',
        status: 'completed',
        icon: 'Monitor'
      },
      {
        id: 'kh-t2',
        step: 2,
        title: 'e-Arrival Card',
        description: 'Submit e-Arrival form within 7 days of flight. Save QR.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'CheckCircle'
      },
      {
        id: 'kh-t3',
        step: 3,
        title: 'Arrival',
        description: 'Scan e-Arrival QR. Proceed to Immigration (or VoA counter first).',
        duration: 'Instant',
        status: 'upcoming',
        icon: 'Stamp'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Arjun Nair',
        visaType: 'E-Visa',
        country: 'Bangalore',
        rating: 5,
        content: 'I highly recommend the E-Visa. The VoA line at Siem Reap was huge, but I just walked through with my printed E-Visa. Don\'t forget the e-Arrival QR code!',
        avatar: 'https://i.pravatar.cc/150?u=arjun_kh',
        avatarAlt: 'Arjun Nair',
        date: 'Last Month',
        processingTime: '3 Days'
      },
      {
        id: 't2',
        name: 'Meena Iyer',
        visaType: 'Visa on Arrival',
        country: 'Chennai',
        rating: 4,
        content: 'I did Visa on Arrival. It was easy but they are strict about dollar bills. One of my $20 notes had a tiny tear and they rejected it. Carry extra cash.',
        avatar: 'https://i.pravatar.cc/150?u=meena_kh',
        avatarAlt: 'Meena Iyer',
        date: '3 Months Ago',
        processingTime: '45 Mins'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Is the e-Arrival Card a visa?',
        answer: 'No. The e-Arrival Card is just for immigration/customs declaration. You STILL need a valid Visa (E-Visa or VoA) to enter.',
        category: 'Documents'
      },
      {
        id: 'faq2',
        question: 'Can I pay VoA in Indian Rupees?',
        answer: 'No. The Visa on Arrival fee ($30) must be paid in US Dollars only. Indian Rupees or Cambodian Riel are usually not accepted for the visa fee.',
        category: 'Fees'
      },
      {
        id: 'faq3',
        question: 'Which land borders accept E-Visa?',
        answer: 'The E-Visa is accepted at major borders like Bavet (Vietnam) and Poipet (Thailand), but not all remote crossings. Check the specific border before traveling overland.',
        category: 'Travel'
      }
    ],
    embassyInfo: {
      name: 'Royal Embassy of Cambodia',
      address: 'W-112, Greater Kailash Part II, New Delhi - 110048',
      phone: '011-2921-4436',
      email: 'camemb.ind@mfaic.gov.kh',
      website: 'https://www.mfaic.gov.kh/',
      workingHours: 'Mon-Fri 9:00 AM - 5:00 PM',
      latitude: 28.53,
      longitude: 77.24
    },
    recentUpdates: [
      // {
      //   date: '2024-09-01',
      //   title: 'e-Arrival Card Mandatory',
      //   description: 'Paper immigration forms discontinued. All air passengers must use the digital e-Arrival system.'
      // }
    ],
    stats: {
      totalApplications: 40000,
      averageProcessingDays: 3,
      approvalRate: 99.0,
      rejectionReasons: [
        {
          reason: 'Incorrect Passport Data',
          percentage: 70,
          prevention: 'E-Visa details must match passport exactly. Typos invalidate the visa.'
        },
        {
          reason: 'Damaged Currency (VoA)',
          percentage: 20,
          prevention: 'Carry crisp, new US Dollar notes. Old, torn, or marked bills are rejected.'
        }
      ]
    },
    similarDestinations: ['vietnam', 'thailand', 'laos']
  },
  {
    id: 'hong_kong',
    name: 'Hong Kong',
    code: 'HK',
    flag: '🇭🇰',
    heroImage: 'https://media.istockphoto.com/id/629604122/photo/cityscape-hong-kong-and-junkboat-at-twilight.jpg?s=612x612&w=0&k=20&c=iQGOvCiYdXQW-k6_uUJfvYXpJiSmQj-WCOXXOpXy1iE=',
    heroImageAlt: 'Victoria Harbour Skyline',
    tagline: 'Asia\'s World City',
    description: '14-day Visa-Free entry for Indian nationals. Mandatory Pre-arrival Registration (PAR) required.',
    processingTime: 'Instant (PAR)',
    successRate: 99.0,
    pricing: {
      embassyFee: "Notify Later", // PAR is Free
      serviceFee: 0, // DIY is highly recommended
      totalFee: 0,
      currency: 'INR',
      refundPolicy: 'N/A'
    },
    visaTypes: [
      {
        id: 'hk-par',
        name: 'Pre-arrival Registration (PAR)',
        description: 'Mandatory registration for Indians. Valid for 6 months, multiple entries of 14 days.',
        duration: '14 Days (per entry)',
        price: 0,
        processingTime: 'Instant',
        icon: 'Globe'
      },
      {
        id: 'hk-visa',
        name: 'Entry Visa (If PAR Fails)',
        description: 'Paper visa required only if PAR is rejected. Complex process.',
        duration: 'Varies',
        price: 4500, // Approx consular fee
        processingTime: '4-6 Weeks',
        icon: 'FileText'
      }
    ],
    requirements: [
      {
        id: 'hk-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for at least 6 months. Must have 1 blank page.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'hk-2',
        category: 'Registration',
        title: 'PAR Notification Slip',
        description: 'MANDATORY. Printed on A4 white paper and signed by the applicant.',
        mandatory: true,
        icon: 'Printer'
      },
      {
        id: 'hk-3',
        category: 'Travel',
        title: 'Return Flight',
        description: 'Confirmed return or onward ticket.',
        mandatory: true,
        icon: 'Plane'
      },
      {
        id: 'hk-4',
        category: 'Financial',
        title: 'Proof of Funds',
        description: 'Cash or credit cards to cover the stay (Random checks).',
        mandatory: false,
        icon: 'Wallet'
      }
    ],
    timeline: [
      {
        id: 'hk-t1',
        step: 1,
        title: 'Apply Online',
        description: 'Fill PAR form on GovHK website. Data must match passport 100%.',
        duration: '1 Day',
        status: 'completed',
        icon: 'Monitor'
      },
      {
        id: 'hk-t2',
        step: 2,
        title: 'Result',
        description: 'Immediate result. If "Successful", download PDF.',
        duration: 'Instant',
        status: 'upcoming',
        icon: 'CheckCircle'
      },
      {
        id: 'hk-t3',
        step: 3,
        title: 'Print & Sign',
        description: 'Print "Notification Slip" on A4 paper. Sign it.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'PenTool'
      },
      {
        id: 'hk-t4',
        step: 4,
        title: 'Arrival',
        description: 'Present Passport + Signed PAR Slip at immigration counters.',
        duration: 'Instant',
        status: 'upcoming',
        icon: 'Stamp'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Aditi Rao',
        visaType: 'PAR',
        country: 'Bangalore',
        rating: 5,
        content: 'I did the PAR myself in 10 minutes. It was free and instant. Just make sure you print it out—I saw someone get sent back to print theirs!',
        avatar: 'https://i.pravatar.cc/150?u=aditi_hk',
        avatarAlt: 'Aditi Rao',
        date: 'Last Month',
        processingTime: 'Instant'
      },
      {
        id: 't2',
        name: 'Rajiv Malhotra',
        visaType: 'Entry Visa',
        country: 'Delhi',
        rating: 3,
        content: 'My PAR failed because I had a previous overstay years ago. I had to apply for a proper visa at the Chinese Embassy. It took 5 weeks. Nightmare.',
        avatar: 'https://i.pravatar.cc/150?u=rajiv_hk',
        avatarAlt: 'Rajiv Malhotra',
        date: '4 Months Ago',
        processingTime: '35 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Is PAR a visa?',
        answer: 'No. Indians are visa-free. PAR is just a registration. However, without a successful PAR, you cannot board the flight.',
        category: 'Visa Types'
      },
      {
        id: 'faq2',
        question: 'What happens if my PAR is unsuccessful?',
        answer: 'You CANNOT appeal. You must apply for a formal entry visa at the Chinese Embassy/Consulate, which requires supporting docs and takes weeks.',
        category: 'Process'
      },
      {
        id: 'faq3',
        question: 'Do I need to sign the slip?',
        answer: 'Yes. You must sign the printed PAR notification slip. The signature should match your passport signature.',
        category: 'Documents'
      }
    ],
    embassyInfo: {
      name: 'Chinese Visa Application Service Center (New Delhi)',
      address: 'Concourse Floor, Baba Kharak Singh Marg, Shivaji Stadium Metro Station, New Delhi - 110001',
      phone: '91-9999036735',
      email: 'delhicentre@visaforchina.org',
      website: 'https://www.visaforchina.cn/DEL3_EN/',
      workingHours: 'Mon-Fri 9:00 AM - 3:00 PM',
      latitude: 28.63,
      longitude: 77.21
    },
    recentUpdates: [],
    stats: {
      totalApplications: 15000,
      averageProcessingDays: 0,
      approvalRate: 99.0,
      rejectionReasons: [
        {
          reason: 'Data Mismatch',
          percentage: 80,
          prevention: 'Passport number or name spelling does not match exactly. Even one digit error causes failure.'
        },
        {
          reason: 'Previous Adverse Record',
          percentage: 20,
          prevention: 'Any history of overstay or denial in HK will likely trigger a PAR failure.'
        }
      ]
    },
    similarDestinations: ['macau', 'singapore', 'japan']
  },

  // =========================================================================
  // 5. MIDDLE EAST
  // =========================================================================
  {
    id: 'dubai',
    name: 'United Arab Emirates',
    code: 'AE',
    flag: '🇦🇪',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80',
    heroImageAlt: 'Dubai Burj Khalifa Skyline',
    tagline: 'The Future is Here',
    description: 'Visit Dubai, Abu Dhabi, and beyond. (Visa on Arrival available for US/UK/EU/Aus/Can visa holders).',
    processingTime: '2-4 Working Days',
    successRate: 99.0,
    pricing: {
      embassyFee: '6500', // Approx ~280-300 AED (Sponsored Rate)
      serviceFee: 1499, // Agency Processing Fee
      totalFee: 7999,
      currency: 'INR',
      refundPolicy: 'Fees are non-refundable once applied'
    },
    visaTypes: [
      {
        id: 'ae-30-single',
        name: '30 Days Tourist Visa',
        description: 'Standard single-entry visa for tourism. Valid for 60 days from issue.',
        duration: '30 Days',
        price: 7999,
        processingTime: '2-4 Days',
        icon: 'Building'
      },
      {
        id: 'ae-60-single',
        name: '60 Days Tourist Visa',
        description: 'Longer stay single-entry visa. Popular for family visits.',
        duration: '60 Days',
        price: 13999,
        processingTime: '2-4 Days',
        icon: 'Sun'
      },
      {
        id: 'ae-48-transit',
        name: '48-Hour Transit',
        description: 'Strictly for layovers less than 48 hours.',
        duration: '48 Hours',
        price: 3500,
        processingTime: '2-3 Days',
        icon: 'Clock'
      },
      {
        id: 'ae-5yr-multi',
        name: '5-Year Multiple Entry',
        description: 'Self-sponsored. Requires $4,000 bank balance proof.',
        duration: '90 Days (per entry)',
        price: 35000, // High cost due to insurance & processing
        processingTime: '10-15 Days',
        icon: 'Star'
      }
    ],
    requirements: [
      {
        id: 'ae-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 6 months. MUST have separate Given Name and Surname.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'ae-2',
        category: 'Identity',
        title: 'Digital Photo',
        description: 'Recent color photo with white background. No glasses.',
        mandatory: true,
        icon: 'Camera'
      },
      {
        id: 'ae-3',
        category: 'Identity',
        title: 'PAN Card',
        description: 'Mandatory for Indian nationals for payment/LRS tracking.',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'ae-4',
        category: 'Travel',
        title: 'Return Flight Ticket',
        description: 'Confirmed return ticket. Airlines often deny boarding without it.',
        mandatory: true,
        icon: 'Plane'
      },
      {
        id: 'ae-5',
        category: 'Financial',
        title: 'Solvency Proof',
        description: 'Required for solo travelers <25 years or 5-Year Visa applicants ($4k balance).',
        mandatory: false,
        icon: 'Wallet'
      }
    ],
    timeline: [
      {
        id: 'ae-t1',
        step: 1,
        title: 'Apply',
        description: 'Submit passport copy and photo to agency/airline.',
        duration: '1 Day',
        status: 'completed',
        icon: 'Monitor'
      },
      {
        id: 'ae-t2',
        step: 2,
        title: 'Processing',
        description: 'Sponsor applies at GDRFA/ICP. Security check performed.',
        duration: '2-3 Days',
        status: 'upcoming',
        icon: 'Shield'
      },
      {
        id: 'ae-t3',
        step: 3,
        title: 'Approval',
        description: 'E-Visa PDF issued. Print color copy.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'FileCheck'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Kabir Khan',
        visaType: 'Visa on Arrival',
        country: 'Mumbai',
        rating: 5,
        content: 'I have a US Tourist Visa. I just landed in Dubai, showed my US visa, paid 120 Dirhams, and got stamped in. No prior application needed!',
        avatar: 'https://i.pravatar.cc/150?u=kabir_ae',
        avatarAlt: 'Kabir Khan',
        date: 'Last Month',
        processingTime: 'Instant'
      },
      {
        id: 't2',
        name: 'Pooja Sharma',
        visaType: '30 Days Tourist',
        country: 'Delhi',
        rating: 5,
        content: 'I was worried because my passport only has a single name field. The agency warned me to fix it. I got "Waitlisted" briefly but it cleared.',
        avatar: 'https://i.pravatar.cc/150?u=pooja_ae',
        avatarAlt: 'Pooja Sharma',
        date: '2 Months Ago',
        processingTime: '4 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Do I qualify for Visa on Arrival?',
        answer: 'Yes, IF you hold a valid visa or residence permit from USA, UK, EU (Schengen), Australia, Canada, New Zealand, Japan, Singapore, or South Korea.',
        category: 'Eligibility'
      },
      {
        id: 'faq2',
        question: 'Why was my visa rejected?',
        answer: 'Common reasons: Unclear photo, "Unskilled" profession on passport (e.g., Laborer/Farmer) without strong financial proof, or single name on passport.',
        category: 'Rejection'
      },
      {
        id: 'faq3',
        question: 'What is the "Single Name" rule?',
        answer: 'Passengers with only one name (e.g., "Rahul") on their passport are inadmissible. You must have both "Given Name" and "Surname" fields populated.',
        category: 'Documents'
      }
    ],
    embassyInfo: {
      name: 'Embassy of the UAE',
      address: '12, Chandragupta Marg, Chanakyapuri, New Delhi - 110021',
      phone: '011-2611-1111',
      email: 'newdelhi@mofaic.gov.ae',
      website: 'https://www.mofa.gov.ae/',
      workingHours: 'Mon-Fri 9:00 AM - 4:00 PM',
      latitude: 28.60,
      longitude: 77.18
    },
    recentUpdates: [
      // {
      //   date: '2026-01-10',
      //   title: 'VoA Expanded',
      //   description: 'Visa on Arrival facility extended to valid visa holders of Australia, Canada, Japan, and South Korea.'
      // }
    ],
    stats: {
      totalApplications: 80000,
      averageProcessingDays: 3,
      approvalRate: 99.0,
      rejectionReasons: [
        {
          reason: 'Single Name on Passport',
          percentage: 40,
          prevention: 'Ensure your passport has both First and Last names. If not, get a "Name Correction" endorsement.'
        },
        {
          reason: 'Blurred/Old Photo',
          percentage: 30,
          prevention: 'Upload a studio-quality scan of a photo taken within the last 3 months.'
        }
      ]
    },
    similarDestinations: ['qatar', 'oman', 'saudi_arabia']
  },
  {
    id: 'saudi_arabia',
    name: 'Saudi Arabia',
    code: 'SA',
    flag: '🇸🇦',
    heroImage: 'https://zamzam.com/blog/wp-content/uploads/2021/08/shutterstock_1929685586.jpg',
    heroImageAlt: 'Kingdom Centre, Riyadh',
    tagline: 'Welcome to Arabia',
    description: 'Explore AlUla, Jeddah, and Riyadh. Perform Umrah on a Tourist Visa. (Conditional E-Visa or Tasheer Sticker).',
    processingTime: 'Instant (E-Visa) / 5-7 Days (Sticker)',
    successRate: 95.0,
    pricing: {
      embassyFee: "Notify Later",
      serviceFee: 2500, // Agency/Tasheer Service Fee
      totalFee: 13000,
      currency: 'INR',
      refundPolicy: 'Government fees & Insurance non-refundable'
    },
    visaTypes: [
      {
        id: 'sa-evisa-cond',
        name: 'E-Visa (Conditional)',
        description: 'ONLY for Indians with valid US/UK/Schengen visas. Instant approval.',
        duration: '90 Days (Multiple Entry)',
        price: 11500, // ~480 SAR total
        processingTime: 'Instant',
        icon: 'Globe'
      },
      {
        id: 'sa-sticker',
        name: 'Tourist Sticker Visa',
        description: 'For regular passport holders. Requires physical submission at Tasheer Center.',
        duration: '90 Days (Single/Multiple)',
        price: 13000,
        processingTime: '5-7 Days',
        icon: 'FileText'
      },
      {
        id: 'sa-stopover',
        name: 'Stopover Visa (Transit)',
        description: 'Valid for 96 hours. Available when booking via Saudiia/Flynas.',
        duration: '96 Hours',
        price: 2500, // Administrative/Insurance fee
        processingTime: 'Instant',
        icon: 'Clock'
      }
    ],
    requirements: [
      {
        id: 'sa-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 6 months. Must have 2 blank pages.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'sa-2',
        category: 'Identity',
        title: 'Digital/Physical Photo',
        description: 'White background. Ladies do not need to cover head in photo (for visa).',
        mandatory: true,
        icon: 'Camera'
      },
      {
        id: 'sa-3',
        category: 'Eligibility',
        title: 'Supporting Visa (For E-Visa)',
        description: 'Valid US, UK, or Schengen visa that has been used at least once.',
        mandatory: false,
        icon: 'CheckSquare'
      },
      {
        id: 'sa-4',
        category: 'Financial',
        title: 'Bank Statement',
        description: 'Required for Sticker Visa only. Last 3 months proof of funds.',
        mandatory: false,
        icon: 'CreditCard'
      },
      {
        id: 'sa-5',
        category: 'Employment',
        title: 'Employment Proof',
        description: 'Salary slip or business registration (For Sticker Visa).',
        mandatory: false,
        icon: 'Briefcase'
      }
    ],
    timeline: [
      {
        id: 'sa-t1',
        step: 1,
        title: 'Determine Type',
        description: 'Do you have US/UK/EU visa? Yes = E-Visa. No = Tasheer Appointment.',
        duration: '1 Day',
        status: 'completed',
        icon: 'HelpCircle'
      },
      {
        id: 'sa-t2',
        step: 2,
        title: 'Application/Appointment',
        description: 'Apply online (E-Visa) OR book biometrics slot at Tasheer (Sticker).',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Calendar'
      },
      {
        id: 'sa-t3',
        step: 3,
        title: 'Submission',
        description: 'Submit docs. E-Visa is instant. Sticker requires passport drop.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'UserCheck'
      },
      {
        id: 'sa-t4',
        step: 4,
        title: 'Issuance',
        description: 'Receive E-Visa by email or collect stamped passport.',
        duration: '1-5 Days',
        status: 'upcoming',
        icon: 'Mail'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Zaid Ahmed',
        visaType: 'E-Visa (Conditional)',
        country: 'Hyderabad',
        rating: 5,
        content: 'I had a UK tourist visa. Used it to apply for Saudi E-Visa on the official "KSA Visa" platform. Got it in 10 minutes! Performed Umrah easily.',
        avatar: 'https://i.pravatar.cc/150?u=zaid_sa',
        avatarAlt: 'Zaid Ahmed',
        date: 'Last Month',
        processingTime: '10 Mins'
      },
      {
        id: 't2',
        name: 'Fatima Begum',
        visaType: 'Sticker Visa',
        country: 'Mumbai',
        rating: 4,
        content: 'I didn\'t have a western visa, so I had to go to the Tasheer center in Mumbai. The biometrics line was long, but the visa came in 5 days.',
        avatar: 'https://i.pravatar.cc/150?u=fatima_sa',
        avatarAlt: 'Fatima Begum',
        date: '3 Months Ago',
        processingTime: '5 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Can I perform Umrah on a Tourist Visa?',
        answer: 'YES. You do not need a specific "Umrah Visa" anymore. The tourist visa allows Umrah, tourism, and visiting family. However, Hajj is NOT allowed.',
        category: 'Visa Types'
      },
      {
        id: 'faq2',
        question: 'Who qualifies for the E-Visa?',
        answer: 'Only Indian nationals who hold a valid, used visa from the US, UK, or Schengen area, OR are permanent residents of those countries/GCC.',
        category: 'Eligibility'
      },
      {
        id: 'faq3',
        question: 'Is insurance mandatory?',
        answer: 'Yes, the visa fee includes a mandatory medical insurance premium for COVID-19 and other emergencies.',
        category: 'Fees'
      }
    ],
    embassyInfo: {
      name: 'Royal Embassy of Saudi Arabia',
      address: '2, Paschimi Marg, Vasant Vihar, New Delhi - 110057',
      phone: '011-4324-4444',
      email: 'inemb@mofa.gov.sa',
      website: 'https://embassies.mofa.gov.sa/sites/india/',
      workingHours: 'Mon-Fri 9:00 AM - 4:00 PM',
      latitude: 28.55,
      longitude: 77.16
    },
    recentUpdates: [
      // {
      //   date: '2025-11-01',
      //   title: 'Umrah on Any Visa',
      //   description: 'Authorities confirm Umrah can be performed on Tourist, Business, and Family Visit visas.'
      // }
    ],
    stats: {
      totalApplications: 60000,
      averageProcessingDays: 5,
      approvalRate: 95.0,
      rejectionReasons: [
        {
          reason: 'Ineligible for E-Visa',
          percentage: 60,
          prevention: 'Do not apply for E-Visa if you don\'t have a US/UK/Schengen visa. You will be rejected without refund. Use Tasheer instead.'
        },
        {
          reason: 'Profession mismatch',
          percentage: 20,
          prevention: 'For Sticker Visas, ensure your employment letter matches the profession in the application.'
        }
      ]
    },
    similarDestinations: ['oman', 'qatar', 'dubai']
  },
  {
    id: 'qatar',
    name: 'Qatar',
    code: 'QA',
    flag: '🇶🇦',
    heroImage: 'https://media.cnn.com/api/v1/images/stellar/prod/230414125123-03-lusail-qatar-katara-towers.jpg?c=original',
    heroImageAlt: 'Doha Corniche and Skyline',
    tagline: 'World\'s Best Airline & Airport',
    description: 'Experience the Museum of Islamic Art, Souq Waqif, and luxury shopping. (All visas processed via Hayya Platform).',
    processingTime: '3-7 Working Days',
    successRate: 94.0,
    pricing: {
      embassyFee: "Notify Later",
      serviceFee: 1999, // Agency Processing Fee
      totalFee: 5499,
      currency: 'INR',
      refundPolicy: 'Government fees & Insurance non-refundable'
    },
    visaTypes: [
      {
        id: 'qa-hayya-a1',
        name: 'Hayya Tourist Visa (A1)',
        description: 'Standard tourist visa for those without Western visas. Applied online.',
        duration: '30 Days',
        price: 5499,
        processingTime: '5-7 Days',
        icon: 'Monitor'
      },
      {
        id: 'qa-voa-cond',
        name: 'Visa on Arrival (Conditional)',
        description: 'Only for US/UK/Schengen/Aus/Can/NZ visa holders. Requires Discover Qatar hotel.',
        duration: '30 Days',
        price: 2300, // ~100 QAR paid at airport
        processingTime: 'On Arrival',
        icon: 'Stamp'
      },
      {
        id: 'qa-gcc',
        name: 'GCC Resident Visa (A2)',
        description: 'For residents of UAE, Saudi, Kuwait, Oman, Bahrain.',
        duration: '30 Days',
        price: 3500, // ~100 QAR + Insurance
        processingTime: '3-5 Days',
        icon: 'Briefcase'
      }
    ],
    requirements: [
      {
        id: 'qa-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 6 months. Must have 2 blank pages.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'qa-2',
        category: 'Insurance',
        title: 'Mandatory Health Insurance',
        description: 'Must buy policy from MoPH approved vendors (e.g., QLM, Alkoot) for 50 QAR.',
        mandatory: true,
        icon: 'Shield'
      },
      {
        id: 'qa-3',
        category: 'Accommodation',
        title: 'Hotel Booking',
        description: 'Discover Qatar booking is mandatory for VoA. Standard booking ok for Hayya A1.',
        mandatory: true,
        icon: 'Home'
      },
      {
        id: 'qa-4',
        category: 'Financial',
        title: 'Proof of Funds',
        description: 'Min $1000 USD (approx ₹85,000) in bank account or credit card limit.',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'qa-5',
        category: 'Identity',
        title: 'Digital Photo',
        description: 'Passport size, white background. (For Hayya application).',
        mandatory: true,
        icon: 'Camera'
      }
    ],
    timeline: [
      {
        id: 'qa-t1',
        step: 1,
        title: 'Hayya Registration',
        description: 'Create account on Hayya Portal or App. Upload Passport/Photo.',
        duration: '1 Day',
        status: 'completed',
        icon: 'Monitor'
      },
      {
        id: 'qa-t2',
        step: 2,
        title: 'Insurance',
        description: 'Purchase mandatory health insurance (50 QAR) online.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Shield'
      },
      {
        id: 'qa-t3',
        step: 3,
        title: 'Processing',
        description: 'Pay 100 QAR visa fee. Wait for "Hayya Entry Visa" approval.',
        duration: '3-7 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'qa-t4',
        step: 4,
        title: 'Arrival',
        description: 'Show Hayya QR Code and Insurance at immigration.',
        duration: 'Instant',
        status: 'upcoming',
        icon: 'Stamp'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Sameer Khan',
        visaType: 'Hayya Tourist (A1)',
        country: 'Mumbai',
        rating: 5,
        content: 'The Hayya app is super smooth. I applied on Monday, bought the insurance for 50 Riyals, and got the approval on Thursday. No embassy visits needed.',
        avatar: 'https://i.pravatar.cc/150?u=sameer_qa',
        avatarAlt: 'Sameer Khan',
        date: 'Last Month',
        processingTime: '4 Days'
      },
      {
        id: 't2',
        name: 'Ananya Roy',
        visaType: 'Visa on Arrival',
        country: 'Bangalore',
        rating: 4,
        content: 'I have a UK visa, so I opted for VoA. They STRICTLY checked my hotel booking from "Discover Qatar". My Booking.com voucher was rejected, so be careful!',
        avatar: 'https://i.pravatar.cc/150?u=ananya_qa',
        avatarAlt: 'Ananya Roy',
        date: '3 Months Ago',
        processingTime: 'Instant'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Is Hayya mandatory for everyone?',
        answer: 'Yes. Even if you are eligible for Visa on Arrival, registering on Hayya beforehand makes immigration much faster, though A1 applicants MUST use it.',
        category: 'Process'
      },
      {
        id: 'faq2',
        question: 'Can I use a normal hotel booking?',
        answer: 'For Hayya A1 Tourist Visa, regular bookings (Booking.com/Agoda) are usually fine. However, for "Visa on Arrival" (using US/UK visa), you generally need a "Discover Qatar" hotel voucher.',
        category: 'Accommodation'
      },
      {
        id: 'faq3',
        question: 'What is the insurance cost?',
        answer: 'The mandatory Visitor Health Insurance premium is fixed at 50 QAR per month by the Ministry of Public Health.',
        category: 'Fees'
      }
    ],
    embassyInfo: {
      name: 'Embassy of the State of Qatar',
      address: 'EP-31A, Chandragupta Marg, Chanakyapuri, New Delhi - 110021',
      phone: '011-2611-7988',
      email: 'newdelhi@mofa.gov.qa',
      website: 'https://newdelhi.embassy.qa/',
      workingHours: 'Mon-Fri 9:00 AM - 4:00 PM',
      latitude: 28.59,
      longitude: 77.18
    },
    recentUpdates: [
      {
        id: 'qa-update-1',
        date: '2025-02-01',
        title: 'Mandatory Insurance',
        description: 'Health insurance policy (50 QAR) required for all visitors before entry.',
        impact: 'neutral',
        icon: 'Shield'
      }
    ],
    stats: {
      totalApplications: 15000,
      averageProcessingDays: 5,
      approvalRate: 94.0,
      rejectionReasons: [
        {
          reason: 'Accommodation Mismatch',
          percentage: 50,
          prevention: 'For VoA, ensure hotel is booked via Discover Qatar. For Hayya, ensure dates match flight tickets exactly.'
        },
        {
          reason: 'Insufficient Funds',
          percentage: 30,
          prevention: 'Carry proof of $1000 USD (credit card statement or cash).'
        }
      ]
    },
    similarDestinations: ['dubai', 'oman', 'saudi_arabia']
  },
  {
    id: 'oman',
    name: 'Oman',
    code: 'OM',
    flag: '🇴🇲',
    heroImage: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?auto=format&fit=crop&q=80',
    heroImageAlt: 'Mutrah Corniche, Muscat',
    tagline: 'Beauty Has An Address',
    description: 'Experience the wadis, deserts, and coastline. (14-Day Visa Free for US/UK/Schengen visa holders).',
    processingTime: '4-7 Working Days',
    successRate: 96.0,
    pricing: {
      embassyFee: '4400', // ~20 OMR (30 Days) or 0 (Conditional 14 Days)
      serviceFee: 1999, // Agency Fee for Sponsored Visa
      totalFee: 6399,
      currency: 'INR',
      refundPolicy: 'Government fees are non-refundable'
    },
    visaTypes: [
      {
        id: 'om-free-cond',
        name: '14-Day Visa Free (Conditional)',
        description: 'Free entry for Indians holding valid US, UK, Schengen, Can, Aus, or Japan visa.',
        duration: '14 Days',
        price: 0,
        processingTime: 'Instant',
        icon: 'Star'
      },
      {
        id: 'om-30-sponsored',
        name: '30-Day Sponsored Visa',
        description: 'For general tourists without western visas. Applied via agency.',
        duration: '30 Days',
        price: 6400, // ~20 OMR + Service
        processingTime: '4-5 Days',
        icon: 'FileText'
      },
      {
        id: 'om-10-days',
        name: '10-Day Tourist Visa (26A)',
        description: 'Short stay visa. 5 OMR fee. Often restricted to conditional applicants.',
        duration: '10 Days',
        price: 1100, // ~5 OMR
        processingTime: '2-3 Days',
        icon: 'Clock'
      }
    ],
    requirements: [
      {
        id: 'om-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 6 months. Must have 2 blank pages.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'om-2',
        category: 'Identity',
        title: 'Digital Photo',
        description: 'White background, no glasses.',
        mandatory: true,
        icon: 'Camera'
      },
      {
        id: 'om-3',
        category: 'Travel',
        title: 'Return Flight',
        description: 'Confirmed return ticket within the visa duration.',
        mandatory: true,
        icon: 'Plane'
      },
      {
        id: 'om-4',
        category: 'Accommodation',
        title: 'Hotel Booking',
        description: 'Confirmed hotel reservation. Mandatory for Visa-Free entry.',
        mandatory: true,
        icon: 'Home'
      },
      {
        id: 'om-5',
        category: 'Eligibility',
        title: 'Supporting Visa (For Free Entry)',
        description: 'Valid US/UK/Schengen/Aus/Can/Jap visa scan.',
        mandatory: false,
        icon: 'CheckSquare'
      }
    ],
    timeline: [
      {
        id: 'om-t1',
        step: 1,
        title: 'Check Eligibility',
        description: 'Do you have a Western visa? Yes = Free/Instant. No = Find Sponsor.',
        duration: '1 Day',
        status: 'completed',
        icon: 'HelpCircle'
      },
      {
        id: 'om-t2',
        step: 2,
        title: 'Apply / Travel',
        description: 'Sponsored: Agency applies. Conditional: Fly directly.',
        duration: '1-5 Days',
        status: 'upcoming',
        icon: 'Plane'
      },
      {
        id: 'om-t3',
        step: 3,
        title: 'Arrival',
        description: 'Immigration check. Show hotel and return ticket.',
        duration: 'Instant',
        status: 'upcoming',
        icon: 'Stamp'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Naveen Kumar',
        visaType: '14-Day Free',
        country: 'Kochi',
        rating: 5,
        content: 'I have a Canada student visa. I stopped in Muscat for 5 days. Immigration just checked my Canada visa and hotel booking, then stamped me in for free.',
        avatar: 'https://i.pravatar.cc/150?u=naveen_om',
        avatarAlt: 'Naveen Kumar',
        date: 'Last Month',
        processingTime: 'Instant'
      },
      {
        id: 't2',
        name: 'Deepa Sharma',
        visaType: 'Sponsored Visa',
        country: 'Delhi',
        rating: 4,
        content: 'I didn\'t have a US visa, so I applied through a travel agent in Muscat. Cost me about ₹6500 total. Got the PDF in 4 days.',
        avatar: 'https://i.pravatar.cc/150?u=deepa_om',
        avatarAlt: 'Deepa Sharma',
        date: '3 Months Ago',
        processingTime: '4 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Is the 14-day entry completely free?',
        answer: 'Yes, if you hold a valid visa/residence from the USA, UK, Canada, Australia, Japan, or Schengen countries, the 14-day entry is visa-free.',
        category: 'Fees'
      },
      {
        id: 'faq2',
        question: 'Can I apply for an eVisa myself?',
        answer: 'Only if you are in the "Conditional" category (have Western visa). If not, you generally cannot apply for the "Unsponsored" tourist visa 26B and must use a licensed tour agency.',
        category: 'Process'
      },
      {
        id: 'faq3',
        question: 'Is health insurance mandatory?',
        answer: 'It is highly recommended and often asked for at immigration, though enforcement varies.',
        category: 'Documents'
      }
    ],
    embassyInfo: {
      name: 'Embassy of the Sultanate of Oman',
      address: 'EP-10 & 11, Chandragupta Marg, Chanakyapuri, New Delhi - 110021',
      phone: '011-2688-5622',
      email: 'newdelhi@fm.gov.om',
      website: 'https://fm.gov.om/newdelhi',
      workingHours: 'Mon-Fri 9:00 AM - 4:00 PM',
      latitude: 28.59,
      longitude: 77.18
    },
    recentUpdates: [
      {
        id: 'om-update-1',
        date: '2025-06-15',
        title: '14-Day Visa Free Rules',
        description: 'Oman clarifies that 14-day visa-free entry is strictly for those with valid US, UK, Schengen, CAN, AUS, or JPN visas.',
        impact: 'neutral',
        icon: 'FileText'
      }
    ],
    stats: {
      totalApplications: 12000,
      averageProcessingDays: 5,
      approvalRate: 96.0,
      rejectionReasons: [
        {
          reason: 'No Sponsor (General Category)',
          percentage: 70,
          prevention: 'If you don\'t have a Western visa, DO NOT try to self-apply for the nonsponsored visa. Use an agency.'
        },
        {
          reason: 'Expired Supporting Visa',
          percentage: 20,
          prevention: 'Your US/UK/Schengen visa must be valid at the time of entry into Oman.'
        }
      ]
    },
    similarDestinations: ['dubai', 'qatar', 'saudi_arabia']
  },
  {
    id: 'bahrain',
    name: 'Bahrain',
    code: 'BH',
    flag: '🇧🇭',
    heroImage: 'https://media.istockphoto.com/id/925742498/photo/skyline-of-manama-at-sunset-the-kingdom-of-bahrain.jpg?s=612x612&w=0&k=20&c=_pkBUJ9lLXNOtMvbpLzuT1bxACFHcPA06nGq6wg7a7A=',
    heroImageAlt: 'Manama Skyline and World Trade Center',
    tagline: 'Oasis of the Gulf',
    description: 'Explore the Dilmun history and modern Manama. (Strict bank balance check for eVisa).',
    processingTime: '3-5 Business Days',
    successRate: 97.0,
    pricing: {
      embassyFee: "6500", // ~29 BD (Application + Issuance for 1 Year Visa)
      serviceFee: 1499, // Agency Fee
      totalFee: 7999,
      currency: 'INR',
      refundPolicy: 'Application fee (4 BD) is non-refundable; Issuance fee refundable if rejected'
    },
    visaTypes: [
      {
        id: 'bh-1year-multi',
        name: '1 Year Multiple Entry',
        description: 'Most popular tourist visa. Allows multiple entries, up to 90 days stay per visit.',
        duration: '90 Days (per visit)',
        price: 7999, // ~29 BD Govt Fee + Service
        processingTime: '3-5 Days',
        icon: 'Globe'
      },
      {
        id: 'bh-2weeks-single',
        name: '2 Weeks Single Entry',
        description: 'Short stay visa for quick trips.',
        duration: '14 Days',
        price: 4500, // ~9 BD Govt Fee + Service
        processingTime: '3-5 Days',
        icon: 'Island'
      },
      {
        id: 'bh-voa-cond',
        name: 'Visa on Arrival (Conditional)',
        description: 'Only for US/UK/Schengen/Saudi visa holders.',
        duration: '14 Days',
        price: 2200, // ~10 BD paid at airport
        processingTime: 'On Arrival',
        icon: 'Stamp'
      }
    ],
    requirements: [
      {
        id: 'bh-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 6 months. Must have 1 blank page.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'bh-2',
        category: 'Financial',
        title: 'Bank Statement',
        description: 'STRICT. Last 3 months statement with min closing balance of ₹70,000 (300 BHD).',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'bh-3',
        category: 'Travel',
        title: 'Return Flight',
        description: 'Confirmed return ticket. Mandatory upload.',
        mandatory: true,
        icon: 'Plane'
      },
      {
        id: 'bh-4',
        category: 'Accommodation',
        title: 'Hotel Booking',
        description: 'Confirmed hotel reservation under applicant\'s name.',
        mandatory: true,
        icon: 'Home'
      }
    ],
    timeline: [
      {
        id: 'bh-t1',
        step: 1,
        title: 'Apply Online',
        description: 'Submit application on evisa.gov.bh. Pay 4 BD application fee.',
        duration: '1 Day',
        status: 'completed',
        icon: 'Monitor'
      },
      {
        id: 'bh-t2',
        step: 2,
        title: 'Processing',
        description: 'NPRA reviews documents (Bank statement is checked manually).',
        duration: '3-5 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'bh-t3',
        step: 3,
        title: 'Approval & Payment',
        description: 'Receive approval email. Login to pay remaining Visa Fee (e.g. 25 BD).',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'CreditCard'
      },
      {
        id: 'bh-t4',
        step: 4,
        title: 'Issuance',
        description: 'Download eVisa PDF.',
        duration: 'Instant',
        status: 'upcoming',
        icon: 'FileCheck'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Farhan Azmi',
        visaType: '1 Year Multiple',
        country: 'Lucknow',
        rating: 5,
        content: 'I visit Bahrain often for business meetings. The 1-year multiple entry visa is the best value. I paid around 29 BD total directly on the site.',
        avatar: 'https://i.pravatar.cc/150?u=farhan_bh',
        avatarAlt: 'Farhan Azmi',
        date: 'Last Month',
        processingTime: '4 Days'
      },
      {
        id: 't2',
        name: 'Priya Sethi',
        visaType: '2 Weeks Single',
        country: 'Delhi',
        rating: 4,
        content: 'My bank balance was slightly below ₹60k and they rejected it initially. I topped it up, re-applied with a fresh statement, and got approved.',
        avatar: 'https://i.pravatar.cc/150?u=priya_bh',
        avatarAlt: 'Priya Sethi',
        date: '3 Months Ago',
        processingTime: '6 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Is the bank balance mandatory?',
        answer: 'Yes, absolutely. Bahrain NPRA strictly checks for a minimum balance equivalent to 300 BHD (approx ₹67,000) in the last 3 months statement.',
        category: 'Requirements'
      },
      {
        id: 'faq2',
        question: 'Can I get a visa on arrival?',
        answer: 'Only if you hold a valid visa for USA, UK, Schengen, or Saudi Arabia. If not, you MUST get an eVisa before flying.',
        category: 'Visa Types'
      },
      {
        id: 'faq3',
        question: 'What is the "F1 Visa"?',
        answer: 'During the F1 Grand Prix season, a special 2-week visa is available at a discounted rate / simplified process for ticket holders.',
        category: 'Events'
      }
    ],
    embassyInfo: {
      name: 'Embassy of the Kingdom of Bahrain',
      address: '14, Kautilya Marg, Chanakyapuri, New Delhi - 110021',
      phone: '011-2615-4153',
      email: 'newdelhi.mission@mofa.gov.bh',
      website: 'https://www.mofa.gov.bh/ind/en/',
      workingHours: 'Mon-Fri 9:00 AM - 3:00 PM',
      latitude: 28.59,
      longitude: 77.18
    },
    recentUpdates: [
      {
        id: 'bh-update-1',
        date: '2025-01-15',
        title: 'Strict Financial Checks',
        description: 'Bahrain NPRA increases scrutiny on bank statements for all Tourist eVisa applications.',
        impact: 'negative',
        icon: 'CreditCard'
      }
    ],
    stats: {
      totalApplications: 6000,
      averageProcessingDays: 4,
      approvalRate: 97.0,
      rejectionReasons: [
        {
          reason: 'Insufficient Bank Balance',
          percentage: 65,
          prevention: 'Ensure your account has >₹70,000 closing balance for the last 3 months consistently.'
        },
        {
          reason: 'Unclear Hotel Booking',
          percentage: 25,
          prevention: 'Booking must match flight dates exactly and show the applicant\'s name.'
        }
      ]
    },
    similarDestinations: ['dubai', 'qatar', 'kuwait']
  },
  {
    id: 'azerbaijan',
    name: 'Azerbaijan',
    code: 'AZ',
    flag: '🇦🇿',
    heroImage: 'https://testour.az/uploads/baku-azerbaijan.jpg',
    heroImageAlt: 'Flame Towers, Baku',
    tagline: 'Land of Fire',
    description: 'Explore the blend of East and West in Baku. (Land borders are CLOSED; Entry by Air only).',
    processingTime: '3 Working Days',
    successRate: 98.0,
    pricing: {
      embassyFee: '2200', // ~$26 USD (Standard e-Visa)
      serviceFee: 1500, // Agency Processing Fee
      totalFee: 3700,
      currency: 'INR',
      refundPolicy: 'Government fees are non-refundable'
    },
    visaTypes: [
      {
        id: 'az-evisa-standard',
        name: 'ASAN Standard e-Visa',
        description: 'The standard tourist visa. Issued in 3 days.',
        duration: '30 Days',
        price: 3700, // ~26 USD + Service
        processingTime: '3 Days',
        icon: 'Monitor'
      },
      {
        id: 'az-evisa-urgent',
        name: 'ASAN Urgent e-Visa',
        description: 'Emergency processing within 3 hours. Higher fee.',
        duration: '30 Days',
        price: 6500, // ~$60 USD + Service
        processingTime: '3 Hours',
        icon: 'Clock'
      }
    ],
    requirements: [
      {
        id: 'az-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for at least 6 months from arrival date.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'az-2',
        category: 'Identity',
        title: 'Digital Passport Scan',
        description: 'Clear scan of bio page (color).',
        mandatory: true,
        icon: 'Scan'
      },
      {
        id: 'az-3',
        category: 'Travel',
        title: 'Flight Ticket',
        description: 'Must show entry BY AIR (Land border entries rejected).',
        mandatory: true,
        icon: 'Plane'
      },
      {
        id: 'az-4',
        category: 'Accommodation',
        title: 'Hotel Booking',
        description: 'Address of stay required for the application form.',
        mandatory: true,
        icon: 'Home'
      }
    ],
    timeline: [
      {
        id: 'az-t1',
        step: 1,
        title: 'Apply Online',
        description: 'Submit details on ASAN Visa portal (evisa.gov.az).',
        duration: '1 Day',
        status: 'completed',
        icon: 'Monitor'
      },
      {
        id: 'az-t2',
        step: 2,
        title: 'Payment',
        description: 'Pay $26 USD (Standard) or $60 USD (Urgent).',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'CreditCard'
      },
      {
        id: 'az-t3',
        step: 3,
        title: 'Processing',
        description: 'Wait 3 days (Standard) or 3 hours (Urgent).',
        duration: '3 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'az-t4',
        step: 4,
        title: 'Download',
        description: 'Receive PDF via email. Print one copy.',
        duration: 'Instant',
        status: 'upcoming',
        icon: 'Printer'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Sahil Mehta',
        visaType: 'Standard e-Visa',
        country: 'Mumbai',
        rating: 5,
        content: 'The ASAN visa is probably the easiest visa I have ever applied for. No documents upload except passport scan. Got it exactly in 3 working days.',
        avatar: 'https://i.pravatar.cc/150?u=sahil_az',
        avatarAlt: 'Sahil Mehta',
        date: 'Last Month',
        processingTime: '3 Days'
      },
      {
        id: 't2',
        name: 'Riya Kapoor',
        visaType: 'Urgent e-Visa',
        country: 'Delhi',
        rating: 5,
        content: 'I forgot to apply in time! I paid extra for the "Urgent" option and literally got the email before I finished packing my suitcase (2 hours). Lifesaver.',
        avatar: 'https://i.pravatar.cc/150?u=riya_az',
        avatarAlt: 'Riya Kapoor',
        date: '3 Months Ago',
        processingTime: '2 Hours'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Can I enter Azerbaijan by train or bus?',
        answer: 'NO. Land borders are officially closed for tourists until 2026 due to extended quarantine measures. You must fly into Baku.',
        category: 'Travel'
      },
      {
        id: 'faq2',
        question: 'Is Visa on Arrival available?',
        answer: 'Only for residents of GCC countries (UAE, Saudi, etc.). Normal Indian passport holders must have the ASAN e-Visa printed before boarding.',
        category: 'Visa Types'
      },
      {
        id: 'faq3',
        question: 'What if I visited Armenia?',
        answer: 'Visiting Armenia is generally fine, but if you have stamps from "Nagorno-Karabakh" (unauthorized territory visits), you will likely be detained or denied entry.',
        category: 'Eligibility'
      }
    ],
    embassyInfo: {
      name: 'Embassy of the Republic of Azerbaijan',
      address: '41, Paschimi Marg, Vasant Vihar, New Delhi - 110057',
      phone: '011-2615-2228',
      email: 'newdelhi@mission.mfa.gov.az',
      website: 'https://newdelhi.mfa.gov.az/en',
      workingHours: 'Mon-Fri 9:00 AM - 6:00 PM',
      latitude: 28.55,
      longitude: 77.16
    },
    recentUpdates: [
      {
        id: 'az-update-border',
        date: '2026-01-01',
        title: 'Land Borders Closed',
        description: 'Government extends land border closure regime until April 2026. Air travel is the only entry method.',
        impact: 'negative',
        icon: 'AlertTriangle'
      }
    ],
    stats: {
      totalApplications: 9000,
      averageProcessingDays: 3,
      approvalRate: 98.0,
      rejectionReasons: [
        {
          reason: 'Unclear Passport Scan',
          percentage: 60,
          prevention: 'The bio-page scan must be high resolution, color, and without glare.'
        },
        {
          reason: 'Typo in Name/Passport #',
          percentage: 30,
          prevention: 'ASAN system is automated. If your typed passport number doesn\'t match the scan, it rejects.'
        }
      ]
    },
    similarDestinations: ['georgia', 'armenia', 'turkey']
  },
  {
    id: 'egypt',
    name: 'Egypt',
    code: 'EG',
    flag: '🇪🇬',
    heroImage: 'https://d3rr2gvhjw0wwy.cloudfront.net/uploads/mandators/49581/file-manager/cairo-city-egypt-2020.jpg',
    heroImageAlt: 'Great Sphinx and Pyramids of Giza',
    tagline: 'Where It All Begins',
    description: 'Explore the Pyramids and Nile. (Warning: E-Visa requires a mandatory "Letter of Guarantee" from a local agent).',
    processingTime: '5-7 Working Days (Sticker)',
    successRate: 92.0,
    pricing: {
      embassyFee: "Notify", // ~2800 INR for Sticker Visa / $25 USD for E-Visa
      serviceFee: 500, // Varies by agent
      totalFee: 3300,
      currency: 'INR',
      refundPolicy: 'Visa fees are non-refundable'
    },
    visaTypes: [
      {
        id: 'eg-sticker',
        name: 'Tourist Sticker Visa (Recommended)',
        description: 'Physical visa stamp from Embassy. Safest option for solo travelers.',
        duration: '90 Days (30 Days stay)',
        price: 2800,
        processingTime: '5-6 Days',
        icon: 'FileText'
      },
      {
        id: 'eg-evisa',
        name: 'E-Visa (Conditional)',
        description: 'Online visa. STRICTLY requires a local agent to meet you at the airport.',
        duration: '30 Days',
        price: 2100, // ~$25 USD
        processingTime: '7 Days',
        icon: 'Monitor'
      },
      {
        id: 'eg-voa',
        name: 'Visa on Arrival',
        description: 'Available at airport ($25 cash) ONLY with a Guarantee Letter/Tour Group.',
        duration: '30 Days',
        price: 2100, // $25 USD
        processingTime: 'On Arrival',
        icon: 'Stamp'
      }
    ],
    requirements: [
      {
        id: 'eg-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 6 months beyond travel. Must have 2 blank pages.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'eg-2',
        category: 'Financial',
        title: 'Bank Statement',
        description: 'Last 6 months updated statement with minimum closing balance (approx ₹50k-80k).',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'eg-3',
        category: 'Requirement',
        title: 'Letter of Guarantee',
        description: 'MANDATORY for E-Visa/VoA. Issued by Egyptian agent who meets you at arrival.',
        mandatory: true,
        icon: 'Shield'
      },
      {
        id: 'eg-4',
        category: 'Accommodation',
        title: 'Hotel Booking',
        description: 'Confirmed hotel voucher for the entire stay.',
        mandatory: true,
        icon: 'Home'
      },
      {
        id: 'eg-5',
        category: 'Employment',
        title: 'Cover Letter / NOC',
        description: 'Letter from employer stating designation and leave approval (For Sticker Visa).',
        mandatory: true,
        icon: 'Briefcase'
      }
    ],
    timeline: [
      {
        id: 'eg-t1',
        step: 1,
        title: 'Choose Type',
        description: 'Decide: Sticker Visa (Safe/DIY) or E-Visa (Requires Agent contact).',
        duration: '1 Day',
        status: 'completed',
        icon: 'HelpCircle'
      },
      {
        id: 'eg-t2',
        step: 2,
        title: 'Apply / Submit',
        description: 'Sticker: Submit physical docs at Embassy/Consulate. E-Visa: Apply online.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Edit'
      },
      {
        id: 'eg-t3',
        step: 3,
        title: 'Processing',
        description: 'Embassy takes 5-6 working days.',
        duration: '5-6 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'eg-t4',
        step: 4,
        title: 'Arrival',
        description: 'If E-Visa: Meet agent BEFORE immigration. If Sticker: Proceed directly.',
        duration: 'Instant',
        status: 'upcoming',
        icon: 'Stamp'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Rohan Malhotra',
        visaType: 'Sticker Visa',
        country: 'Delhi',
        rating: 5,
        content: 'I didn\'t want to risk the "Guarantee Letter" hassle at the airport, so I applied for the sticker visa in Delhi. It cost ₹2800 and I got it in 5 days. Smooth entry in Cairo.',
        avatar: 'https://i.pravatar.cc/150?u=rohan_eg',
        avatarAlt: 'Rohan Malhotra',
        date: 'Last Month',
        processingTime: '5 Days'
      },
      {
        id: 't2',
        name: 'Priya Sethi',
        visaType: 'E-Visa',
        country: 'Mumbai',
        rating: 3,
        content: 'I booked a tour group so they handled the Guarantee Letter. The agent met us before passport control. If you are solo, DO NOT use E-Visa without arranging this first!',
        avatar: 'https://i.pravatar.cc/150?u=priya_eg',
        avatarAlt: 'Priya Sethi',
        date: '3 Months Ago',
        processingTime: '7 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Can I get a Visa on Arrival?',
        answer: 'Only if you are traveling with a pre-arranged tour group that provides a "Letter of Guarantee". Solo travelers without this document are often denied entry.',
        category: 'Visa Types'
      },
      {
        id: 'faq2',
        question: 'What is the "Letter of Guarantee"?',
        answer: 'It is a document from an Egyptian travel agency taking responsibility for you. For Indian E-Visa holders, this is mandatory and the agent must be physically present at the airport.',
        category: 'Requirements'
      },
      {
        id: 'faq3',
        question: 'Is the Sticker Visa safer?',
        answer: 'Yes. The Sticker Visa obtained from the Embassy in India does not require a "meet and assist" agent at the airport, making independent travel much easier.',
        category: 'Process'
      }
    ],
    embassyInfo: {
      name: 'Embassy of the Arab Republic of Egypt',
      address: '1/50 M, Shantipath, Chanakyapuri, New Delhi - 110021',
      phone: '011-2611-4096',
      email: 'egyptembdelhi@gmail.com',
      website: 'https://mfa.gov.eg/english/embassies/Egyptian_Embassy_In_New_Delhi',
      workingHours: 'Mon-Fri 9:30 AM - 3:00 PM',
      latitude: 28.60,
      longitude: 77.18
    },
    recentUpdates: [
      {
        id: 'eg-update-1',
        date: '2026-01-12',
        title: 'E-Visa Guarantee Enforcement',
        description: 'Cairo Airport reinforces strict checks for "Letter of Guarantee" for Indian E-Visa holders.',
        impact: 'negative',
        icon: 'AlertTriangle'
      }
    ],
    stats: {
      totalApplications: 9000,
      averageProcessingDays: 6,
      approvalRate: 92.0,
      rejectionReasons: [
        {
          reason: 'Missing Guarantee Letter (E-Visa)',
          percentage: 65,
          prevention: 'For E-Visa, you MUST book via an agent who provides airport meet-and-assist. Otherwise, use Sticker Visa.'
        },
        {
          reason: 'Insufficient Funds',
          percentage: 20,
          prevention: 'Ensure bank statement shows adequate balance (₹50k+).'
        }
      ]
    },
    similarDestinations: ['morocco', 'turkey', 'jordan']
  },

  // =========================================================================
  // 6. AFRICA
  // =========================================================================
  {
    id: 'south_africa',
    name: 'South Africa',
    code: 'ZA',
    flag: '🇿🇦',
    heroImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80',
    heroImageAlt: 'Table Mountain, Cape Town',
    tagline: 'A World in One Country',
    description: 'Experience the Big Five safaris and Cape Town. (Gratis Visa for Indians; VFS submission required).',
    processingTime: '10-15 Working Days',
    successRate: 88.0,
    pricing: {
      embassyFee: "Notify Later", // Gratis (Free) for Indian Nationals
      serviceFee: 2301, // VFS Logistics Fee (varies slightly by center)
      totalFee: 2301,
      currency: 'INR',
      refundPolicy: 'VFS Service fee non-refundable'
    },
    visaTypes: [
      {
        id: 'za-tourist',
        name: 'Visitor Visa (Short Term)',
        description: 'Standard tourist visa. Applied via VFS. No govt fee.',
        duration: '90 Days',
        price: 2301, // VFS Fee only
        processingTime: '12-15 Days',
        icon: 'Globe'
      },
      {
        id: 'za-evisa',
        name: 'e-Visa',
        description: 'Online system. Often faces technical delays. Use with caution.',
        duration: '90 Days',
        price: 0, // Free
        processingTime: 'Varies (Unpredictable)',
        icon: 'Monitor'
      }
    ],
    requirements: [
      {
        id: 'za-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 30 days after exit. Must have 2 blank pages.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'za-2',
        category: 'Financial',
        title: 'Bank Statement',
        description: 'Original 3-month statement with BANK STAMP. Min balance ~₹60,000.',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'za-3',
        category: 'Employment',
        title: 'NOC / Employment Proof',
        description: 'Letter from employer on company letterhead.',
        mandatory: true,
        icon: 'Briefcase'
      },
      {
        id: 'za-4',
        category: 'Travel',
        title: 'Day-to-Day Itinerary',
        description: 'Detailed travel plan with flight bookings.',
        mandatory: true,
        icon: 'Map'
      },
      {
        id: 'za-5',
        category: 'Accommodation',
        title: 'Hotel Booking',
        description: 'Confirmed hotel vouchers matching the itinerary.',
        mandatory: true,
        icon: 'Home'
      },
      {
        id: 'za-6',
        category: 'Health',
        title: 'Yellow Fever Card',
        description: 'Mandatory ONLY if traveling from/transit through a Yellow Fever zone (e.g., Kenya, Ethiopia).',
        mandatory: false,
        icon: 'Activity'
      }
    ],
    timeline: [
      {
        id: 'za-t1',
        step: 1,
        title: 'Prepare Docs',
        description: 'Get Bank Statements stamped and NOC from office.',
        duration: '2 Days',
        status: 'completed',
        icon: 'FileText'
      },
      {
        id: 'za-t2',
        step: 2,
        title: 'VFS Appointment',
        description: 'Book slot at VFS South Africa (Delhi, Mumbai, etc.).',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Calendar'
      },
      {
        id: 'za-t3',
        step: 3,
        title: 'Submission',
        description: 'Submit physical documents. Pay VFS fee (~₹2301).',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'UserCheck'
      },
      {
        id: 'za-t4',
        step: 4,
        title: 'Processing',
        description: 'High Commission processes file. Takes 2-3 weeks.',
        duration: '10-15 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'za-t5',
        step: 5,
        title: 'Collection',
        description: 'Collect passport via courier.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Package'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Vikram Sethi',
        visaType: 'Visitor Visa',
        country: 'Delhi',
        rating: 4,
        content: 'The visa is free, but VFS charged about ₹2300. The process was slow (took 18 days), so apply early! They strictly checked the bank stamp.',
        avatar: 'https://i.pravatar.cc/150?u=vikram_za',
        avatarAlt: 'Vikram Sethi',
        date: 'Last Month',
        processingTime: '18 Days'
      },
      {
        id: 't2',
        name: 'Anjali Menon',
        visaType: 'Visitor Visa',
        country: 'Mumbai',
        rating: 5,
        content: 'I traveled with a tour group under the new scheme. The operator handled everything, and it felt much faster than the usual individual process.',
        avatar: 'https://i.pravatar.cc/150?u=anjali_za',
        avatarAlt: 'Anjali Menon',
        date: '2 Months Ago',
        processingTime: '10 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Is the visa really free?',
        answer: 'Yes, the visa fee is "Gratis" (Zero) for Indian nationals. You only pay the VFS service/logistics charge.',
        category: 'Fees'
      },
      {
        id: 'faq2',
        question: 'Is Yellow Fever vaccination required?',
        answer: 'Only if you are entering South Africa from a Yellow Fever zone (like Kenya, Brazil, etc.) or transiting through one for >12 hours. Direct flights from India do not require it.',
        category: 'Health'
      },
      {
        id: 'faq3',
        question: 'Can I use the e-Visa?',
        answer: 'You can, but it is known to be buggy and slow. For a guaranteed timeline, the physical VFS application is currently more reliable.',
        category: 'Process'
      }
    ],
    embassyInfo: {
      name: 'South African High Commission',
      address: 'B-18, Vasant Marg, Vasant Vihar, New Delhi - 110057',
      phone: '011-2614-9411',
      email: 'indiahc@dirco.gov.za',
      website: 'https://www.dirco.gov.za/india/',
      workingHours: 'Mon-Fri 8:30 AM - 5:00 PM',
      latitude: 28.56,
      longitude: 77.16
    },
    recentUpdates: [
      {
        id: 'za-update-ttos',
        date: '2026-01-05',
        title: 'TTOS Launched',
        description: 'Trusted Tour Operator Scheme implemented to streamline entry for Indian tour groups.',
        impact: 'positive',
        icon: 'CheckCircle2'
      }
    ],
    stats: {
      totalApplications: 12000,
      averageProcessingDays: 12,
      approvalRate: 88.0,
      rejectionReasons: [
        {
          reason: 'Unstamped Bank Statements',
          percentage: 60,
          prevention: 'You must go to the bank and get physical stamps on A4 printouts. Online PDFs are rejected.'
        },
        {
          reason: 'Insufficient Funds',
          percentage: 30,
          prevention: 'Maintain a healthy balance (₹60k+ per person) for at least 3 months.'
        }
      ]
    },
    similarDestinations: ['kenya', 'tanzania', 'namibia']
  },
  {
    id: 'kenya',
    name: 'Kenya',
    code: 'KE',
    flag: '🇰🇪',
    heroImage: 'https://images.unsplash.com/photo-1519659528534-7fd733a832a0?auto=format&fit=crop&q=80',
    heroImageAlt: 'Giraffe Manor and Safari',
    tagline: 'The Magical Kenya',
    description: 'Home of the Safari. (Entry requires mandatory eTA for all travelers).',
    processingTime: '3 Working Days',
    successRate: 97.5,
    pricing: {
      embassyFee: '2800', // ~$32 USD (eTA processing fee)
      serviceFee: 0, // DIY Recommended
      totalFee: 2800,
      currency: 'INR',
      refundPolicy: 'eTA fees are non-refundable'
    },
    visaTypes: [
      {
        id: 'ke-eta',
        name: 'Electronic Travel Authorisation (eTA)',
        description: 'Mandatory entry permit replacing the old eVisa.',
        duration: '90 Days',
        price: 2800, // ~$32 USD
        processingTime: '3 Days',
        icon: 'CheckCircle'
      },
      {
        id: 'ke-eta-eastafrica',
        name: 'East Africa Tourist Visa',
        description: 'Joint visa for Kenya, Uganda, and Rwanda (Apply via first entry country).',
        duration: '90 Days',
        price: 8500, // ~$100 USD
        processingTime: '7 Days',
        icon: 'Map'
      }
    ],
    requirements: [
      {
        id: 'ke-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for at least 6 months beyond date of arrival. Must have 1 blank page.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'ke-2',
        category: 'Registration',
        title: 'eTA Application',
        description: 'MANDATORY. Apply online at etakenya.go.ke at least 3 days before travel.',
        mandatory: true,
        icon: 'Monitor'
      },
      {
        id: 'ke-3',
        category: 'Health',
        title: 'Yellow Fever Card',
        description: 'Mandatory if arriving from/transiting an endemic country. Highly recommended for all.',
        mandatory: true,
        icon: 'Activity'
      },
      {
        id: 'ke-4',
        category: 'Accommodation',
        title: 'Hotel/Safari Booking',
        description: 'Confirmed hotel or safari lodge booking confirmation.',
        mandatory: true,
        icon: 'Home'
      },
      {
        id: 'ke-5',
        category: 'Travel',
        title: 'Return Ticket',
        description: 'Confirmed return flight ticket.',
        mandatory: true,
        icon: 'Plane'
      }
    ],
    timeline: [
      {
        id: 'ke-t1',
        step: 1,
        title: 'Apply Online',
        description: 'Visit official eTA portal (etakenya.go.ke). Upload passport & selfie.',
        duration: '1 Day',
        status: 'completed',
        icon: 'Monitor'
      },
      {
        id: 'ke-t2',
        step: 2,
        title: 'Payment',
        description: 'Pay the processing fee (~$32 USD) online.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'CreditCard'
      },
      {
        id: 'ke-t3',
        step: 3,
        title: 'Processing',
        description: 'Wait for approval email (usually within 72 hours).',
        duration: '3 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'ke-t4',
        step: 4,
        title: 'Travel',
        description: 'Print the approved eTA PDF. Present it at Nairobi/Mombasa immigration.',
        duration: 'Instant',
        status: 'upcoming',
        icon: 'Stamp'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Siddharth Rao',
        visaType: 'eTA',
        country: 'Bangalore',
        rating: 5,
        content: 'The new eTA system is much faster than the old eVisa. I applied on Tuesday and got the PDF on Thursday morning. Immigration at Jomo Kenyatta was smooth.',
        avatar: 'https://i.pravatar.cc/150?u=sid_ke',
        avatarAlt: 'Siddharth Rao',
        date: 'Last Month',
        processingTime: '2 Days'
      },
      {
        id: 't2',
        name: 'Anita Desai',
        visaType: 'East Africa Visa',
        country: 'Mumbai',
        rating: 4,
        content: 'We did Kenya and Uganda. The joint East Africa Visa is totally worth it ($100). Make sure you apply through the country you enter FIRST.',
        avatar: 'https://i.pravatar.cc/150?u=anita_ke',
        avatarAlt: 'Anita Desai',
        date: '3 Months Ago',
        processingTime: '6 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Is Kenya visa-free for Indians?',
        answer: 'Yes, it is "Visa-Free" but NOT "Paperwork-Free". You still must pay for and obtain the mandatory eTA (Electronic Travel Authorisation) to enter.',
        category: 'Visa Types'
      },
      {
        id: 'faq2',
        question: 'Do children need an eTA?',
        answer: 'Yes. Unlike the old visa system where children under 16 were exempt, the new eTA is mandatory for ALL ages, including infants.',
        category: 'Requirements'
      },
      {
        id: 'faq3',
        question: 'Is Yellow Fever vaccination required?',
        answer: 'It is mandatory if you are traveling from a country with risk of Yellow Fever (like Ethiopia). However, border officials often check it for everyone, so carrying the card is strongly advised.',
        category: 'Health'
      }
    ],
    embassyInfo: {
      name: 'High Commission of Kenya',
      address: '34, Paschimi Marg, Vasant Vihar, New Delhi - 110057',
      phone: '011-2614-6537',
      email: 'info@kenyahighcom-india.net',
      website: 'https://www.kenyahighcom-india.net/',
      workingHours: 'Mon-Fri 9:00 AM - 4:00 PM',
      latitude: 28.56,
      longitude: 77.16
    },
    recentUpdates: [
      {
        id: 'ke-update-1',
        date: '2024-01-01',
        title: 'Visa Abolished, eTA Introduced',
        description: 'Kenya replaces all entry visas with the mandatory Electronic Travel Authorisation (eTA) system.',
        impact: 'neutral',
        icon: 'FileText'
      }
    ],
    stats: {
      totalApplications: 25000,
      averageProcessingDays: 3,
      approvalRate: 97.5,
      rejectionReasons: [
        {
          reason: 'Incorrect Passport Data',
          percentage: 50,
          prevention: 'Ensure the passport number and name on the eTA match your passport exactly.'
        },
        {
          reason: 'Unclear Photo',
          percentage: 30,
          prevention: 'Upload a clear, recent selfie or passport photo as per specifications.'
        }
      ]
    },
    similarDestinations: ['tanzania', 'south_africa', 'uganda']
  },
  {
    id: 'morocco',
    name: 'Morocco',
    code: 'MA',
    flag: '🇲🇦',
    heroImage: 'https://media.assettype.com/outlooktraveller%2F2024-09-21%2F4o207w7p%2Fshutterstock2394055751.jpg',
    heroImageAlt: 'Souks of Marrakech',
    tagline: 'Kingdom of Light',
    description: 'Explore the Atlas Mountains, Sahara Desert, and the Blue City of Chefchaouen. (E-Visa available for Indians).',
    processingTime: '3 Business Days (Standard)',
    successRate: 94.0,
    pricing: {
      embassyFee: "Notify Later", // ~770 MAD (Standard)
      serviceFee: 1500, // Agency processing fee
      totalFee: 8000,
      currency: 'INR',
      refundPolicy: 'Government fees are non-refundable'
    },
    visaTypes: [
      {
        id: 'ma-evisa-standard',
        name: 'Standard e-Visa',
        description: 'The primary choice for tourists. Processed in 3 business days.',
        duration: '30 Days (Single Entry)',
        price: 6500, // ~770 MAD
        processingTime: '3 Days',
        icon: 'Map'
      },
      {
        id: 'ma-evisa-express',
        name: 'Express e-Visa',
        description: 'Urgent processing within 24 hours.',
        duration: '30 Days (Single Entry)',
        price: 9300, // ~1100 MAD
        processingTime: '24 Hours',
        icon: 'Zap'
      }
    ],
    requirements: [
      {
        id: 'ma-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for at least 3 months beyond duration of stay.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'ma-2',
        category: 'Identity',
        title: 'Digital Photo',
        description: 'Recent color photo (35x45mm) against a white background.',
        mandatory: true,
        icon: 'Camera'
      },
      {
        id: 'ma-3',
        category: 'Travel',
        title: 'Return Flight Ticket',
        description: 'Confirmed entry and exit flight tickets.',
        mandatory: true,
        icon: 'Plane'
      },
      {
        id: 'ma-4',
        category: 'Accommodation',
        title: 'Hotel Booking',
        description: 'Confirmed hotel reservation covering the stay.',
        mandatory: true,
        icon: 'Home'
      },
      {
        id: 'ma-5',
        category: 'Financial',
        title: 'Travel Insurance',
        description: 'Highly recommended for medical coverage (though often not strictly checked).',
        mandatory: false,
        icon: 'Shield'
      }
    ],
    timeline: [
      {
        id: 'ma-t1',
        step: 1,
        title: 'Apply Online',
        description: 'Visit "Access Maroc" portal. Fill application form.',
        duration: '1 Day',
        status: 'completed',
        icon: 'Monitor'
      },
      {
        id: 'ma-t2',
        step: 2,
        title: 'Payment',
        description: 'Pay visa fee (~770 MAD) using an international card.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'CreditCard'
      },
      {
        id: 'ma-t3',
        step: 3,
        title: 'Processing',
        description: 'Wait 3 days (Standard) or 24 hours (Express).',
        duration: '1-3 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'ma-t4',
        step: 4,
        title: 'Approval',
        description: 'Receive e-Visa via email. Print it out.',
        duration: 'Instant',
        status: 'upcoming',
        icon: 'FileCheck'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Priyanka Das',
        visaType: 'Standard e-Visa',
        country: 'Kolkata',
        rating: 5,
        content: 'I used the Access Maroc site. It was straightforward. I applied on Monday and got the visa on Wednesday. Just make sure your photo is the right size!',
        avatar: 'https://i.pravatar.cc/150?u=priyanka_ma',
        avatarAlt: 'Priyanka Das',
        date: 'Last Month',
        processingTime: '3 Days'
      },
      {
        id: 't2',
        name: 'Ravi Teja',
        visaType: 'Express e-Visa',
        country: 'Hyderabad',
        rating: 5,
        content: 'I booked a last-minute trip to Casablanca. Paid extra for the Express Visa and got it in 18 hours. Totally worth the extra cost.',
        avatar: 'https://i.pravatar.cc/150?u=ravi_ma',
        avatarAlt: 'Ravi Teja',
        date: '3 Months Ago',
        processingTime: '18 Hours'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Is the e-Visa guaranteed?',
        answer: 'No visa is 100% guaranteed, but the e-Visa approval rate for Indians is very high (over 90%) provided documents are clear and genuine.',
        category: 'Success Rate'
      },
      {
        id: 'faq2',
        question: 'Do I need a US/Schengen visa to apply?',
        answer: 'No. While having those visas used to be a requirement for the "conditional" e-visa, standard Indian passport holders are now eligible for the Tourist e-Visa directly.',
        category: 'Eligibility'
      },
      {
        id: 'faq3',
        question: 'What is the validity period?',
        answer: 'The e-Visa is valid for entry for 180 days from the date of issue, but your actual stay in Morocco cannot exceed 30 days.',
        category: 'Validity'
      }
    ],
    embassyInfo: {
      name: 'Embassy of the Kingdom of Morocco',
      address: '10/1, Sarvapriya Vihar, New Delhi - 110016',
      phone: '011-4056-4257',
      email: 'embassy.morocco.delhi@gmail.com',
      website: 'https://www.diplomatie.ma/en',
      workingHours: 'Mon-Fri 9:00 AM - 4:00 PM',
      latitude: 28.54,
      longitude: 77.20
    },
    recentUpdates: [
      {
        id: 'ma-update-1',
        date: '2024-05-10',
        title: 'E-Visa Platform Upgrade',
        description: 'Access Maroc portal updated for faster processing and better Indian card acceptance.',
        impact: 'positive',
        icon: 'Zap'
      }
    ],
    stats: {
      totalApplications: 6000,
      averageProcessingDays: 3,
      approvalRate: 94.0,
      rejectionReasons: [
        {
          reason: 'Poor Photo Quality',
          percentage: 45,
          prevention: 'Upload a studio-quality photo. Selfies or blurry scans are rejected instantly.'
        },
        {
          reason: 'Data Mismatch',
          percentage: 25,
          prevention: 'Name on application must match the passport machine-readable zone (MRZ) exactly.'
        }
      ]
    },
    similarDestinations: ['egypt', 'turkey', 'jordan']
  },
  {
    id: 'tanzania',
    name: 'Tanzania',
    code: 'TZ',
    flag: '🇹🇿',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80',
    heroImageAlt: 'Mount Kilimanjaro and Elephants',
    tagline: 'Unforgettable Tanzania',
    description: 'Home of Kilimanjaro and Zanzibar. (Mandatory ZIC Insurance required for Zanzibar entry).',
    processingTime: '10-15 Working Days (e-Visa)',
    successRate: 95.0,
    pricing: {
      embassyFee: "Notify Later", // ~$50 USD (Visa Fee)
      serviceFee: 0, // DIY Recommended
      totalFee: 4200,
      currency: 'INR',
      refundPolicy: 'Government fees are non-refundable'
    },
    visaTypes: [
      {
        id: 'tz-evisa',
        name: 'Ordinary Visa (e-Visa)',
        description: 'Standard single-entry tourist visa. Best to apply 2 weeks early.',
        duration: '90 Days',
        price: 4200, // $50 USD
        processingTime: '10 Days',
        icon: 'Monitor'
      },
      {
        id: 'tz-voa',
        name: 'Visa on Arrival',
        description: 'Available at major airports (JRO, DAR, ZNZ). Cash/Card accepted.',
        duration: '90 Days',
        price: 4200, // $50 USD
        processingTime: 'On Arrival',
        icon: 'Stamp'
      }
    ],
    requirements: [
      {
        id: 'tz-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 6 months. Must have 1 blank page.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'tz-2',
        category: 'Insurance',
        title: 'Zanzibar Inbound Insurance',
        description: 'MANDATORY for Zanzibar visitors. Must buy from ZIC ($44) before flying.',
        mandatory: true,
        icon: 'Shield'
      },
      {
        id: 'tz-3',
        category: 'Travel',
        title: 'Return Ticket',
        description: 'Confirmed return flight ticket.',
        mandatory: true,
        icon: 'Plane'
      },
      {
        id: 'tz-4',
        category: 'Health',
        title: 'Yellow Fever Card',
        description: 'Mandatory if arriving from Kenya/Ethiopia/Uganda. Otherwise recommended.',
        mandatory: false,
        icon: 'Activity'
      },
      {
        id: 'tz-5',
        category: 'Identity',
        title: 'Digital Photo',
        description: 'Passport size photo for e-Visa upload.',
        mandatory: true,
        icon: 'Camera'
      }
    ],
    timeline: [
      {
        id: 'tz-t1',
        step: 1,
        title: 'Apply Online',
        description: 'Submit application on visa.immigration.go.tz.',
        duration: '1 Day',
        status: 'completed',
        icon: 'Monitor'
      },
      {
        id: 'tz-t2',
        step: 2,
        title: 'Payment',
        description: 'Pay $50 USD visa fee online.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'CreditCard'
      },
      {
        id: 'tz-t3',
        step: 3,
        title: 'Processing',
        description: 'Wait for approval (Can take up to 10 days).',
        duration: '10 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'tz-t4',
        step: 4,
        title: 'Zanzibar Insurance',
        description: 'If visiting Zanzibar, buy mandatory ZIC insurance ($44).',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Shield'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Kavita Singh',
        visaType: 'e-Visa',
        country: 'Pune',
        rating: 4,
        content: 'The e-Visa took exactly 12 days, so don\'t leave it for the last minute! The Zanzibar insurance check was strict at the ferry terminal.',
        avatar: 'https://i.pravatar.cc/150?u=kavita_tz',
        avatarAlt: 'Kavita Singh',
        date: 'Last Month',
        processingTime: '12 Days'
      },
      {
        id: 't2',
        name: 'Rahul Khanna',
        visaType: 'Visa on Arrival',
        country: 'Delhi',
        rating: 5,
        content: 'I didn\'t want to wait for the e-Visa, so I just paid $50 at Kilimanjaro airport. The queue was short (maybe 20 mins) and smooth.',
        avatar: 'https://i.pravatar.cc/150?u=rahul_tz',
        avatarAlt: 'Rahul Khanna',
        date: '3 Months Ago',
        processingTime: '20 Mins'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Is my global travel insurance valid for Zanzibar?',
        answer: 'NO. Zanzibar now requires a specific "Inbound Travel Insurance" purchased from the Zanzibar Insurance Corporation (ZIC). Other policies are not accepted for entry.',
        category: 'Insurance'
      },
      {
        id: 'faq2',
        question: 'Do I need a Yellow Fever shot?',
        answer: 'If you fly direct from India to Tanzania, technically no. BUT, if you cross the border from Kenya or have a long layover in Addis Ababa/Nairobi, you MUST show the certificate.',
        category: 'Health'
      },
      {
        id: 'faq3',
        question: 'How long does the e-Visa take?',
        answer: 'It is slower than other countries. It officially states 10 days, but can sometimes take 2 weeks. Apply at least 15 days before your trip.',
        category: 'Process'
      }
    ],
    embassyInfo: {
      name: 'High Commission of the United Republic of Tanzania',
      address: 'EP-15 C, Chanakyapuri, New Delhi - 110021',
      phone: '011-2412-2864',
      email: 'newdelhi@nje.go.tz',
      website: 'https://in.tzembassy.go.tz/',
      workingHours: 'Mon-Fri 9:00 AM - 4:00 PM',
      latitude: 28.59,
      longitude: 77.18
    },
    recentUpdates: [
      {
        id: 'tz-update-1',
        date: '2024-10-01',
        title: 'Mandatory Zanzibar Insurance',
        description: 'Zanzibar implements mandatory inbound travel insurance ($44) for all foreign visitors.',
        impact: 'neutral',
        icon: 'Shield'
      }
    ],
    stats: {
      totalApplications: 12000,
      averageProcessingDays: 10,
      approvalRate: 95.0,
      rejectionReasons: [
        {
          reason: 'Missing Return Ticket',
          percentage: 40,
          prevention: 'You must upload a confirmed return flight ticket for the e-Visa.'
        },
        {
          reason: 'Passport Validity',
          percentage: 20,
          prevention: 'Passport must be valid for 6 months from the date of ENTRY.'
        }
      ]
    },
    similarDestinations: ['kenya', 'south_africa', 'uganda']
  },

  // =========================================================================
  // 7. OCEANIA
  // =========================================================================
  {
    id: 'australia',
    name: 'Australia',
    code: 'AU',
    flag: '🇦🇺',
    heroImage: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVzdHJhbGlhfGVufDB8fDB8fHww',
    heroImageAlt: 'Sydney Opera House and Harbour Bridge',
    tagline: 'The Land Down Under',
    description: 'Explore the Great Barrier Reef, Sydney, and the Outback. (Strict "Genuine Entrant" assessment).',
    processingTime: '15-25 Business Days',
    successRate: 88.0,
    pricing: {
      embassyFee: "Notify Later", // ~195 AUD (Visa Application Charge)
      serviceFee: 2500, // Approx VFS Biometric Collection Fee
      totalFee: 13500,
      currency: 'INR',
      refundPolicy: 'Visa Application Charge (VAC) is non-refundable'
    },
    visaTypes: [
      {
        id: 'au-visitor-600',
        name: 'Visitor Visa (Subclass 600)',
        description: 'Standard tourist visa. Valid for 3, 6, or 12 months (determined by case officer).',
        duration: 'Up to 12 Months',
        price: 13500, // Govt + Biometrics
        processingTime: '20 Days',
        icon: 'Plane'
      },
      {
        id: 'au-business-600',
        name: 'Business Visitor Stream',
        description: 'For conferences, negotiations, or business enquiries. No work allowed.',
        duration: 'Up to 3 Months',
        price: 13500,
        processingTime: '15 Days',
        icon: 'Briefcase'
      }
    ],
    requirements: [
      {
        id: 'au-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for 6 months. All previous passports recommended for travel history.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'au-2',
        category: 'Financial',
        title: 'Bank Statement',
        description: 'Last 6 months updated statement. Large recent deposits are flagged negatively.',
        mandatory: true,
        icon: 'CreditCard'
      },
      {
        id: 'au-3',
        category: 'Financial',
        title: 'Income Tax Returns (ITR)',
        description: 'Last 3 years ITR acknowledgement slips (ITR-V).',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'au-4',
        category: 'Employment',
        title: 'Employment Proof',
        description: 'Leave sanction letter, salary slips (3 months), or business registration (GST/MSME).',
        mandatory: true,
        icon: 'Briefcase'
      },
      {
        id: 'au-5',
        category: 'Identity',
        title: 'Biometrics',
        description: 'Face and fingerprint scan at VFS Global (By appointment only).',
        mandatory: true,
        icon: 'Fingerprint'
      },
      {
        id: 'au-6',
        category: 'Travel',
        title: 'Itinerary / Cover Letter',
        description: 'Detailed day-wise plan explaining purpose of visit.',
        mandatory: true,
        icon: 'Map'
      }
    ],
    timeline: [
      {
        id: 'au-t1',
        step: 1,
        title: 'ImmiAccount Application',
        description: 'Create account on Home Affairs website. Fill 20-page form. Upload docs.',
        duration: '1 Day',
        status: 'completed',
        icon: 'Monitor'
      },
      {
        id: 'au-t2',
        step: 2,
        title: 'Biometrics',
        description: 'Receive "Biometric Requirement Letter". Book VFS slot. Give fingerprints.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Fingerprint'
      },
      {
        id: 'au-t3',
        step: 3,
        title: 'Processing',
        description: 'Case officer assesses "Genuine Temporary Entrant" criteria.',
        duration: '15-25 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'au-t4',
        step: 4,
        title: 'Grant',
        description: 'Receive "Visa Grant Notice" PDF via email. Check details carefully.',
        duration: 'Instant',
        status: 'upcoming',
        icon: 'Mail'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Deepak Verma',
        visaType: 'Visitor Visa (600)',
        country: 'Bangalore',
        rating: 5,
        content: 'The form is very long (almost 20 pages), but if you are honest about your finances, it works. I showed my PF statement and property papers too. Got a 3-year multiple entry!',
        avatar: 'https://i.pravatar.cc/150?u=deepak_au',
        avatarAlt: 'Deepak Verma',
        date: 'Last Month',
        processingTime: '18 Days'
      },
      {
        id: 't2',
        name: 'Sneha Reddy',
        visaType: 'Visitor Visa (600)',
        country: 'Hyderabad',
        rating: 4,
        content: 'Getting a biometrics appointment in Hyderabad was tough; had to wait 5 days for a slot. The visa itself came 2 weeks after the appointment.',
        avatar: 'https://i.pravatar.cc/150?u=sneha_au',
        avatarAlt: 'Sneha Reddy',
        date: '3 Months Ago',
        processingTime: '20 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Do I get a sticker in my passport?',
        answer: 'No. Australia issues label-free electronic visas. You just need to carry the "Grant Notification Letter" printout.',
        category: 'Documents'
      },
      {
        id: 'faq2',
        question: 'Is health insurance mandatory?',
        answer: 'It is highly recommended for all, but strictly MANDATORY for applicants over 75 years old. The embassy may request a medical checkup for seniors.',
        category: 'Requirements'
      },
      {
        id: 'faq3',
        question: 'Why was my visa rejected under "Clause 600.211"?',
        answer: 'This is the "Genuine Temporary Entrant" clause. It means the officer was not convinced you have strong enough incentives (job, family, assets) to return to India.',
        category: 'Rejection'
      }
    ],
    embassyInfo: {
      name: 'Australian High Commission',
      address: '1/50-G, Shantipath, Chanakyapuri, New Delhi - 110021',
      phone: '011-4139-9900',
      email: 'immigration.newdelhi@dfat.gov.au',
      website: 'https://india.highcommission.gov.au/',
      workingHours: 'Mon-Fri 9:00 AM - 5:00 PM',
      latitude: 28.60,
      longitude: 77.19
    },
    recentUpdates: [
      {
        id: 'au-update-1',
        date: '2026-01-01',
        title: 'MATES Scheme Live',
        description: 'Mobility Arrangement for Talented Early-professionals Scheme (MATES) ballot opens for Indian STEM graduates.',
        impact: 'positive',
        icon: 'Briefcase'
      },
      {
        id: 'au-update-2',
        date: '2025-07-01',
        title: 'Visa Fee Increase',
        description: 'Base application charge for Subclass 600 increased to AUD 195.',
        impact: 'negative',
        icon: 'CreditCard'
      }
    ],
    stats: {
      totalApplications: 35000,
      averageProcessingDays: 20,
      approvalRate: 88.0,
      rejectionReasons: [
        {
          reason: 'Weak Financial Ties (Clause 600.211)',
          percentage: 65,
          prevention: 'Submit ITRs, PF statements, and property deeds to prove you will return to India.'
        },
        {
          reason: 'Unexplained Deposits',
          percentage: 20,
          prevention: 'Do not deposit large lump sums into your bank account just before applying. This is seen as "funds parking".'
        }
      ]
    },
    similarDestinations: ['new_zealand', 'uk', 'canada']
  },
  {
    id: 'new_zealand',
    name: 'New Zealand',
    code: 'NZ',
    flag: '🇳🇿',
    heroImage: 'https://images.unsplash.com/photo-1502786129293-79981df4e689?auto=format&fit=crop&q=80',
    heroImageAlt: 'Milford Sound',
    tagline: '100% Pure New Zealand',
    description: 'Experience Middle-earth, Maori culture, and the Southern Alps. (Fees increased to ~NZD 441).',
    processingTime: '10-20 Business Days',
    successRate: 89.0,
    pricing: {
      embassyFee: "Notify Later", // ~NZD 341 (Visa) + NZD 100 (IVL)
      serviceFee: 7999, // DIY via RealMe Recommended
      totalFee: 22100,
      currency: 'INR',
      refundPolicy: 'Government fees & IVL are non-refundable'
    },
    visaTypes: [
      {
        id: 'nz-visitor',
        name: 'Visitor Visa',
        description: 'Standard tourist entry. Usually valid for 9 months.',
        duration: 'Up to 9 Months',
        price: 22100,
        processingTime: '15 Days',
        icon: 'Mountain'
      },
      {
        id: 'nz-group',
        name: 'Group Visitor Visa',
        description: 'For families/groups traveling together. Apply under one group ID.',
        duration: 'Same as Visitor',
        price: 22100, // Per person
        processingTime: '20 Days',
        icon: 'Users'
      }
    ],
    requirements: [
      {
        id: 'nz-1',
        category: 'Identity',
        title: 'Original Passport',
        description: 'Valid for at least 3 months AFTER your planned departure date.',
        mandatory: true,
        icon: 'FileText'
      },
      {
        id: 'nz-2',
        category: 'Financial',
        title: 'Proof of Funds',
        description: 'Must show NZD 1,000 per month (or NZD 400 if accommodation prepaid).',
        mandatory: true,
        icon: 'Wallet'
      },
      {
        id: 'nz-3',
        category: 'Employment',
        title: 'Ties to Home',
        description: 'CRITICAL. Employment letter, leave approval, property deeds, or family ties.',
        mandatory: true,
        icon: 'Anchor'
      },
      {
        id: 'nz-4',
        category: 'Identity',
        title: 'Digital Photo',
        description: 'Recent photo (light background). Not same as passport photo.',
        mandatory: true,
        icon: 'Camera'
      },
      {
        id: 'nz-5',
        category: 'Travel',
        title: 'Return Ticket',
        description: 'Proof that you intend to leave (Return flight or onward travel).',
        mandatory: true,
        icon: 'Plane'
      }
    ],
    timeline: [
      {
        id: 'nz-t1',
        step: 1,
        title: 'RealMe Account',
        description: 'Create a RealMe login on immigration.govt.nz.',
        duration: '1 Day',
        status: 'completed',
        icon: 'Monitor'
      },
      {
        id: 'nz-t2',
        step: 2,
        title: 'Application',
        description: 'Fill form, upload docs. Pay NZD 441 fee online.',
        duration: '1 Day',
        status: 'upcoming',
        icon: 'Edit'
      },
      {
        id: 'nz-t3',
        step: 3,
        title: 'Processing',
        description: 'INZ assesses application. They may ask for more "Bona Fide" proof.',
        duration: '10-20 Days',
        status: 'upcoming',
        icon: 'Clock'
      },
      {
        id: 'nz-t4',
        step: 4,
        title: 'Approval',
        description: 'Receive eVisa (Letter) via email. Print for travel.',
        duration: 'Instant',
        status: 'upcoming',
        icon: 'Mail'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Arun Kumar',
        visaType: 'Visitor Visa',
        country: 'Chennai',
        rating: 5,
        content: 'The fees have gone up a lot (paid around ₹22k), but the online process is smooth. I got my visa in just 8 days because I uploaded my property papers.',
        avatar: 'https://i.pravatar.cc/150?u=arun_nz',
        avatarAlt: 'Arun Kumar',
        date: 'Last Month',
        processingTime: '8 Days'
      },
      {
        id: 't2',
        name: 'Meera Patel',
        visaType: 'Visitor Visa',
        country: 'Ahmedabad',
        rating: 4,
        content: 'They asked for additional documents about my job to prove I would return. Once I sent the HR letter, it was approved quickly.',
        avatar: 'https://i.pravatar.cc/150?u=meera_nz',
        avatarAlt: 'Meera Patel',
        date: '3 Months Ago',
        processingTime: '25 Days'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'Why is the fee so high?',
        answer: 'In late 2024, the government increased visa fees to cover processing costs, and the IVL (Conservation Levy) was raised to NZD 100.',
        category: 'Fees'
      },
      {
        id: 'faq2',
        question: 'What is the IVL?',
        answer: 'The International Visitor Conservation and Tourism Levy (IVL) is a mandatory NZD 100 fee charged to most tourists to fund tourism infrastructure and conservation.',
        category: 'Fees'
      },
      {
        id: 'faq3',
        question: 'Do I need a physical passport stamp?',
        answer: 'No. New Zealand issues "Label-less" e-Visas. You will receive a PDF grant letter which you must print and carry.',
        category: 'Documents'
      }
    ],
    embassyInfo: {
      name: 'New Zealand High Commission',
      address: 'Sir Edmund Hillary Marg, Chanakyapuri, New Delhi - 110021',
      phone: '011-4688-3170',
      email: 'nzhcindia@mfat.govt.nz',
      website: 'https://www.mfat.govt.nz/en/countries-and-regions/asia/india/new-zealand-high-commission',
      workingHours: 'Mon-Fri 9:00 AM - 5:00 PM',
      latitude: 28.59,
      longitude: 77.18
    },
    recentUpdates: [
      {
        id: 'nz-update-1',
        date: '2025-10-01',
        title: 'Fee & IVL Increase',
        description: 'Visitor Visa fee increased to NZD 341 and IVL increased to NZD 100.',
        impact: 'negative',
        icon: 'CreditCard'
      }
    ],
    stats: {
      totalApplications: 12000,
      averageProcessingDays: 15,
      approvalRate: 89.0,
      rejectionReasons: [
        {
          reason: 'Bona Fide Applicant Concerns',
          percentage: 70,
          prevention: 'You MUST prove strong ties to India (Job, Family, Assets) to convince them you will leave.'
        },
        {
          reason: 'Insufficient Funds',
          percentage: 20,
          prevention: 'Show NZD 1,000/month per person in liquid cash/savings.'
        }
      ]
    },
    similarDestinations: ['australia', 'uk', 'canada']
  }
];
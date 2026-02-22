import { ServiceCategory } from '../types';

export const servicesData: ServiceCategory[] = [
  // =========================================================================
  // 1. JOB SEEKER VISAS
  // =========================================================================
  // {
  //   id: 'job-seeker',
  //   title: 'Job Seeker Visas',
  //   description: 'Land in your dream country without a job offer. These visas allow you to enter and search for employment for a specific duration.',
  //   heroImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2600&auto=format&fit=crop',
  //   subServices: [
  //     {
  //       id: 'germany-opportunity-card',
  //       title: 'Germany Opportunity Card',
  //       country: 'Germany',
  //       description: 'A points-based visa that allows skilled workers to enter Germany to look for work for up to one year.',
  //       features: [
  //         'Valid for 1 Year',
  //         'Work part-time (20hrs/week) permitted',
  //         'No strict German language required',
  //         'Fast track to Residence Permit'
  //       ],
  //       requirements: [
  //         'Recognized Degree or Vocational Training',
  //         'Basic English (B2) or German (A1)',
  //         'Proof of funds (€1000+/month)',
  //         '6+ Points on Opportunity Scale'
  //       ]
  //     },
  //     {
  //       id: 'austria-job-seeker',
  //       title: 'Austria Red-White-Red Seeker',
  //       country: 'Austria',
  //       description: 'A 6-month visa for highly qualified individuals to search for employment in Austria.',
  //       features: [
  //         '6 Months validity',
  //         'Direct pathway to Red-White-Red Card',
  //         'Access to EU labor market',
  //         'High quality of life'
  //       ],
  //       requirements: [
  //         '70/100 Points (Education, Experience, Age)',
  //         'Recognized University Degree',
  //         'Proof of Funds for stay',
  //         'Health Insurance coverage'
  //       ]
  //     },
  //     {
  //       id: 'portugal-job-seeker',
  //       title: 'Portugal Job Seeker Visa',
  //       country: 'Portugal',
  //       description: 'A highly popular entry route to Europe. Valid for 120 days, renewable for 60 more to find a job.',
  //       features: [
  //         'Total 6 months duration',
  //         'Access to Schengen Area',
  //         'Convertible to Residence Permit',
  //         'Bring family members (under specific conditions)'
  //       ],
  //       requirements: [
  //         'Proof of financial resources',
  //         'Health Insurance',
  //         'Return ticket proof',
  //         'Clean Criminal Record'
  //       ]
  //     },
  //     {
  //       id: 'uae-job-seeker',
  //       title: 'UAE Job Seeker Visa',
  //       country: 'Dubai (UAE)',
  //       description: 'A visit visa specifically designed for professionals to explore job opportunities in the UAE.',
  //       features: [
  //         'Available for 60, 90, or 120 days',
  //         'No Host/Sponsor required',
  //         'Convertible to Employment Visa',
  //         'Multiple entry options available'
  //       ],
  //       requirements: [
  //         'Bachelor’s Degree (Top 500 universities preferred)',
  //         'Financial Guarantee (Deposit)',
  //         'Health Insurance',
  //         'Clean Criminal Record'
  //       ]
  //     },
  //     {
  //       id: 'sweden-job-seeker',
  //       title: 'Sweden Job Seeker Visa',
  //       country: 'Sweden',
  //       description: 'Look for work or explore business startup opportunities in Sweden for up to 9 months.',
  //       features: [
  //         'Valid for 3 to 9 months',
  //         'Bring immediate family',
  //         'Permission to start a business',
  //         'Path to Work Permit'
  //       ],
  //       requirements: [
  //         'Advanced Degree (Master’s or PhD)',
  //         'Proof of assets for the entire stay',
  //         'Comprehensive Health Insurance',
  //         'Intention to seek employment'
  //       ]
  //     },
  //   ]
  // },

  // =========================================================================
  // 2. WORK VISAS
  // =========================================================================
  {
    id: 'work',
    title: 'Work Overseas',
    description: 'Secure a work permit and build your international career. We assist with employer-sponsored visas and work permits.',
    heroImage: 'https://i.pinimg.com/1200x/0e/98/4d/0e984d6da39ebf35560b6599df7af0bc.jpg',
    subServices: [
      {
        id: 'uk-skilled-worker',
        title: 'UK Skilled Worker Visa',
        country: 'United Kingdom',
        description: 'The main visa route for skilled workers who have a job offer from an approved employer.',
        features: [
          'Stay for up to 5 years',
          'Bring partner and children',
          'Route to Indefinite Leave to Remain (ILR)',
          'Work in shortage occupations'
        ],
        requirements: [
          'Certificate of Sponsorship (CoS)',
          'Job is on eligible list',
          'Salary £26,200 or going rate',
          'B1 Level English'
        ]
      },
      {
        id: 'ireland-critical-skills',
        title: 'Ireland Critical Skills Permit',
        country: 'Ireland',
        description: 'Designed to attract highly skilled people into the labour market with the aim of encouraging them to take up permanent residence.',
        features: [
          'PR after just 2 years',
          'Spouse can work immediately',
          'No Labour Market Needs Test',
          'Fast processing time'
        ],
        requirements: [
          'Job offer of €32k+ (Strategic List) or €64k+ (Any)',
          '2-year job offer contract',
          'Relevant degree qualification',
          'Employer is registered in Ireland'
        ]
      },
      {
        id: 'canada-work-permit',
        title: 'Canada Work Permit (LMIA)',
        country: 'Canada',
        description: 'Employer-specific work permit supported by a Labour Market Impact Assessment.',
        features: [
          'Gain Canadian Experience (CEC)',
          'Pathway to PR via Express Entry',
          'Spouse Open Work Permit eligible',
          'Free healthcare in province'
        ],
        requirements: [
          'Positive LMIA from employer',
          'Job offer letter',
          'Proof of fitness and security',
          'Relevant work experience'
        ]
      },
      {
        id: 'usa-h1b',
        title: 'USA H-1B Visa',
        country: 'USA',
        description: 'The most sought-after non-immigrant visa for IT and specialty occupation professionals.',
        features: [
          'Dual intent (Can apply for Green Card)',
          'Valid for 3 years (extendable to 6)',
          'Spouse can work (H4 EAD)',
          'High earning potential'
        ],
        requirements: [
          'Job offer from US employer',
          'Specialty occupation requiring degree',
          'Bachelor’s degree or higher',
          'Employer must file LCA'
        ]
      },
      {
        id: 'singapore-ep',
        title: 'Singapore Employment Pass',
        country: 'Singapore',
        description: 'For foreign professionals, managers and executives. Requires earning at least $5,000 a month.',
        features: [
          'World-class business hub',
          'Low income tax rates',
          'Path to Permanent Residence (PR)',
          'Bring family (Dependant’s Pass)'
        ],
        requirements: [
          'Job offer in Singapore',
          'Salary of SGD 5,000+',
          'Good University Degree',
          'COMPASS Framework scoring'
        ]
      },
      {
        id: 'malaysia-digital',
        title: 'Malaysia Digital Nomad (DE Rantau)',
        country: 'Malaysia',
        description: 'A visa for digital professionals to work remotely from Malaysia for up to 12 months.',
        features: [
          'Valid for 12 months (Renewable)',
          'Bring spouse and children',
          'Low cost of living',
          'Tax benefits'
        ],
        requirements: [
          'Contract with foreign client/company',
          'Income > USD 24,000/year',
          'IT/Digital domain profession',
          'Health Insurance'
        ]
      },
    ]
  },

  // =========================================================================
  // 5. VISIT & TOURIST VISAS
  // =========================================================================
  {
    id: 'visit',
    title: 'Visit & Tourist',
    description: 'Tourist and business visitor visas for short-term travel. We handle the documentation for you.',
    heroImage: 'https://i.pinimg.com/1200x/f9/4c/58/f94c5898fcc5227a6b969b303bf8a1b6.jpg',
    subServices: [
      {
        id: 'schengen-tourist',
        title: 'Schengen Tourist Visa',
        country: 'All Schengen Countries',
        description: 'The golden ticket to Europe. One visa covers France, Germany, Italy, Swiss, Spain, and 24 others.',
        features: [
          'Access 29 European Countries',
          'Valid for 90 Days in 180 days',
          'Multiple Entry Options',
          'Cross borders freely'
        ],
        requirements: [
          'Travel Insurance (€30k coverage)',
          'Flight & Hotel Bookings',
          'Bank Statements (3-6 months)',
          'Employment Proof/NOC'
        ]
      },
      {
        id: 'singapore-tourist',
        title: 'Singapore Tourist Visa',
        country: 'Singapore',
        description: 'Electronic visa for social visits, tourism or medical treatment.',
        features: [
          'Fast Processing (3-5 days)',
          '30 Days Validity (Extendable)',
          'E-Visa convenience',
          'Clean & Safe destination'
        ],
        requirements: [
          'Form 14A',
          'Passport valid for 6 months',
          'Confirmed return ticket',
          'Hotel accommodation'
        ]
      },
      {
        id: 'dubai-tourist',
        title: 'Dubai Tourist Visa',
        country: 'Dubai (UAE)',
        description: 'Easy online visa for tourism, shopping festivals, and family visits.',
        features: [
          '30 or 60 Days Single/Multiple',
          'Insurance included usually',
          'Fast track options',
          'No physical passport required'
        ],
        requirements: [
          'Passport Copy',
          'Passport Size Photo',
          'Onward Flight Ticket',
          'Sponsor (Airline/Hotel/Agent)'
        ]
      },
      {
        id: 'usa-b1b2',
        title: 'USA B1/B2 Visa',
        country: 'USA',
        description: 'The standard visitor visa for business meetings (B1) and tourism (B2).',
        features: [
          'Usually valid for 10 Years',
          'Multiple Entry',
          'Stay up to 6 months per visit',
          'Attend conferences/meetings'
        ],
        requirements: [
          'DS-160 Form',
          'Strong ties to home country',
          'Interview at US Consulate',
          'Financial Ability'
        ]
      },
      {
        id: 'australia-visitor',
        title: 'Australia Visitor (Subclass 600)',
        country: 'Australia',
        description: 'For tourists, business visitors, or to see family in Australia.',
        features: [
          'Stay 3, 6 or 12 months',
          'Tourism or Business Stream',
          'Fast e-lodgement',
          'No interview required usually'
        ],
        requirements: [
          'Genuine Temporary Entrant evidence',
          'Proof of Funds',
          'Itinerary/Leave Letter',
          'Health check (for longer stays)'
        ]
      },
      {
        id: 'uk-standard-visitor',
        title: 'UK Standard Visitor Visa',
        country: 'United Kingdom',
        description: 'For tourism, business, study (courses up to 6 months) and other permitted activities.',
        features: [
          '6 Months Validity',
          'Attend meetings/conferences',
          'Short term study allowed',
          'Visit friends and family'
        ],
        requirements: [
          'Proof of Earnings',
          'Travel History',
          'Accommodation details',
          'Intent to leave UK'
        ]
      }
    ]
  },

  // =========================================================================
  // 4. STUDY ABROAD
  // =========================================================================
  {
    id: 'study',
    title: 'Study Abroad',
    description: 'Transform your future with world-class education. We assist with admissions, SOPs, and Student Visas.',
    heroImage: 'https://i.pinimg.com/1200x/17/ef/b9/17efb9fed905f2ba62c13f99e00e774f.jpg',
    subServices: [
      {
        id: 'study-usa',
        title: 'Study in USA (F1 Visa)',
        country: 'USA',
        description: 'Home to the Ivy League and top tech universities. OPT allows 3 years of work.',
        features: [
          'STEM OPT (3 Years work rights)',
          'Highest starting salaries',
          'Diverse campus life',
          'Scholarship opportunities'
        ],
        requirements: [
          'I-20 Form from University',
          'GRE/GMAT scores',
          'TOEFL/IELTS scores',
          'Proof of funds'
        ]
      },
      {
        id: 'study-uk',
        title: 'Study in UK',
        country: 'United Kingdom',
        description: 'Short 1-year Masters programs and 2-year Post Study Work (PSW) visa.',
        features: [
          'Masters duration: 1 Year',
          'PSW Visa: 2 Years',
          'No GRE required usually',
          'Historic universities'
        ],
        requirements: [
          'CAS Letter',
          'IELTS (usually 6.5)',
          'Academic transcripts',
          'Tuberculosis test'
        ]
      },
      {
        id: 'study-australia',
        title: 'Study in Australia (Subclass 500)',
        country: 'Australia',
        description: 'World-class research opportunities and a relaxed lifestyle with generous post-study work rights.',
        features: [
          'Post-Study Work (2-4 Years)',
          'Part-time work rights (48 hrs/fortnight)',
          'Regional area study bonuses',
          'Pathway to PR via 189/190'
        ],
        requirements: [
          'Confirmation of Enrolment (CoE)',
          'GTE (Genuine Temporary Entrant) Statement',
          'OSHC Health Insurance',
          'IELTS/PTE Score'
        ]
      },
      {
        id: 'study-canada',
        title: 'Study in Canada',
        country: 'Canada',
        description: 'Affordable education with a direct path to PR via PGWP (Post Grad Work Permit).',
        features: [
          'Up to 3 Years PGWP',
          'Work part-time while studying',
          'Pathway to PR (CEC)',
          'Safe and welcoming'
        ],
        requirements: [
          'Letter of Acceptance',
          'SDS Stream (IELTS 6.0)',
          'GIC Certificate ($10,000)',
          'Medical Exam'
        ]
      },
      {
        id: 'study-germany',
        title: 'Study in Germany',
        country: 'Germany',
        description: 'Tuition-free education at public universities and 18-month job seeker visa after graduation.',
        features: [
          'Zero/Low Tuition Fees',
          '18 Month Job Search Visa',
          'Strong Engineering Focus',
          'Travel whole of Europe'
        ],
        requirements: [
          'University Entrance Qualification',
          'Blocked Account (~€11k)',
          'Health Insurance',
          'German/English proficiency'
        ]
      }
    ]
  },
  // =========================================================================
  // 5. BUSINESS & INVESTOR VISAS
  // =========================================================================
  // {
  //   id: 'business',
  //   title: 'Business & Investor',
  //   description: 'Launch your startup, expand your business, or secure residency through investment. Tailored for HNWIs and Entrepreneurs.',
  //   heroImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2600&auto=format&fit=crop',
  //   subServices: [
  //     {
  //       id: 'canada-startup',
  //       title: 'Canada Start-Up Visa',
  //       country: 'Canada',
  //       description: 'A direct PR pathway for immigrant entrepreneurs with the skills and potential to build businesses in Canada.',
  //       features: [
  //         'Direct Permanent Residency',
  //         'No minimum investment (Angel/Incubator)',
  //         'Up to 5 co-founders per startup',
  //         'Access to North American market'
  //       ],
  //       requirements: [
  //         'Letter of Support from Designated Org',
  //         'CLB 5 Language Score',
  //         'Settlement Funds',
  //         'Ownership of at least 10% of voting rights'
  //       ]
  //     },
  //     {
  //       id: 'uk-innovator',
  //       title: 'UK Innovator Founder',
  //       country: 'United Kingdom',
  //       description: 'For experienced business people seeking to establish a business in the UK.',
  //       features: [
  //         'No minimum investment funds required',
  //         'Settlement (ILR) after 3 years',
  //         'Family can join you',
  //         'Work for your business'
  //       ],
  //       requirements: [
  //         'Endorsement from approved body',
  //         'Innovative, Viable, Scalable business idea',
  //         'B2 Level English',
  //         'Maintenance funds'
  //       ]
  //     },
  //     {
  //       id: 'dubai-golden-visa',
  //       title: 'UAE Golden Visa',
  //       country: 'Dubai (UAE)',
  //       description: '10-year residency for investors, real estate owners, and specialized talents.',
  //       features: [
  //         '10 Year Validity',
  //         '100% Business Ownership',
  //         'No Sponsor Needed',
  //         'Sponsor unlimited domestic helpers'
  //       ],
  //       requirements: [
  //         'Real Estate Investment AED 2M+',
  //         'Or Public Investment AED 2M+',
  //         'Or Specialized Talent (Doctors/Coders)'
  //       ]
  //     },
  //     {
  //       id: 'eb5-usa',
  //       title: 'USA EB-5 Investor Visa',
  //       country: 'USA',
  //       description: 'Green card through investment in US commercial enterprise.',
  //       features: [
  //         'Green Card for Family',
  //         'Live Anywhere in US',
  //         'No Sponsorship Required',
  //         'Path to Citizenship'
  //       ],
  //       requirements: [
  //         '$800k Investment in TEA (Targeted Employment Area)',
  //         'Create 10 Jobs',
  //         'Source of Funds Proof',
  //         'At-risk investment requirement'
  //       ]
  //     }
  //   ]
  // },
// =========================================================================
  // 6. IMMIGRATION (PR PATHWAYS)
  // =========================================================================
  {
    id: 'immigration',
    title: 'Immigration & PR',
    description: 'Permanent Residency pathways for skilled workers and families looking to settle permanently abroad.',
    heroImage: 'https://static.toiimg.com/thumb/msid-122319262,width-1280,height-720,resizemode-4/122319262.jpg',
    subServices: [
      {
        id: 'canada-express-entry',
        title: 'Canada Express Entry (PR)',
        country: 'Canada',
        description: 'The fastest and most popular pathway to Canadian Permanent Residency. Managed under FSW, CEC, and FST programs.',
        features: [
          'Process time: 6-8 months',
          'Live anywhere in Canada',
          'Free healthcare for family',
          'Citizenship after 3 years'
        ],
        requirements: [
          'CRS Score (Age, Education, Work)',
          'IELTS/CELPIP (CLB 7+)',
          'ECA Report for Education',
          'Proof of Funds (~$14,000 CAD)'
        ]
      },
      {
        id: 'australia-189',
        title: 'Australia Skilled Independent (Subclass 189)',
        country: 'Australia',
        description: 'A points-tested permanent visa for skilled workers who are not sponsored by an employer or family member.',
        features: [
          'Permanent residence indefinitely',
          'Sponsor eligible relatives',
          'Enroll in Medicare',
          'Live/work anywhere in Australia'
        ],
        requirements: [
          'Score 65+ Points (Test)',
          'Under 45 years of age',
          'Positive Skills Assessment',
          'Competent English (IELTS 6+)'
        ]
      },
      {
        id: 'nz-skilled-migrant',
        title: 'NZ Skilled Migrant Category',
        country: 'New Zealand',
        description: 'The main pathway for skilled workers to gain residence in New Zealand based on a 6-point system.',
        features: [
          'Indefinite stay rights',
          'Includes partner & children',
          'Free education for kids',
          'Safe & peaceful environment'
        ],
        requirements: [
          '6 Points (Qualifications/Income/Registration)',
          'Job offer in New Zealand',
          'Age under 55',
          'English proficiency'
        ]
      },
      {
        id: 'germany-pr',
        title: 'Germany Settlement Permit (Niederlassungserlaubnis)',
        country: 'Germany',
        description: 'Permanent residence for those who have lived and worked in Germany for a few years (fast-track for Blue Card holders).',
        features: [
          'No work restrictions',
          'Guaranteed social security',
          'EU-wide travel rights',
          'Family reunification rights'
        ],
        requirements: [
          'Held residence title for 5 years (or 21/33 months for Blue Card)',
          'B1 German language skills',
          'Paid pension contributions',
          'Secure livelihood'
        ]
      }
    ]
  },

  // =========================================================================
  // 7. FAMILY & SPOUSE VISAS
  // =========================================================================
  {
    id: 'family',
    title: 'Family & Spouse',
    description: 'Reunite with your loved ones. We assist with spousal sponsorship, parent visas, and child dependency claims.',
    heroImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2600&auto=format&fit=crop',
    subServices: [
      {
        id: 'uk-spouse',
        title: 'UK Spouse / Partner Visa',
        country: 'United Kingdom',
        description: 'Join your British or settled partner in the UK. Leads to ILR (Indefinite Leave to Remain) after 5 years.',
        features: [
          'Right to work in UK',
          'Access to NHS (with surcharge)',
          'Route to British Citizenship',
          'Include dependent children'
        ],
        requirements: [
          'Sponsor income £29,000/year (2024/25)',
          'Genuine Relationship Proof',
          'A1 English Language (Applicant)',
          'Suitable Accommodation'
        ]
      },
      {
        id: 'canada-spousal',
        title: 'Canada Spousal Sponsorship',
        country: 'Canada',
        description: 'Canadian citizens or PRs can sponsor their spouse, common-law, or conjugal partner for PR.',
        features: [
          'Sponsor can live outside Canada (Citizens only)',
          'Open Work Permit available while processing',
          'No minimum income for spousal cases usually',
          'End-to-end PR status'
        ],
        requirements: [
          'Legally married or Common-law (1 year)',
          'Sponsor must not be on social assistance',
          'Police Certificates',
          'Medical Exam'
        ]
      },
      {
        id: 'usa-green-card-family',
        title: 'USA Family Green Card (F Category)',
        country: 'USA',
        description: 'For relatives of US Citizens (IR) and Permanent Residents (F-Preference).',
        features: [
          'Permanent Resident Card',
          'Work legally in the US',
          'Path to Citizenship (Naturalization)',
          'Petition for other relatives later'
        ],
        requirements: [
          'Form I-130 Petition',
          'Affidavit of Support (I-864)',
          'Civil Documents',
          'Priority Date must be current (for Preference)'
        ]
      },
      {
        id: 'aus-partner',
        title: 'Australia Partner Visa (820/801)',
        country: 'Australia',
        description: 'A two-stage process (Temporary then Permanent) for partners of Australian citizens or residents.',
        features: [
          'Full work rights immediately',
          'Medicare access upon application',
          'Stay indefinitely',
          'Travel freely'
        ],
        requirements: [
          'Married or De Facto (12 months)',
          'Sponsor is Aus Citizen/PR',
          'Health & Character checks',
          'Genuine relationship evidence'
        ]
      }
    ]
  }
];

import { allCountries } from 'country-telephone-data';

export const visitPurposes = [
  { value: 'tourism', label: '🏖️ Tourism / Sightseeing' },
  { value: 'business', label: '💼 Business / Conference' },
  { value: 'family', label: '🏠 Family Visit' },
  { value: 'medical', label: '🏥 Medical Treatment' },
  { value: 'work', label: '🛠️ Job Seeker' }
];

export const phoneCountries = allCountries.map(c => ({
  value: c.iso2,
  label: c.name,
  dialCode: `+${c.dialCode}`,
  flag: c.iso2.toUpperCase().replace(/./g, char => 
    String.fromCodePoint(char.charCodeAt(0) + 127397)
  )
})).sort((a, b) => a.label.localeCompare(b.label));

export const universalVisaProtocol = [
  { id: 'univ-tourist', name: '🏖️ Tourist / Sightseeing', description: 'Standard visa for leisure and travel.', duration: '90 Days', price: 10499, processingTime: '15-20 Days', icon: 'Sun' },
  { id: 'univ-visit', name: '🏠 Family / Personal Visit', description: 'For visiting friends, family, or personal affairs.', duration: '90 Days', price: 10499, processingTime: '15-20 Days', icon: 'Home' },
  { id: 'univ-business', name: '💼 Business / Professional', description: 'For meetings, conferences, or trade fairs.', duration: '90 Days', price: 10499, processingTime: '15-20 Days', icon: 'Briefcase' },
  { id: 'univ-study', name: '🎓 Study / Student', description: 'For academic studies or short courses.', duration: 'Course Duration', price: 10499, processingTime: '30-45 Days', icon: 'GraduationCap' },
  { id: 'univ-work', name: '🛠️ Employment / Work', description: 'For skilled workers or job seekers.', duration: 'Up to 2 Years', price: 10499, processingTime: '45-60 Days', icon: 'Zap' },
  { id: 'univ-investor', name: '💎 Investor / Residency', description: 'For capital investment or business establishment.', duration: 'Permanent/Temporary', price: 10499, processingTime: '90+ Days', icon: 'Gem' }
];

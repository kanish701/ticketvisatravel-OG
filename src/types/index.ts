// ==========================================
// 1. PUBLIC DOMAIN ENTITIES (Country Data)
// ==========================================

export interface Country {
  id: string;
  name: string;
  code: string;
  flag: string;
  heroImage: string;
  heroImageAlt: string;
  tagline: string;
  description: string;
  visaTypes: VisaType[];
  processingTime: string;
  successRate: number;
  pricing: CountryPricing;
  requirements: Requirement[];
  timeline: TimelineStep[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  embassyInfo: EmbassyInfo;
  recentUpdates: PolicyUpdate[];
  similarDestinations: string[]; // IDs of similar countries
  stats: CountryStats;
  region?: string;
}

export interface VisaType {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  processingTime: string;
  icon: string;
}

export interface CountryPricing {
  embassyFee: string;
  serviceFee: number;
  totalFee: number;
  currency: string;
  refundPolicy: string;
}

// General requirements for display (e.g., "Valid Passport")
export interface Requirement {
  id: string;
  category: string;
  title: string;
  description: string;
  mandatory: boolean;
  icon: string;
}

export interface TimelineStep {
  id: string;
  step: number;
  title: string;
  description: string;
  duration: string;
  status: 'completed' | 'current' | 'upcoming';
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  avatarAlt: string;
  country: string;
  visaType: string;
  rating: number;
  date: string;
  content: string;
  image?: string;
  imageAlt?: string;
  processingTime: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface EmbassyInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  workingHours: string;
  latitude: number;
  longitude: number;
}

export interface PolicyUpdate {
  id: string;
  title: string;
  date: string;
  description: string;
  impact?: 'positive' | 'neutral' | 'negative';
  icon?: string;
}

export interface SimilarDestination {
  id: string;
  name: string;
  code: string;
  flag: string;
  image: string;
  imageAlt: string;
  processingTime: string;
  successRate: number;
  price: number;
}

export interface CountryStats {
  totalApplications: number;
  averageProcessingDays: number;
  approvalRate: number;
  rejectionReasons: RejectionReason[];
}

export interface RejectionReason {
  reason: string;
  percentage: number;
  prevention: string;
}

export interface Currency {
  code: string;
  symbol: string;
  rate: number;
}

// ==========================================
// 2. APPLICATION FORM LOGIC (Internal State)
// ==========================================

// Specific requirements for file upload validation
export interface DocumentRequirement {
  id: string;
  name: string;
  description: string;
  format: string[]; // e.g. ['jpg', 'pdf']
  maxSize: number;  // in bytes
  required: boolean;
  icon: string;
}

export interface UploadedDocument {
  id: string;
  requirementId: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  url: string;        // Local preview URL (blob:...)
  base64?: string;    // Raw data for Google Sheets/Apps Script
  uploadedAt: string;
  status: 'pending' | 'verified' | 'rejected';
}

export interface ApplicationFormData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    nationality: string;
    passportNumber: string;
    passportExpiry: string;
  };
  travelInfo: {
    countryId: string;
    visaTypeId: string;
    travelDate: string;
    returnDate: string;
    purpose: string;
  };
  documents: UploadedDocument[];
  additionalInfo: {
    previousVisas: boolean;
    criminalRecord: boolean;
    medicalConditions: boolean;
    emergencyContact: string;
    emergencyPhone: string;
  };
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface FormSection {
  id: string;
  title: string;
  description: string;
  fields: number;
  completedFields: number;
  completed: boolean;
  icon: string;
}

// src/types.ts
export interface ServiceCategory {
  id: 'migrate' | 'work' | 'study' | 'invest' | 'job-seeker' | 'visit' | 'business' | 'immigration' | 'family';
  title: string;
  description: string;
  heroImage: string;
  subServices: SubService[];
}

export interface SubService {
  id: string; // e.g., 'job-seeker-visa'
  title: string; // e.g., 'Germany Job Seeker'
  country: string;
  description: string;
  features: string[];
  requirements: string[];
  heroImage?: string;
}
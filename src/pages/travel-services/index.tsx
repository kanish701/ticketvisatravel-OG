import React, { useState, useEffect, useRef } from 'react';
import { Globe, ArrowRightLeft, ChevronDown, MessageCircle, Navigation, PlaneLanding, User, Mail, Phone, Briefcase, ShieldCheck, FileText, ArrowRight, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  isSameMonth, 
  isSameDay, 
  addDays, 
  eachDayOfInterval,
  isBefore,
  startOfDay
} from 'date-fns';

// ... (Keep the AIRPORTS constant from previous code)
const AIRPORTS = [
  // ── INDIA ──────────────────────────────────────────────────
  { city: 'Delhi', code: 'DEL' },
  { city: 'Mumbai', code: 'BOM' },
  { city: 'Bangalore', code: 'BLR' },
  { city: 'Hyderabad', code: 'HYD' },
  { city: 'Chennai', code: 'MAA' },
  { city: 'Kolkata', code: 'CCU' },
  { city: 'Kochi', code: 'COK' },
  { city: 'Ahmedabad', code: 'AMD' },
  { city: 'Pune', code: 'PNQ' },
  { city: 'Goa', code: 'GOI' },
  { city: 'Coimbatore', code: 'CJB' },
  { city: 'Jaipur', code: 'JAI' },
  { city: 'Chandigarh', code: 'IXC' },
  { city: 'Lucknow', code: 'LKO' },
  { city: 'Guwahati', code: 'GAU' },
  { city: 'Thiruvananthapuram', code: 'TRV' },
  { city: 'Nagpur', code: 'NAG' },
  { city: 'Srinagar', code: 'SXR' },
  { city: 'Amritsar', code: 'ATQ' },
  { city: 'Varanasi', code: 'VNS' },
  { city: 'Indore', code: 'IDR' },
  { city: 'Bhubaneswar', code: 'BBI' },
  { city: 'Patna', code: 'PAT' },
  { city: 'Raipur', code: 'RPR' },
  { city: 'Ranchi', code: 'IXR' },
  { city: 'Mangalore', code: 'IXE' },
  { city: 'Madurai', code: 'IXM' },
  { city: 'Trichy', code: 'TRZ' },
  { city: 'Vijayawada', code: 'VGA' },
  { city: 'Visakhapatnam', code: 'VTZ' },
  { city: 'Dehradun', code: 'DED' },
  { city: 'Bagdogra', code: 'IXB' },
  { city: 'Jammu', code: 'IXJ' },
  { city: 'Leh', code: 'IXL' },
  { city: 'Port Blair', code: 'IXZ' },
  { city: 'Agartala', code: 'IXA' },
  { city: 'Imphal', code: 'IMF' },
  { city: 'Dibrugarh', code: 'DIB' },
  { city: 'Jorhat', code: 'JRH' },
  { city: 'Aurangabad', code: 'IXU' },
  { city: 'Hubli', code: 'HBX' },
  { city: 'Belgaum', code: 'IXG' },
  { city: 'Tirupati', code: 'TIR' },
  { city: 'Udaipur', code: 'UDR' },
  { city: 'Jodhpur', code: 'JDH' },
  { city: 'Bhopal', code: 'BHO' },
  { city: 'Surat', code: 'STV' },
  { city: 'Vadodara', code: 'BDQ' },
  { city: 'Rajkot', code: 'RAJ' },
  { city: 'Jabalpur', code: 'JLR' },
  { city: 'Gorakhpur', code: 'GOP' },
  { city: 'Agra', code: 'AGR' },
  { city: 'Shimla', code: 'SLV' },

  // ── MIDDLE EAST ────────────────────────────────────────────
  { city: 'Dubai', code: 'DXB' },
  { city: 'Abu Dhabi', code: 'AUH' },
  { city: 'Sharjah', code: 'SHJ' },
  { city: 'Doha', code: 'DOH' },
  { city: 'Riyadh', code: 'RUH' },
  { city: 'Jeddah', code: 'JED' },
  { city: 'Dammam', code: 'DMM' },
  { city: 'Medina', code: 'MED' },
  { city: 'Kuwait City', code: 'KWI' },
  { city: 'Muscat', code: 'MCT' },
  { city: 'Bahrain', code: 'BAH' },
  { city: 'Amman', code: 'AMM' },
  { city: 'Beirut', code: 'BEY' },
  { city: 'Tel Aviv', code: 'TLV' },
  { city: 'Tehran', code: 'IKA' },
  { city: 'Baghdad', code: 'BGW' },

  // ── SOUTHEAST ASIA ─────────────────────────────────────────
  { city: 'Singapore', code: 'SIN' },
  { city: 'Bangkok', code: 'BKK' },
  { city: 'Kuala Lumpur', code: 'KUL' },
  { city: 'Jakarta', code: 'CGK' },
  { city: 'Manila', code: 'MNL' },
  { city: 'Ho Chi Minh City', code: 'SGN' },
  { city: 'Hanoi', code: 'HAN' },
  { city: 'Bali', code: 'DPS' },
  { city: 'Yangon', code: 'RGN' },
  { city: 'Colombo', code: 'CMB' },
  { city: 'Dhaka', code: 'DAC' },
  { city: 'Kathmandu', code: 'KTM' },
  { city: 'Phnom Penh', code: 'PNH' },
  { city: 'Vientiane', code: 'VTE' },
  { city: 'Phuket', code: 'HKT' },
  { city: 'Chiang Mai', code: 'CNX' },
  { city: 'Cebu', code: 'CEB' },
  { city: 'Male', code: 'MLE' },

  // ── EAST ASIA ──────────────────────────────────────────────
  { city: 'Tokyo (Narita)', code: 'NRT' },
  { city: 'Tokyo (Haneda)', code: 'HND' },
  { city: 'Beijing', code: 'PEK' },
  { city: 'Shanghai (Pudong)', code: 'PVG' },
  { city: 'Shanghai (Hongqiao)', code: 'SHA' },
  { city: 'Hong Kong', code: 'HKG' },
  { city: 'Seoul (Incheon)', code: 'ICN' },
  { city: 'Seoul (Gimpo)', code: 'GMP' },
  { city: 'Taipei', code: 'TPE' },
  { city: 'Guangzhou', code: 'CAN' },
  { city: 'Shenzhen', code: 'SZX' },
  { city: 'Chengdu', code: 'CTU' },
  { city: 'Osaka', code: 'KIX' },
  { city: 'Nagoya', code: 'NGO' },
  { city: 'Fukuoka', code: 'FUK' },
  { city: 'Sapporo', code: 'CTS' },
  { city: 'Busan', code: 'PUS' },
  { city: 'Chongqing', code: 'CKG' },
  { city: 'Kunming', code: 'KMG' },
  { city: 'Wuhan', code: 'WUH' },
  { city: 'Xiamen', code: 'XMN' },
  { city: 'Ulaanbaatar', code: 'ULN' },
  { city: 'Macau', code: 'MFM' },

  // ── CENTRAL ASIA ───────────────────────────────────────────
  { city: 'Almaty', code: 'ALA' },
  { city: 'Tashkent', code: 'TAS' },
  { city: 'Kabul', code: 'KBL' },
  { city: 'Islamabad', code: 'ISB' },
  { city: 'Karachi', code: 'KHI' },
  { city: 'Lahore', code: 'LHE' },

  // ── EUROPE ─────────────────────────────────────────────────
  { city: 'London (Heathrow)', code: 'LHR' },
  { city: 'London (Gatwick)', code: 'LGW' },
  { city: 'London (Stansted)', code: 'STN' },
  { city: 'Paris (CDG)', code: 'CDG' },
  { city: 'Paris (Orly)', code: 'ORY' },
  { city: 'Frankfurt', code: 'FRA' },
  { city: 'Amsterdam', code: 'AMS' },
  { city: 'Madrid', code: 'MAD' },
  { city: 'Barcelona', code: 'BCN' },
  { city: 'Rome (Fiumicino)', code: 'FCO' },
  { city: 'Milan (Malpensa)', code: 'MXP' },
  { city: 'Munich', code: 'MUC' },
  { city: 'Zurich', code: 'ZRH' },
  { city: 'Vienna', code: 'VIE' },
  { city: 'Brussels', code: 'BRU' },
  { city: 'Copenhagen', code: 'CPH' },
  { city: 'Stockholm', code: 'ARN' },
  { city: 'Oslo', code: 'OSL' },
  { city: 'Helsinki', code: 'HEL' },
  { city: 'Dublin', code: 'DUB' },
  { city: 'Lisbon', code: 'LIS' },
  { city: 'Athens', code: 'ATH' },
  { city: 'Istanbul', code: 'IST' },
  { city: 'Warsaw', code: 'WAW' },
  { city: 'Prague', code: 'PRG' },
  { city: 'Budapest', code: 'BUD' },
  { city: 'Bucharest', code: 'OTP' },
  { city: 'Moscow (Sheremetyevo)', code: 'SVO' },
  { city: 'Moscow (Domodedovo)', code: 'DME' },
  { city: 'St. Petersburg', code: 'LED' },
  { city: 'Kiev', code: 'KBP' },
  { city: 'Geneva', code: 'GVA' },
  { city: 'Nice', code: 'NCE' },
  { city: 'Manchester', code: 'MAN' },
  { city: 'Edinburgh', code: 'EDI' },
  { city: 'Birmingham', code: 'BHX' },
  { city: 'Hamburg', code: 'HAM' },
  { city: 'Dusseldorf', code: 'DUS' },
  { city: 'Berlin', code: 'BER' },
  { city: 'Palma Mallorca', code: 'PMI' },
  { city: 'Venice', code: 'VCE' },
  { city: 'Naples', code: 'NAP' },
  { city: 'Sofia', code: 'SOF' },
  { city: 'Riga', code: 'RIX' },
  { city: 'Tallinn', code: 'TLL' },
  { city: 'Vilnius', code: 'VNO' },
  { city: 'Zagreb', code: 'ZAG' },
  { city: 'Belgrade', code: 'BEG' },
  { city: 'Reykjavik', code: 'KEF' },

  // ── AFRICA ─────────────────────────────────────────────────
  { city: 'Cairo', code: 'CAI' },
  { city: 'Johannesburg', code: 'JNB' },
  { city: 'Cape Town', code: 'CPT' },
  { city: 'Nairobi', code: 'NBO' },
  { city: 'Lagos', code: 'LOS' },
  { city: 'Casablanca', code: 'CMN' },
  { city: 'Addis Ababa', code: 'ADD' },
  { city: 'Accra', code: 'ACC' },
  { city: 'Dar es Salaam', code: 'DAR' },
  { city: 'Tunis', code: 'TUN' },
  { city: 'Algiers', code: 'ALG' },
  { city: 'Entebbe', code: 'EBB' },
  { city: 'Dakar', code: 'DKR' },
  { city: 'Abidjan', code: 'ABJ' },
  { city: 'Khartoum', code: 'KRT' },
  { city: 'Mauritius', code: 'MRU' },
  { city: 'Zanzibar', code: 'ZNZ' },

  // ── NORTH AMERICA ──────────────────────────────────────────
  { city: 'New York (JFK)', code: 'JFK' },
  { city: 'New York (Newark)', code: 'EWR' },
  { city: 'Los Angeles', code: 'LAX' },
  { city: 'Chicago (O\'Hare)', code: 'ORD' },
  { city: 'Chicago (Midway)', code: 'MDW' },
  { city: 'San Francisco', code: 'SFO' },
  { city: 'Miami', code: 'MIA' },
  { city: 'Dallas (DFW)', code: 'DFW' },
  { city: 'Atlanta', code: 'ATL' },
  { city: 'Seattle', code: 'SEA' },
  { city: 'Boston', code: 'BOS' },
  { city: 'Washington (Dulles)', code: 'IAD' },
  { city: 'Washington (Reagan)', code: 'DCA' },
  { city: 'Houston (Bush)', code: 'IAH' },
  { city: 'Houston (Hobby)', code: 'HOU' },
  { city: 'Las Vegas', code: 'LAS' },
  { city: 'Denver', code: 'DEN' },
  { city: 'Phoenix', code: 'PHX' },
  { city: 'Minneapolis', code: 'MSP' },
  { city: 'Detroit', code: 'DTW' },
  { city: 'Orlando', code: 'MCO' },
  { city: 'Portland', code: 'PDX' },
  { city: 'San Diego', code: 'SAN' },
  { city: 'Salt Lake City', code: 'SLC' },
  { city: 'Toronto', code: 'YYZ' },
  { city: 'Vancouver', code: 'YVR' },
  { city: 'Montreal', code: 'YUL' },
  { city: 'Calgary', code: 'YYC' },
  { city: 'Ottawa', code: 'YOW' },
  { city: 'Mexico City', code: 'MEX' },
  { city: 'Cancun', code: 'CUN' },
  { city: 'Guadalajara', code: 'GDL' },
  { city: 'Havana', code: 'HAV' },
  { city: 'San Jose (Costa Rica)', code: 'SJO' },
  { city: 'Panama City', code: 'PTY' },
  { city: 'Guatemala City', code: 'GUA' },

  // ── SOUTH AMERICA ──────────────────────────────────────────
  { city: 'São Paulo (Guarulhos)', code: 'GRU' },
  { city: 'São Paulo (Congonhas)', code: 'CGH' },
  { city: 'Rio de Janeiro (Galeão)', code: 'GIG' },
  { city: 'Buenos Aires (Ezeiza)', code: 'EZE' },
  { city: 'Buenos Aires (Aeroparque)', code: 'AEP' },
  { city: 'Bogotá', code: 'BOG' },
  { city: 'Lima', code: 'LIM' },
  { city: 'Santiago', code: 'SCL' },
  { city: 'Caracas', code: 'CCS' },
  { city: 'Quito', code: 'UIO' },
  { city: 'Medellín', code: 'MDE' },
  { city: 'Montevideo', code: 'MVD' },
  { city: 'Asunción', code: 'ASU' },
  { city: 'La Paz', code: 'LPB' },

  // ── OCEANIA ────────────────────────────────────────────────
  { city: 'Sydney', code: 'SYD' },
  { city: 'Melbourne', code: 'MEL' },
  { city: 'Brisbane', code: 'BNE' },
  { city: 'Perth', code: 'PER' },
  { city: 'Auckland', code: 'AKL' },
  { city: 'Adelaide', code: 'ADL' },
  { city: 'Gold Coast', code: 'OOL' },
  { city: 'Christchurch', code: 'CHC' },
  { city: 'Wellington', code: 'WLG' },
  { city: 'Cairns', code: 'CNS' },
  { city: 'Nadi (Fiji)', code: 'NAN' },
  { city: 'Honolulu', code: 'HNL' },
  { city: 'Guam', code: 'GUM' },
];

const COUNTRY_CODES = [
  // ── SOUTH ASIA ─────────────────────────────────────────────
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'Pakistan', code: '+92', flag: '🇵🇰' },
  { name: 'Bangladesh', code: '+880', flag: '🇧🇩' },
  { name: 'Sri Lanka', code: '+94', flag: '🇱🇰' },
  { name: 'Nepal', code: '+977', flag: '🇳🇵' },
  { name: 'Maldives', code: '+960', flag: '🇲🇻' },
  { name: 'Bhutan', code: '+975', flag: '🇧🇹' },
  { name: 'Afghanistan', code: '+93', flag: '🇦🇫' },

  // ── MIDDLE EAST ────────────────────────────────────────────
  { name: 'United Arab Emirates', code: '+971', flag: '🇦🇪' },
  { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
  { name: 'Qatar', code: '+974', flag: '🇶🇦' },
  { name: 'Kuwait', code: '+965', flag: '🇰🇼' },
  { name: 'Oman', code: '+968', flag: '🇴🇲' },
  { name: 'Bahrain', code: '+973', flag: '🇧🇭' },
  { name: 'Jordan', code: '+962', flag: '🇯🇴' },
  { name: 'Lebanon', code: '+961', flag: '🇱🇧' },
  { name: 'Israel', code: '+972', flag: '🇮🇱' },
  { name: 'Palestine', code: '+970', flag: '🇵🇸' },
  { name: 'Iran', code: '+98', flag: '🇮🇷' },
  { name: 'Iraq', code: '+964', flag: '🇮🇶' },
  { name: 'Syria', code: '+963', flag: '🇸🇾' },
  { name: 'Yemen', code: '+967', flag: '🇾🇪' },

  // ── SOUTHEAST ASIA ─────────────────────────────────────────
  { name: 'Singapore', code: '+65', flag: '🇸🇬' },
  { name: 'Malaysia', code: '+60', flag: '🇲🇾' },
  { name: 'Thailand', code: '+66', flag: '🇹🇭' },
  { name: 'Indonesia', code: '+62', flag: '🇮🇩' },
  { name: 'Philippines', code: '+63', flag: '🇵🇭' },
  { name: 'Vietnam', code: '+84', flag: '🇻🇳' },
  { name: 'Myanmar', code: '+95', flag: '🇲🇲' },
  { name: 'Cambodia', code: '+855', flag: '🇰🇭' },
  { name: 'Laos', code: '+856', flag: '🇱🇦' },
  { name: 'Brunei', code: '+673', flag: '🇧🇳' },
  { name: 'Timor-Leste', code: '+670', flag: '🇹🇱' },

  // ── EAST ASIA ──────────────────────────────────────────────
  { name: 'China', code: '+86', flag: '🇨🇳' },
  { name: 'Japan', code: '+81', flag: '🇯🇵' },
  { name: 'South Korea', code: '+82', flag: '🇰🇷' },
  { name: 'North Korea', code: '+850', flag: '🇰🇵' },
  { name: 'Hong Kong', code: '+852', flag: '🇭🇰' },
  { name: 'Macau', code: '+853', flag: '🇲🇴' },
  { name: 'Taiwan', code: '+886', flag: '🇹🇼' },
  { name: 'Mongolia', code: '+976', flag: '🇲🇳' },

  // ── CENTRAL ASIA ───────────────────────────────────────────
  { name: 'Kazakhstan', code: '+7', flag: '🇰🇿' },
  { name: 'Uzbekistan', code: '+998', flag: '🇺🇿' },
  { name: 'Turkmenistan', code: '+993', flag: '🇹🇲' },
  { name: 'Kyrgyzstan', code: '+996', flag: '🇰🇬' },
  { name: 'Tajikistan', code: '+992', flag: '🇹🇯' },

  // ── EUROPE ─────────────────────────────────────────────────
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'Germany', code: '+49', flag: '🇩🇪' },
  { name: 'France', code: '+33', flag: '🇫🇷' },
  { name: 'Italy', code: '+39', flag: '🇮🇹' },
  { name: 'Spain', code: '+34', flag: '🇪🇸' },
  { name: 'Portugal', code: '+351', flag: '🇵🇹' },
  { name: 'Netherlands', code: '+31', flag: '🇳🇱' },
  { name: 'Belgium', code: '+32', flag: '🇧🇪' },
  { name: 'Switzerland', code: '+41', flag: '🇨🇭' },
  { name: 'Austria', code: '+43', flag: '🇦🇹' },
  { name: 'Sweden', code: '+46', flag: '🇸🇪' },
  { name: 'Norway', code: '+47', flag: '🇳🇴' },
  { name: 'Denmark', code: '+45', flag: '🇩🇰' },
  { name: 'Finland', code: '+358', flag: '🇫🇮' },
  { name: 'Ireland', code: '+353', flag: '🇮🇪' },
  { name: 'Greece', code: '+30', flag: '🇬🇷' },
  { name: 'Turkey', code: '+90', flag: '🇹🇷' },
  { name: 'Russia', code: '+7', flag: '🇷🇺' },
  { name: 'Ukraine', code: '+380', flag: '🇺🇦' },
  { name: 'Poland', code: '+48', flag: '🇵🇱' },
  { name: 'Czech Republic', code: '+420', flag: '🇨🇿' },
  { name: 'Slovakia', code: '+421', flag: '🇸🇰' },
  { name: 'Hungary', code: '+36', flag: '🇭🇺' },
  { name: 'Romania', code: '+40', flag: '🇷🇴' },
  { name: 'Bulgaria', code: '+359', flag: '🇧🇬' },
  { name: 'Serbia', code: '+381', flag: '🇷🇸' },
  { name: 'Croatia', code: '+385', flag: '🇭🇷' },
  { name: 'Slovenia', code: '+386', flag: '🇸🇮' },
  { name: 'Bosnia & Herzegovina', code: '+387', flag: '🇧🇦' },
  { name: 'Montenegro', code: '+382', flag: '🇲🇪' },
  { name: 'North Macedonia', code: '+389', flag: '🇲🇰' },
  { name: 'Albania', code: '+355', flag: '🇦🇱' },
  { name: 'Kosovo', code: '+383', flag: '🇽🇰' },
  { name: 'Latvia', code: '+371', flag: '🇱🇻' },
  { name: 'Lithuania', code: '+370', flag: '🇱🇹' },
  { name: 'Estonia', code: '+372', flag: '🇪🇪' },
  { name: 'Belarus', code: '+375', flag: '🇧🇾' },
  { name: 'Moldova', code: '+373', flag: '🇲🇩' },
  { name: 'Luxembourg', code: '+352', flag: '🇱🇺' },
  { name: 'Iceland', code: '+354', flag: '🇮🇸' },
  { name: 'Malta', code: '+356', flag: '🇲🇹' },
  { name: 'Cyprus', code: '+357', flag: '🇨🇾' },
  { name: 'Georgia', code: '+995', flag: '🇬🇪' },
  { name: 'Armenia', code: '+374', flag: '🇦🇲' },
  { name: 'Azerbaijan', code: '+994', flag: '🇦🇿' },
  { name: 'Liechtenstein', code: '+423', flag: '🇱🇮' },
  { name: 'Monaco', code: '+377', flag: '🇲🇨' },
  { name: 'Andorra', code: '+376', flag: '🇦🇩' },
  { name: 'San Marino', code: '+378', flag: '🇸🇲' },
  { name: 'Vatican City', code: '+379', flag: '🇻🇦' },

  // ── NORTH AMERICA ──────────────────────────────────────────
  { name: 'USA', code: '+1', flag: '🇺🇸' },
  { name: 'Canada', code: '+1', flag: '🇨🇦' },
  { name: 'Mexico', code: '+52', flag: '🇲🇽' },

  // ── CARIBBEAN ──────────────────────────────────────────────
  { name: 'Cuba', code: '+53', flag: '🇨🇺' },
  { name: 'Jamaica', code: '+1876', flag: '🇯🇲' },
  { name: 'Haiti', code: '+509', flag: '🇭🇹' },
  { name: 'Dominican Republic', code: '+1809', flag: '🇩🇴' },
  { name: 'Puerto Rico', code: '+1787', flag: '🇵🇷' },
  { name: 'Trinidad & Tobago', code: '+1868', flag: '🇹🇹' },
  { name: 'Barbados', code: '+1246', flag: '🇧🇧' },
  { name: 'Bahamas', code: '+1242', flag: '🇧🇸' },

  // ── CENTRAL AMERICA ────────────────────────────────────────
  { name: 'Guatemala', code: '+502', flag: '🇬🇹' },
  { name: 'Belize', code: '+501', flag: '🇧🇿' },
  { name: 'Honduras', code: '+504', flag: '🇭🇳' },
  { name: 'El Salvador', code: '+503', flag: '🇸🇻' },
  { name: 'Nicaragua', code: '+505', flag: '🇳🇮' },
  { name: 'Costa Rica', code: '+506', flag: '🇨🇷' },
  { name: 'Panama', code: '+507', flag: '🇵🇦' },

  // ── SOUTH AMERICA ──────────────────────────────────────────
  { name: 'Brazil', code: '+55', flag: '🇧🇷' },
  { name: 'Argentina', code: '+54', flag: '🇦🇷' },
  { name: 'Colombia', code: '+57', flag: '🇨🇴' },
  { name: 'Chile', code: '+56', flag: '🇨🇱' },
  { name: 'Peru', code: '+51', flag: '🇵🇪' },
  { name: 'Venezuela', code: '+58', flag: '🇻🇪' },
  { name: 'Ecuador', code: '+593', flag: '🇪🇨' },
  { name: 'Bolivia', code: '+591', flag: '🇧🇴' },
  { name: 'Paraguay', code: '+595', flag: '🇵🇾' },
  { name: 'Uruguay', code: '+598', flag: '🇺🇾' },
  { name: 'Guyana', code: '+592', flag: '🇬🇾' },
  { name: 'Suriname', code: '+597', flag: '🇸🇷' },

  // ── AFRICA ─────────────────────────────────────────────────
  { name: 'Nigeria', code: '+234', flag: '🇳🇬' },
  { name: 'South Africa', code: '+27', flag: '🇿🇦' },
  { name: 'Egypt', code: '+20', flag: '🇪🇬' },
  { name: 'Kenya', code: '+254', flag: '🇰🇪' },
  { name: 'Ethiopia', code: '+251', flag: '🇪🇹' },
  { name: 'Ghana', code: '+233', flag: '🇬🇭' },
  { name: 'Tanzania', code: '+255', flag: '🇹🇿' },
  { name: 'Uganda', code: '+256', flag: '🇺🇬' },
  { name: 'Morocco', code: '+212', flag: '🇲🇦' },
  { name: 'Algeria', code: '+213', flag: '🇩🇿' },
  { name: 'Tunisia', code: '+216', flag: '🇹🇳' },
  { name: 'Libya', code: '+218', flag: '🇱🇾' },
  { name: 'Sudan', code: '+249', flag: '🇸🇩' },
  { name: 'South Sudan', code: '+211', flag: '🇸🇸' },
  { name: 'Senegal', code: '+221', flag: '🇸🇳' },
  { name: 'Ivory Coast', code: '+225', flag: '🇨🇮' },
  { name: 'Cameroon', code: '+237', flag: '🇨🇲' },
  { name: 'Angola', code: '+244', flag: '🇦🇴' },
  { name: 'Mozambique', code: '+258', flag: '🇲🇿' },
  { name: 'Zimbabwe', code: '+263', flag: '🇿🇼' },
  { name: 'Zambia', code: '+260', flag: '🇿🇲' },
  { name: 'Rwanda', code: '+250', flag: '🇷🇼' },
  { name: 'Somalia', code: '+252', flag: '🇸🇴' },
  { name: 'Madagascar', code: '+261', flag: '🇲🇬' },
  { name: 'Mali', code: '+223', flag: '🇲🇱' },
  { name: 'Burkina Faso', code: '+226', flag: '🇧🇫' },
  { name: 'Niger', code: '+227', flag: '🇳🇪' },
  { name: 'Chad', code: '+235', flag: '🇹🇩' },
  { name: 'Guinea', code: '+224', flag: '🇬🇳' },
  { name: 'Benin', code: '+229', flag: '🇧🇯' },
  { name: 'Togo', code: '+228', flag: '🇹🇬' },
  { name: 'Sierra Leone', code: '+232', flag: '🇸🇱' },
  { name: 'Liberia', code: '+231', flag: '🇱🇷' },
  { name: 'Malawi', code: '+265', flag: '🇲🇼' },
  { name: 'Namibia', code: '+264', flag: '🇳🇦' },
  { name: 'Botswana', code: '+267', flag: '🇧🇼' },
  { name: 'Mauritius', code: '+230', flag: '🇲🇺' },
  { name: 'Eswatini', code: '+268', flag: '🇸🇿' },
  { name: 'Lesotho', code: '+266', flag: '🇱🇸' },
  { name: 'Djibouti', code: '+253', flag: '🇩🇯' },
  { name: 'Eritrea', code: '+291', flag: '🇪🇷' },
  { name: 'Congo (DRC)', code: '+243', flag: '🇨🇩' },
  { name: 'Congo (Republic)', code: '+242', flag: '🇨🇬' },
  { name: 'Gabon', code: '+241', flag: '🇬🇦' },
  { name: 'Equatorial Guinea', code: '+240', flag: '🇬🇶' },
  { name: 'Central African Republic', code: '+236', flag: '🇨🇫' },
  { name: 'Burundi', code: '+257', flag: '🇧🇮' },
  { name: 'Comoros', code: '+269', flag: '🇰🇲' },
  { name: 'Cape Verde', code: '+238', flag: '🇨🇻' },
  { name: 'São Tomé & Príncipe', code: '+239', flag: '🇸🇹' },
  { name: 'Seychelles', code: '+248', flag: '🇸🇨' },
  { name: 'Guinea-Bissau', code: '+245', flag: '🇬🇼' },
  { name: 'Gambia', code: '+220', flag: '🇬🇲' },

  // ── OCEANIA ────────────────────────────────────────────────
  { name: 'Australia', code: '+61', flag: '🇦🇺' },
  { name: 'New Zealand', code: '+64', flag: '🇳🇿' },
  { name: 'Fiji', code: '+679', flag: '🇫🇯' },
  { name: 'Papua New Guinea', code: '+675', flag: '🇵🇬' },
  { name: 'Solomon Islands', code: '+677', flag: '🇸🇧' },
  { name: 'Vanuatu', code: '+678', flag: '🇻🇺' },
  { name: 'Samoa', code: '+685', flag: '🇼🇸' },
  { name: 'Tonga', code: '+676', flag: '🇹🇴' },
  { name: 'Kiribati', code: '+686', flag: '🇰🇮' },
  { name: 'Micronesia', code: '+691', flag: '🇫🇲' },
  { name: 'Palau', code: '+680', flag: '🇵🇼' },
  { name: 'Marshall Islands', code: '+692', flag: '🇲🇭' },
  { name: 'Nauru', code: '+674', flag: '🇳🇷' },
  { name: 'Tuvalu', code: '+688', flag: '🇹🇻' },

];

const FlightSearchPage = () => {
    const [searchData, setSearchData] = useState({
        fullName: '', countryCode: '+91', whatsapp: '', email: '', purpose: 'Tourism / Holiday',
        from: '', fromCode: '', to: '', toCode: '',
        departureDate: format(new Date(), 'yyyy-MM-dd'), 
        returnDate: format(addDays(new Date(), 7), 'yyyy-MM-dd'), 
        travellers: '1', cabin: 'Economy Class'
    });

    const [fromQuery, setFromQuery] = useState('');
    const [toQuery, setToQuery] = useState('');
    const [showFromDropdown, setShowFromDropdown] = useState(false);
    const [showToDropdown, setShowToDropdown] = useState(false);
    const [showTravellerDropdown, setShowTravellerDropdown] = useState(false);
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
    const [showPurposeDropdown, setShowPurposeDropdown] = useState(false);
    const [showDepartureCalendar, setShowDepartureCalendar] = useState(false);
    const [showReturnCalendar, setShowReturnCalendar] = useState(false);
    const [viewDate, setViewDate] = useState(new Date());
    const [countrySearchQuery, setCountrySearchQuery] = useState('');

    const fromRef = useRef<HTMLDivElement>(null);
    const toRef = useRef<HTMLDivElement>(null);
    const travellerRef = useRef<HTMLDivElement>(null);
    const countryRef = useRef<HTMLDivElement>(null);
    const purposeRef = useRef<HTMLDivElement>(null);
    const departureRef = useRef<HTMLDivElement>(null);
    const returnRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (fromRef.current && !fromRef.current.contains(event.target as Node)) setShowFromDropdown(false);
            if (toRef.current && !toRef.current.contains(event.target as Node)) setShowToDropdown(false);
            if (travellerRef.current && !travellerRef.current.contains(event.target as Node)) setShowTravellerDropdown(false);
            if (countryRef.current && !countryRef.current.contains(event.target as Node)) {
                setShowCountryDropdown(false);
                setCountrySearchQuery('');
            }
            if (purposeRef.current && !purposeRef.current.contains(event.target as Node)) setShowPurposeDropdown(false);
            if (departureRef.current && !departureRef.current.contains(event.target as Node)) setShowDepartureCalendar(false);
            if (returnRef.current && !returnRef.current.contains(event.target as Node)) setShowReturnCalendar(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setSearchData({ ...searchData, [e.target.name]: e.target.value });
    };

    const sendToWhatsApp = (e: React.FormEvent) => {
        e.preventDefault();
        if(!searchData.fullName || !searchData.whatsapp) return alert("Registry Incomplete.");

        const message = `*OFFICIAL TRAVEL REQUEST*%0A--------------------------%0A*CLIENT DETAILS*%0AName: ${searchData.fullName}%0AWA: ${searchData.countryCode} ${searchData.whatsapp} mail: ${searchData.email} %0APurpose: ${searchData.purpose}%0A%0A*FLIGHT PATH*%0AOrigin: ${searchData.from} (${searchData.fromCode})%0ADestination: ${searchData.to} (${searchData.toCode})%0ADate: ${searchData.departureDate} to ${searchData.returnDate}%0APax: ${searchData.travellers} (${searchData.cabin})`;
        window.open(`https://wa.me/919087612111?text=${message}`, '_blank');
    };

    const renderCalendar = (type: 'departure' | 'return') => {
        const monthStart = startOfMonth(viewDate);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);
        const days = eachDayOfInterval({ start: startDate, end: endDate });
        const selectedDate = type === 'departure' ? new Date(searchData.departureDate) : new Date(searchData.returnDate);

        return (
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="absolute top-full left-0 mt-4 w-80 bg-white/90 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.15)] border border-white/50 rounded-3xl z-[120] p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between mb-6">
                    <button onClick={() => setViewDate(subMonths(viewDate, 1))} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
                        <ArrowRight className="rotate-180 text-blue-900" size={16} />
                    </button>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-900">
                        {format(viewDate, 'MMMM yyyy')}
                    </span>
                    <button onClick={() => setViewDate(addMonths(viewDate, 1))} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
                        <ArrowRight className="text-blue-900" size={16} />
                    </button>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                        <div key={d} className="text-[8px] font-black text-slate-300 uppercase text-center py-2">{d}</div>
                    ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                    {days.map((day, idx) => {
                        const isCurrentMonth = isSameMonth(day, monthStart);
                        const isSelected = isSameDay(day, selectedDate);
                        const isPast = isBefore(day, startOfDay(new Date()));
                        const isDeparture = type === 'return' && isSameDay(day, new Date(searchData.departureDate));

                        return (
                            <button
                                key={idx}
                                disabled={isPast}
                                onClick={() => {
                                    setSearchData({ ...searchData, [type === 'departure' ? 'departureDate' : 'returnDate']: format(day, 'yyyy-MM-dd') });
                                    if (type === 'departure') {
                                        setShowDepartureCalendar(false);
                                        // Auto adjust return if before departure
                                        if (isBefore(new Date(searchData.returnDate), day)) {
                                            setSearchData(prev => ({ ...prev, departureDate: format(day, 'yyyy-MM-dd'), returnDate: format(addDays(day, 7), 'yyyy-MM-dd') }));
                                        }
                                    } else {
                                        setShowReturnCalendar(false);
                                    }
                                }}
                                className={`
                                    relative h-10 w-full rounded-xl text-[10px] font-bold transition-all flex items-center justify-center
                                    ${!isCurrentMonth ? 'text-slate-200' : 'text-slate-600'}
                                    ${isSelected ? 'bg-blue-900 text-white shadow-lg scale-110 z-10' : 'hover:bg-blue-50 hover:text-blue-900'}
                                    ${isPast ? 'opacity-20 cursor-not-allowed grayscale' : 'cursor-pointer'}
                                    ${isDeparture ? 'border-2 border-blue-900/10' : ''}
                                `}
                            >
                                {format(day, 'd')}
                                {isSameDay(day, new Date()) && (
                                    <div className="absolute bottom-1.5 w-1 h-1 rounded-full bg-blue-400" />
                                )}
                            </button>
                        );
                    })}
                </div>
                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                     <p className="text-[8px] font-black text-slate-300 uppercase italic">Ticketing Standard 01-A</p>
                     <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                </div>
            </motion.div>
        );
    };

    return (
        <div className="min-h-screen bg-[#FDFCFB] py-32 px-6 font-sans selection:bg-blue-900 selection:text-white">
            <style dangerouslySetInnerHTML={{ __html: `
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
            `}} />
            <div className="max-w-6xl mx-auto space-y-16">
                
                {/* --- 01. PASSENGER REGISTRY --- */}
                <div className="relative">
                    <div className="absolute -left-12 top-0 text-5xl font-serif italic text-slate-100 hidden xl:block select-none">01</div>
                    <div className="space-y-10">
                        <div className="border-b border-slate-100 pb-4">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-900/40 mb-2">Personal Information</h2>
                            <h3 className="text-3xl font-serif italic text-slate-900">Passenger <span className="not-italic font-black">Registry.</span></h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            <div className="group space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-blue-900 transition-colors flex items-center gap-2">
                                    <User size={14}/> Full Legal Name
                                </label>
                                <input 
                                    name="fullName" 
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent border-b border-slate-100 py-3 font-serif italic text-lg outline-none focus:border-blue-900 transition-all placeholder:text-slate-200" 
                                    placeholder="Enter Registry Name" 
                                />
                            </div>

                            <div className="group space-y-2 relative" ref={countryRef}>
                                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 transition-colors flex items-center gap-2">
                                    <Phone size={14}/> WhatsApp Registry
                                </label>
                                <div className="flex gap-2">
                                    <div 
                                        onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                                        className="bg-transparent border-b border-slate-100 py-3 font-bold text-slate-900 outline-none cursor-pointer flex items-center gap-2"
                                    >
                                        <span className="text-lg">{COUNTRY_CODES.find(c => c.code === searchData.countryCode)?.flag}</span>
                                        <span className="text-lg">{searchData.countryCode}</span>
                                        <ChevronDown size={12} className={`text-slate-400 transition-transform ${showCountryDropdown ? 'rotate-180' : ''}`} />
                                    </div>
                                    <input 
                                        name="whatsapp" 
                                        type="tel"
                                        onChange={handleInputChange}
                                        className="flex-1 bg-transparent border-b border-slate-100 py-3 font-serif italic text-lg outline-none focus:border-blue-900 transition-all placeholder:text-slate-200" 
                                        placeholder="00000 00000" 
                                    />
                                </div>
                                <AnimatePresence>
                                    {showCountryDropdown && (
                                        <motion.div 
                                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                            className="absolute top-full left-0 mt-2 w-64 bg-white/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/40 rounded-2xl z-[110] overflow-hidden py-2"
                                        >
                                            <div className="p-3 border-b border-white/20 sticky top-0 bg-white/10 backdrop-blur-md z-10">
                                                <div className="relative">
                                                    <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                                    <input 
                                                        type="text"
                                                        value={countrySearchQuery}
                                                        onChange={(e) => setCountrySearchQuery(e.target.value)}
                                                        placeholder="Search country..."
                                                        className="w-full bg-white/20 border border-white/30 rounded-lg py-1.5 pl-8 pr-3 text-[10px] font-bold text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-900/40 transition-all"
                                                        onClick={(e) => e.stopPropagation()}
                                                    />
                                                </div>
                                            </div>
                                            <div className="max-h-64 overflow-y-auto custom-scrollbar">
                                                {COUNTRY_CODES.filter(c => 
                                                    c.name.toLowerCase().includes(countrySearchQuery.toLowerCase()) || 
                                                    c.code.includes(countrySearchQuery)
                                                ).map((c) => (
                                                    <div 
                                                        key={c.code}
                                                        onClick={() => {
                                                            setSearchData({ ...searchData, countryCode: c.code });
                                                            setShowCountryDropdown(false);
                                                            setCountrySearchQuery('');
                                                        }}
                                                        className={`px-4 py-3 hover:bg-blue-900 hover:text-white cursor-pointer transition-all flex items-center justify-between ${searchData.countryCode === c.code ? 'bg-blue-50 text-blue-900' : 'text-slate-600'}`}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <span className="text-xl">{c.flag}</span>
                                                            <span className="text-xs font-black uppercase tracking-widest">{c.name}</span>
                                                        </div>
                                                        <span className="text-[10px] font-black opacity-40">{c.code}</span>
                                                    </div>
                                                ))}
                                                {COUNTRY_CODES.filter(c => 
                                                    c.name.toLowerCase().includes(countrySearchQuery.toLowerCase()) || 
                                                    c.code.includes(countrySearchQuery)
                                                ).length === 0 && (
                                                    <div className="px-6 py-8 text-center">
                                                        <p className="text-[10px] font-black uppercase text-slate-300 italic tracking-widest">No matching registry found</p>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="group space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-blue-900 transition-colors flex items-center gap-2">
                                    <Mail size={14}/> Direct Email
                                </label>
                                <input 
                                    name="email" 
                                    type="email"
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent border-b border-slate-100 py-3 font-serif italic text-lg outline-none focus:border-blue-900 transition-all placeholder:text-slate-200" 
                                    placeholder="client@domain.com" 
                                />
                            </div>
                            
                            <div className="group space-y-2 relative" ref={purposeRef}>
                                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-2">
                                    <Briefcase size={14}/> Purpose of Visit
                                </label>
                                <div 
                                    onClick={() => setShowPurposeDropdown(!showPurposeDropdown)}
                                    className="w-full bg-transparent border-b border-slate-100 py-3.5 font-black text-slate-900 outline-none cursor-pointer flex items-center justify-between"
                                >
                                    <span className="font-serif italic text-lg text-slate-900">{searchData.purpose}</span>
                                    <ChevronDown size={14} className={`text-slate-400 transition-transform ${showPurposeDropdown ? 'rotate-180' : ''}`} />
                                </div>
                                <AnimatePresence>
                                    {showPurposeDropdown && (
                                        <motion.div 
                                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                            className="absolute top-full right-0 mt-2 w-full bg-white/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/40 rounded-2xl z-[110] overflow-hidden py-2"
                                        >
                                            {['Tourism / Holiday', 'Business / Conference', 'Study / Education', 'Employment / Work'].map((option) => (
                                                <div 
                                                    key={option}
                                                    onClick={() => {
                                                        setSearchData({ ...searchData, purpose: option });
                                                        setShowPurposeDropdown(false);
                                                    }}
                                                    className={`px-6 py-4 hover:bg-blue-900 hover:text-white cursor-pointer transition-all flex items-center justify-between ${searchData.purpose === option ? 'bg-blue-50 text-blue-900' : 'text-slate-600'}`}
                                                >
                                                    <span className="text-xs font-black uppercase tracking-[0.2em]">{option}</span>
                                                    {searchData.purpose === option && <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- 02. FLIGHT LEDGER --- */}
                <div className="relative">
                    <div className="absolute -left-12 top-0 text-5xl font-serif italic text-slate-100 hidden xl:block select-none">02</div>
                    <div className="space-y-10">
                        <div className="border-b border-slate-100 pb-4">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-900/40 mb-2">Travel Details</h2>
                            <h3 className="text-3xl font-serif italic text-slate-900">Travel <span className="not-italic font-black">Preferences.</span></h3>
                        </div>

                        <div className="bg-white border border-slate-200 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] rounded-sm">
                            <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-100 relative">
                                
                                {/* DEPARTURE */}
                                <div ref={fromRef} className="md:col-span-3 p-8 hover:bg-slate-50 transition-colors relative z-40">
                                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 block">From Hub</label>
                                    <input 
                                        value={fromQuery} 
                                        onChange={(e) => {setFromQuery(e.target.value); setShowFromDropdown(true)}} 
                                        onFocus={() => setShowFromDropdown(true)} 
                                        className="text-3xl font-black text-slate-900 w-full bg-transparent outline-none font-serif italic placeholder:text-slate-100" 
                                        placeholder="Origin" 
                                    />
                                    <p className="text-[10px] font-bold text-blue-600 uppercase mt-2 selection:bg-blue-600 selection:text-white">{searchData.fromCode || 'Pending Code'}</p>
                                    <AnimatePresence>
                                        {showFromDropdown && fromQuery.length > 0 && (
                                            <motion.div 
                                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }} 
                                                exit={{ opacity: 0, scale: 0.95, y: 10 }} 
                                                className="absolute top-full left-0 w-[140%] bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,0.2)] border border-white/50 z-[110] max-h-80 overflow-y-auto rounded-3xl py-4 custom-scrollbar"
                                            >
                                                {AIRPORTS.filter(a => a.city.toLowerCase().includes(fromQuery.toLowerCase()) || a.code.toLowerCase().includes(fromQuery.toLowerCase())).slice(0, 8).map((a, i) => (
                                                    <div 
                                                        key={i} 
                                                        onClick={() => { 
                                                            setSearchData(prev => ({...prev, from: a.city, fromCode: a.code})); 
                                                            setFromQuery(a.city); 
                                                            setShowFromDropdown(false); 
                                                        }} 
                                                        className="px-8 py-4 hover:bg-blue-900 hover:text-white cursor-pointer flex justify-between items-center group/item transition-all"
                                                    >
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover/item:bg-white/10 transition-colors">
                                                                <PlaneLanding size={16} className="text-blue-600 group-hover/item:text-white" />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <span className="font-serif italic text-lg leading-tight">{a.city}</span>
                                                                <span className="text-[10px] font-black uppercase tracking-widest opacity-40">International Hub</span>
                                                            </div>
                                                        </div>
                                                        <span className="text-xs font-black px-3 py-1 bg-slate-100 text-slate-900 rounded-lg group-hover/item:bg-white/20 group-hover/item:text-white transition-colors">{a.code}</span>
                                                    </div>
                                                ))}
                                                {AIRPORTS.filter(a => a.city.toLowerCase().includes(fromQuery.toLowerCase()) || a.code.toLowerCase().includes(fromQuery.toLowerCase())).length === 0 && (
                                                    <div className="p-12 text-center space-y-4">
                                                        <Search size={32} className="mx-auto text-slate-200" />
                                                        <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">No Registry Found</p>
                                                    </div>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* TO */}
                                <div ref={toRef} className="md:col-span-3 p-8 hover:bg-slate-50 transition-colors relative z-30">
                                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 block">To Hub</label>
                                    <input 
                                        value={toQuery} 
                                        onChange={(e) => {setToQuery(e.target.value); setShowToDropdown(true)}} 
                                        onFocus={() => setShowToDropdown(true)} 
                                        className="text-3xl font-black text-slate-900 w-full bg-transparent outline-none font-serif italic placeholder:text-slate-100" 
                                        placeholder="Destination" 
                                    />
                                    <p className="text-[10px] font-bold text-blue-600 uppercase mt-2 selection:bg-blue-600 selection:text-white">{searchData.toCode || 'Pending Code'}</p>
                                    <AnimatePresence>
                                        {showToDropdown && toQuery.length > 0 && (
                                            <motion.div 
                                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }} 
                                                exit={{ opacity: 0, scale: 0.95, y: 10 }} 
                                                className="absolute top-full right-0 w-[140%] bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,0.2)] border border-white/50 z-[110] max-h-80 overflow-y-auto rounded-3xl py-4 custom-scrollbar"
                                            >
                                                {AIRPORTS.filter(a => a.city.toLowerCase().includes(toQuery.toLowerCase()) || a.code.toLowerCase().includes(toQuery.toLowerCase())).slice(0, 8).map((a, i) => (
                                                    <div 
                                                        key={i} 
                                                        onClick={() => { 
                                                            setSearchData(prev => ({...prev, to: a.city, toCode: a.code})); 
                                                            setToQuery(a.city); 
                                                            setShowToDropdown(false); 
                                                        }} 
                                                        className="px-8 py-4 hover:bg-blue-900 hover:text-white cursor-pointer flex justify-between items-center group/item transition-all"
                                                    >
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover/item:bg-white/10 transition-colors">
                                                                <Navigation size={14} className="text-blue-600 group-hover/item:text-white" />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <span className="font-serif italic text-lg leading-tight">{a.city}</span>
                                                                <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Entry Port</span>
                                                            </div>
                                                        </div>
                                                        <span className="text-xs font-black px-3 py-1 bg-slate-100 text-slate-900 rounded-lg group-hover/item:bg-white/20 group-hover/item:text-white transition-colors">{a.code}</span>
                                                    </div>
                                                ))}
                                                {AIRPORTS.filter(a => a.city.toLowerCase().includes(toQuery.toLowerCase()) || a.code.toLowerCase().includes(toQuery.toLowerCase())).length === 0 && (
                                                    <div className="p-12 text-center space-y-4">
                                                        <Search size={32} className="mx-auto text-slate-200" />
                                                        <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">No Registry Found</p>
                                                    </div>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* DATE FIELDS */}
                                <div ref={departureRef} className="md:col-span-2 p-8 hover:bg-slate-50 transition-colors group relative cursor-pointer" onClick={() => setShowDepartureCalendar(!showDepartureCalendar)}>
                                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 block group-hover:text-blue-900">Departure</label>
                                    <div className="flex flex-col">
                                        <span className="text-xl font-black text-slate-900 font-serif italic">{format(new Date(searchData.departureDate), 'dd MMM')}</span>
                                        <span className="text-[9px] font-bold text-slate-400 uppercase mt-1">{format(new Date(searchData.departureDate), 'EEEE')}</span>
                                    </div>
                                    <AnimatePresence>
                                        {showDepartureCalendar && renderCalendar('departure')}
                                    </AnimatePresence>
                                </div>
                                <div ref={returnRef} className="md:col-span-2 p-8 hover:bg-slate-50 transition-colors group relative cursor-pointer" onClick={() => setShowReturnCalendar(!showReturnCalendar)}>
                                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 block group-hover:text-blue-900">Return</label>
                                    <div className="flex flex-col">
                                        <span className="text-xl font-black text-slate-900 font-serif italic">{format(new Date(searchData.returnDate), 'dd MMM')}</span>
                                        <span className="text-[9px] font-bold text-slate-400 uppercase mt-1">{format(new Date(searchData.returnDate), 'EEEE')}</span>
                                    </div>
                                    <AnimatePresence>
                                        {showReturnCalendar && renderCalendar('return')}
                                    </AnimatePresence>
                                </div>

                                {/* PAX */}
                                <div ref={travellerRef} className="md:col-span-2 p-8 hover:bg-slate-50 cursor-pointer relative" onClick={() => setShowTravellerDropdown(!showTravellerDropdown)}>
                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Capacity</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-black text-slate-900">{searchData.travellers} Pax</span>
                                        <ChevronDown size={16} className={`text-blue-600 transition-transform ${showTravellerDropdown ? 'rotate-180' : ''}`} />
                                    </div>
                                    <p className="text-[9px] font-bold text-slate-300 uppercase mt-2">Certified Seating</p>
                                    
                                    <AnimatePresence>
                                        {showTravellerDropdown && (
                                            <motion.div 
                                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                                className="absolute top-full right-0 mt-2 w-80 bg-white/80 backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,0.2)] border border-white/50 rounded-3xl z-[110] p-8 space-y-8"
                                            >
                                                <div className="space-y-4">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex flex-col">
                                                            <span className="text-xs font-black uppercase tracking-widest text-slate-900">Travellers</span>
                                                            <span className="text-[10px] text-slate-400 font-bold italic">Max 9 Entries</span>
                                                        </div>
                                                        <div className="flex items-center gap-6">
                                                            <button 
                                                                onClick={(e) => { e.stopPropagation(); setSearchData({ ...searchData, travellers: Math.max(1, parseInt(searchData.travellers) - 1).toString() }); }} 
                                                                className="w-10 h-10 rounded-2xl border border-slate-100 flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all text-slate-400 hover:shadow-xl active:scale-95"
                                                            >-</button>
                                                            <span className="font-black text-xl w-4 text-center text-blue-900 underline decoration-blue-900/20 underline-offset-8">{searchData.travellers}</span>
                                                            <button 
                                                                onClick={(e) => { e.stopPropagation(); setSearchData({ ...searchData, travellers: Math.min(9, parseInt(searchData.travellers) + 1).toString() }); }} 
                                                                className="w-10 h-10 rounded-2xl border border-slate-100 flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all text-slate-400 hover:shadow-xl active:scale-95"
                                                            >+</button>
                                                        </div>
                                                    </div>

                                                    <div className="pt-6 border-t border-slate-100">
                                                        <div className="flex flex-col mb-4">
                                                            <span className="text-xs font-black uppercase tracking-widest text-slate-900">Cabin Class</span>
                                                            <span className="text-[10px] text-slate-400 font-bold italic">Official Grade</span>
                                                        </div>
                                                        <div className="grid grid-cols-1 gap-2">
                                                            {['Economy Class', 'Premium Economy', 'Business Class', 'First Class'].map(cabin => (
                                                                <button 
                                                                    key={cabin}
                                                                    onClick={(e) => { e.stopPropagation(); setSearchData({ ...searchData, cabin }); setShowTravellerDropdown(false); }}
                                                                    className={`flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] py-4 px-6 rounded-2xl border transition-all ${searchData.cabin === cabin ? 'bg-blue-900 border-blue-900 text-white shadow-xl' : 'border-slate-50 hover:border-blue-900/20 hover:bg-slate-50 text-slate-400'}`}
                                                                >
                                                                    {cabin}
                                                                    {searchData.cabin === cabin && <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- 03. EXECUTION --- */}
                <div className="pt-10 flex flex-col items-center gap-12">
                    <div className="flex items-center gap-6 text-slate-400 group cursor-pointer">
                        <ShieldCheck size={20} className="group-hover:text-blue-900 transition-colors" />
                        <p className="text-[10px] font-bold uppercase tracking-widest leading-relaxed text-center max-w-md">
                            By submitting this registry, I authorize <span className="text-blue-900">Ticket Visa Travel Bureau</span> to assess my flight manifest and contact me via verified channels.
                        </p>
                    </div>

                    <button 
                        onClick={sendToWhatsApp} 
                        className="group bg-slate-900 hover:bg-blue-900 text-white px-32 py-6 rounded-full text-sm font-black uppercase tracking-[0.4em] shadow-2xl transform active:scale-95 transition-all flex items-center gap-6"
                    >
                        Execute Registry <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FlightSearchPage;
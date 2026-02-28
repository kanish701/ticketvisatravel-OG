import { useState, ChangeEvent, useMemo } from 'react';
import { allCountries } from 'country-telephone-data'; // ✅ Import dynamic data
import Input from '../../../components/ui/Input';
import { ShieldCheck, ArrowRight, ChevronDown, Search, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ApplicationFormData, ValidationError } from '../../../types';

interface PersonalInfoFormProps {
  formData: ApplicationFormData['personalInfo'];
  onChange: (data: ApplicationFormData['personalInfo']) => void;
  onNext: () => void;
  errors: ValidationError[];
}

const PersonalInfoForm = ({ formData, onChange, onNext, errors }: PersonalInfoFormProps) => {
  const [localData, setLocalData] = useState(formData);
  const [isNationalityOpen, setIsNationalityOpen] = useState(false);
  const [isPhoneCodeOpen, setIsPhoneCodeOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // ✅ Process dynamic country data
  const countries = useMemo(() => {
    return allCountries.map(c => ({
      value: c.iso2,
      label: c.name,
      dialCode: `+${c.dialCode}`,
      // Convert ISO2 to emoji flag
      flag: c.iso2.toUpperCase().replace(/./g, char => 
        String.fromCodePoint(char.charCodeAt(0) + 127397)
      )
    })).sort((a, b) => a.label.localeCompare(b.label));
  }, []);

  // Default selection (India)
  const [selectedPhone, setSelectedPhone] = useState(
    countries.find(c => c.value === 'in') || countries[0]
  );

  const filteredNationalities = countries.filter(opt => 
    opt.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChange = (field: keyof ApplicationFormData['personalInfo'], value: string) => {
    const updated = { ...localData, [field]: value };
    setLocalData(updated);
    onChange(updated);
  };

  const getError = (field: string) => errors.find(e => e.field === field)?.message;

  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8 animate-in fade-in duration-500 font-sans">
      
      {/* Row 1: Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        <Input label="First Name" placeholder="First name as on passport" value={localData.firstName} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('firstName', e.target.value)} error={getError('firstName')} required className="h-12 border-0 border-b border-slate-200 rounded-none bg-transparent px-0 focus:border-blue-600 transition-all font-semibold text-slate-900" />
        <Input label="Last Name" placeholder="Last name as on passport" value={localData.lastName} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('lastName', e.target.value)} error={getError('lastName')} required className="h-12 border-0 border-b border-slate-200 rounded-none bg-transparent px-0 focus:border-blue-600 transition-all font-semibold text-slate-900" />
      </div>

      {/* Row 2: Birth & Dynamic Nationality Search */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        <Input label="Date of Birth" type="date" value={localData.dateOfBirth} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('dateOfBirth', e.target.value)} error={getError('dateOfBirth')} required className="h-12 border-0 border-b border-slate-200 rounded-none bg-transparent px-0 focus:border-blue-600 transition-all font-semibold text-slate-900" />

        <div className="relative flex flex-col gap-1.5">
          <label className="text-xs font-medium text-slate-500 ml-0.5">Nationality</label>
          <div onClick={() => { setIsNationalityOpen(!isNationalityOpen); setIsPhoneCodeOpen(false); }} className="h-12 border-b border-slate-200 flex items-center justify-between cursor-pointer hover:border-blue-600 transition-all">
            <span className={`text-sm font-semibold ${localData.nationality ? 'text-slate-900' : 'text-slate-300'}`}>
              {countries.find(o => o.value === localData.nationality) ? 
                `${countries.find(o => o.value === localData.nationality)?.flag} ${countries.find(o => o.value === localData.nationality)?.label}` 
                : "Select Country"}
            </span>
            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isNationalityOpen ? 'rotate-180 text-blue-600' : ''}`} />
          </div>
          <AnimatePresence>
            {isNationalityOpen && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute left-0 right-0 top-full mt-2 bg-white border border-slate-100 shadow-2xl rounded-2xl z-50 overflow-hidden">
                <div className="p-3 border-b border-slate-50 flex items-center gap-2 bg-slate-50/50">
                  <Search className="w-3.5 h-3.5 text-slate-400" />
                  <input autoFocus placeholder="Search..." className="w-full bg-transparent text-xs font-semibold focus:outline-none" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
                <div className="max-h-48 overflow-y-auto">
                  {filteredNationalities.map((opt) => (
                    <div key={opt.value} onClick={() => { handleChange('nationality', opt.value); setIsNationalityOpen(false); setSearchQuery(''); }} className="flex items-center justify-between px-5 py-3 cursor-pointer hover:bg-blue-50 transition-colors">
                      <span className="text-xs font-bold text-slate-600">{opt.flag} {opt.label}</span>
                      {localData.nationality === opt.value && <Check className="w-3.5 h-3.5 text-blue-600" />}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Row 3: Email & Dynamic Phone Code Dropdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        <Input label="Email Address" type="email" placeholder="email@example.com" value={localData.email} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('email', e.target.value)} error={getError('email')} required className="h-12 border-0 border-b border-slate-200 rounded-none bg-transparent px-0 focus:border-blue-600 transition-all font-semibold text-slate-900" />
        
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-slate-500 ml-0.5">Phone Number</label>
          <div className="flex items-end gap-3 border-b border-slate-200 focus-within:border-blue-600 transition-all">
            <div className="relative pb-3" onClick={() => { setIsPhoneCodeOpen(!isPhoneCodeOpen); setIsNationalityOpen(false); }}>
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="text-sm font-bold text-slate-900 whitespace-nowrap">{selectedPhone.flag} {selectedPhone.dialCode}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </div>
              <AnimatePresence>
                {isPhoneCodeOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute left-0 top-full mt-4 bg-white border border-slate-100 shadow-2xl rounded-2xl z-50 w-64 overflow-hidden">
                    <div className="max-h-48 overflow-y-auto">
                      {countries.map((opt) => (
                        <div key={opt.value} onClick={(e) => { e.stopPropagation(); setSelectedPhone(opt); setIsPhoneCodeOpen(false); }} className="px-5 py-3 cursor-pointer hover:bg-blue-50 flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-600">{opt.flag} {opt.dialCode} <span className="opacity-40 ml-1">{opt.label}</span></span>
                          {selectedPhone.dialCode === opt.dialCode && <Check className="w-3 h-3 text-blue-600" />}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <input type="tel" placeholder="00000 00000" value={localData.phone} onChange={(e) => handleChange('phone', e.target.value)} className="w-full bg-transparent pb-3 text-sm font-semibold text-slate-900 focus:outline-none" />
          </div>
        </div>
      </div>

      {/* Row 4: Passport */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        <Input label="Passport Number" placeholder="Passport number" value={localData.passportNumber} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('passportNumber', e.target.value)} error={getError('passportNumber')} required className="h-12 border-0 border-b border-slate-200 rounded-none bg-transparent px-0 focus:border-blue-600 transition-all font-semibold text-slate-900 uppercase" />
        <Input label="Passport Expiry" type="date" value={localData.passportExpiry} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('passportExpiry', e.target.value)} error={getError('passportExpiry')} required className="h-12 border-0 border-b border-slate-200 rounded-none bg-transparent px-0 focus:border-blue-600 transition-all font-semibold text-slate-900" />
      </div>

      {/* Footer Action */}
      <div className="pt-10 flex flex-col items-center">
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">
          <ShieldCheck className="w-4 h-4 text-blue-500" /> Secure Protocol V.2026
        </div>
        <button onClick={onNext} className="group flex items-center gap-12 bg-slate-950 text-white pl-12 pr-4 py-4 rounded-full hover:bg-blue-600 transition-all duration-500 shadow-xl">
          <span className="text-[11px] font-black uppercase tracking-[0.4em]">Next Step</span>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all duration-500"><ArrowRight className="w-4 h-4" /></div>
        </button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
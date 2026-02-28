import { useState, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, ArrowLeft, ChevronDown, Search, Check, Globe, Calendar, Plane } from 'lucide-react';
import Input from '../../../components/ui/Input';
import { ApplicationFormData, ValidationError, Country } from '../../../types';

interface TravelInfoFormProps {
  formData: ApplicationFormData['travelInfo'];
  onChange: (data: ApplicationFormData['travelInfo']) => void;
  onNext: () => void;
  onBack: () => void;
  errors: ValidationError[];
  countries: Country[];
}

const TravelInfoForm = ({ formData, onChange, onNext, onBack, errors, countries }: TravelInfoFormProps) => {
  const [localData, setLocalData] = useState(formData);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isPurposeOpen, setIsPurposeOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedCountry = countries.find(c => c.id === localData.countryId);

  const handleChange = (field: keyof ApplicationFormData['travelInfo'], value: string) => {
    const updated = { ...localData, [field]: value };
    if (field === 'countryId') updated.visaTypeId = '';
    setLocalData(updated);
    onChange(updated);
  };

  const getError = (field: string) => errors.find(e => e.field === field)?.message;

  const filteredCountries = countries.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visitPurposes = [
    { value: 'tourism', label: '🏖️ Tourism / Sightseeing' },
    { value: 'business', label: '💼 Business / Conference' },
    { value: 'family', label: '🏠 Family Visit' },
    { value: 'medical', label: '🏥 Medical Treatment' },
    { value: 'work', label: '🛠️ Job Seeker' }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8 animate-in fade-in duration-500 font-sans">
      
      {/* --- Destination & Visa Type --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {/* Searchable Destination Country */}
        <div className="relative flex flex-col gap-1.5">
          <label className="text-xs font-medium text-slate-500 ml-0.5">Destination Country</label>
          <div 
            onClick={() => setIsCountryOpen(!isCountryOpen)}
            className="h-12 border-b border-slate-200 flex items-center justify-between cursor-pointer hover:border-blue-600 transition-all"
          >
            <span className={`text-sm font-semibold ${localData.countryId ? 'text-slate-900' : 'text-slate-300'}`}>
              {selectedCountry?.name || "Select Destination"}
            </span>
            <Globe className="w-4 h-4 text-slate-400" />
          </div>

          <AnimatePresence>
            {isCountryOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                className="absolute left-0 right-0 top-full mt-2 bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl z-50 overflow-hidden"
              >
                <div className="p-3 border-b border-slate-50 flex items-center gap-2 bg-slate-50/50">
                  <Search className="w-3.5 h-3.5 text-slate-400" />
                  <input autoFocus placeholder="Search destination..." className="w-full bg-transparent text-xs font-semibold focus:outline-none" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
                <div className="max-h-60 overflow-y-auto">
                  {filteredCountries.map((c) => (
                    <div key={c.id} onClick={() => { handleChange('countryId', c.id); setIsCountryOpen(false); setSearchQuery(''); }} className="flex items-center justify-between px-5 py-3.5 cursor-pointer hover:bg-blue-50 transition-colors">
                      <span className="text-xs font-bold text-slate-600">{c.name}</span>
                      {localData.countryId === c.id && <Check className="w-3.5 h-3.5 text-blue-600" />}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Visa Type - Dynamic Select */}
        <div className="relative flex flex-col gap-1.5">
          <label className="text-xs font-medium text-slate-500 ml-0.5">Visa Classification</label>
          <select 
            disabled={!localData.countryId}
            value={localData.visaTypeId}
            onChange={(e) => handleChange('visaTypeId', e.target.value)}
            className="h-12 border-0 border-b border-slate-200 rounded-none bg-transparent px-0 focus:border-blue-600 transition-all font-semibold text-slate-900 appearance-none disabled:opacity-30 cursor-pointer"
          >
            <option value="" disabled>Select Visa Category</option>
            {selectedCountry?.visaTypes.map(v => (
              <option key={v.id} value={v.id}>{v.name} ({v.processingTime})</option>
            ))}
          </select>
          <ChevronDown className="absolute right-0 bottom-4 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>
      </div>

      {/* --- Travel Dates --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        <div className="relative">
          <Input
            label="Arrival Date"
            type="date"
            value={localData.travelDate}
            onChange={(e) => handleChange('travelDate', e.target.value)}
            error={getError('travelDate')}
            required
            className="h-12 border-0 border-b border-slate-200 rounded-none bg-transparent px-0 focus:border-blue-600 transition-all font-semibold text-slate-900"
          />
          <Calendar className="absolute right-0 bottom-4 w-4 h-4 text-slate-300 pointer-events-none" />
        </div>
        <div className="relative">
          <Input
            label="Departure Date"
            type="date"
            value={localData.returnDate}
            onChange={(e) => handleChange('returnDate', e.target.value)}
            error={getError('returnDate')}
            required
            className="h-12 border-0 border-b border-slate-200 rounded-none bg-transparent px-0 focus:border-blue-600 transition-all font-semibold text-slate-900"
          />
          <Calendar className="absolute right-0 bottom-4 w-4 h-4 text-slate-300 pointer-events-none" />
        </div>
      </div>

      {/* --- Purpose of Visit --- */}
      <div className="relative flex flex-col gap-1.5">
        <label className="text-xs font-medium text-slate-500 ml-0.5">Primary Purpose of Visit</label>
        <div 
          onClick={() => setIsPurposeOpen(!isPurposeOpen)}
          className="h-12 border-b border-slate-200 flex items-center justify-between cursor-pointer hover:border-blue-600 transition-all"
        >
          <span className={`text-sm font-semibold ${localData.purpose ? 'text-slate-900' : 'text-slate-300'}`}>
            {visitPurposes.find(p => p.value === localData.purpose)?.label || "Select Purpose"}
          </span>
          <Plane className="w-4 h-4 text-slate-400" />
        </div>

        <AnimatePresence>
          {isPurposeOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
              className="absolute left-0 right-0 top-full mt-2 bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl z-50 overflow-hidden"
            >
              {visitPurposes.map((p) => (
                <div key={p.value} onClick={() => { handleChange('purpose', p.value); setIsPurposeOpen(false); }} className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-slate-50 transition-colors">
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">{p.label}</span>
                  {localData.purpose === p.value && <Check className="w-3.5 h-3.5 text-blue-600" />}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- Footer Action --- */}
      <div className="pt-10 flex flex-col items-center gap-10">
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-6 py-2 rounded-full border border-slate-100">
          <ShieldCheck className="w-4 h-4 text-blue-500" />
          Manifest: Zero-Rejection Audit Active
        </div>
        
        <div className="flex w-full justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back
          </button>

          <button 
            onClick={onNext}
            className="group flex items-center gap-12 bg-slate-950 text-white pl-12 pr-4 py-4 rounded-full hover:bg-blue-600 transition-all duration-500 shadow-xl"
          >
            <span className="text-[11px] font-black uppercase tracking-[0.4em]">
              Continue to Dossier
            </span>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all duration-500">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelInfoForm;
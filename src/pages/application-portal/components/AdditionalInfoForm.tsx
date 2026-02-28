import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    ShieldAlert, 
    UserPlus, 
    ArrowRight, 
    ArrowLeft, 
    ShieldCheck, 
    Scale, 
    Stethoscope, 
    History,
    CheckCircle2
} from 'lucide-react';
import Input from '../../../components/ui/Input';
import { ApplicationFormData, ValidationError } from '../../../types';

interface AdditionalInfoFormProps {
  formData: ApplicationFormData['additionalInfo'];
  onChange: (data: ApplicationFormData['additionalInfo']) => void;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting: boolean;
  errors: ValidationError[];
}

const AdditionalInfoForm = ({ formData, onChange, onSubmit, onBack, isSubmitting, errors }: AdditionalInfoFormProps) => {
  const [localData, setLocalData] = useState(formData);

  const handleChange = (field: keyof ApplicationFormData['additionalInfo'], value: any) => {
    const updated = { ...localData, [field]: value };
    setLocalData(updated);
    onChange(updated);
  };

  const getError = (field: string) => errors.find(e => e.field === field)?.message;

  return (
    <div className="max-w-4xl mx-auto space-y-16 py-8 animate-in fade-in duration-700 font-sans">
      
      {/* --- Background Declarations --- */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <Scale className="w-5 h-5 text-blue-600" />
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Security & Background</h3>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {[
            { id: 'previousVisas', label: 'Previously held a visa for this destination', icon: History },
            { id: 'criminalRecord', label: 'Record of criminal offenses globally', icon: ShieldAlert },
            { id: 'medicalConditions', label: 'Serious medical conditions to declare', icon: Stethoscope }
          ].map((item) => (
            <div 
              key={item.id}
              onClick={() => handleChange(item.id as any, !localData[item.id as keyof typeof localData])}
              className={`group flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                localData[item.id as keyof typeof localData] 
                ? 'border-blue-600 bg-blue-50/30' 
                : 'border-slate-100 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                   localData[item.id as keyof typeof localData] ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-400'
                }`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <span className={`text-sm font-semibold transition-colors ${
                   localData[item.id as keyof typeof localData] ? 'text-slate-900' : 'text-slate-500'
                }`}>
                  {item.label}
                </span>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                 localData[item.id as keyof typeof localData] ? 'bg-blue-600 border-blue-600' : 'border-slate-200'
              }`}>
                {localData[item.id as keyof typeof localData] && <CheckCircle2 className="w-4 h-4 text-white" />}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Emergency Desk --- */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <UserPlus className="w-5 h-5 text-blue-600" />
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Emergency Contact</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <Input 
            label="Contact Full Name" 
            placeholder="LEGAL NAME"
            value={localData.emergencyContact}
            onChange={(e) => handleChange('emergencyContact', e.target.value)}
            error={getError('emergencyContact')}
            required
            className="h-12 border-0 border-b border-slate-200 rounded-none bg-transparent px-0 focus:border-blue-600 transition-all font-semibold text-slate-900 uppercase placeholder:text-slate-300"
          />
          <Input 
            label="Emergency Phone" 
            placeholder="+00 00000 00000"
            value={localData.emergencyPhone}
            onChange={(e) => handleChange('emergencyPhone', e.target.value)}
            error={getError('emergencyPhone')}
            required
            className="h-12 border-0 border-b border-slate-200 rounded-none bg-transparent px-0 focus:border-blue-600 transition-all font-semibold text-slate-900"
          />
        </div>
      </section>

      {/* --- Declaration: The Legal Bond --- */}
      <div className="relative p-10 bg-slate-950 rounded-[3rem] overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <ShieldCheck className="w-24 h-24 text-white" />
        </div>
        <div className="relative z-10 space-y-4">
          <h4 className="text-xs font-black text-blue-400 uppercase tracking-[0.4em]">Final Declaration</h4>
          <p className="text-slate-300 text-sm leading-relaxed font-light italic italic">
            "I certify that my information is true and correct. I understand that misrepresentation is grounds for immediate refusal. I authorize the agency to submit my dossier to the relevant jurisdictional authorities."
          </p>
        </div>
      </div>

      {/* --- Footer Controls --- */}
      <div className="pt-8 flex flex-col items-center gap-10">
        <div className="flex items-center gap-3 px-6 py-2 bg-slate-50 rounded-full border border-slate-100">
          <ShieldCheck className="w-4 h-4 text-blue-600" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Transmission Ready: Protocol V.2026</span>
        </div>

        <div className="flex w-full justify-between items-center">
          <button 
            onClick={onBack}
            disabled={isSubmitting}
            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors group disabled:opacity-30"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back
          </button>

          <button 
            onClick={onSubmit}
            disabled={isSubmitting}
            className="group flex items-center gap-12 bg-slate-950 text-white pl-12 pr-4 py-4 rounded-full hover:bg-blue-600 transition-all duration-500 shadow-2xl shadow-slate-900/10 disabled:opacity-50"
          >
            <span className="text-[11px] font-black uppercase tracking-[0.4em]">
              {isSubmitting ? 'Transmitting...' : 'Submit Application'}
            </span>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all duration-500">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
        body { font-family: 'Open Sans', sans-serif; }
      `}</style>
    </div>
  );
};

export default AdditionalInfoForm;
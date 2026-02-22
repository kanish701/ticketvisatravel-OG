import { useState } from 'react';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';
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
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-serif font-bold text-slate-900">Background Information</h3>
        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 space-y-4">
          <Checkbox 
            label="I have previously held a visa for this destination"
            checked={localData.previousVisas}
            onChange={(e) => handleChange('previousVisas', e.target.checked)}
          />
          <Checkbox 
            label="I have a criminal record in any country"
            checked={localData.criminalRecord}
            onChange={(e) => handleChange('criminalRecord', e.target.checked)}
          />
          <Checkbox 
            label="I have a serious medical condition to declare"
            checked={localData.medicalConditions}
            onChange={(e) => handleChange('medicalConditions', e.target.checked)}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-serif font-bold text-slate-900">Emergency Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input 
            label="Contact Name" 
            value={localData.emergencyContact}
            onChange={(e) => handleChange('emergencyContact', e.target.value)}
            error={getError('emergencyContact')}
            required
          />
          <Input 
            label="Contact Phone" 
            value={localData.emergencyPhone}
            onChange={(e) => handleChange('emergencyPhone', e.target.value)}
            error={getError('emergencyPhone')}
            required
          />
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h4 className="font-bold text-amber-800 mb-2">Declaration</h4>
        <p className="text-sm text-amber-700 leading-relaxed">
          I certify that my information is true and correct. I understand that misrepresentation is grounds for refusal. I authorize VisaNavigator to submit my application to the relevant authorities.
        </p>
      </div>

      <div className="flex justify-between pt-6 border-t border-slate-100">
        <Button variant="outline" onClick={onBack} disabled={isSubmitting}>
          Back
        </Button>
        <Button 
          onClick={onSubmit} 
          loading={isSubmitting}
          className="bg-amber-500 hover:bg-amber-600 text-black border-none"
        >
          Submit Application
        </Button>
      </div>
    </div>
  );
};

export default AdditionalInfoForm;
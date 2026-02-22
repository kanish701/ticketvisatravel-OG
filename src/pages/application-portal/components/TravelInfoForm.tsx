import { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
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

  // Find selected country object to get available visa types
  const selectedCountry = countries.find(c => c.id === localData.countryId);

  const handleChange = (field: keyof ApplicationFormData['travelInfo'], value: string) => {
    const updated = { ...localData, [field]: value };

    // If country changes, reset visa type
    if (field === 'countryId') {
      updated.visaTypeId = '';
    }

    setLocalData(updated);
    onChange(updated);
  };

  const getError = (field: string) => errors.find(e => e.field === field)?.message;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Destination Country"
          options={countries.map(c => ({ value: c.id, label: c.name }))}
          value={localData.countryId}
          onChange={(value) => handleChange('countryId', String(value))}
          error={getError('countryId')}
          required
        />

        <Select
          label="Visa Type"
          disabled={!localData.countryId}
          options={selectedCountry?.visaTypes.map(v => ({
            value: v.id,
            label: v.name,
            description: `${v.processingTime} - $${v.price}`
          })) || []}
          value={localData.visaTypeId}
          onChange={(value) => handleChange('visaTypeId', String(value))}
          error={getError('visaTypeId')}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Arrival Date"
          type="date"
          value={localData.travelDate}
          onChange={(e) => handleChange('travelDate', e.target.value)}
          error={getError('travelDate')}
          required
        />
        <Input
          label="Departure Date"
          type="date"
          value={localData.returnDate}
          onChange={(e) => handleChange('returnDate', e.target.value)}
          error={getError('returnDate')}
          required
        />
      </div>

      <Select
        label="Purpose of Visit"
        options={[
          { value: 'tourism', label: 'Tourism / Sightseeing' },
          { value: 'business', label: 'Business / Conference' },
          { value: 'family', label: 'Family Visit' },
          { value: 'medical', label: 'Medical Treatment' },
          { value: 'work', label: 'job seeker' }
        ]}
        value={localData.purpose}
        onChange={(value) => handleChange('purpose', String(value))}
        error={getError('purpose')}
        required
      />

      <div className="flex justify-between pt-6 border-t border-slate-100">
        <Button variant="outline" onClick={onBack} iconName="ArrowLeft" iconPosition="left">
          Back
        </Button>
        <Button onClick={onNext} iconName="ArrowRight" iconPosition="right">
          Continue to Documents
        </Button>
      </div>
    </div>
  );
};

export default TravelInfoForm;
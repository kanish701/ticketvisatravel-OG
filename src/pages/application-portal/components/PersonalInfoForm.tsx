import { useState, ChangeEvent } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import { ApplicationFormData, ValidationError } from '../../../types';

interface PersonalInfoFormProps {
  formData: ApplicationFormData['personalInfo'];
  onChange: (data: ApplicationFormData['personalInfo']) => void;
  onNext: () => void;
  errors: ValidationError[];
}

const PersonalInfoForm = ({ formData, onChange, onNext, errors }: PersonalInfoFormProps) => {
  const [localData, setLocalData] = useState(formData);

  const handleChange = (field: keyof ApplicationFormData['personalInfo'], value: string) => {
    const updated = { ...localData, [field]: value };
    setLocalData(updated);
    onChange(updated);
  };

  const getError = (field: string) => errors.find(e => e.field === field)?.message;

  const nationalityOptions = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'in', label: 'India' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
    { value: 'ae', label: 'United Arab Emirates' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
    { value: 'cn', label: 'China' },
    { value: 'br', label: 'Brazil' },
    { value: 'mx', label: 'Mexico' },
    { value: 'sa', label: 'Saudi Arabia' },
    { value: 'sg', label: 'Singapore' },
    { value: 'my', label: 'Malaysia' },
    { value: 'id', label: 'Indonesia' },
    { value: 'th', label: 'Thailand' },
    { value: 'vn', label: 'Vietnam' },
    { value: 'ph', label: 'Philippines' },
    { value: 'ru', label: 'Russia' },
    { value: 'za', label: 'South Africa' },
    { value: 'eg', label: 'Egypt' }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="First Name"
          placeholder="As shown on passport"
          value={localData.firstName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('firstName', e.target.value)}
          error={getError('firstName')}
          required
        />
        <Input
          label="Last Name"
          placeholder="Surname"
          value={localData.lastName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('lastName', e.target.value)}
          error={getError('lastName')}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Email Address"
          type="email"
          placeholder="name@example.com"
          value={localData.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('email', e.target.value)}
          error={getError('email')}
          required
        />
        <Input
          label="Phone Number"
          type="tel"
          placeholder="+1 (555) 000-0000"
          value={localData.phone}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('phone', e.target.value)}
          error={getError('phone')}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Date of Birth"
          type="date"
          value={localData.dateOfBirth}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('dateOfBirth', e.target.value)}
          error={getError('dateOfBirth')}
          required
        />
        
        {/* ✅ FIXED: Select now receives 'value' directly, NOT an event 'e' */}
        <Select
          label="Nationality"
          options={nationalityOptions}
          value={localData.nationality}
          onChange={(value) => handleChange('nationality', String(value))}
          error={getError('nationality')}
          required
          searchable // Enabled search since your component supports it
          placeholder="Select Nationality"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Passport Number"
          placeholder="A1234567"
          value={localData.passportNumber}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('passportNumber', e.target.value)}
          error={getError('passportNumber')}
          required
        />
        <Input
          label="Passport Expiry"
          type="date"
          value={localData.passportExpiry}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('passportExpiry', e.target.value)}
          error={getError('passportExpiry')}
          required
        />
      </div>

      <div className="flex justify-end pt-6">
        <Button onClick={onNext} iconName="ArrowRight" iconPosition="right">
          Continue to Travel Details
        </Button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
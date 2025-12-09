import { useState } from 'react';
import { Consultation } from '../pages/surgeons/types';
import Icon from './AppIcon';
import Button from './ui/Button';
import Input from './ui/Input';
import Select from 'components/ui/Select';

interface ConsultationModalProps {
  onClose: () => void;
  onSubmit: (data: Consultation) => void;
}

const ConsultationModal = ({
  onClose,
  onSubmit
}: ConsultationModalProps) => {
  const [formData, setFormData] = useState<Consultation>({
    name: '',
    email: '',
    phone: '',
    interestedProcedure: '',
    preferredDoctor: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const procedures = [
    { value: 'rhinoplasty', label: 'Rhinoplasty' },
    { value: 'breast-augmentation', label: 'Breast Augmentation' },
    { value: 'liposuction', label: 'Liposuction' },
    { value: 'facelift', label: 'Facelift' },
    { value: 'tummy-tuck', label: 'Tummy Tuck' },
    { value: 'eyelid-surgery', label: 'Eyelid Surgery' },
    { value: 'botox-fillers', label: 'Botox & Fillers' },
    { value: 'other', label: 'Other / Not Sure' }
  ];

  const preferredDoctors = [
    { value: 'rhinoplasty', label: 'Rhinoplasty' },
    { value: 'breast-augmentation', label: 'Breast Augmentation' },
    { value: 'liposuction', label: 'Liposuction' },
    { value: 'facelift', label: 'Facelift' },
    { value: 'tummy-tuck', label: 'Tummy Tuck' },
    { value: 'eyelid-surgery', label: 'Eyelid Surgery' },
    { value: 'botox-fillers', label: 'Botox & Fillers' },
    { value: 'other', label: 'Other / Not Sure' }
  ];
  const [errors, setErrors] = useState<Partial<Record<keyof Consultation, string>>>({});

  const handleChange = (field: keyof Consultation, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof Consultation, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Preferred date is required';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Preferred time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-text-primary/60 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-background rounded-3xl shadow-brand-hover overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-surface flex items-center justify-center text-text-primary hover:bg-primary hover:text-primary-foreground transition-brand"
          aria-label="Close modal"
        >
          <Icon name="X" size={20} />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          <div className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon name="Calendar" size={24} className="text-primary" />
              </div>
              <div>
                <h2 className="font-headline text-2xl font-bold text-text-primary">
                  Book Your Consultation
                </h2>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                error={errors.name}
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  error={errors.email}
                  required
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  error={errors.phone}
                  required
                />
              </div>

                <Select
                  label="Procedure of Interest"
                  placeholder="Select a procedure"
                  options={procedures}
                  value={formData.interestedProcedure}
                  onChange={(value) => handleChange('interestedProcedure', value as string)}
                  error={errors.preferredDoctor}
                  required
                />

                <Select
                  label="Preferred Doctor"
                  placeholder="Select a surgeon"
                  options={preferredDoctors}
                  value={formData.preferredDoctor}
                  onChange={(value) => handleChange('preferredDoctor', value as string)}
                  error={errors.preferredDoctor}
                  required
                />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Preferred Date"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => handleChange('preferredDate', e.target.value)}
                  error={errors.preferredDate}
                  required
                />

                <Input
                  label="Preferred Time"
                  type="time"
                  value={formData.preferredTime}
                  onChange={(e) => handleChange('preferredTime', e.target.value)}
                  error={errors.preferredTime}
                  required
                />
              </div>

              <div>
                <label className="block font-body text-sm font-medium text-text-primary mb-2">
                  Additional Message (Optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Tell us about your goals and any questions you have..."
                  rows={4}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-xl font-body text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-brand resize-none"
                />
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={onClose}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  iconName="Send"
                  iconPosition="right"
                  iconSize={18}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  Submit Request
                </Button>
              </div>

                <p className="font-body text-xs text-text-secondary text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service. Your information is secure and confidential.
                </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;
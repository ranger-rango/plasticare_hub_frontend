import { useState } from 'react';
import { FreeEnq } from 'pages/homepage/types';
import Icon from './AppIcon';
import Button from './ui/Button';
import Input from './ui/Input';
import Select from 'components/ui/Select';

interface FreeEnquiryProps {
  onClose: () => void;
  onSubmit: (data: FreeEnq) => void;
}

const FreeEnquiry = ({
  onClose,
  onSubmit
}: FreeEnquiryProps) => {
  const [formData, setFormData] = useState<FreeEnq>({
    name: '',
    email: '',
    phone: '',
    interestedProcedure: '',
    infoType: '',
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

  const infoTypes = [
    { value: 'general_information', label: 'General Information' },
    { value: 'pricing_packages', label: 'Pricing & Packages' },
    { value: 'procedure_details', label: 'Procedure Details' },
    { value: 'recovery_aftercare', label: 'Recovery & Aftercare' },
    { value: 'before_after_photos', label: 'Before & After Photos' },
    { value: 'financing_options', label: 'Financing Options' },
    { value: 'surgeon_credentials', label: 'Surgeon Credentials' },
    { value: 'safety_risks', label: 'Safety & Risks' }
  ];
  const [errors, setErrors] = useState<Partial<Record<keyof FreeEnq, string>>>({});

  const handleChange = (field: keyof FreeEnq, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FreeEnq, string>> = {};

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
              <div>
                <h2 className="font-headline text-2xl font-bold text-text-primary">
                  Get Free Enquiry
                </h2>
                <p>
                   Get expert answers to your questions about procedures, pricing, recovery, and more. Our patient coordinators will provide detailed information to help you make an informed decision. 
                </p>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Select
                    label="Procedure of Interest"
                    placeholder="Select a procedure"
                    options={procedures}
                    value={formData.interestedProcedure}
                    onChange={(value) => handleChange('interestedProcedure', value as string)}
                    error={errors.interestedProcedure}
                    required
                    />

                    <Select
                    label="Type of Information"
                    placeholder="What info do you need"
                    options={infoTypes}
                    value={formData.infoType}
                    onChange={(value) => handleChange('infoType', value as string)}
                    error={errors.infoType}
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

export default FreeEnquiry;
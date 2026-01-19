import { useState } from 'react';
import Icon from './AppIcon';
import Button from './ui/Button';
import Input from './ui/Input';
import Select from 'components/ui/Select';
import { plasticareProcedures } from '../../data/procedures';
import { useFormSubmit } from './useFormSubmit';
import { BookTour } from 'pages/about/types';

interface BookTourModalProps {
  onClose: () => void;
}

const BookTourModal = ({ onClose }: BookTourModalProps) => {
  const [formData, setFormData] = useState<BookTour>({
    name: '',
    email: '',
    phone: '',
    preferred_date: '',
    preferred_time: '',
    message: ''
  });

  const procedures = plasticareProcedures.map((proc) => (
    {
      value: proc.id,
      label: proc.name
    }
  ))

  const [errors, setErrors] = useState<Partial<Record<keyof BookTour, string>>>({});

  const handleChange = (field: keyof BookTour, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof BookTour, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (/^254[17]\d{8}$/.test(formData.email)) {
      newErrors.phone = 'Invalid phone format';
    }

    if (!formData.preferred_date.trim()) {
      newErrors.preferred_date = 'Preferred Date is required';
    }

    if (!formData.preferred_time.trim()) {
      newErrors.preferred_time = 'Preferred Time is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const endpoint : string = import.meta.env.VITE_BOOK_TOUR_ENDPOINT;
  const baseUrl : string = import.meta.env.VITE_BASE_URL
  const url : string = baseUrl.concat(endpoint)
  const authToken : string = "GUEST";
  const method : string = "POST";
  const mutation = useFormSubmit(url, authToken, method);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setTimeout(() => {
      const frmData = new FormData();
      Object.entries(formData).forEach(([key, value]) => 
      {
        frmData.append(key, value as string);
      })
      mutation.mutate(frmData, 
        {
          onSuccess: (responseData) => 
          {
            alert('Thank you for your interest! Our team will contact you within 24 hours to schedule your consultation.');
          }
        }
      )

      setFormData({
        name: '',
        email: '',
        phone: '',
        preferred_date: '',
        preferred_time: '',
        message: ''
      });

    }, 1500);
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
                    <Input
                        label="Preferred Date"
                        type="date"
                        value={formData.preferred_date}
                        onChange={(e) => handleChange('preferred_date', e.target.value)}
                        error={errors.preferred_date}
                        required
                    />

                    <Input
                        label="Preferred Time"
                        type="time"
                        value={formData.preferred_time}
                        onChange={(e) => handleChange('preferred_time', e.target.value)}
                        error={errors.preferred_time}
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

export default BookTourModal;
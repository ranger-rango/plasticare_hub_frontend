import { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';
import { useFormSubmit } from 'components/useFormSubmit';
import { plasticareProcedures } from '../../../../data/procedures';
import { plasticareSurgeons } from '../../../../data/surgeons';

const ConsultationCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interested_procedure_id: '',
    preferred_doctor_id: '',
    preferred_date: '',
    preferred_time: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const procedures = plasticareProcedures.map((proc) => (
    {
      value: proc.id,
      label: proc.name
    }
  ))

  const preferredDoctors = plasticareSurgeons.map((surgeon) => (
    {
      value: surgeon.id,
      label: surgeon.name
    }
  ));

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (/^254[17]\d{8}$/.test(formData.email)) {
      newErrors.phone = 'Invalid phone format';
    }

    if (!formData.interested_procedure_id) {
      newErrors.interested_procedure_id = 'Please select a procedure';
    }

    if (!formData.preferred_doctor_id) {
      newErrors.preferred_doctor_id = 'Preferred Doctor is required';
    }

      if (!formData.preferred_date) {
      newErrors.preferred_date = 'Preferred date is required';
    }

    if (!formData.preferred_time) {
      newErrors.preferred_time = 'Preferred time is required';
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const endpoint : string = import.meta.env.VITE_BOOK_CONSULTATION_ENDPOINT;
  const baseUrl : string = import.meta.env.VITE_BASE_URL
  const url : string = baseUrl.concat(endpoint)
  const authToken : string = "GUEST";
  const method : string = "POST";
  const mutation = useFormSubmit(url, authToken, method);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

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
        interested_procedure_id: '',
        preferred_doctor_id: '',
        preferred_date: '',
        preferred_time: '',
        message: ''
      });

      setIsSubmitting(false);

    }, 1500);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-rose relative overflow-hidden" id='consultation-booking-section'>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                Ready to Begin Your Transformation?
              </h2>
              <p className="font-body text-base sm:text-lg text-text-secondary mb-8">
                Schedule a complimentary virtual consultation with one of our board-certified surgeons. We'll discuss your goals, answer your questions, and create a personalized treatment plan just for you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Video" size={24} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-semibold text-text-primary mb-1">
                      Virtual Consultation
                    </h3>
                    <p className="font-body text-sm text-text-secondary">
                      Meet with our surgeons from the comfort of your home via secure video call
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="FileText" size={24} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-semibold text-text-primary mb-1">
                      Personalized Treatment Plan
                    </h3>
                    <p className="font-body text-sm text-text-secondary">
                      Receive a customized plan tailored to your unique goals and anatomy
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="DollarSign" size={24} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-semibold text-text-primary mb-1">
                      Transparent Pricing
                    </h3>
                    <p className="font-body text-sm text-text-secondary">
                      Clear cost breakdown with flexible financing options available
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Phone" size={20} color="var(--color-primary)" />
                  <span className="font-headline text-lg font-semibold text-text-primary">
                    Prefer to Call?
                  </span>
                </div>
                <p className="font-body text-2xl font-bold text-primary mb-2">
                  (555) 123-4567
                </p>
                <p className="font-body text-sm text-text-secondary">
                  Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 3:00 PM
                </p>
              </div>
            </div>

            <div className="bg-background rounded-3xl shadow-brand-hover p-8 sm:p-10">
              <div className="text-center mb-8">
                <h3 className="font-headline text-2xl font-bold text-text-primary mb-2">
                  Book Your Consultation
                </h3>
                <p className="font-body text-sm text-text-secondary">
                  Fill out the form below and we'll contact you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  error={errors.name}
                  required
                />

                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  error={errors.email}
                  required
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="254712345678"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  error={errors.phone}
                  required
                />

                <Select
                  label="Procedure of Interest"
                  placeholder="Select a procedure"
                  options={procedures}
                  value={formData.interested_procedure_id}
                  onChange={(value) => handleInputChange('interested_procedure_id', value as string)}
                  error={errors.procedure}
                  required
                />
              
                <Select
                  label="Preferred Doctor"
                  placeholder="Select a surgeon"
                  options={preferredDoctors}
                  value={formData.preferred_doctor_id}
                  onChange={(value) => handleInputChange('preferred_doctor_id', value as string)}
                  error={errors.procedure}
                  required
                />

                <Input
                  label="Preferred Date"
                  type="date"
                  placeholder="dd/mm/yyyy"
                  value={formData.preferred_date}
                  onChange={(e) => handleInputChange('preferred_date', e.target.value)}
                  error={errors.phone}
                  required
                />

                <Input
                  label="Preferred Time"
                  type="time"
                  placeholder="00:00"
                  value={formData.preferred_time}
                  onChange={(e) => handleInputChange('preferred_time', e.target.value)}
                  error={errors.phone}
                  required
                />

                <div>
                  <label className="block font-body text-sm font-medium text-text-primary mb-2">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us more about your goals and any questions you have..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-brand resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={20}
                  className="bg-primary hover:bg-primary/90 shadow-brand"
                >
                  {isSubmitting ? 'Submitting...' : 'Schedule Consultation'}
                </Button>

                <p className="font-body text-xs text-text-secondary text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service. Your information is secure and confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
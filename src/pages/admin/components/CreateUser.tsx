import { useState } from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import Select from 'components/ui/Select';
import { useFormSubmit } from 'components/useFormSubmit'; 
import { CreateUserDs } from '../types';
import { getUserAuthToken } from 'components/RBAC';
import toast from 'react-hot-toast';

interface CreateUserProps {
  onClose: () => void;
}

const CreateUserModal = ({ onClose }: CreateUserProps) => {
  const [formData, setFormData] = useState<CreateUserDs>({
    email: '',
    first_name: '',
    middle_name: '',
    surname: '',
    privilege: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CreateUserDs, string>>>({});

  const handleChange = (field: keyof CreateUserDs, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof CreateUserDs, string>> = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.first_name.trim()) {
      newErrors.first_name = 'First Name is required';
    }

    if (!formData.middle_name.trim()) {
      newErrors.middle_name = 'Middle Name is required';
    }

    if (!formData.surname.trim()) {
      newErrors.surname = 'Surame is required';
    }

    if (!formData.privilege.trim()) {
      newErrors.privilege = 'User privilege is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const privileges = [
    { value: 'ADMIN', label: 'ADMIN' },
    { value: 'OPERATOR', label: 'OPERATOR' }
  ]

    const responseHandler : any = async (data : any) =>
    {
        const createUserScuccess : any = data?.status;
        const createUserFail : any = data?.err_status;
        if (createUserScuccess)
        {
            toast.success(createUserScuccess);
        }
        if (createUserFail)
        {
            toast.error(createUserFail);
        }
    }

  const endpoint : string = import.meta.env.VITE_CREATE_USER_ENDPOINT;
  const baseUrl : string = import.meta.env.VITE_BASE_URL
  const url : string = baseUrl.concat(endpoint)
  const authToken : string = getUserAuthToken();
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
            alert('Thank you.');
          }
        }
      )

      setFormData({
        email: '',
        first_name: '',
        middle_name: '',
        surname: '',
        privilege: '',
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
                  Create User
                </h2>
                <p>
                   Create a user for administration purposes of the patient data. 
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                    label="Email Address"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    error={errors.email}
                    required
                />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                    label="First Name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.first_name}
                    onChange={(e) => handleChange('first_name', e.target.value)}
                    error={errors.first_name}
                    required
                />
                <Input
                    label="Middle Name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.middle_name}
                    onChange={(e) => handleChange('middle_name', e.target.value)}
                    error={errors.middle_name}
                    required
                />
                <Input
                    label="Surname"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.surname}
                    onChange={(e) => handleChange('surname', e.target.value)}
                    error={errors.surname}
                    required
                />
              </div>


                <Select
                label="User Privilege"
                placeholder="What is the role of this user"
                options={privileges}
                value={formData.privilege}
                onChange={(value) => handleChange('privilege', value as string)}
                error={errors.privilege}
                required
                />

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

export default CreateUserModal;
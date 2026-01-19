import Icon from "components/AppIcon";
import Button from "components/ui/Button";
import Input from "components/ui/Input";
import { useEffect, useState } from "react";
import { LoginDs } from "../types";
import { useFormSubmit } from "components/useFormSubmit";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginPage = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState<LoginDs>({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState<Partial<Record<keyof LoginDs, string>>>({});

    const handleChange = (field: keyof LoginDs, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: '' }));
    }
    };

    const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof LoginDs, string>> = {};

    if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
    } else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
        newErrors.email = 'Invalid email format';
    }

    if (!formData.password.trim()) {
        newErrors.password = 'Password is required';
    } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
        newErrors.password = 'Invalid password format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
    };

    const userStatus = [
    { value: 'INACTIVE', label: 'INACTIVE' }
    ];

    const privileges = [
    { value: 'ADMIN', label: 'ADMIN' },
    { value: 'OPERATOR', label: 'OPERATOR' }
    ]

    const navigate = useNavigate();
    const responseHandler : any = (data : any) =>
    {
        const userDetails : any = data?.[1]
        if (userDetails !== undefined)
        {
            const authToken = userDetails["auth_token"]
            if (authToken?.split(":")[0] === "local")
            {
                localStorage.setItem("userDetails", JSON.stringify(userDetails));
            }
            else
            {
                sessionStorage.setItem("userDetails", JSON.stringify(userDetails));
            }

            toast.success("Login Successful")
            navigate("/dashboard/admin", { replace: true });
        }
        else
        {
            toast.error(data?.err_status)
        }
    }

    const endpoint : string = import.meta.env.VITE_LOGIN_USER_ENDPOINT;
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
                responseHandler(responseData);
            }
        }
        )

        setFormData({
            email: '',
            password: ''
        });

    }, 1500);
    };


    return (
        <div className="min-h-screen bg-background">
            <main className="pt-20">
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-text-primary/60 backdrop-blur-sm">
                    <div className="relative w-full max-w-2xl max-h-[90vh] bg-background rounded-3xl shadow-brand-hover overflow-hidden">
                        <div className="overflow-y-auto max-h-[90vh]">
                        <div className="p-8">
                            <div className="flex items-center space-x-3 mb-6">
                            <div>
                                <h2 className="font-headline text-2xl font-bold text-text-primary">
                                    Login User
                                </h2>
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
                                <Input
                                    label="Password"
                                    type="password"
                                    value={formData.password}
                                    onChange={(e) => handleChange('password', e.target.value)}
                                    error={errors.password}
                                    required
                                />

                                <div className="flex items-center space-x-4 pt-4">
                                    <Button
                                    type="submit"
                                    variant="default"
                                    size="lg"
                                    iconName="Send"
                                    iconPosition="right"
                                    fullWidth
                                    iconSize={18}
                                    className="flex-1 bg-primary hover:bg-primary/90"
                                    >
                                    Login
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
            </main>
        </div>
    );
}

export default LoginPage;
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import ConsultationModal from 'components/ConsultationModal';
import FreeEnquiry from 'components/FreeEnquiry';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [showConsultationModal, setShowConsultationModal] = useState(false)
  const [showEnquirynModal, setShowEnquiryModal] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/homepage' },
    { label: 'Procedures', path: '/procedures' },
    { label: 'Surgeons', path: '/surgeons' },
    { label: 'Patient Gallery', path: '/patient-gallery' },
    { label: 'Patient Care', path: '/patient-care' },
    { label: 'About', path: '/about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const isActivePath = (path: string) => location.pathname === path;

  const handleSubmit : any = () => 
  {}

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-brand ${
          isScrolled ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-background'
        } ${className}`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/homepage" className="flex items-center space-x-3 group">
              <div className="relative">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-brand group-hover:scale-105"
                >
                  <circle cx="24" cy="24" r="22" fill="url(#logo-gradient)" />
                  <path
                    d="M24 12C17.373 12 12 17.373 12 24C12 30.627 17.373 36 24 36C30.627 36 36 30.627 36 24C36 17.373 30.627 12 24 12ZM24 32C19.589 32 16 28.411 16 24C16 19.589 19.589 16 24 16C28.411 16 32 19.589 32 24C32 28.411 28.411 32 24 32Z"
                    fill="white"
                  />
                  <circle cx="24" cy="24" r="6" fill="white" />
                  <defs>
                    <linearGradient
                      id="logo-gradient"
                      x1="2"
                      y1="2"
                      x2="46"
                      y2="46"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F4C2C2" />
                      <stop offset="0.5" stopColor="#FFB6C1" />
                      <stop offset="1" stopColor="#C08497" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-xl font-semibold text-primary group-hover:text-gradient-rose transition-brand">
                  PlastiCare
                </span>
                <span className="font-body text-xs text-text-secondary tracking-wide">
                  Hub
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg font-body text-sm font-medium transition-brand ${
                    isActivePath(item.path)
                      ? 'text-primary bg-secondary/20' :'text-text-primary hover:text-primary hover:bg-secondary/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="outline"
                size="default"
                iconPosition="left"
                iconSize={18}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={ () => { setShowEnquiryModal(true) } }
              >
                Free Enquiry
              </Button>
              <Button
                variant="default"
                size="default"
                iconName="Calendar"
                iconPosition="left"
                iconSize={18}
                className="bg-primary hover:bg-primary/90 shadow-brand"
                onClick={ () => { setShowConsultationModal(true) } }
              >
                Book Consultation
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-text-primary hover:bg-secondary/10 transition-brand"
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden fixed inset-0 top-20 bg-background z-40 transition-confident ${
            isMobileMenuOpen
              ? 'opacity-100 pointer-events-auto' :'opacity-0 pointer-events-none'
          }`}
          id='mob-menu'
        >
          <nav className="flex flex-col p-6 space-y-2 overflow-y-auto h-full">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-body text-base font-medium transition-brand ${
                  isActivePath(item.path)
                    ? 'text-primary bg-secondary/20' :'text-text-primary hover:text-primary hover:bg-secondary/10'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-6 space-y-3 border-t border-border mt-4">
              <Button
                variant="outline"
                size="lg"
                fullWidth
                iconPosition="left"
                iconSize={20}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={ () => { setShowEnquiryModal(true) } }
              >
                Free Enquiry
              </Button>
              <Button
                variant="default"
                size="lg"
                fullWidth
                iconName="Calendar"
                iconPosition="left"
                iconSize={20}
                className="bg-primary hover:bg-primary/90 shadow-brand"
                onClick={ () => { setShowConsultationModal(true) } }
              >
                Book Consultation
              </Button>
            </div>
          </nav>
        </div>
      </header>
        {showConsultationModal &&
        <ConsultationModal
          onClose={() => {
            setShowConsultationModal(false);
          }}
          onSubmit={handleSubmit} />
        }

        {showEnquirynModal &&
        <FreeEnquiry
          onClose={() => {
            setShowEnquiryModal(false);
          }}
          onSubmit={handleSubmit} />
        }
    </>
  );
};

export default Header;
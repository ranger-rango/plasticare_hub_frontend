import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';


const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/homepage' },
    { label: 'Procedures', path: '/procedures' },
    { label: 'Surgeons', path: '/surgeons' },
    { label: 'Patient Gallery', path: '/patient-gallery' },
    { label: 'Patient Care', path: '/patient-care' },
    { label: 'About Us', path: '/about' }
  ];

  const procedures = [
    { label: 'Rhinoplasty', path: '/procedures' },
    { label: 'Breast Augmentation', path: '/procedures' },
    { label: 'Liposuction', path: '/procedures' },
    { label: 'Facelift', path: '/procedures' },
    { label: 'Tummy Tuck', path: '/procedures' },
    { label: 'Botox & Fillers', path: '/procedures' }
  ];

  const resources = [
    { label: 'Blog & Articles', path: '/about' },
    { label: 'FAQs', path: '/patient-care' },
    { label: 'Financing Options', path: '/patient-care' },
    { label: 'Patient Portal', path: '/patient-care' },
    { label: 'Before & After Care', path: '/patient-care' },
    { label: 'Virtual Tours', path: '/about' }
  ];

  const socialLinks = [
    { icon: 'Facebook', url: '#', label: 'Facebook' },
    { icon: 'Instagram', url: '#', label: 'Instagram' },
    { icon: 'Twitter', url: '#', label: 'Twitter' },
    { icon: 'Youtube', url: '#', label: 'YouTube' },
    { icon: 'Linkedin', url: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-12">
            <div className="lg:col-span-2">
              <Link to="/homepage" className="inline-flex items-center space-x-3 mb-6">
                <div className="relative">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="24" cy="24" r="22" fill="url(#footer-logo-gradient)" />
                    <path
                      d="M24 12C17.373 12 12 17.373 12 24C12 30.627 17.373 36 24 36C30.627 36 36 30.627 36 24C36 17.373 30.627 12 24 12ZM24 32C19.589 32 16 28.411 16 24C16 19.589 19.589 16 24 16C28.411 16 32 19.589 32 24C32 28.411 28.411 32 24 32Z"
                      fill="white"
                    />
                    <circle cx="24" cy="24" r="6" fill="white" />
                    <defs>
                      <linearGradient
                        id="footer-logo-gradient"
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
                  <span className="font-headline text-xl font-semibold text-primary">
                    PlastiCare
                  </span>
                  <span className="font-body text-xs text-text-secondary tracking-wide">
                    Hub
                  </span>
                </div>
              </Link>

              <p className="font-body text-sm text-text-secondary mb-6 max-w-sm">
                Where medical excellence meets aesthetic artistry. Transform with confidence through expert care and personalized treatment plans.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={18} color="var(--color-primary)" />
                  <span className="font-body text-sm text-text-secondary">
                    123 Medical Plaza, Suite 500\nBeverly Hills, CA 90210
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={18} color="var(--color-primary)" />
                  <span className="font-body text-sm text-text-secondary">
                    (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={18} color="var(--color-primary)" />
                  <span className="font-body text-sm text-text-secondary">
                    info@plasticarehub.com
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                {socialLinks?.map((social) => (
                  <a
                    key={social?.label}
                    href={social?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-brand group"
                    aria-label={social?.label}
                  >
                    <Icon
                      name={social?.icon}
                      size={18}
                      className="text-primary group-hover:text-primary-foreground transition-brand"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-headline text-base font-semibold text-text-primary mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks?.map((link) => (
                  <li key={link?.path}>
                    <Link
                      to={link?.path}
                      className="font-body text-sm text-text-secondary hover:text-primary transition-brand inline-flex items-center gap-2 group"
                    >
                      <Icon
                        name="ChevronRight"
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-brand"
                      />
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-headline text-base font-semibold text-text-primary mb-4">
                Popular Procedures
              </h3>
              <ul className="space-y-3">
                {procedures?.map((procedure) => (
                  <li key={procedure?.label}>
                    <Link
                      to={procedure?.path}
                      className="font-body text-sm text-text-secondary hover:text-primary transition-brand inline-flex items-center gap-2 group"
                    >
                      <Icon
                        name="ChevronRight"
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-brand"
                      />
                      {procedure?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-headline text-base font-semibold text-text-primary mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                {resources?.map((resource) => (
                  <li key={resource?.label}>
                    <Link
                      to={resource?.path}
                      className="font-body text-sm text-text-secondary hover:text-primary transition-brand inline-flex items-center gap-2 group"
                    >
                      <Icon
                        name="ChevronRight"
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-brand"
                      />
                      {resource?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="font-body text-sm text-text-secondary text-center sm:text-left">
                © {currentYear} PlastiCare Hub. All rights reserved.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  to="/about"
                  className="font-body text-sm text-text-secondary hover:text-primary transition-brand"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/about"
                  className="font-body text-sm text-text-secondary hover:text-primary transition-brand"
                >
                  Terms of Service
                </Link>
                {/* <Link
                  to="/about"
                  className="font-body text-sm text-text-secondary hover:text-primary transition-brand"
                >
                  HIPAA Compliance
                </Link> */}
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="font-body text-xs text-text-secondary">
                Board-certified plastic surgeons • DPA compliant facility
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
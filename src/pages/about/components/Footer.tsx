import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    procedures: [
      { label: 'Facial Procedures', path: '/procedures' },
      { label: 'Body Contouring', path: '/procedures' },
      { label: 'Breast Surgery', path: '/procedures' },
      { label: 'Non-Surgical', path: '/procedures' },
    ],
    resources: [
      { label: 'Patient Gallery', path: '/patient-gallery' },
      { label: 'Our Surgeons', path: '/surgeons' },
      { label: 'Patient Care', path: '/patient-care' },
      { label: 'About Us', path: '/about' },
    ],
    contact: [
      { icon: 'Phone', text: '(555) 123-4567' },
      { icon: 'Mail', text: 'info@plasticarehub.com' },
      { icon: 'MapPin', text: '123 Medical Plaza, CA 90210' },
      { icon: 'Clock', text: 'Mon-Fri: 9AM-6PM' },
    ],
  };

  return (
    <footer className="bg-text-primary text-background">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <svg
                  width="40"
                  height="40"
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
                <div>
                  <span className="font-headline text-xl font-semibold">
                    PlastiCare
                  </span>
                  <span className="font-body text-xs block text-background/80">
                    Hub
                  </span>
                </div>
              </div>
              <p className="font-body text-sm text-background/80 leading-relaxed mb-6">
                Where medical excellence meets aesthetic artistry. Transform with confidence through expert care.
              </p>
              <div className="flex gap-3">
                {['Facebook', 'Instagram', 'Twitter', 'Linkedin']?.map((social) => (
                  <button
                    key={social}
                    className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary transition-brand flex items-center justify-center"
                    aria-label={`Visit our ${social} page`}
                  >
                    <Icon name={social} size={18} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-headline text-lg font-semibold mb-4">
                Procedures
              </h3>
              <ul className="space-y-3">
                {footerLinks?.procedures?.map((link) => (
                  <li key={link?.label}>
                    <Link
                      to={link?.path}
                      className="font-body text-sm text-background/80 hover:text-primary transition-brand"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-headline text-lg font-semibold mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks?.resources?.map((link) => (
                  <li key={link?.label}>
                    <Link
                      to={link?.path}
                      className="font-body text-sm text-background/80 hover:text-primary transition-brand"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-headline text-lg font-semibold mb-4">
                Contact Us
              </h3>
              <ul className="space-y-3">
                {footerLinks?.contact?.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon
                      name={item?.icon}
                      size={18}
                      className="text-primary flex-shrink-0 mt-0.5"
                    />
                    <span className="font-body text-sm text-background/80">
                      {item?.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-background/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-body text-sm text-background/80">
                &copy; {currentYear} PlastiCare Hub. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link
                  to="#"
                  className="font-body text-sm text-background/80 hover:text-primary transition-brand"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="#"
                  className="font-body text-sm text-background/80 hover:text-primary transition-brand"
                >
                  Terms of Service
                </Link>
                <Link
                  to="#"
                  className="font-body text-sm text-background/80 hover:text-primary transition-brand"
                >
                  HIPAA Compliance
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect, useCallback } from 'react';

// --- Pure CSS Style Block ---
const GlobalStyle = () => (
    <style>{`
        :root {
            --color-primary: #db2777; /* Pink-600 */
            --color-primary-dark: #be185d; /* Pink-700 */
            --color-background: #f8fafc; /* Slate-50 */
            --color-text: #374151; /* Gray-700 */
            --color-light-bg: #fff;
            --color-border: #e5e7eb; /* Gray-200 */
            --font-sans: 'Inter', sans-serif;
            --font-serif: 'Playfair Display', serif;
        }

        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;600;700&display=swap');

        body {
            font-family: var(--font-sans);
            background-color: var(--color-background);
            margin: 0;
            padding-top: 80px; /* Space for fixed header */
            color: var(--color-text);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .container {
            max-width: 1280px;
            margin-left: auto;
            margin-right: auto;
            padding: 1rem;
        }

        /* --- Header --- */
        .header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: var(--color-light-bg);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 50;
        }
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
        }
        .logo {
            font-size: 1.875rem; /* 3xl */
            font-family: var(--font-serif);
            font-weight: bold;
            color: var(--color-primary);
            cursor: pointer;
        }
        .nav-link {
            font-size: 1.125rem;
            font-weight: 500;
            color: var(--color-text);
            padding: 0.5rem .3rem;
            border-bottom: 2px solid transparent;
            transition: color 0.3s, border-color 0.3s;
            display: flex;
            align-items: center;
            background: none;
            border: none;
            cursor: pointer;
        }
        .nav-link:hover {
            color: var(--color-primary);
        }
        .nav-link.active {
            color: var(--color-primary);
            border-color: var(--color-primary);
        }
        .nav-icon {
            margin-right: 0.25rem;
        }
        .md-hidden {
            display: block;
        }
        .md-flex {
            display: none;
        }
        @media (min-width: 768px) {
            .md-hidden {
                display: none;
            }
            .md-flex {
                display: flex;
                gap: 1.5rem; /* space-x-6 */
            }
        }

        /* --- Buttons --- */
        .btn-primary {
            padding: 0.75rem 1.5rem;
            background-color: var(--color-primary);
            color: white;
            font-size: 1.125rem;
            font-weight: 600;
            border-radius: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(219, 39, 119, 0.3);
            transition: background-color 0.3s, transform 0.3s;
            border: none;
            cursor: pointer;
        }
        .btn-primary:hover {
            background-color: var(--color-primary-dark);
            transform: scale(1.05);
        }
        .btn-secondary {
            padding: 0.5rem 1rem;
            background-color: #fce7f3; /* Pink-100 */
            color: var(--color-primary);
            border-radius: 0.5rem;
            transition: background-color 0.3s;
            font-size: 0.875rem;
            border: none;
            cursor: pointer;
        }
        .btn-secondary:hover {
            background-color: #fbcfe8; /* Pink-200 */
        }
        .btn-full {
            width: 100%;
        }

        /* --- Form Elements --- */
        .form-input, .form-select, .form-textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid var(--color-border);
            border-radius: 0.5rem;
            transition: border-color 0.3s, box-shadow 0.3s;
            box-sizing: border-box;
            background-color: white;
            color: rgba(11, 11, 11, 1);
        }
        .form-input:focus, .form-select:focus, .form-textarea:focus {
            border-color: var(--color-primary);
            outline: none;
            box-shadow: 0 0 0 3px rgba(219, 39, 119, 0.2);
        }
        .form-select {
            background-color: white;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            color: rgba(11, 11, 11, 1);
        }
        .form-label {
            display: block;
            color: var(--color-text);
            font-weight: 600;
            margin-bottom: 0.5rem;
        }
        .grid-2-col {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
        }
        @media (min-width: 640px) {
            .grid-2-col {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }

        /* --- Card and Layout --- */
        .card {
            background-color: var(--color-light-bg);
            padding: 2rem;
            border-radius: 0.75rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            border: 1px solid #fbcfe8; /* Pink-200 */
        }
        .section-title {
            font-size: 2.25rem;
            font-weight: 700;
            color: var(--color-primary-dark);
            margin-bottom: 2rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid #fbcfe8; /* Pink-200 */
            text-align: center;
        }
        .sub-section-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--color-text);
            border-bottom: 1px solid var(--color-border);
            padding-bottom: 0.5rem;
            margin-bottom: 1rem;
            margin-top: 1.5rem;
        }
        .sub-section-title:first-child {
             margin-top: 0;
        }
        .msg-success {
            background-color: #d1fae5; /* Green-100 */
            color: #065f46; /* Green-700 */
            padding: 0.75rem;
            border-radius: 0.5rem;
            text-align: center;
            font-weight: 500;
        }
        .msg-error {
            background-color: #fee2e2; /* Red-100 */
            color: #b91c1c; /* Red-700 */
            padding: 0.75rem;
            border-radius: 0.5rem;
            text-align: center;
            font-weight: 500;
        }

        /* --- Modal --- */
        .modal-overlay {
            position: fixed;
            inset: 0;
            background-color: rgba(17, 24, 39, 0.8); /* Gray-900 opacity 80 */
            z-index: 100;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
        }
        .modal-content {
            background-color: var(--color-light-bg);
            border-radius: 0.75rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            max-width: 512px; /* max-w-lg */
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
        }
        .modal-header {
            padding: 1.5rem;
            border-bottom: 1px solid var(--color-border);
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            background-color: white;
        }
        .modal-title {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--color-primary-dark);
        }
        .modal-close-btn {
            color: #6b7280; /* Gray-500 */
            padding: 0.5rem;
            border-radius: 9999px; /* full */
            transition: background-color 0.3s, color 0.3s;
            background: none;
            border: none;
            cursor: pointer;
        }
        .modal-close-btn:hover {
            color: #111827; /* Gray-900 */
            background-color: #f9fafb; /* Gray-100 */
        }
        .modal-body {
            padding: 1.5rem;
        }
        
        /* Specific page layouts */
        .home-grid {
            margin-top: 5rem;
            width: 100%;
            max-width: 96rem; /* max-w-6xl */
        }
        .home-cards {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        @media (min-width: 768px) {
            .home-cards {
                grid-template-columns: repeat(3, minmax(0, 1fr));
            }
        }

        .services-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        @media (min-width: 768px) {
            .services-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }
        @media (min-width: 1024px) {
            .services-grid {
                grid-template-columns: repeat(3, minmax(0, 1fr));
            }
        }

        .shop-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        @media (min-width: 640px) {
            .shop-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }
        @media (min-width: 1024px) {
            .shop-grid {
                grid-template-columns: repeat(4, minmax(0, 1fr));
            }
        }
    `}</style>
);
// --- End Style Block ---


// Using Lucide icons via SVG for better aesthetics
const Icon = ({ name, className = "", size = 24 }: { name: string, className?: string, size?: number }) => {
    const defaultClasses = "icon-svg";
    const combinedClasses = `${defaultClasses} ${className}`;
    switch (name) {
        case 'Home': return <svg className={combinedClasses} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
        case 'Info': return <svg className={combinedClasses} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>;
        case 'Grid': return <svg className={combinedClasses} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>;
        case 'ShoppingCart': return <svg className={combinedClasses} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 12.08a2 2 0 0 0 2 1.92h9.72a2 2 0 0 0 2-1.92L23 6H6"/></svg>;
        case 'CalendarCheck': return <svg className={combinedClasses} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M9 14l2 2l4-4"/></svg>;
        case 'Mail': return <svg className={combinedClasses} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7l-10 7L2 7"/></svg>;
        case 'X': return <svg className={combinedClasses} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18"/><path d="M6 6L18 18"/></svg>;
        default: return null;
    }
};

// Define Data Structures (Interfaces)
interface Service {
  id: number;
  name: string;
  category: 'Face' | 'Body' | 'Breast' | 'Buttocks' | 'Other';
  description: string;
  details: string; // Added for modal content
}

interface Product {
  id: number;
  name: string;
  price: number;
  imagePlaceholder: string;
}

// Mock Data based on the PlastiCare Hub Profile
const mockServices: Service[] = [
  { 
    id: 1, 
    name: 'Facelift', 
    category: 'Face', 
    description: 'Correction of aging effects on the face and neck.',
    details: 'The Facelift procedure, or Rhytidectomy, aims to restore a more youthful appearance by tightening facial tissues, reducing sagging skin, and smoothing deep creases. This is typically an outpatient surgery with a recovery period of 2-4 weeks.'
  },
  { 
    id: 2, 
    name: 'Rhinoplasty', 
    category: 'Face', 
    description: 'Delicate nose job for aesthetic and functional corrections.',
    details: 'Rhinoplasty, or a nose job, is a surgical procedure to change the shape of the nose or improve breathing. It can be performed for cosmetic reasons or to correct structural defects caused by trauma or birth defects. Consultation includes 3D imaging.'
  },
  { 
    id: 3, 
    name: 'Liposuction', 
    category: 'Body', 
    description: 'Removal of abnormally shaped and/or excessive fat tissues.',
    details: 'Liposuction sculpts the body by removing excess fat from specific areas, such as the abdomen, hips, thighs, or arms. It is not a weight-loss solution but a body contouring procedure best suited for patients near their ideal weight.'
  },
  { 
    id: 4, 
    name: 'Tummy Tuck', 
    category: 'Body', 
    description: 'Abdominoplasty to remove excess skin and tighten muscles.',
    details: 'Abdominoplasty, or Tummy Tuck, is performed to remove excess fat and skin and to restore weakened or separated abdominal muscles, creating a smoother and firmer abdominal profile. Often sought after major weight loss or pregnancy.'
  },
  { 
    id: 5, 
    name: 'Breast Augmentation', 
    category: 'Breast', 
    description: 'Using silicone implants for size and shape enhancement.',
    details: 'Breast Augmentation involves using implants or fat transfer to increase breast fullness and projection. We prioritize natural results and patient safety, offering various implant types and sizes to meet personal goals.'
  },
  { 
    id: 6, 
    name: 'Buttock Augmentation', 
    category: 'Buttocks', 
    description: 'Improvement of projection and total volume via fat injections or implants.',
    details: 'Gluteal Augmentation, commonly known as a Brazilian Butt Lift (BBL) when using fat transfer, enhances the size and shape of the buttocks. It is a highly customized procedure focusing on proportion and harmony with the rest of the body.'
  },
  { 
    id: 7, 
    name: 'Hair Transplantation', 
    category: 'Other', 
    description: 'Procedure to restore hair density.',
    details: 'We offer state-of-the-art Follicular Unit Extraction (FUE) techniques for natural-looking hair restoration. The procedure involves minimally invasive harvesting and transplantation of hair follicles to balding or thinning areas.'
  },
];

const mockProducts: Product[] = [
  { id: 101, name: 'Post-Op Recovery Cream', price: 49.99, imagePlaceholder: 'https://placehold.co/100x100/f8b4cb/ffffff?text=Cream' },
  { id: 102, name: 'Compression Garment - Face', price: 79.99, imagePlaceholder: 'https://placehold.co/100x100/f8b4cb/ffffff?text=Garment' },
  { id: 103, name: 'Scar Management Kit', price: 99.99, imagePlaceholder: 'https://placehold.co/100x100/f8b4cb/ffffff?text=Kit' },
];

const mockDoctors = ['Dr. Eleanor Vance', 'Dr. Julian Chen', 'Dr. Sofia Reyes'];

// --- Utility Functions ---

type Route = '/' | '/about' | '/services' | '/shop' | '/booking' | '/contact' | '/dashboard';

// --- Shared Components ---

const Modal: React.FC<{ isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title">{title}</h3>
                    <button onClick={onClose} className="modal-close-btn">
                        <Icon name="X" size={20} />
                    </button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
};


const Header: React.FC<{ navigate: (route: Route) => void; currentRoute: Route }> = ({ navigate, currentRoute }) => {
  const navItems: { label: string; route: Route; icon: string }[] = [
    { label: 'Home', route: '/', icon: 'Home' },
    { label: 'About Us', route: '/about', icon: 'Info' },
    { label: 'Services', route: '/services', icon: 'Grid' },
    { label: 'Shop', route: '/shop', icon: 'ShoppingCart' },
    { label: 'Book', route: '/booking', icon: 'CalendarCheck' },
    { label: 'Contact', route: '/contact', icon: 'Mail' },
    // { label: 'Dashboard', route: '/dashboard', icon: 'Mail' },
  ];

  return (
    <header className="header">
      <div className="container header-content">
        <h1 className="logo" onClick={() => navigate('/')}>
          PlastiCare Hub
        </h1>
        <nav className="md-flex">
          {navItems.map((item) => (
            <button
              key={item.route}
              onClick={() => navigate(item.route)}
              className={`nav-link ${currentRoute === item.route ? 'active' : ''}`}
            >
                <Icon name={item.icon} size={20} className="nav-icon" />
              {item.label}
            </button>
          ))}
        </nav>
        <button className="md-hidden" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text)' }}>
          <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </header>
  );
};

const Footer: React.FC = () => (
  <footer style={{ backgroundColor: '#1f2937', color: 'white', padding: '1.5rem', marginTop: '3rem' }}>
    <div className="container" style={{ textAlign: 'center' }}>
      <p style={{ fontSize: '0.875rem' }}>&copy; {new Date().getFullYear()} PlastiCare Hub. All rights reserved.</p>
      <p style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>Where transformation begins. | Email: info@plasticarehub.com</p>
    </div>
  </footer>
);

// --- Page Components ---

const HomePage: React.FC<{ navigate: (route: Route) => void }> = ({ navigate }) => (
  <div className="container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
    <div style={{ textAlign: 'center', maxWidth: '56rem' }}>
      <h2 style={{ fontSize: '3rem', lineHeight: '1', fontFamily: 'var(--font-serif)', fontWeight: 'bolder', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>
        Your Journey to <span style={{ color: '#1f2937' }}>Confidence</span>
      </h2>
      <p style={{ fontSize: '1.25rem', color: 'var(--color-text)', marginBottom: '2rem' }}>
        We provide patient-centered healthcare with excellence in quality, service, and access. Discover the possibilities for your personal transformation.
      </p>
      <button
        onClick={() => navigate('/booking')}
        className="btn-primary"
      >
        Book Your Free Consultation
      </button>
    </div>

    {/* Featured Services Section */}
    <div className="home-grid">
      <h3 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#1f2937', textAlign: 'center', marginBottom: '2.5rem', borderBottom: '2px solid #f9a8d4', paddingBottom: '0.5rem' }}>Key Offerings</h3>
      <div className="home-cards">
        {mockServices.slice(0, 3).map(service => (
          <div key={service.id} className="card" style={{ borderTop: '4px solid var(--color-primary)', transition: 'box-shadow 0.3s' }}>
            <h4 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>{service.name}</h4>
            <p style={{ color: 'var(--color-text)' }}>{service.description.substring(0, 100)}...</p>
            <button
                onClick={() => navigate('/services')}
                style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--color-primary)', fontWeight: '500', background: 'none', border: 'none', cursor: 'pointer' }}
            >
                Learn More &rarr;
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const BookingPage: React.FC = () => {
  const [formData, setFormData] = useState({ 
    firstName: '', 
    lastName: '', 
    emailAddress: '', 
    phoneNumber: '',
    procedureOfInterest: mockServices[0].name,
    preferredDoctor: mockDoctors[0],
    preferredDate: '', 
    preferredTime: '',
    additionalNotes: ''
  });
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    const requiredFields = ['firstName', 'lastName', 'emailAddress', 'phoneNumber', 'preferredDate', 'preferredTime'];
    const missing = requiredFields.filter(key => !formData[key as keyof typeof formData]);
    
    if (missing.length > 0) {
        setMessage({ type: 'error', text: `Please fill in all required fields. Missing: ${missing.join(', ')}` });
        return;
    }
    
    // Simulate API call to backend (Java /api/booking endpoint)
    console.log('Booking submitted (Postgres Payload):', formData);
    
    // In a real app, you'd use fetch('/api/booking', { method: 'POST', body: JSON.stringify(formData) })
    
    setMessage({ type: 'success', text: 'Booking request sent! We will confirm your appointment via email shortly.' });
    setFormData({ 
        firstName: '', 
        lastName: '', 
        emailAddress: '', 
        phoneNumber: '',
        procedureOfInterest: mockServices[0].name,
        preferredDoctor: mockDoctors[0],
        preferredDate: '', 
        preferredTime: '',
        additionalNotes: ''
    });
  };

  const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="sub-section-title">{children}</h3>
  );

  return (
    <div className="container" style={{ paddingTop: '1rem' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <h2 className="section-title">Book Your Consultation</h2>
        <p style={{ textAlign: 'center', color: 'var(--color-text)', marginBottom: '2rem' }}>
          Please provide your details so we can schedule your personalized consultation.
        </p>

        <form onSubmit={handleSubmit} className="card" style={{ marginBottom: '3rem' }}>
          
          {/* PERSONAL INFORMATION */}
          <SectionTitle>Personal Information</SectionTitle>
          
          <div className="grid-2-col" style={{ marginBottom: '1.5rem' }}>
              <div>
                  <label htmlFor="firstName" className="form-label">First Name *</label>
                  <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="form-input" />
              </div>
              <div>
                  <label htmlFor="lastName" className="form-label">Last Name *</label>
                  <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="form-input" />
              </div>
          </div>

          <div className="grid-2-col" style={{ marginBottom: '1.5rem' }}>
              <div>
                  <label htmlFor="emailAddress" className="form-label">Email Address *</label>
                  <input type="email" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required className="form-input" />
              </div>
              <div>
                  <label htmlFor="phoneNumber" className="form-label">Phone Number *</label>
                  <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="form-input" />
              </div>
          </div>

          {/* CONSULTATION DETAILS */}
          <SectionTitle>Consultation Details</SectionTitle>
          
          <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="procedureOfInterest" className="form-label">Procedure of Interest *</label>
              <select id="procedureOfInterest" name="procedureOfInterest" value={formData.procedureOfInterest} onChange={handleChange} required className="form-select">
                  {mockServices.map(s => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                  ))}
              </select>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="preferredDoctor" className="form-label">Preferred Doctor *</label>
              <select id="preferredDoctor" name="preferredDoctor" value={formData.preferredDoctor} onChange={handleChange} required className="form-select">
                  {mockDoctors.map((d, index) => (
                      <option key={index} value={d}>{d}</option>
                  ))}
              </select>
          </div>

          {/* PREFERRED SCHEDULE */}
          <SectionTitle>Preferred Schedule</SectionTitle>

          <div className="grid-2-col" style={{ marginBottom: '1.5rem' }}>
              <div>
                  <label htmlFor="preferredDate" className="form-label">Preferred Date *</label>
                  <input type="date" id="preferredDate" name="preferredDate" value={formData.preferredDate} onChange={handleChange} required className="form-input" />
              </div>
              <div>
                  <label htmlFor="preferredTime" className="form-label">Preferred Time (e.g., 10:00 AM) *</label>
                  <input type="time" id="preferredTime" name="preferredTime" value={formData.preferredTime} onChange={handleChange} required className="form-input" />
              </div>
          </div>

          {/* ADDITIONAL NOTES */}
          <SectionTitle>Additional Notes (Optional)</SectionTitle>
          
          <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="additionalNotes" className="form-label" style={{ clip: 'rect(0 0 0 0)', position: 'absolute' }}>Additional Notes</label>
              <textarea id="additionalNotes" name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} rows={3} placeholder="Any specific questions or details you'd like us to know before the consultation?" className="form-textarea"></textarea>
          </div>

          {message && (
            <div className={message.type === 'success' ? 'msg-success' : 'msg-error'} style={{ marginBottom: '1.5rem' }}>
              {message.text}
            </div>
          )}

          <button
            type="submit"
            className="btn-primary btn-full"
          >
            Request Booking
          </button>
          <p style={{ fontSize: '0.75rem', textAlign: 'center', color: '#6b7280', marginTop: '1rem' }}>* indicates a required field.</p>
        </form>
      </div>
    </div>
  );
};

const AboutUsPage: React.FC = () => (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <h2 className="section-title" style={{ textAlign: 'left', borderBottom: '2px solid var(--color-primary)', marginBottom: '2rem' }}>About PlastiCare Hub</h2>
      <div className="grid-2-col" style={{ gap: '3rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <section>
            <h3 style={{ fontSize: '1.875rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>Our Mission</h3>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text)', lineHeight: '1.6' }}>
              To provide patient-centered healthcare medical treatment and advice with excellence in quality, service, and access. We aim for a community where all people achieve their full potential for health and well-being across the lifespan.
            </p>
          </section>
          <section>
            <h3 style={{ fontSize: '1.875rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>Core Values</h3>
            <ul style={{ listStyleType: 'disc', listStylePosition: 'inside', color: 'var(--color-text)', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginLeft: '1rem' }}>
              <li>The patient always comes first. We are dedicated to patient care.</li>
              <li>We treat each person with respect and dignity.</li>
              <li>We use innovative approaches to health care and customer service.</li>
              <li>Teamwork is central to our work, involving the patient as part of our team.</li>
            </ul>
          </section>
        </div>
        <div>
          <div style={{ backgroundColor: '#fdf2f8', padding: '1.5rem', borderRadius: '0.75rem', boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)' }}>
            <h3 style={{ fontSize: '1.875rem', fontWeight: '600', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>Our Vision</h3>
            <p style={{ color: 'var(--color-text)', lineHeight: '1.6', fontStyle: 'italic' }}>
              "A community in which all people achieve their full potential for health and well-being across the lifespan. We work to be trusted by patients, Specialists, a valued partner in the Community, and creators of positive change."
            </p>
          </div>
          <img
              src="https://placehold.co/600x400/f8b4cb/ffffff?text=Our+Team"
              alt="PlastiCare Hub Team"
              style={{ marginTop: '2rem', borderRadius: '0.75rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)', width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );

const ServicesPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<Service['category'] | 'All'>('All');
    const [selectedService, setSelectedService] = useState<Service | null>(null);
  
    const categories = ['All', 'Face', 'Body', 'Breast', 'Buttocks', 'Other'];
  
    const filteredServices = selectedCategory === 'All'
      ? mockServices
      : mockServices.filter(s => s.category === selectedCategory);
  
    return (
      <div className="container" style={{ padding: '2rem 1rem' }}>
        <h2 className="section-title" style={{ textAlign: 'left', borderBottom: '2px solid var(--color-primary)', marginBottom: '2rem' }}>Our Comprehensive Services</h2>
  
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as Service['category'] | 'All')}
              style={{ 
                  padding: '0.5rem 1rem', 
                  borderRadius: '9999px', 
                  fontWeight: '500', 
                  transition: 'background-color 0.2s, box-shadow 0.2s', 
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #e5e7eb',
                  cursor: 'pointer',
                  ...(selectedCategory === category
                    ? { backgroundColor: 'var(--color-primary)', color: 'white', borderColor: 'var(--color-primary)' }
                    : { backgroundColor: 'white', color: '#4b5563', ':hover': { backgroundColor: '#fce7f3' } }) 
              }}
            >
              {category}
            </button>
          ))}
        </div>
  
        <div className="services-grid">
          {filteredServices.map(service => (
            <div key={service.id} className="card" style={{ borderTop: '4px solid #f9a8d4' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>{service.name}</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-primary)', marginBottom: '0.75rem', fontWeight: '500' }}>Category: {service.category}</p>
              <p style={{ color: 'var(--color-text)' }}>{service.description}</p>
              <button 
                  onClick={() => setSelectedService(service)}
                  className="btn-secondary"
                  style={{ marginTop: '1rem' }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
  
        {/* Service Detail Modal */}
        {selectedService && (
          <Modal 
              isOpen={!!selectedService} 
              onClose={() => setSelectedService(null)} 
              title={selectedService.name}
          >
              <h5 style={{ fontSize: '1.125rem', fontWeight: '500', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>Category: {selectedService.category}</h5>
              <p style={{ color: 'var(--color-text)', lineHeight: '1.6' }}>{selectedService.details}</p>
              <button 
                  onClick={() => setSelectedService(null)}
                  className="btn-primary btn-full"
                  style={{ marginTop: '1.5rem', fontSize: '1rem', padding: '0.65rem' }}
              >
                  Close & Book Now
              </button>
          </Modal>
        )}
      </div>
    );
  };

const ShopPage: React.FC = () => (
  <div className="container" style={{ padding: '2rem 1rem' }}>
    <h2 className="section-title" style={{ textAlign: 'left', borderBottom: '2px solid var(--color-primary)', marginBottom: '2rem' }}>Online Shop: Essential Care Products</h2>

    <div className="shop-grid">
      {mockProducts.map(product => (
        <div key={product.id} className="card" style={{ padding: 0, overflow: 'hidden', textAlign: 'center', transition: 'box-shadow 0.3s' }}>
          <img src={product.imagePlaceholder} alt={product.name} style={{ width: '100%', height: '10rem', objectFit: 'cover', backgroundColor: '#fdf2f8' }} />
          <div style={{ padding: '1rem' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '0.25rem' }}>{product.name}</h4>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>${product.price.toFixed(2)}</p>
            <button style={{ width: '100%', padding: '0.5rem', backgroundColor: '#1f2937', color: 'white', borderRadius: '0.5rem', transition: 'background-color 0.3s', border: 'none', cursor: 'pointer' }}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ContactUsPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setStatusMessage('');

        // Simulate API call to Java backend
        try {
            // Mock success for demonstration
            await new Promise(resolve => setTimeout(resolve, 1000)); 

            setStatus('success');
            setStatusMessage('Thank you for your inquiry! We will respond within 1-2 business days.');
            setFormData({ name: '', email: '', subject: '', message: '' });

        } catch (error) {
            console.error('Contact form submission error:', error);
            setStatus('error');
            setStatusMessage('There was an error sending your message. Please try again or call us.');
        }
    };

    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>Get In Touch</h2>
            <div className="grid-2-col" style={{ gap: '2.5rem', maxWidth: '48rem', margin: '0 auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937' }}>Contact Details</h3>
                    <p style={{ color: 'var(--color-text)' }}>
                        Our dedicated team is ready to answer your questions regarding procedures, booking, or general inquiries.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <p style={{ display: 'flex', alignItems: 'center', color: 'var(--color-text)' }}>
                            <Icon name="Mail" size={20} />
                            Email: info@plasticarehub.com
                        </p>
                        <p style={{ display: 'flex', alignItems: 'center', color: 'var(--color-text)' }}>
                            <svg style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.75rem', color: 'var(--color-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-5.72z"></path></svg>
                            Phone: (254) 712345678
                        </p>
                        <p style={{ display: 'flex', alignItems: 'flex-start', color: 'var(--color-text)' }}>
                            <svg style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.75rem', color: 'var(--color-primary)', marginTop: '0.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                            Address: 123 Health Blvd, Suite 400, Wellness City, CA 90210
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="card" style={{ padding: '2rem', marginTop: '2.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>Send us a Message</h3>
                    
                    <input type="text" name="name" placeholder="Your Full Name" value={formData.name} onChange={handleChange} required className="form-input" style={{ marginBottom: '1rem' }} />
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="form-input" style={{ marginBottom: '1rem' }} />
                    <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required className="form-input" style={{ marginBottom: '1rem' }} />
                    <textarea name="message" placeholder="Your Message..." value={formData.message} onChange={handleChange} required rows={4} className="form-textarea" style={{ marginBottom: '1rem' }}></textarea>

                    {statusMessage && (
                        <div className={status === 'success' ? 'msg-success' : status === 'error' ? 'msg-error' : ''} style={{ marginBottom: '1rem' }}>
                            {statusMessage}
                        </div>
                    )}
                    
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="btn-primary btn-full"
                        style={{ fontSize: '1rem', padding: '0.75rem' }}
                    >
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </div>
    );
};

// --- Main Application Component ---
const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<Route>('/');

  const navigate = useCallback((route: Route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on navigation
  }, []);

  const renderContent = () => {
    switch (currentRoute) {
      case '/':
        return <HomePage navigate={navigate} />;
      case '/about':
        return <AboutUsPage />;
      case '/services':
        return <ServicesPage />;
      case '/shop':
        return <ShopPage />;
      case '/booking':
        return <BookingPage />;
      case '/contact':
        return <ContactUsPage />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  // Basic client-side routing simulation using window location
  useEffect(() => {
    const validRoutes: Route[] = ['/', '/about', '/services', '/shop', '/booking', '/contact'];
    
    const handlePopState = () => {
        const path = window.location.pathname as Route;
        if (validRoutes.includes(path)) {
            setCurrentRoute(path);
        } else {
            setCurrentRoute('/');
        }
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState(); 

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);


  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <GlobalStyle />
        <Header navigate={navigate} currentRoute={currentRoute} />
        <main style={{ flexGrow: 1, paddingTop: '1rem' }}>
            {renderContent()}
        </main>
        <Footer />
    </div>
  );
};

export default App;
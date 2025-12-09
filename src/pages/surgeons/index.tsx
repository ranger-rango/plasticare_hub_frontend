import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FilterSection from './components/FilterSection';
import SurgeonCard from './components/SurgeonCard';
import CredentialsSection from './components/CredentialsSection';
import ConsultationCTA from './components/ConsultationCTA';
import Icon from '../../components/AppIcon';
import type { Surgeon, FilterOptions } from './types';

const SurgeonsPage = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    specialization: '',
    experience: '',
    availability: ''
  });

  const surgeons: Surgeon[] = [
  {
    id: "dr-sarah-chen",
    name: "Dr. Sarah Chen",
    title: "Board-Certified Plastic Surgeon",
    specialization: ["Facial Procedures", "Rhinoplasty", "Facelift", "Eyelid Surgery"],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17f8f3366-1763293591953.png",
    alt: "Dr. Sarah Chen, Asian female surgeon in white medical coat with stethoscope, smiling confidently in modern medical office",
    yearsOfExperience: 18,
    education: [
    {
      degree: "Doctor of Medicine (M.D.)",
      institution: "Harvard Medical School",
      year: 2005,
      description: "Graduated with honors, specializing in plastic and reconstructive surgery"
    },
    {
      degree: "Plastic Surgery Residency",
      institution: "Johns Hopkins Hospital",
      year: 2011,
      description: "Completed comprehensive training in aesthetic and reconstructive procedures"
    },
    {
      degree: "Fellowship in Facial Plastic Surgery",
      institution: "Mayo Clinic",
      year: 2012,
      description: "Advanced training in facial aesthetic procedures and reconstruction"
    }],

    certifications: [
    "American Board of Plastic Surgery",
    "American Society of Plastic Surgeons",
    "American College of Surgeons",
    "International Society of Aesthetic Plastic Surgery"],

    awards: [
    "Top Doctor Award 2023 - Castle Connolly",
    "Best Plastic Surgeon - City Magazine 2022",
    "Excellence in Patient Care Award 2021",
    "Research Excellence Award - ASPS 2020"],

    philosophy: "I believe in enhancing natural beauty while maintaining facial harmony. My approach combines surgical precision with artistic vision to create results that look natural and feel authentic. Every patient deserves personalized care that respects their unique features and aesthetic goals.",
    videoIntroUrl: "https://example.com/dr-chen-intro.mp4",
    consultationAvailable: true,
    featuredProcedures: [
    "Rhinoplasty (Nose Surgery)",
    "Facelift & Neck Lift",
    "Eyelid Surgery (Blepharoplasty)",
    "Brow Lift",
    "Facial Fat Grafting"],

    patientTestimonials: [
    {
      id: "t1",
      patientName: "Jennifer M.",
      patientImage: "https://img.rocket.new/generatedImages/rocket_gen_img_129550054-1764676126849.png",
      patientAlt: "Jennifer M., blonde woman in her 40s with natural makeup smiling warmly at camera",
      procedure: "Facelift",
      rating: 5,
      comment: "Dr. Chen transformed not just my appearance but my confidence. Her attention to detail and caring approach made the entire experience comfortable. The results look incredibly natural - exactly what I wanted.",
      date: "2024-01-15",
      videoUrl: "https://example.com/testimonial-jennifer.mp4"
    },
    {
      id: "t2",
      patientName: "Michael R.",
      patientImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1ec92ba36-1763293689588.png",
      patientAlt: "Michael R., professional man in his 30s with dark hair wearing business casual attire",
      procedure: "Rhinoplasty",
      rating: 5,
      comment: "I researched extensively before choosing Dr. Chen for my rhinoplasty. Her expertise and artistic eye are unmatched. The results exceeded my expectations while maintaining my ethnic features.",
      date: "2023-11-20"
    }],

    beforeAfterGallery: [
    {
      id: "ba1",
      procedure: "Rhinoplasty",
      beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_19ebb389e-1765003959194.png",
      beforeAlt: "Before rhinoplasty - profile view of woman with prominent nasal bridge in clinical setting",
      afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1e3c616b4-1765003960787.png",
      afterAlt: "After rhinoplasty - profile view showing refined nasal contour with natural appearance",
      timeframe: "6 months post-op",
      description: "Natural refinement of nasal bridge while maintaining ethnic characteristics"
    }]

  },
  {
    id: "dr-michael-rodriguez",
    name: "Dr. Michael Rodriguez",
    title: "Board-Certified Plastic Surgeon",
    specialization: ["Body Contouring", "Liposuction", "Tummy Tuck", "Brazilian Butt Lift"],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b36cae89-1763294738662.png",
    alt: "Dr. Michael Rodriguez, Hispanic male surgeon in blue scrubs with surgical cap, standing confidently in operating room",
    yearsOfExperience: 15,
    education: [
    {
      degree: "Doctor of Medicine (M.D.)",
      institution: "Stanford University School of Medicine",
      year: 2008,
      description: "Graduated with distinction in surgical sciences"
    },
    {
      degree: "General Surgery Residency",
      institution: "UCLA Medical Center",
      year: 2013,
      description: "Comprehensive surgical training with focus on body procedures"
    },
    {
      degree: "Plastic Surgery Fellowship",
      institution: "Cleveland Clinic",
      year: 2015,
      description: "Specialized training in body contouring and aesthetic surgery"
    }],

    certifications: [
    "American Board of Plastic Surgery",
    "American Society of Plastic Surgeons",
    "American Society for Aesthetic Plastic Surgery"],

    awards: [
    "Patients' Choice Award 2023",
    "Top Body Contouring Surgeon 2022",
    "Innovation in Plastic Surgery Award 2021"],

    philosophy: "Body contouring is about helping patients achieve their ideal physique through safe, effective procedures. I focus on creating natural-looking results that enhance body proportions and boost confidence. My goal is to help patients feel comfortable and confident in their own skin.",
    videoIntroUrl: "https://example.com/dr-rodriguez-intro.mp4",
    consultationAvailable: true,
    featuredProcedures: [
    "Liposuction & Body Sculpting",
    "Tummy Tuck (Abdominoplasty)",
    "Brazilian Butt Lift",
    "Mommy Makeover",
    "Body Lift Procedures"],

    patientTestimonials: [
    {
      id: "t3",
      patientName: "Amanda K.",
      patientImage: "https://img.rocket.new/generatedImages/rocket_gen_img_18b49529e-1764859408472.png",
      patientAlt: "Amanda K., brunette woman in her 30s with athletic build smiling outdoors",
      procedure: "Mommy Makeover",
      rating: 5,
      comment: "Dr. Rodriguez gave me my confidence back after having children. His skill and compassionate care made the entire process smooth. I feel like myself again, only better!",
      date: "2024-02-10"
    }],

    beforeAfterGallery: [
    {
      id: "ba2",
      procedure: "Tummy Tuck",
      beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_2a03ea863-1765003977786.png",
      beforeAlt: "Before tummy tuck - frontal view showing abdominal laxity and excess skin",
      afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_11127e061-1764656058817.png",
      afterAlt: "After tummy tuck - frontal view showing toned, flat abdomen with natural contours",
      timeframe: "1 year post-op",
      description: "Complete abdominal transformation with natural-looking results"
    }]

  },
  {
    id: "dr-emily-thompson",
    name: "Dr. Emily Thompson",
    title: "Board-Certified Plastic Surgeon",
    specialization: ["Breast Surgery", "Breast Augmentation", "Breast Lift", "Breast Reconstruction"],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12f3c1bee-1764790614892.png",
    alt: "Dr. Emily Thompson, Caucasian female surgeon with blonde hair in white coat, holding medical tablet in bright consultation room",
    yearsOfExperience: 12,
    education: [
    {
      degree: "Doctor of Medicine (M.D.)",
      institution: "University of Pennsylvania",
      year: 2011,
      description: "Graduated with honors in surgical oncology"
    },
    {
      degree: "Plastic Surgery Residency",
      institution: "Memorial Sloan Kettering Cancer Center",
      year: 2017,
      description: "Specialized training in breast reconstruction and aesthetic surgery"
    }],

    certifications: [
    "American Board of Plastic Surgery",
    "American Society of Plastic Surgeons",
    "American Society of Breast Surgeons"],

    awards: [
    "Excellence in Breast Reconstruction 2023",
    "Compassionate Care Award 2022",
    "Top Breast Surgeon - Regional Award 2021"],

    philosophy: "Breast surgery is deeply personal, whether for aesthetic enhancement or reconstruction. I approach each patient with empathy and expertise, ensuring they feel heard and supported throughout their journey. My goal is to help women feel confident and comfortable in their bodies.",
    videoIntroUrl: "https://example.com/dr-thompson-intro.mp4",
    consultationAvailable: true,
    featuredProcedures: [
    "Breast Augmentation",
    "Breast Lift (Mastopexy)",
    "Breast Reduction",
    "Breast Reconstruction",
    "Revision Breast Surgery"],

    patientTestimonials: [
    {
      id: "t4",
      patientName: "Lisa P.",
      patientImage: "https://img.rocket.new/generatedImages/rocket_gen_img_17d918e2b-1763301446194.png",
      patientAlt: "Lisa P., woman in her 40s with auburn hair smiling confidently in casual attire",
      procedure: "Breast Reconstruction",
      rating: 5,
      comment: "Dr. Thompson's skill and compassion helped me through one of the most challenging times of my life. She not only restored my body but also my spirit. I'm forever grateful.",
      date: "2023-12-05"
    }],

    beforeAfterGallery: [
    {
      id: "ba3",
      procedure: "Breast Augmentation",
      beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_174857320-1764654468594.png",
      beforeAlt: "Before breast augmentation - frontal view showing natural breast contour",
      afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_174857320-1764654468594.png",
      afterAlt: "After breast augmentation - frontal view showing enhanced, natural-looking breast volume",
      timeframe: "3 months post-op",
      description: "Natural breast enhancement with proportionate results"
    }]

  },
  {
    id: "dr-james-park",
    name: "Dr. James Park",
    title: "Board-Certified Plastic Surgeon",
    specialization: ["Reconstructive Surgery", "Burn Reconstruction", "Hand Surgery", "Microsurgery"],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b523b869-1763295530479.png",
    alt: "Dr. James Park, Asian male surgeon in green surgical scrubs with mask around neck, standing in hospital corridor",
    yearsOfExperience: 20,
    education: [
    {
      degree: "Doctor of Medicine (M.D.)",
      institution: "Yale School of Medicine",
      year: 2003,
      description: "Graduated with distinction in reconstructive surgery"
    },
    {
      degree: "Plastic Surgery Residency",
      institution: "Massachusetts General Hospital",
      year: 2009,
      description: "Comprehensive training in reconstructive and microsurgery"
    },
    {
      degree: "Microsurgery Fellowship",
      institution: "MD Anderson Cancer Center",
      year: 2010,
      description: "Advanced training in complex reconstructive procedures"
    }],

    certifications: [
    "American Board of Plastic Surgery",
    "American Society of Plastic Surgeons",
    "American Society for Reconstructive Microsurgery"],

    awards: [
    "Lifetime Achievement Award - ASPS 2023",
    "Excellence in Reconstructive Surgery 2022",
    "Humanitarian Award 2021",
    "Research Pioneer Award 2020"],

    philosophy: "Reconstructive surgery is about restoring function and form, giving patients back their quality of life. Every case is unique, and I approach each with the dedication and precision it deserves. My mission is to help patients regain confidence and functionality through expert surgical care.",
    videoIntroUrl: "https://example.com/dr-park-intro.mp4",
    consultationAvailable: true,
    featuredProcedures: [
    "Burn Reconstruction",
    "Scar Revision",
    "Hand Surgery & Reconstruction",
    "Microsurgical Reconstruction",
    "Cleft Lip & Palate Repair"],

    patientTestimonials: [
    {
      id: "t5",
      patientName: "Robert T.",
      patientImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1076999a3-1764669421085.png",
      patientAlt: "Robert T., middle-aged man with gray hair smiling warmly in outdoor setting",
      procedure: "Hand Reconstruction",
      rating: 5,
      comment: "Dr. Park's expertise saved my career. After a severe injury, I thought I'd never use my hand again. His skill and dedication gave me back my livelihood and independence.",
      date: "2023-10-18"
    }],

    beforeAfterGallery: [
    {
      id: "ba4",
      procedure: "Scar Revision",
      beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1ebb125f4-1764832140209.png",
      beforeAlt: "Before scar revision - close-up of prominent facial scar with irregular texture",
      afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_181462288-1764656209093.png",
      afterAlt: "After scar revision - close-up showing significantly improved scar appearance with smooth texture",
      timeframe: "1 year post-op",
      description: "Dramatic improvement in scar appearance and texture"
    }]

  },
  {
    id: "dr-rachel-kim",
    name: "Dr. Rachel Kim",
    title: "Board-Certified Plastic Surgeon",
    specialization: ["Non-Surgical Treatments", "Injectables", "Laser Treatments", "Skin Rejuvenation"],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_167a02761-1763296312845.png",
    alt: "Dr. Rachel Kim, Asian female doctor in white medical coat with pink stethoscope, smiling in modern aesthetic clinic",
    yearsOfExperience: 10,
    education: [
    {
      degree: "Doctor of Medicine (M.D.)",
      institution: "Columbia University",
      year: 2013,
      description: "Graduated with focus on aesthetic medicine"
    },
    {
      degree: "Dermatology Residency",
      institution: "New York-Presbyterian Hospital",
      year: 2017,
      description: "Specialized training in cosmetic dermatology"
    },
    {
      degree: "Aesthetic Medicine Fellowship",
      institution: "American Academy of Aesthetic Medicine",
      year: 2018,
      description: "Advanced training in non-surgical aesthetic procedures"
    }],

    certifications: [
    "American Board of Plastic Surgery",
    "American Society for Aesthetic Plastic Surgery",
    "American Academy of Facial Plastic Surgery"],

    awards: [
    "Best Non-Surgical Specialist 2023",
    "Innovation in Aesthetic Medicine 2022",
    "Patient Satisfaction Award 2021"],

    philosophy: "Non-surgical treatments offer incredible results with minimal downtime. I believe in a conservative, natural approach that enhances beauty without dramatic changes. My goal is to help patients look refreshed and rejuvenated while maintaining their unique features.",
    videoIntroUrl: "https://example.com/dr-kim-intro.mp4",
    consultationAvailable: true,
    featuredProcedures: [
    "Botox & Dysport Injections",
    "Dermal Fillers",
    "Laser Skin Resurfacing",
    "Chemical Peels",
    "Non-Surgical Face Lift"],

    patientTestimonials: [
    {
      id: "t6",
      patientName: "Sarah L.",
      patientImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1e09d48a8-1764679477791.png",
      patientAlt: "Sarah L., woman in her 50s with silver hair smiling radiantly in professional attire",
      procedure: "Non-Surgical Face Lift",
      rating: 5,
      comment: "Dr. Kim's expertise with non-surgical treatments is remarkable. I look years younger without anyone knowing I had work done. The results are natural and exactly what I wanted.",
      date: "2024-01-28"
    }],

    beforeAfterGallery: [
    {
      id: "ba5",
      procedure: "Dermal Fillers",
      beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1abb740db-1764906563812.png",
      beforeAlt: "Before dermal fillers - frontal view showing volume loss in cheeks and nasolabial folds",
      afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_174857320-1764654468594.png",
      afterAlt: "After dermal fillers - frontal view showing restored facial volume with natural contours",
      timeframe: "Immediate results",
      description: "Natural volume restoration with subtle, youthful enhancement"
    }]

  },
  {
    id: "dr-david-martinez",
    name: "Dr. David Martinez",
    title: "Board-Certified Plastic Surgeon",
    specialization: ["Male Plastic Surgery", "Gynecomastia", "Male Body Contouring", "Hair Restoration"],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f199e3d5-1763292277505.png",
    alt: "Dr. David Martinez, Hispanic male surgeon in navy blue scrubs with surgical cap, standing confidently with arms crossed",
    yearsOfExperience: 14,
    education: [
    {
      degree: "Doctor of Medicine (M.D.)",
      institution: "University of Miami Miller School of Medicine",
      year: 2009,
      description: "Graduated with honors in surgical sciences"
    },
    {
      degree: "Plastic Surgery Residency",
      institution: "University of Texas Southwestern",
      year: 2015,
      description: "Specialized training in male aesthetic surgery"
    }],

    certifications: [
    "American Board of Plastic Surgery",
    "American Society of Plastic Surgeons",
    "International Society of Hair Restoration Surgery"],

    awards: [
    "Top Male Plastic Surgeon 2023",
    "Excellence in Male Aesthetics 2022",
    "Patient Choice Award 2021"],

    philosophy: "Men have unique aesthetic goals and concerns. I specialize in procedures that enhance masculine features while maintaining a natural appearance. My approach is discreet, professional, and focused on helping men look and feel their best.",
    videoIntroUrl: "https://example.com/dr-martinez-intro.mp4",
    consultationAvailable: true,
    featuredProcedures: [
    "Gynecomastia Surgery",
    "Male Liposuction",
    "Male Rhinoplasty",
    "Hair Transplantation",
    "Male Facelift"],

    patientTestimonials: [
    {
      id: "t7",
      patientName: "John D.",
      patientImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1ee59f406-1763296884075.png",
      patientAlt: "John D., professional man in his 40s with salt and pepper hair in business suit",
      procedure: "Gynecomastia Surgery",
      rating: 5,
      comment: "Dr. Martinez understood my concerns and delivered results that exceeded my expectations. The procedure was discreet, and the results look completely natural. I finally feel confident again.",
      date: "2023-11-12"
    }],

    beforeAfterGallery: [
    {
      id: "ba6",
      procedure: "Gynecomastia Surgery",
      beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_182ff5996-1764792567841.png",
      beforeAlt: "Before gynecomastia surgery - frontal view showing enlarged male breast tissue",
      afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1ab5f6b53-1765003960297.png",
      afterAlt: "After gynecomastia surgery - frontal view showing masculine chest contour with natural definition",
      timeframe: "6 months post-op",
      description: "Masculine chest restoration with natural, athletic appearance"
    }]

  }];


  const filteredSurgeons = useMemo(() => {
    return surgeons.filter((surgeon) => {
      if (filters.specialization && !surgeon.specialization.some((spec) =>
      spec.toLowerCase().includes(filters.specialization.toLowerCase())
      )) {
        return false;
      }

      if (filters.experience) {
        const [min, max] = filters.experience.split('-').map(Number);
        if (max) {
          if (surgeon.yearsOfExperience < min || surgeon.yearsOfExperience > max) {
            return false;
          }
        } else {
          if (surgeon.yearsOfExperience < min) {
            return false;
          }
        }
      }

      return true;
    });
  }, [surgeons, filters]);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  return (
    <>
      <Helmet>
        <title>Expert Surgeons - MedBeauty Clinic | Board-Certified Excellence</title>
        <meta
          name="description"
          content="Meet our board-certified plastic surgeons. Transform with confidence through expert care combining medical excellence with aesthetic artistry." />

      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
            <HeroSection />

            <FilterSection onFilterChange={handleFilterChange} />

            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-text-primary mb-2">
                  Our Surgeons
                </h2>
                <p className="font-body text-text-secondary">
                  Showing {filteredSurgeons.length} of {surgeons.length} surgeons
                </p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Shield" size={20} className="text-primary" />
                <span className="font-body">All Board-Certified</span>
              </div>
            </div>

            {filteredSurgeons.length > 0 ?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {filteredSurgeons.map((surgeon) =>
              <SurgeonCard key={surgeon.id} surgeon={surgeon} />
              )}
              </div> :

            <div className="text-center py-16">
                <Icon name="Search" size={48} className="text-muted mx-auto mb-4" />
                <h3 className="font-headline text-xl font-semibold text-text-primary mb-2">
                  No surgeons found
                </h3>
                <p className="font-body text-text-secondary mb-6">
                  Try adjusting your filters to see more results
                </p>
              </div>
            }

            <CredentialsSection />

            <ConsultationCTA />
          </div>
        </main>

        <footer className="bg-card border-t border-border mt-16">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-headline text-lg font-semibold text-text-primary mb-4">
                  MedBeauty Clinic
                </h3>
                <p className="font-body text-sm text-text-secondary mb-4">
                  Where medical excellence meets aesthetic artistry
                </p>
                <div className="flex items-center space-x-4">
                  <Icon name="Facebook" size={20} className="text-text-secondary hover:text-primary cursor-pointer transition-brand" />
                  <Icon name="Instagram" size={20} className="text-text-secondary hover:text-primary cursor-pointer transition-brand" />
                  <Icon name="Twitter" size={20} className="text-text-secondary hover:text-primary cursor-pointer transition-brand" />
                  <Icon name="Youtube" size={20} className="text-text-secondary hover:text-primary cursor-pointer transition-brand" />
                </div>
              </div>

              <div>
                <h4 className="font-body text-sm font-semibold text-text-primary mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/procedures" className="font-body text-sm text-text-secondary hover:text-primary transition-brand">
                      Procedures
                    </a>
                  </li>
                  <li>
                    <a href="/patient-gallery" className="font-body text-sm text-text-secondary hover:text-primary transition-brand">
                      Patient Gallery
                    </a>
                  </li>
                  <li>
                    <a href="/patient-care" className="font-body text-sm text-text-secondary hover:text-primary transition-brand">
                      Patient Care
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="font-body text-sm text-text-secondary hover:text-primary transition-brand">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-body text-sm font-semibold text-text-primary mb-4">
                  Contact
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <Icon name="MapPin" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="font-body text-sm text-text-secondary">
                      123 Medical Plaza, Suite 100<br />Beverly Hills, CA 90210
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} className="text-primary flex-shrink-0" />
                    <span className="font-body text-sm text-text-secondary">(555) 123-4567</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} className="text-primary flex-shrink-0" />
                    <span className="font-body text-sm text-text-secondary">info@medbeauty.com</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-body text-sm font-semibold text-text-primary mb-4">
                  Office Hours
                </h4>
                <ul className="space-y-2 font-body text-sm text-text-secondary">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: 10:00 AM - 4:00 PM</li>
                  <li>Sunday: Closed</li>
                  <li className="pt-2 text-primary">24/7 Emergency Support</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border pt-8 text-center">
              <p className="font-body text-sm text-text-secondary">
                &copy; {new Date().getFullYear()} MedBeauty Clinic. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>);

};

export default SurgeonsPage;
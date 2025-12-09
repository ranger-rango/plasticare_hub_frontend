import { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import type { Technology } from '../types';

const TechnologySection = () => {
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);

  const technologies: Technology[] = [
  {
    id: '1',
    name: 'VASER Liposuction System',
    description:
    'Advanced ultrasound-assisted liposuction technology that selectively targets fat cells while preserving surrounding tissues. Provides superior body contouring results with minimal downtime and enhanced skin tightening.',
    image:
    "https://images.unsplash.com/photo-1691935152800-56b0353b4aed",
    alt: 'Modern VASER liposuction medical device with digital display and ultrasound probe in sterile surgical environment',
    benefits: [
    'Precise fat removal',
    'Minimal tissue trauma',
    'Enhanced skin tightening',
    'Faster recovery time',
    'Superior body contouring'],

    specifications: [
    'Third-generation ultrasound technology',
    'Multiple probe sizes for precision',
    'Real-time tissue monitoring',
    'FDA-approved safety standards',
    'Integrated aspiration system']

  },
  {
    id: '2',
    name: '3D Facial Imaging System',
    description:
    'State-of-the-art 3D imaging technology that creates detailed facial maps for precise surgical planning. Allows patients to visualize potential outcomes before committing to procedures.',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_15f21f227-1764921793396.png",
    alt: 'Advanced 3D facial scanning equipment with multiple cameras and computer workstation displaying detailed facial analysis',
    benefits: [
    'Accurate surgical planning',
    'Visual outcome prediction',
    'Enhanced patient communication',
    'Precise measurements',
    'Digital treatment records'],

    specifications: [
    'Sub-millimeter accuracy',
    'Multi-angle capture system',
    'Real-time 3D rendering',
    'Secure cloud storage',
    'Before/after comparison tools']

  },
  {
    id: '3',
    name: 'Laser Skin Resurfacing Platform',
    description:
    'Multi-wavelength laser system for comprehensive skin rejuvenation. Treats wrinkles, scars, pigmentation, and texture issues with customizable intensity levels for optimal results.',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_14e3a587a-1764802299756.png",
    alt: 'Professional laser skin treatment device with adjustable settings and cooling system in modern medical treatment room',
    benefits: [
    'Customizable treatment depth',
    'Minimal downtime',
    'Collagen stimulation',
    'Versatile applications',
    'Consistent results'],

    specifications: [
    'Multiple wavelength options',
    'Fractional and ablative modes',
    'Integrated cooling system',
    'Adjustable pulse duration',
    'Safety monitoring sensors']

  },
  {
    id: '4',
    name: 'Advanced Anesthesia Monitoring',
    description:
    'Comprehensive patient monitoring system that tracks vital signs in real-time during procedures. Ensures maximum safety with immediate alerts for any parameter deviations.',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_14c142f86-1764699660524.png",
    alt: 'High-tech patient monitoring system with multiple screens displaying vital signs, ECG, and oxygen levels in surgical suite',
    benefits: [
    'Real-time vital monitoring',
    'Immediate alert system',
    'Comprehensive data logging',
    'Enhanced patient safety',
    'Anesthesia depth tracking'],

    specifications: [
    'Multi-parameter monitoring',
    'Continuous ECG tracking',
    'Blood pressure monitoring',
    'Oxygen saturation sensors',
    'Temperature monitoring']

  },
  {
    id: '5',
    name: 'Endoscopic Surgery Equipment',
    description:
    'Minimally invasive surgical tools with high-definition cameras for precision procedures. Enables smaller incisions, reduced scarring, and faster recovery times.',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_14c142f86-1764699660524.png",
    alt: 'Modern endoscopic surgical equipment with HD camera system and specialized instruments on sterile surgical tray',
    benefits: [
    'Minimal scarring',
    'Reduced recovery time',
    'Enhanced precision',
    'Lower infection risk',
    'Better visualization'],

    specifications: [
    '4K ultra-HD imaging',
    'Flexible endoscope options',
    'LED illumination system',
    'Ergonomic instrument design',
    'Digital recording capability']

  },
  {
    id: '6',
    name: 'Cryotherapy Recovery System',
    description:
    'Advanced cold therapy technology for post-operative recovery. Reduces swelling, minimizes bruising, and accelerates healing through controlled temperature therapy.',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_14e3a1365-1765003978917.png",
    alt: 'Professional cryotherapy device with digital temperature control and comfortable patient application system',
    benefits: [
    'Reduced swelling',
    'Pain management',
    'Faster healing',
    'Minimized bruising',
    'Enhanced comfort'],

    specifications: [
    'Precise temperature control',
    'Adjustable therapy duration',
    'Multiple applicator sizes',
    'Safety auto-shutoff',
    'Patient comfort monitoring']

  }];


  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/20 px-4 py-2 rounded-full mb-4">
              <Icon name="Zap" size={18} className="text-primary" />
              <span className="font-body text-sm font-medium text-primary">
                Advanced Technology
              </span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Cutting-Edge Medical Equipment
            </h2>
            <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
              We invest in the latest medical technology to ensure superior outcomes, enhanced safety, and optimal patient comfort throughout every procedure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) =>
            <div
              key={tech.id}
              className="group bg-background rounded-xl overflow-hidden shadow-soft hover:shadow-brand transition-confident cursor-pointer hover-lift"
              onClick={() => setSelectedTech(tech)}>

                <div className="relative h-56 overflow-hidden">
                  <Image
                  src={tech.image}
                  alt={tech.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-confident" />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon name="Zap" size={16} className="text-primary" />
                      </div>
                      <span className="font-body text-xs font-medium text-background/80 uppercase tracking-wide">
                        Advanced Technology
                      </span>
                    </div>
                    <h3 className="font-headline text-lg font-semibold text-background">
                      {tech.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-body text-text-secondary text-sm line-clamp-3 mb-4">
                    {tech.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-xs text-primary font-medium">
                      View Specifications
                    </span>
                    <Icon
                    name="ArrowRight"
                    size={16}
                    className="text-primary group-hover:translate-x-1 transition-confident" />

                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-16 bg-gradient-rose rounded-2xl p-8 lg:p-12 text-center shadow-brand">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Icon name="Shield" size={40} className="text-background" />
              <Icon name="Award" size={40} className="text-background" />
              <Icon name="CheckCircle2" size={40} className="text-background" />
            </div>
            <h3 className="font-headline text-2xl lg:text-3xl font-bold text-background mb-4">
              FDA-Approved & Safety-Certified Equipment
            </h3>
            <p className="font-body text-lg text-background/90 max-w-2xl mx-auto">
              Every piece of technology in our facility meets or exceeds the highest safety standards and regulatory requirements, ensuring your wellbeing is never compromised.
            </p>
          </div>
        </div>
      </div>

      {selectedTech &&
      <div
        className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedTech(null)}>

          <div
          className="bg-surface rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-brand"
          onClick={(e) => e.stopPropagation()}>

            <div className="relative h-80">
              <Image
              src={selectedTech.image}
              alt={selectedTech.alt}
              className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent" />
              <button
              onClick={() => setSelectedTech(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-background rounded-full flex items-center justify-center shadow-soft hover:bg-surface transition-brand">

                <Icon name="X" size={20} className="text-text-primary" />
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon name="Zap" size={20} className="text-primary" />
                  </div>
                  <span className="font-body text-sm font-medium text-background/90 uppercase tracking-wide">
                    Advanced Medical Technology
                  </span>
                </div>
                <h3 className="font-headline text-3xl font-bold text-background">
                  {selectedTech.name}
                </h3>
              </div>
            </div>

            <div className="p-8">
              <p className="font-body text-lg text-text-secondary leading-relaxed mb-8">
                {selectedTech.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-headline text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                    <Icon name="Heart" size={20} className="text-primary" />
                    Patient Benefits
                  </h4>
                  <div className="space-y-3">
                    {selectedTech.benefits.map((benefit, index) =>
                  <div key={index} className="flex items-start gap-3">
                        <Icon
                      name="CheckCircle2"
                      size={20}
                      className="text-primary flex-shrink-0 mt-0.5" />

                        <span className="font-body text-text-secondary">
                          {benefit}
                        </span>
                      </div>
                  )}
                  </div>
                </div>

                <div>
                  <h4 className="font-headline text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                    <Icon name="Settings" size={20} className="text-primary" />
                    Technical Specifications
                  </h4>
                  <div className="space-y-3">
                    {selectedTech.specifications.map((spec, index) =>
                  <div key={index} className="flex items-start gap-3">
                        <Icon
                      name="Cpu"
                      size={20}
                      className="text-primary flex-shrink-0 mt-0.5" />

                        <span className="font-body text-text-secondary">
                          {spec}
                        </span>
                      </div>
                  )}
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-secondary/10 rounded-xl border border-primary/20">
                <div className="flex items-start gap-4">
                  <Icon
                  name="Shield"
                  size={24}
                  className="text-primary flex-shrink-0" />

                  <div>
                    <h5 className="font-headline text-lg font-semibold text-text-primary mb-2">
                      Safety & Certification
                    </h5>
                    <p className="font-body text-text-secondary">
                      This equipment is FDA-approved and meets all international
                      safety standards. Our medical team receives comprehensive
                      training and certification for optimal operation and
                      patient safety.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </section>);

};

export default TechnologySection;

import Icon from '../../../components/AppIcon';
import type { Certification, SafetyProtocol } from '../types';

const CertificationsSection = () => {
  const certifications: Certification[] = [
  {
    id: '1',
    name: 'American Board of Plastic Surgery',
    issuingBody: 'ABPS',
    validUntil: '2026-12-31',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_14c7832cc-1764743292100.png",
    alt: 'American Board of Plastic Surgery certification seal with gold emblem',
    description:
    'Board certification ensuring the highest standards of plastic surgery practice and patient safety.'
  },
  {
    id: '2',
    name: 'Joint Commission Accreditation',
    issuingBody: 'The Joint Commission',
    validUntil: '2025-06-30',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_12d4cd5b0-1764714267693.png",
    alt: 'Joint Commission Gold Seal of Approval certification badge',
    description:
    'Gold Seal of Approval recognizing excellence in healthcare quality and patient safety.'
  },
  {
    id: '3',
    name: 'AAAASF Accreditation',
    issuingBody: 'American Association for Accreditation of Ambulatory Surgery Facilities',
    validUntil: '2026-03-31',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_1e5a8dc32-1764675785314.png",
    alt: 'AAAASF accreditation certificate with official seal',
    description:
    'Certification for ambulatory surgical facilities meeting rigorous safety and quality standards.'
  },
  {
    id: '4',
    name: 'FDA Compliance Certification',
    issuingBody: 'U.S. Food and Drug Administration',
    validUntil: '2025-12-31',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_17a485b2a-1764664361469.png",
    alt: 'FDA compliance certification document with official stamp',
    description:
    'Compliance with FDA regulations for medical devices and pharmaceutical products.'
  },
  {
    id: '5',
    name: 'HIPAA Compliance',
    issuingBody: 'U.S. Department of Health & Human Services',
    validUntil: '2026-12-31',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_156d04b04-1764671100544.png",
    alt: 'HIPAA compliance certification badge with security shield',
    description:
    'Full compliance with patient privacy and data security regulations.'
  },
  {
    id: '6',
    name: 'State Medical Board License',
    issuingBody: 'California Medical Board',
    validUntil: '2027-06-30',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_1d3735fbc-1764756227942.png",
    alt: 'California Medical Board license certificate with state seal',
    description:
    'Active medical practice license in good standing with the state medical board.'
  }];


  const safetyProtocols: SafetyProtocol[] = [
  {
    id: '1',
    title: 'Sterile Environment Standards',
    description:
    'Hospital-grade sterilization protocols ensuring the highest level of cleanliness and infection prevention.',
    icon: 'Shield',
    procedures: [
    'HEPA air filtration systems',
    'UV sterilization equipment',
    'Strict instrument sterilization',
    'Regular environmental testing',
    'Dedicated sterile supply areas']

  },
  {
    id: '2',
    title: 'Patient Safety Monitoring',
    description:
    'Comprehensive monitoring systems tracking vital signs and patient wellbeing throughout procedures.',
    icon: 'Activity',
    procedures: [
    'Real-time vital sign monitoring',
    'Anesthesia depth tracking',
    'Emergency response protocols',
    'Post-operative observation',
    ' 24/7 nursing care availability']

  },
  {
    id: '3',
    title: 'Emergency Preparedness',
    description:
    'Fully equipped emergency response systems and trained staff ready for any medical situation.',
    icon: 'AlertCircle',
    procedures: [
    'On-site emergency equipment',
    'Regular staff training drills',
    'Hospital transfer protocols',
    'Emergency medication access',
    'Rapid response team availability']

  },
  {
    id: '4',
    title: 'Infection Control',
    description:
    'Rigorous infection prevention protocols exceeding industry standards for patient protection.',
    icon: 'ShieldCheck',
    procedures: [
    'Pre-operative screening',
    'Prophylactic antibiotics',
    'Sterile technique enforcement',
    'Post-operative wound care',
    'Infection tracking and reporting']

  }];


  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/20 px-4 py-2 rounded-full mb-4">
              <Icon name="Shield" size={18} className="text-primary" />
              <span className="font-body text-sm font-medium text-primary">
                Trust & Safety
              </span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Certifications & Safety Standards
            </h2>
            <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
              Our commitment to excellence is validated by prestigious certifications and rigorous safety protocols that exceed industry standards.
            </p>
          </div>

          <div className="mb-20">
            <h3 className="font-headline text-2xl font-bold text-text-primary mb-8 text-center">
              Accreditations & Certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert) =>
              <div
                key={cert.id}
                className="bg-background rounded-xl p-6 shadow-soft hover:shadow-brand transition-confident hover-lift">

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Award" size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-headline text-lg font-semibold text-text-primary mb-1">
                        {cert.name}
                      </h4>
                      <p className="font-body text-xs text-text-secondary">
                        {cert.issuingBody}
                      </p>
                    </div>
                  </div>
                  <p className="font-body text-sm text-text-secondary mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="font-body text-xs text-text-secondary">
                      Valid Until
                    </span>
                    <span className="font-body text-sm font-medium text-primary">
                      {new Date(cert.validUntil).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric'
                    })}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="font-headline text-2xl font-bold text-text-primary mb-8 text-center">
              Safety Protocols & Procedures
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {safetyProtocols.map((protocol) =>
              <div
                key={protocol.id}
                className="bg-background rounded-xl p-8 shadow-soft">

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon
                      name={protocol.icon}
                      size={28}
                      className="text-primary" />

                    </div>
                    <div>
                      <h4 className="font-headline text-xl font-semibold text-text-primary mb-2">
                        {protocol.title}
                      </h4>
                      <p className="font-body text-sm text-text-secondary">
                        {protocol.description}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {protocol.procedures.map((procedure, index) =>
                  <div key={index} className="flex items-start gap-3">
                        <Icon
                      name="CheckCircle2"
                      size={18}
                      className="text-primary flex-shrink-0 mt-0.5" />

                        <span className="font-body text-sm text-text-secondary">
                          {procedure}
                        </span>
                      </div>
                  )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-16 bg-gradient-rose rounded-2xl p-8 lg:p-12 shadow-brand">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Icon
                  name="Shield"
                  size={48}
                  className="text-background mx-auto mb-4" />

                <h4 className="font-headline text-2xl font-bold text-background mb-2">
                  100%
                </h4>
                <p className="font-body text-background/90">
                  Safety Compliance Record
                </p>
              </div>
              <div>
                <Icon
                  name="Award"
                  size={48}
                  className="text-background mx-auto mb-4" />

                <h4 className="font-headline text-2xl font-bold text-background mb-2">
                  15+
                </h4>
                <p className="font-body text-background/90">
                  Industry Certifications
                </p>
              </div>
              <div>
                <Icon
                  name="CheckCircle2"
                  size={48}
                  className="text-background mx-auto mb-4" />

                <h4 className="font-headline text-2xl font-bold text-background mb-2">
                  50K+
                </h4>
                <p className="font-body text-background/90">
                  Safe Procedures Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default CertificationsSection;
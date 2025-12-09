import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import type { StaffMember } from '../types';

const TeamSection = () => {
  const teamMembers: StaffMember[] = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell',
    role: 'Chief Medical Officer & Lead Plastic Surgeon',
    qualifications: [
    'MD, Harvard Medical School',
    'Board Certified Plastic Surgeon',
    'Fellow, American College of Surgeons',
    '15+ years experience'],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_155748a5d-1763296653785.png",
    alt: 'Dr. Sarah Mitchell, Chief Medical Officer, professional portrait in white medical coat with stethoscope',
    bio: 'Dr. Mitchell brings over 15 years of expertise in aesthetic and reconstructive surgery. Her patient-centered approach combines technical precision with artistic vision, ensuring natural-looking results that enhance confidence.',
    specializations: [
    'Facial Rejuvenation',
    'Body Contouring',
    'Breast Surgery',
    'Reconstructive Procedures']

  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    role: 'Senior Facial Plastic Surgeon',
    qualifications: [
    'MD, Johns Hopkins University',
    'Board Certified Facial Plastic Surgeon',
    'Rhinoplasty Specialist',
    '12+ years experience'],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1862ff89d-1763292828964.png",
    alt: 'Dr. Michael Chen, Senior Facial Plastic Surgeon, professional headshot in surgical scrubs',
    bio: 'Specializing in facial aesthetics, Dr. Chen is renowned for his meticulous approach to rhinoplasty and facial rejuvenation. His work has been featured in leading medical journals.',
    specializations: [
    'Rhinoplasty',
    'Facelift',
    'Eyelid Surgery',
    'Non-Surgical Treatments']

  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    role: 'Body Contouring Specialist',
    qualifications: [
    'MD, Stanford Medical School',
    'Board Certified Plastic Surgeon',
    'VASER Liposuction Expert',
    '10+ years experience'],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_105683bec-1763294732433.png",
    alt: 'Dr. Emily Rodriguez, Body Contouring Specialist, professional portrait in medical attire',
    bio: 'Dr. Rodriguez is a pioneer in advanced body contouring techniques. Her expertise in VASER liposuction and body sculpting has helped thousands achieve their ideal physique.',
    specializations: [
    'Liposuction',
    'Tummy Tuck',
    'Brazilian Butt Lift',
    'Body Lift Procedures']

  },
  {
    id: '4',
    name: 'Jennifer Thompson, RN',
    role: 'Director of Patient Care',
    qualifications: [
    'BSN, Nursing',
    'Certified Aesthetic Nurse',
    'Advanced Injector',
    '8+ years experience'],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_140e98ca6-1763294093740.png",
    alt: 'Jennifer Thompson, Director of Patient Care, professional photo in nursing uniform',
    bio: 'Jennifer oversees all patient care operations, ensuring every patient receives personalized attention and support throughout their transformation journey.',
    specializations: [
    'Patient Coordination',
    'Pre/Post-Op Care',
    'Injectable Treatments',
    'Patient Education']

  },
  {
    id: '5',
    name: 'Dr. James Anderson',
    role: 'Anesthesiologist',
    qualifications: [
    'MD, Yale School of Medicine',
    'Board Certified Anesthesiologist',
    'Pain Management Specialist',
    '14+ years experience'],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b36cae89-1763294738662.png",
    alt: 'Dr. James Anderson, Anesthesiologist, professional portrait in surgical attire',
    bio: 'Dr. Anderson ensures patient safety and comfort during all surgical procedures. His expertise in pain management contributes to optimal recovery experiences.',
    specializations: [
    'Surgical Anesthesia',
    'Pain Management',
    'Patient Monitoring',
    'Emergency Response']

  },
  {
    id: '6',
    name: 'Maria Santos',
    role: 'Patient Coordinator',
    qualifications: [
    'BA, Healthcare Administration',
    'Certified Patient Advocate',
    'Bilingual (English/Spanish)',
    '6+ years experience'],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12672b149-1763294392419.png",
    alt: 'Maria Santos, Patient Coordinator, professional headshot in business attire',
    bio: 'Maria is your first point of contact, guiding you through consultations, scheduling, and ensuring a seamless experience from initial inquiry to post-operative care.',
    specializations: [
    'Consultation Scheduling',
    'Insurance Coordination',
    'Patient Support',
    'Multilingual Services']

  }];


  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/20 px-4 py-2 rounded-full mb-4">
              <Icon name="Users" size={18} className="text-primary" />
              <span className="font-body text-sm font-medium text-primary">
                Our Expert Team
              </span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Meet Our Medical Professionals
            </h2>
            <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
              Our team of board-certified surgeons, specialized nurses, and dedicated support staff work together to provide exceptional care and outstanding results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) =>
            <div
              key={member.id}
              className="group bg-surface rounded-xl overflow-hidden shadow-soft hover:shadow-brand transition-confident hover-lift">

                <div className="relative h-80 overflow-hidden">
                  <Image
                  src={member.image}
                  alt={member.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-confident" />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-headline text-xl font-bold text-background mb-1">
                      {member.name}
                    </h3>
                    <p className="font-body text-sm text-background/90">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="font-body text-text-secondary text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-headline text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
                      <Icon name="Award" size={16} className="text-primary" />
                      Qualifications
                    </h4>
                    <div className="space-y-1">
                      {member.qualifications.map((qual, index) =>
                    <div
                      key={index}
                      className="flex items-start gap-2 text-xs">

                          <Icon
                        name="CheckCircle2"
                        size={14}
                        className="text-primary flex-shrink-0 mt-0.5" />

                          <span className="font-body text-text-secondary">
                            {qual}
                          </span>
                        </div>
                    )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-headline text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
                      <Icon name="Sparkles" size={16} className="text-primary" />
                      Specializations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specializations.map((spec, index) =>
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary/20 text-primary rounded-full font-body text-xs font-medium">

                          {spec}
                        </span>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-16 bg-gradient-rose rounded-2xl p-8 lg:p-12 text-center shadow-brand">
            <Icon
              name="Heart"
              size={48}
              className="text-background mx-auto mb-6" />

            <h3 className="font-headline text-2xl lg:text-3xl font-bold text-background mb-4">
              Dedicated to Your Transformation Journey
            </h3>
            <p className="font-body text-lg text-background/90 max-w-2xl mx-auto mb-6">
              Our multidisciplinary team works collaboratively to ensure you receive comprehensive care, from initial consultation through complete recovery and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-background">
              <div className="flex items-center gap-2">
                <Icon name="Users" size={20} />
                <span className="font-body text-sm font-medium">
                  25+ Medical Professionals
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Award" size={20} />
                <span className="font-body text-sm font-medium">
                  Board Certified Surgeons
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Heart" size={20} />
                <span className="font-body text-sm font-medium">
                  Patient-Centered Care
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TeamSection;
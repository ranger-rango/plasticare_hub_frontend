import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import type { Award, MediaFeature } from '../types';

const AwardsSection = () => {
  const awards: Award[] = [
  {
    id: '1',
    title: 'Best Plastic Surgery Clinic',
    organization: 'Healthcare Excellence Awards',
    year: 2023,
    description:
    'Recognized for outstanding patient care, surgical excellence, and innovative aesthetic procedures.',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_19d6a54c5-1764680144812.png",
    alt: 'Gold trophy award for Best Plastic Surgery Clinic with engraved plaque'
  },
  {
    id: '2',
    title: 'Top Surgeon Recognition',
    organization: 'American Society of Plastic Surgeons',
    year: 2023,
    description:
    'Dr. Sarah Mitchell honored for exceptional contributions to the field of aesthetic surgery.',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_10222cf36-1764651001233.png",
    alt: 'Crystal award plaque for Top Surgeon Recognition with ASPS logo'
  },
  {
    id: '3',
    title: 'Patient Safety Excellence',
    organization: 'Joint Commission',
    year: 2022,
    description:
    'Awarded for maintaining the highest standards of patient safety and quality care.',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_1887b0df4-1764652754935.png",
    alt: 'Silver shield award for Patient Safety Excellence with Joint Commission seal'
  },
  {
    id: '4',
    title: 'Innovation in Aesthetic Medicine',
    organization: 'Medical Innovation Summit',
    year: 2022,
    description:
    'Recognized for pioneering advanced techniques in minimally invasive aesthetic procedures.',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_183044c7a-1764678816872.png",
    alt: 'Modern glass award for Innovation in Aesthetic Medicine with geometric design'
  },
  {
    id: '5',
    title: 'Community Healthcare Leader',
    organization: 'Local Chamber of Commerce',
    year: 2021,
    description:
    'Honored for outstanding community service and healthcare accessibility initiatives.',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_1a5e26954-1764649486034.png",
    alt: 'Bronze medallion award for Community Healthcare Leader with ribbon'
  },
  {
    id: '6',
    title: 'Excellence in Patient Experience',
    organization: 'Healthcare Consumer Association',
    year: 2021,
    description:
    'Awarded for exceptional patient satisfaction scores and comprehensive care approach.',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_159f7e8d1-1764655706086.png",
    alt: 'Elegant crystal award for Excellence in Patient Experience with star design'
  }
];


  const mediaFeatures: MediaFeature[] = [
  {
    id: '1',
    title: 'Revolutionizing Aesthetic Surgery',
    publication: 'Medical Today Magazine',
    date: '2023-09-15',
    excerpt:
    'MedBeauty Clinic is setting new standards in patient care and surgical innovation, combining medical excellence with luxury hospitality.',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_11bf97689-1764716547117.png",
    alt: 'Magazine cover featuring MedBeauty Clinic with headline about revolutionizing aesthetic surgery',
    link: '#'
  },
  {
    id: '2',
    title: 'The Future of Plastic Surgery',
    publication: 'Healthcare Innovation Journal',
    date: '2023-06-20',
    excerpt:
    'Dr. Sarah Mitchell discusses emerging technologies and patient-centered approaches that are transforming the aesthetic medicine landscape.',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_12f3c1bee-1764790614892.png",
    alt: 'Journal article featuring Dr. Sarah Mitchell discussing future of plastic surgery',
    link: '#'
  },
  {
    id: '3',
    title: 'Award-Winning Patient Care',
    publication: 'National Health News',
    date: '2023-03-10',
    excerpt:
    'Inside look at how MedBeauty Clinic maintains its reputation for exceptional patient outcomes and satisfaction.',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_1adff19af-1764799323010.png",
    alt: 'News article featuring MedBeauty Clinic patient care facilities and staff',
    link: '#'
  },
  {
    id: '4',
    title: 'Leading the Aesthetic Revolution',
    publication: 'Beauty & Wellness Quarterly',
    date: '2022-11-05',
    excerpt:
    'How MedBeauty Clinic is redefining the aesthetic surgery experience with cutting-edge technology and personalized care.',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_1f4bfff8b-1765003959180.png",
    alt: 'Quarterly magazine spread showcasing MedBeauty Clinic technology and facilities',
    link: '#'
  }];


  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/20 px-4 py-2 rounded-full mb-4">
              <Icon name="Award" size={18} className="text-primary" />
              <span className="font-body text-sm font-medium text-primary">
                Recognition & Media
              </span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Awards & Media Recognition
            </h2>
            <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by leading healthcare organizations and featured in prestigious medical publications.
            </p>
          </div>

          <div className="mb-20">
            <h3 className="font-headline text-2xl font-bold text-text-primary mb-8 flex items-center justify-center gap-3">
              <Icon name="Trophy" size={28} className="text-primary" />
              Awards & Achievements
            </h3>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-rose hidden lg:block" />

              <div className="space-y-12">
                {awards.map((award, index) =>
                <div
                  key={award.id}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`
                  }>

                    <div className="flex-1 lg:text-right">
                      <div
                      className={`bg-surface rounded-xl p-6 shadow-soft hover:shadow-brand transition-confident hover-lift ${
                      index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`
                      }>

                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon
                            name="Award"
                            size={24}
                            className="text-primary" />

                          </div>
                          <div className="flex-1 text-left">
                            <h4 className="font-headline text-xl font-semibold text-text-primary mb-1">
                              {award.title}
                            </h4>
                            <p className="font-body text-sm text-primary font-medium">
                              {award.organization}
                            </p>
                          </div>
                          <span className="font-headline text-2xl font-bold text-primary">
                            {award.year}
                          </span>
                        </div>
                        <p className="font-body text-text-secondary text-left">
                          {award.description}
                        </p>
                      </div>
                    </div>

                    <div className="hidden lg:block w-16 h-16 rounded-full bg-primary shadow-brand flex-shrink-0 relative z-10">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <Icon name="Star" size={24} className="text-primary" />
                      </div>
                    </div>

                    <div className="flex-1" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-headline text-2xl font-bold text-text-primary mb-8 flex items-center justify-center gap-3">
              <Icon name="Newspaper" size={28} className="text-primary" />
              Media Features & Press
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {mediaFeatures.map((feature) =>
              <div
                key={feature.id}
                className="group bg-surface rounded-xl overflow-hidden shadow-soft hover:shadow-brand transition-confident hover-lift cursor-pointer">

                  <div className="relative h-48 overflow-hidden">
                    <Image
                    src={feature.image}
                    alt={feature.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-confident" />

                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon
                        name="Newspaper"
                        size={16}
                        className="text-primary" />

                        <span className="font-body text-xs font-medium text-background/90">
                          {feature.publication}
                        </span>
                      </div>
                      <h4 className="font-headline text-lg font-semibold text-background">
                        {feature.title}
                      </h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-text-secondary text-sm mb-3">
                      <Icon name="Calendar" size={16} />
                      <span className="font-body">
                        {new Date(feature.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                      </span>
                    </div>
                    <p className="font-body text-text-secondary text-sm leading-relaxed mb-4">
                      {feature.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-body text-sm font-medium">
                      <span>Read Article</span>
                      <Icon
                      name="ArrowRight"
                      size={16}
                      className="group-hover:translate-x-1 transition-confident" />

                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-16 bg-gradient-rose rounded-2xl p-8 lg:p-12 text-center shadow-brand">
            <div className="flex items-center justify-center gap-6 mb-6">
              <Icon name="Award" size={40} className="text-background" />
              <Icon name="Trophy" size={40} className="text-background" />
              <Icon name="Star" size={40} className="text-background" />
            </div>
            <h3 className="font-headline text-2xl lg:text-3xl font-bold text-background mb-4">
              Recognized Excellence in Aesthetic Medicine
            </h3>
            <p className="font-body text-lg text-background/90 max-w-2xl mx-auto">
              Our awards and media recognition reflect our unwavering commitment to patient safety, surgical excellence, and innovative aesthetic care.
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default AwardsSection;
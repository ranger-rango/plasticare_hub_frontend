import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CredentialsSection = () => {
  const certifications = [
  {
    name: "American Board of Plastic Surgery",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_14c7832cc-1764743292100.png",
    alt: "American Board of Plastic Surgery certification seal with blue and gold emblem",
    description: "Board-certified by the only plastic surgery board recognized by the American Board of Medical Specialties"
  },
  {
    name: "American Society of Plastic Surgeons",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1114ff196-1764923031976.png",
    alt: "American Society of Plastic Surgeons membership badge with red and white design",
    description: "Active members of the world's largest organization of board-certified plastic surgeons"
  },
  {
    name: "American College of Surgeons",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_17d3167ec-1765003962002.png",
    alt: "American College of Surgeons fellowship emblem with traditional medical caduceus symbol",
    description: "Fellows of the prestigious American College of Surgeons demonstrating surgical excellence"
  },
  {
    name: "International Society of Aesthetic Plastic Surgery",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_16ac90f11-1765003959198.png",
    alt: "International Society of Aesthetic Plastic Surgery global membership badge",
    description: "Members of the leading international organization for aesthetic plastic surgery"
  }];


  const achievements = [
  {
    icon: "Award",
    title: "Top Doctor Recognition",
    description: "Consistently recognized as top doctors in plastic surgery by leading medical publications"
  },
  {
    icon: "BookOpen",
    title: "Published Research",
    description: "Contributed to peer-reviewed journals and medical textbooks advancing the field"
  },
  {
    icon: "Users",
    title: "Teaching Excellence",
    description: "Training the next generation of surgeons at prestigious medical institutions"
  },
  {
    icon: "Globe",
    title: "International Speaking",
    description: "Invited speakers at national and international plastic surgery conferences"
  }];


  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-text-primary mb-4">
          Credentials & Certifications
        </h2>
        <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
          Our surgeons maintain the highest standards of medical excellence through rigorous
          certification and continuous education
        </p>
      </div>

      <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft mb-12">
        <h3 className="font-headline text-2xl font-semibold text-text-primary mb-8 text-center">
          Professional Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) =>
          <div key={index} className="text-center group">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden shadow-soft group-hover:shadow-brand transition-confident">
                <Image
                src={cert.logo}
                alt={cert.alt}
                className="w-full h-full object-cover" />

              </div>
              <h4 className="font-body text-sm font-semibold text-text-primary mb-2">
                {cert.name}
              </h4>
              <p className="font-body text-xs text-text-secondary leading-relaxed">
                {cert.description}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement, index) =>
        <div
          key={index}
          className="bg-card rounded-2xl p-6 shadow-soft hover-lift">

            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
              <Icon name={achievement.icon as any} size={24} className="text-primary" />
            </div>
            <h4 className="font-body text-base font-semibold text-text-primary mb-2">
              {achievement.title}
            </h4>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              {achievement.description}
            </p>
          </div>
        )}
      </div>
    </div>);

};

export default CredentialsSection;
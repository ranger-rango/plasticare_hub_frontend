import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CredentialsSection = () => {
  const certifications = [
  {
    name: "Kenya Medical Practioners and Dentists Council",
    logo: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/kmpdc.png",
    alt: "Kenya Medical Practioners and Dentists Council logo",
    description: "Licensed by Kenya's official medical regulatory council for professional practice and ethical conduct"
  },
  {
    name: "Kenya Society of Plastic, Reconstructive and Aesthetic Surgeons",
    logo: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/kspras.png",
    alt: "Kenya Society of Plastic, Reconstructive and Aesthetic Surgeons logo",
    description: "Active members of the leading national association for certified plastic and aesthetic surgeons"
  },
  {
    name: "Pharmacy and Poisons Board",
    logo: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/ppb.png",
    alt: "Pharmacy and Poisons Board logo",
    description: "Active member of the leading national association for certified plastic and aesthetic surgeons"
  },
  {
    name: "Kenya Health Professions Oversight Authority",
    logo: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/khpoa.jpg",
    alt: "Kenya Health Professions Oversight Authority logo",
    description: "Operating under the oversight of the national authority for healthcare professional standards and patient protection"
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
                className="w-full h-full object-fit" />

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
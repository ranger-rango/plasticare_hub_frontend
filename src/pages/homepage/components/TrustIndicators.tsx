import Icon from '../../../components/AppIcon';
import { Award, Statistic } from '../types';

const TrustIndicators = () => {
  const awards: Award[] = [
    {
      id: "1",
      title: "Best Aesthetic Clinic 2024",
      organization: "American Board of Cosmetic Surgery",
      year: "2024",
      icon: "Award"
    },
    {
      id: "2",
      title: "Excellence in Patient Care",
      organization: "Healthcare Quality Association",
      year: "2023",
      icon: "Heart"
    },
    {
      id: "3",
      title: "Top Plastic Surgery Center",
      organization: "Medical Excellence Awards",
      year: "2024",
      icon: "Star"
    },
    {
      id: "4",
      title: "Innovation in Aesthetics",
      organization: "International Society of Aesthetic Plastic Surgery",
      year: "2023",
      icon: "Sparkles"
    }
  ];

  const statistics: Statistic[] = [
    {
      id: "1",
      value: "15,000+",
      label: "Successful Procedures",
      icon: "CheckCircle"
    },
    {
      id: "2",
      value: "98%",
      label: "Patient Satisfaction",
      icon: "ThumbsUp"
    },
    {
      id: "3",
      value: "25+",
      label: "Years Experience",
      icon: "Calendar"
    },
    {
      id: "4",
      value: "12",
      label: "Board-Certified Surgeons",
      icon: "Users"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Trusted Excellence in Aesthetic Medicine
            </h2>
            <p className="font-body text-base sm:text-lg text-text-secondary max-w-3xl mx-auto">
              Our commitment to medical excellence and patient care has earned us recognition from leading healthcare organizations
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
            {statistics.map((stat) => (
              <div
                key={stat.id}
                className="bg-background rounded-2xl p-6 sm:p-8 text-center shadow-soft hover:shadow-brand transition-confident hover-lift"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4">
                  <Icon name={stat.icon} size={32} color="var(--color-primary)" />
                </div>
                <div className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="font-body text-sm sm:text-base text-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award) => (
              <div
                key={award.id}
                className="bg-background rounded-2xl p-6 border border-border hover:border-primary transition-confident hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={award.icon} size={24} color="var(--color-primary)" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-headline text-base font-semibold text-text-primary mb-1">
                      {award.title}
                    </h3>
                    <p className="font-body text-sm text-text-secondary mb-1">
                      {award.organization}
                    </p>
                    <p className="font-body text-xs text-primary font-medium">
                      {award.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
              <Icon name="Shield" size={20} color="var(--color-primary)" />
              <span className="font-body text-sm font-medium text-primary">
                HIPAA Compliant • Board Certified • Fully Accredited Facility
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
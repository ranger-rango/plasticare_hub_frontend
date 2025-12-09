import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

interface CTAProps 
{
  onOpen: () => void
}

const CTASection = ( { onOpen } : CTAProps ) => {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-rose rounded-3xl p-8 lg:p-16 shadow-brand text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Icon name="Heart" size={48} className="text-background" />
              <Icon name="Sparkles" size={48} className="text-background" />
            </div>

            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-6">
              Begin Your Transformation Journey
            </h2>

            <p className="font-body text-lg lg:text-xl text-background/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the MedBeauty difference where medical excellence meets aesthetic artistry. Schedule your consultation today and discover how we can help you achieve your aesthetic goals with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="bg-background text-primary hover:bg-background/90 shadow-brand"
                onClick={onOpen}
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                className="bg-transparent border-2 border-background text-background hover:bg-background hover:text-primary"
              >
                Call Us Today
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-background/20">
              <div className="text-center">
                <div className="font-headline text-3xl font-bold text-background mb-2">
                  15+
                </div>
                <div className="font-body text-sm text-background/90">
                  Years of Excellence
                </div>
              </div>
              <div className="text-center">
                <div className="font-headline text-3xl font-bold text-background mb-2">
                  50K+
                </div>
                <div className="font-body text-sm text-background/90">
                  Satisfied Patients
                </div>
              </div>
              <div className="text-center">
                <div className="font-headline text-3xl font-bold text-background mb-2">
                  100%
                </div>
                <div className="font-body text-sm text-background/90">
                  Safety Record
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'MapPin',
                title: 'Visit Us',
                description: 'Schedule an in-person tour',
              },
              {
                icon: 'Phone',
                title: 'Call Us',
                description: 'Speak with our team',
              },
              {
                icon: 'Mail',
                title: 'Email Us',
                description: 'Get information via email',
              },
              {
                icon: 'MessageCircle',
                title: 'Live Chat',
                description: 'Chat with a coordinator',
              },
            ]?.map((contact, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 text-center shadow-soft hover:shadow-brand transition-confident hover-lift cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <Icon name={contact?.icon} size={24} className="text-primary" />
                </div>
                <h3 className="font-headline text-lg font-semibold text-text-primary mb-2">
                  {contact?.title}
                </h3>
                <p className="font-body text-sm text-text-secondary">
                  {contact?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

interface heroSectionProps
{
  onOpen : () => void
}

const HeroSection = ( { onOpen } : heroSectionProps ) => {
  return (
    <div className="relative bg-gradient-rose rounded-3xl overflow-hidden mb-12">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNDMDg0OTciIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
      </div>

      <div className="relative px-6 py-16 md:px-12 md:py-20 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-background/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Icon name="Award" size={20} className="text-primary" />
            <span className="font-body text-sm font-medium text-text-primary">
              Board-Certified Excellence
            </span>
          </div>

          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Meet Our Expert Surgeons
          </h1>

          <p className="font-body text-lg md:text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
            Transform with confidence through expert care. Our board-certified surgeons combine
            medical excellence with aesthetic artistry to deliver exceptional results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90 shadow-brand"
              onClick={onOpen}
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Video"
              iconPosition="left"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Watch Surgeon Introductions
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-background/20 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-4 mx-auto">
                <Icon name="GraduationCap" size={24} className="text-primary" />
              </div>
              <h3 className="font-headline text-2xl font-bold text-text-primary mb-2">50+</h3>
              <p className="font-body text-sm text-text-secondary">Years Combined Experience</p>
            </div>

            <div className="bg-background/20 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-4 mx-auto">
                <Icon name="Users" size={24} className="text-primary" />
              </div>
              <h3 className="font-headline text-2xl font-bold text-text-primary mb-2">5,000+</h3>
              <p className="font-body text-sm text-text-secondary">Successful Procedures</p>
            </div>

            <div className="bg-background/20 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-4 mx-auto">
                <Icon name="Star" size={24} className="text-primary" />
              </div>
              <h3 className="font-headline text-2xl font-bold text-text-primary mb-2">4.9/5</h3>
              <p className="font-body text-sm text-text-secondary">Average Patient Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
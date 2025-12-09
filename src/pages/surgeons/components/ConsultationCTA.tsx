import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

interface CTAProps 
{
  onOpen: () => void
}

const ConsultationCTA = ( { onOpen } : CTAProps ) => {
  return (
    <div className="relative bg-gradient-rose rounded-3xl overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNDMDg0OTciIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
      </div>

      <div className="relative px-6 py-12 md:px-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-background/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Icon name="Sparkles" size={20} className="text-primary" />
            <span className="font-body text-sm font-medium text-text-primary">
              Begin Your Transformation
            </span>
          </div>

          <h2 className="font-headline text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Ready to Meet Your Surgeon?
          </h2>

          <p className="font-body text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Schedule a personalized consultation with one of our board-certified surgeons to
            discuss your goals and create a customized treatment plan
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90 shadow-brand"
              onClick={onOpen}
            >
              Book Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Call (555) 123-4567
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-background/20 backdrop-blur-sm rounded-2xl p-4">
              <Icon name="Clock" size={24} className="text-primary mx-auto mb-2" />
              <p className="font-body text-sm text-text-primary font-medium mb-1">
                30-Minute Consultation
              </p>
              <p className="font-body text-xs text-text-secondary">
                Comprehensive evaluation
              </p>
            </div>

            <div className="bg-background/20 backdrop-blur-sm rounded-2xl p-4">
              <Icon name="Video" size={24} className="text-primary mx-auto mb-2" />
              <p className="font-body text-sm text-text-primary font-medium mb-1">
                Virtual or In-Person
              </p>
              <p className="font-body text-xs text-text-secondary">
                Choose your preference
              </p>
            </div>

            <div className="bg-background/20 backdrop-blur-sm rounded-2xl p-4">
              <Icon name="FileText" size={24} className="text-primary mx-auto mb-2" />
              <p className="font-body text-sm text-text-primary font-medium mb-1">
                Personalized Plan
              </p>
              <p className="font-body text-xs text-text-secondary">
                Tailored to your goals
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationCTA;
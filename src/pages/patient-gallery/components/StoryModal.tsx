import { useEffect } from 'react';

import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { PatientStory } from '../types';
import BeforeAfterSlider from './BeforeAfterSlider';

interface StoryModalProps {
  story: PatientStory | null;
  isOpen: boolean;
  onClose: () => void;
}

const StoryModal = ({ story, isOpen, onClose }: StoryModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !story) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-md">
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-card rounded-2xl shadow-brand overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-brand shadow-soft"
          aria-label="Close modal"
        >
          <Icon name="X" size={24} className="text-text-primary" />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="h-96 lg:h-auto">
              <BeforeAfterSlider
                beforeImage={story.beforeImage}
                beforeImageAlt={story.beforeImageAlt}
                afterImage={story.afterImage}
                afterImageAlt={story.afterImageAlt}
                patientName={story.patientName}
                procedure={story.procedure}
              />
            </div>

            <div className="p-8 lg:p-12">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="font-headline text-3xl font-bold text-text-primary mb-2">
                    {story.patientName}
                  </h2>
                  <p className="text-text-secondary">Age {story.age}</p>
                </div>
                <div className="flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full">
                  <Icon name="TrendingUp" size={20} />
                  <span className="font-semibold">{story.confidenceRating}/10</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-medium mb-4">
                  {story.procedure}
                </div>
                <div className="flex items-center space-x-4 text-sm text-text-secondary mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} />
                    <span>{story.timelineMonths} months timeline</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Tag" size={16} />
                    <span>{story.procedureCategory}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 mb-6">
                <div>
                  <h3 className="font-headline text-xl font-semibold text-text-primary mb-3 flex items-center space-x-2">
                    <Icon name="Heart" size={20} className="text-primary" />
                    <span>Emotional Journey</span>
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {story.emotionalJourney}
                  </p>
                </div>

                <div>
                  <h3 className="font-headline text-xl font-semibold text-text-primary mb-3 flex items-center space-x-2">
                    <Icon name="MessageCircle" size={20} className="text-primary" />
                    <span>Patient Story</span>
                  </h3>
                  <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                    {story.story}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-text-primary mb-3">Transformation Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {story.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {story.videoTestimonial && (
                <div className="mb-6">
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Video"
                    iconPosition="left"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Watch Video Testimonial
                  </Button>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  iconName="Share2"
                  iconPosition="left"
                  className="border-border hover:bg-secondary/10"
                >
                  Share Story
                </Button>
                <Button
                  variant="default"
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90"
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;
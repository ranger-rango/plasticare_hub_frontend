import { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { PatientStory } from '../types';
import BeforeAfterSlider from './BeforeAfterSlider';

interface StoryCardProps {
  story: PatientStory;
  onViewDetails: (story: PatientStory) => void;
}

const StoryCard = ({ story, onViewDetails }: StoryCardProps) => {
  const [showSlider, setShowSlider] = useState(false);

  return (
    <div className="bg-card rounded-2xl shadow-soft overflow-hidden hover-lift group">
      <div className="relative h-80 overflow-hidden">
        {showSlider ? (
          <BeforeAfterSlider
            beforeImage={story.beforeImage}
            beforeImageAlt={story.beforeImageAlt}
            afterImage={story.afterImage}
            afterImageAlt={story.afterImageAlt}
            patientName={story.patientName}
            procedure={story.procedure}
          />
        ) : (
          <>
            <Image
              src={story.afterImage}
              alt={story.afterImageAlt}
              className="w-full h-full object-cover group-hover:scale-105 transition-confident"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <button
              onClick={() => setShowSlider(true)}
              className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium text-sm shadow-brand hover:shadow-brand-hover transition-brand flex items-center space-x-2"
            >
              <Icon name="ArrowLeftRight" size={16} />
              <span>Compare</span>
            </button>
          </>
        )}

        {story.featured && (
          <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
            <Icon name="Star" size={14} />
            <span>Featured</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-headline text-xl font-semibold text-text-primary mb-1">
              {story.patientName}
            </h3>
            <p className="text-sm text-text-secondary">Age {story.age}</p>
          </div>
          <div className="flex items-center space-x-1 bg-success/10 text-success px-3 py-1 rounded-full">
            <Icon name="TrendingUp" size={16} />
            <span className="text-sm font-medium">{story.confidenceRating}/10</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
            {story.procedure}
          </div>
          <p className="text-sm text-text-secondary line-clamp-2">
            {story.emotionalJourney}
          </p>
        </div>

        <div className="flex items-center justify-between text-sm text-text-secondary mb-4">
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} />
            <span>{story.timelineMonths} months timeline</span>
          </div>
          {story.videoTestimonial && (
            <div className="flex items-center space-x-1 text-primary">
              <Icon name="Video" size={16} />
              <span>Video available</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {story.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <Button
          variant="outline"
          fullWidth
          iconName="ArrowRight"
          iconPosition="right"
          onClick={() => onViewDetails(story)}
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          View Full Story
        </Button>
      </div>
    </div>
  );
};

export default StoryCard;
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import type { Surgeon } from '../types';

interface SurgeonCardProps {
  surgeon: Surgeon;
}

const SurgeonCard = ({ surgeon }: SurgeonCardProps) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover-lift group">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={surgeon.image}
          alt={surgeon.alt}
          className="w-full h-full object-cover transition-confident group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Award" size={20} className="text-primary" />
            <span className="text-sm font-body text-primary-foreground">
              {surgeon.yearsOfExperience}+ Years Experience
            </span>
          </div>
          <h3 className="font-headline text-2xl font-semibold text-primary-foreground mb-1">
            {surgeon.name}
          </h3>
          <p className="font-body text-sm text-primary-foreground/90">{surgeon.title}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h4 className="font-body text-sm font-semibold text-text-primary mb-2">
            Specializations
          </h4>
          <div className="flex flex-wrap gap-2">
            {surgeon.specialization.slice(0, 3).map((spec, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-secondary/20 text-primary text-xs font-medium rounded-full"
              >
                {spec}
              </span>
            ))}
            {surgeon.specialization.length > 3 && (
              <span className="px-3 py-1 bg-muted text-text-secondary text-xs font-medium rounded-full">
                +{surgeon.specialization.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-body text-sm font-semibold text-text-primary mb-2">
            Featured Procedures
          </h4>
          <ul className="space-y-1">
            {surgeon.featuredProcedures.slice(0, 3).map((procedure, index) => (
              <li key={index} className="flex items-center text-sm text-text-secondary">
                <Icon name="Check" size={16} className="text-primary mr-2 flex-shrink-0" />
                <span className="font-body">{procedure}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon name="Star" size={16} className="text-primary fill-primary" />
              <span className="font-body text-sm font-semibold text-text-primary">5.0</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Users" size={16} className="text-text-secondary" />
              <span className="font-body text-sm text-text-secondary">
                {surgeon.patientTestimonials.length} Reviews
              </span>
            </div>
          </div>
          <Link to={`/surgeons/${surgeon.id}`}>
            <Button variant="ghost" size="sm" iconName="ArrowRight" iconPosition="right">
              View Profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SurgeonCard;
import { Procedure } from '../types';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

interface ProcedureCardProps {
  procedure: Procedure;
  onViewDetails: (id: string) => void;
  onAddToComparison: (id: string) => void;
  isInComparison: boolean;
}

const ProcedureCard = ({
  procedure,
  onViewDetails,
  onAddToComparison,
  isInComparison
}: ProcedureCardProps) => {
  return (
    <div className="group bg-card rounded-2xl border border-border overflow-hidden hover-lift transition-brand">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={procedure.image}
          alt={procedure.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-confident"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-text-primary/60 to-transparent"></div>

        <div className="absolute top-4 left-4 flex items-center space-x-2">
          {procedure.isPopular && (
            <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full font-body text-xs font-semibold">
              Popular
            </span>
          )}
          {procedure.isNew && (
            <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full font-body text-xs font-semibold">
              New
            </span>
          )}
        </div>

        <button
          onClick={() => onAddToComparison(procedure.id)}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-brand ${
            isInComparison
              ? 'bg-primary text-primary-foreground'
              : 'bg-background/80 backdrop-blur-sm text-text-primary hover:bg-primary hover:text-primary-foreground'
          }`}
          aria-label={isInComparison ? 'Remove from comparison' : 'Add to comparison'}
        >
          <Icon name={isInComparison ? 'Check' : 'Plus'} size={20} />
        </button>

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-headline text-xl font-semibold text-white mb-1">
            {procedure.name}
          </h3>
          <p className="font-body text-sm text-white/90 capitalize">
            {procedure.category.replace('-', ' ')}
          </p>
        </div>
      </div>

      <div className="p-6">
        <p className="font-body text-sm text-text-secondary mb-4 line-clamp-2">
          {procedure.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-start space-x-2">
            <Icon name="Clock" size={18} className="text-primary mt-0.5" />
            <div>
              <p className="font-body text-xs text-text-secondary">Recovery</p>
              <p className="font-body text-sm font-medium text-text-primary">
                {procedure.recoveryTime}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Icon name="DollarSign" size={18} className="text-primary mt-0.5" />
            <div>
              <p className="font-body text-xs text-text-secondary">Price Range</p>
              <p className="font-body text-sm font-medium text-text-primary">
                {procedure.priceRange}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Icon name="Timer" size={18} className="text-primary mt-0.5" />
            <div>
              <p className="font-body text-xs text-text-secondary">Duration</p>
              <p className="font-body text-sm font-medium text-text-primary">
                {procedure.duration}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Icon name="Syringe" size={18} className="text-primary mt-0.5" />
            <div>
              <p className="font-body text-xs text-text-secondary">Anesthesia</p>
              <p className="font-body text-sm font-medium text-text-primary">
                {procedure.anesthesia}
              </p>
            </div>
          </div>
        </div>

        <Button
          variant="default"
          size="default"
          fullWidth
          onClick={() => onViewDetails(procedure.id)}
          iconName="ArrowRight"
          iconPosition="right"
          iconSize={18}
          className="bg-primary hover:bg-primary/90"
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default ProcedureCard;
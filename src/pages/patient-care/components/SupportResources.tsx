import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { SupportResource } from '../types';

interface SupportResourcesProps {
  resources: SupportResource[];
}

const SupportResources = ({ resources }: SupportResourcesProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'forum': return 'bg-primary/10 text-primary';
      case 'group': return 'bg-accent/10 text-accent';
      case 'article': return 'bg-secondary/10 text-secondary';
      case 'video': return 'bg-success/10 text-success';
      default: return 'bg-muted text-text-secondary';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {resources.map((resource) => (
        <div
          key={resource.id}
          className="bg-card rounded-xl p-6 border border-border hover:shadow-soft transition-brand group"
        >
          <div className="flex items-start space-x-4 mb-4">
            <div className="p-3 bg-gradient-rose rounded-lg group-hover:scale-105 transition-brand">
              <Icon name={resource.icon} size={24} color="white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-headline text-lg font-semibold text-text-primary">
                  {resource.title}
                </h4>
                <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(resource.type)}`}>
                  {resource.type}
                </span>
              </div>
              <p className="text-text-secondary text-sm mb-3">
                {resource.description}
              </p>
              {resource.participants && (
                <p className="text-xs text-text-secondary flex items-center">
                  <Icon name="Users" size={14} className="mr-1" />
                  {resource.participants} participants
                </p>
              )}
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            fullWidth
            iconName="ArrowRight"
            iconPosition="right"
          >
            Access Resource
          </Button>
        </div>
      ))}
    </div>
  );
};

export default SupportResources;
import { ComparisonProcedure } from '../types';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

interface ComparisonToolProps {
  procedures: ComparisonProcedure[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

const ComparisonTool = ({ procedures, onRemove, onClear }: ComparisonToolProps) => {
  if (procedures.length === 0) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-full max-w-4xl px-4">
      <div className="bg-background rounded-2xl border-2 border-primary shadow-brand-hover p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Icon name="GitCompare" size={24} className="text-primary" />
            <h3 className="font-headline text-xl font-semibold text-text-primary">
              Compare Procedures ({procedures.length}/3)
            </h3>
          </div>
          <button
            onClick={onClear}
            className="text-text-secondary hover:text-primary transition-brand"
            aria-label="Clear comparison"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {procedures.map((procedure) => (
            <div key={procedure.id} className="relative p-4 bg-surface rounded-xl">
              <button
                onClick={() => onRemove(procedure.id)}
                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-background flex items-center justify-center text-text-secondary hover:text-error hover:bg-error/10 transition-brand"
                aria-label="Remove from comparison"
              >
                <Icon name="X" size={14} />
              </button>

              <h4 className="font-body text-sm font-semibold text-text-primary mb-3 pr-6">
                {procedure.name}
              </h4>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-body text-xs text-text-secondary">Category</span>
                  <span className="font-body text-xs font-medium text-text-primary capitalize">
                    {procedure.category}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-body text-xs text-text-secondary">Price</span>
                  <span className="font-body text-xs font-medium text-text-primary">
                    {procedure.priceRange}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-body text-xs text-text-secondary">Recovery</span>
                  <span className="font-body text-xs font-medium text-text-primary">
                    {procedure.recoveryTime}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-body text-xs text-text-secondary">Duration</span>
                  <span className="font-body text-xs font-medium text-text-primary">
                    {procedure.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {procedures.length < 3 && (
            <div className="flex items-center justify-center p-4 bg-surface/50 rounded-xl border-2 border-dashed border-border">
              <div className="text-center">
                <Icon name="Plus" size={32} className="text-text-secondary mx-auto mb-2" />
                <p className="font-body text-xs text-text-secondary">
                  Add up to {3 - procedures.length} more
                </p>
              </div>
            </div>
          )}
        </div>

        {procedures.length >= 2 && (
          <div className="mt-4 pt-4 border-t border-border">
            <Button
              variant="default"
              size="default"
              fullWidth
              iconName="ArrowRight"
              iconPosition="right"
              iconSize={18}
              className="bg-primary hover:bg-primary/90"
            >
              View Detailed Comparison
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComparisonTool;
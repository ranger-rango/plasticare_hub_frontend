import { useState } from 'react';
import { BodyArea, PriceRange, RecoveryTime } from '../types';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

interface AdvancedFiltersProps {
  onFilterChange: (filters: {
    bodyArea: BodyArea | 'all';
    priceRange: PriceRange | 'all';
    recoveryTime: RecoveryTime | 'all';
  }) => void;
}

const AdvancedFilters = ({ onFilterChange }: AdvancedFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [bodyArea, setBodyArea] = useState<BodyArea | 'all'>('all');
  const [priceRange, setPriceRange] = useState<PriceRange | 'all'>('all');
  const [recoveryTime, setRecoveryTime] = useState<RecoveryTime | 'all'>('all');

  const bodyAreaOptions = [
    { value: 'all', label: 'All Body Areas' },
    { value: 'face', label: 'Face' },
    { value: 'nose', label: 'Nose' },
    { value: 'eyes', label: 'Eyes' },
    { value: 'lips', label: 'Lips' },
    { value: 'breast', label: 'Breast' },
    { value: 'abdomen', label: 'Abdomen' },
    { value: 'arms', label: 'Arms' },
    { value: 'legs', label: 'Legs' },
    { value: 'skin', label: 'Skin' },
    { value: 'body', label: 'Full Body' },
    { value: 'multiple', label: 'Multiple Areas' }
  ];

  const priceRangeOptions = [
    { value: 'all', label: 'All Price Ranges' },
    { value: 'budget', label: 'Budget ($1,000 - $3,000)' },
    { value: 'moderate', label: 'Moderate ($3,000 - $7,000)' },
    { value: 'premium', label: 'Premium ($7,000 - $15,000)' },
    { value: 'luxury', label: 'Luxury ($15,000+)' }
  ];

  const recoveryTimeOptions = [
    { value: 'all', label: 'All Recovery Times' },
    { value: 'minimal', label: 'Minimal (0-3 days)' },
    { value: 'short', label: 'Short (3-7 days)' },
    { value: 'moderate', label: 'Moderate (1-2 weeks)' },
    { value: 'extended', label: 'Extended (2+ weeks)' }
  ];

  const handleApplyFilters = () => {
    onFilterChange({ bodyArea, priceRange, recoveryTime });
    setIsExpanded(false);
  };

  const handleResetFilters = () => {
    setBodyArea('all');
    setPriceRange('all');
    setRecoveryTime('all');
    onFilterChange({ bodyArea: 'all', priceRange: 'all', recoveryTime: 'all' });
  };

  return (
    <div className="bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full lg:w-auto px-4 py-3 bg-background rounded-xl border border-border hover:border-primary/30 transition-brand"
        >
          <div className="flex items-center space-x-2">
            <Icon name="SlidersHorizontal" size={20} className="text-primary" />
            <span className="font-body text-sm font-medium text-text-primary">
              Advanced Filters
            </span>
          </div>
          <Icon
            name={isExpanded ? 'ChevronUp' : 'ChevronDown'}
            size={20}
            className="text-text-secondary ml-4"
          />
        </button>

        {isExpanded && (
          <div className="mt-4 p-6 bg-background rounded-2xl border border-border shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Select
                label="Body Area"
                options={bodyAreaOptions}
                value={bodyArea}
                onChange={(value) => setBodyArea(value as BodyArea | 'all')}
                searchable
              />

              <Select
                label="Price Range"
                options={priceRangeOptions}
                value={priceRange}
                onChange={(value) => setPriceRange(value as PriceRange | 'all')}
              />

              <Select
                label="Recovery Time"
                options={recoveryTimeOptions}
                value={recoveryTime}
                onChange={(value) => setRecoveryTime(value as RecoveryTime | 'all')}
              />
            </div>

            <div className="flex items-center justify-end space-x-3 mt-6 pt-6 border-t border-border">
              <Button
                variant="ghost"
                size="default"
                onClick={handleResetFilters}
                iconName="RotateCcw"
                iconPosition="left"
                iconSize={18}
              >
                Reset Filters
              </Button>
              <Button
                variant="default"
                size="default"
                onClick={handleApplyFilters}
                iconName="Check"
                iconPosition="left"
                iconSize={18}
                className="bg-primary hover:bg-primary/90"
              >
                Apply Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedFilters;
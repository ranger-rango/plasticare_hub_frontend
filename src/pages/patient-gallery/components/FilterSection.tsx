import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { GalleryFilters, FilterOptions } from '../types';

interface FilterSectionProps {
  filters: GalleryFilters;
  onFilterChange: (filters: GalleryFilters) => void;
  filterOptions: FilterOptions;
}

const FilterSection = ({ filters, onFilterChange, filterOptions }: FilterSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const procedureOptions = filterOptions.procedureType.map(type => ({
    value: type,
    label: type
  }));

  const ageRangeOptions = filterOptions.ageRange.map(range => ({
    value: range,
    label: range
  }));

  const goalOptions = filterOptions.transformationGoal.map(goal => ({
    value: goal,
    label: goal
  }));

  const handleReset = () => {
    onFilterChange({
      procedureType: '',
      ageRange: '',
      transformationGoal: '',
      searchQuery: ''
    });
  };

  const activeFilterCount = [
    filters.procedureType,
    filters.ageRange,
    filters.transformationGoal,
    filters.searchQuery
  ].filter(Boolean).length;

  return (
    <div className="bg-surface rounded-2xl shadow-soft p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Icon name="Filter" size={24} className="text-primary" />
          <h2 className="font-headline text-2xl font-semibold text-text-primary">
            Filter Transformations
          </h2>
          {activeFilterCount > 0 && (
            <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
              {activeFilterCount} active
            </span>
          )}
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="lg:hidden p-2 rounded-lg hover:bg-secondary/10 transition-brand"
          aria-label="Toggle filters"
        >
          <Icon name={isExpanded ? 'ChevronUp' : 'ChevronDown'} size={20} />
        </button>
      </div>

      <div className={`space-y-4 ${isExpanded ? 'block' : 'hidden lg:block'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Input
            type="search"
            placeholder="Search by procedure or story..."
            value={filters.searchQuery}
            onChange={(e) => onFilterChange({ ...filters, searchQuery: e.target.value })}
            className="w-full"
          />

          <Select
            placeholder="All Procedures"
            options={[{ value: '', label: 'All Procedures' }, ...procedureOptions]}
            value={filters.procedureType}
            onChange={(value) => onFilterChange({ ...filters, procedureType: value as string })}
          />

          <Select
            placeholder="All Ages"
            options={[{ value: '', label: 'All Ages' }, ...ageRangeOptions]}
            value={filters.ageRange}
            onChange={(value) => onFilterChange({ ...filters, ageRange: value as string })}
          />

          <Select
            placeholder="All Goals"
            options={[{ value: '', label: 'All Goals' }, ...goalOptions]}
            value={filters.transformationGoal}
            onChange={(value) => onFilterChange({ ...filters, transformationGoal: value as string })}
          />
        </div>

        {activeFilterCount > 0 && (
          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="sm"
              iconName="X"
              iconPosition="left"
              onClick={handleReset}
              className="text-text-secondary hover:text-text-primary"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSection;
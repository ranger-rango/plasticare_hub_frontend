import { useState } from 'react';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import type { FilterOptions } from '../types';

interface FilterSectionProps {
  onFilterChange: (filters: FilterOptions) => void;
}

const FilterSection = ({ onFilterChange }: FilterSectionProps) => {
  const [filters, setFilters] = useState<FilterOptions>({
    specialization: '',
    experience: '',
    availability: '',
  });

  const specializationOptions = [
    { value: '', label: 'All Specializations' },
    { value: 'facial', label: 'Facial Procedures' },
    { value: 'body', label: 'Body Contouring' },
    { value: 'breast', label: 'Breast Surgery' },
    { value: 'reconstructive', label: 'Reconstructive Surgery' },
    { value: 'non-surgical', label: 'Non-Surgical Treatments' },
  ];

  const experienceOptions = [
    { value: '', label: 'Any Experience' },
    { value: '5-10', label: '5-10 Years' },
    { value: '10-15', label: '10-15 Years' },
    { value: '15-20', label: '15-20 Years' },
    { value: '20+', label: '20+ Years' },
  ];

  const availabilityOptions = [
    { value: '', label: 'All Availability' },
    { value: 'immediate', label: 'Immediate Consultation' },
    { value: 'week', label: 'Within a Week' },
    { value: 'month', label: 'Within a Month' },
  ];

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters: FilterOptions = {
      specialization: '',
      experience: '',
      availability: '',
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-card rounded-2xl p-6 shadow-soft mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-headline text-xl font-semibold text-text-primary">
          Filter Surgeons
        </h3>
        <Button variant="ghost" size="sm" onClick={handleReset} iconName="RotateCcw">
          Reset
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select
          label="Specialization"
          options={specializationOptions}
          value={filters.specialization}
          onChange={(value) => handleFilterChange('specialization', value as string)}
          placeholder="Select specialization"
        />

        <Select
          label="Experience Level"
          options={experienceOptions}
          value={filters.experience}
          onChange={(value) => handleFilterChange('experience', value as string)}
          placeholder="Select experience"
        />

        <Select
          label="Availability"
          options={availabilityOptions}
          value={filters.availability}
          onChange={(value) => handleFilterChange('availability', value as string)}
          placeholder="Select availability"
        />
      </div>

      <div className="mt-4 flex items-center space-x-2 text-sm text-text-secondary">
        <Icon name="Info" size={16} />
        <span className="font-body">
          All our surgeons are board-certified and have extensive experience in their specializations
        </span>
      </div>
    </div>
  );
};

export default FilterSection;
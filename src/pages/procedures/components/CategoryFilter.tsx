import { ProcedureCategory } from '../types';
import Icon from '../../../components/AppIcon';

interface CategoryFilterProps {
  selectedCategory: ProcedureCategory | 'all';
  onCategoryChange: (category: ProcedureCategory | 'all') => void;
}

interface CategoryOption {
  value: ProcedureCategory | 'all';
  label: string;
  icon: string;
  description: string;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  const categories: CategoryOption[] = [
    {
      value: 'all',
      label: 'All Procedures',
      icon: 'LayoutGrid',
      description: 'View complete catalog'
    },
    {
      value: 'facial',
      label: 'Facial',
      icon: 'Smile',
      description: 'Face & neck enhancements'
    },
    {
      value: 'body',
      label: 'Body Contouring',
      icon: 'User',
      description: 'Sculpt & reshape'
    },
    {
      value: 'breast',
      label: 'Breast',
      icon: 'Heart',
      description: 'Augmentation & lift'
    },
    {
      value: 'non-surgical',
      label: 'Non-Surgical',
      icon: 'Zap',
      description: 'Minimal downtime'
    },
    {
      value: 'reconstructive',
      label: 'Reconstructive',
      icon: 'Shield',
      description: 'Medical restoration'
    },
    {
      value: 'skin',
      label: 'Skin Treatments',
      icon: 'Sparkles',
      description: 'Rejuvenation & care'
    }
  ];

  return (
    <section className="bg-background py-8 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-headline text-2xl font-semibold text-text-primary">
            Browse by Category
          </h2>
          <button
            onClick={() => onCategoryChange('all')}
            className="font-body text-sm text-primary hover:text-primary/80 transition-brand flex items-center space-x-1"
          >
            <span>Clear filters</span>
            <Icon name="X" size={16} />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => onCategoryChange(category.value)}
              className={`group relative p-4 rounded-2xl border-2 transition-brand hover-lift ${
                selectedCategory === category.value
                  ? 'border-primary bg-secondary/20 shadow-brand'
                  : 'border-border bg-surface hover:border-primary/30'
              }`}
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-brand ${
                    selectedCategory === category.value
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary/30 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                  }`}
                >
                  <Icon name={category.icon} size={24} />
                </div>
                <div>
                  <h3 className="font-body text-sm font-semibold text-text-primary mb-1">
                    {category.label}
                  </h3>
                  <p className="font-body text-xs text-text-secondary">
                    {category.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
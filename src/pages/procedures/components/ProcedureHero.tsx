import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

interface ProcedureHeroProps {
  onSearch: (query: string) => void;
}

const ProcedureHero = ({ onSearch }: ProcedureHeroProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <section className="relative bg-gradient-rose py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-background/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Icon name="Sparkles" size={20} className="text-primary" />
            <span className="font-body text-sm font-medium text-text-primary">
              Comprehensive Treatment Catalog
            </span>
          </div>

          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Discover Your Perfect
            <span className="text-gradient-rose"> Transformation</span>
          </h1>

          <p className="font-body text-lg sm:text-xl text-text-secondary mb-10 max-w-3xl mx-auto">
            Explore our comprehensive range of aesthetic and reconstructive procedures. From facial enhancements to body contouring, find the treatment that aligns with your vision of confidence and beauty.
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search procedures, symptoms, or body areas..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-12 pr-4 py-4 text-base rounded-2xl shadow-brand"
              />
              <Icon
                name="Search"
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <span className="font-body text-sm text-text-secondary">Popular searches:</span>
              {['Rhinoplasty', 'Breast Augmentation', 'Liposuction', 'Facelift', 'Botox'].map((term) => (
                <button
                  key={term}
                  onClick={() => handleSearch(term)}
                  className="px-4 py-2 bg-background/40 backdrop-blur-sm rounded-full font-body text-sm text-text-primary hover:bg-background/60 transition-brand"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcedureHero;
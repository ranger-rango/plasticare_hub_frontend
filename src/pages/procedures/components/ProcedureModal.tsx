import { useState } from 'react';
import { Procedure } from '../types';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


interface ProcedureModalProps {
  procedure: Procedure;
  onClose: () => void;
  onBookConsultation: (procedureId: string) => void;
}

const ProcedureModal = ({ procedure, onClose, onBookConsultation }: ProcedureModalProps) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'gallery' | 'faqs'>('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'FileText' },
    { id: 'gallery', label: 'Before & After', icon: 'Images' },
    { id: 'faqs', label: 'FAQs', icon: 'HelpCircle' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-text-primary/60 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-background rounded-3xl shadow-brand-hover overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-text-primary hover:bg-primary hover:text-primary-foreground transition-brand"
          aria-label="Close modal"
        >
          <Icon name="X" size={20} />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          <div className="relative h-80 overflow-hidden">
            <Image
              src={procedure.image}
              alt={procedure.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-text-primary/80 to-transparent"></div>

            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center space-x-2 mb-4">
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
                <span className="px-3 py-1 bg-background/20 backdrop-blur-sm text-white rounded-full font-body text-xs font-semibold capitalize">
                  {procedure.category.replace('-', ' ')}
                </span>
              </div>

              <h2 className="font-headline text-4xl font-bold text-white mb-2">
                {procedure.name}
              </h2>
              <p className="font-body text-lg text-white/90">
                {procedure.description}
              </p>
            </div>
          </div>

          <div className="border-b border-border">
            <div className="flex items-center space-x-1 px-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex items-center space-x-2 px-6 py-4 font-body text-sm font-medium transition-brand border-b-2 ${
                    activeTab === tab.id
                      ? 'text-primary border-primary' :'text-text-secondary border-transparent hover:text-primary'
                  }`}
                >
                  <Icon name={tab.icon} size={18} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h3 className="font-headline text-2xl font-semibold text-text-primary mb-4">
                    Procedure Details
                  </h3>
                  <p className="font-body text-base text-text-secondary leading-relaxed">
                    {procedure.detailedDescription}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="p-4 bg-surface rounded-xl">
                    <Icon name="Clock" size={24} className="text-primary mb-2" />
                    <p className="font-body text-xs text-text-secondary mb-1">Recovery Time</p>
                    <p className="font-body text-sm font-semibold text-text-primary">
                      {procedure.recoveryTime}
                    </p>
                  </div>

                  <div className="p-4 bg-surface rounded-xl">
                    <Icon name="DollarSign" size={24} className="text-primary mb-2" />
                    <p className="font-body text-xs text-text-secondary mb-1">Price Range</p>
                    <p className="font-body text-sm font-semibold text-text-primary">
                      {procedure.priceRange}
                    </p>
                  </div>

                  <div className="p-4 bg-surface rounded-xl">
                    <Icon name="Timer" size={24} className="text-primary mb-2" />
                    <p className="font-body text-xs text-text-secondary mb-1">Duration</p>
                    <p className="font-body text-sm font-semibold text-text-primary">
                      {procedure.duration}
                    </p>
                  </div>

                  <div className="p-4 bg-surface rounded-xl">
                    <Icon name="Syringe" size={24} className="text-primary mb-2" />
                    <p className="font-body text-xs text-text-secondary mb-1">Anesthesia</p>
                    <p className="font-body text-sm font-semibold text-text-primary">
                      {procedure.anesthesia}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-headline text-2xl font-semibold text-text-primary mb-4">
                    Key Benefits
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {procedure.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-sm text-text-secondary">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-headline text-2xl font-semibold text-text-primary mb-4">
                    Ideal Candidates
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {procedure.idealCandidates.map((candidate, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Icon name="User" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-sm text-text-secondary">{candidate}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div className="space-y-6">
                <h3 className="font-headline text-2xl font-semibold text-text-primary">
                  Before & After Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {procedure.beforeAfterImages.map((image) => (
                    <div key={image.id} className="bg-surface rounded-2xl overflow-hidden">
                      <div className="grid grid-cols-2 gap-0.5">
                        <div className="relative h-64">
                          <Image
                            src={image.beforeImage}
                            alt={image.beforeAlt}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4 px-3 py-1 bg-text-primary/80 backdrop-blur-sm text-white rounded-full font-body text-xs font-semibold">
                            Before
                          </div>
                        </div>
                        <div className="relative h-64">
                          <Image
                            src={image.afterImage}
                            alt={image.afterAlt}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground rounded-full font-body text-xs font-semibold">
                            After
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="font-body text-sm text-text-secondary">
                          {image.timeframe} • {image.procedureName}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'faqs' && (
              <div className="space-y-6">
                <h3 className="font-headline text-2xl font-semibold text-text-primary">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {procedure.faqs.map((faq) => (
                    <div key={faq.id} className="p-6 bg-surface rounded-2xl">
                      <h4 className="font-body text-base font-semibold text-text-primary mb-3">
                        {faq.question}
                      </h4>
                      <p className="font-body text-sm text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="sticky bottom-0 p-8 bg-background border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
              <div>
                <p className="font-body text-sm text-text-secondary mb-1">
                  Ready to transform?
                </p>
                <p className="font-headline text-xl font-semibold text-text-primary">
                  Book Your Consultation Today
                </p>
              </div>
              <Button
                variant="default"
                size="lg"
                onClick={() => onBookConsultation(procedure.id)}
                iconName="Calendar"
                iconPosition="left"
                iconSize={20}
                className="bg-primary hover:bg-primary/90 shadow-brand"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcedureModal;
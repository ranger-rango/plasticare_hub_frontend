import { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Transformation } from '../types';

const TransformationShowcase = () => {
  const [selectedTransformation, setSelectedTransformation] = useState<string | null>(null);
  const [showBefore, setShowBefore] = useState(true);

  const transformations: Transformation[] = [
  {
    id: "1",
    patientName: "Sarah M.",
    procedure: "Rhinoplasty",
    beforeImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/rhinoplasty-before.jpg",
    beforeAlt: "Woman's face profile showing original nose shape before rhinoplasty surgery",
    afterImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/rhinoplasty-after.jpg",
    afterAlt: "Woman's face profile showing refined, harmonious nose shape after rhinoplasty",
    timeframe: "6 months post-op",
    testimonial: "Dr. Anderson transformed not just my appearance, but my entire confidence. The results exceeded my expectations, and the care I received was exceptional.",
    age: 32
  },
  {
    id: "2",
    patientName: "Jennifer L.",
    procedure: "Breast Augmentation",
    beforeImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/breast-augmentation.jpg",
    beforeAlt: "Woman in swimwear showing natural breast size before augmentation procedure",
    afterImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/breast-augmentation.jpg",
    afterAlt: "Woman in swimwear showing enhanced, natural-looking breast size after augmentation",
    timeframe: "3 months post-op",
    testimonial: "I finally feel like myself. The natural-looking results and minimal scarring are exactly what I hoped for. Thank you, MedBeauty team!",
    age: 28
  },
  {
    id: "3",
    patientName: "Michelle R.",
    procedure: "Tummy Tuck",
    beforeImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/tummy-tuck-before.jpg",
    beforeAlt: "Woman's abdomen showing loose skin and excess tissue before tummy tuck surgery",
    afterImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/tummy-tuck-after.jpg",
    afterAlt: "Woman's abdomen showing flat, toned appearance with smooth contours after tummy tuck",
    timeframe: "8 months post-op",
    testimonial: "After two pregnancies, I never thought I'd feel confident in a bikini again. Dr. Chen's expertise gave me my body back. Forever grateful!",
    age: 35
  },
  {
    id: "4",
    patientName: "Lisa K.",
    procedure: "Facelift",
    beforeImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/facelift-before.jpg",
    beforeAlt: "Mature woman's face showing signs of aging with sagging skin before facelift",
    afterImage: "https://raw.githubusercontent.com/ranger-rango/plasticare-hub-frontend/refs/heads/main/src/assets/images/facelift-after.jpg",
    afterAlt: "Mature woman's face showing lifted, rejuvenated appearance with natural results after facelift",
    timeframe: "1 year post-op",
    testimonial: "The natural-looking results are amazing. People say I look refreshed and rested, not 'done'. Dr. Martinez is a true artist.",
    age: 52
  }];


  const handleTransformationClick = (id: string) => {
    setSelectedTransformation(selectedTransformation === id ? null : id);
    setShowBefore(true);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-rose-overlay">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Real Transformations, Real Confidence
            </h2>
            <p className="font-body text-base sm:text-lg text-text-secondary max-w-3xl mx-auto">
              See the life-changing results our patients have achieved through expert surgical care and personalized treatment plans
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {transformations.map((transformation) =>
            <div
              key={transformation.id}
              className="bg-card rounded-2xl overflow-hidden shadow-brand hover:shadow-brand-hover transition-confident">

                <div className="relative">
                  <div className="relative h-96 overflow-hidden">
                    <Image
                    src={showBefore && selectedTransformation === transformation.id ? transformation.beforeImage : transformation.afterImage}
                    alt={showBefore && selectedTransformation === transformation.id ? transformation.beforeAlt : transformation.afterAlt}
                    className="w-full h-full object-cover" />

                    <div className="absolute top-4 left-4 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                      {transformation.procedure}
                    </div>
                    <div className="absolute top-4 right-4 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full text-sm font-medium text-text-primary">
                      {transformation.timeframe}
                    </div>
                  </div>

                  {selectedTransformation === transformation.id &&
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      <button
                    onClick={() => setShowBefore(true)}
                    className={`px-6 py-2 rounded-full font-medium text-sm transition-brand ${
                    showBefore ?
                    'bg-primary text-primary-foreground' :
                    'bg-background/90 text-text-primary hover:bg-background'}`
                    }>

                        Before
                      </button>
                      <button
                    onClick={() => setShowBefore(false)}
                    className={`px-6 py-2 rounded-full font-medium text-sm transition-brand ${
                    !showBefore ?
                    'bg-primary text-primary-foreground' :
                    'bg-background/90 text-text-primary hover:bg-background'}`
                    }>

                        After
                      </button>
                    </div>
                }
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-headline text-xl font-semibold text-text-primary mb-1">
                        {transformation.patientName}
                      </h3>
                      <p className="font-body text-sm text-text-secondary">
                        Age {transformation.age} • {transformation.procedure}
                      </p>
                    </div>
                    <button
                    onClick={() => handleTransformationClick(transformation.id)}
                    className="p-3 rounded-full bg-secondary/20 hover:bg-primary hover:text-primary-foreground transition-brand"
                    aria-label="Toggle before and after">

                      <Icon name="Eye" size={20} />
                    </button>
                  </div>

                  <div className="bg-surface rounded-xl p-4 mb-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Quote" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-1" />
                      <p className="font-body text-sm text-text-secondary italic">
                        {transformation.testimonial}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) =>
                    <Icon key={star} name="Star" size={16} color="var(--color-primary)" className="fill-current" />
                    )}
                    </div>
                    <span className="font-body text-xs text-text-secondary">
                      Verified Patient
                    </span>
                    <Icon name="CheckCircle" size={16} color="var(--color-success)" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="default"
              size="lg"
              iconName="Image"
              iconPosition="left"
              iconSize={20}
              className="bg-primary hover:bg-primary/90 shadow-brand">

              View Full Gallery
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default TransformationShowcase;
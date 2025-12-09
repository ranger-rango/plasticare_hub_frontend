import { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Procedure } from '../types';

const FeaturedProcedures = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
  { id: 'all', label: 'All Procedures', icon: 'Grid' },
  { id: 'facial', label: 'Facial', icon: 'Smile' },
  { id: 'body', label: 'Body', icon: 'User' },
  { id: 'breast', label: 'Breast', icon: 'Heart' },
  { id: 'non-surgical', label: 'Non-Surgical', icon: 'Sparkles' }];


  const procedures: Procedure[] = [
  {
    id: "1",
    name: "Rhinoplasty",
    category: "facial",
    description: "Reshape and refine your nose for improved facial harmony and breathing function",
    image: "https://images.unsplash.com/photo-1656418159085-68276d2f7a95",
    alt: "Close-up of woman's face showing refined nose profile after rhinoplasty procedure",
    price: "Starting at $8,500",
    duration: "2-3 hours",
    recovery: "1-2 weeks",
    popular: true
  },
  {
    id: "2",
    name: "Breast Augmentation",
    category: "breast",
    description: "Enhance breast size and shape with natural-looking implants or fat transfer",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12683662b-1763294876616.png",
    alt: "Professional woman in elegant dress showing confident posture after breast augmentation",
    price: "Starting at $7,500",
    duration: "1-2 hours",
    recovery: "1 week",
    popular: true
  },
  {
    id: "3",
    name: "Liposuction",
    category: "body",
    description: "Remove stubborn fat deposits and sculpt your body contours for a slimmer silhouette",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18b49529e-1764859408472.png",
    alt: "Fit woman in athletic wear showing toned body contours after liposuction procedure",
    price: "Starting at $4,500",
    duration: "2-4 hours",
    recovery: "1-2 weeks",
    popular: true
  },
  {
    id: "4",
    name: "Facelift",
    category: "facial",
    description: "Turn back the clock with comprehensive facial rejuvenation for a youthful appearance",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_174d50f37-1764644109417.png",
    alt: "Mature woman with smooth, lifted facial features showing natural-looking facelift results",
    price: "Starting at $12,000",
    duration: "3-5 hours",
    recovery: "2-3 weeks",
    popular: false
  },
  {
    id: "5",
    name: "Botox & Fillers",
    category: "non-surgical",
    description: "Non-invasive wrinkle reduction and volume restoration for instant rejuvenation",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a72b9519-1764676128292.png",
    alt: "Woman receiving facial injection treatment showing smooth, wrinkle-free skin",
    price: "Starting at $500",
    duration: "30 minutes",
    recovery: "None",
    popular: true
  },
  {
    id: "6",
    name: "Tummy Tuck",
    category: "body",
    description: "Achieve a flatter, firmer abdomen by removing excess skin and tightening muscles",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12dc6ed53-1764672588961.png",
    alt: "Woman in fitness attire showing flat, toned abdomen after tummy tuck surgery",
    price: "Starting at $9,500",
    duration: "2-4 hours",
    recovery: "2-4 weeks",
    popular: false
  },
  {
    id: "7",
    name: "Eyelid Surgery",
    category: "facial",
    description: "Refresh tired-looking eyes by removing excess skin and fat from upper and lower lids",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dd154b95-1764811120508.png",
    alt: "Close-up of woman's eyes showing bright, refreshed appearance after eyelid surgery",
    price: "Starting at $5,500",
    duration: "1-2 hours",
    recovery: "1-2 weeks",
    popular: false
  },
  {
    id: "8",
    name: "Breast Lift",
    category: "breast",
    description: "Restore youthful breast position and shape by lifting and reshaping sagging tissue",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f7839a05-1764697479177.png",
    alt: "Woman in elegant top showing lifted, youthful breast contours after mastopexy",
    price: "Starting at $8,000",
    duration: "2-3 hours",
    recovery: "1-2 weeks",
    popular: false
  }];


  const filteredProcedures = activeCategory === 'all' ?
  procedures :
  procedures.filter((proc) => proc.category === activeCategory);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background" id='featured-procedures-section'>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Featured Procedures
            </h2>
            <p className="font-body text-base sm:text-lg text-text-secondary max-w-3xl mx-auto">
              Explore our comprehensive range of aesthetic and reconstructive procedures performed by board-certified surgeons
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) =>
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-body text-sm font-medium transition-confident ${
              activeCategory === category.id ?
              'bg-primary text-primary-foreground shadow-brand' :
              'bg-surface text-text-secondary hover:bg-secondary/20 hover:text-primary'}`
              }>

                <Icon name={category.icon} size={18} />
                {category.label}
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredProcedures.map((procedure) =>
            <div
              key={procedure.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-brand transition-confident hover-lift">

                <div className="relative h-64 overflow-hidden">
                  <Image
                  src={procedure.image}
                  alt={procedure.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-confident" />

                  {procedure.popular &&
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                      Popular
                    </div>
                }
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-confident" />
                </div>

                <div className="p-6">
                  <h3 className="font-headline text-xl font-semibold text-text-primary mb-2 group-hover:text-primary transition-brand">
                    {procedure.name}
                  </h3>
                  <p className="font-body text-sm text-text-secondary mb-4 line-clamp-2">
                    {procedure.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-text-secondary">
                      <Icon name="DollarSign" size={14} color="var(--color-primary)" />
                      <span>{procedure.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-text-secondary">
                      <Icon name="Clock" size={14} color="var(--color-primary)" />
                      <span>{procedure.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-text-secondary">
                      <Icon name="Activity" size={14} color="var(--color-primary)" />
                      <span>{procedure.recovery} recovery</span>
                    </div>
                  </div>

                  <Link to="/procedures">
                    <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    iconName="ArrowRight"
                    iconPosition="right"
                    iconSize={16}
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">

                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <Link to="/procedures">
              <Button
                variant="default"
                size="lg"
                iconName="Grid"
                iconPosition="left"
                iconSize={20}
                className="bg-primary hover:bg-primary/90 shadow-brand">

                View All Procedures
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>);

};

export default FeaturedProcedures;
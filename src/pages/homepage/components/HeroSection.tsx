import { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroSlidesId, setHeroSlidesId] = useState("consultation-booking-section")

  const heroSlides = [
    {
      title: "Transform with Confidence",
      subtitle: "Where Medical Excellence Meets Aesthetic Artistry",
      description: "Experience the perfect fusion of clinical precision and luxury wellness at PlastiCare Hub",
      video: "https://assets.mixkit.co/videos/preview/mixkit-medical-clinic-interior-with-modern-equipment-50633-large.mp4",
      cta: "Book Your Consultation",
      id: "consultation-booking-section"
    },
    {
      title: "Your Journey to Confidence",
      subtitle: "Expert Care, Beautiful Results",
      description: "Board-certified surgeons specializing in transformative aesthetic and reconstructive procedures",
      video: "https://assets.mixkit.co/videos/preview/mixkit-woman-getting-a-facial-treatment-at-a-spa-50634-large.mp4",
      cta: "Explore Procedures",
      id: "featured-procedures-section"
    },
    {
      title: "Empowerment Through Excellence",
      subtitle: "Personalized Care, Exceptional Outcomes",
      description: "State-of-the-art facility combining medical expertise with luxury hospitality",
      video: "https://assets.mixkit.co/videos/preview/mixkit-medical-professional-reviewing-patient-records-50635-large.mp4",
      cta: "Meet Our Surgeons",
      id: "surgeon-spotlight-section"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevIndex) => {
        const nextIndex = (prevIndex + 1) % heroSlides.length;
        setHeroSlidesId(heroSlides[nextIndex].id);
        return nextIndex;
      })  
    }, 10000);
    
    return () => clearInterval(timer);
  }, [heroSlides.length, heroSlides, setHeroSlidesId]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setHeroSlidesId(heroSlides[index].id)
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
      
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg"
            >
              <source src={slide.video} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>

      <div className="relative z-20 h-full flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  currentSlide === index
                    ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8 absolute'
                }`}
              >
                <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6">
                  {slide.title}
                </h1>
                <p className="font-accent text-xl sm:text-2xl lg:text-3xl text-secondary mb-4 sm:mb-6">
                  {slide.subtitle}
                </p>
                <p className="font-body text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Calendar"
                    iconPosition="left"
                    iconSize={20}
                    className="bg-primary hover:bg-primary/90 shadow-brand text-base sm:text-lg px-8 py-6"
                  >
                    <a href={`#${heroSlidesId}`}>{ slide.cta }</a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Phone"
                    iconPosition="left"
                    iconSize={20}
                    className="border-white text-white hover:bg-white hover:text-primary text-base sm:text-lg px-8 py-6"
                  >
                    Call (555) 123-4567
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-primary w-12' :'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 animate-bounce"
        aria-label="Scroll down"
      >
        <Icon name="ChevronDown" size={32} color="white" />
      </button>
    </section>
  );
};

export default HeroSection;
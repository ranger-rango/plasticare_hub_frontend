import { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import { Testimonial } from '../types';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
  {
    id: "1",
    patientName: "Amanda Thompson",
    procedure: "Breast Augmentation",
    rating: 5,
    comment: "From my first consultation to my final follow-up, the entire MedBeauty team made me feel comfortable and confident. Dr. Chen's expertise and attention to detail resulted in natural-looking results that exceeded my expectations. I finally feel like the best version of myself!",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ee44b618-1763299396058.png",
    alt: "Amanda Thompson, satisfied patient smiling confidently in casual attire after breast augmentation",
    date: "March 15, 2024",
    verified: true
  },
  {
    id: "2",
    patientName: "Rebecca Martinez",
    procedure: "Rhinoplasty",
    rating: 5,
    comment: "Dr. Anderson is a true artist! She listened to my concerns and created a treatment plan that addressed all my goals. The results are incredible - my nose looks natural and perfectly suits my face. The recovery was easier than I expected, and the staff was amazing throughout the entire process.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_162ab445a-1764906559048.png",
    alt: "Rebecca Martinez, happy patient with refined nose profile in professional setting after rhinoplasty",
    date: "February 28, 2024",
    verified: true
  },
  {
    id: "3",
    patientName: "Jessica Williams",
    procedure: "Mommy Makeover",
    rating: 5,
    comment: "After having three children, I never thought I'd feel confident in my body again. Dr. Martinez and her team gave me back my confidence with a comprehensive mommy makeover. The care, professionalism, and results have been life-changing. I'm so grateful to the entire MedBeauty family!",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12683662b-1763294876616.png",
    alt: "Jessica Williams, confident mother in elegant dress showing transformed figure after mommy makeover",
    date: "January 20, 2024",
    verified: true
  },
  {
    id: "4",
    patientName: "Lauren Davis",
    procedure: "Facelift",
    rating: 5,
    comment: "At 55, I wanted to look refreshed without looking 'done'. Dr. Anderson's natural approach to facial rejuvenation was exactly what I needed. People tell me I look rested and vibrant, not like I've had work done. The entire experience was first-class from start to finish.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f34d8e5b-1763295705732.png",
    alt: "Lauren Davis, mature woman with naturally refreshed appearance in professional attire after facelift",
    date: "December 10, 2023",
    verified: true
  }];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Patient Stories & Testimonials
            </h2>
            <p className="font-body text-base sm:text-lg text-text-secondary max-w-3xl mx-auto">
              Hear directly from our patients about their transformation journeys and experiences at MedBeauty Clinic
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="bg-card rounded-3xl shadow-brand overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-96 lg:h-auto overflow-hidden">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].alt}
                    className="w-full h-full object-cover" />

                  <div className="absolute top-6 left-6 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                    {testimonials[currentIndex].procedure}
                  </div>
                </div>

                <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                  <div className="flex mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, index) =>
                    <Icon key={index} name="Star" size={24} color="var(--color-primary)" className="fill-current" />
                    )}
                  </div>

                  <div className="mb-6">
                    <Icon name="Quote" size={40} color="var(--color-secondary)" />
                  </div>

                  <p className="font-body text-base sm:text-lg text-text-primary mb-6 leading-relaxed">
                    {testimonials[currentIndex].comment}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div>
                      <h4 className="font-headline text-lg font-semibold text-text-primary mb-1">
                        {testimonials[currentIndex].patientName}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className="font-body text-sm text-text-secondary">
                          {testimonials[currentIndex].date}
                        </span>
                        {testimonials[currentIndex].verified &&
                        <>
                            <span className="text-text-secondary">•</span>
                            <div className="flex items-center gap-1">
                              <Icon name="CheckCircle" size={14} color="var(--color-success)" />
                              <span className="font-body text-xs text-success">Verified</span>
                            </div>
                          </>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-background shadow-brand hover:bg-primary hover:text-primary-foreground transition-brand flex items-center justify-center"
              aria-label="Previous testimonial">

              <Icon name="ChevronLeft" size={24} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-background shadow-brand hover:bg-primary hover:text-primary-foreground transition-brand flex items-center justify-center"
              aria-label="Next testimonial">

              <Icon name="ChevronRight" size={24} />
            </button>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) =>
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-primary w-8' : 'bg-muted'}`
                }
                aria-label={`Go to testimonial ${index + 1}`} />

              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            <div className="text-center p-6 bg-background rounded-2xl shadow-soft">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Icon name="Star" size={32} color="var(--color-primary)" />
              </div>
              <div className="font-headline text-3xl font-bold text-primary mb-2">4.9/5</div>
              <p className="font-body text-sm text-text-secondary">Average Rating</p>
            </div>

            <div className="text-center p-6 bg-background rounded-2xl shadow-soft">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Icon name="Users" size={32} color="var(--color-primary)" />
              </div>
              <div className="font-headline text-3xl font-bold text-primary mb-2">2,500+</div>
              <p className="font-body text-sm text-text-secondary">Happy Patients</p>
            </div>

            <div className="text-center p-6 bg-background rounded-2xl shadow-soft">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Icon name="ThumbsUp" size={32} color="var(--color-primary)" />
              </div>
              <div className="font-headline text-3xl font-bold text-primary mb-2">98%</div>
              <p className="font-body text-sm text-text-secondary">Would Recommend</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialSection;
import { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-rose-overlay" />
      <div className="absolute inset-0">
        <Image
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1adff19af-1764799323010.png"
          alt="Modern luxury medical clinic interior with elegant reception area featuring soft pink lighting and contemporary furniture"
          className="w-full h-full object-cover" />

      </div>
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-background/90 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-soft">
            <Icon name="Award" size={20} className="text-primary" />
            <span className="font-body text-sm font-medium text-text-primary">
              Award-Winning Medical Excellence Since 2010
            </span>
          </div>

          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight">
            Where Medical Excellence
            <br />
            <span className="text-gradient-rose">Meets Aesthetic Artistry</span>
          </h1>

          <p className="font-body text-lg sm:text-xl text-background/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the perfect fusion of clinical precision and luxury wellness at our state-of-the-art facility, where your transformation journey begins with trust and confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90 shadow-brand">

              Schedule Facility Tour
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName={isVideoPlaying ? 'Pause' : 'Play'}
              iconPosition="left"
              onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              className="bg-background/90 backdrop-blur-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground">

              Watch Virtual Tour
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
            { value: '15+', label: 'Years Excellence' },
            { value: '50K+', label: 'Happy Patients' },
            { value: '25+', label: 'Expert Surgeons' },
            { value: '100%', label: 'Safety Record' }]?.
            map((stat, index) =>
            <div
              key={index}
              className="bg-background/90 backdrop-blur-sm rounded-xl p-4 shadow-soft">

                <div className="font-headline text-3xl font-bold text-primary mb-1">
                  {stat?.value}
                </div>
                <div className="font-body text-sm text-text-secondary">
                  {stat?.label}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;
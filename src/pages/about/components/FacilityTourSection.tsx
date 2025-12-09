import { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import type { FacilityRoom } from '../types';

const FacilityTourSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRoom, setSelectedRoom] = useState<FacilityRoom | null>(null);

  const categories = [
  { id: 'all', label: 'All Spaces', icon: 'Building2' },
  { id: 'surgical', label: 'Surgical Suites', icon: 'Activity' },
  { id: 'recovery', label: 'Recovery Areas', icon: 'Bed' },
  { id: 'consultation', label: 'Consultation Rooms', icon: 'Users' },
  { id: 'amenity', label: 'Amenities', icon: 'Coffee' }];


  const facilityRooms: FacilityRoom[] = [
  {
    id: '1',
    name: 'State-of-the-Art Operating Theater',
    description:
    'Our flagship surgical suite features the latest medical technology and equipment, designed to the highest standards of safety and sterility. Climate-controlled environment with advanced air filtration systems ensures optimal conditions for every procedure.',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_14d981296-1764840853144.png",
    alt: 'Modern surgical operating room with advanced medical equipment, surgical lights, and sterile environment with stainless steel surfaces',
    features: [
    'HEPA air filtration system',
    'Advanced surgical lighting',
    'Real-time monitoring equipment',
    'Emergency backup systems',
    'Temperature-controlled environment'],

    category: 'surgical'
  },
  {
    id: '2',
    name: 'Luxury Recovery Suites',
    description:
    'Private recovery rooms designed with your comfort in mind. Each suite features adjustable beds, entertainment systems, and serene décor to promote healing and relaxation during your post-procedure recovery.',
    image:
    "https://images.unsplash.com/photo-1710074213379-2a9c2653046a",
    alt: 'Spacious private recovery room with comfortable adjustable bed, soft pink lighting, modern entertainment system, and calming artwork',
    features: [
    'Private en-suite bathrooms',
    'Adjustable comfort beds',
    'Entertainment systems',
    '24/7 nursing care',
    'Family visiting areas'],

    category: 'recovery'
  },
  {
    id: '3',
    name: 'Executive Consultation Rooms',
    description:
    'Elegant, private spaces where you can discuss your aesthetic goals with our expert surgeons. Equipped with advanced imaging technology to visualize potential results and create your personalized treatment plan.',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_13916a4ab-1764654468766.png",
    alt: 'Professional consultation room with comfortable seating, large display screen showing medical imaging, and warm ambient lighting',
    features: [
    '3D imaging technology',
    'Digital treatment planning',
    'Privacy-focused design',
    'Comfortable seating areas',
    'Secure document storage'],

    category: 'consultation'
  },
  {
    id: '4',
    name: 'Wellness & Relaxation Lounge',
    description:
    'A tranquil space designed for pre-procedure relaxation and post-procedure comfort. Enjoy complimentary refreshments, comfortable seating, and a calming atmosphere that sets the tone for your transformation journey.',
    image:
    "https://images.unsplash.com/photo-1657978837873-5a6938c382ec",
    alt: 'Elegant waiting lounge with plush seating, soft pink accent walls, modern coffee station, and natural light from large windows',
    features: [
    'Complimentary refreshments',
    'Comfortable seating',
    'Reading materials',
    'Private changing areas',
    'Secure personal storage'],

    category: 'amenity'
  },
  {
    id: '5',
    name: 'Advanced Imaging Center',
    description:
    'Our dedicated imaging facility houses cutting-edge diagnostic and visualization equipment. From 3D facial scanning to body composition analysis, we use technology to plan and perfect your aesthetic outcomes.',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_1b412dca0-1764776237243.png",
    alt: 'High-tech medical imaging room with 3D scanning equipment, computer workstations, and professional medical staff operating advanced technology',
    features: [
    '3D body scanning',
    'Facial analysis systems',
    'Before/after visualization',
    'Digital treatment planning',
    'Secure image storage'],

    category: 'consultation'
  },
  {
    id: '6',
    name: 'Sterile Preparation Area',
    description:
    'Our pre-operative preparation rooms maintain the highest standards of cleanliness and patient comfort. Each space is designed to ease any pre-procedure anxiety while ensuring complete medical readiness.',
    image:
    "https://images.unsplash.com/photo-1551076805-e1869033e561",
    alt: 'Clean medical preparation room with examination table, medical equipment storage, and bright sterile lighting',
    features: [
    'Medical-grade sterilization',
    'Patient monitoring systems',
    'Comfortable preparation areas',
    'Privacy curtains',
    'Emergency equipment access'],

    category: 'surgical'
  }];


  const filteredRooms =
  selectedCategory === 'all' ?
  facilityRooms :
  facilityRooms.filter((room) => room.category === selectedCategory);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-secondary/20 px-4 py-2 rounded-full mb-4">
              <Icon name="Building2" size={18} className="text-primary" />
              <span className="font-body text-sm font-medium text-primary">
                Virtual Facility Tour
              </span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Explore Our World-Class Facility
            </h2>
            <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
              Take a virtual tour of our state-of-the-art medical facility, where luxury meets clinical excellence. Every space is designed with your comfort, safety, and transformation in mind.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) =>
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-body text-sm font-medium transition-confident ${
              selectedCategory === category.id ?
              'bg-primary text-primary-foreground shadow-brand' :
              'bg-surface text-text-primary hover:bg-secondary/20'}`
              }>

                <Icon name={category.icon} size={18} />
                {category.label}
              </button>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredRooms.map((room) =>
            <div
              key={room.id}
              className="group bg-surface rounded-xl overflow-hidden shadow-soft hover:shadow-brand transition-confident cursor-pointer hover-lift"
              onClick={() => setSelectedRoom(room)}>

                <div className="relative h-64 overflow-hidden">
                  <Image
                  src={room.image}
                  alt={room.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-confident" />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-headline text-xl font-semibold text-background mb-2">
                      {room.name}
                    </h3>
                    <div className="flex items-center gap-2 text-background/90">
                      <Icon name="MapPin" size={16} />
                      <span className="font-body text-sm capitalize">
                        {room.category} Area
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-body text-text-secondary text-sm line-clamp-3 mb-4">
                    {room.description}
                  </p>
                  <Button
                  variant="outline"
                  size="sm"
                  iconName="Eye"
                  iconPosition="left"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">

                    View Details
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="bg-gradient-rose rounded-2xl p-8 lg:p-12 text-center shadow-brand">
            <Icon
              name="Video"
              size={48}
              className="text-background mx-auto mb-6" />

            <h3 className="font-headline text-2xl lg:text-3xl font-bold text-background mb-4">
              Experience Our Facility in 360°
            </h3>
            <p className="font-body text-lg text-background/90 mb-6 max-w-2xl mx-auto">
              Schedule a personalized virtual tour with one of our patient coordinators, or visit us in person to experience the MedBeauty difference firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="bg-background text-primary hover:bg-background/90">

                Schedule Virtual Tour
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MapPin"
                iconPosition="left"
                className="bg-transparent border-2 border-background text-background hover:bg-background hover:text-primary">

                Visit In Person
              </Button>
            </div>
          </div>
        </div>
      </div>

      {selectedRoom &&
      <div
        className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedRoom(null)}>

          <div
          className="bg-surface rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-brand"
          onClick={(e) => e.stopPropagation()}>

            <div className="relative h-96">
              <Image
              src={selectedRoom.image}
              alt={selectedRoom.alt}
              className="w-full h-full object-cover" />

              <button
              onClick={() => setSelectedRoom(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-background rounded-full flex items-center justify-center shadow-soft hover:bg-surface transition-brand">

                <Icon name="X" size={20} className="text-text-primary" />
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Icon name="MapPin" size={20} />
                <span className="font-body text-sm font-medium capitalize">
                  {selectedRoom.category} Area
                </span>
              </div>
              <h3 className="font-headline text-3xl font-bold text-text-primary mb-4">
                {selectedRoom.name}
              </h3>
              <p className="font-body text-text-secondary leading-relaxed mb-6">
                {selectedRoom.description}
              </p>
              <div className="border-t border-border pt-6">
                <h4 className="font-headline text-xl font-semibold text-text-primary mb-4">
                  Key Features
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedRoom.features.map((feature, index) =>
                <div key={index} className="flex items-start gap-3">
                      <Icon
                    name="CheckCircle2"
                    size={20}
                    className="text-primary flex-shrink-0 mt-0.5" />

                      <span className="font-body text-text-secondary">
                        {feature}
                      </span>
                    </div>
                )}
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </section>);

};

export default FacilityTourSection;
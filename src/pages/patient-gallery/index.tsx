import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import FilterSection from './components/FilterSection';
import StoryCard from './components/StoryCard';
import StoryModal from './components/StoryModal';
import StatsSection from './components/StatsSection';
import { PatientStory, GalleryFilters, FilterOptions } from './types';

const PatientGallery = () => {
  const [filters, setFilters] = useState<GalleryFilters>({
    procedureType: '',
    ageRange: '',
    transformationGoal: '',
    searchQuery: ''
  });

  const [selectedStory, setSelectedStory] = useState<PatientStory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const patientStories: PatientStory[] = [
  {
    id: '1',
    patientName: 'Sarah Mitchell',
    age: 42,
    procedure: 'Facelift & Neck Lift',
    procedureCategory: 'Facial Rejuvenation',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1f040dd03-1763297314540.png",
    beforeImageAlt: 'Professional woman in her early 40s with visible aging signs including neck laxity and facial wrinkles, wearing neutral business attire',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_10df5a971-1765003957966.png",
    afterImageAlt: 'Same professional woman after facelift showing rejuvenated appearance with lifted facial contours, reduced wrinkles, and tightened neck area, radiating confidence',
    timelineMonths: 6,
    story: `After years of feeling self-conscious about my aging appearance, I decided to take the leap. The consultation process was thorough and compassionate.\n\nThe surgery went smoothly, and the recovery was manageable with the excellent aftercare support. Six months later, I look in the mirror and see the vibrant, confident woman I feel inside.\n\nThis transformation has given me a new lease on life, both personally and professionally.`,
    emotionalJourney: 'From feeling invisible to radiating confidence - this transformation restored not just my appearance but my sense of self-worth.',
    confidenceRating: 9,
    videoTestimonial: 'https://example.com/testimonial1.mp4',
    tags: ['Anti-aging', 'Facial Rejuvenation', 'Confidence Boost', 'Professional Enhancement'],
    featured: true
  },
  {
    id: '2',
    patientName: 'Jennifer Rodriguez',
    age: 35,
    procedure: 'Breast Augmentation',
    procedureCategory: 'Body Contouring',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_11ea3560f-1764862078387.png",
    beforeImageAlt: 'Young woman in her mid-30s in casual athletic wear showing natural body proportions before breast augmentation procedure',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1ca5a977a-1764862077185.png",
    afterImageAlt: 'Same woman after breast augmentation showing enhanced proportions and improved body confidence, wearing fitted clothing that highlights natural-looking results',
    timelineMonths: 4,
    story: `After having children, I wanted to restore my pre-pregnancy figure. The team helped me choose the perfect size that looked natural with my frame.\n\nThe recovery was easier than expected, and the results exceeded my expectations. I feel like myself again, but with renewed confidence.\n\nMy husband says I'm glowing, but I know it's because I finally feel comfortable in my own skin again.`,
    emotionalJourney: 'Reclaiming my body after motherhood - this journey helped me feel beautiful and confident as both a mother and a woman.',
    confidenceRating: 10,
    tags: ['Post-Pregnancy', 'Body Confidence', 'Natural Results', 'Mommy Makeover'],
    featured: true
  },
  {
    id: '3',
    patientName: 'Michael Chen',
    age: 38,
    procedure: 'Rhinoplasty',
    procedureCategory: 'Facial Enhancement',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1a467e579-1763293950398.png",
    beforeImageAlt: 'Professional Asian man in his late 30s with prominent nasal bridge and asymmetrical nose structure, wearing business casual attire',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_174857320-1764654468594.png",
    afterImageAlt: 'Same man after rhinoplasty showing refined nasal contours, improved facial harmony, and enhanced profile with natural-looking results',
    timelineMonths: 5,
    story: `I had always been self-conscious about my nose, which affected my confidence in both personal and professional settings.\n\nThe surgeon understood my concerns and created a plan that maintained my ethnic features while addressing my aesthetic goals.\n\nThe transformation has been life-changing. I no longer avoid photos or feel anxious in meetings. This was truly an investment in myself.`,
    emotionalJourney: 'Breaking free from years of insecurity - this procedure gave me the confidence to pursue opportunities I previously avoided.',
    confidenceRating: 9,
    videoTestimonial: 'https://example.com/testimonial3.mp4',
    tags: ['Facial Harmony', 'Ethnic Rhinoplasty', 'Career Enhancement', 'Self-Confidence'],
    featured: false
  },
  {
    id: '4',
    patientName: 'Amanda Thompson',
    age: 29,
    procedure: 'Liposuction & Tummy Tuck',
    procedureCategory: 'Body Contouring',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_12dc6ed53-1764672588961.png",
    beforeImageAlt: 'Young woman in her late 20s showing abdominal area with excess skin and stubborn fat deposits, wearing workout attire',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_136c6c803-1764852574014.png",
    afterImageAlt: 'Same woman after liposuction and tummy tuck showing toned, contoured abdomen with defined waistline and smooth skin, displaying athletic physique',
    timelineMonths: 8,
    story: `Despite diet and exercise, I couldn't achieve the body contours I wanted. The combination procedure was exactly what I needed.\n\nThe recovery required dedication, but the support team guided me every step of the way. Eight months later, I have the body I've always worked towards.\n\nI feel empowered and motivated to maintain my results through healthy living. This was the catalyst for positive change in my life.`,
    emotionalJourney: 'From frustration to fulfillment - achieving the body I worked so hard for has transformed my relationship with fitness and self-care.',
    confidenceRating: 10,
    tags: ['Body Sculpting', 'Fitness Goals', 'Lifestyle Change', 'Empowerment'],
    featured: true
  },
  {
    id: '5',
    patientName: 'Robert Williams',
    age: 51,
    procedure: 'Male Facelift & Eyelid Surgery',
    procedureCategory: 'Male Aesthetics',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1ac14fd35-1763294865853.png",
    beforeImageAlt: 'Distinguished businessman in his early 50s with visible aging signs including sagging eyelids, jowls, and deep facial lines, wearing professional suit',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_18ed26be6-1765003960128.png",
    afterImageAlt: 'Same businessman after male facelift and eyelid surgery showing refreshed appearance with lifted facial contours, alert eyes, and maintained masculine features',
    timelineMonths: 7,
    story: `As a business executive, I wanted to look as energetic as I feel. The aging process was making me appear tired and older than my years.\n\nThe surgical team specialized in male aesthetics and understood the importance of maintaining masculine features while achieving rejuvenation.\n\nThe results are natural and professional. Colleagues comment on how well-rested I look, never suspecting I had surgery. It's given me a competitive edge.`,
    emotionalJourney: 'Aligning my appearance with my energy - this transformation has enhanced my professional presence and personal confidence.',
    confidenceRating: 9,
    videoTestimonial: 'https://example.com/testimonial5.mp4',
    tags: ['Male Rejuvenation', 'Executive Enhancement', 'Natural Results', 'Professional Image'],
    featured: false
  },
  {
    id: '6',
    patientName: 'Lisa Anderson',
    age: 44,
    procedure: 'Breast Lift & Augmentation',
    procedureCategory: 'Breast Enhancement',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1d82b32cb-1765003959167.png",
    beforeImageAlt: 'Woman in her mid-40s showing natural breast ptosis and volume loss after aging and weight fluctuations, wearing casual clothing',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_10c2781d5-1765003957957.png",
    afterImageAlt: 'Same woman after breast lift and augmentation showing restored breast volume, lifted position, and youthful contours with natural appearance',
    timelineMonths: 6,
    story: `After weight loss and aging, I wanted to restore my breast shape and volume. The combination procedure was perfect for my goals.\n\nThe surgeon took time to understand my desired outcome and explained every detail of the process. The results look completely natural.\n\nI feel feminine and confident again. This procedure has positively impacted every aspect of my life, from my wardrobe choices to my intimate relationships.`,
    emotionalJourney: 'Rediscovering femininity - this transformation helped me embrace my body and feel beautiful at any age.',
    confidenceRating: 10,
    tags: ['Breast Rejuvenation', 'Feminine Confidence', 'Age-Defying', 'Body Positivity'],
    featured: true
  },
  {
    id: '7',
    patientName: 'David Martinez',
    age: 33,
    procedure: 'Gynecomastia Surgery',
    procedureCategory: 'Male Body Contouring',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_14ef49b09-1763295191621.png",
    beforeImageAlt: 'Young man in his early 30s showing enlarged male breast tissue (gynecomastia) affecting chest contours, wearing casual shirt',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1a022a191-1764739955548.png",
    afterImageAlt: 'Same man after gynecomastia surgery showing masculine chest contours with defined pectoral muscles and flat chest profile, displaying athletic build',
    timelineMonths: 4,
    story: `Gynecomastia had affected my confidence since my teenage years. I avoided swimming, tight shirts, and intimate situations.\n\nThe surgery was straightforward, and recovery was manageable. Four months later, I have the masculine chest I've always wanted.\n\nI can finally wear fitted clothes, go to the beach, and feel confident in my own skin. This procedure has been truly life-changing.`,
    emotionalJourney: 'Breaking free from embarrassment - this surgery gave me the confidence to live life without hiding or feeling self-conscious.',
    confidenceRating: 10,
    videoTestimonial: 'https://example.com/testimonial7.mp4',
    tags: ['Male Confidence', 'Body Freedom', 'Life-Changing', 'Masculine Contours'],
    featured: false
  },
  {
    id: '8',
    patientName: 'Emily Foster',
    age: 37,
    procedure: 'Mommy Makeover',
    procedureCategory: 'Comprehensive Body Restoration',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_196c0d4b1-1764862080284.png",
    beforeImageAlt: 'Mother in her late 30s showing post-pregnancy body changes including abdominal laxity, breast volume loss, and stretched skin, wearing comfortable clothing',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1ca5a977a-1764862077185.png",
    afterImageAlt: 'Same mother after mommy makeover showing restored pre-pregnancy body contours, lifted breasts, toned abdomen, and renewed confidence, wearing fitted dress',
    timelineMonths: 9,
    story: `After three children, my body had changed dramatically. I wanted to feel like myself again while honoring my journey as a mother.\n\nThe comprehensive approach addressed all my concerns - breast lift, tummy tuck, and liposuction. The recovery was challenging but worth every moment.\n\nNine months later, I have my body back. I feel beautiful, confident, and proud of both my transformation and my role as a mother.`,
    emotionalJourney: 'Celebrating motherhood while reclaiming my body - this journey helped me feel whole as both a mother and a woman.',
    confidenceRating: 10,
    tags: ['Mommy Makeover', 'Post-Pregnancy', 'Complete Transformation', 'Self-Love'],
    featured: true
  }];


  const filterOptions: FilterOptions = {
    procedureType: Array.from(new Set(patientStories.map((s) => s.procedure))),
    ageRange: ['25-35', '36-45', '46-55', '56+'],
    transformationGoal: Array.from(new Set(patientStories.flatMap((s) => s.tags)))
  };

  const filteredStories = useMemo(() => {
    return patientStories.filter((story) => {
      const matchesProcedure = !filters.procedureType || story.procedure === filters.procedureType;

      const matchesAge = !filters.ageRange || (() => {
        const [min, max] = filters.ageRange.split('-').map((n) => n === '+' ? 100 : parseInt(n));
        return story.age >= min && story.age <= (max || 100);
      })();

      const matchesGoal = !filters.transformationGoal || story.tags.includes(filters.transformationGoal);

      const matchesSearch = !filters.searchQuery ||
      story.procedure.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      story.story.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      story.emotionalJourney.toLowerCase().includes(filters.searchQuery.toLowerCase());

      return matchesProcedure && matchesAge && matchesGoal && matchesSearch;
    });
  }, [filters, patientStories]);

  const featuredStories = patientStories.filter((s) => s.featured);
  const averageConfidence = Math.round(
    patientStories.reduce((sum, s) => sum + s.confidenceRating, 0) / patientStories.length
  );

  const handleViewDetails = (story: PatientStory) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Patient Gallery - Real Transformation Stories | MedBeauty Clinic</title>
        <meta
          name="description"
          content="Explore authentic before and after transformations from our patients. Real stories, real results, real confidence. See how MedBeauty Clinic has helped patients achieve their aesthetic goals." />

      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 gradient-rose-overlay" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Icon name="Sparkles" size={20} />
                <span className="font-medium">Real Transformations, Real Stories</span>
              </div>
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                Patient Transformation Gallery
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                Discover authentic stories of confidence, empowerment, and transformation. Each journey represents a unique path to self-discovery and renewed confidence.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90 shadow-brand">

                  Start Your Journey
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Video"
                  iconPosition="left"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">

                  Watch Video Stories
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <StatsSection
                totalTransformations={patientStories.length}
                averageConfidence={averageConfidence}
                procedureCount={filterOptions.procedureType.length} />

            </div>
          </section>

          {featuredStories.length > 0 &&
          <section className="py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="font-headline text-3xl font-bold text-text-primary mb-2">
                      Featured Transformations
                    </h2>
                    <p className="text-text-secondary">
                      Inspiring stories of confidence and empowerment
                    </p>
                  </div>
                  <Icon name="Star" size={32} className="text-accent" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredStories.map((story) =>
                <StoryCard
                  key={story.id}
                  story={story}
                  onViewDetails={handleViewDetails} />

                )}
                </div>
              </div>
            </section>
          }

          <section className="py-16 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="font-headline text-3xl font-bold text-text-primary mb-2">
                    All Transformations
                  </h2>
                  <p className="text-text-secondary">
                    {filteredStories.length} {filteredStories.length === 1 ? 'story' : 'stories'} found
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-brand ${
                    viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-background text-text-secondary hover:bg-secondary/10'}`
                    }
                    aria-label="Grid view">

                    <Icon name="Grid3x3" size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-brand ${
                    viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'bg-background text-text-secondary hover:bg-secondary/10'}`
                    }
                    aria-label="List view">

                    <Icon name="List" size={20} />
                  </button>
                </div>
              </div>

              <FilterSection
                filters={filters}
                onFilterChange={setFilters}
                filterOptions={filterOptions} />


              {filteredStories.length > 0 ?
              <div className={`grid gap-8 ${
              viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`
              }>
                  {filteredStories.map((story) =>
                <StoryCard
                  key={story.id}
                  story={story}
                  onViewDetails={handleViewDetails} />

                )}
                </div> :

              <div className="text-center py-16">
                  <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-headline text-2xl font-semibold text-text-primary mb-2">
                    No stories found
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Try adjusting your filters to see more transformation stories
                  </p>
                  <Button
                  variant="outline"
                  iconName="RotateCcw"
                  iconPosition="left"
                  onClick={() => setFilters({
                    procedureType: '',
                    ageRange: '',
                    transformationGoal: '',
                    searchQuery: ''
                  })}>

                    Reset Filters
                  </Button>
                </div>
              }
            </div>
          </section>

          <section className="py-20 bg-gradient-rose">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <Icon name="Heart" size={48} className="text-primary mx-auto mb-6" />
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Ready to Write Your Own Success Story?
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Join hundreds of satisfied patients who have transformed their lives with confidence. Your journey to empowerment starts with a simple consultation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90 shadow-brand">

                  Book Free Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-background">

                  Call Us Today
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-card rounded-2xl shadow-soft p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="font-headline text-3xl font-bold text-text-primary mb-4">
                      Privacy & Consent
                    </h2>
                    <p className="text-text-secondary mb-6">
                      All patient stories and images are shared with explicit written consent. We respect patient privacy and only showcase transformations with full authorization. Names may be changed to protect patient confidentiality while sharing authentic transformation journeys.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Icon name="Shield" size={20} className="text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold text-text-primary mb-1">
                            HIPAA Compliant
                          </h3>
                          <p className="text-sm text-text-secondary">
                            All patient information is protected under strict medical privacy laws
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="FileCheck" size={20} className="text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold text-text-primary mb-1">
                            Written Consent
                          </h3>
                          <p className="text-sm text-text-secondary">
                            Every story is shared with explicit patient authorization
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="Lock" size={20} className="text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold text-text-primary mb-1">
                            Secure Platform
                          </h3>
                          <p className="text-sm text-text-secondary">
                            Your information is protected with medical-grade security
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-rose rounded-xl p-8 text-center">
                    <Icon name="Users" size={64} className="text-primary mx-auto mb-4" />
                    <h3 className="font-headline text-2xl font-bold text-text-primary mb-4">
                      Share Your Story
                    </h3>
                    <p className="text-text-secondary mb-6">
                      Inspire others by sharing your transformation journey. Help future patients envision their own possibilities.
                    </p>
                    <Button
                      variant="default"
                      fullWidth
                      iconName="Send"
                      iconPosition="left"
                      className="bg-primary hover:bg-primary/90">

                      Submit Your Story
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-text-primary text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm opacity-80">
              &copy; {new Date().getFullYear()} MedBeauty Clinic. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </footer>
      </div>

      <StoryModal
        story={selectedStory}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedStory(null);
        }} />

    </>);

};

export default PatientGallery;
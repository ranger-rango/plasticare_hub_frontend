import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PhilosophySection = () => {
  const philosophyPillars = [
  {
    icon: 'Heart',
    title: 'Patient-Centered Care',
    description:
    'Every decision we make prioritizes your safety, comfort, and satisfaction. Your transformation journey is uniquely yours, and we honor that individuality.'
  },
  {
    icon: 'Award',
    title: 'Clinical Excellence',
    description:
    'Our board-certified surgeons combine decades of experience with cutting-edge techniques, ensuring the highest standards of medical care.'
  },
  {
    icon: 'Sparkles',
    title: 'Aesthetic Artistry',
    description:
    'We view each procedure as an art form, balancing medical precision with aesthetic vision to create natural, beautiful results.'
  },
  {
    icon: 'Shield',
    title: 'Safety First',
    description:
    'State-of-the-art facilities, rigorous protocols, and comprehensive aftercare ensure your wellbeing throughout your journey.'
  }];


  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/20 px-4 py-2 rounded-full mb-4">
              <Icon name="Sparkles" size={18} className="text-primary" />
              <span className="font-body text-sm font-medium text-primary">
                Our Philosophy
              </span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              The PlastiCare Hub Difference
            </h2>
            <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
              We believe that aesthetic enhancement is not about vanity—it's about self-investment and personal empowerment. Our approach combines medical authority with luxury hospitality, creating an environment where you feel both safe and pampered.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                {philosophyPillars?.map((pillar, index) =>
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-background rounded-xl shadow-soft hover:shadow-brand transition-confident hover-lift">

                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                        <Icon
                        name={pillar?.icon}
                        size={24}
                        className="text-primary" />

                      </div>
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-semibold text-text-primary mb-2">
                        {pillar?.title}
                      </h3>
                      <p className="font-body text-text-secondary leading-relaxed">
                        {pillar?.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-brand">
                <Image
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_157ab3c9e-1764651562342.png"
                  alt="Experienced female surgeon in surgical scrubs consulting with patient in modern medical consultation room with natural lighting"
                  className="w-full h-[600px] object-cover" />

                <div className="absolute inset-0 gradient-rose-overlay" />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/95 to-transparent">
                  <blockquote className="font-accent text-xl text-text-primary italic mb-4">
                    "We don't just transform appearances—we transform lives. Every procedure is a partnership between medical expertise and your personal vision."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <Image
                      src="https://img.rocket.new/generatedImages/rocket_gen_img_155748a5d-1763296653785.png"
                      alt="Dr. Sarah Mitchell, Chief Medical Officer, professional headshot in white medical coat"
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary" />

                    <div>
                      <div className="font-body font-semibold text-text-primary">
                        Dr. Sarah Mitchell
                      </div>
                      <div className="font-body text-sm text-text-secondary">
                        Chief Medical Officer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-rose rounded-2xl p-8 lg:p-12 text-center shadow-brand">
            <h3 className="font-headline text-2xl lg:text-3xl font-bold text-background mb-4">
              Experience the Perfect Fusion of Medical Precision & Luxury Wellness
            </h3>
            <p className="font-body text-lg text-background/90 max-w-2xl mx-auto">
              Our sophisticated yet approachable environment creates the unique space where clinical excellence meets aesthetic artistry, ensuring you feel confident and cared for throughout your transformation journey.
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default PhilosophySection;
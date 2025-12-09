import { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import FacilityTourSection from './components/FacilityTourSection';
import TechnologySection from './components/TechnologySection';
import TeamSection from './components/TeamSection';
import CertificationsSection from './components/CertificationsSection';
import AwardsSection from './components/AwardsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <PhilosophySection />
        <FacilityTourSection />
        <TechnologySection />
        <TeamSection />
        <CertificationsSection />
        <AwardsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
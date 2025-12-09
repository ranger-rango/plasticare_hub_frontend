import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TrustIndicators from './components/TrustIndicators';
import FeaturedProcedures from './components/FeaturedProcedures';
import TransformationShowcase from './components/TransformationShowcase';
import SurgeonSpotlight from './components/SurgeonSpotlight';
import TestimonialSection from './components/TestimonialSection';
import ConsultationCTA from './components/ConsultationCTA';
import Footer from './components/Footer';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>PlastiCare Hub - Transform with Confidence | Expert Aesthetic Surgery</title>
        <meta
          name="description"
          content="Experience the perfect fusion of medical excellence and aesthetic artistry at MedBeauty Clinic. Board-certified surgeons specializing in transformative procedures. Book your consultation today."
        />
        <meta
          name="keywords"
          content="plastic surgery, aesthetic surgery, cosmetic procedures, rhinoplasty, breast augmentation, liposuction, facelift, board-certified surgeons"
        />
        <meta property="og:title" content="PlastiCare Hub - Transform with Confidence" />
        <meta
          property="og:description"
          content="Where medical excellence meets aesthetic artistry. Expert care, beautiful results."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://plasticarehub.com/homepage" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          <HeroSection />
          <TrustIndicators />
          <FeaturedProcedures />
          <TransformationShowcase />
          <SurgeonSpotlight />
          <TestimonialSection />
          <ConsultationCTA />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Homepage;
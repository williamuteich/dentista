import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ResultsSection from '../components/ResultsSection';
import DifferentialsSection from '../components/DifferentialsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import PaymentSection from '../components/PaymentSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollAnimations from '../components/ScrollAnimations';
import CookieConsent from '../components/CookieConsent';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollAnimations />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ResultsSection />
        <DifferentialsSection />
        <TestimonialsSection />
        <FAQSection />
        <PaymentSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
};

export default Index;

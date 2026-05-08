import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import AboutPreview from '../components/home/AboutPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import StatsSection from '../components/home/StatsSection';
import PricingSection from '../components/home/PricingSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import GallerySection from '../components/home/GallerySection';
import FAQSection from '../components/home/FAQSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutPreview />
      <WhyChooseUs />
      <StatsSection />
      <PricingSection />
      <TestimonialsSection />
      <GallerySection limit={8} />
      <FAQSection limit={6} />
      <CTASection />
    </>
  );
}

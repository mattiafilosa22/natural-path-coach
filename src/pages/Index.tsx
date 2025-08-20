import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import NaturalHistorySection from "@/components/NaturalHistorySection";
import ContactSection from "@/components/ContactSection";
import GalleryBeforeAfter from "@/components/GalleryBeforeAfter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <NaturalHistorySection />
      <GalleryBeforeAfter />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

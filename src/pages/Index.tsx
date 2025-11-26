import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import NaturalHistorySection from "@/components/NaturalHistorySection";
import ContactSection from "@/components/ContactSection";
import GalleryBeforeAfter from "@/components/GalleryBeforeAfter";
import Footer from "@/components/Footer";
import SEOMeta from "@/components/SEOMeta";
import { SITE_CONFIG, generateBusinessSchema, getImageUrl } from "@/config/site";
import ServicesIntroSection from "@/components/ServicesIntroSection";
import Recomp365Section from "@/components/Recomp365Section";
import VideoSection from "@/components/VideoSection";

const Index = () => {
  // Usa la configurazione centralizzata per i dati strutturati
  const homeStructuredData = generateBusinessSchema();

  return (
    <div className="min-h-screen">
      <SEOMeta
        title={SITE_CONFIG.name + " | Trasforma il Tuo Corpo Naturalmente"}
        description={SITE_CONFIG.description}
        keywords={SITE_CONFIG.keywords}
        canonicalUrl={SITE_CONFIG.url}
        ogImage={getImageUrl('ogImage')}
        structuredData={homeStructuredData}
        noindex={!SITE_CONFIG.allowIndexing}
      />

      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Salta al contenuto principale"
      >
        Salta al contenuto principale
      </a>

      <main id="main-content" role="main">
        <HeroSection />
        <VideoSection />
        <ServicesIntroSection />
        <AboutSection />
        <NaturalHistorySection />
        <Recomp365Section />
        <GalleryBeforeAfter />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
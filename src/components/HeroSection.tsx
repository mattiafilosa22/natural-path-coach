import { Button } from "@/components/ui/button";
import heroImage from "@/assets/trainer-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Trasforma il Tuo
            <span className="block text-primary-glow">Corpo e Mente</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Allenamenti personalizzati, risultati garantiti. Raggiungi i tuoi
            obiettivi fitness con un personal trainer professionale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="outline"
              className="border-white font-bold text-primary-glow hover:bg-white hover:text-foreground animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Scopri di Più
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/trainer-background.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Sezione introduttiva Marco Del Moro Personal Trainer"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img"
        aria-label="Marco Del Moro durante un allenamento di natural bodybuilding"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Il Tuo Corpo è Fermo?
            <span className="block text-primary-glow">Il Problema non Sei Tu.</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Soluzione? Un metodo naturale, sano e sostenibile, progettato per funzionare nel tempo.
            <br />Benvenuto nel Natural Bodybuilding!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              variant="outline"
              className="border-white font-bold text-primary-glow hover:bg-white hover:text-foreground animate-slide-up focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              style={{ animationDelay: "0.2s" }}
            >
              <a
                href="#contact"
                onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById("contact");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    // Focus management per accessibilità
                    el.focus();
                  }
                }}
                aria-label="Scopri il metodo RECOMP 365 di Marco Del Moro"
              >
                Scopri il metodo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

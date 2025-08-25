import { Button } from "@/components/ui/button";
import heroImage from "@/assets/trainer-background.jpg";

const ComingSoon = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Sito in arrivo - Marco Del Moro Personal Trainer"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Marco Del Moro durante un allenamento di natural bodybuilding"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: window.innerWidth < 768 ? 'center calc(20% + 25px)' : 'center calc(15% + 25px)',
          }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Marco del Moro
            <span className="block text-primary-glow">Natural bodybuilding</span>
          </h1>

          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-glow">
              Coming Soon
            </h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Il sito è in fase di sviluppo.<br />
              Presto disponibile il metodo naturale, sano e sostenibile per la tua trasformazione corporea.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              variant="outline"
              className="border-white font-bold text-primary-glow hover:bg-white hover:text-foreground animate-slide-up focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              style={{ animationDelay: "0.2s" }}
            >
              <a
                href="mailto:marcodelmoropt@gmail.com"
                aria-label="Contatta Marco Del Moro via email"
              >
                Contattami via Email
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-white font-bold text-white hover:bg-white hover:text-foreground animate-slide-up focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="https://www.instagram.com/marcodelmoro_pt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguimi su Instagram"
              >
                Seguimi su Instagram
              </a>
            </Button>
          </div>

          <div className="mt-12 animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <p className="text-lg opacity-75">
              📧 marcodelmoropt@gmail.com<br />
              📱 +39 347 930 9018<br />
              📍 Piombino, Toscana
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;

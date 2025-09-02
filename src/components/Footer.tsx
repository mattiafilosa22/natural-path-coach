import { Heart } from "lucide-react";
import { useCookiebot } from "@/hooks/use-cookiebot";

const Footer = () => {
  const { showDialog } = useCookiebot();
  return (
    <footer
      className="bg-foreground text-white py-12"
      role="contentinfo"
      aria-label="Informazioni del sito e link utili"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Marco Del Moro PT
            </h3>
            <p className="text-white/80 mb-4">
              Personal trainer certificato dedicato ad aiutarti a raggiungere
              i tuoi obiettivi di fitness e benessere.
            </p>
            <p className="text-white/60 text-sm">
              Trasforma il tuo corpo, trasforma la tua vita.
            </p>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Link Utili</h4>
            <ul className="space-y-2 text-white/80" role="list">
              <li role="listitem">
                <a
                  href="#services"
                  className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label="Vai alla sezione servizi"
                >
                  Servizi
                </a>
              </li>
              <li role="listitem">
                <a
                  href="#about"
                  className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label="Vai alla sezione chi sono"
                >
                  Chi Sono
                </a>
              </li>
              <li role="listitem">
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label="Vai alla sezione contatti"
                >
                  Contatti
                </a>
              </li>
              <li role="listitem">
                <a
                  href="#"
                  className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label="Visita il blog fitness"
                >
                  Blog Fitness
                </a>
              </li>
            </ul>
          </div> */}

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-white/80" role="list">
              <li>
                <a href="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:text-primary transition-colors">
                  Termini di Servizio
                </a>
              </li>
              {/* <li>
                <a href="/cookie-declaration/" className="hover:text-primary transition-colors">
                  Cookie Declaration
                </a>
              </li> */}
              <li>
                <button
                  onClick={showDialog}
                  className="hover:text-primary transition-colors text-left"
                >
                  Cookie Settings
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 flex items-center justify-center gap-2">
            © 2025 Marco Del Moro Personal Trainer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Heart } from "lucide-react";
import { useCookiebot } from "@/hooks/use-cookiebot";

const Footer = () => {
  const { showDialog } = useCookiebot();
  return (
    <footer className="bg-foreground text-white py-12">
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
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Servizi
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  Chi Sono
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contatti
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog Fitness
                </a>
              </li>
            </ul>
          </div> */}

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Termini di Servizio
                </a>
              </li>
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
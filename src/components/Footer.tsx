import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { useCookiebot } from "@/hooks/use-cookiebot";

const Footer = () => {
  const { showDialog } = useCookiebot();
  return (
    <footer
      className="bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 text-white py-16 relative overflow-hidden"
      role="contentinfo"
      aria-label="Informazioni del sito e link utili"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-2xl translate-y-32 -translate-x-32"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-primary">
                  Marco Del Moro PT
                </h3>
                <p className="text-sm text-white/60">Natural Bodybuilding Coach</p>
              </div>
            </div>

            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Personal trainer specializzato in <strong>Natural Bodybuilding</strong> e ricomposizione corporea.
              Il mio metodo <span className="text-primary font-semibold">RECOMP 365</span> ti aiuta a raggiungere
              i tuoi obiettivi in modo naturale e sostenibile.
            </p>

            {/* Social Links */}
            <div className="space-y-3">
              {/* <p className="text-white/70 text-sm font-medium">Seguimi sui social:</p> */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/marco_del_moro_pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-primary hover:scale-105 transition-all duration-300 group"
                  aria-label="Seguimi su Instagram"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Instagram className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white/80 group-hover:text-white text-sm font-medium">
                    Seguimi su Instagram
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Contatti Rapidi */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-primary rounded-full"></div>
              Contatti
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:marcodelmoropt@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm">marcodelmoropt@gmail.com</span>
              </a>

              <a
                href="tel:+393479309018"
                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-sm">+39 347 930 9018</span>
              </a>

              <div className="flex items-start gap-3 text-white/70">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="text-sm">
                  <p>FM Fitness</p>
                  <p>Viale Giovanni Amendola 12</p>
                  <p>57025 Piombino (LI)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-primary rounded-full"></div>
              Informazioni Legali
            </h4>
            <ul className="space-y-3 text-white/70" role="list">
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-primary transition-colors hover:translate-x-1 transform duration-200 block"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="hover:text-primary transition-colors hover:translate-x-1 transform duration-200 block"
                >
                  Termini di Servizio
                </a>
              </li>
              <li>
                <button
                  onClick={showDialog}
                  className="hover:text-primary transition-colors text-left hover:translate-x-1 transform duration-200"
                >
                  Impostazioni Cookie
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-white/60">
              <span>© 2025 Marco Del Moro Personal Trainer</span>
            </div>

            <div className="flex items-center gap-4 text-xs text-white/50">
              {/* <span>P.IVA: 01234567890</span>
              <span>•</span> */}
              <span>Natural Bodybuilding Coach</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
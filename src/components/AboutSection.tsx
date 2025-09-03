import { Button } from "@/components/ui/button";
import { Award, Heart, Zap } from "lucide-react";
import Marco from "@/assets/marco-del-moro.jpg";

const AboutSection = () => {
  const stats = [
    { number: "500+", label: "Clienti soddisfatti" },
    { number: "5", label: "Anni di esperienza" },
    { number: "98%", label: "Obiettivi raggiunti" },
    { number: "24/7", label: "Supporto disponibile" },
  ];

  const qualifications = [
    { icon: Award, text: "Certificazione Natural Bodybuilding riconosciuto da MSP Italia, Coni e regolamentati dallo SNAQ (Sistema nazionale di tecnici sportivi" },
    { icon: Heart, text: "Studente bachelor of science in Strength and conditioning (preparazione atletica)" },
    { icon: Zap, text: "Formazione presso Società sportive di elité" },
  ];

  return (
    <section
      id="about"
      className="py-20"
      aria-label="Chi è Marco Del Moro"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <header>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Ecco chi <span className="text-primary">sono</span> e perché puoi <span className="text-primary">ascoltarmi</span>
              </h2>
            </header>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 leading-relaxed">
Mi chiamo Marco Del Moro, sono un personal trainer e praticante di natural bodybuilding.<br /> Cosa significa? Semplice: costruzione del corpo senza scorciatoie.<br />
- Gli uomini diventano muscolosi e armonici, senza sembrare "gonfi"<br />
- Le donne diventano toniche, sode e femminili, senza diventare "mascoline"
            </p>

            {/* <p className="text-lg text-muted-foreground mb-8">
              Ti porto indietro nel tempo, in un mondo senza doping. Nel tardo
              '800, Eugene Sandow era celebre per il suo fisico potente e
              armonico, costruito solo con disciplina, bilancieri e
              alimentazione basilare. Non esistevano steroidi né diete
              drastiche. Il suo segreto era un metodo. Oggi ti fanno credere che
              sia impossibile ottenere quei risultati in modo naturale, perché è
              più facile venderti una scorciatoia che insegnarti il percorso
              vero. Io ho scelto di insegnare quel percorso.
            </p> */}

            {/* Qualifications */}
            <div className="space-y-6 mb-8" role="list" aria-label="Qualificazioni professionali">
              {qualifications.map((qual, index) => (
                <div key={index} className="group" role="listitem">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                    <div
                      className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300"
                      aria-hidden="true"
                    >
                      <qual.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <span className="text-foreground font-medium text-sm sm:text-base lg:text-lg leading-relaxed pt-1">
                      {qual.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              variant="cta"
              className="px-8 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <a
                href="#natural-history"
                aria-label="Inizia il Percorso RECOMP 365 (si apre in una nuova finestra)"
                onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById("natural-history");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    // Focus management per accessibilità
                    el.focus();
                  }
                }}
              >
                Il Percorso RECOMP 365
              </a>
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center">
            <img
              src={Marco}
              alt="Marco Del Moro, personal trainer specializzato in natural bodybuilding, in posa professionale"
              className="rounded-2xl shadow-2xl w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] object-cover"
              loading="lazy"
              width="800"
              height="600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

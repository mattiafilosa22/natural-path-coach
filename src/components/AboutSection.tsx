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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ecco chi <span className="text-primary">sono</span> e perché puoi <span className="text-primary">ascoltarmi</span>
              </h2>
            </header>

            <p className="text-lg text-muted-foreground mb-6">
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
            <div className="space-y-4 mb-8" role="list" aria-label="Qualificazioni professionali">
              {qualifications.map((qual, index) => (
                <div key={index} className="flex items-center" role="listitem">
                  <div
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4"
                    aria-hidden="true"
                  >
                    <qual.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-foreground font-medium">
                    {qual.text}
                  </span>
                </div>
              ))}
            </div>

            <Button
              asChild
              variant="cta"
              className="px-8 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <a
                href="/funnel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Inizia il Percorso RECOMP 365 (si apre in una nuova finestra)"
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

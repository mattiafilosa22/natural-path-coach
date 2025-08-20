import { Button } from "@/components/ui/button";
import { Award, Heart, Zap } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "500+", label: "Clienti soddisfatti" },
    { number: "5", label: "Anni di esperienza" },
    { number: "98%", label: "Obiettivi raggiunti" },
    { number: "24/7", label: "Supporto disponibile" },
  ];

  const qualifications = [
    { icon: Award, text: "Certificazione ACSM Personal Trainer" },
    { icon: Heart, text: "Specializzazione in Fitness Funzionale" },
    { icon: Zap, text: "Master in Nutrizione Sportiva" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Chi <span className="text-primary">Sono</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              Ciao, sono Marco Del Moro. Se sei qui, è probabile che anche tu ti
              sia guardato allo specchio pensando: 'Potrei essere meglio di
              così'. Quel percorso l'ho fatto prima di te. Ho vissuto la
              frustrazione di un corpo che non risponde e l'ho trasformata in un
              metodo scientifico, senza scorciatoie.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              Ti porto indietro nel tempo, in un mondo senza doping. Nel tardo
              '800, Eugene Sandow era celebre per il suo fisico potente e
              armonico, costruito solo con disciplina, bilancieri e
              alimentazione basilare. Non esistevano steroidi né diete
              drastiche. Il suo segreto era un metodo. Oggi ti fanno credere che
              sia impossibile ottenere quei risultati in modo naturale, perché è
              più facile venderti una scorciatoia che insegnarti il percorso
              vero. Io ho scelto di insegnare quel percorso.
            </p>

            {/* Qualifications */}
            <div className="space-y-4 mb-8">
              {qualifications.map((qual, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <qual.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">
                    {qual.text}
                  </span>
                </div>
              ))}
            </div>

            <Button asChild variant="cta" className="px-8">
              <a href="/funnel" target="_blank">
                Il Percorso RECOMP 365
              </a>
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center">
            <img
              src="/src/assets/marco-del-moro.jpeg"
              alt="Marco Del Moro"
              className="rounded-2xl shadow-2xl w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

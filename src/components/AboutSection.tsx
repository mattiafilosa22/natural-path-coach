import { Button } from "@/components/ui/button";
import { Award, Heart, Zap } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "500+", label: "Clienti soddisfatti" },
    { number: "5", label: "Anni di esperienza" },
    { number: "98%", label: "Obiettivi raggiunti" },
    { number: "24/7", label: "Supporto disponibile" }
  ];

  const qualifications = [
    { icon: Award, text: "Certificazione ACSM Personal Trainer" },
    { icon: Heart, text: "Specializzazione in Fitness Funzionale" },
    { icon: Zap, text: "Master in Nutrizione Sportiva" }
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
              Sono Marco Del Moro, personal trainer certificato con una passione per aiutare 
              le persone a trasformare la loro vita attraverso il fitness. Con oltre 5 anni 
              di esperienza nel settore, ho aiutato centinaia di clienti a raggiungere i 
              loro obiettivi di salute e benessere.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Il mio approccio si basa su allenamenti personalizzati, supporto nutrizionale 
              e motivazione costante. Credo che ogni persona sia unica e meriti un piano 
              di allenamento su misura per le proprie esigenze e obiettivi.
            </p>

            {/* Qualifications */}
            <div className="space-y-4 mb-8">
              {qualifications.map((qual, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <qual.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{qual.text}</span>
                </div>
              ))}
            </div>

            <Button variant="cta" className="px-8">
              Scopri il Mio Metodo
            </Button>
          </div>

          {/* Right Content - Stats */}
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Risultati che Parlano
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <p className="text-white/90 italic text-center">
                "La mia missione è aiutarti a scoprire la versione migliore di te stesso. 
                Insieme possiamo raggiungere qualsiasi obiettivo!"
              </p>
              <p className="text-center mt-4 font-semibold">- Marco Del Moro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
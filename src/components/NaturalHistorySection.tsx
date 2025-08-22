import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Star, Calendar, Heart } from "lucide-react";
import Hackenschmidt from '@/assets/natural-athletes/hackenschmidt.jpg';
import Saxon from '@/assets/natural-athletes/saxon.png';
import Sandow from '@/assets/natural-athletes/sandow.jpg';

const NaturalHistorySection = () => {
  const historicalAthlets = [
    {
      name: "Eugen Sandow",
      period: "1867-1925",
      achievement: "Padre del Bodybuilding Moderno",
      description: "Considerato il primo vero bodybuilder, Sandow sviluppò un fisico straordinario usando solo pesi e disciplina alimentare.",
      stats: ["Petto: 122 cm", "Vita: 76 cm", "Braccia: 43 cm"],
      image: Sandow
    },
    {
      name: "Arthur Saxon",
      period: "1878-1921",
      achievement: "L'Uomo più Forte del Mondo",
      description: "Strongman tedesco famoso per i suoi record di sollevamento, ottenuti attraverso allenamento intensivo e costanza.",
      stats: ["Press: 168 kg", "Deadlift: 318 kg", "Peso: 91 kg"],
      image: Saxon
    },
    {
      name: "George Hackenschmidt",
      period: "1877-1968",
      achievement: "Il Leone Russo",
      description: "Lottatore e strongman che combinava forza incredibile con un fisico armonico, tutto naturalmente.",
      stats: ["Squat: 164 kg", "Bench: 136 kg", "Peso: 95 kg"],
      image: Hackenschmidt
    }
  ];

  const principles = [
    {
      icon: Heart,
      title: "Disciplina Alimentare",
      description: "Diete semplici basate su cibi integrali e nutrienti naturali"
    },
    {
      icon: Trophy,
      title: "Allenamento Costante",
      description: "Routine regolari con progressione graduale e recupero adeguato"
    },
    {
      icon: Star,
      title: "Mentalità Vincente",
      description: "Determinazione e pazienza per costruire risultati duraturi"
    },
    {
      icon: Calendar,
      title: "Tempo e Dedizione",
      description: "Anni di lavoro metodico senza scorciatoie o sostanze artificiali"
    }
  ];

  return (
    <section 
      className="py-20 bg-gradient-to-b from-background to-secondary/20"
      aria-label="Storia del Natural Bodybuilding"
      id="natural-history"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Legends</span> del Passato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            All'inizio del 1900, senza alcun aiuto chimico, questi atleti raggiunsero
            risultati che ancora oggi ispirano. La loro eredità dimostra che con
            dedizione e metodo naturale si possono ottenere trasformazioni straordinarie.
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
            <Heart className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold">100% Natural • 100% Dedication</span>
          </div>
        </div>

        {/* Historical Athletes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {historicalAthlets.map((athlete, index) => (
            <Card
              key={index}
              className="historical-athlete-card vintage-border group hover:shadow-primary border-none bg-white/70 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative">
                <img
                  src={athlete.image}
                  alt={athlete.name}
                  className="historical-athlete-image sepia-tone w-full h-96 object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {athlete.period}
                </div>
              </div>              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {athlete.name}
                </h3>
                <p className="text-primary font-semibold mb-3 text-sm">
                  {athlete.achievement}
                </p>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {athlete.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Statistiche:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {athlete.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                        <span className="text-muted-foreground">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Principles Section */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">
            I <span className="text-primary">Principi</span> Senza Tempo
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Questi atleti seguivano principi che rimangono validi ancora oggi.
            La vera forza nasce dalla costanza, non dalle scorciatoie.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <principle.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">
                  {principle.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="border-none bg-gradient-primary text-white max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold mb-4">
                Segui le Orme dei Grandi
              </h4>
              <p className="mb-6 opacity-90 text-lg">
                Come i campioni del passato, anche tu puoi raggiungere risultati straordinari
                seguendo i principi naturali del fitness. Inizia il tuo percorso di trasformazione oggi.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-white text-primary-glow hover:bg-white hover:text-foreground font-bold"
              >
                <a href="/funnel" target="_blank">
                  Inizia il Tuo Percorso Natural
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NaturalHistorySection;

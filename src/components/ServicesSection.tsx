import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Target, Users, Clock } from "lucide-react";
import "../App.css";

const ServicesSection = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "Personal Training 1:1",
      description: "Allenamenti individuali per chi cerca la massima attenzione e vuole accelerare i risultati.",
      features: ["Programmazione 100% Natural Bodybuilding", "Schede aggiornate ogni 4 settimane", "Check tecnici e monitoraggio costanti", "Supporto nutrizionale strategico integrato"]
    },
    {
      icon: Target,
      title: "Strategia Alimentare Flessibile",
      description: "Un piano su misura per nutrire i tuoi muscoli e ottimizzare la composizione corporea.",
      features: ["In collaborazione con Alex Sport Nutrition", "Piano alimentare flessibile e personalizzato", "Check mensili e consulenze video", "Educazione alimentare per renderti autonomo"]
    },
    {
      icon: Users,
      title: "Small Group Training",
      description: "L'energia del gruppo unita all'attenzione del coach per un allenamento motivante.",
      features: ["Costi contenuti, risultati elevati", "Gruppi ristretti (max 4 persone)", "Atmosfera motivante", "Programmazione Natural condivisa"]
    },
    {
      icon: Clock,
      title: "Online Coaching",
      description: "Il mio metodo completo, ovunque tu sia. Tutta la flessibilità di cui hai bisogno senza rinunciare al supporto.",
      features: ["App dedicata", "Accesso diretto WhatsApp e gruppo Telegram", "Check mensili per analisi e strategie", "Include il Sistema \"R\" anti-abbandono"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Il metodo: <span className="text-primary">RECOMP 365</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-1xl mx-auto">
            RECOMP 365 è il sistema di ricomposizione corporea naturale che ti guida passo-passo. <br />Scegli il percorso più adatto a te per iniziare la trasformazione.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-primary transition-all duration-300 hover:scale-105 border-none bg-white/50 backdrop-blur-sm"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="services-title-card text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Target, Users, Clock } from "lucide-react";
import { designSystem } from "@/config/design-system";
import "../App.css";

const services = [
  {
    icon: Dumbbell,
    title: "Coaching tecnico personalizzato",
    description: "Allenamenti individuali per chi cerca la massima attenzione e vuole accelerare i risultati.",
    features: [
      "Programmazione 100% Natural Bodybuilding",
      "Schede aggiornate ogni 4 settimane",
      "Check tecnici e monitoraggio costanti",
      "App di tracciamento e monitoraggio costante",
      "Video degli esercizi consultabili in ogni momento"
    ]
  },
  {
    icon: Target,
    title: "Piano nutrizione sportiva",
    description: "Possibilità di integrare un piano di nutrizione sportiva direttamente con il nutrizionista del mio team",
    features: [
      "In collaborazione con Alex Sport Nutrition",
      "Piano alimentare flessibile e personalizzato",
      "Check mensili e consulenze",
      "Educazione alimentare per renderti autonomo"
    ]
  },
  {
    icon: Users,
    title: "Personal & Small Group Training",
    description: "L'energia del gruppo unita all'attenzione del coach per un allenamento motivante.",
    features: [
      "Costi contenuti, risultati elevati",
      "Allenati con il tuo \"GymBro\"",
      "Gruppi ristretti (max 2 persone)",
      "Atmosfera motivante",
      "Programmazione Natural condivisa"
    ]
  },
  {
    icon: Clock,
    title: "Online Coaching",
    description: "Il mio metodo completo, ovunque tu sia. Tutta la flessibilità di cui hai bisogno senza rinunciare al supporto.",
    features: [
      "App dedicata",
      "Accesso diretto WhatsApp e gruppo Telegram",
      "Check mensili per analisi e strategie",
      "Include il Sistema \"R\" anti-abbandono"
    ]
  }
];

const Recomp365Section = () => (
  <section
    id="services"
    className={`${designSystem.spacing.section} bg-secondary/30`}
    aria-label="Servizi di personal training"
  >
    <div className="container mx-auto px-4 sm:px-6">
      <header className="text-center mb-12 sm:mb-16">
        <h2 className={`${designSystem.typography.h2} font-bold ${designSystem.spacing.marginTitle} mt-6`}>
          Il mio metodo: <span className="text-primary">RECOMP 365</span> Ricomposizione naturale
        </h2>
      </header>
      <div className={`grid md:grid-cols-2 lg:grid-cols-4 ${designSystem.spacing.gapCards}`} role="list">
        {services.map((service, index) => (
          <Card
            key={index}
            className={`group ${designSystem.transitions.hover} border-none bg-white/50 backdrop-blur-sm focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2`}
            role="listitem"
            tabIndex={0}
            aria-label={`Servizio: ${service.title}`}
          >
            <CardHeader className="text-center">
              <div
                className={`mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center ${designSystem.spacing.marginCard} group-hover:shadow-glow ${designSystem.transitions.default}`}
                aria-hidden="true"
              >
                <service.icon className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <CardTitle className={`services-title-card ${designSystem.typography.h4} group-hover:text-primary ${designSystem.transitions.default}`}>
                {service.title}
              </CardTitle>
              <CardDescription className={`${designSystem.typography.body} services-description-card`}>
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2" role="list" aria-label={`Caratteristiche ${service.title}`}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-center ${designSystem.typography.small} text-muted-foreground`} role="listitem">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" aria-hidden="true" />
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

export default Recomp365Section;

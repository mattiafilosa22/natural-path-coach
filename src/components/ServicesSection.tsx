import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Target, Users, Clock } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "Personal Training",
      description: "Allenamenti individuali personalizzati per massimizzare i risultati",
      features: ["Piano personalizzato", "Monitoraggio costante", "Supporto nutrizionale"]
    },
    {
      icon: Target,
      title: "Coaching Nutrizionale",
      description: "Piani alimentari studiati per complementare il tuo training",
      features: ["Dieta personalizzata", "Ricette salutari", "Controllo progressi"]
    },
    {
      icon: Users,
      title: "Small Group Training",
      description: "Allenamenti in piccoli gruppi per massima attenzione",
      features: ["Max 4 persone", "Atmosfera motivante", "Costi ridotti"]
    },
    {
      icon: Clock,
      title: "Online Coaching",
      description: "Supporto continuo e programmi da seguire ovunque tu sia",
      features: ["App dedicata", "Video tutorial", "Chat support 24/7"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            I Miei <span className="text-primary">Servizi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Programmi di allenamento completi progettati per aiutarti a raggiungere 
            i tuoi obiettivi, qualunque essi siano.
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
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, FileText, Users, Target, TrendingUp, Zap, Gift } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "marcodelmoropt@gmail.com",
      action: "mailto:marcodelmoropt@gmail.com"
    },
    {
      icon: Phone,
      title: "Telefono",
      content: "+39 347 930 9018",
      action: "tel:+393479309018"
    },
    {
      icon: MapPin,
      title: "Palestra",
      content: "FM Fitness, Viale Giovanni Amendola 12, 57025 Piombino LI",
      action: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x12d623cd78127ec3:0x40abbeadb2278cb3?sa=X&ved=1t:8290&ictx=111"
    },
    {
      icon: Clock,
      title: "Orari",
      content: "Lun-Ven: 08:00-20:00\nSab: 09:00-13:00",
      action: null
    }
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-secondary/30"
      aria-label="Sezione contatti"
    >
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Scopri</span> il tuo <span className="text-primary">allenamento ideale</span> e ricevi una <span className="text-primary">consulenza gratuita</span>
          </h2>
          <div className="mb-12">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                <Gift className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                La consulenza gratuita comprende:
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-none bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base sm:text-lg mb-2 text-primary">Preparazione Pre-appuntamento</h4>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Compilando il form accederai ad un sondaggio per capire la tua situazione attuale e gli step da intraprendere insieme
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base sm:text-lg mb-2 text-primary">Conoscenza Reciproca</h4>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Small talk iniziale per conoscerci meglio e creare la base per un rapporto di fiducia
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base sm:text-lg mb-2 text-primary">Analisi Situazione Attuale</h4>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Studio approfondito della tua condizione fisica, abitudini e lifestyle attuali
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base sm:text-lg mb-2 text-primary">Obiettivi Desiderati</h4>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Definizione della tua situazione ideale e dell'aspetto fisico che desideri ottenere
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base sm:text-lg mb-2 text-primary">Valutazione del Gap</h4>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Analisi della distanza tra situazione attuale e obiettivi per creare un piano realistico
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base sm:text-lg mb-2 text-primary">Piano d'Azione</h4>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Strategie per rompere l'inerzia e proposta del pacchetto più adatto ai tuoi obiettivi
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm successRedirectTo={undefined} />

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Come Raggiungermi</h3>
              <p className="text-muted-foreground">
                Scegli il metodo che preferisci per metterti in contatto.
                Sono sempre disponibile per rispondere alle tue domande!
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className={`border-none bg-white/30 backdrop-blur-sm hover:shadow-primary transition-all duration-300 ${
                    info.action ? 'cursor-pointer hover:scale-105' : ''
                  }`}
                  onClick={() => info.action && window.open(info.action, '_blank')}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{info.title}</h4>
                        <p className="text-muted-foreground whitespace-pre-line">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Box */}

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
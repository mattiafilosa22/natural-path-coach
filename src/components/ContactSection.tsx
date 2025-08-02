import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    toast({
      title: "Messaggio inviato!",
      description: "Ti ricontatterò entro 24 ore per discutere i tuoi obiettivi.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "marco@personaltrainer.com",
      action: "mailto:marco@personaltrainer.com"
    },
    {
      icon: Phone,
      title: "Telefono",
      content: "+39 342 123 4567",
      action: "tel:+393421234567"
    },
    {
      icon: MapPin,
      title: "Palestra",
      content: "Via Fitness 123, Milano",
      action: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Orari",
      content: "Lun-Ven: 6:00-22:00\nSab-Dom: 8:00-20:00",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Inizia la Tua <span className="text-primary">Trasformazione</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pronto a raggiungere i tuoi obiettivi? Contattami per una consulenza gratuita
            e iniziamo insieme il tuo percorso verso una vita più sana.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-none shadow-primary bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Richiedi una Consulenza Gratuita
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Il tuo nome"
                      required
                      className="border-muted focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="la-tua-email@esempio.com"
                      required
                      className="border-muted focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Numero di Telefono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+39 342 123 4567"
                    className="border-muted focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Messaggio *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Parlami dei tuoi obiettivi fitness, esperienza precedente e come posso aiutarti..."
                    required
                    rows={5}
                    className="border-muted focus:border-primary resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full">
                  Invia Richiesta
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Ti ricontatterò entro 24 ore per fissare la tua consulenza gratuita
                </p>
              </form>
            </CardContent>
          </Card>

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
        <div className="mt-12">
          <Card className="border-none bg-gradient-primary text-white w-full">
            <CardContent className="p-8 text-center">
              <h4 className="text-2xl font-bold mb-4">
                Prima Consulenza Gratuita!
              </h4>
              <p className="mb-6 opacity-90">
                Valuteremo insieme i tuoi obiettivi e creeremo il piano perfetto per te.
              </p>
                <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary text-primary-glow"
                >
                <a href="/funnel" target="_blank">
                  Prenota Ora
                </a>
                </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
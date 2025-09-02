import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, FileText, Users, Target, TrendingUp, Zap, Gift } from "lucide-react";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState(""); // Anti-spam honeypot

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Anti-spam check: se honeypot è compilato, è spam
      if (honeypot) {
        console.log('Spam detected via honeypot');
        toast({
          title: "Errore nell'invio",
          description: "Si è verificato un errore. Riprova più tardi.",
          variant: "destructive"
        });
        return;
      }

      // Validation check: campi obbligatori
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        toast({
          title: "Campi obbligatori",
          description: "Compila tutti i campi obbligatori.",
          variant: "destructive"
        });
        return;
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast({
          title: "Email non valida",
          description: "Inserisci un indirizzo email valido.",
          variant: "destructive"
        });
        return;
      }

      // Rate limiting: prevent rapid submissions
      const lastSubmission = localStorage.getItem('lastFormSubmission');
      const now = Date.now();
      if (lastSubmission && (now - parseInt(lastSubmission)) < 30000) { // 30 secondi
        toast({
          title: "Invio troppo frequente",
          description: "Attendi almeno 30 secondi tra un invio e l'altro.",
          variant: "destructive"
        });
        return;
      }

      // Initialize EmailJS
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      // Template parameters che verranno inviati alle email
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Non fornito',
        message: formData.message,
        to_email: 'marcodelmoro50@gmail.com, mattiafilosa93@gmail.com',
        reply_to: formData.email,
      };

      // Invia email usando EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      toast({
        title: "Messaggio inviato!",
        description: "Ti ricontatterò entro 24 ore per discutere i tuoi obiettivi.",
      });

      // Salva timestamp per rate limiting
      localStorage.setItem('lastFormSubmission', now.toString());

      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
      setHoneypot(""); // Reset honeypot

      // Redirect al funnel dopo un breve delay per mostrare il toast
      setTimeout(() => {
        window.location.href = '/funnel';
      }, 2000); // 2 secondi di delay

    } catch (error: unknown) {
      console.error('Errore nell\'invio dell\'email:', error);

      let errorMessage = "Si è verificato un errore. Riprova più tardi o contattaci direttamente.";

      // Gestione specifica per errori EmailJS
      if (error && typeof error === 'object' && 'text' in error) {
        const emailError = error as { text: string };
        if (emailError.text.includes('Invalid grant') || emailError.text.includes('Gmail_API')) {
          errorMessage = "Problema temporaneo con il servizio email. Ti preghiamo di contattarci direttamente via email o telefono.";
        } else if (emailError.text.includes('rate limit') || emailError.text.includes('quota')) {
          errorMessage = "Troppi messaggi inviati. Riprova più tardi o contattaci direttamente.";
        } else if (emailError.text.includes('network') || emailError.text.includes('timeout')) {
          errorMessage = "Problema di connessione. Verifica la tua connessione internet e riprova.";
        }
      }

      toast({
        title: "Errore nell'invio",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Scopri</span> il tuo <span className="text-primary">allenamento ideale</span> e ricevi una <span className="text-primary">consulenza gratuita</span>
          </h2>
          <div className="mb-12">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                <Gift className="h-8 w-8 text-primary" />
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
                        <h4 className="font-semibold text-lg mb-2 text-primary">Preparazione Pre-appuntamento</h4>
                        <p className="text-sm text-muted-foreground">
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
                        <h4 className="font-semibold text-lg mb-2 text-primary">Conoscenza Reciproca</h4>
                        <p className="text-sm text-muted-foreground">
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
                        <h4 className="font-semibold text-lg mb-2 text-primary">Analisi Situazione Attuale</h4>
                        <p className="text-sm text-muted-foreground">
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
                        <h4 className="font-semibold text-lg mb-2 text-primary">Obiettivi Desiderati</h4>
                        <p className="text-sm text-muted-foreground">
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
                        <h4 className="font-semibold text-lg mb-2 text-primary">Valutazione del Gap</h4>
                        <p className="text-sm text-muted-foreground">
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
                        <h4 className="font-semibold text-lg mb-2 text-primary">Piano d'Azione</h4>
                        <p className="text-sm text-muted-foreground">
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
          <Card className="border-none shadow-primary bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Richiedi una Consulenza Gratuita
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                aria-label="Modulo richiesta consulenza gratuita"
                noValidate
              >
                {/* Honeypot field - invisibile agli utenti, visibile ai bot */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: 'none', visibility: 'hidden', position: 'absolute', left: '-9999px' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

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
                      className="border-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      aria-describedby="name-error"
                      autoComplete="name"
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

                <Button
                  type="submit"
                  variant="hero"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Invio in corso..." : "Invia Richiesta"}
                </Button>

                {/* <p className="text-sm text-muted-foreground text-center">
                  Ti ricontatterò entro 24 ore per fissare la tua consulenza gratuita
                </p> */}
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

      </div>
    </section>
  );
};

export default ContactSection;
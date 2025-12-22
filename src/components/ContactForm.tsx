import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

type ContactFormProps = {
  cardClassName?: string;
  title?: string;
  submitLabel?: string;
  successRedirectTo?: string;
  successRedirectDelayMs?: number;
};

export const ContactForm = ({
  cardClassName = "border-none shadow-primary bg-white/50 backdrop-blur-sm",
  title = "Richiedi una Consulenza Gratuita",
  submitLabel = "Invia Richiesta",
  successRedirectTo,
  successRedirectDelayMs = 2000,
}: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (honeypot) {
        console.log("Spam detected via honeypot");
        toast({
          title: "Errore nell'invio",
          description: "Si è verificato un errore. Riprova più tardi.",
          variant: "destructive",
        });
        return;
      }

      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        toast({
          title: "Campi obbligatori",
          description: "Compila tutti i campi obbligatori.",
          variant: "destructive",
        });
        return;
      }

      if (!privacyConsent) {
        toast({
          title: "Consenso privacy richiesto",
          description: "È necessario accettare l'informativa privacy per inviare il messaggio.",
          variant: "destructive",
        });
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast({
          title: "Email non valida",
          description: "Inserisci un indirizzo email valido.",
          variant: "destructive",
        });
        return;
      }

      const lastSubmission = localStorage.getItem("lastFormSubmission");
      const now = Date.now();
      if (lastSubmission && now - parseInt(lastSubmission) < 30000) {
        toast({
          title: "Invio troppo frequente",
          description: "Attendi almeno 30 secondi tra un invio e l'altro.",
          variant: "destructive",
        });
        return;
      }

      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Non fornito",
        message: formData.message,
        to_email: "marcodelmoro50@gmail.com, mattiafilosa93@gmail.com",
        reply_to: formData.email,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
      );

      toast({
        title: "Messaggio inviato!",
        description: "Ti ricontatterò entro 24 ore per discutere i tuoi obiettivi.",
      });

      localStorage.setItem("lastFormSubmission", now.toString());

      setFormData({ name: "", email: "", phone: "", message: "" });
      setHoneypot("");
      setPrivacyConsent(false);

      if (successRedirectTo) {
        setTimeout(() => {
          window.location.href = successRedirectTo;
        }, successRedirectDelayMs);
      }
    } catch (error: unknown) {
      console.error("Errore nell'invio dell'email:", error);

      let errorMessage =
        "Si è verificato un errore. Riprova più tardi o contattaci direttamente.";

      if (error && typeof error === "object" && "text" in error) {
        const emailError = error as { text: string };
        if (emailError.text.includes("Invalid grant") || emailError.text.includes("Gmail_API")) {
          errorMessage =
            "Problema temporaneo con il servizio email. Ti preghiamo di contattarci direttamente via email o telefono.";
        } else if (emailError.text.includes("rate limit") || emailError.text.includes("quota")) {
          errorMessage = "Troppi messaggi inviati. Riprova più tardi o contattaci direttamente.";
        } else if (emailError.text.includes("network") || emailError.text.includes("timeout")) {
          errorMessage =
            "Problema di connessione. Verifica la tua connessione internet e riprova.";
        }
      }

      toast({
        title: "Errore nell'invio",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Card className={cardClassName}>
      <CardHeader>
        <CardTitle className="text-2xl text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          aria-label="Modulo richiesta consulenza gratuita"
          noValidate
        >
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            style={{
              display: "none",
              visibility: "hidden",
              position: "absolute",
              left: "-9999px",
            }}
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

          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="privacy-consent"
                checked={privacyConsent}
                onCheckedChange={(checked) => setPrivacyConsent(checked as boolean)}
                required
                className="mt-1"
              />
              <div className="grid gap-1.5 leading-none">
                <Label
                  htmlFor="privacy-consent"
                  className="text-sm font-medium leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Ho letto e accetto l'
                  <a
                    href="/privacy-policy/"
                    className="text-primary hover:underline font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    informativa sulla privacy
                  </a>
                  <span> </span>e acconsento al trattamento dei miei dati personali per le finalità indicate. *
                </Label>
                <p className="text-xs text-muted-foreground">
                  I tuoi dati saranno utilizzati esclusivamente per ricontattarti in merito alla tua richiesta di consulenza.
                  Potrai esercitare i tuoi diritti (accesso, rettifica, cancellazione) contattandoci via email.
                </p>
              </div>
            </div>
          </div>

          <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Invio in corso..." : submitLabel}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

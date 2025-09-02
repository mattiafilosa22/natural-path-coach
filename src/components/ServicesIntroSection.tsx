import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Sparkles } from "lucide-react";
import "../App.css";

const ServicesIntroSection = () => (
  <section
    className="pt-20 pb-0 bg-secondary/30"
    aria-label="Introduzione servizi personal training"
  >
    <div className="container mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-0">
        <div className="flex flex-col items-center mb-8">
          {/* <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 shadow-glow">
            <Sparkles className="h-8 w-8 text-white" aria-hidden="true" />
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            C'era una volta... <span className="text-primary">Un mondo senza doping</span>
          </h2>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="mx-auto">
        <Card className="border-none shadow-primary bg-white/50 backdrop-blur-sm mb-12">
          <CardContent className="p-8 md:p-8">
            <p className="mb-6 text-muted-foreground text-center text-lg">
              Se questo sei tu continua a leggere: <span className="font-semibold">hai tra i 18 e 50 anni</span>. Hai già provato palestra, dieta, motivazione.<br />
              ma ogni volta, qualcosa si spezza: ti blocchi, molli, i risultati non arrivano.<br />
              E ti sembra di fare tutto "giusto" ma il tuo corpo resta fermo.<br />
              <span className="font-bold text-primary text-2xl block mt-4 mb-2">LA VERITÀ?</span>
              <span className="font-semibold text-foreground">Il problema non sei tu.</span><br />
              Il problema è che ti manca un metodo pensato pe                                                     r te. Il tuo corpo e il tuo stile di vita.
            </p>
            <p className="mb-8 text-muted-foreground text-center font-medium text-lg">
              Un metodo <span className="text-primary font-bold">naturale, sano, sostenibile</span>, progettato per funzionare nel tempo, senza effetto yo-yo, senza frustazione, senza rischi per la tua salute.
            </p>

            {/* Warning Box */}
            <Card className="border-none bg-white/70 backdrop-blur-sm mb-8 border-l-4 border-primary">
              <CardContent className="p-6 pt-0 md:p-8 md:pt-0">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-2">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-bold text-primary text-xl block text-center">
                    PRIMA DI RICHIEDERE UN CHECK-UP GRATUITO ECCO COSA DEVI SAPERE:
                  </span>
                </div>
                <p className="text-muted-foreground mb-6 text-center">Oggi tanti corpi che vedi online sono:</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="border-none bg-white/80 backdrop-blur-sm hover:shadow-primary transition-all duration-300">
                    <CardContent className="p-4 text-center">
                      <span className="text-red-600 font-semibold">💉 Gonfiati con sostanze dopanti</span>
                    </CardContent>
                  </Card>
                  <Card className="border-none bg-white/80 backdrop-blur-sm hover:shadow-primary transition-all duration-300">
                    <CardContent className="p-4 text-center">
                      <span className="text-red-600 font-semibold">🚫 Ottenuti con diete folli e insostenibili</span>
                    </CardContent>
                  </Card>
                  <Card className="border-none bg-white/80 backdrop-blur-sm hover:shadow-primary transition-all duration-300">
                    <CardContent className="p-4 text-center">
                      <span className="text-red-600 font-semibold">📱 Filtrati e modificati con AI e PhotoShop</span>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <p className="mb-0 text-center text-muted-foreground text-xl">
              E tu continui a sentirti "sbagliato/a" per non assomigliare ad una bugia digitale.<br />
              <span className="font-bold text-primary text-3xl block mt-4 mb-4">BASTA!</span>
              <span className="font-semibold text-foreground">Vuoi un corpo vero, sano, forte e costruito in modo intelligente?</span>
            </p>
          </CardContent>
        </Card>

        {/* CTA Section */}
        {/* <Card className="border-none bg-gradient-primary text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Scopri il Metodo Natural che Funziona Davvero
            </h3>
            <p className="mb-6 opacity-90 text-lg">
              Inizia la tua trasformazione con un approccio scientifico, sostenibile e 100% naturale.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-bold"
            >
              <a href="/funnel" target="_blank">
                Richiedi Check-up Gratuito
              </a>
            </Button>
          </CardContent>
        </Card> */}
      </div>
    </div>
  </section>
);

export default ServicesIntroSection;

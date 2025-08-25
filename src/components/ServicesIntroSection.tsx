import { Separator } from "@/components/ui/separator";
import { Sparkles } from "lucide-react";
import "../App.css";

const ServicesIntroSection = () => (
  <section
    className="py-16 bg-gradient-to-br from-secondary/40 to-white/80 rounded-xl shadow-lg mb-12"
    aria-label="Introduzione servizi personal training"
  >
    <div className="container mx-auto px-6 text-center">
      <div className="flex flex-col items-center mb-8">
        <Sparkles className="h-10 w-10 text-primary mb-2 animate-pulse" aria-hidden="true" />
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          C'ERA UNA VOLTA... <span className="text-primary">UN MONDO SENZA DOPING.</span>
        </h2>
      </div>
      <Separator className="mb-12 mx-auto w-2/3 bg-gradient-to-r from-transparent via-primary to-transparent h-px" />
      <div className="max-w-6xl mx-auto text-lg md:text-xl leading-relaxed">
        <div className="bg-gradient-to-r from-white/80 via-white/90 to-white/80 rounded-2xl p-8 md:p-12 shadow-2xl border border-white/50 backdrop-blur-sm">
          <p className="mb-6 text-gray-700 text-center">
            Se questo sei tu continua a leggere: <span className="font-semibold">hai tra i 18 e 50 anni</span>. Hai già provato palestra, dieta, motivazione.<br />
            ma ogni volta, qualcosa si spezza: ti blocchi, molli, i risultati non arrivano.<br />
            E ti sembra di fare tutto "giusto" ma il tuo corpo resta fermo.<br />
            <span className="font-bold text-primary text-2xl block mt-4 mb-2">LA VERITÀ?</span>
            <span className="font-semibold text-gray-800">Il problema non sei tu.</span><br />
            Il problema è che ti manca un metodo pensato per te. Il tuo corpo e il tuo stile di vita.
          </p>
          <p className="mb-8 text-gray-700 text-center font-medium">
            Un metodo <span className="text-primary font-bold">naturale, sano, sostenibile</span>, progettato per funzionare nel tempo, senza effetto yo-yo, senza frustazione, senza rischi per la tua salute.
          </p>
          <div className="bg-gradient-to-br from-primary/10 via-white/90 to-primary/5 rounded-xl p-6 md:p-8 shadow-lg border-l-4 border-primary mb-8">
            <span className="font-bold text-primary text-xl block mb-4">⚠️ PRIMA DI RICHIEDERE UN CHECK-UP GRATUITO ECCO COSA DEVI SAPERE:</span>
            <p className="text-gray-700 mb-4">Oggi tanti corpi che vedi online sono:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/70 rounded-lg p-4 text-center shadow-md">
                <span className="text-red-600 font-semibold">💉 Gonfiati con sostanze dopanti</span>
              </div>
              <div className="bg-white/70 rounded-lg p-4 text-center shadow-md">
                <span className="text-red-600 font-semibold">🚫 Ottenuti con diete folli e insostenibili</span>
              </div>
              <div className="bg-white/70 rounded-lg p-4 text-center shadow-md">
                <span className="text-red-600 font-semibold">📱 Filtrati e modificati con AI e PhotoShop</span>
              </div>
            </div>
          </div>
          <p className="mb-2 text-center text-gray-700 text-xl">
            E tu continui a sentirti "sbagliato/a" per non assomigliare ad una bugia digitale.<br />
            <span className="font-bold text-primary text-3xl block mt-4 mb-4">BASTA!</span>
            <span className="font-semibold text-gray-800">Vuoi un corpo vero, sano, forte e costruito in modo intelligente?</span>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesIntroSection;

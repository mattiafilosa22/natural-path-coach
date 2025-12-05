import { FitnessButton } from "@/components/FitnessButton";
import { SecondaryButton } from "@/components/SecondaryButton";
import { TransformationGallery } from "@/components/TransformationGallery";
import { designSystem } from "@/config/design-system";

interface PromiseStepProps {
  onNext: () => void;
  onBack: () => void;
}

export const PromiseStep = ({ onNext, onBack }: PromiseStepProps) => {
  return (
    <div className="flex flex-col items-center justify-center px-4 min-h-screen text-center space-y-8">
      <div className="max-w-4xl space-y-6">
        <h1 className={`${designSystem.typography.h2} font-bold text-white leading-tight`}>
          La Promessa che ti faccio
        </h1>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className={`${designSystem.typography.h3} font-bold text-fitness-white`}>
            Oggi tanti corpi che vedi online sono:
          </h2>

          <div className="space-y-4">
            <p className={`${designSystem.typography.body} text-white font-medium`}>
              - Gonfiati con sostanze dopanti
            </p>
            <p className={`${designSystem.typography.body} text-white font-medium`}>
              - Ottenuti con diete folli e insostenibili
            </p>
            <p className={`${designSystem.typography.body} text-white font-medium`}>
              - Filtrati e modificati con AI e photoshop
            </p>
          </div>

          <div className="space-y-2 text-white">
            <p className={`${designSystem.typography.small}`}>
              E tu continui a sentirti sbagliato per non assomigliare ad una
              <span className="text-fitness-white font-bold"> bugia digitale</span>!
            </p>
            <p className={`${designSystem.typography.h3} font-bold text-fitness-white`}>BASTA!</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className={`${designSystem.typography.h3} font-bold text-fitness-white`}>
            Vuoi un <span className="text-fitness-white">corpo vero, sano, forte</span> e costruito in modo intelligente?
          </h2>

          <p className={`${designSystem.typography.small} text-white`}>
            Mi chiamo <span className="font-bold text-fitness-white">Marco Del Moro</span>, sono personal trainer e praticante di
            <span className="font-bold text-fitness-white"> natural bodybuilding</span>? Cosa significa? Semplice: <span className="font-bold text-fitness-white">costruzione del
            corpo senza scorciatoie</span>
          </p>

          <div className="space-y-4">
            <p className="text-lg md:text-xl text-white font-medium">
              🏆 Gli uomini diventano <span className="text-fitness-white font-bold">muscolosi e armonici</span>, senza sembrare
              "gonfi"
            </p>
            <p className="text-lg md:text-xl text-white font-medium">
              🔬 Le donne diventano <span className="text-fitness-white font-bold">toniche, sode e femminili</span>, senza diventare
              mascoline
            </p>
            <p className="text-lg md:text-xl text-white font-bold">
              Non è una moda, ma è una <span className="text-fitness-white">scelta che esiste da sempre</span>!
            </p>
          </div>

          <p className="text-base md:text-lg text-white">
            Ho preparato per te un <span className="font-bold text-fitness-white">questionario</span> che ti permetterà di capire
            qual è l'<span className="font-bold text-fitness-white">allenamento perfetto</span> per il tuo punto di partenza, il tuo
            obiettivo e il tuo tipo di fisico. Faremo un salto indietro nel
            tempo, quando il doping neanche esisteva, ti mostrerò che i <span className="font-bold text-fitness-white">fisici
            statuari sono esistiti ben prima</span> dell'invenzione del doping, dei
            social media e dell'AI
          </p>
        </div>

        <p className="text-lg md:text-xl text-white font-bold">
          Non <span className="text-fitness-white">promesse vuote</span>, ma <span className="text-fitness-white">risultati concreti</span>
        </p>
      </div>

      <div className="w-full hidden md:block">
        <TransformationGallery />
      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-4 items-center justify-center">
        <SecondaryButton
          onClick={onBack}
          variant="dark"
          size="lg"
        >
          ← Indietro
        </SecondaryButton>

        <FitnessButton
          onClick={onNext}
          size="lg"
          className="text-base md:text-lg px-8 md:px-12 py-6 md:py-8"
        >
          Inizia il Questionario
        </FitnessButton>
      </div>

      <div className="w-full block md:hidden">
        <TransformationGallery />
      </div>
    </div>
  );
};

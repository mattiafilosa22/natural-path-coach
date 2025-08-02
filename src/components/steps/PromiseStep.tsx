import { FitnessButton } from "@/components/FitnessButton";
import { TransformationGallery } from "@/components/TransformationGallery";

interface PromiseStepProps {
  onNext: () => void;
  onBack: () => void;
}

export const PromiseStep = ({ onNext, onBack }: PromiseStepProps) => {
  return (
    <div className="flex flex-col items-center justify-center px-4 min-h-screen text-center space-y-8">
      <div className="max-w-4xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          La Nostra Promessa
        </h1>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-fitness-white">
            Affidandoti a noi ti promettiamo che il tuo fisico cambierà
            SENZA l'aiuto del doping
          </h2>

          <div className="space-y-4">
            <p className="text-xl text-white font-medium">
              🏆 100% Natural Bodybuilding
            </p>
            <p className="text-xl text-white font-medium">
              🔬 Metodi scientificamente provati
            </p>
            {/* <p className="text-xl text-white font-medium">
              ⚡ Risultati visibili in 6 settimane
            </p> */}
            <p className="text-xl text-white font-medium">
              🎯 Programma personalizzato per te
            </p>
          </div>
        </div>

        <p className="text-lg text-white font-semibold">
          Non promesse vuote, ma risultati concreti
        </p>
      </div>

      <div className="w-full hidden md:block">
        <TransformationGallery />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <button
          onClick={onBack}
          className="px-8 py-3 text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
        >
          ← Indietro
        </button>
        
        <FitnessButton
          onClick={onNext}
          size="lg"
          className="text-xl px-12 py-8"
        >
          Inizia il Questionario →
        </FitnessButton>
      </div>

      <div className="w-full block md:hidden">
        <TransformationGallery />
      </div>
    </div>
  );
};
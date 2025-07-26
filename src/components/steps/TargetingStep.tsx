import { FitnessButton } from "@/components/FitnessButton";
import { TransformationGallery } from "@/components/TransformationGallery";

interface TargetingStepProps {
  onNext: () => void;
}

export const TargetingStep = ({ onNext }: TargetingStepProps) => {
  return (
    <div className="flex flex-col items-center justify-center px-4  min-h-screen text-center space-y-8">
      <div className="max-w-4xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Sei un ragazzo di 30 anni
          <br />
          con la pancetta?
        </h1>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-4">
          <p className="text-xl md:text-2xl text-white font-medium">
            ✓ Ti senti insicuro quando ti guardi allo specchio?
          </p>
          <p className="text-xl md:text-2xl text-white font-medium">
            ✓ Hai provato diete e allenamenti senza risultati?
          </p>
          <p className="text-xl md:text-2xl text-white font-medium">
            ✓ Vuoi un fisico scolpito ma non sai da dove iniziare?
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-fitness-white">
          IO SO COME RISOLVERE IL TUO PROBLEMA
        </h2>
      </div>

      <div className="w-full">
        <TransformationGallery />
      </div>

      <FitnessButton
        onClick={onNext}
        size="lg"
        className="text-xl px-12 py-8"
      >
        Dimmi Come Fare →
      </FitnessButton>
    </div>
  );
};
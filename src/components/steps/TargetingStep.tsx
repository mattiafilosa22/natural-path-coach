import { FitnessButton } from "@/components/FitnessButton";
import { SecondaryButton } from "@/components/SecondaryButton";
import { TransformationGallery } from "@/components/TransformationGallery";

interface TargetingStepProps {
  onNext: () => void;
  onBack: () => void;
}

export const TargetingStep = ({ onNext, onBack }: TargetingStepProps) => {
  return (
    <div className="flex flex-col items-center justify-center px-4  min-h-screen text-center space-y-8">
      <div className="max-w-4xl space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Hai queste caratteristiche?
        </h1>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-4">
          <p className="text-lg md:text-xl text-white font-medium">
            ✓ Hai tra i <span className="text-fitness-white font-bold">18 e 50 anni</span>
          </p>
          <p className="text-lg md:text-xl text-white font-medium">
            ✓ Hai già provato <span className="text-fitness-white font-bold">palestra, dieta, motivazione</span>
          </p>
          <p className="text-lg md:text-xl text-white font-medium">
            ✓ Ma ogni volta qualcosa si spezza: <span className="text-fitness-white font-bold">ti blocchi, molli, i risultati non arrivano</span>
          </p>
          <p className="text-lg md:text-xl text-white font-medium">
            ✓ Ti sembra di fare tutto "giusto", ma <span className="text-fitness-white font-bold">il tuo corpo resta fermo</span>
          </p>
          <p className="text-lg md:text-xl text-white font-medium">
            ✓ Cerchi un <span className="text-fitness-white font-bold">metodo efficace</span>, ma che sia anche <span className="text-fitness-white font-bold">naturale, sostenibile</span> e che non ti faccia mai più perdere i risultati ottenuti
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-fitness-white">
          <span className="text-fitness-white">IO SO COME RISOLVERE</span> IL TUO <span className="text-fitness-white">PROBLEMA</span>
        </h2>
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
          Dimmi Come Fare
        </FitnessButton>
      </div>

            <div className="w-full block md:hidden">
        <TransformationGallery />
      </div>
    </div>
  );
};
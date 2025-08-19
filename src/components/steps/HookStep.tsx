import { FitnessButton } from "@/components/FitnessButton";
import { TransformationGallery } from "@/components/TransformationGallery";

interface HookStepProps {
  onNext: () => void;
}

export const HookStep = ({ onNext }: HookStepProps) => {
  return (
    <div className="flex flex-col items-center justify-center px-4 align-middle min-h-screen text-center space-y-8">
      <div className="max-w-4xl space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Trasforma il Tuo Corpo
          <br />
          <span className="text-fitness-white">in modo 100% naturale</span>
        </h1>

        <p className="text-xl md:text-2xl text-white font-medium max-w-2xl mx-auto">
          Scopri come ottenere risultati straordinari con un <span className="underline font-bold">metodo naturale</span> , <span className="underline font-bold">sano</span> e <span className="underline font-bold">sostenibile</span>.
          <br />Progettato per durare nel tempo e senza effetto yo-yo, senza frustrazione e senza rischi per la tua salute.
        </p>
      </div>

      <div className="w-full">
        <TransformationGallery />
      </div>

      <div className="space-y-4">
        <p className="text-lg text-white font-semibold">
          Questi sono solo alcuni dei risultati ottenuti dai miei clienti
        </p>

        <FitnessButton
          onClick={onNext}
          size="lg"
          className="text-xl px-12 py-8"
        >
          Scopri l'allenamento adatto al tuo tipo di fisico →
        </FitnessButton>
      </div>
    </div>
  );
};
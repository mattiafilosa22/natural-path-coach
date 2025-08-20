import { FitnessButton } from "@/components/FitnessButton";
import { ChatbotData } from "@/types/funnel";

import { SecondaryButton } from "@/components/SecondaryButton";

interface GenderStepProps {
  onNext: (data: Partial<ChatbotData>) => void;
  onBack: () => void;
}

export const GenderStep = ({ onNext, onBack }: GenderStepProps) => {
  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Qual è il tuo sesso biologico?
        </h2>
        <p className="text-base text-gray-600">
          Questo ci aiuterà a personalizzare il tuo programma
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FitnessButton
          onClick={() => onNext({ gender: 'uomo' })}
          className="h-20 text-lg"
        >
          👨 Uomo
        </FitnessButton>

        <FitnessButton
          onClick={() => onNext({ gender: 'donna' })}
          className="h-20 text-lg"
        >
          👩 Donna
        </FitnessButton>
      </div>

      <div className="flex justify-center mt-6">
        <SecondaryButton
          onClick={onBack}
          variant="light"
        >
          ← Indietro
        </SecondaryButton>
      </div>
    </div>
  );
};
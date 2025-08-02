import { FitnessButton } from "@/components/FitnessButton";
import { ChatbotData } from "@/types/funnel";

interface GenderStepProps {
  onNext: (data: Partial<ChatbotData>) => void;
  onBack: () => void;
}

export const GenderStep = ({ onNext, onBack }: GenderStepProps) => {
  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Qual è il tuo sesso biologico?
        </h2>
        <p className="text-lg text-gray-600">
          Questo ci aiuterà a personalizzare il tuo programma
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FitnessButton
          onClick={() => onNext({ gender: 'uomo' })}
          className="h-20 text-xl"
        >
          👨 Uomo
        </FitnessButton>

        <FitnessButton
          onClick={() => onNext({ gender: 'donna' })}
          className="h-20 text-xl"
        >
          👩 Donna
        </FitnessButton>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={onBack}
          className="px-6 py-2 text-gray-600 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
        >
          ← Indietro
        </button>
      </div>
    </div>
  );
};
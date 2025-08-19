import { FitnessButton } from "@/components/FitnessButton";
import { ChatbotData } from "@/types/funnel";

import { SecondaryButton } from "@/components/SecondaryButton";

interface AgeStepProps {
  onNext: (data: Partial<ChatbotData>) => void;
  onBack: () => void;
}

export const AgeStep = ({ onNext, onBack }: AgeStepProps) => {
  const ageRanges = [
    "18-25 anni",
    "25-40 anni",
    "40-50 anni",
    "51 o più anni"
  ];

  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Qual è la tua fascia d'età?
        </h2>
        <p className="text-lg text-gray-600">
          L'età influenza il tipo di allenamento più adatto a te
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ageRanges.map((range) => (
          <FitnessButton
            key={range}
            onClick={() => onNext({ ageRange: range })}
            className="h-16 text-lg"
          >
            {range}
          </FitnessButton>
        ))}
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
import { FitnessButton } from "@/components/FitnessButton";
import { ChatbotData } from "@/types/funnel";
import { TRAINING_FREQUENCIES } from "@/constants/chatbot";
import { SecondaryButton } from "@/components/SecondaryButton";

interface FrequencyStepProps {
  onNext: (data: Partial<ChatbotData>) => void;
  onBack: () => void;
}

export const FrequencyStep = ({ onNext, onBack }: FrequencyStepProps) => {
  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Quante volte a settimana puoi allenarti?
        </h2>
        <p className="text-base text-gray-600">
          La frequenza determina l'intensità del programma
        </p>
      </div>

      <div className="space-y-4">
        {TRAINING_FREQUENCIES.map((frequency) => (
          <div
            key={frequency.freq}
            className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-fitness-orange transition-colors cursor-pointer"
            onClick={() => onNext({ frequency: frequency.freq })}
          >
            <div className="flex items-center space-x-4">
              <span className="text-3xl">{frequency.icon}</span>
              <div className="text-left">
                <h3 className="text-lg font-bold text-gray-800">
                  {frequency.title}
                </h3>
                <p className="text-gray-600">{frequency.description}</p>
              </div>
            </div>
          </div>
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
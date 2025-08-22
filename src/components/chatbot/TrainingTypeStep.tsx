import { FitnessButton } from "@/components/FitnessButton";
import { ChatbotData } from "@/types/funnel";
import { TRAINING_TYPES } from "@/constants/chatbot";
import { SecondaryButton } from "@/components/SecondaryButton";

interface TrainingTypeStepProps {
  onNext: (data: Partial<ChatbotData>) => void;
  onBack: () => void;
}

export const TrainingTypeStep = ({ onNext, onBack }: TrainingTypeStepProps) => {
  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Dove ti alleni principalmente?
        </h2>
        <p className="text-base text-gray-600">
          Adatteremo gli esercizi al tuo ambiente di allenamento
        </p>
      </div>

      <div className="space-y-4">
        {TRAINING_TYPES.map((training) => (
          <div
            key={training.type}
            className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-fitness-orange transition-colors cursor-pointer"
            onClick={() => onNext({ trainingType: training.type })}
          >
            <div className="flex items-center space-x-4">
              <span className="text-3xl">{training.icon}</span>
              <div className="text-left">
                <h3 className="text-lg font-bold text-gray-800">
                  {training.title}
                </h3>
                <p className="text-gray-600">{training.description}</p>
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
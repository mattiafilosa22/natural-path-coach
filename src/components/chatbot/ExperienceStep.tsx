import { FitnessButton } from "@/components/FitnessButton";
import { ChatbotData } from "@/types/funnel";
import { EXPERIENCE_LEVELS } from "@/constants/chatbot";
import { SecondaryButton } from "@/components/SecondaryButton";

interface ExperienceStepProps {
  onNext: (data: Partial<ChatbotData>) => void;
  onBack: () => void;
}

export const ExperienceStep = ({ onNext, onBack }: ExperienceStepProps) => {
  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Qual è la tua esperienza con l'allenamento?
        </h2>
        <p className="text-base text-gray-600">
          Questo ci aiuterà a calibrare l'intensità del programma
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EXPERIENCE_LEVELS.map((exp) => (
          <div
            key={exp.level}
            className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-fitness-orange transition-colors cursor-pointer"
            onClick={() => onNext({ experience: exp.level })}
          >
            <div className="text-center space-y-3">
              <span className="text-4xl">{exp.icon}</span>
              <h3 className="text-lg font-bold text-gray-800">
                {exp.title}
              </h3>
              <p className="text-gray-600">{exp.description}</p>
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
import { FitnessButton } from "@/components/FitnessButton";
import { ChatbotData } from "@/types/funnel";

interface ExperienceStepProps {
  onNext: (data: Partial<ChatbotData>) => void;
  onBack: () => void;
}

export const ExperienceStep = ({ onNext, onBack }: ExperienceStepProps) => {
  const experienceLevels = [
    { 
      level: "nessuna" as const, 
      title: "Nessuna esperienza", 
      description: "Non hai mai fatto allenamento",
      icon: "🔰"
    },
    { 
      level: "beginner" as const, 
      title: "Beginner", 
      description: "Meno di 1 anno di esperienza",
      icon: "🌱"
    },
    { 
      level: "intermediate" as const, 
      title: "Intermediate", 
      description: "2-5 anni di esperienza",
      icon: "💪"
    },
    { 
      level: "expert" as const, 
      title: "Expert", 
      description: "5+ anni di esperienza",
      icon: "🏆"
    }
  ];

  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Qual è la tua esperienza con l'allenamento?
        </h2>
        <p className="text-lg text-gray-600">
          Questo ci aiuterà a calibrare l'intensità del programma
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experienceLevels.map((exp) => (
          <div
            key={exp.level}
            className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-fitness-orange transition-colors cursor-pointer"
            onClick={() => onNext({ experience: exp.level })}
          >
            <div className="text-center space-y-3">
              <span className="text-4xl">{exp.icon}</span>
              <h3 className="text-xl font-bold text-gray-800">
                {exp.title}
              </h3>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={onBack}
          className="px-6 py-2 text-gray-600 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
        >
          Indietro
        </button>
      </div>
    </div>
  );
};
import { FitnessButton } from "@/components/FitnessButton";
import { ChatbotData } from "@/types/funnel";

interface GoalStepProps {
  onNext: (data: Partial<ChatbotData>) => void;
  onBack: () => void;
}

export const GoalStep = ({ onNext, onBack }: GoalStepProps) => {
  const goals = [
    { 
      goal: "perdere peso", 
      title: "Perdere Peso", 
      description: "Bruciare grasso e definire il fisico",
      icon: "🔥"
    },
    { 
      goal: "aumentare massa muscolare", 
      title: "Aumentare Massa", 
      description: "Costruire muscoli e forza",
      icon: "💪"
    },
    { 
      goal: "dimagrire", 
      title: "Dimagrire", 
      description: "Ridurre la percentuale di grasso corporeo",
      icon: "⚖️"
    },
    { 
      goal: "tonificare", 
      title: "Tonificare", 
      description: "Migliorare definizione e resistenza",
      icon: "✨"
    }
  ];

  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Qual è il tuo obiettivo principale?
        </h2>
        <p className="text-lg text-gray-600">
          Su cosa vuoi concentrarti nei prossimi 6 mesi?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {goals.map((goalOption) => (
          <div
            key={goalOption.goal}
            className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-fitness-orange transition-colors cursor-pointer"
            onClick={() => onNext({ goal: goalOption.goal })}
          >
            <div className="text-center space-y-3">
              <span className="text-4xl">{goalOption.icon}</span>
              <h3 className="text-xl font-bold text-gray-800">
                {goalOption.title}
              </h3>
              <p className="text-gray-600">{goalOption.description}</p>
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
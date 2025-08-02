import { FitnessButton } from "@/components/FitnessButton";
import { ChatbotData } from "@/types/funnel";

interface FrequencyStepProps {
  onNext: (data: Partial<ChatbotData>) => void;
  onBack: () => void;
}

export const FrequencyStep = ({ onNext, onBack }: FrequencyStepProps) => {
  const frequencies = [
    { 
      freq: "1-2 allenamenti a settimana", 
      title: "1-2 volte", 
      description: "Ideale per chi inizia o ha poco tempo",
      icon: "⏰"
    },
    { 
      freq: "3-6 allenamenti a settimana", 
      title: "3-6 volte", 
      description: "Frequenza ottimale per risultati costanti",
      icon: "🔥"
    },
    { 
      freq: "7 (tutta la settimana)", 
      title: "Tutti i giorni", 
      description: "Massima dedizione e risultati rapidi",
      icon: "⚡"
    }
  ];

  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Quante volte a settimana puoi allenarti?
        </h2>
        <p className="text-lg text-gray-600">
          La frequenza determina l'intensità del programma
        </p>
      </div>

      <div className="space-y-4">
        {frequencies.map((frequency) => (
          <div
            key={frequency.freq}
            className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-fitness-orange transition-colors cursor-pointer"
            onClick={() => onNext({ frequency: frequency.freq })}
          >
            <div className="flex items-center space-x-4">
              <span className="text-3xl">{frequency.icon}</span>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-800">
                  {frequency.title}
                </h3>
                <p className="text-gray-600">{frequency.description}</p>
              </div>
            </div>
          </div>
        ))}
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
import { FitnessButton } from "@/components/FitnessButton";
import { ChatbotData } from "@/types/funnel";

interface BodyTypeStepProps {
  gender?: 'uomo' | 'donna';
  onNext: (data: Partial<ChatbotData>) => void;
}

export const BodyTypeStep = ({ gender, onNext }: BodyTypeStepProps) => {
  const maleBodyTypes = [
    { 
      type: "mesomorfo", 
      description: "Fisico atletico naturale, facilità a costruire muscoli",
      icon: "💪"
    },
    { 
      type: "skinny fat", 
      description: "Magro ma con grasso localizzato, poca massa muscolare",
      icon: "🤷‍♂️"
    }
  ];

  const femaleBodyTypes = [
    { 
      type: "ginoide", 
      description: "Accumulo di grasso su fianchi e cosce",
      icon: "🍐"
    },
    { 
      type: "grassa", 
      description: "Sovrappeso generalizzato",
      icon: "⚖️"
    },
    { 
      type: "magra", 
      description: "Corporatura esile, difficoltà ad aumentare peso",
      icon: "🌿"
    }
  ];

  const bodyTypes = gender === 'uomo' ? maleBodyTypes : femaleBodyTypes;

  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Qual è il tuo tipo di fisico?
        </h2>
        <p className="text-lg text-gray-600">
          Seleziona quello che ti rappresenta di più
        </p>
      </div>

      <div className="space-y-4">
        {bodyTypes.map((bodyType) => (
          <div
            key={bodyType.type}
            className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-fitness-orange transition-colors cursor-pointer"
            onClick={() => onNext({ bodyType: bodyType.type })}
          >
            <div className="flex items-center space-x-4">
              <span className="text-3xl">{bodyType.icon}</span>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-800 capitalize">
                  {bodyType.type}
                </h3>
                <p className="text-gray-600">{bodyType.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
import { FitnessButton } from "@/components/FitnessButton";
import { ChatbotData } from "@/types/funnel";
import mesomorphMale from "@/assets/body-types/mesomorph-male.jpg";
import skinnyFatMale from "@/assets/body-types/skinny-fat-male.jpg";
import gynoidFemale from "@/assets/body-types/gynoid-female.jpg";
import overweightFemale from "@/assets/body-types/overweight-female.jpg";
import thinFemale from "@/assets/body-types/thin-female.jpg";

interface BodyTypeStepProps {
  gender?: 'uomo' | 'donna';
  onNext: (data: Partial<ChatbotData>) => void;
  onBack: () => void;
}

export const BodyTypeStep = ({ gender, onNext, onBack }: BodyTypeStepProps) => {
  const maleBodyTypes = [
    { 
      type: "mesomorfo", 
      description: "Fisico atletico naturale, facilità a costruire muscoli",
      image: mesomorphMale
    },
    { 
      type: "skinny fat", 
      description: "Magro ma con grasso localizzato, poca massa muscolare",
      image: skinnyFatMale
    }
  ];

  const femaleBodyTypes = [
    { 
      type: "ginoide", 
      description: "Accumulo di grasso su fianchi e cosce",
      image: gynoidFemale
    },
    { 
      type: "grassa", 
      description: "Sovrappeso generalizzato",
      image: overweightFemale
    },
    { 
      type: "magra", 
      description: "Corporatura esile, difficoltà ad aumentare peso",
      image: thinFemale
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

      <div className="grid md:grid-cols-2 gap-6">
        {bodyTypes.map((bodyType) => (
          <div
            key={bodyType.type}
            className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-fitness-orange hover:shadow-lg transition-all duration-300 cursor-pointer group"
            onClick={() => onNext({ bodyType: bodyType.type })}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src={bodyType.image} 
                alt={bodyType.type}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 capitalize mb-2">
                {bodyType.type}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{bodyType.description}</p>
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
import { FitnessButton } from "@/components/FitnessButton";
import { ChatbotData } from "@/types/funnel";
import { Gender } from "@/constants/chatbot";
import { getBodyTypesByGender } from "@/config/bodyTypes";
import { SecondaryButton } from "@/components/SecondaryButton";

interface BodyTypeStepProps {
  gender?: Gender;
  onNext: (data: Partial<ChatbotData>) => void;
  onBack: () => void;
}

export const BodyTypeStep = ({ gender, onNext, onBack }: BodyTypeStepProps) => {
  const bodyTypes = getBodyTypesByGender(gender);

  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Qual è il tuo tipo di fisico?
        </h2>
        <p className="text-base text-gray-600">
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
              <h3 className="text-lg font-bold text-gray-800 capitalize mb-2">
                {bodyType.type}
              </h3>
              <p className="text-fitness-orange text-sm font-medium mb-3">
                {bodyType.shortDescription}
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                {bodyType.characteristics.map((characteristic, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-fitness-orange mr-3 flex-shrink-0 mt-0.5">•</span>
                    <span className="leading-relaxed">{characteristic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <SecondaryButton onClick={onBack} variant="light">
          ← Indietro
        </SecondaryButton>
      </div>
    </div>
  );
};

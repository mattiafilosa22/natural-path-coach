import { FitnessButton } from "@/components/FitnessButton";
import { ChatbotData } from "@/types/funnel";
import mesomorphMale from "@/assets/body-types/mesomorph-male.jpg";
import skinnyFatMale from "@/assets/body-types/skinny-fat-male.jpg";
import gynoidFemale from "@/assets/body-types/gynoid-female.jpg";
import overweightFemale from "@/assets/body-types/overweight-female.jpg";
import thinFemale from "@/assets/body-types/thin-female.jpg";

import { SecondaryButton } from "@/components/SecondaryButton";

interface BodyTypeStepProps {
  gender?: "uomo" | "donna";
  onNext: (data: Partial<ChatbotData>) => void;
  onBack: () => void;
}

export const BodyTypeStep = ({ gender, onNext, onBack }: BodyTypeStepProps) => {
  const maleBodyTypes = [
    {
      type: "mesomorfo",
      shortDescription: "Fisico atletico e naturalmente muscoloso",
      characteristics: [
        "Bassa percentuale di massa grassa",
        "Elevata percentuale di massa muscolare",
        "Spalle larghe, vita e fianchi stretti",
        "Ottima struttura scheletrica"
      ],
      image: mesomorphMale,
    },
    {
      type: "ectomorfo",
      shortDescription: "Fisico snello e longilinea",
      characteristics: [
        "Struttura esile con arti lunghi",
        "Difficoltà ad aumentare massa",
        "Spalle strette e metabolismo veloce",
        "Naturalmente magro"
      ],
      image: mesomorphMale,
    },
    {
      type: "endomorfo",
      shortDescription: "Fisico robusto con tendenza ad ingrassare",
      characteristics: [
        "Struttura rotondeggiante",
        "Spalle strette rispetto ai fianchi",
        "Alta percentuale di massa grassa",
        "Tessuti molli e struttura ossea robusta"
      ],
      image: mesomorphMale,
    },
    {
      type: "skinny-fat",
      shortDescription: "Magro ma con poca definizione muscolare",
      characteristics: [
        "Peso normale ma grasso alto",
        "Bassa massa muscolare",
        "Aspetto magro ma poco definito",
        "Metabolismo rallentato"
      ],
      image: skinnyFatMale,
    },
  ];

  const femaleBodyTypes = [
    {
      type: "ginoide",
      shortDescription: "Corpo a pera - accumulo nella parte inferiore",
      characteristics: [
        "Distribuzione del grasso predominante da ombelico in giù",
        "Fianchi, glutei e cosce sempre più ampi rispetto alla parte superiore",
        "Silhouette a pera con parte inferiore più voluminosa",
        "Maggiore tendenza a cellulite, ritenzione idrica e gambe pesanti",
        "Profilo estrogenico con sensibilità ai recettori nella parte inferiore",
        "Tendenza ad accumulare massa muscolare su cosce e glutei"
      ],
      image: gynoidFemale,
    },
    {
      type: "androide",
      shortDescription: "Corpo a mela - accumulo nella parte superiore",
      characteristics: [
        "Distribuzione del grasso su addome, petto, schiena e braccia",
        "Gambe tendono a rimanere più magre",
        "Forma a 'mela' o 'triangolo inverso' con spalle più larghe",
        "Maggiore circonferenza vita e fianchi",
        "Punto vita meno definito rispetto ad altri tipi di corporatura",
        "Gambe appaiono più snelle e sottili rispetto al resto del corpo"
      ],
      image: overweightFemale,
    },
  ];

  const bodyTypes = gender === "uomo" ? maleBodyTypes : femaleBodyTypes;

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

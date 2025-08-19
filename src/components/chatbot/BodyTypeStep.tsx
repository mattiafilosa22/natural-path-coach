import { FitnessButton } from "@/components/FitnessButton";
import { ChatbotData } from "@/types/funnel";
import mesomorphMale from "@/assets/body-types/mesomorph-male.jpg";
import skinnyFatMale from "@/assets/body-types/skinny-fat-male.jpg";
import gynoidFemale from "@/assets/body-types/gynoid-female.jpg";
import overweightFemale from "@/assets/body-types/overweight-female.jpg";
import thinFemale from "@/assets/body-types/thin-female.jpg";

interface BodyTypeStepProps {
  gender?: "uomo" | "donna";
  onNext: (data: Partial<ChatbotData>) => void;
  onBack: () => void;
}

export const BodyTypeStep = ({ gender, onNext, onBack }: BodyTypeStepProps) => {
  const maleBodyTypes = [
    {
      type: "mesomorfo",
      description:
        "Bassa percentuale di massa grassa, elevata percentuale di massa muscolare, ottima struttura scheletrica con spalle larga, vita e fianchi stretti",
      image: mesomorphMale,
    },
    {
      type: "Ectomorfo",
      description:
        "Struttura esile e longilinea, con difficoltà ad aumentare massa muscolare e grasso corporeo. Arti lunghi e sottili, spalle strette e metabolismo veloce",
      image: mesomorphMale,
    },
    {
      type: "Endomorfo",
      description:
        "Struttura rotondeggiante, spalle strette rispetto ai fianchi, tessuti molli, alta percentuale di massa grassa. Struttura ossea robusta",
      image: mesomorphMale,
    },
    {
      type: "skinny fat",
      description:
        "Magra o normopeso, ma una percentuale di grasso relativamente alta e una bassa massa muscolare: aspetto magro ma poco definito",
      image: skinnyFatMale,
    },
  ];

  const femaleBodyTypes = [
    {
      type: "ginoide",
      description:
        "Comunemente detta a pera caratterizzata da una maggiore accumulazione di grasso nella parte inferiore del corpo, in particolare fianchi, glutei e cosce. Caratteristiche: - distribuzione del grasso_ predominante nella parte inferiore del corpo da ombelico in giu, con fianchi, glutei e cosce sempre più ampi rispetto alla parte superiore. Forma del corpo: la silhoutte ricorda una pera con una parte inferiore più voluminosa rispetto alla parte superiore. Predisposizione ad inestetismi: maggiore tendenza alla cellulite, ritenzione idrica e gambi pesanti. Aspetti ormonali: profilo estrogenico con maggiore sensibilità ai recettori ormonali nella parte inferiore del corpo. Muscolatura: tendenza ad accumulare massa muscolare su cosce e glutei, a volte anche sulla parte anteriore della cosce",
      image: gynoidFemale,
    },
    {
      type: "Androide",
      description: "Caratterizzata da una distribuzione del grasso corporeo che tende ad accumularsi principalmente nella parte superiore del corpo, come addome, petto, schiena e braccia, mentre le gambe tendono a rimanere più magre. QQuesto tipo di conformazione è spesso associato alla forma di una mela, da qui il termine 'corpo a mela'. Caratteristiche distribuzione del grasso: accumulo di grasso si concentra nella parte superiore con una maggiore circonferenza vita e fianchi, con meno grasso su gambe e glutei. Forma del corpo: il corpo più apparire più a 'mela' o a 'triangolo inverso' con spalle più larghe e fianchi più stretti. Punto vita: tende ad essere meno definito rispetto ad altri tipi di corporatura. Gambe: possono apparire più snelle e sottili rispetto al resto del corpo.",
      image: overweightFemale,
    },
  ];

  const bodyTypes = gender === "uomo" ? maleBodyTypes : femaleBodyTypes;

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
              <p className="text-gray-600 text-sm leading-relaxed">
                {bodyType.description}
              </p>
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

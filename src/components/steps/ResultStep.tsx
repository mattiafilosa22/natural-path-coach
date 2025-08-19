import { useState } from "react";
import { FitnessButton } from "@/components/FitnessButton";
import { SecondaryButton } from "@/components/SecondaryButton";
import { ChatbotData } from "@/types/funnel";
import { generateObjective, generateSolution } from "@/hooks/generate-response";

interface ResultStepProps {
  chatbotData: ChatbotData;
  onNext: () => void;
  onBack: () => void;
}

export const ResultStep = ({
  chatbotData,
  onNext,
  onBack,
}: ResultStepProps) => {
  const [showCalendly, setShowCalendly] = useState(false);

  const generatePersonalizedResult = () => {
    const { gender, ageRange, bodyType, experience, goal } = chatbotData;
    const objective = generateObjective(bodyType);
    const solution = generateSolution(bodyType);

    return (
      <div className="bg-gradient-to-br from-fitness-orange/10 to-fitness-orange/5 rounded-2xl p-8">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-4">
          <span dangerouslySetInnerHTML={{ __html: objective }} />
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
          <span dangerouslySetInnerHTML={{ __html: solution }} />
        </p>
      </div>
    );
  };

  const handleCalendlyClick = () => {
    setShowCalendly(true);
    // Here you would integrate with Calendly
    window.open("https://calendly.com/your-calendar", "_blank");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-3xl w-full text-center space-y-8">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Il Tuo Programma Personalizzato è Pronto!
          </h1>
          {generatePersonalizedResult()}
        </div>

        {!showCalendly ? (
          <div className="space-y-4">
            <p className="text-xl font-semibold text-gray-700">
              Prenota ora la tua{" "}
              <span className="text-fitness-orange font-bold">
                consulenza gratuita!
              </span>
              {/* {" "} */}
              {/* per ricevere il{" "}
              <span className="text-fitness-orange font-bold">programma</span>! */}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <SecondaryButton onClick={onBack} variant="light" size="lg">
                ← Indietro
              </SecondaryButton>

              <FitnessButton
                onClick={handleCalendlyClick}
                size="lg"
                className="text-xl px-6 py-6 sm:px-12 sm:py-8"
              >
                Prenota Consulenza Gratuita
              </FitnessButton>
            </div>
          </div>
        ) : (
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-green-700 mb-4">
              🎯 Trasformazione Garantita
            </h3>
            <p className="text-lg text-green-600">
              Ti abbiamo reindirizzato a{" "}
              <span className="font-bold">Calendly</span> per prenotare la tua{" "}
              <span className="font-bold">consulenza gratuita</span>. Riceverai
              tutti i dettagli del{" "}
              <span className="font-bold">programma via email</span> dopo la
              prenotazione.
            </p>
            <FitnessButton onClick={onNext} className="mt-6">
              Continua
            </FitnessButton>
          </div>
        )}
      </div>
    </div>
  );
};

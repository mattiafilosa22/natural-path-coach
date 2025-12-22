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

  const generatePersonalizedResult = () => {
    const { gender, ageRange, bodyType, experience, goal, trainingType } = chatbotData;
    const objective = generateObjective(bodyType, goal, experience, trainingType);
    const solution = generateSolution(bodyType, goal, experience, trainingType);

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
    // Here you would integrate with Calendly
    window.open("https://calendly.com/marcodelmoro50/60min", "_blank");
    // Go directly to thank you page
    onNext();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-3xl w-full text-center space-y-8">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Ecco la strategia adatta a te!
          </h1>
          {generatePersonalizedResult()}
        </div>

        <div className="space-y-4">
          <p className="text-xl font-semibold text-gray-700">
            Prenota ora la tua{" "}
            <span className="text-fitness-orange font-bold">
              consulenza gratuita!
            </span>
          </p>
          <div className="flex flex-col-reverse sm:flex-row gap-4 items-center justify-center">
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
      </div>
    </div>
  );
};

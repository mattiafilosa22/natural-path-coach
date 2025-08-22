import { useState } from "react";
import { ChatbotData, ChatbotStep } from "@/types/funnel";
import { getNextStep, getPreviousStep } from "@/utils/navigation";
import { GenderStep } from "./GenderStep";
import { AgeStep } from "./AgeStep";
import { BodyTypeStep } from "./BodyTypeStep";
import { ExperienceStep } from "./ExperienceStep";
import { TrainingTypeStep } from "./TrainingTypeStep";
import { FrequencyStep } from "./FrequencyStep";
import { GoalStep } from "./GoalStep";

interface ChatbotContainerProps {
  onComplete: (data: ChatbotData) => void;
  onBack: () => void;
}

export const ChatbotContainer = ({ onComplete, onBack }: ChatbotContainerProps) => {
  const [currentStep, setCurrentStep] = useState<ChatbotStep>('gender');
  const [data, setData] = useState<ChatbotData>({});

  const handleNext = (stepData: Partial<ChatbotData>, nextStep?: ChatbotStep) => {
    const updatedData = { ...data, ...stepData };
    setData(updatedData);

    if (nextStep) {
      setCurrentStep(nextStep);
    } else {
      const nextStepResult = getNextStep(currentStep, stepData);
      if (nextStepResult) {
        setCurrentStep(nextStepResult);
      } else {
        // Completamento del chatbot
        onComplete(updatedData);
      }
    }
  };

  const handleBack = () => {
    const previousStep = getPreviousStep(currentStep, data);
    if (previousStep) {
      setCurrentStep(previousStep);
    } else {
      // Se siamo al primo step del chatbot, torniamo al step precedente del funnel
      onBack();
    }
  };

  const stepComponents = {
    gender: <GenderStep onNext={handleNext} onBack={handleBack} />,
    age: <AgeStep onNext={handleNext} onBack={handleBack} />,
    bodyType: <BodyTypeStep gender={data.gender} onNext={handleNext} onBack={handleBack} />,
    experience: <ExperienceStep onNext={handleNext} onBack={handleBack} />,
    trainingType: <TrainingTypeStep onNext={handleNext} onBack={handleBack} />,
    frequency: <FrequencyStep onNext={handleNext} onBack={handleBack} />,
    goal: <GoalStep onNext={handleNext} onBack={handleBack} />
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full space-y-6">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-fitness-orange h-2 rounded-full transition-all duration-300"
            style={{
              width: `${(Object.keys(stepComponents).indexOf(currentStep) + 1) / Object.keys(stepComponents).length * 100}%`
            }}
          />
        </div>

        {stepComponents[currentStep]}
      </div>
    </div>
  );
};
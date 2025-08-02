import { useState } from "react";
import { ChatbotData, ChatbotStep } from "@/types/funnel";
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

  const updateData = (newData: Partial<ChatbotData>) => {
    setData(prev => ({ ...prev, ...newData }));
  };

  const handleNext = (stepData: Partial<ChatbotData>, nextStep?: ChatbotStep) => {
    const updatedData = { ...data, ...stepData };
    setData(updatedData);

    if (nextStep) {
      setCurrentStep(nextStep);
    } else {
      // Determine next step based on logic
      switch (currentStep) {
        case 'gender':
          setCurrentStep('age');
          break;
        case 'age':
          setCurrentStep('bodyType');
          break;
        case 'bodyType':
          setCurrentStep('experience');
          break;
        case 'experience':
          if (stepData.experience === 'nessuna') {
            setCurrentStep('goal');
          } else {
            setCurrentStep('trainingType');
          }
          break;
        case 'trainingType':
          setCurrentStep('frequency');
          break;
        case 'frequency':
          setCurrentStep('goal');
          break;
        case 'goal':
          onComplete(updatedData);
          break;
      }
    }
  };

  const handleBack = () => {
    switch (currentStep) {
      case 'age':
        setCurrentStep('gender');
        break;
      case 'bodyType':
        setCurrentStep('age');
        break;
      case 'experience':
        setCurrentStep('bodyType');
        break;
      case 'trainingType':
        setCurrentStep('experience');
        break;
      case 'frequency':
        setCurrentStep('trainingType');
        break;
      case 'goal':
        if (data.experience === 'nessuna') {
          setCurrentStep('experience');
        } else {
          setCurrentStep('frequency');
        }
        break;
      case 'gender':
        // Se siamo al primo step del chatbot, torniamo al step precedente del funnel
        onBack();
        break;
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
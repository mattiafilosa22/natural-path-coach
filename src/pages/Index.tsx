import { useState } from "react";
import { ChatbotData, FunnelStep } from "@/types/funnel";
import { BackgroundLayout } from "@/components/BackgroundLayout";
import { HookStep } from "@/components/steps/HookStep";
import { TargetingStep } from "@/components/steps/TargetingStep";
import { PromiseStep } from "@/components/steps/PromiseStep";
import { ChatbotContainer } from "@/components/chatbot/ChatbotContainer";
import { ResultStep } from "@/components/steps/ResultStep";
import { ThankYouStep } from "@/components/steps/ThankYouStep";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<FunnelStep>('hook');
  const [chatbotData, setChatbotData] = useState<ChatbotData>({});

  const handleStepNext = () => {
    switch (currentStep) {
      case 'hook':
        setCurrentStep('targeting');
        break;
      case 'targeting':
        setCurrentStep('promise');
        break;
      case 'promise':
        setCurrentStep('chatbot');
        break;
      case 'result':
        setCurrentStep('thankyou');
        break;
    }
  };

  const handleChatbotComplete = (data: ChatbotData) => {
    setChatbotData(data);
    setCurrentStep('result');
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'hook':
        return <HookStep onNext={handleStepNext} />;
      case 'targeting':
        return <TargetingStep onNext={handleStepNext} />;
      case 'promise':
        return <PromiseStep onNext={handleStepNext} />;
      case 'chatbot':
        return <ChatbotContainer onComplete={handleChatbotComplete} />;
      case 'result':
        return <ResultStep chatbotData={chatbotData} onNext={handleStepNext} />;
      case 'thankyou':
        return <ThankYouStep />;
      default:
        return <HookStep onNext={handleStepNext} />;
    }
  };

  // Chatbot and result steps have their own background
  if (currentStep === 'chatbot' || currentStep === 'result' || currentStep === 'thankyou') {
    return renderCurrentStep();
  }

  return (
    <BackgroundLayout>
      {renderCurrentStep()}
    </BackgroundLayout>
  );
};

export default Index;

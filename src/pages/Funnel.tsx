import { useState, useEffect } from "react";
import { ChatbotData, FunnelStep } from "@/types/funnel";
import { BackgroundLayout } from "@/components/BackgroundLayout";
import { HookStep } from "@/components/steps/HookStep";
import { TargetingStep } from "@/components/steps/TargetingStep";
import { PromiseStep } from "@/components/steps/PromiseStep";
import { ChatbotContainer } from "@/components/chatbot/ChatbotContainer";
import { ResultStep } from "@/components/steps/ResultStep";
import { ThankYouStep } from "@/components/steps/ThankYouStep";
import SEOMeta from "@/components/SEOMeta";
import { SITE_CONFIG } from "@/config/site";
import AccessibleBreadcrumb from "@/components/AccessibleBreadcrumb";

const Funnel = () => {
  const [currentStep, setCurrentStep] = useState<FunnelStep>('hook');
  const [chatbotData, setChatbotData] = useState<ChatbotData>({});

  // SEO meta data for funnel page
  useEffect(() => {
    const stepTitles = {
      hook: 'Scopri il Metodo RECOMP 365',
      targeting: 'Identifica i Tuoi Obiettivi',
      promise: 'Il Tuo Percorso di Trasformazione',
      chatbot: 'Consulenza Personalizzata',
      result: 'Il Tuo Piano Personalizzato',
      thankyou: 'Grazie per la Fiducia'
    };

    document.title = stepTitles[currentStep];
  }, [currentStep]);

  const getBreadcrumbItems = () => {
    const baseItems = [
      { label: 'Home', href: '/' },
      { label: 'Percorso RECOMP 365', href: '/funnel' }
    ];

    const stepLabels = {
      hook: 'Scopri il Metodo',
      targeting: 'I Tuoi Obiettivi',
      promise: 'La Promessa',
      chatbot: 'Consulenza',
      result: 'Piano Personalizzato',
      thankyou: 'Conferma'
    };

    return [...baseItems, { label: stepLabels[currentStep], current: true }];
  };

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

  const handleStepBack = () => {
    switch (currentStep) {
      case 'targeting':
        setCurrentStep('hook');
        break;
      case 'promise':
        setCurrentStep('targeting');
        break;
      case 'chatbot':
        setCurrentStep('promise');
        break;
      case 'result':
        setCurrentStep('chatbot');
        break;
      case 'thankyou':
        setCurrentStep('result');
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
        return <TargetingStep onNext={handleStepNext} onBack={handleStepBack} />;
      case 'promise':
        return <PromiseStep onNext={handleStepNext} onBack={handleStepBack} />;
      case 'chatbot':
        return <ChatbotContainer onComplete={handleChatbotComplete} onBack={handleStepBack} />;
      case 'result':
        return <ResultStep chatbotData={chatbotData} onNext={handleStepNext} onBack={handleStepBack} />;
      case 'thankyou':
        return <ThankYouStep />;
      default:
        return <HookStep onNext={handleStepNext} />;
    }
  };

  // Chatbot and result steps have their own background
  if (currentStep === 'chatbot' || currentStep === 'result' || currentStep === 'thankyou') {
    return (
      <>
        <SEOMeta
          title={`${currentStep === 'chatbot' ? 'Consulenza Personalizzata' : currentStep === 'result' ? 'Il Tuo Piano Personalizzato' : 'Grazie per la Fiducia'}`}
          description={`${currentStep === 'chatbot' ? 'Rispondi a poche domande per ricevere una consulenza personalizzata' : currentStep === 'result' ? 'Ecco il tuo piano di allenamento personalizzato' : 'Grazie per aver scelto il metodo RECOMP 365'}`}
          noindex={true}
        />
        <main role="main">
          {/* <AccessibleBreadcrumb
            items={getBreadcrumbItems()}
            className="p-4"
          /> */}
          {renderCurrentStep()}
        </main>
      </>
    );
  }

  return (
    <>
      <SEOMeta
        title={`${currentStep === 'hook' ? 'Scopri il Metodo RECOMP 365' : currentStep === 'targeting' ? 'Identifica i Tuoi Obiettivi' : 'Il Tuo Percorso di Trasformazione'}`}
        description={`${currentStep === 'hook' ? 'Scopri il metodo rivoluzionario per trasformare il tuo corpo naturalmente' : currentStep === 'targeting' ? 'Identifica i tuoi obiettivi di fitness e trasformazione corporea' : 'Inizia il tuo percorso di trasformazione con il metodo RECOMP 365'}`}
        canonicalUrl={`${SITE_CONFIG.url}/funnel`}
      />
      <main role="main">
        <BackgroundLayout imagePosition="center 20%">
          {/* <AccessibleBreadcrumb
            items={getBreadcrumbItems()}
            className="p-4 text-white"
          /> */}
          {renderCurrentStep()}
        </BackgroundLayout>
      </main>
    </>
  );
};

export default Funnel;

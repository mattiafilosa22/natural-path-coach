// Componente wrapper per gli step del chatbot

import React from "react";
import { SecondaryButton } from "@/components/SecondaryButton";
import { CHATBOT_TEXTS, CSS_CLASSES } from "@/constants/ui";

interface ChatbotStepWrapperProps {
  title: string;
  description: string;
  onBack: () => void;
  children: React.ReactNode;
}

export const ChatbotStepWrapper = ({ 
  title, 
  description, 
  onBack, 
  children 
}: ChatbotStepWrapperProps) => {
  return (
    <div className={CSS_CLASSES.CONTAINER}>
      <div className={CSS_CLASSES.HEADER}>
        <h2 className={CSS_CLASSES.TITLE}>
          {title}
        </h2>
        <p className={CSS_CLASSES.DESCRIPTION}>
          {description}
        </p>
      </div>

      {children}

      <div className={CSS_CLASSES.BACK_BUTTON_CONTAINER}>
        <SecondaryButton
          onClick={onBack}
          variant="light"
        >
          {CHATBOT_TEXTS.COMMON.BACK_BUTTON}
        </SecondaryButton>
      </div>
    </div>
  );
};

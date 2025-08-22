import { FitnessButton } from "@/components/FitnessButton";
import { ChatbotData } from "@/types/funnel";
import { Gender } from "@/constants/chatbot";
import { CHATBOT_TEXTS, CSS_CLASSES } from "@/constants/ui";
import { ChatbotStepWrapper } from "./ChatbotStepWrapper";

interface GenderStepProps {
  onNext: (data: Partial<ChatbotData>) => void;
  onBack: () => void;
}

export const GenderStep = ({ onNext, onBack }: GenderStepProps) => {
  return (
    <ChatbotStepWrapper
      title={CHATBOT_TEXTS.GENDER.TITLE}
      description={CHATBOT_TEXTS.GENDER.DESCRIPTION}
      onBack={onBack}
    >
      <div className={CSS_CLASSES.GRID_2_COLS}>
        <FitnessButton
          onClick={() => onNext({ gender: Gender.UOMO })}
          className={CSS_CLASSES.FITNESS_BUTTON_LARGE}
        >
          {CHATBOT_TEXTS.GENDER.OPTIONS.MALE}
        </FitnessButton>

        <FitnessButton
          onClick={() => onNext({ gender: Gender.DONNA })}
          className={CSS_CLASSES.FITNESS_BUTTON_LARGE}
        >
          {CHATBOT_TEXTS.GENDER.OPTIONS.FEMALE}
        </FitnessButton>
      </div>
    </ChatbotStepWrapper>
  );
};
import { FitnessButton } from "@/components/FitnessButton";
import { ChatbotData } from "@/types/funnel";
import { AGE_RANGES } from "@/constants/chatbot";
import { CHATBOT_TEXTS, CSS_CLASSES } from "@/constants/ui";
import { ChatbotStepWrapper } from "./ChatbotStepWrapper";

interface AgeStepProps {
  onNext: (data: Partial<ChatbotData>) => void;
  onBack: () => void;
}

export const AgeStep = ({ onNext, onBack }: AgeStepProps) => {
  return (
    <ChatbotStepWrapper
      title={CHATBOT_TEXTS.AGE.TITLE}
      description={CHATBOT_TEXTS.AGE.DESCRIPTION}
      onBack={onBack}
    >
      <div className={CSS_CLASSES.GRID_2_COLS}>
        {AGE_RANGES.map((range) => (
          <FitnessButton
            key={range}
            onClick={() => onNext({ ageRange: range })}
            className={CSS_CLASSES.FITNESS_BUTTON_MEDIUM}
          >
            {range}
          </FitnessButton>
        ))}
      </div>
    </ChatbotStepWrapper>
  );
};
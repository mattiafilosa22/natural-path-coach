// Utility per la navigazione degli step del chatbot

import { ChatbotStep, ChatbotData } from "@/types/funnel";
import { ExperienceLevel } from "@/constants/chatbot";

/**
 * Determina il prossimo step del chatbot basato sullo step corrente e i dati
 */
export const getNextStep = (
  currentStep: ChatbotStep, 
  stepData: Partial<ChatbotData>
): ChatbotStep | null => {
  switch (currentStep) {
    case 'gender':
      return 'age';
    case 'age':
      return 'bodyType';
    case 'bodyType':
      return 'experience';
    case 'experience':
      return stepData.experience === ExperienceLevel.NESSUNA ? 'goal' : 'trainingType';
    case 'trainingType':
      return 'frequency';
    case 'frequency':
      return 'goal';
    case 'goal':
      return null; // Completamento del chatbot
    default:
      return null;
  }
};

/**
 * Determina lo step precedente del chatbot
 */
export const getPreviousStep = (
  currentStep: ChatbotStep,
  data: ChatbotData
): ChatbotStep | null => {
  switch (currentStep) {
    case 'age':
      return 'gender';
    case 'bodyType':
      return 'age';
    case 'experience':
      return 'bodyType';
    case 'trainingType':
      return 'experience';
    case 'frequency':
      return 'trainingType';
    case 'goal':
      return data.experience === ExperienceLevel.NESSUNA ? 'experience' : 'frequency';
    case 'gender':
      return null; // Torna al funnel precedente
    default:
      return null;
  }
};

/**
 * Ottiene il progresso percentuale dello step corrente
 */
export const getStepProgress = (currentStep: ChatbotStep): number => {
  const stepOrder: ChatbotStep[] = [
    'gender', 'age', 'bodyType', 'experience', 'trainingType', 'frequency', 'goal'
  ];
  
  const currentIndex = stepOrder.indexOf(currentStep);
  return currentIndex >= 0 ? ((currentIndex + 1) / stepOrder.length) * 100 : 0;
};

/**
 * Verifica se uno step è valido
 */
export const isValidStep = (step: string): step is ChatbotStep => {
  const validSteps: ChatbotStep[] = [
    'gender', 'age', 'bodyType', 'experience', 'trainingType', 'frequency', 'goal'
  ];
  return validSteps.includes(step as ChatbotStep);
};

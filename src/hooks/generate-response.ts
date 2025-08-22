import result from '../components/chatbot/result/result.json';
import { formatObjectiveText, formatSolutionText } from '@/utils/text';

// Interfaccia per la struttura del JSON
interface BodyTypeGoalVariant {
  objective: string;
  solution: string;
}

interface BodyTypeGoal {
  objective: string;
  solution: string;
  experience?: {
    [key: string]: BodyTypeGoalVariant;
  };
  trainingType?: {
    [key: string]: BodyTypeGoalVariant;
  };
}

interface BodyTypeData {
  type: string;
  objective: string;
  solution: string;
  goals?: {
    [key: string]: BodyTypeGoal;
  };
}

interface ResultData {
  bodyTypes: BodyTypeData[];
}

export const generateObjective = (type: string, goal?: string, experience?: string, trainingType?: string): string => {
  const typedResult = result as ResultData;
  const bodyTypeData = typedResult.bodyTypes.find(bodyType => bodyType.type === type);
  if (!bodyTypeData) return "";

  // Se è specificato un goal e esiste una variante specifica
  if (goal && bodyTypeData.goals && bodyTypeData.goals[goal]) {
    const goalData = bodyTypeData.goals[goal];

    // Prova prima con experience se specificata
    if (experience && goalData.experience && goalData.experience[experience]) {
      const objective = goalData.experience[experience].objective;
      return formatObjectiveText(objective);
    }

    // Poi prova con trainingType se specificato
    if (trainingType && goalData.trainingType && goalData.trainingType[trainingType]) {
      const objective = goalData.trainingType[trainingType].objective;
      return formatObjectiveText(objective);
    }

    // Altrimenti usa l'obiettivo del goal
    const objective = goalData.objective;
    return formatObjectiveText(objective);
  }

  // Altrimenti usa l'obiettivo di default
  const objective = bodyTypeData.objective;
  return formatObjectiveText(objective);
}

export const generateSolution = (type: string, goal?: string, experience?: string, trainingType?: string): string => {
  const typedResult = result as ResultData;
  const bodyTypeData = typedResult.bodyTypes.find(bodyType => bodyType.type === type);
  if (!bodyTypeData) return "";

  // Se è specificato un goal e esiste una variante specifica
  if (goal && bodyTypeData.goals && bodyTypeData.goals[goal]) {
    const goalData = bodyTypeData.goals[goal];

    // Prova prima con experience se specificata
    if (experience && goalData.experience && goalData.experience[experience]) {
      const solution = goalData.experience[experience].solution;
      return formatSolutionText(solution);
    }

    // Poi prova con trainingType se specificato
    if (trainingType && goalData.trainingType && goalData.trainingType[trainingType]) {
      const solution = goalData.trainingType[trainingType].solution;
      return formatSolutionText(solution);
    }

    // Altrimenti usa la soluzione del goal
    const solution = goalData.solution;
    return formatSolutionText(solution);
  }

  // Altrimenti usa la soluzione di default
  const solution = bodyTypeData.solution;
  return formatSolutionText(solution);
}
import result from '../components/chatbot/result/result.json';
import { formatObjectiveText, formatSolutionText } from '@/utils/text';

// Interfaccia per la struttura del JSON
interface BodyTypeGoal {
  objective: string;
  solution: string;
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

export const generateObjective = (type: string, goal?: string): string => {
  const typedResult = result as ResultData;
  const bodyTypeData = typedResult.bodyTypes.find(bodyType => bodyType.type === type);
  if (!bodyTypeData) return "";

  // Se è specificato un goal e esiste una variante specifica, usala
  if (goal && bodyTypeData.goals && bodyTypeData.goals[goal]) {
    const objective = bodyTypeData.goals[goal].objective;
    return formatObjectiveText(objective);
  }

  // Altrimenti usa l'obiettivo di default
  const objective = bodyTypeData.objective;
  return formatObjectiveText(objective);
}

export const generateSolution = (type: string, goal?: string): string => {
  const typedResult = result as ResultData;
  const bodyTypeData = typedResult.bodyTypes.find(bodyType => bodyType.type === type);
  if (!bodyTypeData) return "";

  // Se è specificato un goal e esiste una variante specifica, usala
  if (goal && bodyTypeData.goals && bodyTypeData.goals[goal]) {
    const solution = bodyTypeData.goals[goal].solution;
    return formatSolutionText(solution);
  }

  // Altrimenti usa la soluzione di default
  const solution = bodyTypeData.solution;
  return formatSolutionText(solution);
}
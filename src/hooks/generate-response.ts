import result from '../components/chatbot/result/result.json';

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

const highlightKeywords = (text: string): string => {
  const keywords = [
    // Termini di allenamento
    'forza', 'ipertrofia', 'multiarticolari', 'bilanciere', 'macchinari', 'manubri',
    'cardio', 'LISS', 'HIIT', 'circuito', 'endurance', 'ripetizioni',
    // Esercizi specifici
    'panca piana', 'stacco da terra', 'military press', 'chin up', 'dip', 'squat',
    'stacco rumeno', 'step-up', 'hip thrust', 'calf raises', 'pressa',
    // Termini nutrizionali
    'regime alimentare', 'ipercalorico', 'ipocalorico', 'normocalorico',
    'biologo nutrizionista', 'dietologo', 'dietista',
    // Obiettivi fisici
    'massa muscolare', 'massa grassa', 'definizione', 'ricomposizione corporea',
    'fisico a clessidra', 'longevità atletica',
    // Parti del corpo
    'braccia', 'spalle', 'petto', 'gambe', 'glutei', 'femorali', 'quadricipiti',
    'polpaccio', 'catena posteriore'
  ];

  let highlightedText = text;
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    highlightedText = highlightedText.replace(regex, `<strong>${keyword}</strong>`);
  });

  return highlightedText;
};

export const generateObjective = (type: string, goal?: string): string => {
  const typedResult = result as ResultData;
  const bodyTypeData = typedResult.bodyTypes.find(bodyType => bodyType.type === type);
  if (!bodyTypeData) return "";

  // Se è specificato un goal e esiste una variante specifica, usala
  if (goal && bodyTypeData.goals && bodyTypeData.goals[goal]) {
    const objective = bodyTypeData.goals[goal].objective;
    return `<strong>Obiettivo</strong> \n${highlightKeywords(objective)}`;
  }

  // Altrimenti usa l'obiettivo di default
  const objective = bodyTypeData.objective;
  return `<strong>Obiettivo</strong> \n${highlightKeywords(objective)}`;
}

export const generateSolution = (type: string, goal?: string): string => {
  const typedResult = result as ResultData;
  const bodyTypeData = typedResult.bodyTypes.find(bodyType => bodyType.type === type);
  if (!bodyTypeData) return "";

  // Se è specificato un goal e esiste una variante specifica, usala
  if (goal && bodyTypeData.goals && bodyTypeData.goals[goal]) {
    const solution = bodyTypeData.goals[goal].solution;
    const highlightedSolution = highlightKeywords(solution);
    return `<strong>Soluzione</strong> \n• ${highlightedSolution.replace(/\. /g, ".\n\n• ")}`;
  }

  // Altrimenti usa la soluzione di default
  const solution = bodyTypeData.solution;
  const highlightedSolution = highlightKeywords(solution);
  return `<strong>Soluzione</strong> \n• ${highlightedSolution.replace(/\. /g, ".\n\n• ")}`;
}
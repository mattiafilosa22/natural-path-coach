import result from '../components/chatbot/result/result.json';

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

export const generateObjective = (type: string): string => {
  const objective = result.bodyTypes.find(bodyType => bodyType.type === type)?.objective;
  if (!objective) return "";
  
  return `<strong>Obiettivo</strong> \n${highlightKeywords(objective)}`;
}

export const generateSolution = (type: string): string => {
  const solution = result.bodyTypes.find(bodyType => bodyType.type === type)?.solution;
  if (!solution) return "";

  const highlightedSolution = highlightKeywords(solution);
  return `<strong>Soluzione</strong> \n• ${highlightedSolution.replace(/\. /g, ".\n\n• ")}`;
}
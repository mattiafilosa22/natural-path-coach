import result from '../components/chatbot/result/result.json';

export const generateObjective = (type: string): string => {
  return `<strong>Obiettivo</strong> \n${result.bodyTypes.find(bodyType => bodyType.type === type)?.objective}`;
}

export const generateSolution = (type: string): string => {
  const solution = result.bodyTypes.find(bodyType => bodyType.type === type)?.solution;
  if (!solution) return "";

  return `<strong>Soluzione</strong> \n• ${solution.replace(/\. /g, ".\n\n• ")}`;
}
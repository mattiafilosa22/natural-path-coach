// Utility functions per il testo e formattazione

/**
 * Evidenzia le parole chiave nel testo con tag <strong>
 */
export const highlightKeywords = (text: string): string => {
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

/**
 * Formatta il testo della soluzione con bullet points
 */
export const formatSolutionText = (text: string): string => {
  const highlightedText = highlightKeywords(text);
  return `<strong>Soluzione</strong> \n• ${highlightedText.replace(/\. /g, ".\n\n• ")}`;
};

/**
 * Formatta il testo dell'obiettivo
 */
export const formatObjectiveText = (text: string): string => {
  return `<strong>Obiettivo</strong> \n${highlightKeywords(text)}`;
};

/**
 * Capitalizza la prima lettera di una stringa
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Formatta un array di stringhe in una lista con bullet points
 */
export const formatAsList = (items: string[]): string => {
  return items.map(item => `• ${item}`).join('\n');
};

/**
 * Trunca il testo a una lunghezza specifica aggiungendo ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

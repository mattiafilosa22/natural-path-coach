// Costanti per i testi dell'interfaccia chatbot

export const CHATBOT_TEXTS = {
  COMMON: {
    BACK_BUTTON: "← Indietro",
  },
  GENDER: {
    TITLE: "Qual è il tuo sesso biologico?",
    DESCRIPTION: "Questo ci aiuterà a personalizzare il tuo programma",
    OPTIONS: {
      MALE: "👨 Uomo",
      FEMALE: "👩 Donna"
    }
  },
  AGE: {
    TITLE: "Qual è la tua fascia d'età?",
    DESCRIPTION: "L'età influenza il tipo di allenamento più adatto a te"
  },
  BODY_TYPE: {
    TITLE: "Qual è il tuo tipo di fisico?",
    DESCRIPTION: "Seleziona quello che ti rappresenta di più"
  },
  EXPERIENCE: {
    TITLE: "Qual è la tua esperienza con l'allenamento?",
    DESCRIPTION: "Questo ci aiuterà a calibrare l'intensità del programma"
  },
  TRAINING_TYPE: {
    TITLE: "Dove ti alleni principalmente?",
    DESCRIPTION: "Adatteremo gli esercizi al tuo ambiente di allenamento"
  },
  FREQUENCY: {
    TITLE: "Quante volte a settimana puoi allenarti?",
    DESCRIPTION: "La frequenza determina l'intensità del programma"
  }
} as const;

export const CSS_CLASSES = {
  CONTAINER: "text-center space-y-8",
  HEADER: "space-y-4",
  TITLE: "text-2xl md:text-3xl font-bold text-gray-800",
  DESCRIPTION: "text-base text-gray-600",
  GRID_2_COLS: "grid grid-cols-1 md:grid-cols-2 gap-6",
  OPTION_CARD: "bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-fitness-orange transition-colors cursor-pointer",
  OPTION_CONTENT: "flex items-center space-x-4",
  OPTION_TITLE: "text-lg font-bold text-gray-800",
  OPTION_DESCRIPTION: "text-gray-600",
  BACK_BUTTON_CONTAINER: "flex justify-center mt-6",
  FITNESS_BUTTON_LARGE: "h-20 text-lg",
  FITNESS_BUTTON_MEDIUM: "h-16 text-base"
} as const;

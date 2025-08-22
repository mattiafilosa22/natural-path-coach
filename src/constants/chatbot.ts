// Constants e enum per il chatbot

export enum Gender {
  UOMO = 'uomo',
  DONNA = 'donna'
}

export enum ExperienceLevel {
  NESSUNA = 'nessuna',
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  EXPERT = 'expert'
}

export enum BodyTypeMale {
  MESOMORFO = 'mesomorfo',
  ECTOMORFO = 'ectomorfo',
  ENDOMORFO = 'endomorfo',
  SKINNY_FAT = 'skinny-fat'
}

export enum BodyTypeFemale {
  GINOIDE = 'ginoide',
  ANDROIDE = 'androide'
}

export enum TrainingType {
  HOME_GYM = 'home gym',
  PALESTRA_ATTREZZATA = 'palestra attrezzata',
  ALTRO = 'altro'
}

export const AGE_RANGES = [
  "18-25 anni",
  "25-40 anni",
  "40-50 anni",
  "51 o più anni"
] as const;

export const TRAINING_FREQUENCIES = [
  {
    freq: "1-2 allenamenti a settimana",
    title: "1-2 volte",
    description: "Ideale per chi inizia o ha poco tempo",
    icon: "⏰"
  },
  {
    freq: "3-6 allenamenti a settimana",
    title: "3-6 volte",
    description: "Frequenza ottimale per risultati costanti",
    icon: "🔥"
  },
  {
    freq: "7 (tutta la settimana)",
    title: "Tutti i giorni",
    description: "Massima dedizione e risultati rapidi",
    icon: "⚡"
  }
] as const;

export const EXPERIENCE_LEVELS = [
  {
    level: ExperienceLevel.NESSUNA,
    title: "Nessuna esperienza",
    description: "Non hai mai fatto allenamento",
    icon: "🔰"
  },
  {
    level: ExperienceLevel.BEGINNER,
    title: "Beginner",
    description: "Meno di 1 anno di esperienza",
    icon: "🌱"
  },
  {
    level: ExperienceLevel.INTERMEDIATE,
    title: "Intermediate",
    description: "2-5 anni di esperienza",
    icon: "💪"
  },
  {
    level: ExperienceLevel.EXPERT,
    title: "Expert",
    description: "5+ anni di esperienza",
    icon: "🏆"
  }
] as const;

export const TRAINING_TYPES = [
  {
    type: TrainingType.HOME_GYM,
    title: "Home Gym",
    description: "Alleno a casa con attrezzature base",
    icon: "🏠"
  },
  {
    type: TrainingType.PALESTRA_ATTREZZATA,
    title: "Palestra Attrezzata",
    description: "Ho accesso a una palestra completa",
    icon: "🏋️‍♂️"
  },
  {
    type: TrainingType.ALTRO,
    title: "Altro",
    description: "Parchi, calisthenics o altro",
    icon: "🌳"
  }
] as const;

export type AgeRange = typeof AGE_RANGES[number];
export type TrainingFrequency = typeof TRAINING_FREQUENCIES[number]['freq'];
export type BodyType = BodyTypeMale | BodyTypeFemale;

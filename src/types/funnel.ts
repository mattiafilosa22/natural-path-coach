import { Gender, ExperienceLevel, BodyType, AgeRange, TrainingFrequency, TrainingType } from "@/constants/chatbot";

export interface ChatbotData {
  gender?: Gender;
  ageRange?: AgeRange;
  bodyType?: BodyType;
  experience?: ExperienceLevel;
  trainingType?: TrainingType;
  frequency?: TrainingFrequency;
  goal?: string;
}

export type FunnelStep = 
  | 'hook' 
  | 'targeting' 
  | 'promise' 
  | 'chatbot' 
  | 'result' 
  | 'thankyou';

export type ChatbotStep = 
  | 'gender' 
  | 'age' 
  | 'bodyType' 
  | 'experience' 
  | 'trainingType' 
  | 'frequency' 
  | 'goal';
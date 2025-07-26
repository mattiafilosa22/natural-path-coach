export interface ChatbotData {
  gender?: 'uomo' | 'donna';
  ageRange?: string;
  bodyType?: string;
  experience?: 'nessuna' | 'beginner' | 'intermediate' | 'expert';
  trainingType?: string;
  frequency?: string;
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
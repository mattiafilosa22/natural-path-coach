import { useState } from "react";
import { FitnessButton } from "@/components/FitnessButton";
import { ChatbotData } from "@/types/funnel";

interface ResultStepProps {
  chatbotData: ChatbotData;
  onNext: () => void;
}

export const ResultStep = ({ chatbotData, onNext }: ResultStepProps) => {
  const [showCalendly, setShowCalendly] = useState(false);

  const generatePersonalizedResult = () => {
    const { gender, ageRange, bodyType, experience, goal } = chatbotData;
    
    let result = `Perfetto! Basandoci sulle tue risposte, abbiamo creato un programma personalizzato per `;
    
    if (gender === 'uomo') {
      result += `un uomo `;
    } else {
      result += `una donna `;
    }
    
    if (ageRange) {
      result += `di ${ageRange} `;
    }
    
    if (bodyType) {
      result += `con fisico ${bodyType} `;
    }
    
    result += `che vuole ${goal}.`;
    
    if (experience === 'nessuna') {
      result += ` \n\nEssendo alle prime armi, abbiamo progettato un programma graduale che ti permetterà di imparare i fondamentali senza rischi.`;
    } else {
      result += ` \n\nCon la tua esperienza ${experience}, potremo utilizzare tecniche più avanzate per massimizzare i risultati.`;
    }
    
    return result;
  };

  const handleCalendlyClick = () => {
    setShowCalendly(true);
    // Here you would integrate with Calendly
    window.open('https://calendly.com/your-calendar', '_blank');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-3xl w-full text-center space-y-8">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Il Tuo Programma è Pronto! 🎯
          </h1>
          
          <div className="bg-gradient-to-br from-fitness-orange/10 to-fitness-orange/5 rounded-2xl p-8">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line">
              {generatePersonalizedResult()}
            </p>
          </div>

          <div className="bg-white border-2 border-fitness-orange rounded-2xl p-8 space-y-4">
            <h3 className="text-2xl font-bold text-fitness-orange">
              Cosa Include il Tuo Programma Gratuito:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-fitness-orange">✓</span>
                <span>Piano di allenamento 6 settimane</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-fitness-orange">✓</span>
                <span>Schede personalizzate</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-fitness-orange">✓</span>
                <span>Video tutorial esercizi</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-fitness-orange">✓</span>
                <span>Consulenza iniziale gratuita</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-fitness-orange">✓</span>
                <span>Supporto WhatsApp</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-fitness-orange">✓</span>
                <span>Metodi 100% Natural</span>
              </div>
            </div>
          </div>
        </div>

        {!showCalendly ? (
          <div className="space-y-4">
            <p className="text-xl font-semibold text-gray-700">
              Prenota ora la tua consulenza gratuita per ricevere il programma!
            </p>
            <FitnessButton 
              onClick={handleCalendlyClick}
              size="lg"
              className="text-xl px-12 py-8"
            >
              Prenota Consulenza Gratuita →
            </FitnessButton>
          </div>
        ) : (
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Grazie! 🙏
            </h3>
            <p className="text-lg text-green-600">
              Ti abbiamo reindirizzato a Calendly per prenotare la tua consulenza gratuita. 
              Riceverai tutti i dettagli del programma via email dopo la prenotazione.
            </p>
            <FitnessButton 
              onClick={onNext}
              className="mt-6"
            >
              Continua
            </FitnessButton>
          </div>
        )}
      </div>
    </div>
  );
};
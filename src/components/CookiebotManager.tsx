import React from 'react';
import { useCookiebot } from '@/hooks/use-cookiebot';

interface CookiebotManagerProps {
  children: React.ReactNode;
}

export const CookiebotManager: React.FC<CookiebotManagerProps> = ({ children }) => {
  const { isLoaded, consent } = useCookiebot();

  // Effect per gestire i servizi basati sul consenso
  React.useEffect(() => {
    if (!isLoaded) return;

    // Qui puoi aggiungere logica per abilitare/disabilitare servizi
    // basandoti sul consenso dell'utente

    if (consent.statistics) {
      // Abilita Google Analytics quando sarà implementato
      console.log('Statistics cookies accepted - GA can be enabled');
    }

    if (consent.marketing) {
      // Abilita Facebook Pixel quando sarà implementato
      console.log('Marketing cookies accepted - FB Pixel can be enabled');
    }

    if (consent.preferences) {
      // Abilita cookie di preferenze
      console.log('Preferences cookies accepted');
    }

  }, [isLoaded, consent]);

  return <>{children}</>;
};

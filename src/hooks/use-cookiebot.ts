import { useEffect, useState } from 'react';

declare global {
  interface Window {
    Cookiebot?: {
      consent: {
        necessary: boolean;
        preferences: boolean;
        statistics: boolean;
        marketing: boolean;
      };
      consentID: string;
      hasResponse: boolean;
      show: () => void;
      hide: () => void;
      renew: () => void;
      getScript: (url: string, async?: boolean, callback?: () => void) => void;
    };
    CookiebotDialog?: {
      show: () => void;
    };
  }
}

export interface CookiebotConsent {
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
}

export const useCookiebot = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [consent, setConsent] = useState<CookiebotConsent>({
    necessary: false,
    preferences: false,
    statistics: false,
    marketing: false,
  });

  useEffect(() => {
    const checkCookiebot = () => {
      if (window.Cookiebot) {
        setIsLoaded(true);
        setConsent(window.Cookiebot.consent);
      }
    };

    // Check immediately
    checkCookiebot();

    // Listen for Cookiebot events
    const handleCookiebotOnLoad = () => {
      checkCookiebot();
    };

    const handleCookiebotOnAccept = () => {
      if (window.Cookiebot) {
        setConsent(window.Cookiebot.consent);
      }
    };

    const handleCookiebotOnDecline = () => {
      if (window.Cookiebot) {
        setConsent(window.Cookiebot.consent);
      }
    };

    // Add event listeners
    window.addEventListener('CookiebotOnLoad', handleCookiebotOnLoad);
    window.addEventListener('CookiebotOnAccept', handleCookiebotOnAccept);
    window.addEventListener('CookiebotOnDecline', handleCookiebotOnDecline);

    // Cleanup
    return () => {
      window.removeEventListener('CookiebotOnLoad', handleCookiebotOnLoad);
      window.removeEventListener('CookiebotOnAccept', handleCookiebotOnAccept);
      window.removeEventListener('CookiebotOnDecline', handleCookiebotOnDecline);
    };
  }, []);

  const showDialog = () => {
    if (window.Cookiebot) {
      window.Cookiebot.show();
    }
  };

  const renewConsent = () => {
    if (window.Cookiebot) {
      window.Cookiebot.renew();
    }
  };

  return {
    isLoaded,
    consent,
    showDialog,
    renewConsent,
    hasConsented: isLoaded && window.Cookiebot?.hasResponse,
  };
};

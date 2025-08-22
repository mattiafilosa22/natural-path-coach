import { useEffect, useRef } from 'react';

/**
 * Hook per gestire il focus in modo accessibile
 */
export const useFocusManagement = () => {
  const focusRef = useRef<HTMLElement | null>(null);

  /**
   * Imposta il focus su un elemento specifico
   */
  const setFocus = (element: HTMLElement | null) => {
    if (element) {
      focusRef.current = element;
      // Timeout per permettere il rendering
      setTimeout(() => {
        element.focus();
      }, 100);
    }
  };

  /**
   * Gestisce il focus per skip links
   */
  const handleSkipLinkFocus = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Rende l'elemento focusable se non lo è già
      if (!targetElement.hasAttribute('tabindex')) {
        targetElement.setAttribute('tabindex', '-1');
      }
      setFocus(targetElement);
    }
  };

  /**
   * Gestisce il focus trap in modali o dialog
   */
  const trapFocus = (containerElement: HTMLElement) => {
    const focusableElements = containerElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    containerElement.addEventListener('keydown', handleTabKey);
    return () => containerElement.removeEventListener('keydown', handleTabKey);
  };

  return {
    setFocus,
    handleSkipLinkFocus,
    trapFocus,
    focusRef
  };
};

/**
 * Hook per gestire l'annuncio ai lettori di schermo
 */
export const useAnnouncement = () => {
  const announceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Crea l'elemento per gli annunci se non esiste
    if (!announceRef.current) {
      const announcer = document.createElement('div');
      announcer.setAttribute('aria-live', 'polite');
      announcer.setAttribute('aria-atomic', 'true');
      announcer.setAttribute('aria-hidden', 'false');
      announcer.className = 'sr-only';
      announcer.id = 'screen-reader-announcer';
      document.body.appendChild(announcer);
      announceRef.current = announcer;
    }

    return () => {
      if (announceRef.current && document.body.contains(announceRef.current)) {
        document.body.removeChild(announceRef.current);
      }
    };
  }, []);

  /**
   * Annuncia un messaggio ai lettori di schermo
   */
  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    if (announceRef.current) {
      announceRef.current.setAttribute('aria-live', priority);
      announceRef.current.textContent = message;
      
      // Pulisce il messaggio dopo un po'
      setTimeout(() => {
        if (announceRef.current) {
          announceRef.current.textContent = '';
        }
      }, 1000);
    }
  };

  return { announce };
};

/**
 * Hook per gestire la navigazione via tastiera
 */
export const useKeyboardNavigation = () => {
  /**
   * Gestisce la navigazione con le frecce in una lista
   */
  const handleArrowNavigation = (
    event: KeyboardEvent, 
    elements: NodeListOf<HTMLElement> | HTMLElement[],
    currentIndex: number,
    setCurrentIndex: (index: number) => void
  ) => {
    let newIndex = currentIndex;
    
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        newIndex = (currentIndex + 1) % elements.length;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        newIndex = currentIndex === 0 ? elements.length - 1 : currentIndex - 1;
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = elements.length - 1;
        break;
      default:
        return;
    }
    
    event.preventDefault();
    setCurrentIndex(newIndex);
    (elements[newIndex] as HTMLElement).focus();
  };

  /**
   * Gestisce l'attivazione con Enter/Space
   */
  const handleActivation = (event: KeyboardEvent, callback: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
    }
  };

  return {
    handleArrowNavigation,
    handleActivation
  };
};

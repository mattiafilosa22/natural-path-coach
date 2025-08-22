import { useEffect } from 'react';

interface WebVital {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

/**
 * Hook per monitorare le Core Web Vitals per SEO
 */
export const useWebVitals = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Import web-vitals dinamicamente per non aumentare il bundle size
    import('web-vitals').then(({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
      // Largest Contentful Paint
      onLCP((metric) => {
        const vital: WebVital = {
          name: 'LCP',
          value: metric.value,
          rating: metric.value <= 2500 ? 'good' : metric.value <= 4000 ? 'needs-improvement' : 'poor'
        };

        // Invia a Google Analytics se configurato
        if (window.gtag) {
          window.gtag('event', 'web_vital', {
            event_category: 'Web Vitals',
            event_label: vital.name,
            value: Math.round(vital.value),
            custom_map: { metric_rating: vital.rating }
          });
        }

        // Debug in development
        if (process.env.NODE_ENV === 'development') {
          console.log('LCP:', vital);
        }
      });

      // Interaction to Next Paint (sostituisce FID in web-vitals v5)
      onINP((metric) => {
        const vital: WebVital = {
          name: 'INP',
          value: metric.value,
          rating: metric.value <= 200 ? 'good' : metric.value <= 500 ? 'needs-improvement' : 'poor'
        };

        if (window.gtag) {
          window.gtag('event', 'web_vital', {
            event_category: 'Web Vitals',
            event_label: vital.name,
            value: Math.round(vital.value),
            custom_map: { metric_rating: vital.rating }
          });
        }

        if (process.env.NODE_ENV === 'development') {
          console.log('INP:', vital);
        }
      });

      // Cumulative Layout Shift
      onCLS((metric) => {
        const vital: WebVital = {
          name: 'CLS',
          value: metric.value,
          rating: metric.value <= 0.1 ? 'good' : metric.value <= 0.25 ? 'needs-improvement' : 'poor'
        };

        if (window.gtag) {
          window.gtag('event', 'web_vital', {
            event_category: 'Web Vitals',
            event_label: vital.name,
            value: Math.round(vital.value * 1000),
            custom_map: { metric_rating: vital.rating }
          });
        }

        if (process.env.NODE_ENV === 'development') {
          console.log('CLS:', vital);
        }
      });

      // First Contentful Paint
      onFCP((metric) => {
        const vital: WebVital = {
          name: 'FCP',
          value: metric.value,
          rating: metric.value <= 1800 ? 'good' : metric.value <= 3000 ? 'needs-improvement' : 'poor'
        };

        if (window.gtag) {
          window.gtag('event', 'web_vital', {
            event_category: 'Web Vitals',
            event_label: vital.name,
            value: Math.round(vital.value),
            custom_map: { metric_rating: vital.rating }
          });
        }

        if (process.env.NODE_ENV === 'development') {
          console.log('FCP:', vital);
        }
      });

      // Time to First Byte
      onTTFB((metric) => {
        const vital: WebVital = {
          name: 'TTFB',
          value: metric.value,
          rating: metric.value <= 800 ? 'good' : metric.value <= 1800 ? 'needs-improvement' : 'poor'
        };

        if (window.gtag) {
          window.gtag('event', 'web_vital', {
            event_category: 'Web Vitals',
            event_label: vital.name,
            value: Math.round(vital.value),
            custom_map: { metric_rating: vital.rating }
          });
        }

        if (process.env.NODE_ENV === 'development') {
          console.log('TTFB:', vital);
        }
      });
    }).catch(err => {
      console.warn('Failed to load web-vitals:', err);
    });
  }, []);
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

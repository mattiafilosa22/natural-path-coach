// Configurazione centralizzata del sito
// Aggiorna questo file quando cambi l'URL

export const SITE_CONFIG = {
  // URL principale - AGGIORNA QUI quando hai il nuovo dominio
  url: 'https://marco-del-moro-personal-trainer.it',

  // SEO Settings per ambiente di test
  isProduction: false, // Cambia a true per il dominio finale
  allowIndexing: false, // Cambia a true per il dominio finale

  // Informazioni base del sito
  name: 'Marco Del Moro - Natural Path Coach',
  shortName: 'Natural Path Coach',
  description: 'Personal Trainer specializzato in Natural Bodybuilding. Metodo RECOMP 365 per trasformazioni corporee naturali e sostenibili. Consulenza personalizzata a Piombino.',
  keywords: 'personal trainer piombino, natural bodybuilding livorno, trasformazione corporea toscana, allenamento personalizzato piombino, fitness naturale livorno, ricomposizione corporea, marco del moro',

  // Autore/Business
  author: {
    name: 'Marco Del Moro',
    email: 'info@natural-path-coach.com', // Aggiorna con l'email definitiva
    phone: '+39-XXX-XXXXXXX', // Aggiorna con il numero reale
    address: {
      city: 'Piombino',
      region: 'Toscana',
      country: 'IT',
      latitude: 42.9258,
      longitude: 10.5267
    }
  },

  // Social Media - Aggiorna con i profili reali
  social: {
    instagram: 'https://www.instagram.com/marcodelmoro_pt',
    facebook: 'https://www.facebook.com/marcodelmoro.personaltrainer',
    linkedin: '', // Aggiungi se necessario
    youtube: ''   // Aggiungi se necessario
  },

  // Immagini (relative all'URL base)
  images: {
    logo: '/logo.png',
    ogImage: '/marco-del-moro-og.jpg',
    favicon: '/favicon.ico',
    author: '/marco-del-moro.jpg'
  },

  // Business Info
  business: {
    type: 'LocalBusiness',
    category: 'HealthAndBeautyBusiness',
    priceRange: '€€',
    openingHours: {
      opens: '07:00',
      closes: '20:00',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    }
  },

  // Analytics & Tracking
  analytics: {
    googleAnalyticsId: '', // Aggiungi quando configurato
    googleSearchConsole: '', // Aggiungi quando configurato
    cookiebotId: 'YOUR_COOKIEBOT_ID' // Aggiorna con l'ID reale
  }
} as const;

// Helper functions per costruire URL completi
export const getFullUrl = (path: string = '') => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_CONFIG.url}${cleanPath}`;
};

export const getImageUrl = (imagePath: keyof typeof SITE_CONFIG.images) => {
  return getFullUrl(SITE_CONFIG.images[imagePath]);
};

// Schema.org data generator
export const generateBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": [SITE_CONFIG.business.type, SITE_CONFIG.business.category],
  "name": SITE_CONFIG.name,
  "image": getImageUrl('author'),
  "description": SITE_CONFIG.description,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": SITE_CONFIG.author.address.city,
    "addressRegion": SITE_CONFIG.author.address.region,
    "addressCountry": SITE_CONFIG.author.address.country
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": SITE_CONFIG.author.address.latitude,
    "longitude": SITE_CONFIG.author.address.longitude
  },
  "url": SITE_CONFIG.url,
  "telephone": SITE_CONFIG.author.phone,
  "email": SITE_CONFIG.author.email,
  "priceRange": SITE_CONFIG.business.priceRange,
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": SITE_CONFIG.business.openingHours.days,
    "opens": SITE_CONFIG.business.openingHours.opens,
    "closes": SITE_CONFIG.business.openingHours.closes
  },
  "serviceArea": {
    "@type": "City",
    "name": SITE_CONFIG.author.address.city
  },
  "sameAs": Object.values(SITE_CONFIG.social).filter(Boolean)
});

export default SITE_CONFIG;

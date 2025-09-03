// Sistema di design unificato per il sito
export const designSystem = {
  // Font sizes standardizzati - mobile-first responsive
  typography: {
    h1: "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl",
    h2: "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl",
    h3: "text-xl sm:text-2xl lg:text-3xl xl:text-4xl",
    h4: "text-lg sm:text-xl lg:text-2xl xl:text-3xl",
    body: "text-base sm:text-lg lg:text-xl",
    bodySmall: "text-sm sm:text-base lg:text-lg",
    small: "text-sm sm:text-base",
    xs: "text-xs sm:text-sm"
  },

  // Spaziature standardizzate
  spacing: {
    section: "py-12 sm:py-16 lg:py-20",
    sectionSmall: "py-8 sm:py-12 lg:py-16",
    container: "px-4 sm:px-6 lg:px-8",
    cardPadding: "p-4 sm:p-6 lg:p-8",
    cardPaddingSmall: "p-3 sm:p-4 lg:p-6",
    marginTitle: "mb-4 sm:mb-6",
    marginSection: "mb-8 sm:mb-12",
    marginCard: "mb-6 sm:mb-8",
    gapCards: "gap-4 sm:gap-6 lg:gap-8",
    gapSmall: "gap-2 sm:gap-3 lg:gap-4"
  },

  // Componenti slider standardizzati
  slider: {
    container: "relative group",
    scrollContainer: "flex overflow-x-auto scrollbar-hide space-x-4 sm:space-x-6 pb-4 mobile-smooth-scroll",
    card: "flex-shrink-0 slider-card-mobile",
    cardSmall: "flex-shrink-0 w-72 sm:w-80",
    navigation: {
      button: "slider-nav-button",
      left: "slider-nav-left",
      right: "slider-nav-right",
      icon: "w-5 h-5 sm:w-6 sm:h-6 text-primary transition-colors duration-300"
    }
  },

  // Animazioni e transizioni
  transitions: {
    default: "transition-all duration-300",
    fast: "transition-all duration-200",
    slow: "transition-all duration-500",
    hover: "card-hover"
  },

  // Classi combinate comuni
  combined: {
    sectionContainer: "py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8",
    cardStandard: "p-4 sm:p-6 lg:p-8 card-hover border-none bg-white/50 backdrop-blur-sm",
    titleSection: "text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6",
    bodyText: "text-base sm:text-lg leading-relaxed",
    buttonMobile: "btn-mobile transition-all duration-300"
  }
} as const;

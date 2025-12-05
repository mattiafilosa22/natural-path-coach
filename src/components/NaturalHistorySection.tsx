import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Star,
  Calendar,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { designSystem } from "@/config/design-system";
import Hackenschmidt from "@/assets/natural-athletes/hackenschmidt.jpg";
import Saxon from "@/assets/natural-athletes/saxon.png";
import Sandow from "@/assets/natural-athletes/sandow.webp";
import otto from "@/assets/natural-athletes/otto-arco.jpg";
import abbye from "@/assets/natural-athletes/abbye.jpg";

const NaturalHistorySection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (): void => {
    if (scrollContainerRef.current) {
      // Check if mobile (< 640px)
      const isMobile = window.innerWidth < 640;
      const cardWidth = isMobile ? window.innerWidth - 32 : 320; // Full width - padding for mobile, 320px for desktop
      const spacing = isMobile ? 16 : 24; // gap-4 for mobile, gap-6 for desktop
      scrollContainerRef.current.scrollBy({
        left: -(cardWidth + spacing),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (): void => {
    if (scrollContainerRef.current) {
      // Check if mobile (< 640px)
      const isMobile = window.innerWidth < 640;
      const cardWidth = isMobile ? window.innerWidth - 32 : 320; // Full width - padding for mobile, 320px for desktop
      const spacing = isMobile ? 16 : 24; // gap-4 for mobile, gap-6 for desktop
      scrollContainerRef.current.scrollBy({
        left: cardWidth + spacing,
        behavior: "smooth",
      });
    }
  };
  const historicalAthlets = [
    {
      name: "Eugen Sandow",
      period: "1867-1925",
      achievement: "Padre del Bodybuilding Moderno",
      description:
        "Considerato il primo vero bodybuilder, Sandow sviluppò un fisico straordinario usando solo pesi e disciplina alimentare.",
      stats: ["Petto: 122 cm", "Vita: 76 cm", "Braccia: 43 cm"],
      image: Sandow,
    },
    {
      name: "Abbye Stockton",
      period: "1917-2006",
      achievement: "Pioniera del Bodybuilding Femminile",
      description:
        "Una delle prime donne a competere nel bodybuilding, Abbye ha ispirato generazioni di atlete.",
      stats: ["Petto: 91 cm", "Vita: 61 cm", "Fianchi: 91 cm"],
      image: abbye,
    },
    {
      name: "George Hackenschmidt",
      period: "1877-1968",
      achievement: "Il Leone Russo",
      description:
        "Lottatore e strongman che combinava forza incredibile con un fisico armonico, tutto naturalmente.",
      stats: ["Squat: 164 kg", "Bench: 136 kg", "Peso: 95 kg"],
      image: Hackenschmidt,
    },
    {
      name: "Otto Arco",
      period: "1881-1968",
      achievement: "Strongman",
      description:
        'Strongman e attrazione da circo, vinse il titolo di "Uomo più perfettamente sviluppato del Mondo".',
      stats: ["Squat: 164 kg", "Bench: 136 kg", "Peso: 95 kg"],
      image: otto,
    },
    {
      name: "Arthur Saxon",
      period: "1878-1921",
      achievement: "L'Uomo più Forte del Mondo",
      description:
        "Strongman tedesco famoso per i suoi record di sollevamento, ottenuti attraverso allenamento intensivo e costanza.",
      stats: ["Press: 168 kg", "Deadlift: 318 kg", "Peso: 91 kg"],
      image: Saxon,
    },
  ];

  const principles = [
    {
      icon: Heart,
      title: "Disciplina Alimentare",
      description:
        "Diete semplici basate su cibi integrali e nutrienti naturali",
    },
    {
      icon: Trophy,
      title: "Allenamento Costante",
      description:
        "Routine regolari con progressione graduale e recupero adeguato",
    },
    {
      icon: Star,
      title: "Mentalità Vincente",
      description: "Determinazione e pazienza per costruire risultati duraturi",
    },
    {
      icon: Calendar,
      title: "Tempo e Dedizione",
      description:
        "Anni di lavoro metodico senza scorciatoie o sostanze artificiali",
    },
  ];

  return (
    <section
      className={`${designSystem.spacing.section} bg-background`}
      aria-label="Storia del Natural Bodybuilding"
      id="natural-history"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`${designSystem.typography.h2} font-bold ${designSystem.spacing.marginTitle} leading-tight`}
          >
            Gli <span className="text-primary">uomini</span> che si costruivano
            come <span className="text-primary">statue</span>{" "}
            <span className="block sm:inline">
              (senza <span className="text-primary">farmaci</span>)
            </span>
          </h2>

          {/* Subtitle Card - Aligned to homepage design */}
          <Card className="border-none shadow-primary bg-white/50 backdrop-blur-sm mb-6 sm:mb-8 max-w-7xl mx-auto">
            <CardContent className={`${designSystem.spacing.cardPadding}`}>
              {/* Opening Statement */}
              <div
                className={`${designSystem.spacing.marginSection} text-center`}
              >
                <h3
                  className={`${designSystem.typography.h3} font-bold text-foreground ${designSystem.spacing.marginTitle} leading-tight`}
                >
                  NON È UNA MODA{" "}
                  <span className="text-primary block sm:inline">
                    È UNA SCELTA CHE ESISTE DA SEMPRE
                  </span>
                </h3>
              </div>{" "}
              {/* Story Section */}
              <div
                className={`space-y-6 sm:space-y-8 ${designSystem.typography.body} text-muted-foreground`}
              >
                {/* Sandow Story */}
                <Card className="border-none bg-white/70 backdrop-blur-sm border-l-4 border-primary">
                  <CardContent
                    className={`${designSystem.spacing.cardPaddingSmall}`}
                  >
                    <p
                      className={`${designSystem.spacing.marginCard} text-center ${designSystem.typography.small}`}
                    >
                      Nel tardo '800, c'era un uomo che faceva il{" "}
                      <span className="text-primary font-semibold">
                        pienone nei teatri d'Europa
                      </span>{" "}
                      solo mostrando il suo fisico.
                    </p>
                    <p
                      className={`${designSystem.spacing.marginCard} text-center ${designSystem.typography.h4} font-semibold`}
                    >
                      Si chiamava{" "}
                      <span className="text-primary">Eugene Sandow</span>.
                    </p>
                    <p
                      className={`text-center ${designSystem.typography.small}`}
                    >
                      Era{" "}
                      <span className="font-semibold">
                        possente, definito, armonico
                      </span>
                      . Il suo corpo sembrava{" "}
                      <span className="text-primary font-semibold">
                        scolpito nel marmo
                      </span>
                      , e non usava nulla, se non alimentazione basilare,
                      bilancieri e una disciplina fuori dal comune.
                    </p>
                  </CardContent>
                </Card>

                {/* Two Column Content */}
                <div
                  className={`grid grid-cols-1 ${designSystem.spacing.gapSmall}`}
                >
                  <Card
                    className={`border-none bg-white/80 backdrop-blur-sm ${designSystem.transitions.hover}`}
                  >
                    <CardContent
                      className={`${designSystem.spacing.cardPaddingSmall}`}
                    >
                      <p
                        className={`${designSystem.spacing.marginCard} ${designSystem.typography.small}`}
                      >
                        Come lui anche{" "}
                        <span className="font-semibold">
                          George Hackenschmidt, John Grimek, Otto Arco
                        </span>{" "}
                        e molte altre leggende di natural bodybuilding, prima
                        ancora che questo termine esistesse.
                      </p>
                      <p className={`${designSystem.typography.small}`}>
                        Non esistevano cicli di steroidi e non si avevano le
                        conoscenze di alimentazione moderne. Non esistevano
                        scorciatoie e diete drastiche.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-none bg-white/80 backdrop-blur-sm hover:shadow-primary transition-all duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <p className="mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">
                        Solo{" "}
                        <span className="text-primary font-semibold">
                          allenamento, recupero e metodo
                        </span>
                        .
                      </p>
                      <p className="text-sm sm:text-base lg:text-lg">
                        Eppure questi uomini erano in grado di costruire fisici
                        da fare invidia a molti{" "}
                        <span className="font-semibold">
                          "palestrati" moderni
                        </span>{" "}
                        o{" "}
                        <span className="font-semibold">"fit-influencer"</span>.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Question Highlight */}
                <Card className="border-none bg-white/70 backdrop-blur-sm border border-primary/20">
                  <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                    <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
                      Allora perché oggi ti fanno credere che sia{" "}
                      <span className="text-primary">impossibile</span>?
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl italic text-muted-foreground">
                      Perché è più facile{" "}
                      <span className="text-primary font-semibold">
                        venderti una scorciatoia
                      </span>{" "}
                      che{" "}
                      <span className="font-semibold">
                        insegnarti il percorso vero
                      </span>
                      ...
                    </p>
                  </CardContent>
                </Card>

                {/* Closing Statement */}
                <div className="text-center">
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium text-foreground leading-relaxed">
                    Ti porto{" "}
                    <span className="text-primary font-bold">
                      indietro nel tempo
                    </span>
                    , quando il doping ancora neanche esisteva, ti mostrerò che{" "}
                    <span className="text-primary font-bold">
                      fisici statuari
                    </span>{" "}
                    sono esistiti ben prima dell'invenzione del doping, dei
                    social media e dell'AI
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg">
            <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            <span className="text-primary font-semibold">
              100% Natural • 100% Dedication
            </span>
          </div>
        </div>

        {/* Historical Athletes Grid */}
        <div className={`${designSystem.spacing.marginSection}`}>
          {/* Mobile: Horizontal Single Card Layout */}
          <div className="block sm:hidden">
            <div className={`${designSystem.slider.container}`}>
              {/* Left Arrow - Mobile */}
              <button
                onClick={scrollLeft}
                className={`${designSystem.slider.navigation.button} ${designSystem.slider.navigation.left}`}
                style={{
                  boxShadow:
                    "0 8px 32px rgba(249, 112, 21, 0.1), 0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
                aria-label="Scorri atleti a sinistra"
              >
                <ChevronLeft
                  className={`${designSystem.slider.navigation.icon}`}
                />
              </button>

              {/* Right Arrow - Mobile */}
              <button
                onClick={scrollRight}
                className={`${designSystem.slider.navigation.button} ${designSystem.slider.navigation.right}`}
                style={{
                  boxShadow:
                    "0 8px 32px rgba(249, 112, 21, 0.1), 0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
                aria-label="Scorri atleti a destra"
              >
                <ChevronRight
                  className={`${designSystem.slider.navigation.icon}`}
                />
              </button>

              {/* Mobile Scroll Container */}
              <div
                ref={scrollContainerRef}
                className="overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                <div className="flex gap-4 px-4">
                  {historicalAthlets.map((athlete, index) => (
                    <Card
                      key={index}
                      className={`group ${designSystem.transitions.hover} border-none bg-white/50 backdrop-blur-sm overflow-hidden flex-none w-[calc(100vw-2rem)] snap-center`}
                    >
                      <div className="relative">
                        <img
                          src={athlete.image}
                          alt={athlete.name}
                          className="historical-athlete-image sepia-tone w-full h-64 object-cover object-top"
                        />
                        <div
                          className={`absolute top-2 right-2 bg-primary/90 text-white px-2 py-1 rounded-full ${designSystem.typography.xs} font-semibold`}
                        >
                          {athlete.period}
                        </div>

                        {/* Swipe hint on first card */}
                        {index === 0 && (
                          <div
                            className={`absolute bottom-2 left-2 right-2 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-lg ${designSystem.typography.xs} text-center animate-pulse`}
                          >
                            👈 Scorri per vedere altri atleti 👉
                          </div>
                        )}
                      </div>
                      <CardContent
                        className={`${designSystem.spacing.cardPaddingSmall}`}
                      >
                        <h3
                          className={`${designSystem.typography.h4} font-bold ${designSystem.spacing.marginCard} group-hover:text-primary ${designSystem.transitions.default}`}
                        >
                          {athlete.name}
                        </h3>
                        <p
                          className={`text-primary font-semibold ${designSystem.spacing.marginCard} ${designSystem.typography.xs}`}
                        >
                          {athlete.achievement}
                        </p>
                        <p
                          className={`text-muted-foreground ${designSystem.spacing.marginCard} ${designSystem.typography.xs} leading-relaxed`}
                        >
                          {athlete.description}
                        </p>

                        <div className="space-y-2">
                          <h4
                            className={`font-semibold ${designSystem.typography.xs} text-foreground`}
                          >
                            Statistiche:
                          </h4>
                          <div className="grid grid-cols-1 gap-1">
                            {athlete.stats.map((stat, idx) => (
                              <div
                                key={idx}
                                className={`flex items-center ${designSystem.typography.xs}`}
                              >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                                <span className="text-muted-foreground">
                                  {stat}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Mobile scroll indicator */}
              <div className="flex justify-center mt-4">
                <div className="bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
                  <p
                    className={`text-primary ${designSystem.typography.small} flex items-center font-medium`}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                    Scorri orizzontalmente per vedere tutti i 5 atleti
                  </p>
                </div>
              </div>

              {/* Scroll dots indicator */}
              <div className="flex justify-center mt-3 space-x-2">
                {historicalAthlets.map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-gray-300 opacity-50"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Tablet: Grid Layout (2 columns) */}
          <div className="hidden sm:block lg:hidden">
            <div className="grid grid-cols-2 gap-6">
              {historicalAthlets.map((athlete, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-primary transition-all duration-300 hover:scale-105 border-none bg-white/50 backdrop-blur-sm overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={athlete.image}
                      alt={athlete.name}
                      className="historical-athlete-image sepia-tone w-full h-64 sm:h-80 object-cover object-top"
                    />
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-primary/90 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                      {athlete.period}
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {athlete.name}
                    </h3>
                    <p className="text-primary font-semibold mb-3 text-xs sm:text-sm">
                      {athlete.achievement}
                    </p>
                    <p className="text-muted-foreground mb-4 text-xs sm:text-sm leading-relaxed">
                      {athlete.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-xs sm:text-sm text-foreground">
                        Statistiche:
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {athlete.stats.map((stat, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-xs sm:text-sm"
                          >
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2" />
                            <span className="text-muted-foreground">
                              {stat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Desktop: Horizontal Scroll Layout (from lg breakpoint) */}
          <div className="hidden lg:block">
            <div className="relative group">
              {/* Left Arrow */}
              <button
                onClick={scrollLeft}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white border border-gray-200/50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
                style={{
                  boxShadow:
                    "0 8px 32px rgba(249, 112, 21, 0.1), 0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
                aria-label="Scorri atleti a sinistra"
              >
                <ChevronLeft
                  className="w-6 h-6 transition-colors duration-300"
                  style={{ color: "rgb(249, 112, 21)" }}
                />
              </button>

              {/* Right Arrow */}
              <button
                onClick={scrollRight}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white border border-gray-200/50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
                style={{
                  boxShadow:
                    "0 8px 32px rgba(249, 112, 21, 0.1), 0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
                aria-label="Scorri atleti a destra"
              >
                <ChevronRight
                  className="w-6 h-6 transition-colors duration-300"
                  style={{ color: "rgb(249, 112, 21)" }}
                />
              </button>

              {/* Gallery Container */}
              <div
                ref={scrollContainerRef}
                className="overflow-x-auto scrollbar-hide pb-4"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                <div className="flex gap-6 min-w-max px-2">
                  {historicalAthlets.map((athlete, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-primary transition-all duration-300 hover:scale-105 border-none bg-white/50 backdrop-blur-sm overflow-hidden flex-none w-80"
                    >
                      <div className="relative">
                        <img
                          src={athlete.image}
                          alt={athlete.name}
                          className="historical-athlete-image sepia-tone w-full h-64 lg:h-80 object-cover object-top"
                        />
                        <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {athlete.period}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {athlete.name}
                        </h3>
                        <p className="text-primary font-semibold mb-3 text-sm">
                          {athlete.achievement}
                        </p>
                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                          {athlete.description}
                        </p>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm text-foreground">
                            Statistiche:
                          </h4>
                          <div className="grid grid-cols-1 gap-1">
                            {athlete.stats.map((stat, idx) => (
                              <div
                                key={idx}
                                className="flex items-center text-sm"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                                <span className="text-muted-foreground">
                                  {stat}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Mobile scroll indicator for xl screens when needed */}
              <div className="flex justify-center mt-6">
                <p className="text-gray-400 text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-2 h-2 bg-gray-300 rounded-full mr-2 animate-pulse"></span>
                  Scorri per vedere altri atleti storici
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Principles Section */}
        <Card className="border-none bg-white/50 backdrop-blur-sm mb-8 sm:mb-12">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8">
              I <span className="text-primary">Principi</span> Senza Tempo
            </h3>
            <p className="text-center text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
              Questi atleti seguivano principi che rimangono validi ancora oggi.
              La vera forza nasce dalla costanza, non dalle scorciatoie.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
              {principles.map((principle, index) => (
                <div key={index} className="text-center group p-2 sm:p-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-glow transition-all duration-300">
                    <principle.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h4 className="font-bold mb-2 group-hover:text-primary transition-colors text-sm sm:text-base lg:text-lg">
                    {principle.title}
                  </h4>
                  <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="border-none bg-gradient-primary text-white max-w-5xl mx-auto hover:shadow-primary transition-all duration-300">
            <CardContent className="p-6 sm:p-8 lg:p-10">
              <h4 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                Segui le Orme dei Grandi
              </h4>
              <p className="mb-6 sm:mb-8 opacity-90 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-3xl mx-auto">
                Come i campioni del passato, anche tu puoi raggiungere risultati
                straordinari seguendo i principi naturali del fitness. Inizia il
                tuo percorso di trasformazione oggi.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-white text-primary-glow hover:bg-white hover:text-foreground font-bold px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg transition-all duration-300"
              >
                <a href="/funnel" target="_blank">
                  Inizia il Tuo Percorso Natural
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NaturalHistorySection;

import React, { useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { designSystem } from "@/config/design-system";
import mirkoFront from "@/assets/before-after/mirko.jpg";
import alessandra from "@/assets/before-after/alessandra.jpg";
import andrea from "@/assets/before-after/andrea.jpg";
import diego from "@/assets/before-after/diego.jpg";
import enrico from "@/assets/before-after/enrico.jpg";
import gabriel from "@/assets/before-after/gabriel.jpg";
import giulia from "@/assets/before-after/giulia.jpg";
import matteo from "@/assets/before-after/matteo.jpg";
import mirkoBack from "@/assets/before-after/mirko-back.jpg";
import tommaso from "@/assets/before-after/tommaso.jpg";
import giuliaT from "@/assets/before-after/giulia-t.jpg";
import mirkoNewBack from '@/assets/before-after/mirko-new-back.jpg';

interface Transformation {
  id: number;
  image: string;
  description: string;
  timeframe: string;
  details: string;
}

const GalleryBeforeAfter: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Transformation | null>(
    null
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const transformations: Transformation[] = [
    {
      id: 1,
      image: matteo,
      description: "Matteo",
      timeframe: "18 mesi",
      details: "",
    },
    {
      id: 2,
      image: mirkoFront,
      description: "Mirko",
      timeframe: "6 mesi",
      details: "",
    },
    {
      id: 3,
      image: alessandra,
      description: "Alessandra",
      timeframe: "12 mesi",
      details: "",
    },
    {
      id: 4,
      image: giulia,
      description: "Giulia",
      timeframe: "12 mesi",
      details: "",
    },
    {
      id: 5,
      image: mirkoBack,
      description: "Mirko",
      timeframe: "6 mesi",
      details: "",
    },
    {
      id: 6,
      image: gabriel,
      description: "Gabriel",
      timeframe: "36 mesi",
      details: "",
    },
    {
      id: 7,
      image: diego,
      description: "Diego",
      timeframe: "3 mesi",
      details: "",
    },
    {
      id: 8,
      image: enrico,
      description: "Enrico",
      timeframe: "8 mesi",
      details: "",
    },
    {
      id: 9,
      image: giuliaT,
      description: "Giulia",
      timeframe: "5 mesi",
      details: "",
    },
    {
      id: 10,
      image: tommaso,
      description: "Tommaso",
      timeframe: "3 mesi",
      details: "",
    },
    {
      id: 11,
      image: andrea,
      description: "Andrea",
      timeframe: "8 mesi",
      details: "",
    },
    {
      id: 12,
      image: mirkoNewBack,
      description: "Mirko",
      timeframe: "3 mesi",
      details: "",
    }
  ];

  const openModal = (index: number): void => {
    setSelectedImage(transformations[index]);
    setCurrentIndex(index);
  };

  const closeModal = (): void => {
    setSelectedImage(null);
  };

  const nextImage = (): void => {
    const nextIndex = (currentIndex + 1) % transformations.length;
    setSelectedImage(transformations[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = (): void => {
    const prevIndex =
      (currentIndex - 1 + transformations.length) % transformations.length;
    setSelectedImage(transformations[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const scrollLeft = (): void => {
    if (scrollContainerRef.current) {
      const isMobile = window.innerWidth < 640;
      const cardWidth = isMobile ? window.innerWidth - 32 : 384; // Mobile: full width - padding, Desktop: w-96
      const spacing = 24; // Standard spacing from design system
      scrollContainerRef.current.scrollBy({
        left: -(cardWidth + spacing),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (): void => {
    if (scrollContainerRef.current) {
      const isMobile = window.innerWidth < 640;
      const cardWidth = isMobile ? window.innerWidth - 32 : 384;
      const spacing = 24;
      scrollContainerRef.current.scrollBy({
        left: cardWidth + spacing,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className={`min-h-full bg-white ${designSystem.spacing.section} px-4 sm:px-6`}
      aria-label="Galleria trasformazioni clienti"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2 className={`${designSystem.typography.h2} font-bold ${designSystem.spacing.marginCard}`}>
            <span className="text-primary">Non ti fidi? </span>
            <span className={`${designSystem.typography.h2} font-bold ${designSystem.spacing.marginCard}`}>
              Guarda i risultati
            </span>
          </h2>
          <p className={`text-gray-600 ${designSystem.typography.body} max-w-2xl mx-auto`}>
            Qui sotto trovi i cambiamenti reali di chi ha seguito questo metodo.
            <br />
            Corpi scolpiti vite cambiate. <br />
            Tutto senza doping! <br /> Tutto raggiungibile anche per te!
          </p>
        </header>

        {/* Horizontal Scrolling Gallery with Navigation Arrows */}
        <div className={`${designSystem.slider.container}`}>
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className={`${designSystem.slider.navigation.button} ${designSystem.slider.navigation.left} top-40`}
            style={{
              boxShadow:
                "0 8px 32px rgba(249, 112, 21, 0.1), 0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
            aria-label="Scorri galleria a sinistra"
          >
            <ChevronLeft
              className={`${designSystem.slider.navigation.icon}`}
            />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-4 top-40 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white border border-gray-200/50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
            style={{
              boxShadow:
                "0 8px 32px rgba(249, 112, 21, 0.1), 0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
            aria-label="Scorri galleria a destra"
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
            <div className="flex space-x-6 w-max px-2">
              {transformations.map((transformation, index) => (
                <div
                  key={transformation.id}
                  className="group/card cursor-pointer transform transition-all duration-300 hover:scale-105 flex-shrink-0"
                  onClick={() => openModal(index)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 w-80 md:w-96">
                    <img
                      src={transformation.image}
                      alt={transformation.description}
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover/card:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300 opacity-0 group-hover/card:opacity-100">
                      <h3 className="font-bold text-lg mb-1">
                        {transformation.description}
                      </h3>
                      <p className="text-sm">{transformation.details}</p>
                    </div>
                  </div>

                  {/* Description below image */}
                  <div className="mt-4 text-center w-80 md:w-96">
                    <h3 className="font-bold text-lg text-gray-800 mb-2">
                      {transformation.description}
                    </h3>
                    <div className="flex items-center justify-center space-x-2">
                      <span
                        className="px-4 py-2 rounded-full text-white font-semibold text-sm"
                        style={{ backgroundColor: "rgb(249, 112, 21)" }}
                      >
                        {transformation.timeframe}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">
                      {transformation.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile scroll indicator */}
          <div className="flex justify-center mt-6 md:hidden">
            <p className="text-gray-400 text-sm flex items-center">
              <span className="w-2 h-2 bg-gray-300 rounded-full mr-2 animate-pulse"></span>
              Scorri per vedere altre trasformazioni
            </p>
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all duration-300 hover:scale-110 active:scale-95"
                style={{
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all duration-300 hover:scale-110 active:scale-95"
                style={{
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
                aria-label="Immagine precedente"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all duration-300 hover:scale-110 active:scale-95"
                style={{
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
                aria-label="Immagine successiva"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>

              {/* Image */}
              <img
                src={selectedImage.image}
                alt={selectedImage.description}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Modal description */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold mb-2">
                  {selectedImage.description}
                </h3>
                <div className="flex items-center space-x-4">
                  <span
                    className="px-4 py-2 rounded-full font-semibold"
                    style={{ backgroundColor: "rgb(249, 112, 21)" }}
                  >
                    {selectedImage.timeframe}
                  </span>
                  <span className="text-lg">{selectedImage.details}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryBeforeAfter;

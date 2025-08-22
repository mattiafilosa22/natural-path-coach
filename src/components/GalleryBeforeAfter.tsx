import React, { useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import manFirst from "@/assets/before-after/man-first.jpg";
import womanFirst from "@/assets/before-after/woman-first.jpg";

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
      image: manFirst,
      description: "Trasformazione straordinaria in 4 mesi",
      timeframe: "4 mesi",
      details: "Perdita di 15kg e guadagno massa muscolare",
    },
    {
      id: 2,
      image: womanFirst,
      description: "Risultati incredibili in 6 mesi",
      timeframe: "6 mesi",
      details: "Definizione muscolare e tonificazione completa",
    },
    {
      id: 3,
      image: manFirst,
      description: "Cambio radicale in 3 mesi",
      timeframe: "3 mesi",
      details: "Perdita di 12kg e miglioramento posturale",
    },
    {
      id: 4,
      image: womanFirst,
      description: "Trasformazione completa in 8 mesi",
      timeframe: "8 mesi",
      details: "Ricomposizione corporea totale",
    },
    {
      id: 5,
      image: manFirst,
      description: "Risultati visibili in 5 mesi",
      timeframe: "5 mesi",
      details: "Aumento massa magra e definizione",
    },
    {
      id: 6,
      image: womanFirst,
      description: "Cambiamento incredibile in 7 mesi",
      timeframe: "7 mesi",
      details: "Perdita di 20kg e tonificazione muscolare",
    },
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
      const cardWidth = window.innerWidth < 768 ? 320 : 384; // w-80 = 320px, w-96 = 384px
      const spacing = 24; // space-x-6 = 24px
      scrollContainerRef.current.scrollBy({
        left: -(cardWidth + spacing),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (): void => {
    if (scrollContainerRef.current) {
      const cardWidth = window.innerWidth < 768 ? 320 : 384;
      const spacing = 24;
      scrollContainerRef.current.scrollBy({
        left: cardWidth + spacing,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="min-h-full bg-white py-12 px-4 mb-24"
      aria-label="Galleria trasformazioni clienti"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "rgb(249, 112, 21)" }}
          >
            Trasformazioni dei Nostri Clienti
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Scopri i risultati straordinari ottenuti dai nostri clienti grazie a
            programmi di allenamento personalizzati
          </p>
        </header>

        {/* Horizontal Scrolling Gallery with Navigation Arrows */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-40 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white border border-gray-200/50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
            style={{
              boxShadow:
                "0 8px 32px rgba(249, 112, 21, 0.1), 0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <ChevronLeft
              className="w-6 h-6 transition-colors duration-300"
              style={{ color: "rgb(249, 112, 21)" }}
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
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all duration-300 hover:scale-110 active:scale-95"
                style={{
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
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

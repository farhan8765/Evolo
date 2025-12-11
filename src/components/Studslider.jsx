import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function StudSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/images/Mobile1.png',
      alt: 'Mobile Screen 1'
    },
    {
      id: 2,
      image: '/images/Mobile2.png',
      alt: 'Mobile Screen 2'
    },
    {
      id: 3,
      image: '/images/Mobile3.png',
      alt: 'Mobile Screen 3'
    },
    {
      id: 4,
      image: '/images/Mobile4.png',
      alt: 'Mobile Screen 4'
    }
  ];

  const getVisibleSlides = () => {
    if (typeof window === 'undefined') return 3;
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Create infinite slides by tripling the array
  const infiniteSlides = [...slides, ...slides, ...slides];

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev >= slides.length * 2 - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev <= 0) {
        return slides.length * 2 - 1;
      }
      return prev - 1;
    });
  };

  // Auto slide every 1 second
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev >= slides.length * 2 - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(autoSlide);
  }, [slides.length]);

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
           <h2
          className="mt-3 text-4xl font-bold bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent animate-hero-reveal"
          style={{ animationDelay: "0.15s" }}
        >
          Preview our app
        </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            See how we empower students to swipe their way to a better future.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-0 md:-left-6 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-0 md:-right-6 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
          </button>

          {/* Slides Wrapper */}
          <div className="overflow-hidden px-8 md:px-12">
            <div
              className="flex transition-transform duration-500 ease-out gap-4 md:gap-6"
              style={{
                transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`
              }}
            >
              {infiniteSlides.map((slide, index) => (
                <div
                  key={`slide-${index}`}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 flex justify-center"
                >
                  {/* Mobile Phone Frame */}
                  <div className="relative w-full max-w-[280px] mx-auto">
                    {/* Screen */}
                    <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative shadow-xl">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-auto object-cover"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/300x600/6366f1/ffffff?text=Mobile+${slide.id}`;
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full focus:outline-none ${
                  currentSlide % slides.length === index
                    ? 'w-8 h-2 bg-gray-800'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
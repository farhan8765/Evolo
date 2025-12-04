import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  // Rotation order: main hero (h1) + two smaller variants
  const images = ['h1.png', 'student-feature.png', 'home-second.png'];
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getImagePosition = (index) => {
    const diff = (index - activeIndex + 3) % 3;
    
    if (diff === 0) {
      return 'z-30 scale-100 translate-x-0 opacity-100';
    } else if (diff === 1) {
      return 'z-20 scale-60 translate-x-32 sm:translate-x-40 md:translate-x-52 opacity-70';
    } else {
      return 'z-10 scale-60 -translate-x-32 sm:-translate-x-40 md:-translate-x-52 opacity-70';
    }
  };

  return (
    <div 
      className="min-h-[90vh] px-4 py-6 pt-8 sm:py-8 sm:pt-12 font-['Raleway']"
      style={{
        background: 'white'
      }}
    >
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto text-center mb-6 sm:mb-8">
        <p className="text-black text-xs sm:text-sm md:text-base font-semibold mb-3 sm:mb-4 italic">
          The Future of Adult Education
        </p>
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-2">
          <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
            The Future of Adult
          </span>
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4">
          <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
            Education
          </span>
        </h1>
        
        <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 max-w-3xl mx-auto px-2">
          We connect <span className="bg-[#6035EE]/20 text-[#6035EE] font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-sm sm:text-base md:text-lg">Students,</span>
          <span className="bg-[#6035EE]/25 text-[#6035EE] font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded mx-1 sm:mx-2 text-sm sm:text-base md:text-lg">Employers,</span> and 
          <span className="bg-[#6035EE]/30 text-[#6035EE] font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded ml-1 sm:ml-2 text-sm sm:text-base md:text-lg">Institutions,</span> to improve outcomes for everyone.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-4 sm:mb-6 px-4">
          <button
            onClick={() => navigate('/student')}
            className="bg-white text-[#4F00DA] border-2 border-[#9B96FF] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors shadow-lg w-full sm:w-auto"
          >
            Find Jobs
          </button>
          <button
            onClick={() => navigate('/institute')}
            className="bg-white text-[#4F00DA] border-2 border-[#9B96FF] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors shadow-lg w-full sm:w-auto"
          >
            Career Centers
          </button>
          <button
            onClick={() => navigate('/employee')}
            className="bg-white text-[#4F00DA] border-2 border-[#9B96FF] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors shadow-lg w-full sm:w-auto"
          >
            Discover Talent
          </button>
        </div>
      </div>

      {/* Rotating Images Section */}
      <div className="relative max-w-8xl mx-auto h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] flex items-center justify-center overflow-hidden">
        {images.map((img, index) => {
          const isCenter = (index - activeIndex + 3) % 3 === 0;
          const isMainHero = img === 'h1.png';

          // h1.png = main large image; others (student-feature, home-second) are smaller.
          // Front (center) image is intentionally a bit larger than side images.
          const sizeClasses = isMainHero
            ? isCenter
              ? 'w-[270px] sm:w-[330px] md:w-[500px] lg:w-[650px]' // bigger when in front
              : 'w-[210px] sm:w-[260px] md:w-[380px] lg:w-[540px]'
            : isCenter
              ? 'w-[210px] sm:w-[250px] md:w-[330px] lg:w-[420px]' // slightly bigger in front
              : 'w-[150px] sm:w-[190px] md:w-[250px] lg:w-[310px]';

          return (
          <div
            key={index}
            className={`absolute transition-all duration-700 ease-in-out ${getImagePosition(index)}`}
          >
            <img
              src={`/images/${img}`}
              alt={`Preview ${index + 1}`}
              className={`rounded-xl sm:rounded-2xl shadow-2xl ${sizeClasses} h-auto`}
            />
          </div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === activeIndex 
                ? 'bg-[#5A14ED] w-6 sm:w-8' 
                : 'bg-[#5A14ED]/50 hover:bg-[#5A14ED]/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
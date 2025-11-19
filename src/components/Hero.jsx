import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = ['h1.png', 'h1.png', 'h1.png'];
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
      return 'z-30 scale-100 translate-x-0 opacity-100'; // Center image - larger scale
    } else if (diff === 1) {
      return 'z-20 scale-60 translate-x-52 opacity-70';
    } else {
      return 'z-10 scale-60 -translate-x-52 opacity-70';
    }
  };

  return (
    <div 
      className="min-h-[90vh] px-4 py-8 pt-36 font-['Raleway']"
      style={{
        background: 'white'
      }}
    >
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto text-center mb-8">
        <p className="text-black text-sm font-semibold md:text-base mb-4 italic">
          The Future of Adult Education
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2">
          <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
            The Future of Adult
          </span>
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
            Education
          </span>
        </h1>
        
        <p className="text-black text-lg md:text-xl mb-4 max-w-3xl mx-auto">
          We connect <span className="bg-[#6035EE]/20 text-[#6035EE] font-bold px-2 py-1 rounded">Students,</span>
          <span className="bg-[#6035EE]/25  text-[#6035EE] font-bold px-2 py-1 rounded mx-2">Employers,</span> and 
          <span className="bg-[#6035EE]/30 text-[#6035EE] font-bold px-2 py-1 rounded ml-2">Institutions,</span> to improve outcomes for everyone.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <button
            onClick={() => navigate('/student')}
            className="bg-white text-[#4F00DA] border-2 border-[#9B96FF] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Find Jobs
          </button>
          <button
            onClick={() => navigate('/institute')}
            className="bg-white text-[#4F00DA] border-2 border-[#9B96FF] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Career Centers
          </button>
          <button
            onClick={() => navigate('/employee')}
            className="bg-white text-[#4F00DA] border-2 border-[#9B96FF] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Discover Talent
          </button>
        </div>
      </div>

      {/* Rotating Images Section */}
<div className="relative max-w-8xl mx-auto h-[40vh] md:h-[60vh] flex items-center justify-center">        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-700 ease-in-out ${getImagePosition(index)}`}
          >
            <img
              src={`/images/${img}`}
              alt={`Preview ${index + 1}`}
              className={`rounded-2xl shadow-2xl ${
                (index - activeIndex + 3) % 3 === 0 
                  ? 'w-[350px] md:w-[450px] lg:w-[600px]' // Larger size for center image
                  : 'w-[280px] md:w-[350px] lg:w-[500px]'
              } h-auto`}
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex 
                ? 'bg-[#5A14ED] w-8' 
                : 'bg-[#5A14ED]/50 hover:bg-[#5A14ED]/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

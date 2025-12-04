import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Homehero() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 pt-8 font-['Raleway'] pt-4 md:pt-20">
      <div className="max-w-8xl mx-auto">
        {/* Top Tagline */}
        <p className="text-center font-bold text-xs sm:text-sm md:text-base text-gray-700 mb-4 md:mb-2 italic">
          Empowering Education Through Technology
        </p>

        {/* Main Heading */}
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 leading-tight">
          <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
          AI-powered solutions for
          </span>
        </h1>
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 leading-tight">
          <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
          Education & Student Well-Being
          </span>
        </h1>
        {/* <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-6 leading-tight">
          <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
            Mental Health
          </span>
        </h1> */}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 md:mb-8 px-2">
        <button 
  onClick={() => navigate('/mental')}
  className="bg-[#5A14ED] text-white px-16 sm:px-28 py-3 rounded-lg font-semibold hover:bg-[#4910c9] transition-colors shadow-lg text-sm sm:text-base w-auto"
>
  K12
</button>

          <button 
            onClick={() => navigate('/adult')}
            className="bg-white text-[#5A14ED] border-2 border-[#5A14ED] px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto"
          >
         Adult Education Program
          </button>
        </div>

        {/* Bottom Image with side overlays */}
        <div className="relative w-full mx-auto px-2 sm:px-0">
          {/* Left overlay image */}
          <img
            src="/images/hleft.png"
            alt=""
            className="pointer-events-none hidden lg:block absolute left-[5%] top-[0%] -translate-y-1/2 -translate-x-1/3 h-[600px] w-auto object-cover"
          />

          {/* Right overlay image */}
          <img
            src="/images/hright.png"
            alt=""
            className="pointer-events-none hidden lg:block absolute right-[5%] top-[0%] -translate-y-1/2 translate-x-1/3 h-[600px] w-auto object-cover"
          />

          {/* Main center image */}
          <img
            src="/images/Homehero.png"
            alt="Platform Preview"
            className="relative z-10 w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
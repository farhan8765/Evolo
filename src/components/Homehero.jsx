import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Homehero() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 pt-8 font-['Raleway'] pt-4 md:pt-20">
      <div className="max-w-8xl mx-auto">
        
        <p className="text-center font-bold text-xs sm:text-sm md:text-base text-gray-700 mb-4 md:mb-2 italic">
          Empowering Education Through Technology
        </p>

 
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 leading-tight">
          <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
          AI-powered solutions for
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
          Education & Student Well-Being
          </span>
        </h1>
       

        <div className="mb-8 md:mb-8 px-2">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
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

        {/* <p className="flex flex-wrap justify-center items-center gap-x-1 sm:gap-x-2 gap-y-1 text-center text-[15px] font-medium text-[#4D4F58] mt-3 mb-0">
          <Link to="/about-us" className="transition-colors hover:text-[#5C2DD5]">
            About
          </Link>
          <span aria-hidden="true" className="text-[#C4C7D5]">
            ·
          </span>
          <Link to="/contact/" className="transition-colors hover:text-[#5C2DD5]">
            Contact
          </Link>
          <span aria-hidden="true" className="text-[#C4C7D5]">
            ·
          </span>
          <Link to="/faqs" className="transition-colors hover:text-[#5C2DD5]">
            FAQs
          </Link>
        </p> */}
        </div>

    
        <div className="relative w-full mx-auto px-2 sm:px-0">
         
          <img
            src="/images/hleft.webp"
            alt=""
            width={400}
            height={600}
            loading="lazy"
            decoding="async"
            className="pointer-events-none hidden lg:block absolute left-[5%] top-[0%] -translate-y-1/2 -translate-x-1/3 h-[600px] w-auto object-cover"
          />

        
          <img
            src="/images/hright.webp"
            alt=""
            width={400}
            height={600}
            loading="lazy"
            decoding="async"
            className="pointer-events-none hidden lg:block absolute right-[5%] top-[0%] -translate-y-1/2 translate-x-1/3 h-[600px] w-auto object-cover"
          />

          <img
            src="/images/Homehero.webp"
            alt="Platform Preview"
            width={1200}
            height={675}
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            className="relative z-10 w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Homehero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-white pt-10 md:pt-16 font-['Raleway']">
      {/* Side images (left / right) */}
      <div className="pointer-events-none absolute inset-y-20 left-0 hidden lg:block">
        <img
          src="/images/left.png"
          alt=""
          className="h-[420px] w-auto object-cover"
        />
      </div>
      <div className="pointer-events-none absolute inset-y-20 right-0 hidden lg:block">
        <img
          src="/images/right.png"
          alt=""
          className="h-[420px] w-auto object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Top Tagline */}
        <p className="text-center font-bold text-xs sm:text-sm md:text-base text-gray-600 mb-4 italic">
          Empowering Education Through Technology
        </p>

        {/* Main Heading */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
          <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
            AI-powered solutions for
          </span>
        </h1>
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
          <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
            Adult Education & K-12 Mental Health
          </span>
        </h1>

        {/* CTA Buttons */}
        <div className="mb-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <button
            onClick={() => navigate('/mental')}
            className="bg-[#5A14ED] text-white px-8 sm:px-10 lg:px-12 py-3 rounded-lg font-semibold hover:bg-[#4910c9] transition-colors shadow-lg text-sm sm:text-base min-w-[220px] text-center"
          >
            K-12 Mental Health (CYBHI)
          </button>

          <button
            onClick={() => navigate('/adult')}
            className="bg-white text-[#5A14ED] border-2 border-[#5A14ED] px-8 sm:px-10 lg:px-12 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg text-sm sm:text-base min-w-[260px] text-center"
          >
            Adult Education Programs
          </button>
        </div>

        {/* Bottom main image */}
        <div className="relative w-full mx-auto max-w-5xl">
          <img
            src="/images/main-home.png"
            alt="Platform Preview"
            className="w-full h-auto rounded-lg shadow-[0_25px_60px_rgba(27,16,63,0.25)]"
          />
        </div>
      </div>
    </section>
  );
}
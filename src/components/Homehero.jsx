import React from 'react';

export default function Homehero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 py-8 font-['Raleway'] pt-40">
      <div className="max-w-7xl mx-auto">
        {/* Top Tagline */}
        <p className="text-center font-bold text-sm md:text-base text-gray-700 mb-2 italic">
          Empowering Education Through Technology
        </p>

        {/* Main Heading */}
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
            AI-powered solutions for
          </span>
        </h1>
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
            Adult Education & K-12
          </span>
        </h1>
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
            Mental Health
          </span>
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="bg-[#5A14ED] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4910c9] transition-colors shadow-lg">
            Adult Education Programs
          </button>
          <button className="bg-white text-[#5A14ED] border-2 border-[#5A14ED] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg">
            K-12 Mental Health (CYBHI)
          </button>
        </div>

        {/* Bottom Image */}
        <div className="relative w-full max-w-8xl mx-auto">
          <img
            src="/images/main-home.png"
            alt="Platform Preview"
            className="w-full h-auto "
          />
        </div>
      </div>
    </div>
  );
}
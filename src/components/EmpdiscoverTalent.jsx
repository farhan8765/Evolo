import React from 'react';

const EmpdiscoverTalent = () => {
  return (
    <div className="w-full bg-[#EFF0FF] py-16 px-6 font-['Raleway']">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main Heading */}
        <p
          className="text-[16px] font-bold text-[#0D0D21] animate-hero-reveal"
          style={{ animationDelay: "0.05s" }}
        >
          Discover Talent
        </p>
        
        {/* Subtitle with Gradient */}
        <h2
          className="text-3xl sm:text-4xl md:text-[52px] font-bold bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent animate-hero-reveal"
          style={{ animationDelay: "0.15s" }}
        >
          The Recruitment solution for you
        </h2>

        {/* Description */}
        <p
          className="text-gray-600 mb-8 text-base sm:text-lg max-w-2xl mx-auto animate-hero-reveal"
          style={{ animationDelay: "0.25s" }}
        >
          At Adulted Pro, we bridge the gap between employers and job seekers by providing a
          seamless platform where both can thrive.
        </p>

        {/* Get In Touch Button */}
        <button
          className="bg-[#4F00DA] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3A00B8] transition-colors shadow-md animate-hero-reveal"
          style={{ animationDelay: "0.35s" }}
        >
          Get In Touch
        </button>

      </div>
    </div>
  );
};

export default EmpdiscoverTalent;

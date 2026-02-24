import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePlatform() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white py-8 md:py-16 px-4 sm:px-8 md:px-12 lg:px-20 font-['Raleway']">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

        {/* Left Side – Text Content */}
        <div>
          <p className="text-xs font-semibold tracking-wider text-black mb-2">
          K-12

          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
            CYBHI-Compliant          </span>
            <br />
            <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
            Student Support          </span>
            <br />
            <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
            & Counseling Platform          </span>
          </h2>

          <p className="text-gray-600 mb-6 md:mb-8 text-sm sm:text-base">
            We connect staff, counselors, and administrators to streamline 
incident reporting, session management, and compliance documentation.
          </p>

          {/* Feature Buttons */}
          <div className="flex flex-col gap-3 md:gap-4 mb-6 md:mb-8">
            <button className="w-full text-left bg-[#F3F3FF] px-4 sm:px-6 py-3 rounded-xl flex gap-3 items-center font-semibold text-black shadow-sm text-sm sm:text-base hover:bg-[#E8E8FF] transition-colors">
              <span className="bg-[#4F00DA] text-white w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                <img src="/images/Hic1.svg" alt="AI Documentation" className="w-5 h-5" />
              </span>
              Reports for Medical Billing
            </button>

            <button className="w-full text-left bg-[#F3F3FF] px-4 sm:px-6 py-3 rounded-xl flex gap-3 items-center font-semibold text-black shadow-sm text-sm sm:text-base hover:bg-[#E8E8FF] transition-colors">
              <span className="bg-[#4F00DA] text-white w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                <img src="/images/Hic2.svg" alt="Medi-Cal Billing" className="w-5 h-5" />
              </span>
              Session Management 
            </button>

            <button className="w-full text-left bg-[#F3F3FF] px-4 sm:px-6 py-3 rounded-xl flex gap-3 items-center font-semibold text-black shadow-sm text-sm sm:text-base hover:bg-[#E8E8FF] transition-colors">
              <span className="bg-[#4F00DA] text-white w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                <img src="/images/Hic3.svg" alt="Session Management" className="w-5 h-5" />
              </span>
              AI Incident Reporting
            </button>
          </div>

          {/* Button */}
          <button
            onClick={() => navigate("/")}
            className="bg-[#4F00DA] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#4200B8] transition-colors w-full sm:w-auto text-sm sm:text-base"
          >
            Learn More
          </button>
        </div>

        {/* Right Side – Image */}
        <div className="flex items-center justify-center mt-8 md:mt-0">
  <img
    src="/images/home-second.png"
    alt="Platform Mobile Preview"
    className="w-full sm:w-[90%] md:w-[80%] lg:w-[700px] xl:w-[800px] 2xl:w-[900px] h-auto drop-shadow-xl"
  />
</div>

      </div>
    </div>
  );
}
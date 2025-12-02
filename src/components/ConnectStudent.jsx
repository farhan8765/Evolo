import React from "react";

export default function ConnectStudent() {
  return (
    <div className="w-full bg-white py-10 md:py-20 px-4 sm:px-6 font-['Raleway']">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

        {/* Right Side – Text + Buttons (Shows First on Mobile) */}
        <div className="order-1 md:order-2">
          <p className="text-xs font-semibold tracking-wider text-black mb-2">
            Adult Education Programs
          </p>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
              Connect Students,
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
              Employers & Institutions
            </span>
          </h2>

          <p className="text-gray-600 mb-6 md:mb-8 text-sm sm:text-base">
            Building a three-way ecosystem where students find careers, 
employers discover talent, and institutions prove impact.
          </p>

          {/* Feature Buttons */}
          <div className="flex flex-col gap-3 md:gap-4 mb-6 md:mb-8">
            <button className="w-full text-left bg-[#F3F3FF] px-4 sm:px-6 py-3 rounded-xl flex gap-3 items-center font-semibold text-black shadow-sm text-sm sm:text-base hover:bg-[#E8E8FF] transition-colors">
              <span className="bg-[#4F00DA] text-white w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                <img src="/images/Hic4.svg" alt="Job Matching" className="w-5 h-5" />
              </span>
              Tracking Transition to Higher Education
            </button>

            <button className="w-full text-left bg-[#F3F3FF] px-4 sm:px-6 py-3 rounded-xl flex gap-3 items-center font-semibold text-black shadow-sm text-sm sm:text-base hover:bg-[#E8E8FF] transition-colors">
              <span className="bg-[#4F00DA] text-white w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                <img src="/images/Hic5.svg" alt="Career Events" className="w-5 h-5" />
              </span>
              Career Enablement
            </button>

            <button className="w-full text-left bg-[#F3F3FF] px-4 sm:px-6 py-3 rounded-xl flex gap-3 items-center font-semibold text-black shadow-sm text-sm sm:text-base hover:bg-[#E8E8FF] transition-colors">
              <span className="bg-[#4F00DA] text-white w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                <img src="/images/Hic6.svg" alt="Student Tracking" className="w-5 h-5" />
              </span>
              Community Development
            </button>

            <button className="w-full text-left bg-[#F3F3FF] px-4 sm:px-6 py-3 rounded-xl flex gap-3 items-center font-semibold text-black shadow-sm text-sm sm:text-base hover:bg-[#E8E8FF] transition-colors">
              <span className="bg-[#4F00DA] text-white w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                <img src="/images/Hic6.svg" alt="Student Tracking" className="w-5 h-5" />
              </span>
              AB104
            </button>
          </div>

          {/* Learn More Button */}
          <button className="bg-[#4F00DA] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#4200B8] transition-colors w-full sm:w-auto text-sm sm:text-base">
            Learn More
          </button>
        </div>

        {/* Left Side – Mobile Image (Shows Second on Mobile) */}
        <div className="flex items-center justify-center order-2 md:order-1">
          <img
            src="/images/home-fourth.png"
            alt="Mobile Preview"
            className="w-full sm:w-[80%] md:w-[75%] lg:w-[700px] xl:w-[800px] 2xl:w-[900px] h-auto drop-shadow-xl"
          />
        </div>

      </div>
    </div>
  );
}
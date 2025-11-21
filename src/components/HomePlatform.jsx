import React from "react";

export default function HomePlatform() {
  return (
    <div className="w-full bg-white py-16 px-20 font-['Raleway']">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left Side – Text Content */}
        <div>
          <p className="text-xs font-semibold tracking-wider text-black mb-2">
            K–12 Mental Health (CYBHI)
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
              One Platform.
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
              Two Powerful Solutions.
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
              Infinite Possibilities.
            </span>
          </h2>

          <p className="text-gray-600 mb-8">
            Whether you're seeking a fresh start or looking to leverage your existing
            skills in a new industry, we're here to help you succeed.
          </p>

          {/* Feature Buttons */}
          <div className="flex flex-col gap-4 mb-8">
            <button className="w-full text-left bg-[#F3F3FF] px-6 py-3 rounded-xl flex gap-3 items-center font-semibold text-black shadow-sm">
              <span className="bg-[#4F00DA] text-white w-8 h-8 rounded-lg flex items-center justify-center">📘</span>
              AI Documentation
            </button>

            <button className="w-full text-left bg-[#F3F3FF] px-6 py-3 rounded-xl flex gap-3 items-center font-semibold text-black shadow-sm">
              <span className="bg-[#4F00DA] text-white w-8 h-8 rounded-lg flex items-center justify-center">💳</span>
              Medi-Cal Billing
            </button>

            <button className="w-full text-left bg-[#F3F3FF] px-6 py-3 rounded-xl flex gap-3 items-center font-semibold text-black shadow-sm">
              <span className="bg-[#4F00DA] text-white w-8 h-8 rounded-lg flex items-center justify-center">📊</span>
              Session Management
            </button>
          </div>

          {/* Button */}
          <button className="bg-[#4F00DA] text-white px-8 py-3 rounded-lg font-semibold shadow-md">
            Learn More
          </button>
        </div>

        {/* Right Side – Image */}
        <div className="flex items-center justify-center">
          <img
            src="/images/home-second.png"
            alt="Platform Mobile Preview"
            className="w-[90%] md:w-[75%] lg:w-[70%] h-auto drop-shadow-xl"
          />
        </div>

      </div>
    </div>
  );
}
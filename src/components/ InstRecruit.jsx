import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function InstRecruit() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[480px] bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center px-4 py-12 font-['Raleway']">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-md font-bold text-black mb-4">
            Discover Talent
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-[#2B1BDD] bg-clip-text text-transparent">
            The Recruitment solution for you
          </h1>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Reporting Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Reporting
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Manage virtual and in-person events and fairs
            </p>
          </div>

          {/* Employer Management Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Employer Management
            </h3>
            <p className="text-gray-600 leading-relaxed">
              See 2-3x increase in number of reputable job postings
            </p>
          </div>

          {/* Events Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Events
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Showcase your value with the help of sophisticated reporting
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={() => navigate('/contact')}
            className="bg-[#5A14ED] hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}
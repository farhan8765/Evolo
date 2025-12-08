import React, { useState } from 'react';

const Blog8 = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:px-8 md:py-10 font-['Raleway']">
        {/* Article Header */}
        <div className="mb-10 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900 leading-tight mb-6">
            Upskilling vs. Reskilling: What's Right for You in a Rapidly Changing Job Market
          </h1>
          
          {/* Hero Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/images/blog8.jpg" 
              alt="Upskilling vs Reskilling - Career Development in Changing Job Market"
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
              <span className="font-medium">Evolo AI Team</span>
            </div>
            <span>•</span>
            <span>March 2024</span>
          </div>
        </div>

        {/* Key Summary Box */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 rounded-r-lg p-6 mb-12 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Key Summary
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            In 2025's fast-changing job market, upskilling helps you grow within your current role 
            by enhancing existing skills, while reskilling prepares you for an entirely new career 
            path. Choosing the right path depends on your goals, industry trends, and job stability. 
            Both strategies are vital for staying competitive, and combining them can future-proof 
            your career in the age of AI and automation.
          </p>
        </div>

        {/* Your content sections will go here */}
        {/* Example: */}
        {/* <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Section Title</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>Your content here...</p>
          </div>
        </div> */}

      </section>
    </div>
  );
};

export default Blog8;
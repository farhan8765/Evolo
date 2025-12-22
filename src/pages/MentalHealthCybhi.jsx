import React, { useEffect } from 'react';

export default function MentalHealthCybhi() {
  useEffect(() => {
    // Document title set karna
    document.title = 'K-12 Mental Health (CYBHI) - Evolo AI';

    // Meta description update karna
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      'Learn how Evolo AI supports K-12 student mental health through CYBHI-aligned, AI-powered tools for counselors, administrators, and school staff.';

    // Canonical link add karna
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://goevolo.com/mental/';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
            K-12 Mental Health (CYBHI)
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
          Supporting student mental health through innovative AI-powered solutions. 
          Our CYBHI-aligned platform helps counselors, administrators, and classified 
          staff provide better care and support to students across K-12 education 
          systems, ensuring every child gets the mental health resources they need.
        </p>
      </div>
    </div>
  );
}
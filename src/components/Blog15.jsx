// Blog15.jsx
import React, { useState, useEffect } from 'react';

const Blog15 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    // Document title set karna
    document.title = 'Top 5 High-Income Skills Young Adults Should Learn in 2025 | Evolo AI';

    // Meta description update karna
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      'Learn the top 5 high-income skills young adults should master in 2025. Explore career paths in healthcare, IT, manufacturing, business, and sustainability with Evolo AI.';

    // Canonical link add karna
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://goevolo.com/top-5-high-income-skills-young-adults-should-learn-for-2025/';

    // OG tags add/update karna
    const ogTags = [
      {
        property: 'og:title',
        content: 'Top 5 High-Income Skills Young Adults Should Learn in 2025 | Evolo AI',
      },
      {
        property: 'og:description',
        content:
          'Learn the top 5 high-income skills young adults should master in 2025. Explore career paths in healthcare, IT, manufacturing, business, and sustainability with Evolo AI.',
      },
      {
        property: 'og:url',
        content: 'https://goevolo.com/top-5-high-income-skills-young-adults-should-learn-for-2025/',
      },
      { property: 'og:type', content: 'article' },
      { property: 'og:site_name', content: 'Evolo AI' },
      { property: 'og:image', content: 'https://goevolo.com/images/blog15.png' },
    ];

    ogTags.forEach((tag) => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });

    // Twitter tags add/update karna
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: 'Top 5 High-Income Skills Young Adults Should Learn in 2025 | Evolo AI',
      },
      {
        name: 'twitter:description',
        content:
          'Learn the top 5 high-income skills young adults should master in 2025. Explore career paths in healthcare, IT, manufacturing, business, and sustainability with Evolo AI.',
      },
      {
        name: 'twitter:url',
        content: 'https://goevolo.com/top-5-high-income-skills-young-adults-should-learn-for-2025/',
      },
      { name: 'twitter:image', content: 'https://goevolo.com/images/blog15.png' },
    ];

    twitterTags.forEach((tag) => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center mb-6 font-['Raleway']">
          Top 5 High-Income Skills Young Adults Should Learn for 2025
        </h1>

        {/* Blog Header with Image */}
        <div className="mb-8 flex justify-center">
          <img
            src="/images/blog15.png"
            alt="Top 5 High-Income Skills Young Adults Should Learn for 2025"
            className="w-full max-w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Author & Date Info */}
        <div className="flex items-center text-gray-600 mb-8 pb-6 border-b font-['Raleway']">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-600 font-semibold">EL</span>
            </div>
            <div>
              <p className="font-medium">Evolo AI</p>
              <p className="text-sm">Published on January 27, 2025 • 5 min read</p>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none font-['Raleway']">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            The job market is changing faster than ever, and what worked yesterday might not be enough today. To truly stand out, it's important to focus on skills that are shaping the future. As technology continues to transform industries, mastering certain high-demand abilities can open doors to exciting and lucrative career paths.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
            Here are five essential skills young adults should consider learning to secure a fulfilling, high-paying career in 2025.
          </p>

          {/* Table of Contents */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-gray-700">
              <li>Health Science</li>
              <li>Information Technology</li>
              <li>Manufacturing</li>
              <li>Business Management &amp; Administration</li>
              <li>Agriculture, Food &amp; Natural Resources</li>
              <li>Frequently Asked Questions</li>
              <li>Final Thoughts</li>
            </ul>
          </div>

          {/* 1. Health Science */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">1. Health Science</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            The healthcare industry is booming, with high demand for skilled professionals in nursing, medical assisting, and health informatics. The need for qualified healthcare workers continues to grow, especially as healthcare technology advances.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-4 mb-2">How to Build This Skill:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Enroll in nursing, medical assisting, or health informatics programs.</li>
            <li>Seek certification and hands-on training at local community colleges or through online platforms.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-4 mb-2">Careers to Explore:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Registered Nurse</li>
            <li>Medical Assistant</li>
            <li>Health Informatics Specialist</li>
          </ul>

          {/* 2. Information Technology */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information Technology</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            Technology is evolving at an unprecedented pace, making IT skills one of the most valuable assets for any career. Expertise in programming, cybersecurity, and network administration is critical to the future of nearly every business.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-4 mb-2">How to Build This Skill:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Learn programming languages (e.g., Python, Java, SQL).</li>
            <li>Complete certifications in cybersecurity (e.g., CompTIA Security+).</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-4 mb-2">Careers to Explore:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Software Developer</li>
            <li>Cybersecurity Analyst</li>
            <li>Network Administrator</li>
          </ul>

          {/* 3. Manufacturing */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">3. Manufacturing</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            The manufacturing sector is experiencing a revolution, thanks to automation and advanced technologies. Skilled professionals in areas like robotics, CNC machining, and quality control are essential for maintaining and improving production systems.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-4 mb-2">How to Build This Skill:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Take courses in welding, CNC machining, or industrial technology.</li>
            <li>Pursue hands-on training through apprenticeships or trade schools.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-4 mb-2">Careers to Explore:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>CNC Machinist</li>
            <li>Quality Control Specialist</li>
            <li>Robotics Technician</li>
          </ul>

          {/* 4. Business Management & Administration */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">4. Business Management &amp; Administration</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            Leadership in business requires a solid understanding of management, finance, and strategy. A strong foundation in areas like entrepreneurship, business law, and accounting can set you up for success in a range of industries.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-4 mb-2">How to Build This Skill:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Study business management, accounting, and entrepreneurship through online programs or local universities.</li>
            <li>Gain practical experience through internships or mentorship opportunities.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-4 mb-2">Careers to Explore:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Business Manager</li>
            <li>Entrepreneur</li>
            <li>Financial Analyst</li>
          </ul>

          {/* 5. Agriculture, Food & Natural Resources */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">5. Agriculture, Food &amp; Natural Resources</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            With a growing emphasis on sustainability and innovation in agriculture, careers in food production and environmental sciences are increasingly valuable. Skills in areas like environmental science, animal science, and horticulture are essential for the future.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-4 mb-2">How to Build This Skill:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Enroll in programs focused on environmental science, horticulture, or agricultural technology.</li>
            <li>Participate in internships or practical training programs to gain industry experience.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-4 mb-2">Careers to Explore:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Agricultural Specialist</li>
            <li>Environmental Scientist</li>
            <li>Horticulturist</li>
          </ul>

          {/* Image */}
          <div className="mb-8 flex justify-center">
            <img
              src="/images/blog15two.jpg"
              alt="Agriculture, Food & Natural Resources"
              className="w-full max-w-2xl h-auto rounded-xl shadow-lg"
            />
          </div>

          {/* Frequently Asked Questions */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                onClick={() => toggleFAQ(0)}
              >
                <span className="font-medium text-gray-900">1. Why Should Young Adults Focus On High-Income Skills?</span>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === 0 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === 0 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700">High-income skills are in high demand and offer better career opportunities, financial stability, and job flexibility, making them ideal for future-proof careers.</p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                onClick={() => toggleFAQ(1)}
              >
                <span className="font-medium text-gray-900">2. How Long Does It Take To Learn These Skills?</span>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === 1 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === 1 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700">The time required depends on the complexity of the skill and your dedication. Most skills can be learned within 3 to 12 months with consistent effort.</p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                onClick={() => toggleFAQ(2)}
              >
                <span className="font-medium text-gray-900">3. Are Online Courses Enough To Master These Skills?</span>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === 2 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === 2 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700">Yes, many online platforms offer comprehensive courses, certifications, and hands-on projects to help you master these skills effectively.</p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                onClick={() => toggleFAQ(3)}
              >
                <span className="font-medium text-gray-900">4. What Industries Value These Skills The Most?</span>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === 3 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === 3 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700">Industries like healthcare, technology, manufacturing, business, and agriculture highly value these skills due to their growing reliance on innovation and efficiency.</p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                onClick={() => toggleFAQ(4)}
              >
                <span className="font-medium text-gray-900">5. How Can Evolo AI Help In Career Development?</span>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === 4 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === 4 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700">Evolo AI connects job seekers with resources, training programs, and career opportunities, helping them build the skills needed for high-paying roles.</p>
                </div>
              )}
            </div>
          </div>

          {/* Final Thoughts */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
            Final Thoughts
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              In today's fast-evolving job market, investing in high-income skills is crucial for success. By focusing on the right skills, young adults can enhance their career prospects, achieve financial stability, and experience personal and professional growth. The future is full of opportunities, and with the right training and resources, you can position yourself for a fulfilling and rewarding career.
            </p>
            
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Ready to unlock your potential? Evolo AI is here to connect you with career opportunities and resources to build the future you deserve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog15;

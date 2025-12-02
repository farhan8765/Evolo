// Blog1.jsx
import React from 'react';

const Blog1 = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Blog Header with Image */}
        <div className="mb-8">
          <img 
            src="/images/blog1.png" 
            alt="Single parent studying at adult school" 
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Blog Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Overcoming Barriers: How Single Parents Benefit from Adult Schools
        </h1>

        {/* Author & Date Info */}
        <div className="flex items-center text-gray-600 mb-8 pb-6 border-b">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-600 font-semibold">SP</span>
            </div>
            <div>
              <p className="font-medium">Single Parent Support Network</p>
              <p className="text-sm">Published on May 15, 2024 • 5 min read</p>
            </div>
          </div>
        </div>

        {/* Key Summary Box */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Key Summary:</h2>
          <p className="text-gray-700 leading-relaxed">
            Single parents have to struggle with lots of difficulties as they strive to balance family, 
            money, and career development. Adult schools provide them with the chance to restore their lives, 
            improve their job opportunities, and find resources that can help them become stable and independent. 
            In this blog, there is an analysis of how adult schools empower single parents through flexible learning, 
            career opportunities, and emotional and financial support. It is also focused on real-world statistics, 
            familiar cases, and relation to bigger workforce trends.
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none text-gray-700">
          
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Unique Challenges of Single Parents</h2>
          <p className="mb-6">
            Single parents often face a complex web of responsibilities that can make personal and professional 
            development seem like an impossible dream. Between childcare, financial pressures, and work commitments, 
            finding time for education can be overwhelming.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How Adult Schools Provide Solutions</h2>
          
          <div className="grid md:grid-cols-3 gap-6 my-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Flexible Learning</h3>
              <p className="text-gray-600">
                Evening classes, online options, and self-paced programs allow single parents to study around their family schedules.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Career Opportunities</h3>
              <p className="text-gray-600">
                Practical skills training and certification programs that lead directly to better employment prospects.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Support Systems</h3>
              <p className="text-gray-600">
                Access to childcare resources, counseling, financial aid, and peer networks that understand their unique challenges.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Real-World Impact</h2>
          <p className="mb-6">
            Statistics show that single parents who complete adult education programs experience a significant increase 
            in employment rates and average income. Beyond the numbers, these programs restore confidence and create 
            sustainable pathways to independence.
          </p>

          <div className="bg-gray-100 p-6 rounded-xl my-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Success Story Spotlight</h3>
            <p className="italic text-gray-700">
              "As a single mother of two, I never thought I could go back to school. The adult education program 
              provided evening classes and childcare support. Today, I'm a certified medical assistant with a stable 
              career that allows me to provide for my family." - Maria, Program Graduate
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Broader Workforce Trends</h2>
          <p className="mb-6">
            The success of single parents in adult education programs reflects larger trends in workforce development. 
            Employers increasingly value diverse life experiences and resilience—qualities that single parents develop 
            through managing their complex responsibilities.
          </p>

          <div className="border-t border-gray-200 mt-12 pt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Adult Education</span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Single Parents</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Career Development</span>
              <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">Workforce Training</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Supporting Single Parents in Education</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Learn how you can support or enroll in adult education programs designed for single parents.
          </p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
            Explore Programs
          </button>
        </div>

      </div>
    </div>
  );
};

export default Blog1;
// Blog3.jsx
import React, { useState } from 'react';

const Blog3 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Title - Purple Theme */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-6 font-['Raleway']">
          Career Change After 30: How Adults Can Successfully Pivot to New Industries
        </h1>
        
        {/* Blog Header with Image */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/images/blog3.png" 
            alt="Career change after 30 illustration" 
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Author & Date Info */}
        <div className="flex items-center text-gray-600 mb-8 pb-6 border-b font-['Raleway']">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#5A14ED10' }}>
              <span className="font-semibold" style={{ color: '#5A14ED' }}>CC</span>
            </div>
            <div>
              <p className="font-medium">Career Change Guide</p>
              <p className="text-sm">Published on July 15, 2024 • 8 min read</p>
            </div>
          </div>
        </div>

        {/* Key Summary Box - Purple Theme */}
        <div className="p-6 rounded-r-lg mb-10 font-['Raleway']" style={{ backgroundColor: '#5A14ED10', borderLeft: '4px solid #5A14ED' }}>
          <h2 className="text-xl font-bold text-gray-800 mb-3">Key Summary:</h2>
          <p className="text-gray-700 leading-relaxed">
            Adults can successfully change careers after 30 by reskilling, using transferable skills, and building strong networks to enter new industries with confidence.
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none text-gray-700 font-['Raleway']">
          
          <p className="mb-6">
            The notion that career changes are only for recent graduates is outdated. In today's dynamic job market, professionals over 30 are increasingly pivoting to new industries, driven by evolving personal goals, technological shifts, and the pursuit of greater fulfillment. While the transition may seem daunting, it is entirely achievable with strategic planning, leveraging existing experience, and targeted skill development. This guide explores practical steps for navigating a successful career change after 30.
          </p>

          {/* Table of Contents */}
          <div className="bg-white p-6 mt-8 rounded-xl border border-gray-200 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Table of Content</h2>
            
            <ol className="list-decimal pl-5 space-y-2">
              <li className="text-gray-700 font-medium">Why Career Change After 30 is More Common Than You Think</li>
              <li className="text-gray-700 font-medium">Assessing Your Transferable Skills: What You Already Bring</li>
              <li className="text-gray-700 font-medium">Strategic Reskilling: Identifying What You Need to Learn</li>
              <li className="text-gray-700 font-medium">Building a Strong Professional Network in Your Target Industry</li>
              <li className="text-gray-700 font-medium">Overcoming Psychological Barriers and Self-Doubt</li>
              <li className="text-gray-700 font-medium">Financial Planning for a Career Transition</li>
              <li className="text-gray-700 font-medium">Crafting Your Career Change Resume and Portfolio</li>
              <li className="text-gray-700 font-medium">Navigating Interviews as a Career Changer</li>
              <li className="text-gray-700 font-medium">Industry-Specific Transition Strategies</li>
              <li className="text-gray-700 font-medium">Frequently Asked Questions</li>
              <li className="text-gray-700 font-medium">Success Stories: Real-Life Career Changers</li>
              <li className="text-gray-700 font-medium">Final Takeaways</li>
              <li className="text-gray-700 font-medium">Resources & References</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why Career Change After 30 is More Common Than You Think
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Contrary to popular belief, career changes after 30 are not only common but increasingly normalized. According to recent labor market studies, the average professional will change careers 3-5 times throughout their working life. For adults over 30, motivations range from seeking better work-life balance, pursuing long-delayed passions, or adapting to industry disruptions like automation and digital transformation.
            </p>
            
            <p className="text-gray-700">
              The stability and experience gained in your 20s provide a solid foundation for calculated risk-taking in your 30s. You're not starting from scratch; you're repositioning your accumulated knowledge and skills in a new context. This perspective shift is crucial for overcoming the initial hesitation many feel when contemplating a major professional pivot.
            </p>
            
            <div className="my-8 flex justify-center">
              <img 
                src="/images/blog3img2.png" 
                alt="Career change statistics and trends" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Assessing Your Transferable Skills: What You Already Bring
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Before pursuing additional training, conduct a comprehensive audit of your transferable skills. These are competencies that apply across industries, including project management, communication, problem-solving, leadership, and client relations. A marketing professional, for example, possesses analytical skills valuable in data science, while a teacher's communication abilities translate well to corporate training or content creation.
            </p>
            
            <p className="text-gray-700">
              Document specific examples of how you've applied these skills in your current role. Quantify achievements where possible—"increased team productivity by 20%" or "managed a budget of $500K." This exercise not only builds confidence but provides concrete material for resumes and interviews in your target industry.
            </p>
          </div>

          <div className="mt-10 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Strategic Reskilling Pathways</h2>
            
            <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-bold text-gray-900 bg-gray-100 border-r border-gray-300">
                      Skill Category
                    </th>
                    <th className="px-6 py-4 text-left text-lg font-bold text-white border-r border-gray-300" style={{ backgroundColor: '#5A14ED' }}>
                      Recommended Approach
                    </th>
                    <th className="px-6 py-4 text-left text-lg font-bold text-gray-900 bg-gray-50">
                      Time Investment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 border-r border-gray-300 font-medium text-gray-900">
                      Technical/Digital Skills
                    </td>
                    <td className="px-6 py-4 border-r border-gray-300">
                      <span className="text-gray-700">Online courses (Coursera, Udemy), coding bootcamps, certifications</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-700">3-12 months</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 border-r border-gray-300 font-medium text-gray-900">
                      Industry-Specific Knowledge
                    </td>
                    <td className="px-6 py-4 border-r border-gray-300">
                      <span className="text-gray-700">Professional workshops, industry conferences, mentorship</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-700">6-18 months</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 border-r border-gray-300 font-medium text-gray-900">
                      Soft Skills Development
                    </td>
                    <td className="px-6 py-4 border-r border-gray-300">
                      <span className="text-gray-700">Communication coaching, leadership training, networking groups</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-700">Ongoing</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 border-r border-gray-300 font-medium text-gray-900">
                      Formal Education
                    </td>
                    <td className="px-6 py-4 border-r border-gray-300">
                      <span className="text-gray-700">Part-time degrees, executive education, graduate certificates</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-700">1-3 years</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Building a Strong Professional Network in Your Target Industry
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Networking is arguably the most critical component of a successful career change. Start by identifying professionals in your target industry through LinkedIn, alumni networks, and professional associations. Request informational interviews to learn about industry trends, required skills, and potential opportunities.
            </p>
            
            <p className="text-gray-700">
              Attend industry conferences, webinars, and local meetups. When networking, focus on building genuine relationships rather than immediately seeking job opportunities. Offer value by sharing relevant insights from your previous experience. According to recruitment data, over 70% of career changers find opportunities through referrals and connections rather than traditional applications.
            </p>
            
            <div className="my-8 flex justify-center">
              <img 
                src="/images/blog3img3.png" 
                alt="Networking strategies for career changers" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="mt-10 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Transferable Skills by Previous Industry</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#5A14ED' }}>From Corporate Roles</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1" style={{ backgroundColor: '#5A14ED20' }}>
                      <span style={{ color: '#5A14ED' }}>•</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Project Management</p>
                      <p className="text-gray-600 text-sm">Applicable to tech, consulting, operations</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1" style={{ backgroundColor: '#5A14ED20' }}>
                      <span style={{ color: '#5A14ED' }}>•</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Stakeholder Communication</p>
                      <p className="text-gray-600 text-sm">Valuable in client services, HR, marketing</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1" style={{ backgroundColor: '#5A14ED20' }}>
                      <span style={{ color: '#5A14ED' }}>•</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Budget Management</p>
                      <p className="text-gray-600 text-sm">Transferable to nonprofit, education, startups</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Right Column */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#5A14ED' }}>From Creative/Service Roles</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1" style={{ backgroundColor: '#5A14ED20' }}>
                      <span style={{ color: '#5A14ED' }}>•</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Problem-Solving</p>
                      <p className="text-gray-600 text-sm">Essential for tech, engineering, consulting</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1" style={{ backgroundColor: '#5A14ED20' }}>
                      <span style={{ color: '#5A14ED' }}>•</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Adaptability</p>
                      <p className="text-gray-600 text-sm">Critical in startups, healthcare, education</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1" style={{ backgroundColor: '#5A14ED20' }}>
                      <span style={{ color: '#5A14ED' }}>•</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Client Relationship Management</p>
                      <p className="text-gray-600 text-sm">Transferable to sales, account management, consulting</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Overcoming Common Career Change Challenges</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Challenges Column */}
              <div className="rounded-xl p-6" style={{ backgroundColor: '#5A14ED10', border: '1px solid #5A14ED30' }}>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#5A14ED20' }}>
                    <span className="font-bold" style={{ color: '#5A14ED' }}>!</span>
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#5A14ED' }}>Common Challenges</h3>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1" style={{ color: '#5A14ED' }}>•</span>
                    <span className="text-gray-700">Fear of starting over financially</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1" style={{ color: '#5A14ED' }}>•</span>
                    <span className="text-gray-700">Imposter syndrome in new field</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1" style={{ color: '#5A14ED' }}>•</span>
                    <span className="text-gray-700">Age discrimination concerns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1" style={{ color: '#5A14ED' }}>•</span>
                    <span className="text-gray-700">Balancing reskilling with current job</span>
                  </li>
                </ul>
              </div>
              
              {/* Solutions Column */}
              <div className="bg-white border border-gray-300 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Proven Solutions</h3>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700">Build 6-12 month financial runway before transition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700">Focus on transferable skills you already possess</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700">Frame experience as asset, not liability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700">Create structured learning schedule (10-15 hrs/week)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Change Timeline: Realistic Expectations</h2>
            
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="relative">
                {/* Timeline */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                  <div className="mb-4 md:mb-0">
                    <div className="w-8 h-8 rounded-full mb-2 mx-auto" style={{ backgroundColor: '#5A14ED' }}></div>
                    <p className="font-bold text-center" style={{ color: '#5A14ED' }}>Months 1-3</p>
                    <p className="text-gray-600 text-sm text-center">Self-Assessment & Research</p>
                  </div>
                  
                  <div className="hidden md:block flex-grow h-1 mx-4" style={{ backgroundColor: '#5A14ED50' }}></div>
                  
                  <div className="mb-4 md:mb-0">
                    <div className="w-8 h-8 rounded-full mb-2 mx-auto" style={{ backgroundColor: '#5A14ED' }}></div>
                    <p className="font-bold text-center" style={{ color: '#5A14ED' }}>Months 4-9</p>
                    <p className="text-gray-600 text-sm text-center">Skill Development & Networking</p>
                  </div>
                  
                  <div className="hidden md:block flex-grow h-1 mx-4" style={{ backgroundColor: '#5A14ED50' }}></div>
                  
                  <div className="mb-4 md:mb-0">
                    <div className="w-8 h-8 rounded-full mb-2 mx-auto" style={{ backgroundColor: '#5A14ED' }}></div>
                    <p className="font-bold text-center" style={{ color: '#5A14ED' }}>Months 10-15</p>
                    <p className="text-gray-600 text-sm text-center">Application & Interview Phase</p>
                  </div>
                  
                  <div className="hidden md:block flex-grow h-1 mx-4" style={{ backgroundColor: '#5A14ED50' }}></div>
                  
                  <div>
                    <div className="w-8 h-8 rounded-full mb-2 mx-auto" style={{ backgroundColor: '#5A14ED' }}></div>
                    <p className="font-bold text-center" style={{ color: '#5A14ED' }}>Month 16+</p>
                    <p className="text-gray-600 text-sm text-center">Transition & Onboarding</p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-center mt-6">
                  <strong>Note:</strong> Most successful career transitions after 30 take 12-24 months from initial consideration to full transition. Patience and persistence are key.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                onClick={() => toggleFAQ(0)}
              >
                <span className="font-medium text-gray-900">Am I too old to change careers at 35+?</span>
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
                  <p className="text-gray-700">
                    Absolutely not. Many successful career changers are in their 40s and 50s. Your experience is a valuable asset that younger candidates don't possess. Employers increasingly value the maturity, work ethic, and problem-solving skills that come with experience.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                onClick={() => toggleFAQ(1)}
              >
                <span className="font-medium text-gray-900">How do I explain my career change to employers?</span>
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
                  <p className="text-gray-700">
                    Frame your career change as a strategic decision, not a reactive one. Emphasize transferable skills, what you've learned about yourself and your goals, and how your previous experience uniquely positions you for this new role. Practice a concise, compelling narrative that connects your past to your future.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                onClick={() => toggleFAQ(2)}
              >
                <span className="font-medium text-gray-900">Should I take a pay cut to change careers?</span>
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
                  <p className="text-gray-700">
                    This depends on your financial situation and long-term goals. Many career changers accept a temporary reduction for entry-level positions in their new field, with the expectation of rapid advancement. However, by emphasizing transferable skills and relevant experience, you may negotiate a salary closer to your previous earnings.
                  </p>
                </div>
              )}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Success Stories: Real-Life Career Changers
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              • <strong>Marketing to Data Science:</strong> Sarah, 34, leveraged her analytical skills from marketing to transition into data science through a 6-month bootcamp. She now works as a data analyst at a tech startup.
            </p>
            
            <p className="text-gray-700">
              • <strong>Teaching to Corporate Training:</strong> Michael, 42, used his classroom experience and communication skills to become a corporate trainer, eventually starting his own consulting business.
            </p>
            
            <p className="text-gray-700">
              • <strong>Finance to UX Design:</strong> Priya, 37, combined her understanding of user behavior from finance with self-taught design skills to transition into UX design, securing a position at a digital agency.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Final Takeaways</h2>
          <div className="space-y-4">
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#5A14ED10', border: '1px solid #5A14ED30' }}>
              <p className="text-gray-700 font-medium">
                1. Your experience is an asset, not a liability. Frame your career change as an evolution, not a restart.
              </p>
            </div>
            
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#5A14ED10', border: '1px solid #5A14ED30' }}>
              <p className="text-gray-700 font-medium">
                2. Strategic networking often matters more than additional credentials. Build relationships before you need them.
              </p>
            </div>
            
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#5A14ED10', border: '1px solid #5A14ED30' }}>
              <p className="text-gray-700 font-medium">
                3. Most successful transitions take 12-24 months. Be patient and celebrate incremental progress.
              </p>
            </div>
            
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#5A14ED10', border: '1px solid #5A14ED30' }}>
              <p className="text-gray-700 font-medium">
                4. The most successful career changers combine reskilling with leveraging existing transferable skills.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Resources & References
          </h2>
          <div className="space-y-3 bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 text-sm">
              LinkedIn Economic Graph. (2023). Career Changes and the Future of Work.{" "}
              <a 
                href="https://economicgraph.linkedin.com/research/career-changes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                https://economicgraph.linkedin.com/research/career-changes
              </a>
            </p>
            
            <p className="text-gray-700 text-sm">
              Harvard Business Review. (2022). Making a Mid-Career Transition.{" "}
              <a 
                href="https://hbr.org/2022/03/making-a-mid-career-transition" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                https://hbr.org/2022/03/making-a-mid-career-transition
              </a>
            </p>
            
            <p className="text-gray-700 text-sm">
              Bureau of Labor Statistics. (2023). Occupational Outlook Handbook: Career Changes.{" "}
              <a 
                href="https://www.bls.gov/ooh/about/career-changes.htm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                https://www.bls.gov/ooh/about/career-changes.htm
              </a>
            </p>
            
            <p className="text-gray-700 text-sm">
              McKinsey & Company. (2023). The Future of Work: Reskilling for Career Transitions.{" "}
              <a 
                href="https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-future-of-work-reskilling-for-career-transitions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-future-of-work-reskilling-for-career-transitions
              </a>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Blog3;
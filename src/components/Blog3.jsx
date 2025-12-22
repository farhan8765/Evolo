// Blog3.jsx
import React, { useState, useEffect } from 'react'; // 👈 yahan useEffect add karen

const Blog3 = () => {
  const [openIndex, setOpenIndex] = useState(null);


  useEffect(() => {
    // Document title set karna
    document.title = 'Career Change After 30: Real Strategies That Work';
    
    // Meta description update karna
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Thinking of switching careers after 30? Discover proven strategies, success stories, and resources to help you pivot with confidence. Learn how to thrive, starting now.';
    
    // Canonical link add karna
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://goevolo.com/career-switch-strategies-after-30s/';
    
  }, []); // Empty dependency array - sirf ek baar run hoga
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
            className="w-full max-w-full h-auto rounded-xl shadow-lg"
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
           You’re in your 30s and still working at a job that doesn’t satisfy you. You may be restless, feel behind, or even jealous of people who seem to be more enthusiastic about their work. But you’re held back by your fear of beginning again. Your current job has become the centre of your life, possibly even your family. Now, the stakes are higher. Is the time and expense of re-education within your means? Will an older person without any prior experience be hired?
          </p>
           <p className="mb-6">
            It’s not too late, and you’re not alone. After the age of 30, changing careers is not only possible but also becoming more and more popular and frequently successful. You can switch to a completely different field that fits with your values and strengths if you have the correct approach, attitude, and tools, such as career coaches, skill boot camps, and adult education programmes.
          </p>

      {/* Table of Contents */}
<div className="bg-white p-6 mt-8 rounded-xl border border-gray-200 mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Table of Content</h2>
  
  <ol className="list-decimal pl-5 space-y-2">
    <li className="text-gray-700 font-medium">The Reasons Behind Adults' Career Changes After 30</li>
    <li className="text-gray-700 font-medium">Evaluating Strengths and Transferable Skills</li>
    <li className="text-gray-700 font-medium">Education, Upskilling, and Certification Paths</li>
    <li className="text-gray-700 font-medium">Building a Network in a New Industry</li>
    <li className="text-gray-700 font-medium">Mental and Financial Preparation</li>
    <li className="text-gray-700 font-medium">Best Industries to Transition Into After 30</li>
    <li className="text-gray-700 font-medium">High-Demand Career Paths vs Required Skills</li>
    <li className="text-gray-700 font-medium">Frequently Asked Questions</li>
    <li className="text-gray-700 font-medium">Final Thoughts</li>
    <li className="text-gray-700 font-medium">References</li>
  </ol>
</div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
  The Reasons Behind Adults' Career Changes After 30
</h2>
<div className="space-y-4">
  <p className="text-gray-700">
    In recent years, there's been a notable surge in mid-life career transitions. Several driving forces are behind this shift:
  </p>
  
  <ul className="space-y-2 pl-5">
    <li className="flex items-start">
      <span className="mr-2 mt-1" style={{ color: '#5A14ED' }}>•</span>
      <span className="text-gray-700">Technological disruption is rendering some roles obsolete while creating demand in others, encouraging reskilling.</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2 mt-1" style={{ color: '#5A14ED' }}>•</span>
      <span className="text-gray-700">When early career momentum wanes in one’s 30s, burnout and mental exhaustion frequently reach their peak.</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2 mt-1" style={{ color: '#5A14ED' }}>•</span>
      <span className="text-gray-700">Flexible work arrangements have made non-linear career transitions easier to access.</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2 mt-1" style={{ color: '#5A14ED' }}>•</span>
      <span className="text-gray-700">Career flexibility is also being made possible by the expanding gig economy and remote work options.</span>
    </li>
  </ul>
  
  <p className="text-gray-700">
    According to a report by the Pew Research Center, over 53% of workers who changed jobs in 2021 cited no room for advancement as their top reason for leaving. Many of these individuals were in their early to mid-30s.
  </p>
  
  <p className="text-gray-700">
    This shift also aligns with a broader push toward empowering lifelong learners. Adults now seek purpose-driven roles, meaningful impact, and better work-life balance more than ever before.
  </p>
</div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
  Evaluating Strengths and Transferable Skills
</h2>
<div className="space-y-4">
  <p className="text-gray-700">
    Knowing your strengths is essential before venturing into a new field. Transferable skills are useful in a variety of fields:
  </p>
  
  <p className="text-gray-700 font-medium">Transferable skill examples include:</p>
  
  <div className="grid md:grid-cols-2 gap-4 mb-4">
    <div className="p-4 rounded-lg" style={{ backgroundColor: '#5A14ED10', border: '1px solid #5A14ED30' }}>
      <p className="font-medium" style={{ color: '#5A14ED' }}>Collaboration & Communication</p>
      <p className="text-gray-600 text-sm">Important in project management, sales, human resources, and education.</p>
    </div>
    
    <div className="p-4 rounded-lg" style={{ backgroundColor: '#5A14ED10', border: '1px solid #5A14ED30' }}>
      <p className="font-medium" style={{ color: '#5A14ED' }}>Analytical Thinking</p>
      <p className="text-gray-600 text-sm">Beneficial for data analysis, market research, and tech positions.</p>
    </div>
    
    <div className="p-4 rounded-lg" style={{ backgroundColor: '#5A14ED10', border: '1px solid #5A14ED30' }}>
      <p className="font-medium" style={{ color: '#5A14ED' }}>Time Management & Organization</p>
      <p className="text-gray-600 text-sm">Essential for managerial, administrative, and remote work positions.</p>
    </div>
    
    <div className="p-4 rounded-lg" style={{ backgroundColor: '#5A14ED10', border: '1px solid #5A14ED30' }}>
      <p className="font-medium" style={{ color: '#5A14ED' }}>Empathy & Customer Service</p>
      <p className="text-gray-600 text-sm">Useful in social work, healthcare, and education.</p>
    </div>
  </div>
  
  <p className="text-gray-700 font-medium">Start by performing a skills audit:</p>
  
  <ul className="space-y-2 pl-5">
    <li className="flex items-start">
      <span className="mr-2 mt-1" style={{ color: '#5A14ED' }}>•</span>
      <span className="text-gray-700">Conduct a skills audit first by going over previous performance evaluations.</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2 mt-1" style={{ color: '#5A14ED' }}>•</span>
      <span className="text-gray-700">Utilise resources such as Skills Matcher and MyNextMove.</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2 mt-1" style={{ color: '#5A14ED' }}>•</span>
      <span className="text-gray-700">Consider your accomplishments and the things that give you energy.</span>
    </li>
  </ul>
  
  <p className="text-gray-700">
    This self-awareness can guide your career change in a direction that maximizes your strengths, especially if you're eyeing roles in high-value youth work or mentoring.
  </p>
</div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
  Education, Upskilling, and Certification Paths
</h2>
<div className="space-y-4">
  <p className="text-gray-700">
    Formal degrees aren't always required to pivot careers. Many adults succeed through short-term training, online courses, and certifications.
  </p>
  
  <p className="text-gray-700 font-medium">Popular Education Routes for Adults Over 30:</p>
  
  <div className="bg-white rounded-xl shadow-md border border-gray-200 my-6">
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-4 text-left text-lg font-bold text-white" style={{ backgroundColor: '#5A14ED' }}>
              Pathway
            </th>
            <th className="px-6 py-4 text-left text-lg font-bold text-gray-900 bg-gray-50">
              Description & Best For
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-200 hover:bg-gray-50">
            <td className="px-6 py-4 border-r border-gray-300 font-medium text-gray-900">
              Bootcamps
            </td>
            <td className="px-6 py-4">
              <span className="text-gray-700">Ideal for fields like software development, UI/UX, and digital marketing.</span>
            </td>
          </tr>
          <tr className="border-t border-gray-200 hover:bg-gray-50">
            <td className="px-6 py-4 border-r border-gray-300 font-medium text-gray-900">
              Community College Certificates
            </td>
            <td className="px-6 py-4">
              <span className="text-gray-700">Affordable, flexible, and career-focused.</span>
            </td>
          </tr>
          <tr className="border-t border-gray-200 hover:bg-gray-50">
            <td className="px-6 py-4 border-r border-gray-300 font-medium text-gray-900">
              Online Platforms
            </td>
            <td className="px-6 py-4">
              <span className="text-gray-700">Coursera, edX, LinkedIn Learning, Google Career Certificates.</span>
            </td>
          </tr>
          <tr className="border-t border-gray-200 hover:bg-gray-50">
            <td className="px-6 py-4 border-r border-gray-300 font-medium text-gray-900">
              Government-Funded Adult Learning Programs
            </td>
            <td className="px-6 py-4">
              <span className="text-gray-700">Offered in most regions.</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
  <p className="text-gray-700">
    According to the World Economic Forum's 2023 Future of Jobs Report, 44% of workers' core skills are expected to change in the next five years, making reskilling essential.
  </p>
  
  <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 mt-4">
    <p className="text-gray-700">
      For more on how adult learning is evolving, see our blog{" "}
      <a 
        href="/" 
        className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
      >
        The Future of Adult Education
      </a>
    </p>
  </div>
</div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
  Building a Network in a New Industry
</h2>
<div className="space-y-4">
  <p className="text-gray-700">
    Shifting careers requires more than skills, it requires connections. A robust network can open doors to jobs that never get posted.
  </p>
</div>

<p className="text-gray-700 font-medium">Effective Networking Tips:</p>
  
  <ul className="space-y-3 pl-5">
    <li className="flex items-start">
      <span className="mr-2 mt-1" style={{ color: '#5A14ED' }}>•</span>
      <span className="text-gray-700">Attend industry-specific webinars and workshops.</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2 mt-1" style={{ color: '#5A14ED' }}>•</span>
      <span className="text-gray-700">Join LinkedIn groups and comment on posts within your target field.</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2 mt-1" style={{ color: '#5A14ED' }}>•</span>
      <span className="text-gray-700">Find a mentor or career coach through platforms like MentorCruise or SCORE.</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2 mt-1" style={{ color: '#5A14ED' }}>•</span>
      <span className="text-gray-700">Volunteer or freelance in your new field to build both skills and relationships.</span>
    </li>
  </ul>
  
  <div className="my-8 flex justify-center">
    <img 
      src="/images/blogthreeimg2.png" 
      alt="Networking strategies for career changers" 
      className="rounded-xl shadow-lg max-w-md"
    />
  </div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
  Mental and Financial Preparation
</h2>
<div className="space-y-4">
  <p className="text-gray-700">
    A career pivot is both an emotional and financial investment. Planning ahead will help you weather the uncertainty.
  </p>
  
  <div className="grid md:grid-cols-2 gap-8 mt-6">
    {/* Emotional Readiness Column */}
    <div className="p-6 rounded-xl" style={{ backgroundColor: '#5A14ED10', border: '1px solid #5A14ED30' }}>
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#5A14ED' }}>
          <span className="text-white font-bold">💭</span>
        </div>
        <h3 className="text-xl font-bold" style={{ color: '#5A14ED' }}>Emotional Readiness</h3>
      </div>
      
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="mr-2 mt-1" style={{ color: '#5A14ED' }}>•</span>
          <span className="text-gray-700">Accept that imposter syndrome is natural.</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 mt-1" style={{ color: '#5A14ED' }}>•</span>
          <span className="text-gray-700">Surround yourself with positive reinforcement and success stories.</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 mt-1" style={{ color: '#5A14ED' }}>•</span>
          <span className="text-gray-700">Keep a journal to track small wins and learning moments.</span>
        </li>
      </ul>
    </div>
    
    {/* Financial Planning Column */}
    <div className="p-6 rounded-xl bg-white border border-gray-300">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
          <span className="text-green-600 font-bold">💰</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900">Financial Planning</h3>
      </div>
      
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="text-green-600 mr-2 mt-1">•</span>
          <span className="text-gray-700">Build a 6-month emergency fund, if possible.</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-600 mr-2 mt-1">•</span>
          <span className="text-gray-700">Take part-time gigs or freelance to sustain income while transitioning.</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-600 mr-2 mt-1">•</span>
          <span className="text-gray-700">Check if you're eligible for upskilling stipends or grants, often offered by government or nonprofit organizations.</span>
        </li>
      </ul>
    </div>
  </div>
</div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
  Best Industries to Transition Into After 30
</h2>
<div className="space-y-4">
  <p className="text-gray-700">
    Some industries are more welcoming to mid-career changers due to high demand, flexible entry points, or skill compatibility:
  </p>
  
  <div className="bg-white rounded-xl shadow-md border border-gray-200 my-6 overflow-hidden">
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-4 text-left text-lg font-bold text-white" style={{ backgroundColor: '#5A14ED' }}>
              Industry
            </th>
            <th className="px-6 py-4 text-left text-lg font-bold text-white" style={{ backgroundColor: '#5A14ED' }}>
              Why It's Great for Career Changers
            </th>
            <th className="px-6 py-4 text-left text-lg font-bold text-white" style={{ backgroundColor: '#5A14ED' }}>
              Entry Pathways
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-200 hover:bg-gray-50">
            <td className="px-6 py-4 border-r border-gray-300">
              <span className="font-medium text-gray-900">Healthcare</span>
            </td>
            <td className="px-6 py-4 border-r border-gray-300">
              <span className="text-gray-700">Growing demand, aging population</span>
            </td>
            <td className="px-6 py-4">
              <span className="text-gray-700">Certifications (e.g., CNA, MA)</span>
            </td>
          </tr>
          <tr className="border-t border-gray-200 hover:bg-gray-50">
            <td className="px-6 py-4 border-r border-gray-300">
              <span className="font-medium text-gray-900">Tech & IT</span>
            </td>
            <td className="px-6 py-4 border-r border-gray-300">
              <span className="text-gray-700">High demand, remote options</span>
            </td>
            <td className="px-6 py-4">
              <span className="text-gray-700">Coding bootcamps, IT certificates</span>
            </td>
          </tr>
          <tr className="border-t border-gray-200 hover:bg-gray-50">
            <td className="px-6 py-4 border-r border-gray-300">
              <span className="font-medium text-gray-900">Education</span>
            </td>
            <td className="px-6 py-4 border-r border-gray-300">
              <span className="text-gray-700">Value of real-life experience</span>
            </td>
            <td className="px-6 py-4">
              <span className="text-gray-700">Teaching certifications</span>
            </td>
          </tr>
          <tr className="border-t border-gray-200 hover:bg-gray-50">
            <td className="px-6 py-4 border-r border-gray-300">
              <span className="font-medium text-gray-900">Marketing & UX Design</span>
            </td>
            <td className="px-6 py-4 border-r border-gray-300">
              <span className="text-gray-700">Skill-focused, creativity valued</span>
            </td>
            <td className="px-6 py-4">
              <span className="text-gray-700">Online portfolios, internships</span>
            </td>
          </tr>
          <tr className="border-t border-gray-200 hover:bg-gray-50">
            <td className="px-6 py-4 border-r border-gray-300">
              <span className="font-medium text-gray-900">Trades & Repair</span>
            </td>
            <td className="px-6 py-4 border-r border-gray-300">
              <span className="text-gray-700">Skilled labor shortage</span>
            </td>
            <td className="px-6 py-4">
              <span className="text-gray-700">Apprenticeships, vocational training</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
  High-Demand Career Paths vs Required Skills
</h2>
<div className="space-y-4">
  <p className="text-gray-700">
    Understanding which skills transfer to high-demand careers can help you identify the most promising transition paths.
  </p>
  
  <div className="bg-white rounded-xl shadow-md border border-gray-200 my-6 overflow-hidden">
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-4 text-left text-lg font-bold text-white" style={{ backgroundColor: '#5A14ED' }}>
              Career Path
            </th>
            <th className="px-6 py-4 text-left text-lg font-bold text-white" style={{ backgroundColor: '#5A14ED' }}>
              Transferable Skills Needed
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-200 hover:bg-gray-50">
            <td className="px-6 py-4 border-r border-gray-300">
              <span className="font-medium text-gray-900">Project Management</span>
            </td>
            <td className="px-6 py-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#5A14ED20', color: '#5A14ED' }}>
                  Leadership
                </span>
                <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#5A14ED20', color: '#5A14ED' }}>
                  Time Management
                </span>
              </div>
            </td>
          </tr>
          <tr className="border-t border-gray-200 hover:bg-gray-50">
            <td className="px-6 py-4 border-r border-gray-300">
              <span className="font-medium text-gray-900">Data Analyst</span>
            </td>
            <td className="px-6 py-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#5A14ED20', color: '#5A14ED' }}>
                  Analytical Thinking
                </span>
                <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#5A14ED20', color: '#5A14ED' }}>
                  Excel
                </span>
              </div>
            </td>
          </tr>
          <tr className="border-t border-gray-200 hover:bg-gray-50">
            <td className="px-6 py-4 border-r border-gray-300">
              <span className="font-medium text-gray-900">Teacher/Trainer</span>
            </td>
            <td className="px-6 py-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#5A14ED20', color: '#5A14ED' }}>
                  Public Speaking
                </span>
                <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#5A14ED20', color: '#5A14ED' }}>
                  Patience
                </span>
              </div>
            </td>
          </tr>
          <tr className="border-t border-gray-200 hover:bg-gray-50">
            <td className="px-6 py-4 border-r border-gray-300">
              <span className="font-medium text-gray-900">Digital Marketer</span>
            </td>
            <td className="px-6 py-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#5A14ED20', color: '#5A14ED' }}>
                  Creativity
                </span>
                <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#5A14ED20', color: '#5A14ED' }}>
                  Research
                </span>
              </div>
            </td>
          </tr>
          <tr className="border-t border-gray-200 hover:bg-gray-50">
            <td className="px-6 py-4 border-r border-gray-300">
              <span className="font-medium text-gray-900">Medical Assistant</span>
            </td>
            <td className="px-6 py-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#5A14ED20', color: '#5A14ED' }}>
                  Communication
                </span>
                <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#5A14ED20', color: '#5A14ED' }}>
                  Multitasking
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
  Frequently Asked Questions
</h2>

<div className="space-y-4">
  <div className="border border-gray-200 rounded-lg overflow-hidden">
    <button
      className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
      onClick={() => toggleFAQ(0)}
    >
      <span className="font-medium text-gray-900">Is it too late to change careers after 30?</span>
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
          Not. Most people change careers between the ages of 30–45, when they have better self-awareness and work experience to guide their next move.
        </p>
      </div>
    )}
  </div>
  
  <div className="border border-gray-200 rounded-lg overflow-hidden">
    <button
      className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
      onClick={() => toggleFAQ(1)}
    >
      <span className="font-medium text-gray-900">How do I know what career is right for me?</span>
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
          Start with self-assessment tools and personality tests (e.g., MBTI, Holland Code). Look at what energizes you during the day—those clues are critical.
        </p>
      </div>
    )}
  </div>
  
  <div className="border border-gray-200 rounded-lg overflow-hidden">
    <button
      className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
      onClick={() => toggleFAQ(2)}
    >
      <span className="font-medium text-gray-900">Can I afford a career change financially?</span>
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
          Yes, with careful planning. Many low-cost or free learning options exist, and some employers even offer education stipends or tuition assistance.
        </p>
      </div>
    )}
  </div>

  <div className="border border-gray-200 rounded-lg overflow-hidden">
    <button
      className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
      onClick={() => toggleFAQ(3)}
    >
      <span className="font-medium text-gray-900">Do I need to go back to college?</span>
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
        <p className="text-gray-700">
          Not always. Bootcamps, certifications, and short courses often suffice in many in-demand fields like tech, marketing, or healthcare.
        </p>
      </div>
    )}
  </div>
</div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
  Final Thoughts
</h2>
<div className="space-y-4">
  <div className="p-6 rounded-xl" style={{ backgroundColor: '#5A14ED10', border: '1px solid #5A14ED30' }}>
    <p className="text-gray-700 text-lg leading-relaxed">
      Reinventing yourself after 30 is not a risk; it's an investment in long-term satisfaction and well-being. Today's job market rewards curiosity, adaptability, and lifelong learning—making adult education employment pathways more valuable than ever.
    </p>
  </div>
  
  <div className="p-6 rounded-xl bg-white border border-gray-300 shadow-sm">
    <p className="text-gray-700 text-lg leading-relaxed">
      Whether you're stepping into healthcare, teaching, design, or another field, remember this: the path may be new, but your foundation is strong, and the right education can open doors to meaningful, sustainable careers.
    </p>
  </div>
</div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
  References
</h2>
<div className="space-y-3 bg-gray-50 p-6 rounded-lg">
  <p className="text-gray-700 text-sm">
    Pew Research Center (2022){" "}
    <a 
      href="https://www.pewresearch.org/short-reads/2022/03/09/majority-of-workers-who-quit-a-job-in-2021-cite-low-pay-no-opportunities-for-advancement-feeling-disrespected/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 hover:underline"
    >
      https://www.pewresearch.org/short-reads/2022/03/09/majority-of-workers-who-quit-a-job-in-2021-cite-low-pay-no-opportunities-for-advancement-feeling-disrespected/
    </a>
  </p>
  
  <p className="text-gray-700 text-sm">
    World Economic Forum – Future of Jobs Report 2023{" "}
    <a 
      href="https://www.weforum.org/publications/the-future-of-jobs-report-2023/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 hover:underline"
    >
      https://www.weforum.org/publications/the-future-of-jobs-report-2023/
    </a>
  </p>
</div>

        </div>

      </div>
            </div>

  
  );
};

export default Blog3;
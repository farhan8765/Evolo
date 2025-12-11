// Blog9.jsx
import React, { useState } from 'react';

const Blog9 = () => {
  const [openIndex, setOpenIndex] = useState(null);


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
     <div className="max-w-5xl mx-auto">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-6 font-['Raleway']">
    The Role of AI in Hiring: How Adult Job Seekers Can Stay Competitive
  </h1>
  
  {/* Blog Header with Image */}
  <div className="mb-8 flex justify-center">
    <img 
      src="/images/blog9.png" 
      alt="AI in hiring process for adult job seekers" 
      className="rounded-xl shadow-lg"
    />
  </div>

  {/* Author & Date Info */}
  <div className="flex items-center text-gray-600 mb-8 pb-6 border-b font-['Raleway']">
    <div className="flex items-center">
      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
        <span className="text-blue-600 font-semibold">AI</span>
      </div>
      <div>
        <p className="font-medium">Career Tech Insights</p>
        <p className="text-sm">Published on June 10, 2024 • 5 min read</p>
      </div>
    </div>
  </div>

  {/* Key Summary Box */}
  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-10 font-['Raleway']">
    <h2 className="text-xl font-bold text-gray-800 mb-3">Key Summary:</h2>
    <p className="text-gray-700 leading-relaxed">
      You've spent years building your career, gaining valuable experience, and climbing the ladder. 
      But suddenly, job listings require AI literacy, resumes are being screened by bots, and 
      interviews are being replaced by automated video assessments. As an adult job seeker, you may 
      feel like you're being left behind in a digital race. It's easy to feel overwhelmed. The hiring 
      process is no longer about just impressing a human recruiter—it's about impressing an algorithm 
      first. Employers are using AI tools to screen applications, match skill sets, assess cultural 
      fit, and even predict job performance.
    </p>
  </div>

  {/* Main Content */}
  <div className="prose prose-lg max-w-none text-gray-700 font-['Raleway']">
    
    <p className="mb-6">
      You've spent years building your career, gaining valuable experience, and climbing the ladder. 
      But suddenly, job listings require AI literacy, resumes are being screened by bots, and 
      interviews are being replaced by automated video assessments. As an adult job seeker, you may 
      feel like you're being left behind in a digital race. It's easy to feel overwhelmed. The hiring 
      process is no longer about just impressing a human recruiter—it's about impressing an algorithm 
      first. Employers are using AI tools to screen applications, match skill sets, assess cultural 
      fit, and even predict job performance.
    </p>
    
    <p className="mb-6">
      If you don't understand how AI works in hiring or how to align your skills with it, you risk 
      being invisible in a tech-driven job market.
    </p>

    <p className="mb-6">
      The good news? You don't need to be a tech wizard to stay competitive. By understanding how 
      AI is used in hiring and making strategic adjustments to your approach, you can leverage the 
      technology to your advantage. This guide explores everything you need to know to remain visible, 
      relevant, and in demand.
    </p>

    {/* Table of Contents */}
    <div className="bg-white p-6 mt-8 rounded-xl border border-gray-200 mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Table of Content</h2>
      
      <ol className="list-decimal pl-5 space-y-2">
        <li className="text-gray-700 font-medium">Understanding AI in the Hiring Process</li>
        <li className="text-gray-700 font-medium">Key Ways AI is Transforming Recruitment</li>
        <li className="text-gray-700 font-medium">Common AI Tools Employers Use Today</li>
        <li className="text-gray-700 font-medium">The Challenges AI Brings for Adult Job Seekers</li>
        <li className="text-gray-700 font-medium">The Importance of Upskilling and Lifelong Learning</li>
        <li className="text-gray-700 font-medium">Leveraging LinkedIn and Online Portfolios</li>
        <li className="text-gray-700 font-medium">Navigating AI-Powered Interviews</li>
        <li className="text-gray-700 font-medium">How Emotional Intelligence Still Wins</li>
        <li className="text-gray-700 font-medium">Best Practices to Stay Competitive in an AI-Driven Job Market</li>
        <li className="text-gray-700 font-medium">AI Tools vs Human Skills—What Employers Seek</li>
        <li className="text-gray-700 font-medium">Frequently Asked Questions</li>
        <li className="text-gray-700 font-medium">Final Thoughts</li>
        <li className="text-gray-700 font-medium">References</li>
      </ol>
    </div>

    {/* Understanding AI in the Hiring Process */}
    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
      Understanding AI in the Hiring Process
    </h2>
    <div className="space-y-4">
      <p className="text-gray-700">
        Artificial Intelligence (AI) has rapidly reshaped the way companies hire talent. Rather than relying solely on human intuition and traditional interviews, many organizations now use AI algorithms to streamline and optimize recruitment. AI is used to scan resumes, analyze applicant data, and even conduct initial interviews. This shift is especially significant for adult job seekers, who may not have encountered such systems earlier in their careers.
      </p>
      
      <p className="text-gray-700">
        Understanding AI in hiring starts with knowing its core function: automation and data-driven decision-making. Hiring managers are overwhelmed with thousands of applications for each opening. AI helps them filter out unqualified candidates and bring top talent to the forefront based on predefined criteria. These criteria may include keywords, experience levels, skill matches, and educational backgrounds. However, if your resume or profile doesn't align with what the AI is scanning for, it might never reach human eyes.
      </p>
    </div>

    {/* Key Ways AI is Transforming Recruitment */}
    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
      Key Ways AI is Transforming Recruitment
    </h2>
    <div className="space-y-4">
      <p className="text-gray-700">
        AI has changed how recruitment happens at almost every stage. Here's how it's transforming the process:
      </p>
      
      <p className="text-gray-700">
        Sourcing candidates: AI algorithms scan millions of online profiles and resumes to find ideal candidates faster than ever.
      </p>
      
      <p className="text-gray-700">
        Resume screening: Applicant Tracking Systems (ATS) automatically scan, sort, and rank resumes based on job-specific keywords.
      </p>
      
      <p className="text-gray-700">
        Predictive analytics: AI tools assess which candidates are more likely to succeed in a role using data from previous hiring patterns.
      </p>
      
      <p className="text-gray-700">
        Automated interviews: Software can analyze voice, facial expressions, and language to evaluate candidates' suitability for a role.
      </p>
      
      <p className="text-gray-700">
        Cultural fit analysis: Some platforms use AI to determine how well a candidate might align with a company's values and work environment.
      </p>
      
      <p className="text-gray-700">
        Bias detection: When implemented responsibly, AI can help reduce unconscious bias by focusing on data-driven decisions.
      </p>
    </div>

    {/* Common AI Tools Employers Use Today */}
    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
      Common AI Tools Employers Use Today
    </h2>
    <div className="space-y-4">
      <p className="text-gray-700">
        Modern hiring processes rely on a host of AI-powered platforms. Some of the most common tools include:
      </p>
      
      <p className="text-gray-700">
        Applicant Tracking Systems (ATS) like Workday, Taleo, and Greenhouse filter resumes.
      </p>
      
      <p className="text-gray-700">
        Chatbots, such as Mya or Olivia, that interact with candidates and gather pre-screening info.
      </p>
      
      <p className="text-gray-700">
        Video Interviewing Software like HireVue analyzes your expressions and word choice.
      </p>
      
      <p className="text-gray-700">
        Skill Assessments are integrated into platforms like Codility or Pymetrics.
      </p>
      
      <p className="text-gray-700">
        According to Jobylon, AI for recruitment can assist in sourcing and screening candidates, analyzing resumes and job applications, conducting pre-employment assessments, and even predicting candidate success and cultural fit. 
      </p>
      
      <p className="text-gray-700">
        According to the blog on how technology is bridging the gap Between Students, Institutions, and Employers, educational platforms are even using AI to better align candidates with job requirements. Knowing which tools your potential employers use can give you a crucial edge.
      </p>
    </div>

    {/* The Challenges AI Brings for Adult Job Seekers */}
    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
      The Challenges AI Brings for Adult Job Seekers
    </h2>
    <div className="space-y-4">
      <p className="text-gray-700">
        While AI offers speed and efficiency, it presents specific challenges for adult job seekers, including:
      </p>
      
      <p className="text-gray-700">
        Age bias risk: Older candidates may be unintentionally screened out if AI tools prioritize younger demographics or modern experiences.
      </p>
      
      <p className="text-gray-700">
        Outdated Resumes: Traditional resume formats or a lack of digital keywords can cause resumes to be rejected by ATS systems
      </p>
      
      <p className="text-gray-700">
        Lack of digital presence: Many adults have limited or outdated LinkedIn profiles, reducing visibility in AI-powered talent searches.
      </p>
      
      <p className="text-gray-700">
        Limited familiarity with AI tools: Job seekers who haven't encountered AI in previous roles may struggle with tools like virtual interview bots or skill assessments
      </p>
      
      <p className="text-gray-700">
        Resistance to change: Adults used to human-centric hiring may feel frustrated or intimidated by automated systems and evolving tech expectations.
      </p>
      
      <p className="text-gray-700">
        A study published in Nature highlights that AI-enabled recruitment has the potential to enhance recruitment quality and efficiency, but also raises concerns about algorithmic discrimination based on gender, race, and other factors.
      </p>
    </div>

    {/* How to Optimize Your Resume for AI Screening */}
    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
      How to Optimize Your Resume for AI Screening
    </h2>
    <div className="space-y-4">
      <p className="text-gray-700">
        Writing a resume for an AI is not the same as writing for a human. AI looks for keywords, structure, and clarity. Here are a few optimization tips:
      </p>
      
      <p className="text-gray-700">
        Use standard job titles and include relevant skills in bullet points.
        Incorporate keywords from the job description.
        Avoid graphics, columns, or fancy designs—stick to clean formatting.
        Save the file as .docx or PDF, depending on ATS compatibility.
      </p>
      
      <p className="text-gray-700">
        According to the blog top 10 career tips and advice for Young Adults Starting Their Journey, tailoring each resume for specific job roles increases your visibility and success rate. The same rule applies to adults; customization is key to standing out in AI-powered systems.
      </p>
    </div>

    {/* The Importance of Upskilling and Lifelong Learning */}
    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
      The Importance of Upskilling and Lifelong Learning
    </h2>
    <div className="space-y-4">
      <p className="text-gray-700">
        In today's fast-paced job market, learning doesn't stop once you leave the classroom—it's a lifelong journey. For adult job seekers, embracing continuous learning is no longer optional; it's essential to remain relevant and competitive in an AI-driven hiring landscape. As companies increasingly adopt new technologies, roles are evolving, and expectations are shifting. Upskilling—acquiring new competencies or enhancing existing ones—is a powerful way to bridge the gap between your current qualifications and the demands of modern employers. 
      </p>
      
      <p className="text-gray-700">
        This is especially true in areas like:
      </p>
      
      <p className="text-gray-700">
        Data literacy: Understanding how data is collected, analyzed, and used in decision-making.
        Digital tools: Becoming proficient with platforms commonly used in your industry, such as CRM, project management tools, or cloud-based applications.
        AI and automation basics: Gaining a foundational understanding of how AI works, especially in your field.
      </p>
      
      <p className="text-gray-700">
        The good news is that learning has never been more accessible. Online platforms like Coursera, LinkedIn Learning, edX, and Udemy offer thousands of flexible, self-paced courses tailored to working professionals. Whether you're brushing up on Excel, learning Python, or exploring digital marketing, there's a course that fits your schedule and career goals.
      </p>
      
      <p className="text-gray-700">
        Investing in upskilling doesn't just add new skills to your resume, it sends a clear message to employers: you're proactive, adaptable, and ready for change. In a job market shaped by technology, that mindset is just as important as your experience.
      </p>
      
      <p className="text-gray-700">
        A recent report by the World Economic Forum highlights that 50% of all employees will need reskilling by 2025, with skills like analytical thinking, creativity, and tech literacy topping the list. For adult job seekers, staying ahead means being willing to grow and showing that growth to potential employers.
      </p>
    </div>

    {/* Leveraging LinkedIn and Online Portfolios */}
    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
      Leveraging LinkedIn and Online Portfolios
    </h2>
    <div className="space-y-4">
      <p className="text-gray-700">
        Your digital presence is your new first impression. Having an optimized LinkedIn profile with a clear headline, professional photo, and detailed work history is essential. AI tools often scrape LinkedIn data to pre-screen candidates, so make sure your profile reflects your current capabilities and interests.
      </p>
      
      <p className="text-gray-700">
        Additionally, creating an online portfolio or personal website can further increase visibility. Include testimonials, work samples, certifications, and blogs that showcase your expertise. According to The Future of Adult Education, building a personal brand is no longer optional—it's necessary.
      </p>
    </div>

    {/* Navigating AI-Powered Interviews */}
    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
      Navigating AI-Powered Interviews
    </h2>
    <div className="space-y-4">
      <p className="text-gray-700">
        AI interviews are now common in the first round of hiring. These interviews may feel unnatural since you're speaking to a screen, but preparation can make a huge difference. Practice answering behavioral questions and record yourself to review posture, eye contact, and tone.
      </p>
      
      <p className="text-gray-700">
        Tools like HireVue analyze facial expressions, keywords, and voice modulation. Practice in a well-lit room, avoid distractions, and stay professional. Though AI initiates the process, many companies still have human recruiters make the final call based on AI-generated reports.
      </p>
    </div>

    {/* How Emotional Intelligence Still Wins */}
    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
      How Emotional Intelligence Still Wins
    </h2>
    <div className="space-y-4">
      <p className="text-gray-700">
        Even in an AI-heavy process, human qualities matter. Emotional intelligence (EQ)—the ability to manage emotions, empathize, and communicate effectively—is a vital differentiator. AI can analyze data, but it can't replicate genuine interpersonal skills.
      </p>
      
      <p className="text-gray-700">
        Many roles, especially leadership or customer-facing positions, require high EQ. Employers often use AI to shortlist technically qualified candidates and then assess soft skills through conversations and team interactions. Focus on storytelling, self-awareness, and collaboration—these are still your superpowers.
      </p>
    </div>

    {/* Best Practices to Stay Competitive in an AI-Driven Job Market */}
    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
      Best Practices to Stay Competitive in an AI-Driven Job Market
    </h2>
    <div className="space-y-4">
      <p className="text-gray-700">
        Stay current with industry trends and digital tools.
      </p>
      
      <p className="text-gray-700">
        Network intentionally through LinkedIn, alumni events, or industry groups.
      </p>
      
      <p className="text-gray-700">
        Tailor every application to the job you're applying for.
      </p>
      
      <p className="text-gray-700">
        Build a personal website or blog to highlight your professional voice.
      </p>
      
      <p className="text-gray-700">
        Take courses in communication, project management, or data analysis.
      </p>
      
      <p className="text-gray-700">
        Be adaptable—embrace change and show you're ready to grow.
      </p>
      
      <p className="text-gray-700">
        These best practices apply universally but are especially vital for adults re-entering or repositioning in the job market.
      </p>
    </div>

   {/* AI Tools vs Human Skills—What Employers Seek */}
<h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
  AI Tools vs Human Skills—What Employers Seek
</h2>
<div className="space-y-4">
  <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-md font-bold text-black uppercase tracking-wider">
            AI Tool
          </th>
          <th className="px-6 py-3 text-left text-md font-bold text-black uppercase tracking-wider">
            What It Analyzes
          </th>
          <th className="px-6 py-3 text-left text-md font-bold text-black uppercase tracking-wider">
            Human Skills to Showcase
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr className="hover:bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
            Applicant Tracking System
          </td>
          <td className="px-6 py-4 text-gray-700">
            Keywords, experience, job titles
          </td>
          <td className="px-6 py-4 text-gray-700">
            Resume customization
          </td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
            Video Interview Software
          </td>
          <td className="px-6 py-4 text-gray-700">
            Eye contact, tone, and word choice
          </td>
          <td className="px-6 py-4 text-gray-700">
            Communication, confidence
          </td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
            Predictive Analytics
          </td>
          <td className="px-6 py-4 text-gray-700">
            Resume patterns, past data
          </td>
          <td className="px-6 py-4 text-gray-700">
            Job stability, growth trajectory
          </td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
            Chatbots
          </td>
          <td className="px-6 py-4 text-gray-700">
            Basic qualification questions
          </td>
          <td className="px-6 py-4 text-gray-700">
            Prompt responses, clarity
          </td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
            Skill Tests
          </td>
          <td className="px-6 py-4 text-gray-700">
            Technical or cognitive skills
          </td>
          <td className="px-6 py-4 text-gray-700">
            Continued learning, adaptability
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    {/* Frequently Asked Questions */}
   {/* Frequently Asked Questions */}
<h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
  Frequently Asked Questions
</h2>

<div className="space-y-4">
  <div className="border border-gray-200 rounded-lg overflow-hidden">
    <button
      className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
      onClick={() => toggleFAQ(0)}
    >
      <span className="font-medium text-gray-900">Can I reject a resume even if I'm qualified?</span>
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
          Yes, if your resume isn't optimized with the right keywords or format, an ATS may filter it out even if you're fully qualified.
        </p>
      </div>
    )}
  </div>

  <div className="border border-gray-200 rounded-lg overflow-hidden">
    <button
      className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
      onClick={() => toggleFAQ(1)}
    >
      <span className="font-medium text-gray-900">Should I include soft skills in my resume?</span>
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
          Yes, but focus on quantifiable outcomes. For example, instead of just writing "team player," mention a project where collaboration led to a measurable result.
        </p>
      </div>
    )}
  </div>

  <div className="border border-gray-200 rounded-lg overflow-hidden">
    <button
      className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
      onClick={() => toggleFAQ(2)}
    >
      <span className="font-medium text-gray-900">Are video interviews analyzed by real people?</span>
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
          Some are, but many first-round interviews are reviewed by AI that scores your performance based on tone, speech, and body language.
        </p>
      </div>
    )}
  </div>

  <div className="border border-gray-200 rounded-lg overflow-hidden">
    <button
      className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
      onClick={() => toggleFAQ(3)}
    >
      <span className="font-medium text-gray-900">What is the role of artificial intelligence in hiring?</span>
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
          AI-enabled platforms can conduct pre-screening interviews via video calls or text-based interactions, 
          recording and analyzing responses to help identify the most suited candidates. AI can also assist with 
          transcribing and summarizing interviews, making it easier to share insights among hiring teams.
        </p>
      </div>
    )}
  </div>
</div>

  {/* Final Thoughts */}
<h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
  Final Thoughts
</h2>
<div className="space-y-4">
  <p className="text-gray-700">
    AI is here to stay—and in hiring, it's only getting smarter. But that doesn't mean adult job seekers are at a disadvantage. Those exploring adult education jobs or transitioning into new roles can find unique opportunities by embracing change. With strategic resume updates, ongoing learning, and a willingness to adapt, you can not only survive but thrive in an AI-driven job market. Whether you're re-entering the workforce or shifting careers, staying informed and upskilled ensures you're not just keeping up but standing out.
  </p>
  
  <p className="text-gray-700">
    Remember: technology may change the game, but human potential still defines the winner.
  </p>
</div>

{/* References */}
<h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
  References
</h2>

<div className="space-y-3 bg-gray-50 p-6 rounded-lg">
  <p className="text-gray-700 text-sm">
    Jobylon. (2024). How AI is Transforming the World of Recruitment.{" "}
    <a 
      href="https://www.jobylon.com/blog/how-ai-is-transforming-the-world-of-recruitment?utm_source=chatgpt.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 hover:underline"
    >
      https://www.jobylon.com/blog/how-ai-is-transforming-the-world-of-recruitment
    </a>
  </p>
  
  <p className="text-gray-700 text-sm">
    Nature. (2023). Ethics and discrimination in artificial intelligence-enabled recruitment practices.{" "}
    <a 
      href="https://www.nature.com/articles/s41599-023-02079-x?utm_source=chatgpt.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 hover:underline"
    >
      https://www.nature.com/articles/s41599-023-02079-x
    </a>
  </p>
</div>
  </div>
</div>
      
    </div>
  );
};

export default Blog9;
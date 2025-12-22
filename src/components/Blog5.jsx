import React, { useState, useEffect } from 'react'; // 👈 yahan useEffect add karen

const Blog5 = () => {
  const [openFAQ, setOpenFAQ] = useState(null);


   useEffect(() => {
    // Document title set karna
    document.title = '9 Powerful Benefits of Work for Teens & Young Adults';
    
    // Meta description update karna
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Discover 9 real-world benefits of work for teens and young adults—from building skills to boosting confidence. Learn how early jobs shape brighter futures.';
    
    // Canonical link add karna
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://goevolo.com/9-benefits-of-work-for-teens-young-adults/';
    
  }, []); // Empty dependency array - sirf ek baar run hoga

  
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:px-8 md:py-10  font-['Raleway']">
        {/* Article Header */}
        <div className="mb-10 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900 leading-tight mb-6">
            9 Benefits of Work for Teens and Young Adults
          </h1>
          
        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/images/blog5.png" 
            alt="Teens and Young Adults at Work - Benefits of Employment"
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
            Builds confidence, responsibility, and independence. Develops time management and teamwork skills. 
            Prepares youth for the future of work and education. Encourages financial literacy and decision-making. 
            Opens up career and networking opportunities.
          </p>
        </div>

           {/* Section 1: Builds Confidence and Self-Esteem */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Builds Confidence and Self-Esteem</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              For many young adults and teenagers, a first job is their first step closer to independence. 
              Whether it's serving food, babysitting, or running retail, keeping an activity affords a feeling of feat. 
              They learn to trust their own decision-making talents, complete tasks independently, and take delight in their paintings.
            </p>
            <p className="mb-4">
              A look at data posted with the aid of the U.S. Bureau of Labor Statistics indicates that teenagers who paint 
              part-time document higher degrees of self-assurance in comparison to friends who don't paint. 
              Handling responsibilities, being responsible to a chairman, and earning a paycheck strengthen a teenager's 
              perception of their competencies.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 italic">
              <p className="text-gray-700">
                "Work helps young adults feel more capable and ready to face grown-up, demanding situations." 
                <span className="block font-semibold mt-2">- Harvard Graduate School of Education</span>
              </p>
            </div>
            <p>
              This early raise in self-esteem plays a vital role later in life, especially during transitions 
              to college, internships, or full-time careers.
            </p>
          </div>
        </div>

        {/* Section 2: Time management and responsibility */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Time management and responsibility</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Teenagers who work should prioritize the tasks, plan further, and complete the time limit. 
              These are important life skills that will benefit them beyond high school or part-time jobs.
            </p>
            <p className="mb-4">
              Research by Child Trends Research Brief shows that students who work up to 15 hours per week 
              develop habits of better time management than non-committed peers. Employers expect restrictions 
              and stability, which trained adolescents to be more disciplined over their time.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h3 className="font-bold text-gray-900 mb-4">Major time management lessons obtained from initial work:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Strict shift time meeting</li>
                <li>Planning homework around job hours</li>
                <li>Constant communication about scheduling conflicts</li>
                <li>Take the responsibility of completing the tasks without a reminder</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: Develops Communication and Teamwork Skills */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Develops Communication and Teamwork Skills</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Whether it's speaking to customers or coordinating with coworkers, communication is key. 
              Young workers quickly learn how to navigate different personalities, resolve conflicts, 
              and collaborate toward shared goals. These social-emotional skills are invaluable for 
              adulthood and careers.
            </p>
            <p className="mb-4">
              According to a report by the National Association of Colleges and Employers (NACE), 
              employers rate communication and teamwork as two of the top soft skills for hiring. 
              Jobs like retail, food service, or tutoring help teens refine their interpersonal 
              skills naturally.
            </p>
            <p>
              This also prepares them for roles that require client interaction or group project 
              work—skills that are increasingly emphasized in both college and the modern workplace.
            </p>
          </div>
        </div>

        {/* Section 4: Introduces Financial Literacy Early */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Introduces Financial Literacy Early</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              A paycheck opens up a new world of budgeting, saving, and spending decisions. 
              Teens learn the difference between needs and wants, the importance of saving, 
              and even the basics of taxes and paycheck deductions.
            </p>
            <p className="mb-4">
              Working during adolescence can reduce financial dependence on parents and increase 
              a sense of ownership. As shown in a 2019 survey by Junior Achievement USA, 94% of 
              teens who had jobs felt more financially aware than those who didn't.
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
              <h3 className="font-bold text-gray-900 mb-2">Tip:</h3>
              <p className="text-gray-700">
                Encourage teens to set up savings accounts, budget for large purchases, 
                or contribute to small family expenses to deepen their financial learning.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Offers Real-World Career Exploration */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Offers Real-World Career Exploration</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Early jobs can serve as a gateway into career discovery. While most teen jobs are entry-level, 
              they still expose youth to various industries—from hospitality and healthcare to retail and 
              digital services. These experiences can spark interest in future careers.
            </p>
            <p className="mb-4">
              Teens might discover a passion for teaching through tutoring or an interest in business 
              through retail sales. These experiences can influence college majors or certifications 
              they later pursue. For those unsure about their path, career exposure builds clarity.
            </p>
            <p>
              This complements topics discussed in our blog on Upskilling vs. Reskilling, as even young 
              workers can begin to identify areas worth building skills in.
            </p>
          </div>
        </div>

        {/* Section 6: Fosters Skill Building and Upskilling */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Fosters Skill Building and Upskilling</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Working teens pick up more than just the classic soft skills; they learn tech-savvy tasks 
              tied directly to the job. Whether it's running a small POS terminal, doing basic coding, 
              counting cash, answering customer questions, or even drafting a quick Instagram post, 
              every shift adds a new layer of experience.
            </p>
            <p className="mb-4">
              When teens start building high-value traits like flexibility, digital know-how, and 
              on-the-spot problem-solving, they position themselves ahead of the pack. Check our blog 
              on five income-friendly abilities young adults should grab by 2025 to see how that early 
              head start can open doors to bigger paychecks and quicker promotions.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h3 className="font-bold text-gray-900 mb-4">Here are some key skills teens can snag on the job:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Comfort with digital tools like Canva, Excel, or scheduling apps</li>
                <li>Basic customer service and sales techniques</li>
                <li>Public speaking and short presentation skills</li>
                <li>Conflict resolution and everyday empathy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 7: Improves College and Scholarship Applications */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Improves College and Scholarship Applications</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Scholarship committees and admission officials value practical experience. 
              A student who is able to demonstrate responsibility, dedication, and leadership 
              through work experience stands out from the rest.
            </p>
            <p className="mb-4">
              Work experiences provide material for strong college essays as well. Teens can 
              describe lessons learned, problems faced, and goals achieved in work—showing 
              maturity and aspirations.
            </p>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-6">
              <p className="text-gray-700 italic">
                As The Princeton Review writes, work experience can be equally effective for 
                applications—at least if the teenager worked for a year or more.
              </p>
            </div>
          </div>
        </div>



        {/* Section 8: Opens Networking and Mentorship Opportunities */}
<div className="mb-12">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Opens Networking and Mentorship Opportunities</h2>
  <div className="prose prose-lg max-w-none text-gray-700">
    <p className="mb-4">
      Internships expose young adults to mentors, supervisors, and colleagues who can serve later as job references, career counselors, or even job contacts.
    </p>
    <p className="mb-4">
      Acquiring these job networks in early life can be priceless.
    </p>
    <p className="mb-6">
      For example, a young person working in a dental practice can subsequently be helped to gain entry into dental school by a former boss. Networking gives one greater career confidence and tends to create long-lasting relationships.
    </p>
    <p className="mb-8">
      Learning to be professional among adults prepares you to enter adult life more easily and prepares you for eventual employment.
    </p>
    
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Self-Esteem Levels in Working vs. Non-Working Teens</h3>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-3 h-3 bg-green-600 rounded-full mt-1 mr-3"></div>
              <div>
                <span className="font-medium text-gray-900">Working Teens</span>
                <p className="text-gray-600 text-sm mt-1">Self-Esteem Score (1: 197-74)</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-3 h-3 bg-red-600 rounded-full mt-1 mr-3"></div>
              <div>
                <span className="font-medium text-gray-900">Non-Working Teens</span>
                <p className="text-gray-600 text-sm mt-1">Lower self-esteem levels on average</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <img 
            src="/images/blogfive2.png" 
            alt="Self-Esteem Comparison Chart - Working vs Non-Working Teens"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <p className="text-gray-500 text-sm text-center mt-2">Source: U.S. Bureau of Labor Statistics</p>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Section 9: Fosters Independence and Emotional Growth */}
<div className="mb-12">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Fosters Independence and Emotional Growth</h2>
  <div className="prose prose-lg max-w-none text-gray-700">
    <p className="mb-4">
      Early employment promotes emotional resilience. Teens face real-life challenges like dealing with 
      difficult customers, fixing mistakes, or receiving constructive criticism—experiences that build 
      emotional maturity.
    </p>
    
    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
      <p className="text-gray-700">
        A report by the Center for Parent Information and Resources (CPIR) found that work helps youth 
        with and without disabilities develop stronger self-determination and problem-solving abilities.
      </p>
    </div>
    
    <p>
      Ultimately, work cultivates independence emotionally, socially, and financially—which prepares 
      them for adult roles in both career and education.
    </p>
  </div>
</div>

{/* Section 10: Comparison of Benefits by Job */}
<div className="mb-12">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Comparison of Benefits by Job</h2>
  <div className="prose prose-lg max-w-none text-gray-700">
    <p className="mb-6">
      Different job types offer varying benefits for teens and young adults. Here's a comparison of key 
      skill development across common entry-level positions:
    </p>
    
    <div className="overflow-x-auto bg-white rounded-xl border border-gray-200 shadow-sm">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="py-4 px-6 text-left font-bold text-gray-900 border-b border-gray-300">Job Type</th>
            <th className="py-4 px-6 text-left font-bold text-gray-900 border-b border-gray-300">Confidence</th>
            <th className="py-4 px-6 text-left font-bold text-gray-900 border-b border-gray-300">Time Mgmt</th>
            <th className="py-4 px-6 text-left font-bold text-gray-900 border-b border-gray-300">Communication</th>
            <th className="py-4 px-6 text-left font-bold text-gray-900 border-b border-gray-300">Financial Literacy</th>
            <th className="py-4 px-6 text-left font-bold text-gray-900 border-b border-gray-300">Career Exploration</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="py-4 px-6 font-medium text-gray-900">Retail Sales</td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="py-4 px-6 font-medium text-gray-900">Babysitting</td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="py-4 px-6 font-medium text-gray-900">Freelance Work</td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="py-4 px-6 font-medium text-gray-900">Food Service</td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="py-4 px-6 font-medium text-gray-900">Tutoring</td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </td>
            <td className="py-4 px-6">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center text-sm text-gray-600 space-y-2 sm:space-y-0 sm:space-x-6">
      <div className="flex items-center">
        <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>High Benefit</span>
      </div>
      <div className="flex items-center">
        <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
        <span>Moderate Benefit</span>
      </div>
    </div>
  </div>
</div>

 <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            
            {/* FAQ 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                onClick={() => toggleFAQ(0)}
              >
                <span className="font-medium text-gray-900">What is the best age for teens to start working?</span>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform ${openFAQ === 0 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === 0 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700">
                    Most teens begin working around 15–16 years old. This allows them to balance school while gaining early experience.
                  </p>
                </div>
              )}
            </div>
            
            {/* FAQ 2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                onClick={() => toggleFAQ(1)}
              >
                <span className="font-medium text-gray-900">Can working teens still do well in school?</span>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform ${openFAQ === 1 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === 1 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700">
                    Yes, especially if they work under 15 hours per week. Time management is key.
                  </p>
                </div>
              )}
            </div>
            
            {/* FAQ 3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                onClick={() => toggleFAQ(2)}
              >
                <span className="font-medium text-gray-900">What if a teen doesn't want to work retail or food service?</span>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform ${openFAQ === 2 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === 2 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700">
                    That's okay! Options like freelance gigs, online tutoring, or internships also count.
                  </p>
                </div>
              )}
            </div>
            
          </div>
        </div>

        {/* Section 12: Final Thoughts */}
<div className="mb-12">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
  <div className="prose prose-lg max-w-none text-gray-700">
    <p className="mb-6">
      Working during the teen and young adult years isn't just about earning money—it's about 
      building a foundation for future success. From mastering time management to learning how 
      to collaborate and build financial independence, early jobs teach life lessons no classroom 
      can offer.
    </p>
    <p className="mb-6">
      And for those exploring careers in education, early work can even spark an interest in 
      fields like teaching, adult learning, or digital instruction. Many who start early find 
      fulfillment in later becoming an adult education instructor, shaping the next generation 
      of learners.
    </p>
  </div>
</div>

{/* Section 13: References */}
<div className="mb-12">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">References</h2>
  <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
    <p className="text-gray-700">
      <span className="font-medium">1.</span> U.S. Bureau of Labor Statistics. (2022).{" "}
      <a 
        href="https://www.bls.gov/news.release/youth.nr0.htm" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 hover:underline"
      >
        Employment and unemployment among youth
      </a>
      . https://www.bls.gov/news.release/youth.nr0.htm
    </p>
    
    <p className="text-gray-700">
      <span className="font-medium">2.</span> Child Trends. (2020).{" "}
      <a 
        href="https://www.childtrends.org" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 hover:underline"
      >
        Youth Employment: Benefits and Risks
      </a>
      . https://www.childtrends.org
    </p>
    
    <p className="text-gray-700">
      <span className="font-medium">3.</span> NACE Job Outlook. (2023).{" "}
      <a 
        href="https://www.naceweb.org" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 hover:underline"
      >
        Top Attributes Employers Seek
      </a>
      . https://www.naceweb.org
    </p>
  </div>
</div>
      </section>
    </div>
  );
};

export default Blog5;
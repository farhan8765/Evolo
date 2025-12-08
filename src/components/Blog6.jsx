import React, { useState } from 'react';

const Blog6 = () => {
     const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:px-8 md:py-10 font-[Raleway]">
        
        {/* Article Header */}
        <div className="mb-10 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900 leading-tight mb-6">
            What Percentage of Teens and Young Adults Have Retail Jobs?
          </h1>
           {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/images/blog6.png" 
            alt="Teens and Young Adults Working in Retail Jobs"
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
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-lg p-6 mb-12 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Key Summary
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Retail is one of the most common entry points into the workforce for teens and young adults. 
            Around 25–30% of teens (ages 16–19) and 35–40% of young adults (ages 20–24) work in retail jobs. 
            Many use these roles to gain soft skills, earn income, and build work experience. Retail jobs often 
            serve as stepping stones to other careers, especially for those without college degrees. This blog 
            explores current employment statistics, job types, challenges, and the importance of retail 
            experience in early career development.
          </p>
        </div>

{/* Introduction Section */}
<div className="prose prose-lg max-w-none text-gray-700 mb-12">
  <p className="mb-6">
    Many people underestimate the role of retail jobs in shaping the careers of teenagers and young adults. 
    Retail is often seen as a "temporary fix" instead of an important first step in career development. 
    But ignoring the importance of retail jobs means that millions of youngsters have to ignore the ways 
    of responsibility, communication, teamwork, time management, earning an income, and supporting their 
    future ambitions.
  </p>
  
  <p className="mb-6">
    In this blog, we will find out how many teenagers and young adults are working in retail, why they 
    choose these roles, and what benefits the retail experience brings. Whether you are a parent, teacher, 
    or youth activist, understanding the trend of this job can help shape smart decisions and can open 
    the door for more and more opportunities.
  </p>
</div>

{/* Table of Content */}
<div className="bg-white p-6 mb-12 rounded-xl border border-gray-200">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Content</h2>
  <ol className="list-decimal pl-5 space-y-3">
    <li className="text-gray-700 font-medium">Current employment data between teen and young adults</li>
    <li className="text-gray-700 font-medium">Why retail jobs attract young workers</li>
    <li className="text-gray-700 font-medium">The most common supermarket occupations for youths</li>
    <li className="text-gray-700 font-medium">Skills learned through employment in retailing</li>
    <li className="text-gray-700 font-medium">Young adults and teenagers in merchandising are faced with numerous problems.</li>
    <li className="text-gray-700 font-medium">Career Development and Transition Prospects</li>
    <li className="text-gray-700 font-medium">Teen and Young Adult Employment by Sector</li>
    <li className="text-gray-700 font-medium">Frequently Asked Questions</li>
    <li className="text-gray-700 font-medium">Final Thoughts</li>
    <li className="text-gray-700 font-medium">References</li>
  </ol>
</div>

{/* Section 1: Current employment data between teen and young adults */}
<div className="mb-12">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Current employment data between teen and young adults</h2>
  <div className="prose prose-lg max-w-none text-gray-700">
    <p className="mb-4">
      According to the US Bureau of Labor Statistics (BLS), retail trade is one of the top employment 
      sectors for young workers. In 2024, about 28% of employed teenagers aged 16–19 years and 37% of 
      young adults aged 20–24 years captured positions in the retail field [source: BLS.Gov]. These 
      numbers especially have seasonal ups and downs during the recruitment of leave but continuously 
      remain high due to access to these roles.
    </p>
    
    <p className="mb-6">
      The National Retail Federation also stated that for people below 25 years of age, one of the four 
      jobs is in retail, making it a primary entry-level employment entrance. Shifts contribute to 
      flexibility in shifts, fewer obstacles to entry, and proximity to home or school.
    </p>
    
   <div className="mt-8">
  <h3 className="text-xl font-bold text-gray-900 mb-4">Teen and Young Adult Employment in Retail</h3>
  
  <div className="flex justify-center flex-col items-center">
    <img 
      src="/images/blogsix2.png" 
      alt="Teen and Young Adult Employment in Retail - Percent Over Years"
      className="w-[300px] h-[400px] rounded-lg"
    />
    <div className="mt-4 w-full">
      <p className="text-gray-500 text-sm text-center">
        Source: U.S. Bureau of Labor Statistics (BLS) & National Retail Federation
      </p>
      <p className="text-gray-500 text-sm text-center mt-1">
        Retail Employment Trends 2014-2024
      </p>
    </div>
  </div>
</div>
  </div>
</div>

{/* Section 2: Why retail jobs attract young workers */}
<div className="mb-12">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Why retail jobs attract young workers</h2>
  <div className="prose prose-lg max-w-none text-gray-700">
    <p className="mb-6">
      Retail jobs are often appealing to young workers because they usually do not require advanced 
      education or experience. They offer:
    </p>
    
    <ul className="space-y-3 mb-6">
      <li className="flex items-start">
        <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>Flexible hours (great for students)</span>
      </li>
      <li className="flex items-start">
        <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>Opportunities to acquire bonus or commission</span>
      </li>
      <li className="flex items-start">
        <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>In-store promotion and rapid opportunity</span>
      </li>
      <li className="flex items-start">
        <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>Local availability (malls, shops, restaurants, etc.)</span>
      </li>
      <li className="flex items-start">
        <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>Customer conversation that creates confidence</span>
      </li>
    </ul>
    
    <p className="mb-6">
      For many young adults starting their journey, these jobs offer a chance to build a resume and 
      develop workplace etiquette. For those without a college degree, retail becomes a practical and 
      immediate employment option. You can also explore{" "}
      <a href="/" className="text-blue-600 hover:underline font-medium">
        The Best Remote Jobs for Adults Without a College Degree
      </a>{" "}
      if you're looking for other accessible career options.
    </p>
    
    <div className="mt-8 flex justify-center">
      <img 
        src="/images/blogsix3.png" 
        alt="Retail Jobs Benefits for Young Workers"
        className="w-[300px] h-[400px] rounded-lg shadow-md"
      />
    </div>
  </div>
</div>
{/* Section 3: The most common supermarket occupations for youths */}
<div className="mb-12">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">The most common supermarket occupations for youths</h2>
  <div className="prose prose-lg max-w-none text-gray-700">
    <p className="mb-4">
      Retail provides very varied job titles for young adults, such as
    </p>
    
    <ul className="space-y-3 mb-6">
      <li className="flex items-start">
        <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>Cashier</span>
      </li>
      <li className="flex items-start">
        <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>Store representative</span>
      </li>
      <li className="flex items-start">
        <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>Store attendant</span>
      </li>
      <li className="flex items-start">
        <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>Visual trading customer service representative</span>
      </li>
      <li className="flex items-start">
        <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>Baristas and Food Service Personnel</span>
      </li>
    </ul>
    
    <p className="mb-4">
      The majority of companies, such as Walmart, Target, Starbucks, and Best Buy, hire youths and even offer education aid schemes.
    </p>
    <p>
      They can equally serve as a stepping stone that moves towards more stable employment, like management or corporate career work within retail, or later in life.
    </p>
  </div>
</div>

{/* Section 4: Skills learned through employment in retailing */}
<div className="mb-12">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills learned through employment in retailing</h2>
  <div className="prose prose-lg max-w-none text-gray-700">
    <p className="mb-6">
      Retail work allows for various forms of transferable skills useful for any career:
    </p>
    
    <ul className="space-y-3 mb-6">
      <li className="flex items-start">
        <span className="text-blue-600 font-semibold mr-3">•</span>
        <span><span className="font-semibold">Communication:</span> Dealing with customers and resolving grievances.</span>
      </li>
      <li className="flex items-start">
        <span className="text-blue-600 font-semibold mr-3">•</span>
        <span><span className="font-semibold">Time management:</span> balancing shift work and school or private commitments.</span>
      </li>
      <li className="flex items-start">
        <span className="text-blue-600 font-semibold mr-3">•</span>
        <span><span className="font-semibold">Salesmanship:</span> Understanding what a client wants and persuading them to purchase.</span>
      </li>
      <li className="flex items-start">
        <span className="text-blue-600 font-semibold mr-3">•</span>
        <span><span className="font-semibold">Teamwork:</span> Collaborating with peers in a high-book environment.</span>
      </li>
      <li className="flex items-start">
        <span className="text-blue-600 font-semibold mr-3">•</span>
        <span><span className="font-semibold">Adaptability:</span> Handling stressful conditions and multitasking</span>
      </li>
    </ul>
    
    <p className="mb-4">
      These 'soft skills' form the foundation for work success and are a common inclusion in job interviews and job advertisements. This guide to young adult careers suggests that even short-term employment in shops can substantially enhance employment prospects.
    </p>
    
    <div className="bg-blue-50 p-6 rounded-lg my-6">
      <h3 className="text-lg font-bold text-gray-900 mb-3">Retail Work and the Non-College Career Path</h3>
      <p className="mb-3">
        Most young adults don't go to college, and department stores cover the time between college and eventual long-term job finding. Unconventional paths gain what retail work provides: job experience and financial independence.
      </p>
      <p>
        In fact, many individuals pursuing adult education jobs in my area later in life credit prior career experiences in retail for learning interpersonal and organizational skills.
        Retail is also a training ground for those wishing to transition into entrepreneurship, customer service, sales, or even teaching, especially hands-on, community-facing roles like adult education teacher or vocational training specialist.
      </p>
    </div>
  </div>
</div>

{/* Section 5: Young adults and teenagers in merchandising are faced with numerous problems */}
<div className="mb-12">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Young adults and teenagers in merchandising are faced with numerous problems</h2>
  <div className="prose prose-lg max-w-none text-gray-700">
    <p className="mb-6">
      It isn't without its negatives for young people, though:
    </p>
    
    <ul className="space-y-4 mb-6">
      <li className="flex items-start">
        <span className="text-red-600 font-semibold mr-3">•</span>
        <span><span className="font-semibold">Low wages:</span> Many entry-level jobs are near minimum wage.</span>
      </li>
      <li className="flex items-start">
        <span className="text-red-600 font-semibold mr-3">•</span>
        <span><span className="font-semibold">Variable hours:</span> The schedules are not fixed.</span>
      </li>
      <li className="flex items-start">
        <span className="text-red-600 font-semibold mr-3">•</span>
        <span><span className="font-semibold">Workplace stress:</span> Retail is equated with hard customers and pressures.</span>
      </li>
      <li className="flex items-start">
        <span className="text-red-600 font-semibold mr-3">•</span>
        <span><span className="font-semibold">Limited benefits:</span> Part-time employment will not often include PTO or medical insurance.</span>
      </li>
      <li className="flex items-start">
        <span className="text-red-600 font-semibold mr-3">•</span>
        <span><span className="font-semibold">Glass ceiling:</span> Career advancement can be slow or restricted in some companies.</span>
      </li>
    </ul>
    
    <p>
      It is essential to note these realities in formulating career strategies and setting expectations ahead.
    </p>
  </div>
</div>

{/* Section 6: Career Development and Transition Prospects */}
<div className="mb-12">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Development and Transition Prospects</h2>
  <div className="prose prose-lg max-w-none text-gray-700">
    <p className="mb-6">
      Retail is often utilized as a springboard to upper positions by many young adults and teenagers. Career opportunities may be
    </p>
    
    <ul className="space-y-4">
      <li className="flex items-start">
        <span className="text-green-600 font-semibold mr-3">•</span>
        <span>Switching to Retail Management</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-600 font-semibold mr-3">•</span>
        <span>Moving toward office-based customer service</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-600 font-semibold mr-3">•</span>
        <span>Looking for corporate employment within the same company</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-600 font-semibold mr-3">•</span>
        <span>Beginning online businesses or side hustles</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-600 font-semibold mr-3">•</span>
        <span>Continuing online adult education to improve skills</span>
      </li>
    </ul>
  </div>
</div>
{/* Section: Teen and Young Adult Employment by Sector */}
<div className="mb-12">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
    Teen and Young Adult Employment by Sector
  </h2>
  
  <div className="gap-8 items-start">
    {/* Table Section */}
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
        <h3 className="text-lg font-bold text-white">Employment Distribution by Sector</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Sector</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Teens (16–19)</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Young Adults (20–24)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">Retail Trade</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <span className="font-semibold text-blue-600 mr-3">28%</span>
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <span className="font-semibold text-purple-600 mr-3">37%</span>
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: '37%' }}></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">Food Services</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <span className="font-semibold text-blue-600 mr-3">31%</span>
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '31%' }}></div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <span className="font-semibold text-purple-600 mr-3">26%</span>
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: '26%' }}></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">Education & Health</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <span className="font-semibold text-blue-600 mr-3">10%</span>
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <span className="font-semibold text-purple-600 mr-3">15%</span>
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">Construction</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <span className="font-semibold text-blue-600 mr-3">7%</span>
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '7%' }}></div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <span className="font-semibold text-purple-600 mr-3">9%</span>
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: '9%' }}></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">Professional Services</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <span className="font-semibold text-blue-600 mr-3">4%</span>
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '4%' }}></div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <span className="font-semibold text-purple-600 mr-3">7%</span>
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: '7%' }}></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">Other</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <span className="font-semibold text-blue-600 mr-3">20%</span>
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <span className="font-semibold text-purple-600 mr-3">6%</span>
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: '6%' }}></div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 bg-gray-50 text-sm text-gray-600 border-t border-gray-200">
        <p>Source: U.S. Bureau of Labor Statistics - Youth Employment Data</p>
      </div>
    </div>

  {/* Image Section */}
<div className="bg-white shadow-sm overflow-hidden">
  <div className="p-6">
    <h3 className="text-lg font-bold text-gray-900 mb-4">Career Progression Examples</h3>
    <div className="rounded-lg overflow-hidden shadow-md flex justify-center">
      <img 
        src="/images/blogsix4.png" 
        alt="Career progression from Entry Level to Store Manager in retail sector"
        className="w-[600px] h-[400px]"
      />
    </div>
    <div className="mt-6">
      <h4 className="font-semibold text-gray-900 mb-3">Career Path Shown:</h4>
      <ul className="space-y-2">
        <li className="flex items-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
          <span className="text-gray-700">Entry Level → Addition Manager</span>
        </li>
        <li className="flex items-center">
          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
          <span className="text-gray-700">Addition Manager → Store Manager</span>
        </li>
      </ul>
      <p className="text-sm text-gray-600 mt-4 italic">
        This shows how starting in entry-level retail jobs can lead to management positions.
      </p>
    </div>
  </div>
</div>
  </div>
</div>

{/* FAQ Section */}
<div className="mb-12">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
    Frequently Asked Questions
  </h2>
  
  <div className="space-y-4">
    {/* FAQ 1 */}
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
        onClick={() => toggleFAQ(0)}
      >
        <span className="font-medium text-gray-900">Why do so many young people work in retail?</span>
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
            Retail offers accessible, entry-level employment with flexible hours—ideal for students and those without a degree.
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
        <span className="font-medium text-gray-900">Are retail jobs good for long-term careers?</span>
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
            They can be. Many retail workers rise to management or shift into corporate roles.
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
        <span className="font-medium text-gray-900">What age group has the highest retail employment rate?</span>
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
            Young adults aged 20–24, followed by teens aged 16–19.
          </p>
        </div>
      )}
    </div>
    
    {/* FAQ 4 */}
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
        onClick={() => toggleFAQ(3)}
      >
        <span className="font-medium text-gray-900">Can retail experience help me switch careers?</span>
        <svg 
          className={`w-5 h-5 text-gray-500 transition-transform ${openFAQ === 3 ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {openFAQ === 3 && (
        <div className="px-6 py-4 bg-white">
          <p className="text-gray-700">
            Yes! It builds soft skills that are valuable in nearly every industry.
          </p>
        </div>
      )}
    </div>
  </div>
</div>

{/* Simple Version */}
<div className="mb-12">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
  <div className="prose prose-lg max-w-none text-gray-700">
    <p className="mb-4">
      Retail jobs play a critical role in youth employment, serving as the first work experience 
      for millions of teens and young adults. These jobs build essential life and work skills, 
      offer immediate income, and often open doors to better opportunities.
    </p>
    <p className="mb-6">
      For those seeking growth without a college degree, retail can become a launchpad, not a dead end.
      For young adults ready to transition from the retail floor to the next phase of their 
      professional journey, exploring adult education instructor jobs or other career-oriented 
      online programs may be the next empowering step.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mb-6">References</h2>

    <div className="bg-gray-50 p-6 rounded-lg mt-8">
      <div className="space-y-3">
        <p className="text-gray-700">
          <span className="font-medium">1.</span> U.S. Bureau of Labor Statistics. (2024).{" "}
          <a 
            href="https://www.bls.gov/news.release/youth.nr0.htm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            Employment and Unemployment Among Youth
          </a>
          . https://www.bls.gov/news.release/youth.nr0.htm
        </p>
        <p className="text-gray-700">
          <span className="font-medium">2.</span> National Retail Federation. (2023).{" "}
          <a 
            href="https://nrf.com/research-insights" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            Retail Jobs Report
          </a>
          . https://nrf.com/research-insights
        </p>
      </div>
    </div>
  </div>
</div>

      </section>
    </div>
  );
};

export default Blog6;
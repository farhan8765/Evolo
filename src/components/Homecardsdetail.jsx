import React from 'react';

const Homecardsdetail = () => {
  const cards = [
    {
      title: 'Students',
      description: "Whether you're pursuing a new career or managing personal challenges, Evolo AI gives you the tools to succeed."
    },
    {
      title: 'Employers',
      description: 'Access pre-vetted talent from California\'s top adult education programs. Post jobs, review applicants, and hire faster.'
    },
    {
      title: 'Counselors',
      description: 'Spend less time on paperwork, more time with students. Our AI handles documentation, compliance, and scheduling automatically.'
    },
    {
      title: 'Administrators',
      description: 'Get the data you need to prove impact, secure funding, and scale programs that work.'
    },
    {
      title: 'Classified Staff',
      description: 'Unlock CYBHI revenue, improve mental health outcomes, and build sustainable systems that serve students and communities.'
    }
  ];

  return (
    <div className="w-full bg-[#F8F9FA] py-16 px-4 font-['Raleway']">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-black text-sm font-bold uppercase tracking-wider px-3 py-1 font-['Raleway']">
              WHO WE SERVE
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Raleway'] bg-gradient-to-r from-black to-[#2B1BDD] bg-clip-text text-transparent">
  Designed for Everyone in the
  <br />
  Education Ecosystem
</h2>

          
          <p className="text-gray-600 text-base max-w-2xl mx-auto font-['Raleway']">
            Whether you're seeking a fresh start or looking to leverage your existing skills in a new industry,
        
            we're here to help you succeed
          </p>
        </div>

        {/* Cards Row */}
        <div className="flex flex-wrap justify-center gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F7F8FF] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex-shrink-0 font-['Raleway']"
              style={{ width: '220px' }}
            >
              <h3 className="text-lg font-bold text-[#1a1a2e] mb-3 font-['Raleway']">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-['Raleway']">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homecardsdetail;
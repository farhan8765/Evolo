import React from 'react';

const Homecardsdetail = () => {
  const cards = [
    {
      title: 'Students',
      description: "Whether you're pursuing a new career or looking to leverage your existing skills in a new industry, Evolo AI makes job searching effortless. Swipe to apply for jobs, connect directly with employers, and prepare for career fairs—all from your mobile device."
    },
    {
      title: 'Employers',
      description: 'Access pre-vetted talent from California top adult education programs. Post job opportunities, review qualified candidates, and streamline your hiring process through one intuitive platform.'
    },
     {
      title: 'Institutions',
      description: 'Expand your employer network, track student placement outcomes, and demonstrate program success with real-time data and analytics. Prove your impact to funders and stakeholders with measurable results.'
    },
    {
      title: 'Counselors',
      description: 'Spend less time on paperwork, more time with students. Our AI generates CYBHI-compliant session notes, manages scheduling, tracks follow-ups, and reviews incident reports—so you can focus on providing quality behavioral health support.'
    },
    {
      title: 'Administrators',
      description: 'Gain complete oversight of behavioral incidents and counseling sessions across your school or district. Access comprehensive analytics, ensure CYBHI compliance, and make data-driven decisions that improve student mental health outcomes.'
    },
    {
      title: 'Classified Staff',
      description: 'Document behavioral incidents quickly and accurately with AI-powered assistance. Simply describe what happened using voice or text, and our platform generates structured, CYBHI-compliant incident reports ready for counselor review—no specialized training required.'
    }
  ];

  return (
    <div className="w-full bg-[white] py-16 px-4 font-['Raleway']">
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
            From adult education institutions connecting students to careers, to K-12 schools managing behavioral health services, Evolo AI provides tailored solutions for every stakeholder.
          </p>
        </div>

        {/* Cards Row */}
        <div className="flex flex-wrap justify-center gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F7F8FF] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex-shrink-0 font-['Raleway']"
              style={{ width: '320px' }}
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
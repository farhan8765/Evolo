import React from 'react';

const audienceCards = [
  {
    title: 'Got Skills?',
    subtitle: 'Why Students Love Us',
  },
  {
    title: 'Need Talent?',
    subtitle: 'Why Employers Love Us',
  },
  {
    title: 'Empower Your Students',
    subtitle: 'Why Institutions Love Us',
  },
];

const bulletPoints = [
  '300 monthly queries',
  '300 monthly queries',
  '300 monthly queries',
  '300 monthly queries',
  '300 monthly queries',
  '300 monthly queries',
];

const fullBleed = {
  width: '100vw',
  marginLeft: 'calc(50% - 50vw)',
  marginRight: 'calc(50% - 50vw)',
};

const Skills = () => {
  return (
    <section
      style={fullBleed}
      className="bg-[#f7f7fb] py-20 font-[Inter,sans-serif]"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6">
        <h2 className="text-center text-4xl font-semibold leading-snug text-[#0f1b66]">
          Our platform helps <span className="text-[#5327ff]">Students</span>,
          <span className="text-[#5327ff]"> Institutions</span>, and{' '}
          <span className="text-[#5327ff]">Employers</span> through our exclusive
          focus on Adult Schools and their Students.
        </h2>

        <div className="grid w-full gap-8 lg:grid-cols-3">
          {audienceCards.map(({ title, subtitle }) => (
            <article
              key={title}
              className="flex flex-col rounded-[26px] bg-white p-8 shadow-[0px_25px_50px_rgba(15,27,102,0.08)]"
            >
              <h3 className="text-2xl font-semibold text-[#111827]">{title}</h3>
              <p className="mt-2 text-base text-[#6b7280]">{subtitle}</p>
              <ul className="mt-6 flex flex-col gap-3 text-[#4b5563]">
                {bulletPoints.map((point, index) => (
                  <li key={`${title}-${index}`} className="flex items-center gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="#0dd175"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-8 rounded-[14px] bg-[#5b20ff] py-3 text-center text-base font-semibold text-white shadow-[0px_12px_24px_rgba(91,32,255,0.35)] transition hover:bg-[#4a12f0]"
              >
                Learn More
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

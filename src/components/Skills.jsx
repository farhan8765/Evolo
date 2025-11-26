import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const audienceCards = [
  {
    title: 'Got Skills?',
    subtitle: 'Why Students Love Us',
    points: [
      'Swipe to Apply',
      'Instant Communication',
      'AI-Powered Profile Builder',
      'Exclusive Career Events',
    ],
    pageUrl: '/student'
  },
  {
    title: 'Need Talent?',
    subtitle: 'Why Employers Love Us',
    points: [
      'Access to a Diverse Talent Pool',
      'Effortless Job Posting',
      'Built-In Applicant Tracking',
      'Employer Partnerships',
    ],
    pageUrl: '/employee'
  },
  {
    title: 'Empower Your Students',
    subtitle: 'Why Institutions Love Us',
    points: [
      'Employer Connections',
      'Real-Time Outcome Tracking',
      'Host Career Fairs with Ease',
      'Mobile App for Student Success',
    ],
    pageUrl: '/institute'
  },
];

const fullBleed = {
  width: '100vw',
  marginLeft: 'calc(50% - 50vw)',
  marginRight: 'calc(50% - 50vw)',
};

const Skills = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const handleLearnMoreClick = (pageUrl) => {
    navigate(pageUrl);
  };

  return (
    <section
      ref={sectionRef}
      style={fullBleed}
      className="bg-[#f7f7fb] py-20 font-[Inter,sans-serif]"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6">

        <h2
          className={`text-center text-3xl font-semibold leading-snug bg-gradient-to-r from-[#0f1b66] to-[#5327ff] bg-clip-text text-transparent transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Our platform helps Students, Institutions, and Employers through our exclusive focus on Adult Schools and their Students.
        </h2>

        <div className="grid w-full gap-8 lg:grid-cols-3">
          {audienceCards.map(({ title, subtitle, points, pageUrl }, index) => (
            <article
              key={title}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`flex flex-col rounded-[26px] bg-white p-8 shadow-[0px_25px_50px_rgba(15,27,102,0.08)] transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <h3 className="text-2xl font-semibold text-[#111827]">{title}</h3>
              <p className="mt-2 text-base text-[#6b7280]">{subtitle}</p>

              <ul className="mt-6 flex flex-col gap-3 text-[#4b5563]">
                {points.map((point, index) => (
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
                onClick={() => handleLearnMoreClick(pageUrl)}
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
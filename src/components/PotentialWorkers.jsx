import React, { useEffect, useRef, useState } from 'react';

const STATS = [
  { figure: '3M+', label: 'Potential Workers' },
  { figure: '3K+', label: 'Adult Schools' },
  { figure: '~5M', label: 'Annual Job Openings' },
];

const fullBleedStyle = {
  width: '100vw',
  marginLeft: 'calc(50% - 50vw)',
  marginRight: 'calc(50% - 50vw)',
};

const PotentialWorkers = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={fullBleedStyle}
      className="bg-[#eef0ff] py-10 sm:py-12 md:py-16 font-[Inter,sans-serif]"
    >
      <div className="w-full max-w-[2000px] mx-auto flex flex-col items-center gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6">
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-bold text-center w-full bg-gradient-to-r from-[#0f1b66] to-[#5327ff] bg-clip-text text-transparent transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          95% Of Employers Are Missing Out On:
        </h2>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 sm:gap-12 md:gap-20 lg:gap-40 xl:gap-60 w-full">
          {STATS.map(({ figure, label }, index) => (
            <div
              key={label}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`flex flex-col items-center gap-1.5 sm:gap-2 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[48px] font-black text-[#6b3dff]">
                {figure}
              </span>
              <span className="text-sm sm:text-base md:text-lg lg:text-[18px] font-medium text-[#1c1d21] text-center">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PotentialWorkers;
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SECTION_COUNT = 4;

export default function Partner() {
  const headerRef = useRef(null);
  const blockRefs = useRef([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [visibleBlocks, setVisibleBlocks] = useState(() =>
    Array(SECTION_COUNT).fill(false)
  );
  const navigate = useNavigate();

  useEffect(() => {
    const headerNode = headerRef.current;
    const blockNodes = blockRefs.current;

    const headerObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          headerObserver.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (headerNode) {
      headerObserver.observe(headerNode);
    }

    const blockObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleBlocks((prev) => {
              if (prev[index]) return prev;
              const next = [...prev];
              next[index] = true;
              return next;
            });
            blockObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    blockNodes.forEach((node) => node && blockObserver.observe(node));

    return () => {
      headerObserver.disconnect();
      blockObserver.disconnect();
    };
  }, []);

  const registerBlockRef = (el, index) => {
    blockRefs.current[index] = el;
  };

  return (
    <section className="bg-white text-black mb-12 sm:mb-16">
      {/* Header */}
      <div ref={headerRef} className="max-w-6xl mx-auto text-center px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-10">
        <h1
          className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-snug bg-gradient-to-r from-[#12005E] to-[#4D04DB] bg-clip-text text-transparent transition-all duration-700 delay-100 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          AdultED Pro Presents Evolo AI: Your Partner in Adult Education Success
        </h1>

        <p
          className={`text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          We proudly present Evolo AI, the app that empowers students to succeed while
          helping schools connect with employers. Together, we can make education more
          effective and impactful.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-24 lg:pt-8 px-4 sm:px-6">

        {/* Section 1 */}
        <div
          ref={(el) => registerBlockRef(el, 0)}
          data-index="0"
          className={`relative bg-[#4D04DB] text-white rounded-xl sm:rounded-2xl max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center p-8 sm:p-8 md:p-10 overflow-visible mt-6 transition-all duration-700 ease-out ${
            visibleBlocks[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div
            className={`md:w-1/2 space-y-3 sm:space-y-4 transition-all duration-700 ease-out ${
              visibleBlocks[0]
                ? 'opacity-100 translate-y-0 md:translate-x-0'
                : 'opacity-0 translate-y-6 md:-translate-x-8'
            }`}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Swipe to Apply
            </h2>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed">
              Job applications just got a whole lot simpler! Experience the convenience of applying for jobs with a simple swipe to the right. Say goodbye to tedious application processes and hello to seamless opportunities at your fingertips.
            </p>
          </div>

          <img
            src="/images/right.png"
            alt="App preview"
            className={`md:absolute md:-right-[-40px] md:top-1/2 md:-translate-y-1/2 w-[180px] h-[240px] sm:w-[220px] sm:h-[290px] md:w-[310px] md:h-[430px] rotate-[1deg] drop-shadow-2xl mt-4 sm:mt-6 md:mt-0 transition-all duration-700 ease-out delay-100 ${
              visibleBlocks[0]
                ? 'opacity-100 translate-y-0 md:translate-x-0'
                : 'opacity-0 translate-y-4 md:translate-x-10'
            }`}
          />
        </div>

        {/* Section 2 */}
        <div
          ref={(el) => registerBlockRef(el, 1)}
          data-index="1"
          className={`relative bg-[#4D04DB] text-white rounded-xl sm:rounded-2xl max-w-5xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center p-6 sm:p-8 md:p-10 overflow-visible transition-all duration-700 ease-out ${
            visibleBlocks[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <img
            src="/images/left.png"
            alt="App preview"
            className={`md:absolute md:-left-[-40px] md:top-1/2 md:-translate-y-1/2 w-[180px] h-[240px] sm:w-[220px] sm:h-[290px] md:w-[320px] md:h-[430px] rotate-[-1deg] drop-shadow-2xl mt-4 sm:mt-6 md:mt-0 transition-all duration-700 ease-out ${
              visibleBlocks[1]
                ? 'opacity-100 translate-y-0 md:translate-x-0'
                : 'opacity-0 translate-y-4 md:-translate-x-10'
            }`}
          />

          <div
            className={`md:w-1/2 space-y-3 sm:space-y-4 md:ml-auto transition-all duration-700 ease-out delay-100 ${
              visibleBlocks[1]
                ? 'opacity-100 translate-y-0 md:translate-x-0'
                : 'opacity-0 translate-y-6 md:translate-x-8'
            }`}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Instant Communication with Employers
            </h2>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed">
              Take the stress out of job hunting! Whenever you apply for a position, our app automatically initiates a conversation with the employer. Get answers to your questions, express your enthusiasm, and make a great first impression—all within the app.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div
          ref={(el) => registerBlockRef(el, 2)}
          data-index="2"
          className={`relative bg-[#4D04DB] text-white rounded-xl sm:rounded-2xl max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center p-6 sm:p-8 md:p-10 overflow-visible transition-all duration-700 ease-out ${
            visibleBlocks[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div
            className={`md:w-1/2 space-y-3 sm:space-y-4 transition-all duration-700 ease-out ${
              visibleBlocks[2]
                ? 'opacity-100 translate-y-0 md:translate-x-0'
                : 'opacity-0 translate-y-6 md:-translate-x-8'
            }`}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Unlock Opportunities At Career Events!
            </h2>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed">
              Easily sign up and preview upcoming job fairs and career events. Be prepared to stand out and make an impression before you even walk through the door.
            </p>
          </div>

          <img
            src="/images/mble2.png"
            alt="App preview"
            className={`md:absolute md:-right-[-40px] md:top-1/2 md:-translate-y-1/2 w-[180px] h-[240px] sm:w-[220px] sm:h-[290px] md:w-[310px] md:h-[430px] rotate-[1deg] drop-shadow-2xl mt-4 sm:mt-6 md:mt-0 transition-all duration-700 ease-out delay-100 ${
              visibleBlocks[2]
                ? 'opacity-100 translate-y-0 md:translate-x-0'
                : 'opacity-0 translate-y-4 md:translate-x-10'
            }`}
          />
        </div>

        {/* Section 4 (with button) */}
        <div
          ref={(el) => registerBlockRef(el, 3)}
          data-index="3"
          className={`relative bg-[#4D04DB] text-white rounded-xl sm:rounded-2xl max-w-5xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center p-6 sm:p-8 md:p-10 overflow-visible transition-all duration-700 ease-out ${
            visibleBlocks[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <img
            src="/images/cvmble.png"
            alt="App preview"
            className={`md:absolute md:-left-[-40px] md:top-1/2 md:-translate-y-1/2 w-[180px] h-[240px] sm:w-[220px] sm:h-[290px] md:w-[320px] md:h-[430px] rotate-[-1deg] drop-shadow-2xl mt-4 sm:mt-6 md:mt-0 transition-all duration-700 ease-out ${
              visibleBlocks[3]
                ? 'opacity-100 translate-y-0 md:translate-x-0'
                : 'opacity-0 translate-y-4 md:-translate-x-10'
            }`}
          />

          <div
            className={`md:w-1/2 space-y-3 sm:space-y-4 md:ml-auto transition-all duration-700 ease-out delay-100 ${
              visibleBlocks[3]
                ? 'opacity-100 translate-y-0 md:translate-x-0'
                : 'opacity-0 translate-y-6 md:translate-x-8'
            }`}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              AI-Powered Profile Builder
            </h2>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed">
              Evolo AI helps you build a standout profile in minutes. Showcase your skills with ease, apply for jobs effortlessly, and impress employers with custom AI-generated taglines tailored just for you.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-black text-white text-xs sm:text-sm px-4 py-2 rounded mt-2 hover:bg-gray-900 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
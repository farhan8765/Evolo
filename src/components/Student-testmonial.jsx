import React, { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote:
      '“Being introduced to the Evolo app today was a fantastic experience. Evolo functions like a dating app for jobs, allowing me to swipe left or right to connect with potential employers. Creating an in-depth profile made it easy for employers to find me and reach out directly. I love how Evolo facilitates connections in such a simple and effective way, making my job search both engaging and efficient!”',
    name: 'Sarah',
    role: 'CNA Nursing Assistant Program Student at Claremont Adult School',
  },
  {
    id: 2,
    quote:
      '“Participating in the Evolo program today was a great experience. We learned new skills, gained hands-on job experience, and had the opportunity to hear from an industry professional about the CNA and Home Care programs. Evolo also assists with résumé building, making it an invaluable tool for anyone looking to advance their career. I highly recommend it to others!" building, making it an invaluable tool for anyone looking to advance their career. I highly recommend it to others!"”',
    name: 'David',
    role: 'CNA Program Student at Claremont Adult School',
  },
  {
    id: 3,
    quote:
      '“Using the Evolo app today was a game-changer. It not only showed us available jobs but also provided detailed insights into each position, such as how much it pays and where its located. This level of information is incredibly helpful for planning my career path!”',
    name: 'Katherine',
    role: 'Student at Claremont Adult School',
  },
   {
    id: 4,
    quote:
      '“Being introduced to the Evolo app today was a fantastic experience. Evolo functions like a dating app for jobs, allowing me to swipe left or right to connect with potential employers. Creating an in-depth profile made it easy for employers to find me and reach out directly. I love how Evolo facilitates connections in such a simple and effective way, making my job search both engaging and efficient!”',
    name: 'Sarah',
    role: 'CNA Nursing Assistant Program Student at Claremont Adult School',
  },
 
];

const fullBleed = {
  width: '100vw',
  marginLeft: 'calc(50% - 50vw)',
  marginRight: 'calc(50% - 50vw)',
};

const StarRow = () => (
  <div className="flex gap-1 text-[#ffdf3e]">
    {Array.from({ length: 5 }).map((_, idx) => (
      <svg
        key={idx}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2.8l2.3 6.6 6.9.2-5.4 4.1 2 6.7L12 16.5l-5.8 3.9 2-6.7L2.8 9.6l6.9-.2L12 2.8z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ quote, name, role, onReadMore }) => {
  const maxPreviewLength = 210;
  const isLongQuote = quote.length > maxPreviewLength;
  const displayQuote = isLongQuote ? `${quote.slice(0, maxPreviewLength)}...` : quote;

  return (
    <article className="flex min-h-[250px] flex-col gap-4 rounded-[20px] bg-white p-8 text-[#1b1833] shadow-[0_12px_35px_rgba(15,27,102,0.08)]">
      <StarRow />
      <p className="text-lg leading-relaxed text-[#4b4b60]">{displayQuote}</p>
      {isLongQuote && (
        <button
          type="button"
          onClick={onReadMore}
          className="self-start text-sm font-semibold text-[#5533ff] transition hover:text-[#3b26b1]"
        >
          Read more
        </button>
      )}
      <div className="mt-auto">
        <p className="text-lg font-semibold text-[#1b1833]">{name}</p>
        <p className="text-sm text-[#7a7b8c]">{role}</p>
      </div>
    </article>
  );
};

const StudentTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const cardsToShow = 2;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - cardsToShow, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + cardsToShow, testimonials.length - cardsToShow)
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + cardsToShow
  );

  const handleReadMore = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const handleCloseModal = () => {
    setSelectedTestimonial(null);
  };

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
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={fullBleed}
      className="bg-[#eef0ff] py-20 font-[Inter,sans-serif]"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          {/* Left content */}
          <div
            className={`flex flex-col gap-4 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h2 className="text-5xl font-semibold bg-gradient-to-r from-[#080a2b] to-[#5533ff] bg-clip-text text-transparent">
  Students Testimonials
</h2>

            <p className="text-lg leading-relaxed text-[#4e4e68]">
              See how Evolo is reshaping adult education through firsthand stories from students
              who&apos;ve experienced its impact. Evolo empowers learners to reach their full
              potential, fostering both academic and career success. Through personalized support and
              real-world guidance, students unlock pathways to achieve their goals. Discover their
              journeys and the transformative role Evolo plays in making education work for every
              stage of adult learning.
            </p>
          </div>

          {/* Right testimonial cards */}
          <div className="grid gap-6 lg:grid-cols-2">
            {visibleTestimonials.map((item, index) => (
              <TestimonialCard
                key={item.id}
                {...item}
                onReadMore={() => handleReadMore(item)}
                className={`transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0f1b66] text-lg font-semibold text-[#0f1b66] transition hover:bg-[#0f1b66] hover:text-white"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0f1b66] text-lg font-semibold text-[#0f1b66] transition hover:bg-[#0f1b66] hover:text-white"
            >
              →
            </button>
          </div>

          <div className="flex gap-3">
            {[0, 1, 2, 3, 4].map((index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === Math.floor(currentIndex / cardsToShow)
                    ? 'bg-[#0f1b66]'
                    : 'bg-[#c3c5d9]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      {selectedTestimonial && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-4"
          onClick={(event) => {
            if (event.target === event.currentTarget) handleCloseModal();
          }}
        >
          <div className="relative w-full max-w-3xl rounded-[30px] bg-white p-10 text-[#1b1833] shadow-[0_25px_60px_rgba(0,0,0,0.15)]">
            <button
              type="button"
              className="absolute right-6 top-6 text-2xl text-[#999]"
              aria-label="Close testimonial"
              onClick={handleCloseModal}
            >
              ×
            </button>
            <StarRow />
            <h3 className="mt-4 text-2xl font-semibold text-[#1b1833]">
              {selectedTestimonial.name}
            </h3>
            <p className="text-sm text-[#7a7b8c]">
              {selectedTestimonial.role}
            </p>
            <hr className="my-6 border-[#e5e7f3]" />
            <p className="text-lg leading-relaxed text-[#4b4b60]">
              {selectedTestimonial.quote}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default StudentTestimonial;

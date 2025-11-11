import React from 'react';

const testimonials = [
  {
    id: 1,
    quote:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.”',
    name: 'Name Surname',
    role: 'Position, Company name',
  },
  {
    id: 2,
    quote:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.”',
    name: 'Name Surname',
    role: 'Position, Company name',
  },
  {
    id: 3,
    quote:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.”',
    name: 'Name Surname',
    role: 'Position, Company name',
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

const TestimonialCard = ({ quote, name, role }) => (
  <article className="flex min-h-[250px] flex-col gap-4 rounded-[20px] bg-white p-8 text-[#1b1833] shadow-[0_12px_35px_rgba(15,27,102,0.08)]">
    <StarRow />
    <p className="text-lg leading-relaxed text-[#4b4b60]">{quote}</p>
    <div className="mt-auto">
      <p className="text-lg font-semibold text-[#1b1833]">{name}</p>
      <p className="text-sm text-[#7a7b8c]">{role}</p>
    </div>
  </article>
);

const StudentTestimonial = () => {
  return (
    <section
      style={fullBleed}
      className="bg-[#eef0ff] py-20 font-[Inter,sans-serif]"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl font-semibold text-[#080a2b]">
              Students <span className="text-[#5533ff]">Testimonials</span>
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

          <div className="grid gap-6 lg:grid-cols-2">
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} {...item} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          <div className="flex gap-4">
            {['←', '→'].map((symbol) => (
              <button
                key={symbol}
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0f1b66] text-lg font-semibold text-[#0f1b66] transition hover:bg-[#0f1b66] hover:text-white"
              >
                {symbol}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            {[0, 1, 2, 3, 4].map((index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === 1 ? 'bg-[#0f1b66]' : 'bg-[#c3c5d9]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonial;

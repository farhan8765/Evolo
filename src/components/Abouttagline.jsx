import React from 'react';

const TAGLINE_CARDS = [
  {
    title: "Our Vision",
    copy:
      "Empowering every adult learner with next-gen technology, bridging support, pride, and ensuring equitable access to career-advancing education success."
  },
  {
    title: "Our Mission",
    copy:
      "We partner with adult education centers, community colleges, and technical institutions to ensure that every learner, regardless of their background, has access to the latest technology necessary to be successful once they begin the transition to their careers or higher education."
  },
  {
    title: "Our Motivation",
    copy:
      "Leveraging AI to help candidates put their best foot forward and set themselves up for success. Building strong networks between students, institutions, and employers to boost workforce readiness."
  }
];

const Abouttagline = () => {
  return (
    <section className="w-full bg-[#EFF0FF] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm tracking-[0.45em] font-semibold text-[#6b3dff] uppercase">
            Tagline
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#0f1535] leading-tight">
            Transforming Adult learning with{" "}
            <span className="text-[#5b32ff]">AI innovation</span>
          </h2>
        </div>

        <div className="bg-white rounded-[32px] shadow-[0_32px_70px_rgba(47,15,110,0.08)] p-6 md:p-10 grid gap-10 md:grid-cols-[1.15fr,0.95fr] items-center">
          <div className="relative flex justify-center">
            <div className="w-full max-w-full  p-4 md:p-6">
              <img
                src="/images/About.png"
                alt="Evolo AI mobile preview"
                className="w-full h-full object-contain "
              />
            </div>
          </div>

          <div className="space-y-5">
            {TAGLINE_CARDS.map(({ title, copy }) => (
              <div
                key={title}
                className="bg-[#f6f4ff] border border-[#ebe8ff] rounded-2xl p-5 shadow-[0_12px_30px_rgba(91,50,255,0.06)]"
              >
                <h3 className="text-lg font-semibold text-[#1b1b38] mb-2">
                  {title}
                </h3>
                <p className="text-sm text-[#4b4e63] leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abouttagline;

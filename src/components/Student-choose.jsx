import React from "react";

const highlights = [
  {
    title: "Seamless Employer Connections",
    description:
      "Apply for a job and start chatting with employers right away. Our in-app chat feature keeps you in the loop, making it easy to ask questions, schedule interviews, and build relationships all in one place.",
  },
  {
    title: "Empowerment Through AI",
    description:
      "Easily create a profile that showcases your strengths and unique skills. Our AI even generates attention-grabbing taglines, helping your application make a lasting impact on employers.",
  },
  {
    title: "Built for Your Success",
    description:
      "We’re here to help you take the first step toward your future. With all the tools and support you need, we make your journey from education to employment seamless and successful.",
  },
];

const StudentChoose = () => {
  return (
    <section className="bg-[#EFF0FF] px-4 py-20" id="student-choose">
      <div className="mx-auto max-w-6xl text-center">
        <p
          className="text-xs uppercase tracking-[0.35em] text-[#9fa2c1] animate-hero-reveal"
          style={{ animationDelay: "0.05s" }}
        >
          Tagline
        </p>
        <h2
          className="mt-3 text-4xl font-bold bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent animate-hero-reveal"
          style={{ animationDelay: "0.15s" }}
        >
          Why Choose Evolo AI
        </h2>

        <p
          className="mt-4 text-lg text-[#5b5f77] animate-hero-reveal"
          style={{ animationDelay: "0.25s" }}
        >
          Are you looking to switch to a new career? Our app helps you navigate
          the job market, providing resources and job listings tailored to your
          new career path. Whether you’re seeking a fresh start or looking to
          leverage your existing skills in a new industry, we’re here to help
          you succeed.
        </p>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-10 rounded-[36px] bg-white/90 p-8 shadow-[0_25px_60px_rgba(71,49,140,0.12)] md:flex-row md:items-center animate-hero-reveal" style={{ animationDelay: "0.35s" }}>
        <div className="flex-1">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute inset-0 " />
            <img
              src="/images/choose.png"
              alt="Evolo AI mobile mockup"
              className="relative z-10 w-full drop-shadow-[0_35px_60px_rgba(34,23,72,0.25)] animate-hero-float"
            />
          </div>
        </div>

        <div className="flex-1 space-y-4">
          {highlights.map(({ title, description }, index) => (
            <div
              key={title}
              className="rounded-2xl bg-[#f1efff] p-5 text-left shadow-[0_10px_20px_rgba(95,69,182,0.08)] hover:-translate-y-1 hover:shadow-[0_25px_35px_rgba(95,69,182,0.16)] transition animate-hero-reveal"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-[#27294a]">
                {title}
              </h3>
              <p className="mt-2 text-sm text-[#5b5f77]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentChoose;

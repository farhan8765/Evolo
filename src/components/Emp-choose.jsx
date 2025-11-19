import React from "react";

const pillars = [
  {
    title: "Brand",
    subtitle: "Build your employer profile",
    description:
      "With powerful tools and capabilities. Add images and videos to showcase your culture and stand out from the rest of the crowd, feature alumni and ambassadors and speak the language of your candidates.",
  },
  {
    title: "Source",
    subtitle: "Browse student profiles",
    description:
      "With powerful recommendations and screen candidates with AI designed to help you more efficiently find the best fit for your company.",
  },
  {
    title: "Engage",
    subtitle: "Two-way communication",
    description:
      "With candidates powered by AI. Upload screening requirements or let us do that for you using AI, and give candidates that warm introduction that leads to a hire down the road.",
  },
  {
    title: "Hire",
    subtitle: "Recruit and report",
    description:
      "Setup interviews with candidates, plan career fairs at schools, host lunches and provide feedback. With AdultEd Pro, you’re always on campus in one form or another!",
  },
];

const EmpChoose = () => {
  return (
    <section className="bg-[#EFF0FF] px-4 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p
          className="text-md font-bold tracking-[0.35em] text-[#182126] animate-hero-reveal"
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
          className="mt-4 text-lg text-[#5c5f77] animate-hero-reveal"
          style={{ animationDelay: "0.25s" }}
        >
          Are you looking to switch to a new career? Our app helps you navigate
          the job market, providing resources and job listings tailored to your
          new career path. Whether you’re seeking a fresh start or looking to
          leverage your existing skills in a new industry, we’re here to help
          you succeed.
        </p>
      </div>

      <div
        className="mx-auto mt-12 max-w-6xl rounded-[36px] bg-white p-8 animate-hero-reveal"
        style={{ animationDelay: "0.35s" }}
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ title, subtitle, description }, index) => (
            <article
              key={title}
              className="rounded-3xl bg-[#E4E6FF] p-6 text-left animate-hero-reveal"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
<h3 className="text-2xl font-bold bg-gradient-to-br from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
  {title}
</h3>


              <p className="mt-2 text-base font-semibold text-[#1f2140]">
                {subtitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#5d6075]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmpChoose;

import React from "react";

const highlights = [
  {
    title: "Seamless Employer Connections",
    description:
      "Apply for a job and start chatting with employers right away. Our in-app chat keeps you in the loop for questions, interviews, and building relationships—all in one place.",
  },
  {
    title: "Empowerment Through AI",
    description:
      "Showcase your strengths with smart profiles. Our AI helps craft standout summaries and taglines so employers remember you.",
  },
  {
    title: "Built for Your Success",
    description:
      "From education to employment, we provide the tools and guidance you need to take the first step toward your future.",
  },
];

const StudentChoose = () => {
  return (
    <section className="bg-[#EFF0FF] px-4 py-20" id="student-choose">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-[#9fa2c1]">
          Tagline
        </p>
      <h2 className="mt-3 text-4xl font-bold bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
  Why Choose Evolo AI
</h2>

        <p className="mt-4 text-lg text-[#5b5f77]">
          Are you switching careers or pursuing your first job? Evolo AI matches
          you with the right opportunities while guiding you every step of the
          way.
        </p>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-10 rounded-[36px] bg-white/90 p-8 shadow-[0_25px_60px_rgba(71,49,140,0.12)] md:flex-row md:items-center">
        <div className="flex-1">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute inset-0 " />
            <img
              src="/images/choose.png"
              alt="Evolo AI mobile mockup"
              className="relative z-10 w-full drop-shadow-[0_35px_60px_rgba(34,23,72,0.25)]"
            />
          </div>
        </div>

        <div className="flex-1 space-y-4">
          {highlights.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-2xl bg-[#f1efff] p-5 text-left shadow-[0_10px_20px_rgba(95,69,182,0.08)] hover:-translate-y-1 hover:shadow-[0_25px_35px_rgba(95,69,182,0.16)] transition"
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

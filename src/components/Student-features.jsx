import React from "react";

const features = [
  {
    title: "AI Profile Builder",
    description:
      "Our AI-powered Profile Builder helps you create a standout profile in just a few quick steps. Tailored to highlight your unique skills, your profile card makes job applications effortless, ensuring you leave a lasting impression on employers.",
    icon: "/images/MagicWand.svg",
  },
  {
    title: "Swipe to Apply",
    description:
      "Job applications just got a whole lot simpler! Experience the convenience of applying for jobs with a simple swipe to the right. Say goodbye to tedious application processes and hello to seamless opportunities at your fingertips.",
    icon: "/images/hand.svg",
  },
  {
    title: "Instant Employer Chats",
    description:
      "Take the stress out of job hunting! Whenever you apply for a position, our app automatically initiates a conversation with the employer. Get answers to your questions, express your enthusiasm, and make a great first impression—all within the app.",
    icon: "/images/message.png",
  },
  {
    title: "Empowered Schools",
    description:
      "Schools can now track the status of student applications in real-time. This visibility allows educators to provide tailored guidance, helping students identify the best job opportunities that align with their skills and aspirations.",
    icon: "/images/Student.png",
  },
];

const StudentFeatures = () => {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-5xl text-center">
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
          Key Features
        </h2>

        <p
          className="mt-4 text-lg text-[#5b5f77] animate-hero-reveal"
          style={{ animationDelay: "0.25s" }}
        >
          Discover how Evolo AI helps students connect with employers and find
          the right opportunities for success.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Left Column */}
        <div className="flex flex-col justify-between gap-8">
          {features.slice(0, 2).map((feature, index) => (
            <article
              key={feature.title}
              className="p-6 text-center flex flex-col items-center animate-hero-reveal"
              style={{ animationDelay: `${0.35 + index * 0.1}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ede8ff]">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-6 h-6 object-center object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#1f2240]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-[#5b5f77] max-w-xs">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        {/* Center Image */}
        <div
          className="flex items-center justify-center animate-hero-reveal"
          style={{ animationDelay: "0.45s" }}
        >
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 rounded-[40px] opacity-80" />
            <img
              src="/images/student-feature.png"
              alt="Evolo AI mobile preview"
              className="relative z-10 w-full drop-shadow-[0_45px_65px_rgba(15,13,56,0.3)] animate-hero-float"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between gap-8">
          {features.slice(2).map((feature, index) => (
            <article
              key={feature.title}
              className="p-6 text-center flex flex-col items-center animate-hero-reveal"
              style={{ animationDelay: `${0.4 + (index + 2) * 0.1}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ede8ff]">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-6 h-6 object-center object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#1f2240]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-[#5b5f77] max-w-xs">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentFeatures;

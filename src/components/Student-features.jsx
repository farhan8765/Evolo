import React from "react";

const features = [
  {
    title: "AI Profile Builder",
    description:
      "Craft a standout profile in a few guided steps. Our AI highlights your strengths so employers notice you faster.",
    icon: "/images/MagicWand.svg",
  },
  {
    title: "Swipe to Apply",
    description:
      "Applying is as easy as a swipe. Browse roles, favorite the ones you love, and send an application instantly.",
    icon: "/images/hand.svg",
  },
  {
    title: "Instant Employer Chats",
    description:
      "Jump into conversations the moment you apply. Ask questions, schedule interviews, and stay in the loop effortlessly.",
    icon: "/images/message.png",
  },
  {
    title: "Empowered Schools",
    description:
      "Schools track student progress in real time, offering tailored support that leads to better job matches.",
    icon: "/images/Student.png",
  },
];

const StudentFeatures = () => {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-[#9fa2c1]">
          Tagline
        </p>
        <h2 className="mt-3 text-4xl font-bold bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
          Key Features
        </h2>

        <p className="mt-4 text-lg text-[#5b5f77]">
          Discover how Evolo AI helps students connect with employers and find
          the right opportunities for success.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Left Column */}
        <div className="flex flex-col justify-between gap-8">
          {features.slice(0, 2).map((feature) => (
            <article
              key={feature.title}
              className="p-6 text-center flex flex-col items-center"
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
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 rounded-[40px] opacity-80" />
            <img
              src="/images/student-feature.png"
              alt="Evolo AI mobile preview"
              className="relative z-10 w-full drop-shadow-[0_45px_65px_rgba(15,13,56,0.3)]"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between gap-8">
          {features.slice(2).map((feature) => (
            <article
              key={feature.title}
              className="p-6 text-center flex flex-col items-center"
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

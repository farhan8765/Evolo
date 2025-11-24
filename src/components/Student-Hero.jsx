import React from "react";

const StudentHero = () => {
  const storeBadges = [
    {
      alt: "Download on the App Store",
      src: "/images/Apple logo.png",
    },
    {
      alt: "Get it on Google Play",
      src: "/images/Google logo.png",
    },
  ];

  return (
    <section className="relative overflow-hidden text-white pt-8 md:pt-12">
      <div className="absolute -right-24 top-0 h-[520px] w-[520px] rounded-full bg-gradient-to-br animate-hero-gradient bg-[length:200%_200%]" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-8 md:gap-12 px-4 sm:px-6 py-4 md:py-20 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          {/* <p
            className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7f84a9] animate-hero-reveal"
            style={{ animationDelay: "0.05s" }}
          >
            Tagline
          </p> */}
          <h1
            className="mt-3 md:mt-4 text-3xl sm:text-4xl font-bold leading-tight text-white md:text-5xl lg:text-5xl animate-hero-reveal"
            style={{ animationDelay: "0.15s" }}
          >
            <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
              Welcome to the future of
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
              Job Searches
            </span>
          </h1>
          <p
            className="mt-4 md:mt-6 text-sm sm:text-base text-[#5A666E] md:text-lg animate-hero-reveal"
            style={{ animationDelay: "0.25s" }}
          >
            Our app connects students from Adult Schools, Community Colleges,
            and Job Centers with the perfect jobs. Swipe, connect with
            employers, and boost your chances of landing a successful
            career—all in one place.
          </p>
          <div
            className="mt-6 md:mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4 lg:justify-start animate-hero-reveal"
            style={{ animationDelay: "0.35s" }}
          >
            {storeBadges.map((badge) => (
              <img
                key={badge.alt}
                src={badge.src}
                alt={badge.alt}
                className="h-16 sm:h-20 w-auto rounded-[18px] p-2 transition-transform duration-500 hover:-translate-y-1"
              />
            ))}
          </div>
        </div>

        <div className="relative flex-1 w-full animate-hero-reveal" style={{ animationDelay: "0.45s" }}>
          <div className="absolute inset-0 -right-8 top-6 h-full w-full rounded-full blur-2xl animate-hero-gradient bg-[length:200%_200%]" />
          <img
            src="/images/student-hero.png"
            alt="Student mobile mockups"
            className="relative z-10 mx-auto w-full max-w-md md:max-w-xl animate-hero-float"
          />
        </div>
      </div>
    </section>
  );
};

export default StudentHero;
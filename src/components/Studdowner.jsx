import React from "react";

const appStores = [
  { alt: "Download on the App Store", src: "/images/Apple logo.png" },
  { alt: "Get it on Google Play", src: "/images/Google logo.png" },
];

const Studdowner = () => {
  return (
    <section className="bg-[#EFF0FF] px-4 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
        <div className="flex-1 text-center lg:text-left">
          <p
            className="text-xs uppercase tracking-[0.35em] text-[#827fad] animate-hero-reveal"
            style={{ animationDelay: "0.05s" }}
          >
            Tagline
          </p>
          <h2
            className="mt-4 text-5xl font-bold leading-tight text-[#1b1f3b] animate-hero-reveal"
            style={{ animationDelay: "0.15s" }}
          >
            <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
              Explore more about Evolo AI
            </span>
          </h2>
          <p
            className="mt-6 text-base text-[#4d5060] md:text-lg animate-hero-reveal"
            style={{ animationDelay: "0.25s" }}
          >
            Learn how Evolo AI streamlines your job search. Discover the ease of
            finding your dream job—just swipe, match, and succeed!
          </p>
          <div
            className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start animate-hero-reveal"
            style={{ animationDelay: "0.35s" }}
          >
            {appStores.map((store) => (
              <img
                key={store.alt}
                src={store.src}
                alt={store.alt}
                className="h-16 w-auto transition-transform duration-500 hover:-translate-y-1"
              />
            ))}
          </div>
        </div>

        <div
          className="relative flex-1 animate-hero-reveal"
          style={{ animationDelay: "0.45s" }}
        >
          <div className="absolute inset-0 -left-12 top-10 h-[360px] w-[360px] " />
          <img
            src="/images/Stud-downer.png"
            alt="Evolo app preview"
            className="relative z-10 mx-auto w-full max-w-xl animate-hero-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Studdowner;

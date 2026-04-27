import React from "react";
import { useNavigate } from "react-router-dom";

const CounselorHero = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="relative overflow-hidden bg-[white] text-white pt-12 pb-10 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-16">
      <div className="absolute -right-28 top-12 h-[520px] w-[520px] " />
      <div className="absolute -left-24 bottom-0 h-[360px] w-[360px]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 sm:gap-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <h1
            className="mt-2 h-auto w-full max-w-[567px] font-['Raleway'] text-[32px] font-bold leading-[100%] tracking-[0.5%] text-white animate-hero-reveal sm:text-[40px] md:h-[144px] md:text-[48px]"
            style={{ animationDelay: "0.15s" }}
          >
            <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent inline sm:whitespace-nowrap">
              Empowering Counselors
            </span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
                with Smarter Documentation
            </span>
          </h1>

          <p
            className="mt-4 text-sm text-[#5A666E] sm:mt-6 sm:text-base md:text-lg animate-hero-reveal max-w-2xl mx-auto lg:mx-0 font-[Raleway]"
            style={{ animationDelay: "0.25s" }}
          >
            Less paperwork. More time for students. Every session is compliant
            and billable.
          </p>

          <button
            onClick={handleContactClick}
            className="mt-6 inline-flex items-center rounded-2xl bg-[#5e2bff] px-6 py-2.5 text-sm font-semibold text-white transition sm:mt-8 sm:px-8 sm:py-3 sm:text-base hover:bg-[#4e1fd9] animate-hero-reveal"
            style={{ animationDelay: "0.35s" }}
          >
            Contact Us
          </button>
        </div>

        <div
          className="relative mt-6 flex flex-1 items-center justify-center animate-hero-reveal lg:mt-0"
          style={{ animationDelay: "0.45s" }}
        >
          <div className="absolute h-[260px] w-[260px] rounded-full bg-[#5E2BFF] shadow-[0_0_0_8px_rgba(94,43,255,0.25)] sm:h-[300px] sm:w-[300px] lg:h-[340px] lg:w-[340px]" />
          <img
            src="/images/report.png"
            alt="Counselor dashboard preview"
            width={576}
            height={800}
            className="relative z-10 mx-auto -translate-y-2 w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[360px] animate-hero-float"
          />
        </div>
      </div>
    </section>
  );
};

export default CounselorHero;

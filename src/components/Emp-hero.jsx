import React from "react";

const EmpHero = () => {
  return (
    <section className="relative overflow-hidden bg-[white] text-white pt-12 pb-10 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-16">
      <div className="absolute -right-28 top-12 h-[520px] w-[520px] " />
      <div className="absolute -left-24 bottom-0 h-[360px] w-[360px]" />
      
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 sm:gap-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <h1
            className="mt-2 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl animate-hero-reveal"
            style={{ animationDelay: "0.15s" }}
          >
            <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent inline sm:whitespace-nowrap">
              Your future workforce is 
            </span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
               at your fingertips
            </span>
          </h1>
          
          <p
            className="mt-4 text-sm text-[#5A666E] sm:mt-6 sm:text-base md:text-lg animate-hero-reveal max-w-2xl mx-auto lg:mx-0"
            style={{ animationDelay: "0.25s" }}
          >
            We work directly with Adult and Technical Schools to help you recruit
            their best and brightest candidates faster than ever.
          </p>
          
          <button
            className="mt-6 inline-flex items-center rounded-2xl bg-[#5e2bff] px-6 py-2.5 text-sm font-semibold text-white transition sm:mt-8 sm:px-8 sm:py-3 sm:text-base hover:bg-[#4e1fd9] animate-hero-reveal"
            style={{ animationDelay: "0.35s" }}
          >
            Contact Us
          </button>
        </div>
        
        <div
          className="relative flex-1 animate-hero-reveal mt-6 lg:mt-0"
          style={{ animationDelay: "0.45s" }}
        >
          <div className="absolute inset-0 right-2 top-6 h-full w-full " />
          <img
            src="/images/Emp-hero.png"
            alt="Employer dashboard preview"
            className="relative z-10 mx-auto w-full max-w-sm sm:max-w-md lg:max-w-xl animate-hero-float"
          />
        </div>
      </div>
    </section>
  );
};

export default EmpHero;
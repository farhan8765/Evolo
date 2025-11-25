import React from "react";

const Institutehero = () => {
  return (
    <section className="relative overflow-hidden bg-[white] text-white pt-8 pb-16">
      <div className="absolute -right-28 top-12 h-[520px] w-[520px] " />
      <div className="absolute -left-24 bottom-0 h-[360px] w-[360px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          {/* <p className="text-xs uppercase tracking-[0.35em] text-[#182126]">
            Tagline
          </p> */}
      <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl ">
  <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent whitespace-nowrap">
    The Future of Adult 
  </span>
  <br />
  <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
  Education
  </span>
</h1>

          <p className="mt-6 text-base text-[#5A666E] md:text-lg">
         We help improve student outcomes and help you track and showcase your institution’s achievements, connect with employers and improve operations.
          </p>
          <button className="mt-8 inline-flex items-center rounded-2xl bg-[#5e2bff] px-8 py-3 text-base font-semibold text-white  transition ">
            Contact Us
          </button>
        </div>

        <div className="relative flex-1">
          <div className="absolute inset-0 right-2 top-6 h-full w-full " />
          <img
            src="/images/institute.png"
            alt="Employer dashboard preview"
            className="relative z-10 mx-auto w-full max-w-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Institutehero;

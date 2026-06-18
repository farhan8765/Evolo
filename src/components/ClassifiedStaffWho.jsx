import React from "react";

const ClassifiedStaffWho = () => {
  return (
    <section className="bg-[#EEF0FF] px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start lg:gap-20">
        <h2 className="m-0 max-w-[520px] bg-gradient-to-r from-[#050519] via-[#080632] to-[#21148F] bg-clip-text font-['Raleway'] text-[38px] font-bold leading-[1.02] tracking-[0.5%] text-transparent sm:text-[46px] lg:text-[52px]">
          Who Are
          <br />
          Classified Staff?
        </h2>

        <p className="m-0 max-w-[700px] font-['Raleway'] text-[17px] font-medium leading-8 text-[#697180] sm:text-[19px] sm:leading-9">
          First on scene. The app lets them report accurately by voice or text,
          no forms, no clinical jargon, in minutes.
        </p>
      </div>
    </section>
  );
};

export default ClassifiedStaffWho;

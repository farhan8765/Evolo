import React from "react";

const Aboutdriving = () => {
  return (
    <section className="flex flex-col px-16 py-12 md:flex-row items-start justify-between gap-10 md:gap-16 px-6 md:px-12 py-12 bg-white font-[Raleway]">
      {/* Left Gradient Heading */}
      <div className="md:w-1/2">
        <h2 className="text-3xl md:pl-4 md:text-5xl font-bold leading-tight text-left">
          {/* Mobile: single line, Desktop: separate lines */}
          <span className="md:hidden bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent font-[Raleway]">
            Driving career success and institutional excellence
          </span>
          
          {/* Desktop only: separate lines */}
          <span className="hidden md:block">
            <span className="block bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
              Driving career
            </span>
            <span className="block bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
              success and
            </span>
            <span className="block bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
              institutional
            </span>
            <span className="block bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
              excellence
            </span>
          </span>
        </h2>
      </div>

      {/* Right Paragraph Section */}
      <div className="md:w-1/2 text-gray-700 text-base md:text-lg space-y-5">
        <p>
          For educational institutions, AdultEd Pro offers powerful tools to
          track, measure, and report on key performance indicators required by
          state mandates.
        </p>

        <p>
          By automating data collection and analysis, we enable administrators
          to make data-driven decisions that optimize resource allocation,
          improve program effectiveness, and demonstrate compliance with
          regulatory requirements.
        </p>

        <p>
          With AdultEd Pro, adult education programs can confidently deliver on
          their promise of transforming lives through education while meeting
          and exceeding institutional goals.
        </p>
      </div>
    </section>
  );
};

export default Aboutdriving;
import React from "react";

const EmpTransforming = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16 px-6 md:px-12 py-12 bg-white">
      {/* Left Text Section */}
      <div className="md:w-1/2">
       <h2 className="text-[48px] md:text-[52px] text-left pl-20 pt-16 font-bold leading-tight">
  <span className="block bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
    Transforming
  </span>
  <span className="block bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
    AdultEd with
  </span>
  <span className="block bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
    Mobile-First
  </span>
  <span className="block bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
    Recruitment
  </span>
</h2>

      </div>

      {/* Right Bullet Points */}
      <div className="md:w-1/2 text-gray-700 pr-20 text-base md:text-lg">
        <ul className="space-y-4 list-disc pl-5">
          <li>
            <span className="font-semibold text-[#0D0D21]">
              Exclusive access to motivated candidates
            </span>{" "}
            – by working directly with the schools, we onboard more students
            from coveted programs than anyone.
          </li>
          <li>
            <span className="font-semibold text-[#0D0D21]">
              Make the most of Events
            </span>{" "}
            – our app allows you to initiate and attend events at schools,
            making you an established presence at Adult Schools.
          </li>
          <li>
            <span className="font-semibold text-[#0D0D21]">
              Go from sourcing to onboarding quickly
            </span>{" "}
            – our research shows engaged candidates are much more likely to
            complete required applications.
          </li>
          <li>
            <span className="font-semibold text-[#0D0D21]">
              Quick Start and concierge onboarding
            </span>{" "}
            – not another system to manage, we help you get up and running
            quickly with dedicated support and integrations.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default EmpTransforming;

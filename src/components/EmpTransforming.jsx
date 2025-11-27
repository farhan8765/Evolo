import React from "react";

const EmpTransforming = () => {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-12">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 lg:gap-16">
        {/* Left Text Section */}
        <div
  className="w-full md:w-1/2 text-center md:text-left animate-hero-reveal"
  style={{ animationDelay: "0.05s" }}
>
  <h2 className="lg:pt-10 lg:pl-12 sm:pl-4 sm:pt-4 text-3xl sm:text-4xl lg:text-[48px] font-bold leading-normal">
    {/* Mobile: Single line */}
    <span className="block md:hidden bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
      Transforming AdultEd with Mobile-First Recruitment
    </span>
    
    {/* Desktop: Multiple lines */}
    <span className="hidden md:block bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent mb-3">
      Transforming
    </span>
    <span className="hidden md:block bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent mb-3">
      AdultEd with
    </span>
    <span className="hidden md:block bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent mb-3">
      Mobile-First
    </span>
    <span className="hidden md:block bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
      Recruitment
    </span>
  </h2>
</div>

        {/* Right Bullet Points */}
        <div className="w-full md:w-1/2 text-gray-700 text-base md:text-lg md:pr-10 lg:pr-20">
          <ul className="space-y-4 list-disc pl-5 text-left">
            {[
              "Exclusive access to motivated candidates – by working directly with the schools, we onboard more students from coveted programs than anyone.",
              "Make the most of Events – our app allows you to initiate and attend events at schools, making you an established presence at Adult Schools.",
              "Go from sourcing to onboarding quickly – our research shows engaged candidates are much more likely to complete required applications.",
              "Quick Start and concierge onboarding – not another system to manage, we help you get up and running quickly with dedicated support and integrations.",
            ].map((text, index) => {
              const [highlight, rest] = text.split(" – ");
              return (
                <li
                  key={highlight}
                  className="animate-hero-reveal"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <span className="font-semibold text-[#0D0D21]">
                    {highlight}
                  </span>{" "}
                  – {rest}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EmpTransforming;

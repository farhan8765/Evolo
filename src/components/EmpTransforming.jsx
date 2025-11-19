import React from "react";

const EmpTransforming = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16 px-6 md:px-12 py-12 bg-white">
      {/* Left Text Section */}
      <div className="md:w-1/2 animate-hero-reveal" style={{ animationDelay: "0.05s" }}>
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
    </section>
  );
};

export default EmpTransforming;

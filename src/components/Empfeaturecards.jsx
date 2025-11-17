import React, { useState } from "react";

const PLAN_DATA = {
  monthly: [
    {
      name: "Basic",
      description:
        "Gallery-Level Art Promotion Comprehensive analysis, promotion, and engagement.",
      price: 49,
      accent: "from-[#5437FF] to-[#7B5CFF]",
      border: "border-transparent",
      badge: null,
      features: [
        { label: "300 monthly queries", available: true },
        { label: "300 monthly queries", available: true },
        { label: "300 monthly queries", available: true },
        { label: "300 monthly queries", available: false },
        { label: "300 monthly queries", available: false },
        { label: "300 monthly queries", available: false },
      ],
    },
    {
      name: "Premium",
      description:
        "Gallery-Level Art Promotion Comprehensive analysis, promotion, and engagement.",
      price: 99,
      accent: "from-[#5437FF] to-[#7B5CFF]",
      border: "border-transparent",
      badge: null,
      features: [
        { label: "300 monthly queries", available: true },
        { label: "300 monthly queries", available: true },
        { label: "300 monthly queries", available: true },
        { label: "300 monthly queries", available: true },
        { label: "300 monthly queries", available: true },
        { label: "300 monthly queries", available: true },
      ],
    },
    {
      name: "Enterprise",
      description:
        "Gallery-Level Art Promotion Comprehensive analysis, promotion, and engagement.",
      price: 599,
      accent: "from-[#FF8A00] to-[#FF5F1F]",
      border: "border-[#FF8A00]",
      badge: "Best Value",
      features: [
        { label: "10,000 monthly queries", available: true },
        { label: "Artwork analysis 100", available: true },
        { label: "3 days free trial", available: true },
        { label: "Ad-free experience", available: true },
        { label: "Premium support", available: true },
        { label: "Premium support", available: true },
      ],
    },
  ],
  yearly: [
    {
      name: "Basic",
      description:
        "Gallery-Level Art Promotion Comprehensive analysis, promotion, and engagement.",
      price: 39,
      accent: "from-[#5437FF] to-[#7B5CFF]",
      border: "border-transparent",
      badge: null,
      features: [
        { label: "300 monthly queries", available: true },
        { label: "300 monthly queries", available: true },
        { label: "300 monthly queries", available: true },
        { label: "300 monthly queries", available: false },
        { label: "300 monthly queries", available: false },
        { label: "300 monthly queries", available: false },
      ],
    },
    {
      name: "Premium",
      description:
        "Gallery-Level Art Promotion Comprehensive analysis, promotion, and engagement.",
      price: 79,
      accent: "from-[#5437FF] to-[#7B5CFF]",
      border: "border-transparent",
      badge: null,
      features: [
        { label: "300 monthly queries", available: true },
        { label: "300 monthly queries", available: true },
        { label: "300 monthly queries", available: true },
        { label: "300 monthly queries", available: true },
        { label: "300 monthly queries", available: true },
        { label: "300 monthly queries", available: true },
      ],
    },
    {
      name: "Enterprise",
      description:
        "Gallery-Level Art Promotion Comprehensive analysis, promotion, and engagement.",
      price: 549,
      accent: "from-[#FF8A00] to-[#FF5F1F]",
      border: "border-[#FF8A00]",
      badge: "Best Value",
      features: [
        { label: "10,000 monthly queries", available: true },
        { label: "Artwork analysis 100", available: true },
        { label: "3 days free trial", available: true },
        { label: "Ad-free experience", available: true },
        { label: "Premium support", available: true },
        { label: "Premium support", available: true },
      ],
    },
  ],
};

const TickIcon = ({ available }) => (
  <span
    className={`flex h-6 w-6 items-center justify-center rounded-full border ${
      available
        ? "border-[#3ED598] text-[#26C281]"
        : "border-[#FF6B6B] text-[#FF5C5C]"
    }`}
  >
    {available ? (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-3.5 w-3.5"
      >
        <path d="M5 10l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ) : (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-3.5 w-3.5"
      >
        <path d="M6 6l8 8M14 6l-8 8" strokeLinecap="round" />
      </svg>
    )}
  </span>
);

const EmpFeatureCards = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const plans = PLAN_DATA[billingCycle];

  return (
    <section className="bg-[#f4f1ff] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#2b1bdd]">Features Plan</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-[#6f6f7b]">
            We have a plan for every type of business. Try each plan for free, and
            see the benefits in building a brand on campus.
          </p>
        </div>

        <div className="mx-auto mt-10 flex w-fit items-center rounded-full bg-white p-1 shadow-lg">
          {["monthly", "yearly"].map((cycle) => {
            const isActive = billingCycle === cycle;
            return (
              <button
                key={cycle}
                type="button"
                onClick={() => setBillingCycle(cycle)}
                className={`relative flex min-w-[140px] items-center justify-center rounded-full px-6 py-2 text-sm font-semibold transition ${
                  isActive ? "text-white" : "text-[#7a7f94]"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#5138ee] to-[#7f52ff] shadow-[0_4px_12px_rgba(90,69,255,0.35)]" />
                )}
                <span className="relative capitalize">
                  {cycle === "monthly" ? "Month" : "Year"}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={`${plan.name}-${billingCycle}`}
              className={`rounded-3xl border bg-white p-8 shadow-[0_20px_40px_rgba(78,66,171,0.12)] ${
                idx === 2 ? "lg:-mt-6" : ""
              } ${plan.border}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p
                    className={`text-3xl font-extrabold ${
                      plan.name === "Enterprise"
                        ? "text-[#ff6a00]"
                        : "text-[#2f2f3a]"
                    }`}
                  >
                    {plan.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#7a7f94]">
                    {plan.description}
                  </p>
                </div>
                {plan.badge && (
                  <span className="rounded-full bg-[#ffefe2] px-3 py-1 text-xs font-semibold text-[#ff6a00]">
                    {plan.badge}
                  </span>
                )}
              </div>

              <div className="mt-6 border-t border-[#e5e1f9] pt-6">
                <div className="flex items-baseline gap-1 text-[#2f2f3a]">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-base font-medium text-[#9a9eb8]">
                    per {billingCycle === "monthly" ? "month" : "month (billed yearly)"}
                  </span>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, featureIdx) => (
                  <li
                    key={`${plan.name}-${featureIdx}`}
                    className="flex items-center gap-3 text-sm font-medium text-[#4a4a55]"
                  >
                    <TickIcon available={feature.available} />
                    <span
                      className={
                        feature.available ? "" : "text-[#9a9eb8] line-through"
                      }
                    >
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`mt-8 w-full rounded-2xl bg-gradient-to-r ${plan.accent} py-3 text-center text-sm font-semibold text-white shadow-[0_12px_30px_rgba(93,62,255,0.25)] transition hover:opacity-95`}
              >
                Start trial
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmpFeatureCards;

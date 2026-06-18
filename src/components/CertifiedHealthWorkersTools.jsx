import React from "react";

const toolCards = [
  {
    title: "AI-Powered Incident Bot",
    description:
      "Describe what happened by voice or text. AI builds a complete SOAP report (Subjective, Objective, Assessment, Plan) including date, time, location, and participants.",
  },
  {
    title: "Coaching Bot — Same Chat Session",
    description:
      "After an incident, the Coaching Bot continues in the same session, guiding CHWs through BIRP documentation (Behavior, Intervention, Response, Plan) and auto-selecting the correct CYBHI billing code. Details shared at any point are captured; there is no need to restart.",
  },
  {
    title: "BIRP Coaching Reports with MediCal Billing",
    description:
      "Coaching reports are structured in BIRP format with MediCal billing codes auto-generated per session length and service type.",
  },
  {
    title: "Smart Draft Management",
    description:
      "Coaching drafts auto-generated for every student involved, pre-populated when sufficient detail is provided, or left blank for completion later. No data lost.",
  },
  {
    title: "Revision & Resubmission",
    description:
      "Revision requests route back with Admin notes. Update only the flagged fields and resubmit minimizes turnaround without compromising accuracy.",
  },
  {
    title: "Biometric & Multi-Layer Security",
    description:
      "Log in with email/password plus one-time admin-issued security key plus personal security key. iOS: Face ID. Android: Touch ID. Keys are updatable via Settings.",
  },
];

const CertifiedHealthWorkersTools = () => {
  return (
    <section className=" px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-5xl text-center">
          <p className="m-0 font-['Raleway'] text-[15px] font-semibold leading-6 text-[#14252B]">
            Tagline
          </p>

          <h2 className="mt-4 bg-gradient-to-r from-[#080619] via-[#120D69] to-[#2B1BDD] bg-clip-text font-['Raleway'] text-[34px] font-bold leading-[1.05] tracking-[0.5%] text-transparent sm:text-[44px] lg:text-[52px]">
            Everything From Reporting to coaching is
            <br className="hidden lg:block" />
            handled in One Session
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] font-['Raleway'] text-[17px] font-medium leading-7 text-[#62747C] sm:text-[18px]">
            Lorem ipsum dolor sit amet consectetur. Tristique gravida posuere
            neque cras.
          </p>
        </div>

        <div className="mt-11 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {toolCards.map((card) => (
            <article
              key={card.title}
              className="min-h-[178px] rounded-[12px] border border-[#DEE2F4] bg-[#EEF0FF] px-5 py-6 shadow-[0_10px_22px_rgba(255,255,255,0.18)]"
            >
              <h3 className="m-0 font-['Raleway'] text-[21px] font-bold leading-7 text-[#20242C]">
                {card.title}
              </h3>

              <p className="mt-3 font-['Raleway'] text-[16px] font-medium leading-[26px] text-[#68707D]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertifiedHealthWorkersTools;

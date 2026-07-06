import React from "react";

const toolCards = [
  {
    title: "AI-Powered Incident Bot",
    description:
      "Describe what happened by voice or text. AI structures the report automatically in SOAP format (Subjective, Objective, Assessment, Plan), including date, time, location, and participants.",
  },
  {
    title: "Speech-to-Text with PII Redaction",
    description:
      "Audio transcribed via Whisper (self-hosted, private cloud) and automatically redacted of personally identifiable information before AI processing, private and compliant.",
  },
  {
    title: "Student Participant Selection",
    description:
      "Select students involved directly from the school roster within the Incident Bot, linked to the report automatically, and no duplicate entries.",
  },
  {
    title: "Single-Action Submission",
    description:
      "Review the AI-generated report, make edits, and submit to Admin in one tap. Reports cannot be submitted until all mandatory fields are complete.",
  },
  {
    title: "Revision Request Workflow",
    description:
      "Revision requests route back with Admin notes. Update only the flagged fields and resubmit, fast and guided.",
  },
  {
    title: "Biometric & Multi-Layer Security",
    description:
      "Log in with email/password plus one-time admin-issued security key plus personal security key. iOS: Face ID. Android: Touch ID. Keys are updatable via Settings.",
  },
];

const ClassifiedStaffTools = () => {
  return (
    <section className=" px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-5xl text-center">
          {/* <p className="m-0 font-['Raleway'] text-[15px] font-semibold leading-6 text-[#14252B]">
            Tagline
          </p> */}

          <h2 className="mt-4 bg-gradient-to-r from-[#080619] via-[#120D69] to-[#2B1BDD] bg-clip-text font-['Raleway'] text-[34px] font-bold leading-[1.05] tracking-[0.5%] text-transparent sm:text-[44px] lg:text-[52px]">
            Reporting Tools Built for Non-Clinical Staff
          </h2>

          {/* <p className="mx-auto mt-6 max-w-[720px] font-['Raleway'] text-[17px] font-medium leading-7 text-[#62747C] sm:text-[18px]">
            Lorem ipsum dolor sit amet consectetur. Tristique gravida posuere
            neque cras.
          </p> */}
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

export default ClassifiedStaffTools;

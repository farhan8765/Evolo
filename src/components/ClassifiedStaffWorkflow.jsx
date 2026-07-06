import React from "react";

const workflowSteps = [
  {
    title: "Sign In Securely",
    description:
      "Email, password & personal security key. iOS: Face ID. Android: Touch ID.",
  },
  {
    title: "Open the Incident Bot",
    description:
      "Describe the event by voice or text, and AI structures it in SOAP format, including date, time, location, and participants.",
  },
  {
    title: "Select Participants",
    description:
      "Choose students from the school roster. Details captured throughout, no need to restart.",
  },
  {
    title: "Review the Report",
    description:
      "Review the AI-generated SOAP report and make any necessary edits.",
  },
  {
    title: "Submit to Admin",
    description:
      "Cannot submit until all mandatory fields are complete. One tap to submit.",
  },
  {
    title: "Act on Revisions",
    description:
      "Revision requests route back with Admin notes. Update flagged fields and resubmit.",
  },
];

const ClassifiedStaffWorkflow = () => {
  return (
    <section className="bg-[#EEF0FF] px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-5xl text-center">
          {/* <p className="m-0 font-['Raleway'] text-[15px] font-semibold leading-6 text-[#1D202B]">
            Tagline
          </p> */}

          <h2 className="mt-4 bg-gradient-to-r from-[#050519] via-[#120D69] to-[#2B1BDD] bg-clip-text font-['Raleway'] text-[34px] font-bold leading-[1.06] tracking-[0.5%] text-transparent sm:text-[46px] lg:text-[54px]">
            Describe It. Review It. Submit It. Done.
          </h2>

          <p className="mx-auto mt-6 max-w-[620px] font-['Raleway'] text-[17px] font-medium leading-7 text-[#68717D] sm:text-[18px]">
            Simple, guided, and done in minutes.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[22px] bg-white px-5 py-8 shadow-[0_18px_34px_rgba(36,44,79,0.14)] sm:px-8 sm:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12 lg:px-16">
          <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[560px]">
            <img
              src="/images/stf2.png"
              alt="Classified staff dashboard workflow preview"
              width={384}
              height={640}
              className="w-[220px] drop-shadow-[0_18px_28px_rgba(0,0,0,0.22)] sm:w-[280px] lg:w-[340px]"
            />
          </div>

          <div className="grid gap-4">
            {workflowSteps.map((step) => (
              <article
                key={step.title}
                className="rounded-[10px] bg-[#E3E6FF] px-5 py-4 shadow-[0_4px_10px_rgba(35,37,68,0.18)]"
              >
                <h3 className="m-0 font-['Raleway'] text-[21px] font-bold leading-7 text-[#20242C]">
                  {step.title}
                </h3>
                <p className="mt-3 font-['Raleway'] text-[15px] font-medium leading-6 text-[#69717E]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassifiedStaffWorkflow;

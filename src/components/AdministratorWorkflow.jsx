import React from "react";

const workflowSteps = [
  {
    title: "Sign In Securely",
    description:
      "Email, password & personal security key. Biometric login after the first verified session.",
  },
  {
    title: "Review Submissions",
    description:
      "All incoming incident, coaching, and counseling reports appear in the Admin queue.",
  },
  {
    title: "Assign Sessions",
    description:
      "Assign follow-up coaching or counseling to the right staff member from the incident record.",
  },
  {
    title: "Approve or Request Revisions",
    description:
      "Approve reports or send revision requests back with specific notes.",
  },
  {
    title: "Lock & Finalize",
    description:
      "Approved reports are locked and immutable. Billing codes confirmed.",
  },
  {
    title: "MediCal Ready",
    description:
      "Finalized records ready for MediCal submission, with zero manual re-entry.",
  },
];

const AdministratorWorkflow = () => {
  return (
    <section className="bg-[#EEF0FF] px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-5xl text-center">
          {/* <p className="m-0 font-['Raleway'] text-[15px] font-semibold leading-6 text-[#1D202B]">
            Tagline
          </p> */}

          <h2 className="mt-4 pb-2 bg-gradient-to-r from-[#050519] via-[#120D69] to-[#2B1BDD] bg-clip-text font-['Raleway'] text-[34px] font-bold leading-[1.06] tracking-[0.5%] text-transparent sm:text-[46px] lg:text-[54px]">
            How Administrators Keep the Entire
            <br className="hidden lg:block" />
            App Running Smoothly
          </h2>

          <p className="mx-auto mt-6 max-w-[620px] font-['Raleway'] text-[17px] font-medium leading-7 text-[#68717D] sm:text-[18px]">
            Every submission is accountable. Every record is compliant.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[22px] bg-white px-5 py-8 shadow-[0_18px_34px_rgba(36,44,79,0.14)] sm:px-8 sm:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12 lg:px-16">
          <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[560px]">
            <img
              src="/images/adm1.png"
              alt="Administrator app dashboard preview"
              width={352}
              height={558}
              className="w-[230px] drop-shadow-[0_18px_28px_rgba(0,0,0,0.22)] sm:w-[290px] lg:w-[350px]"
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

export default AdministratorWorkflow;

import React from "react";

const oversightCards = [
  {
    title: "Review & Approve / Reject Reports",
    description:
      "Review all incident, coaching, and counseling submissions. Approve, reject, or send revision requests with specific notes, routed back instantly to the originating staff member.",
  },
  {
    title: "Assign Coaching & Counseling Sessions",
    description:
      "Assign coaching or counseling sessions to the appropriate CHW or Counselor directly from an incident record.",
  },
  {
    title: "User Management & Security Keys",
    description:
      "Manage users, upload student lists, and issue one-time admin-issued security keys for new staff. Security keys can be updated anytime through Settings.",
  },
  {
    title: "Full Audit Log Access",
    description:
      "Every action, submission, approval, rejection, revision, and resubmission is logged with timestamps and user attribution. Always audit-ready for compliance reviews.",
  },
  {
    title: "MediCal Billing Oversight",
    description:
      "Upon approval, reports are locked and finalized. Billing codes confirmed and ready for MediCal submission, zero manual re-entry.",
  },
  {
    title: "Biometric & Multi-Layer Security",
    description:
      "Log in with email/password plus one-time admin-issued security key plus personal security key. iOS: Face ID. Android: Touch ID. Keys are updatable via Settings.",
  },
];

const AdministratorOversight = () => {
  return (
    <section className=" px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          {/* <p className="m-0 font-['Raleway'] text-[15px] font-semibold leading-6 text-[#14252B]">
            Tagline
          </p> */}

          <h2 className="mt-4 bg-gradient-to-r from-[#080619] via-[#120D69] to-[#2B1BDD] bg-clip-text font-['Raleway'] text-[34px] font-bold leading-[1.05] tracking-[0.5%] text-transparent sm:text-[44px] lg:text-[52px]">
            Full Oversight. No Gaps. Every 
            <br className="hidden md:block" />
            Report Accounted For.
          </h2>

          {/* <p className="mx-auto mt-6 max-w-[720px] font-['Raleway'] text-[17px] font-medium leading-7 text-[#62747C] sm:text-[18px]">
            Lorem ipsum dolor sit amet consectetur. Tristique gravida posuere
            neque cras.
          </p> */}
        </div>

        <div className="mt-11 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {oversightCards.map((card) => (
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

export default AdministratorOversight;

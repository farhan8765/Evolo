const counselorSteps = [
  {
    title: "Sign In Securely",
    description:
      "Email, password & personal security key. iOS: Face ID. Android: Touch ID.",
  },
  {
    title: "View the Incident",
    description:
      "See incidents assigned by Admin or self-created, all context pre-loaded.",
  },
  {
    title: "Start the Counseling Bot",
    description:
      "Continues in the same chat session. Details shared at any point are captured - no need to restart.",
  },
  {
    title: "Generate BIRP Note",
    description:
      "Describe by voice or text, AI builds the full BIRP note and auto-selects the correct CYBHI billing code.",
  },
  {
    title: "Review & Submit",
    description:
      "Check the report, make edits. Cannot submit until all mandatory fields are complete.",
  },
  {
    title: "Admin Approval",
    description:
      "Admin approves, report locked, billing code confirmed, ready for MediCal.",
  },
];

const CounselorFrom = () => {
  return (
    <section className="bg-[#EFF0FF] px-4 py-10 md:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h2 className="mt-2 m-0 w-full max-w-[900px] bg-[linear-gradient(90deg,_#000000_0%,_#2B1BDD_100%)] bg-clip-text font-['Raleway'] text-[28px] font-bold leading-[100%] tracking-[0.5%] text-transparent sm:text-[36px] md:text-[48px]">
            From Incident to Approved Session Note - Step by Step
          </h2>
          <p className="mt-4 m-0 w-full max-w-[646px] font-['Raleway'] text-[16px] font-normal leading-[24px] tracking-[0.5%] text-[#6E7284] sm:text-[17px] sm:leading-[26px] md:text-[18px] md:leading-[28px]">
            From incident to Admin-approved, MediCal-billable documentation.
          </p>
        </div>

        <div
          className="mt-8 grid items-center gap-6 rounded-[16px] bg-[#F8F9FF] p-4 md:grid-cols-[0.8fr_1.2fr] md:p-6"
          style={{
            boxShadow:
              "0 12px 24px -8px rgba(0,0,0,0.18), 10px 0 18px -14px rgba(0,0,0,0.22), -10px 0 18px -14px rgba(0,0,0,0.22)",
          }}
        >
          <div className="flex justify-center">
            <img
              src="/images/incident.png"
              alt="Counselor workflow app screen"
              className="h-auto w-full max-w-[320px] object-contain md:max-w-[360px]"
            />
          </div>

          <div className="space-y-3">
            {counselorSteps.map((step) => (
              <article
                key={step.title}
                className="rounded-[10px] border border-[#DADDF0] bg-[#E4E6FF] px-4 py-3 shadow-[0_2px_6px_rgba(0,0,0,0.08)]"
              >
                <h3 className="m-0 w-full max-w-[600px] font-['Raleway'] text-[20px] font-bold leading-[28px] tracking-[0.5%] text-[#171A2C] md:h-[28px]">
                  {step.title}
                </h3>
                <p className="mt-2 m-0 font-['Raleway'] text-[14px] font-normal leading-[22px] text-[#6E7284]">
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

export default CounselorFrom;

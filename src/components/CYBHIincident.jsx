const steps = [
  {
    title: "Sign In Securely",
    description:
      "Email, password & personal security key. Biometric login after the first verified session.",
  },
  {
    title: "Report the Incident",
    description:
      "Open Incident Bot, describe by voice or text, select participants, and AI generates a complete SOAP report.",
  },
  {
    title: "Initiate Coaching / Counseling",
    description:
      "Same chat session, CHW or Counselor transitions to Coaching/Counseling Bot. Details captured throughout, no need to restart.",
  },
  {
    title: "Review & Submit",
    description:
      "Review the AI-generated report, make edits. Reports cannot be submitted until all mandatory fields are complete.",
  },
  {
    title: "Admin Review & Approval",
    description:
      "Admin approves, rejects, or requests revisions. Revision requests route back to the originating staff with notes.",
  },
  {
    title: "Billing Ready",
    description:
      "Upon Admin approval, reports are locked and finalized. Billing codes confirmed and ready for MediCal submission.",
  },
];

const CYBHIincident = () => {
  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          
          <h2 className="mt-2 m-0 w-full max-w-[900px] bg-[linear-gradient(90deg,_#000000_0%,_#2B1BDD_100%)] bg-clip-text font-['Raleway'] text-[28px] font-bold leading-[100%] tracking-[0.5%] text-transparent sm:text-[36px] md:text-[48px]">
            From Incident to MediCal Billing in 6 Steps
          </h2>
          <p className="mt-4 m-0 w-full max-w-[646px] font-['Raleway'] text-[16px] font-normal leading-[24px] tracking-[0.5%] text-[#6E7284] sm:text-[17px] sm:leading-[26px] md:text-[18px] md:leading-[28px]">
            Structured, role-based workflow, from incident to Admin-approved,
            MediCal-billable documentation.
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
              alt="Incident workflow app screen"
              className="h-auto w-full max-w-[320px] object-contain md:max-w-[360px]"
            />
          </div>

          <div className="space-y-3">
            {steps.map((step) => (
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

export default CYBHIincident;

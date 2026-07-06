const toolCards = [
  {
    title: "AI-Generated BIRP Session Notes",
    description:
      "Describe the session by voice or text, AI structures a complete BIRP note (Behavior, Intervention, Response, Plan) meeting CYBHI standards. Review, edit, and submit in minutes.",
  },
  {
    title: "Incident-to-Session in One",
    description:
      "View incidents assigned by Admin or self-created. Initiate a counseling session directly from the record, all context pre-loaded, no re-entry required.",
  },
  {
    title: "Automatic CYBHI Billing Code Selection",
    description:
      "The app auto-selects the correct MediCal billing code based on session type, duration, and service delivered. No manual lookup, no coding errors.",
  },
  {
    title: "Smart Draft Management",
    description:
      "Session drafts auto-generated for each student involved in an incident, pre-populated when sufficient detail is provided, or left blank for completion later.",
  },
  {
    title: "Fast Revision & Resubmission",
    description:
      "Revision requests from Admin arrive with specific notes. Update only the flagged fields and resubmit, designed to minimize turnaround without compromising accuracy.",
  },
  {
    title: "Complete Audit Trail",
    description:
      "Every session note, approval, revision, and resubmission is logged with full timestamps, always complete, always compliant, always ready for review.",
  },
];

const CounselorTool = () => {
  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <h2 className="m-0 w-full max-w-[598px] bg-[linear-gradient(90deg,_#000000_0%,_#2B1BDD_100%)] bg-clip-text text-center font-['Raleway'] text-[28px] font-bold leading-[100%] tracking-[0.5%] text-transparent sm:text-[36px] md:text-[48px]">
            Tools Built Around How Counselors Actually Work
          </h2>
          {/* <p className="m-0 w-full max-w-[646px] text-center font-['Raleway'] text-[16px] font-normal leading-[24px] tracking-[0.5%] text-[#6E7284] sm:text-[17px] sm:leading-[26px] md:text-[18px] md:leading-[28px]">
            subheading comes here
          </p> */}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {toolCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[12px] border border-[#DEE0EE] bg-[#EFF0FF] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <h3 className="m-0 w-full max-w-[376px] font-['Raleway'] text-[20px] font-bold leading-[28px] tracking-[0.5%] text-[#1E2233]">
                {card.title}
              </h3>
              <p className="mt-3 m-0 font-['Raleway'] text-[14px] font-normal leading-[22px] text-[#6E7284]">
                {card.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-7 flex justify-center">
          <button
            type="button"
            className="rounded-md bg-[#5626EA] px-6 py-2 text-[14px] font-semibold text-white shadow-[0_8px_18px_rgba(86,38,234,0.35)] transition hover:bg-[#4A1FD0]"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default CounselorTool;

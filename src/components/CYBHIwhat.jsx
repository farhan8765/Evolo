const featureCards = [
  {
    title: "AI-Powered Incident Bot",
    description:
      "Voice or text, AI builds a complete SOAP report (Subjective, Objective, Assessment, Plan) with date, time, location, and participants.",
  },
  {
    title: "Counseling & Coaching Bot",
    description:
      "Continues in the same chat session, guides clinicians through BIRP (Behavior, Intervention, Response, Plan) and auto-selects the correct CYBHI billing code.",
  },
  {
    title: "Speech-to-Text with PII Redaction",
    description:
      "Audio transcribed via Whisper (self-hosted) and auto-redacted of PII before AI processing, private and compliant.",
  },
  {
    title: "Smart Draft Management",
    description:
      "Session drafts are auto-generated per student, pre-populated when details are sufficient, or left blank for later. No data lost.",
  },
  {
    title: "Biometric & Multi-Layer Security",
    description:
      "Email/password + admin-issued security key + personal key. iOS: Face ID. Android: Touch ID. Keys updatable via Settings.",
  },
  {
    title: "MediCal-Ready Billing",
    description:
      "Billing codes are auto-generated per session length and service type. Locked and finalized upon Admin approval, ready for MediCal.",
  },
];

const CYBHIwhat = () => {
  return (
    <section className="bg-[#EFF0FF] px-4 py-10 md:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <h2 className="m-0 w-full max-w-[594px] bg-[linear-gradient(90deg,_#000000_0%,_#2B1BDD_100%)] bg-clip-text text-center font-['Raleway'] text-[28px] font-bold leading-[100%] tracking-[0.5%] text-transparent sm:text-[36px] md:text-[48px]">
            What the App Does Feature by Feature
          </h2>
          {/* <p className="m-0 w-full max-w-[646px] text-center font-['Raleway'] text-[16px] font-normal leading-[24px] tracking-[0.5%] text-[#6E7284] sm:text-[17px] sm:leading-[26px] md:text-[18px] md:leading-[28px]">
            Lorem ipsum dolor sit amet consectetur. Tristique gravida posuere
            neque cras.
          </p> */}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[12px] border border-[#DEE0EE] bg-[#F7F8FF] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <h3 className="m-0 w-full max-w-[376px] font-['Raleway'] text-[20px] font-bold leading-[28px] tracking-[0.5%] text-[#1E2233] md:h-[28px]">
                {card.title}
              </h3>
              <p className="mt-3 m-0 font-['Raleway'] text-[16px] font-normal leading-[24px] tracking-[0.5%] text-[#6E7284] sm:text-[17px] sm:leading-[26px]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CYBHIwhat;

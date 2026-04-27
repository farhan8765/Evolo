const techCards = [
  {
    title: "Firebase Auth",
    description: "OAuth2, OIDC, PKCE - secure login management",
  },
  {
    title: "MongoDB Atlas",
    description: "Encrypted, cloud-hosted database with role-based access control",
  },
  {
    title: "VPC",
    description: "Virtual Private Cloud - isolated backend, no direct public access",
  },
  {
    title: "Whisper",
    description: "Self-hosted speech-to-text for fully private audio transcription",
  },
  {
    title: "Microsoft Presidio / Google DLP",
    description: "Automated PII detection and redaction",
  },
  {
    title: "RAG",
    description:
      "Retrieval-Augmented Generation - AI enriched with past records for consistent, accurate reports",
  },
];

const CYBHIpowered = () => {
  return (
    <section className="bg-[#EFF0FF] px-4 py-10 md:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="font-['Raleway'] text-[12px] font-medium text-[#5E6172]">
            tag
          </span>
          <h2 className="mt-2 m-0 w-full max-w-[594px] bg-[linear-gradient(90deg,_#000000_0%,_#2B1BDD_100%)] bg-clip-text text-center font-['Raleway'] text-[28px] font-bold leading-[100%] tracking-[0.5%] text-transparent sm:text-[36px] md:text-[48px]">
            Powered by Enterprise-Grade Technology
          </h2>
          <p className="mt-4 m-0 w-full max-w-[646px] text-center font-['Raleway'] text-[16px] font-normal leading-[24px] tracking-[0.5%] text-[#6E7284] sm:text-[17px] sm:leading-[26px] md:text-[18px] md:leading-[28px]">
            Every component is selected for security, compliance, and reliability
            in healthcare-adjacent environments.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-3 md:grid-cols-3">
          {techCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[10px] border border-[#DADDF0] bg-[#F7F8FF] px-4 py-3 shadow-[0_2px_6px_rgba(0,0,0,0.08)]"
            >
              <h3 className="m-0 font-['Raleway'] text-[20px] font-bold leading-[28px] tracking-[0.5%] text-[#171A2C]">
                {card.title}
              </h3>
              <p className="mt-2 m-0 font-['Raleway'] text-[14px] font-normal leading-[22px] text-[#6E7284]">
                {card.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-7 flex justify-center">
          <button
            type="button"
            className="w-full max-w-[280px] rounded-md bg-[#5626EA] px-6 py-2 text-[14px] font-semibold text-white shadow-[0_8px_18px_rgba(86,38,234,0.35)] transition hover:bg-[#4A1FD0] sm:w-auto sm:max-w-none"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default CYBHIpowered;

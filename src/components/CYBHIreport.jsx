const reportStages = [
  "Draft",
  "Submitted",
  "Reviewed",
  "Revision Requested",
  "Resubmitted",
  "Approved",
  "Rejected",
];

const CYBHIreport = () => {
  return (
    <section className="bg-[#F4F5FB] px-4 py-10 md:py-14">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-10">
        <div>
          <h2 className="m-0 w-full max-w-[594px] bg-[linear-gradient(90deg,_#000000_0%,_#2B1BDD_100%)] bg-clip-text font-['Raleway'] text-[28px] font-bold leading-[100%] tracking-[0.5%] text-transparent sm:text-[36px] md:text-[48px]">
            Every Report Has a Clear, Auditable Path
          </h2>
          <p className="mt-4 m-0 w-full max-w-[646px] font-['Raleway'] text-[16px] font-normal leading-[24px] tracking-[0.5%] text-[#6E7284] sm:text-[17px] sm:leading-[26px] md:text-[18px] md:leading-[28px]">
            Transparent, auditable workflow, all actions logged for compliance.
          </p>

          <div className="mt-6 space-y-2">
            {reportStages.map((stage) => (
              <div
                key={stage}
                className="flex items-center gap-3 rounded-[8px] border border-[#DADDF0] bg-[#E4E6FF] px-3 py-2.5"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#4E22E8] text-white">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="5" y="4" width="14" height="16" rx="2" />
                    <path d="M9 8h6M9 12h6M9 16h4" />
                  </svg>
                </span>
                <span className="w-full max-w-[468.01px] font-['Raleway'] text-[16px] font-medium leading-[24px] tracking-[0.5%] text-[#2A2F44] sm:text-[18px] sm:leading-[28px]">
                  {stage}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="/images/report.png"
            alt="Report workflow screens"
            className="h-auto w-full max-w-[340px] object-contain md:max-w-[420px]"
          />
        </div>
      </div>
    </section>
  );
};

export default CYBHIreport;

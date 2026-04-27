const CYBHIevery = () => {
  return (
    <section className="bg-[#EFF0FF] px-4 py-10 md:py-14">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-8 md:grid-cols-2 md:gap-14">
        <h2 className="m-0 max-w-[594px] bg-gradient-to-r from-[#000000] to-[#2B1BDD] pt-10 bg-clip-text font-['Raleway'] text-[32px] font-bold leading-[100%] tracking-[0.5%] text-transparent sm:text-[38px] md:text-[48px]">
          Everything Your Team
          <br />
          Needs, Built Into One
          <br />
          App
        </h2>

        <ul className="m-0 list-disc space-y-2 pl-5 text-[#6E7284] font-['Raleway'] text-[16px] font-normal leading-[24px] tracking-[0.5%] sm:text-[17px] sm:leading-[26px] md:text-[18px] md:leading-[28px]">
          <li>
            Auto-generated SOAP incident reports &amp; BIRP counseling notes
            with Medical billing codes
          </li>
          <li>
            AI-assisted documentation powered by RAG, consistent, accurate,
            audit-ready
          </li>
          <li>
            Biometric Login (iOS: Face ID / Android: Touch ID), multi-layer
            security &amp; end-to-end audit trail
          </li>
          <li>
            PII auto-redacted via Microsoft Presidio &amp; Google DLP. audio
            transcribed privately via Whisper (self-hosted)
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CYBHIevery;

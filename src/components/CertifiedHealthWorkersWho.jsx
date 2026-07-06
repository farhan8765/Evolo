import React from "react";

const CertifiedHealthWorkersWho = () => {
  return (
    <section className="bg-[#EEF0FF] px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start lg:gap-20">
        <h2 className="m-0 max-w-[620px] bg-gradient-to-r from-[#050519] via-[#080632] to-[#21148F] bg-clip-text font-['Raleway'] text-[36px] font-bold leading-[1.02] tracking-[0.5%] text-transparent sm:text-[46px] lg:text-[50px]">
          <span className="sm:whitespace-nowrap">Who Are Certified Health</span>
          <br />
          Workers (CHW)?
        </h2>

        <p className="m-0 max-w-[700px] font-['Raleway'] text-[17px] font-medium leading-8 text-[#697180] sm:text-[19px] sm:leading-9">
          The only role handling both incident reporting and MediCal-billable
          coaching. After an incident, the Coaching Bot continues in the same
          session, all context carries forward, no duplicate entry.
        </p>
      </div>
    </section>
  );
};

export default CertifiedHealthWorkersWho;

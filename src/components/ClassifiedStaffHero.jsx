import React from "react";

const ClassifiedStaffHero = () => {
  return (
    <section className="relative isolate overflow-hidden  px-4 pb-16 pt-14 text-white sm:px-6 sm:pb-20 sm:pt-[72px] lg:pb-24 lg:pt-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="m-0 font-['Raleway'] text-[15px] font-semibold leading-6 text-[#21343A] sm:text-[16px]">
            Classified Staff
          </p>

          <h1 className="mt-4 bg-gradient-to-r from-[#030312] via-[#120D69] to-[#2B1BDD] bg-clip-text font-['Raleway'] text-[38px] font-bold leading-[0.98] tracking-[0.5%] text-transparent sm:text-[52px] lg:text-[58px]">
            Classified Staff:
            <br />
            You Saw It.
            <br />
            <span className="sm:whitespace-nowrap">The App Documents It.</span>
          </h1>

          <p className="mt-7 max-w-[610px] font-['Raleway'] text-[17px] font-medium leading-8 text-[#5F6F78] sm:text-[20px] lg:mx-0">
            Non-certified school personnel, campus security, instructional
            aides, and operations staff who witness and report behavioral
            incidents.
          </p>
        </div>

        <div className="relative mx-auto flex min-h-[420px] w-full max-w-[570px] items-center justify-center sm:min-h-[520px] lg:min-h-[560px]">
          <img
            src="/images/stf1.png"
            alt="Classified staff app dashboard and coaching session previews"
            width={568}
            height={576}
            className="relative z-10 w-full max-w-[330px]  lg:max-w-[540px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ClassifiedStaffHero;

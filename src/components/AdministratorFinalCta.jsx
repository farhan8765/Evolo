import React from "react";
import { Link } from "react-router-dom";

const AdministratorFinalCta = () => {
  return (
    <section className=" px-4 py-16 text-center sm:px-6 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="m-0 font-['Raleway'] text-[26px] font-bold leading-tight text-[#13242A] sm:text-[32px] lg:text-[36px]">
          Ready to Take Full Control of Your District&apos;s Compliance?
        </h2>

        <p className="mx-auto mt-5 max-w-[820px] font-['Raleway'] text-[15px] font-semibold leading-7 text-[#586774] sm:text-[17px]">
          Contact us to schedule a demo or request access. Built for California
          schools. Compliant by design.
        </p>

        <Link
          to="/contact"
          className="mt-7 inline-flex rounded-[6px] border border-[#C7D4FF] px-6 py-3 font-['Raleway'] text-[16px] font-semibold text-[#641CFF] transition hover:border-[#641CFF] hover:bg-[#120A2E]"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default AdministratorFinalCta;

import React from "react";
import { Link } from "react-router-dom";

const complianceItems = [
  "FERPA\nCompliant",
  "HIPAA\nCompliant",
  "CYBHI\nCertified",
  "MediCal\nBilling Ready",
];

const AdministratorCompliance = () => {
  return (
    <section className="bg-[#EEF0FF] px-4 py-16 text-center sm:px-6 lg:py-24">
      <div className="mx-auto w-full max-w-6xl">
        {/* <p className="m-0 font-['Raleway'] text-[17px] font-semibold leading-6 text-[#222731]">
          tag
        </p> */}

        <h2 className="mx-auto mt-5 max-w-5xl bg-gradient-to-r from-[#050519] via-[#120D69] to-[#2B1BDD] bg-clip-text font-['Raleway'] text-[38px] font-bold leading-[1.08] tracking-[0.5%] text-transparent sm:text-[50px] lg:text-[58px]">
          Security & Compliance You Can Count On
        </h2>

        <p className="mx-auto mt-8 max-w-[980px] font-['Raleway'] text-[17px] font-medium leading-8 text-[#69717E] sm:text-[19px]">
          Fully compliant with FERPA, HIPAA, and CYBHI. All data is stored in
          an encrypted, role-access-controlled MongoDB Atlas database in a
          secure VPC.
        </p>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {complianceItems.map((item) => (
            <div
              key={item}
              className="flex min-h-[104px] items-center justify-center rounded-[10px] bg-white px-5 py-5 shadow-[0_4px_10px_rgba(40,45,73,0.18)]"
            >
              <p className="whitespace-pre-line font-['Raleway'] text-[28px] font-bold leading-[1.2] text-[#2B207E] sm:text-[30px]">
                {item}
              </p>
            </div>
          ))}
        </div>

        <Link
          to="/contact"
          className="mt-9 inline-flex rounded-[6px] bg-[#5A14ED] px-6 py-3 font-['Raleway'] text-[16px] font-medium text-white shadow-[0_10px_20px_rgba(90,20,237,0.22)] transition hover:bg-[#4C1CC7]"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
};

export default AdministratorCompliance;

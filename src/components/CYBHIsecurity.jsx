const complianceItems = [
  "FERPA\nCompliant",
  "HIPAA\nCompliant",
  "CYBHI\nCertified",
  "MediCal\nBilling Ready",
];

const CYBHIsecurity = () => {
  return (
    <section className="bg-[#EFF0FF] px-4 py-10 md:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h2 className="m-0 w-full max-w-[594px] bg-[linear-gradient(90deg,_#000000_0%,_#2B1BDD_100%)] bg-clip-text text-center font-['Raleway'] text-[28px] font-bold leading-[100%] tracking-[0.5%] text-transparent sm:text-[36px] md:text-[48px]">
            Security & Compliance You Can Count On
          </h2>
          <p className="mt-4 m-0 w-full max-w-[760px] text-center font-['Raleway'] text-[16px] font-normal leading-[24px] tracking-[0.5%] text-[#6E7284] sm:text-[17px] sm:leading-[26px] md:text-[18px] md:leading-[28px]">
            Fully compliant with FERPA, HIPAA, and CYBHI. All data is stored in
            an encrypted, role-access-controlled MongoDB Atlas database in a
            secure VPC.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {complianceItems.map((item) => (
            <article
              key={item}
              className="flex min-h-[86px] items-center justify-center rounded-[12px] border border-[#DADDF0] bg-[#F7F8FF] px-4 text-center shadow-[0_3px_8px_rgba(0,0,0,0.08)]"
            >
              <h3 className="m-0 whitespace-pre-line font-['Raleway'] text-[20px] font-bold leading-[28px] tracking-[0.5%] text-[#2B1E7F]">
                {item}
              </h3>
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

export default CYBHIsecurity;

const roles = [
  {
    title: "Classified Staff",
    subtitle: "Campus security, aides & operations staff who witness incidents.",
    points: [
      "Report incidents via AI bot - SOAP format, voice or text",
      "Submit to Admin & act on revision requests",
    ],
  },
  {
    title: "Certified Health Workers (CHW)",
    subtitle: "Authorized staff who report incidents and deliver coaching sessions.",
    points: [
      "All Classified Staff capabilities, plus full coaching workflows",
      "Generate BIRP coaching reports with MediCal billing codes",
    ],
  },
  {
    title: "Counselors",
    subtitle: "Licensed professionals manage counseling sessions and student cases.",
    points: [
      "Initiate sessions from existing incidents - BIRP notes auto-generated",
      "Billing codes auto-selected per session type, duration & service",
    ],
  },
  {
    title: "Administrators",
    subtitle: "System overseers responsible for compliance, approvals & user management.",
    points: [
      "Review, approve/reject all reports - revision requests routed instantly",
      "Manage users, upload student lists, issue security keys, and full audit log",
    ],
  },
];

const CYBHIbuild = () => {
  return (
    <section className="bg-[#F7F7FB] px-4 py-10 md:py-14">
      <div className="mx-auto max-w-6xl md:p-2">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <h2 className="m-0 w-full max-w-[594px] bg-[linear-gradient(90deg,_#000000_0%,_#2B1BDD_33.65%)] bg-clip-text text-center font-['Raleway'] text-[28px] font-bold leading-[100%] tracking-[0.5%] text-transparent sm:text-[36px] md:text-[48px]">
            Built for Every Member of Your School Behavioral Health Team
          </h2>
          <p className="m-0 w-full max-w-[646px] text-center font-['Raleway'] text-[16px] font-normal leading-[24px] tracking-[0.5%] text-[#6E7284] sm:text-[17px] sm:leading-[26px] md:text-[18px] md:leading-[28px]">
            Four roles. Four tailored experiences. One unified app.
          </p>
        </div>

        <div className="mt-8 rounded-[18px] border-x border-b border-[#E3E4EC] p-4 md:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {roles.map((role) => (
              <div
                key={role.title}
                className="rounded-[14px] border border-[#DCDCF0] bg-[#E9EAF9] p-4 shadow-[0_3px_8px_rgba(0,0,0,0.08)]"
              >
                <h3 className="m-0 bg-[linear-gradient(90deg,_#000000_0%,_#2B1BDD_33.65%)] bg-clip-text font-['Raleway'] text-[30px] font-bold leading-[100%] tracking-[0.5%] text-transparent sm:text-[32px]">
                  {role.title}
                </h3>

                <p className="mt-3 m-0 font-['Raleway'] text-[16px] font-semibold leading-[30px] text-[#1C2034] sm:text-[17px]">
                  {role.subtitle}
                </p>

                <ul className="mt-3 space-y-1 pl-0 text-[#646A7E]">
                  {role.points.map((point) => (
                    <li
                      key={point}
                      className="list-none font-['Raleway'] text-[16px] font-normal leading-[26px] sm:text-[17px]"
                    >
                      <span className="mr-2 text-[#21253E]">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CYBHIbuild;

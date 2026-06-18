import React from "react";

const reports = [
  { title: "Hallway disruption involving student conduct", status: "Submitted" },
  { title: "Classroom interruption requiring follow-up", status: "Approved" },
  { title: "Peer conflict documented by staff", status: "Review" },
  { title: "Campus concern routed to counselor", status: "Submitted" },
];

const AdministratorHero = () => {
  return (
    <section className="relative isolate overflow-hidden  px-4 pb-16 pt-14 text-white sm:px-6 sm:pb-20 sm:pt-[72px] lg:pb-24 lg:pt-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="m-0 font-['Raleway'] text-[15px] font-semibold leading-6 text-[#27353C] sm:text-[16px]">
            Administrators
          </p>

          <h1 className="mt-4 bg-gradient-to-r from-[#040414] via-[#120D69] to-[#2B1BDD] bg-clip-text font-['Raleway'] text-[38px] font-bold leading-[0.98] tracking-[0.5%] text-transparent sm:text-[52px] lg:text-[64px]">
            Full Control.
            <br />
            Complete Compliance.
            <br />
            Total Visibility.
          </h1>

          <p className="mt-7 max-w-[620px] font-['Raleway'] text-[17px] font-medium leading-8 text-[#5F6F78] sm:text-[20px] lg:mx-0 lg:text-[22px]">
            System overseers are responsible for compliance, approvals, and
            user management.
          </p>
        </div>

        <div className="relative mx-auto flex min-h-[420px] w-full max-w-[560px] items-center justify-center sm:min-h-[520px] lg:min-h-[560px]">
          <div className="absolute h-[310px] w-[310px] rounded-full bg-[#6127FF] shadow-[0_0_0_10px_rgba(97,39,255,0.28),_0_26px_60px_rgba(97,39,255,0.45)] sm:h-[390px] sm:w-[390px] lg:h-[430px] lg:w-[430px]" />

          <img
            src="/images/incident.png"
            alt="Administrator dashboard mobile preview"
            width={353}
            height={568}
            className="relative z-10 w-[205px] -translate-x-10 -rotate-[6deg] drop-shadow-[0_24px_38px_rgba(0,0,0,0.55)] sm:w-[265px] lg:w-[300px]"
          />

          <div className="absolute right-1 z-20 w-[190px] rotate-[13deg] rounded-[30px] border-[9px] border-[#111111] bg-[#F9F9FF] px-3 pb-3 pt-5 text-[#111111] shadow-[0_22px_36px_rgba(0,0,0,0.55)] sm:right-5 sm:w-[235px] sm:rounded-[36px] sm:border-[10px] sm:px-4 sm:pt-6 lg:right-2 lg:w-[250px]">
            <div className="absolute left-1/2 top-2 h-3 w-16 -translate-x-1/2 rounded-full bg-[#141414] sm:h-4 sm:w-20" />
            <div className="flex items-center justify-between pt-2">
              <span className="text-[14px] leading-none text-[#1C1C24]">←</span>
              <p className="m-0 flex-1 text-center font-['Raleway'] text-[10px] font-bold sm:text-[12px]">
                Incident Reports
              </p>
              <span className="h-2 w-2 rounded-full border border-[#FF3366]" />
            </div>

            <div className="mt-4 rounded-lg border border-[#E7E7F5] bg-white px-3 py-2 font-['Raleway'] text-[9px] text-[#8A8DA0]">
              Search
            </div>

            <div className="mt-3 grid grid-cols-3 gap-1.5 font-['Raleway'] text-[8px] font-semibold text-[#5F35DF]">
              <span className="rounded-md bg-[#F1EDFF] px-2 py-1 text-center">All incidents</span>
              <span className="rounded-md bg-white px-2 py-1 text-center text-[#71768A]">Date</span>
              <span className="rounded-md bg-white px-2 py-1 text-center text-[#71768A]">Favorite</span>
            </div>

            <div className="mt-3 space-y-2">
              {reports.map((report, index) => (
                <div
                  key={report.title}
                  className="rounded-lg border border-[#E5E0FF] bg-white p-2 font-['Raleway'] shadow-[0_5px_12px_rgba(47,31,117,0.06)]"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="m-0 line-clamp-1 text-[8px] font-bold leading-3 text-[#4E23D6] sm:text-[9px]">
                      {report.title}
                    </p>
                    <span className="text-[9px] text-[#F5C944]">★</span>
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-[6px] font-semibold text-[#5F6374] sm:text-[7px]">
                    <span>Thu 04 Sep 2025</span>
                    <span>10:00 AM</span>
                    <span
                      className={`rounded-full px-1.5 py-0.5 ${
                        index === 1
                          ? "bg-[#DDF9E8] text-[#229A57]"
                          : index === 2
                            ? "bg-[#E8F1FF] text-[#336BEF]"
                            : "bg-[#EFE8FF] text-[#5F35DF]"
                      }`}
                    >
                      {report.status}
                    </span>
                  </div>
                  <div className="mt-1.5 flex gap-1 text-[6px] font-bold text-[#5F35DF] sm:text-[7px]">
                    <span className="rounded-full border border-[#D9CEFF] px-1.5 py-0.5">
                      Participants (2)
                    </span>
                    <span className="rounded-full border border-[#D9CEFF] px-1.5 py-0.5">
                      Sessions (2)
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdministratorHero;

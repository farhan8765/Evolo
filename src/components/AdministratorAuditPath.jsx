import React from "react";
import { CalendarDays, FileText, Landmark } from "lucide-react";

const auditStates = [
  { label: "Draft", Icon: FileText },
  { label: "Submitted", Icon: Landmark },
  { label: "Reviewed", Icon: CalendarDays },
  { label: "Revision Requested", Icon: CalendarDays },
  { label: "Resubmitted", Icon: CalendarDays },
  { label: "Approved", Icon: CalendarDays },
  { label: "Rejected", Icon: CalendarDays },
];

const AdministratorAuditPath = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-0">
        <div className="relative z-10">
          {/* <p className="m-0 font-['Raleway'] text-[17px] font-semibold leading-6 text-[#1F2730]">
            Tag
          </p> */}

          <h2 className="mt-5 max-w-[650px] font-['Raleway'] text-[38px] font-bold leading-[1.02] tracking-[0.5%] sm:text-[50px] lg:text-[58px]">
            <span className="text-[#0D0D2B]">Every Report Has a </span>
            <br />
            <span className="text-[#2B1BDD]">Clear, Auditable Path</span>
          </h2>

          <p className="mt-7 max-w-[640px] font-['Raleway'] text-[17px] font-medium leading-8 text-[#65707A] sm:text-[18px]">
            Transparent, auditable workflow,&nbsp; all actions logged for compliance.
          </p>

          <div className="mt-7 grid gap-3">
            {auditStates.map(({ label, Icon }) => (
              <div
                key={label}
                className="flex min-h-[64px] items-center gap-4 rounded-[11px] bg-[#EEF0FF] px-3 py-3 shadow-[0_2px_6px_rgba(42,47,75,0.16)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[#5A14ED] text-white">
                  <Icon size={22} strokeWidth={2} />
                </span>
                <span className="font-['Raleway'] text-[19px] font-medium leading-6 text-[#242832]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-20 flex min-h-[440px] items-center justify-center overflow-visible lg:min-h-[620px] lg:translate-x-20 lg:translate-y-28 lg:items-start lg:justify-start xl:translate-x-32 xl:translate-y-32">
          <img
            src="/images/adm2.png"
            alt="Administrator incident reports audit trail preview"
            width={392}
            height={590}
            className="relative z-20 w-[250px] drop-shadow-[0_24px_38px_rgba(0,0,0,0.24)] sm:w-[315px] lg:w-[370px] xl:w-[390px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AdministratorAuditPath;

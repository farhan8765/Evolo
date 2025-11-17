import React from "react";

const ICONS = {
  runner: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M10 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 8.5 9.5 13l3 2 2 4M14.5 12H18M10 21l1-5-4-2"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  pill: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect
        x="4"
        y="7"
        width="16"
        height="10"
        rx="5"
        strokeWidth="1.8"
      />
      <path d="M12 7v10" strokeWidth="1.8" />
    </svg>
  ),
  calculator: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="5" y="3" width="14" height="18" rx="2" strokeWidth="1.8" />
      <path d="M5 9.5h14" strokeWidth="1.8" />
      <path d="M8.5 13.5h1M8.5 17.5h1M12 13.5h1M12 17.5h1M15.5 13.5h1M15.5 17.5h1" />
    </svg>
  ),
  chip: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="7" y="7" width="10" height="10" rx="2" strokeWidth="1.8" />
      <path
        d="M9 5V3M15 5V3M9 21v-2M15 21v-2M5 9H3M5 15H3M21 9h-2M21 15h-2"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  shield: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M20 8c0 7.5-4.5 11-8 13-3.5-2-8-5.5-8-13V5l8-2 8 2Z"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M12 8v6M9 11h6" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  service: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="m8 8 8 8m0-8-8 8"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M4 12h4m8 0h4M12 4v4m0 8v4" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  hospital: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="5" y="4" width="14" height="16" rx="2" strokeWidth="1.8" />
      <path d="M12 7v6M9 10h6M5 16h14" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  store: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M4 10h16l-1.5-5h-13L4 10Z"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M5 10v9h14v-9" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 14h6v5H9z" strokeWidth="1.6" />
    </svg>
  ),
  manufacturing: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M5 17h14v4H5zM9 17V9l4 2V9l4 2v6"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M7 5h3v3H7z" strokeWidth="1.6" />
      <path d="M14 4h3v4h-3z" strokeWidth="1.6" />
    </svg>
  ),
};

const SECTORS = [
  {
    label: "Physical Therapists",
    icon: "runner",
    position: { top: "8%", left: "50%" },
  },
  {
    label: "Pharmacy Techs",
    icon: "pill",
    position: { top: "28%", left: "78%" },
  },
  {
    label: "Accounting",
    icon: "calculator",
    position: { top: "58%", left: "90%" },
  },
  {
    label: "Information Technology",
    icon: "chip",
    position: { top: "74%", left: "67%" },
  },
  {
    label: "Service",
    icon: "service",
    position: { top: "46%", left: "55%" },
  },
  {
    label: "Healthcare",
    icon: "shield",
    position: { top: "40%", left: "35%" },
  },
  {
    label: "Medical Billing, Coding, and Transcription",
    icon: "hospital",
    position: { top: "32%", left: "17%" },
  },
  {
    label: "Retail and Wholesale",
    icon: "store",
    position: { top: "63%", left: "9%" },
  },
  {
    label: "Manufacturing",
    icon: "manufacturing",
    position: { top: "78%", left: "30%" },
  },
];

const LogoIcon = (props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" {...props}>
    <path
      d="M25 12 8 42c-4 6 0 12 8 12h16c4 0 7-2 9-5l4-7"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M39 12h9c8 0 12 6 8 12l-6 10"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EmpGraph = () => {
  return (
    <section className="bg-[#f8f9ff] py-24">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.4em] text-[#8f94a8]">
          Tagline
        </p>
        <h2 className="mt-3 text-center text-4xl font-extrabold text-[#1b195b]">
          Evolo AI Powered by{" "}
          <span className="bg-gradient-to-r from-[#2b1bdd] to-[#6a44ff] bg-clip-text text-transparent">
            AdultED Pro
          </span>
        </h2>
        <p className="mt-4 text-center text-base text-[#6e728d]">
          We help source coveted talent in the following areas:
        </p>

        <div className="relative mt-16 h-[520px] overflow-hidden rounded-[56px] bg-gradient-to-b from-white to-[#f1f4ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 900 520"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M50 440Q450 120 850 440"
              stroke="#E6EAF4"
              strokeWidth="2"
            />
            <path
              d="M120 460Q450 200 780 460"
              stroke="#E6EAF4"
              strokeWidth="2"
            />
            <path
              d="M190 480Q450 280 710 480"
              stroke="#E6EAF4"
              strokeWidth="2"
            />
          </svg>

          {SECTORS.map((sector) => {
            const Icon = ICONS[sector.icon];
            return (
              <div
                key={sector.label}
                className="absolute flex w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
                style={{ top: sector.position.top, left: sector.position.left }}
              >
                <span className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#5138ee] shadow-[0_10px_25px_rgba(90,69,255,0.18)]">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="text-sm font-semibold text-[#1d1e2c]">
                  {sector.label}
                </p>
              </div>
            );
          })}

          <div className="absolute left-1/2 top-[68%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
            <span className="flex h-28 w-28 items-center justify-center rounded-full bg-white text-[#4025d8] shadow-[0_20px_40px_rgba(64,37,216,0.18)]">
              <LogoIcon className="h-16 w-16" />
            </span>
            <p className="mt-4 text-3xl font-extrabold text-[#2b1bdd]">Evolo AI</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpGraph;

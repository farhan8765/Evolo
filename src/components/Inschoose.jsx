import React from "react";

const features = [
  {
    title: "Comprehensive Dashboard",
    description:
      "Get real-time statistics on student enrollment, active interviews, and job interactions.",
    icon: "/images/in1.svg",
    
  },
  {
    title: "Event Management",
    description:
      "Easily set up and approve life skills and hiring events to prepare students for the future.",
    icon: "/images/in2.svg",
  },
  {
    title: "Enhanced Communication",
    description:
      "Facilitate seamless communication between students, teachers, and employers, including homework reminders and updates.",
    icon: "/images/in3.svg",
  },
];

const Inschoose = () => {
  return (
    <section className="bg-[#f4f2ff] px-4 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-[#1e1e2f]">
          Tagline
        </p>
       <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
  <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
    Empowering Futures, One
  </span>
  <br />
  <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
    Swipe at a Time
  </span>
</h2>


        <p className="mt-5 text-base md:text-lg text-[#5d6075]">
          Join the innovative platform that bridges students, institutions, and
          employers for a seamless journey from education to employment.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-6xl rounded-[36px] bg-white p-6 shadow-[0_24px_60px_rgba(32,25,77,0.12)]">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon }) => (
            <article
              key={title}
              className="rounded-3xl bg-[#e8e4ff] p-6 text-center shadow-[0_18px_40px_rgba(68,45,185,0.12)]"
            >
             <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
  <img 
    src={icon} 
    alt="feature icon" 
    className="h-10 w-10 object-contain"
  />
</div>

              <h3 className="text-lg font-semibold text-[#17183a]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5b5e73]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inschoose;

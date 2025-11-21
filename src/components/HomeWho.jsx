import React from "react";

export default function HomeWho() {
  return (
    <div className="w-full bg-[#F4F4FF] py-20 px-6 font-['Raleway']">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>
          <p className="text-xs font-semibold tracking-wider text-black mb-3">
            WHO WE ARE
          </p>

       <h2 className="text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-black to-[#2B1BDD] bg-clip-text text-transparent">
  One Platform. Two Powerful Solutions.
  <br />
  Infinite Possibilities.
</h2>

        </div>

        {/* RIGHT SIDE PARAGRAPH */}
        <div className="text-gray-600 text-[15px] leading-relaxed">
          <p className="mb-6">
            Evolo AI partners with educational institutions to solve their most
            pressing challenges. Whether you're connecting adult learners to
            career opportunities or managing behavioral health services in K–12
            schools, our AI-powered platforms streamline operations, ensure
            compliance, and drive measurable results.
          </p>

          <p>
            We don’t just build software—we build systems that work for students,
            staff, and institutions.
          </p>
        </div>

      </div>
    </div>
  );
}
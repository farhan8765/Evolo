import React from "react";

const Aboutstay = () => {
  return (
    <section className="bg-[#F5F6FF] py-8 px-6 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-snug">
        Stay informed and{" "}
        <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
          ahead of the curve!
        </span>
        <br />
        Sign up and{" "}
        <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
          stay up to date!
        </span>
      </h2>

      {/* Email Input Section */}
      <form className="flex items-center justify-center gap-2 max-w-md mx-auto bg-white rounded-xl shadow-sm border border-black p-2">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="flex-1 px-4 py-2 outline-none text-gray-700 text-base rounded-lg"
          required
        />
        <button
          type="submit"
          className="flex items-center gap-2 bg-[#0D0D21] hover:bg-[#2B1BDD] text-white px-4 py-2 rounded-lg font-medium transition-all"
        >
          Submit <span>→</span>
        </button>
      </form>
    </section>
  );
};

export default Aboutstay;
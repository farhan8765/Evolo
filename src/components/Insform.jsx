import React from "react";

const InsForm = () => {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 rounded-[32px] bg-white p-8 md:flex-row md:items-start md:gap-16 md:p-14">

        {/* LEFT SECTION */}
        <div className="flex flex-col gap-8 md:w-2/5">
          <div>
            <h2 className="text-4xl font-bold text-[#0f0f2d]">Get in Touch</h2>
            <p className="mt-4 text-base leading-relaxed text-[#6b6f82]">
              Get started for Free and see how quickly AdultEd Pro can help your business,
              large or small.
            </p>
          </div>

          {/* IMAGE CARD EXACTLY LIKE SCREENSHOT */}
          <div className="rounded-3xl bg-[#5b2bff] w-full max-w-[700px] h-[350px] flex items-center justify-center overflow-hidden shadow-lg">
            <img
              src="/images/evoloo.png"
              alt="Evolo AI dashboard preview"
              className="w-full h-[100%] "
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="md:w-3/5 md:border-l md:border-[#eceffe] md:pl-10">
          <form className="grid gap-6 md:grid-cols-2">

            <label className="flex flex-col text-sm font-semibold text-[#1c1c2e]">
              Full Name
              <input
                type="text"
                placeholder="Placeholder"
                className="mt-2 rounded-2xl border border-[#dfe3f0] bg-[#fbfbff] px-4 py-3 
                text-base font-normal text-[#1c1c2e] outline-none transition 
                focus:border-[#5b2bff] focus:bg-white"
              />
            </label>

            <label className="flex flex-col text-sm font-semibold text-[#1c1c2e]">
              Email
              <input
                type="email"
                placeholder="Placeholder"
                className="mt-2 rounded-2xl border border-[#dfe3f0] bg-[#fbfbff] px-4 py-3 
                text-base font-normal text-[#1c1c2e] outline-none transition 
                focus:border-[#5b2bff] focus:bg-white"
              />
            </label>

            <label className="flex flex-col text-sm font-semibold text-[#1c1c2e]">
              Phone Number
              <input
                type="tel"
                placeholder="Placeholder"
                className="mt-2 rounded-2xl border border-[#dfe3f0] bg-[#fbfbff] px-4 py-3 
                text-base font-normal text-[#1c1c2e] outline-none transition 
                focus:border-[#5b2bff] focus:bg-white"
              />
            </label>

            <label className="flex flex-col text-sm font-semibold text-[#1c1c2e]">
              Role
              <select
                className="mt-2 rounded-2xl border border-[#dfe3f0] bg-[#fbfbff] px-4 py-3 
                text-base font-normal text-[#1c1c2e] outline-none transition 
                focus:border-[#5b2bff] focus:bg-white"
                defaultValue=""
              >
                <option value="" disabled>
                  Please Select
                </option>
                <option value="administrator">Administrator</option>
                <option value="counselor">Counselor</option>
                <option value="instructor">Instructor</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label className="flex flex-col text-sm font-semibold text-[#1c1c2e]">
              School
              <input
                type="text"
                placeholder="Placeholder"
                className="mt-2 rounded-2xl border border-[#dfe3f0] bg-[#fbfbff] px-4 py-3 
                text-base font-normal text-[#1c1c2e] outline-none transition 
                focus:border-[#5b2bff] focus:bg-white"
              />
            </label>

            <label className="flex flex-col text-sm font-semibold text-[#1c1c2e]">
              Certificate Number (If Any)
              <input
                type="text"
                placeholder="Placeholder"
                className="mt-2 rounded-2xl border border-[#dfe3f0] bg-[#fbfbff] px-4 py-3
                text-base font-normal text-[#1c1c2e] outline-none transition 
                focus:border-[#5b2bff] focus:bg-white"
              />
            </label>

            <label className="flex flex-col text-sm font-semibold text-[#1c1c2e] md:col-span-2 md:max-w-[360px]">
              Consortium
              <input
                type="text"
                placeholder="Placeholder"
                className="mt-2 rounded-2xl border border-[#dfe3f0] bg-[#fbfbff] px-4 py-3 
                text-base font-normal text-[#1c1c2e] outline-none transition 
                focus:border-[#5b2bff] focus:bg-white"
              />
            </label>

            <label className="flex flex-col text-sm font-semibold text-[#1c1c2e] md:col-span-2">
              Message
              <textarea
                rows="4"
                placeholder="Placeholder"
                className="mt-2 rounded-2xl border border-[#dfe3f0] bg-[#fbfbff] px-4 py-3 
                text-base font-normal text-[#1c1c2e] outline-none transition 
                focus:border-[#5b2bff] focus:bg-white"
              />
            </label>

            <div className="md:col-span-2">
              <button
                type="button"
                className="flex items-center gap-2 rounded-2xl bg-gradient-to-r 
                from-[#5627ff] to-[#7b52ff] px-8 py-3 text-sm font-semibold text-white 
                shadow-[0_15px_30px_rgba(93,62,255,0.35)] transition hover:opacity-95"
              >
                Submit
                <span aria-hidden="true">→</span>
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default InsForm;

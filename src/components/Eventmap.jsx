import React from "react";

const EventMap = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-[1fr_minmax(0,1.05fr)]">
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#33385c]">
              Tagline
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight text-[#151740]">
              Fill in your <span className="text-[#492dff]">information</span>{" "}
              below
            </h2>
            <p className="mt-4 text-lg text-[#666a83]">
              Get started for Free and see how quickly AdultEd Pro can help your
              business, large or small
            </p>
          </div>

          <div className="flex items-start gap-3 text-[#10122a]">
            <span className="text-2xl" aria-hidden="true">
              📅
            </span>
            <div>
              <p className="font-semibold text-[#1b1d3e]">
                24th September to 26th September
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-[#10122a]">
            <span className="text-2xl" aria-hidden="true">
              📍
            </span>
            <div>
              <p className="font-semibold text-[#1b1d3e]">
                Anaheim Marriott 700 W Convention Way Anaheim CA 92802
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-[0_18px_45px_rgba(12,11,66,0.12)] border border-[#e5e7f2]">
            <iframe
              title="Anaheim Marriott location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.152051772194!2d-117.9201299242981!3d33.801856972855045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2933d71f7611%3A0x7c2191e55333dcb5!2sAnaheim%20Marriott!5e0!3m2!1sen!2sus!4v1735743188038!5m2!1sen!2sus"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[280px]"
            />
          </div>
        </div>

        <div className="md:border-l md:border-[#e8e9f5] md:pl-12">
          <form className="grid gap-6 md:grid-cols-2">
            <label className="flex flex-col text-sm font-semibold text-[#12132e]">
              Full Name
              <input
                type="text"
                placeholder="Placeholder"
                className="mt-2 rounded-2xl border border-[#dfe3f0] bg-white px-4 py-3 text-base font-normal text-[#1c1c2e] outline-none transition focus:border-[#5b2bff] focus:bg-white"
              />
            </label>

            <label className="flex flex-col text-sm font-semibold text-[#12132e]">
              Email
              <input
                type="email"
                placeholder="Placeholder"
                className="mt-2 rounded-2xl border border-[#dfe3f0] bg-white px-4 py-3 text-base font-normal text-[#1c1c2e] outline-none transition focus:border-[#5b2bff] focus:bg-white"
              />
            </label>

            <label className="flex flex-col text-sm font-semibold text-[#12132e]">
              Phone Number
              <input
                type="tel"
                placeholder="Placeholder"
                className="mt-2 rounded-2xl border border-[#dfe3f0] bg-white px-4 py-3 text-base font-normal text-[#1c1c2e] outline-none transition focus:border-[#5b2bff] focus:bg-white"
              />
            </label>

            <label className="flex flex-col text-sm font-semibold text-[#12132e]">
              Role
              <select
                className="mt-2 rounded-2xl border border-[#dfe3f0] bg-white px-4 py-3 text-base font-normal text-[#1c1c2e] outline-none transition focus:border-[#5b2bff] focus:bg-white"
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

            <label className="flex flex-col text-sm font-semibold text-[#12132e]">
              School
              <input
                type="text"
                placeholder="Placeholder"
                className="mt-2 rounded-2xl border border-[#dfe3f0] bg-white px-4 py-3 text-base font-normal text-[#1c1c2e] outline-none transition focus:border-[#5b2bff] focus:bg-white"
              />
            </label>

            <label className="flex flex-col text-sm font-semibold text-[#12132e]">
              Certificate Number (If Any)
              <input
                type="text"
                placeholder="Placeholder"
                className="mt-2 rounded-2xl border border-[#dfe3f0] bg-white px-4 py-3 text-base font-normal text-[#1c1c2e] outline-none transition focus:border-[#5b2bff] focus:bg-white"
              />
            </label>

            <label className="flex flex-col text-sm font-semibold text-[#12132e] md:col-span-2">
              Consortium
              <input
                type="text"
                placeholder="Placeholder"
                className="mt-2 rounded-2xl border border-[#dfe3f0] bg-white px-4 py-3 text-base font-normal text-[#1c1c2e] outline-none transition focus:border-[#5b2bff] focus:bg-white"
              />
            </label>

            <label className="flex flex-col text-sm font-semibold text-[#12132e] md:col-span-2">
              Message
              <textarea
                rows="4"
                placeholder="Placeholder"
                className="mt-2 rounded-2xl border border-[#dfe3f0] bg-white px-4 py-3 text-base font-normal text-[#1c1c2e] outline-none transition focus:border-[#5b2bff] focus:bg-white"
              />
            </label>

            <div className="md:col-span-2">
              <button
                type="button"
                className="flex items-center gap-2 rounded-2xl bg-[#611dff] px-8 py-3 text-sm font-semibold text-white shadow-[0_15px_30px_rgba(97,29,255,0.35)] transition hover:opacity-95"
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

export default EventMap;

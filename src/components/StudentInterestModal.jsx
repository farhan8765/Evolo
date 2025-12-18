import React, { useMemo, useState } from "react";

const STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const StudentInterestModal = ({ open, onClose }) => {
  const [formValues, setFormValues] = useState({
    email: "",
    name: "",
    program: "",
    state: "",
    school: "",
  });

  const sortedStates = useMemo(() => STATES.slice().sort(), []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Future hook: send to API, for now just close modal after quick validation
    onClose?.(formValues);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 px-4">
      <div className="relative w-full max-w-xl rounded-[32px] border border-[#DFE7EF] bg-white p-5 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={() => onClose?.()}
          className="absolute right-5 top-5 text-[#90A3B0] transition hover:text-[#5E2BFF]"
          aria-label="Close"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F2634C]">
            Student Sign Up
          </p>
          <h3 className="mt-3 text-3xl font-bold text-[#131834]">
            Gain a head start with Evolo
          </h3>
          <p className="mt-2 text-base text-[#4D5A68]">
            Share a few details and we will help you connect with the right program.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col text-sm font-semibold text-[#17223A]">
              Email <span className="text-[#F2634C]">*</span>
              <input
                type="email"
                required
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="John@gmail.com"
                className="mt-2 rounded-3xl border border-[#D5DCE8] bg-[#F5F8FC] px-5 py-3 text-base text-[#1F2A37] outline-none focus:border-[#5E2BFF]"
              />
            </label>
            <label className="flex flex-col text-sm font-semibold text-[#17223A]">
              Name <span className="text-[#F2634C]">*</span>
              <input
                type="text"
                required
                name="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="mt-2 rounded-3xl border border-[#D5DCE8] bg-[#F5F8FC] px-5 py-3 text-base text-[#1F2A37] outline-none focus:border-[#5E2BFF]"
              />
            </label>
          </div>

          <label className="flex flex-col text-sm font-semibold text-[#17223A]">
            Program Name
            <input
              type="text"
              name="program"
              value={formValues.program}
              onChange={handleChange}
              placeholder="e.g. Surgical Tech, Cybersecurity"
              className="mt-2 rounded-3xl border border-[#D5DCE8] bg-[#F5F8FC] px-5 py-3 text-base text-[#1F2A37] outline-none focus:border-[#5E2BFF]"
            />
          </label>

          <label className="flex flex-col text-sm font-semibold text-[#17223A]">
            States
            <select
              name="state"
              value={formValues.state}
              onChange={handleChange}
              className="mt-2 appearance-none rounded-3xl border border-[#D5DCE8] bg-[#F5F8FC] px-5 py-3 text-base text-[#1F2A37] outline-none focus:border-[#5E2BFF]"
            >
              <option value="">Please Select</option>
              {sortedStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col text-sm font-semibold text-[#17223A]">
            Schools
            <input
              type="text"
              name="school"
              value={formValues.school}
              onChange={handleChange}
              placeholder="Monrovia Adult school"
              className="mt-2 rounded-3xl border border-[#D5DCE8] bg-[#F5F8FC] px-5 py-3 text-base text-[#1F2A37] outline-none focus:border-[#5E2BFF]"
            />
          </label>

          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex rounded-full bg-[#F2634C] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#E2543D]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentInterestModal;

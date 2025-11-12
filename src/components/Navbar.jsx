import React, { useState } from "react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const NAV_ITEMS = [
    { label: "Home", active: true },
    {
      label: "Solutions",
      hasDropdown: true,
      subItems: [
        {
          name: "Adult Education",
          description: [
            "Students",
            "Employers",
            "Institutions",
          ],
        },
        {
          name: "K-12 Mental Health (CYBHI)",
          description: [
            "Counselors",
            "Administrators",
            "Districts",
          ],
        },
      ],
    },
    { label: "Resources" },
    { label: "About us", hasDropdown: true },
    { label: "Events", hasDropdown: true },
  ];

  return (
<nav className="absolute top-12 left-1/2 -translate-x-1/2 w-[92%] bg-white rounded-2xl shadow-lg z-50 px-6 py-3">      <div className="w-full max-w-6xl bg-[#f9f8ff] rounded-3xl shadow-[0px_18px_32px_rgba(0,0,0,0.08)] flex items-center justify-between px-8 py-4 font-[Inter,sans-serif]">
        {/* Logo */}
      <div className="flex items-center gap-3">
  <div className="w-11 h-11 rounded-xl bg-[#ece9ff] flex justify-center items-center overflow-hidden">
    <img
      src="/images/Vector.png"  // <-- replace with your logo path
      alt="Evolo AI Logo"
      className="w-7 h-7 object-contain"
    />
  </div>
  <span className="text-[20px] font-semibold text-[#5533ff]">
    Evolo AI
  </span>
</div>


        {/* Menu */}
        <div className="hidden md:flex flex-1 justify-center gap-10">
          {NAV_ITEMS.map(({ label, active, hasDropdown, subItems }) => (
            <div
              key={label}
              className="relative group"
              onMouseEnter={() =>
                hasDropdown && setOpenDropdown(label)
              }
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === label ? null : label
                  )
                }
                className={`flex items-center gap-1 text-[16px] font-medium transition ${
                  active
                    ? "text-[#6b3dff] font-semibold"
                    : "text-[#6f7177] hover:text-[#6b3dff]"
                }`}
              >
                {label}
                {hasDropdown && (
                  <svg
                    viewBox="0 0 12 7"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 text-current"
                  >
                    <path
                      d="M1 1.5L6 6l5-4.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>

              {/* First-level dropdown */}
              {hasDropdown && subItems && (
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-10 bg-white rounded-2xl shadow-lg p-5 grid grid-cols-1 sm:grid-cols-2 gap-8 min-w-[360px] transition-all duration-200 ${
                    openDropdown === label
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  {subItems.map((item) => (
                    <div key={item.name} className="flex flex-col gap-2">
                      <span className="text-[16px] font-semibold text-[#1f2233]">
                        {item.name}
                      </span>
                      {item.description ? (
                        <div className="flex flex-col gap-1">
                          {item.description.map((desc) => (
                            <span
                              key={desc}
                              className="text-[14px] text-[#5d5f66] hover:text-[#6b3dff] cursor-pointer transition"
                            >
                              {desc}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-[14px] text-[#5d5f66] hover:text-[#6b3dff] cursor-pointer transition">
                          Learn more
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="px-6 py-2.5 bg-[#6b3dff] text-white rounded-full font-semibold text-[15px] shadow-[0px_6px_12px_rgba(107,61,255,0.32)] hover:bg-[#5327ff] transition">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

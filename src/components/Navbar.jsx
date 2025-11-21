import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// const ANNOUNCEMENT_TEXT =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const NAV_TABS = [
  { label: "Home", path: "/" },
  {
    label: "Solutions",
    columns: [
      {
        title: "Adult Education",
        path: "/adult",
        items: [
          { label: "Student", path: "/student" },
          { label: "Employers", path: "/employee" },
          { label: "Institutions", path: "/institute" },
        ],
      },
      {
        title: "K-12 Mental Health (CYBHI)",
        items: [
          { label: "Counselors", path: "/counselors" },
          { label: "Administrators", path: "/administrators" },
          { label: "Districts", path: "/districts" },
        ],
      },
    ],
  },
  { label: "Resources", path: "/resources" },
  {
    label: "About us",
    path: null,
    subItems: [
      { label: "About Evolo", path: "/about" },
      { label: "FAQs", path: "/faqs" },
    ],
  },
  {
    label: "Events",
    path: null,
    subItems: [
      { label: "Upcoming Events", path: "/events" },
      { label: "Past Events", path: "/events" },
    ],
  },
];

const DropdownIcon = ({ open }) => (
  <svg
    viewBox="0 0 12 7"
    xmlns="http://www.w3.org/2000/svg"
    className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
  >
    <path
      d="M1 1.5L6 6l5-4.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar = () => {
  const [openTab, setOpenTab] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef();

  const handleNavigate = (path) => {
    if (!path) return;
    navigate(path);
  };

  const toggleDropdown = (label) => {
    setOpenTab((prev) => (prev === label ? null : label));
  };

  // Close dropdown whenever route changes so other nav items stay accessible
  useEffect(() => {
    setOpenTab(null);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenTab(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-[#F3F2F9] text-[#5C6174]">
      {/* <div className="bg-gradient-to-r from-[#161AA5] via-[#3719C8] to-[#5616D8] px-4 py-2 text-center text-xs font-medium text-white md:text-sm">
        {ANNOUNCEMENT_TEXT}
      </div> */}
      <nav className="w-full px-4 py-6">
        <div
          ref={navRef}
          className="mx-auto flex w-full max-w-5xl items-center justify-between gap-6 rounded-[32px] border border-[#EAECF4] bg-white px-6 py-4 shadow-[0px_25px_60px_rgba(27,16,63,0.12)]"
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E1DFFC] bg-white">
              <img
                src="/images/Vector.png"
                alt="Evolo AI logo"
                className="h-7 w-7 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-[#2B1BDD]">Evolo AI</span>
          </div>

          {/* Nav links */}
          <div className="hidden items-center gap-8 text-[15px] font-medium md:flex">
            {NAV_TABS.map(({ label, path, subItems, columns }) => {
              const isActive =
                path === location.pathname ||
                (subItems &&
                  subItems.some((item) => item.path === location.pathname)) ||
                (columns &&
                  columns.some(
                    (group) =>
                      group.path === location.pathname ||
                      group.items.some((item) => item.path === location.pathname)
                  ));

              return (
                <div key={label} className="relative">
                  <div
                    onClick={() =>
                      subItems || columns
                        ? toggleDropdown(label)
                        : handleNavigate(path)
                    }
                    className={`flex cursor-pointer select-none items-center gap-2 transition-colors ${
                      isActive
                        ? "text-[#5C2DD5] font-semibold"
                        : "text-[#4D4F58] hover:text-[#5C2DD5]"
                    }`}
                  >
                    {label}
                    {(subItems || columns) && (
                      <DropdownIcon open={openTab === label} />
                    )}
                  </div>

                  {/* Dropdown */}
                  {subItems && openTab === label && (
                    <div className="absolute left-1/2 top-9 z-30 w-52 -translate-x-1/2 rounded-2xl border border-[#E7E5F5] bg-white py-3 text-[14px] text-[#1b1833] shadow-[0px_20px_45px_rgba(30,22,51,0.12)]">
                      {subItems.map((item) => (
                        <div
                          key={item.label}
                          onClick={() => handleNavigate(item.path)}
                          className={`block w-full cursor-pointer px-5 py-2 text-left transition hover:bg-[#F4F2FF] ${
                            location.pathname === item.path
                              ? "text-[#5C2DD5] font-semibold"
                              : ""
                          }`}
                        >
                          {item.label}
                        </div>
                      ))}
                    </div>
                  )}

                  {columns && openTab === label && (
                    <div className="absolute left-1/2 top-11 z-30 w-[520px] -translate-x-1/2 rounded-3xl border border-[#E1E3EF] bg-white py-6 shadow-[0px_25px_60px_rgba(27,16,63,0.12)]">
                      <div className="grid gap-10 px-8 md:grid-cols-2">
                        {columns.map((group) => (
                          <div key={group.title}>
                            {group.path ? (
                              <button
                                type="button"
                                onClick={() => handleNavigate(group.path)}
                                className={`text-left text-[16px] font-semibold transition hover:text-[#5C2DD5] ${
                                  location.pathname === group.path
                                    ? "text-[#5C2DD5]"
                                    : "text-[#151532]"
                                }`}
                              >
                                {group.title}
                              </button>
                            ) : (
                              <p className="text-[16px] font-semibold text-[#151532]">
                                {group.title}
                              </p>
                            )}
                            <div className="mt-4 flex flex-col gap-2 text-[14px] text-[#4D4F58]">
                              {group.items.map((item) => (
                                <button
                                  key={item.label}
                                  type="button"
                                  onClick={() => handleNavigate(item.path)}
                                  className={`w-full text-left transition hover:text-[#5C2DD5] ${
                                    location.pathname === item.path
                                      ? "text-[#5C2DD5] font-semibold"
                                      : ""
                                  }`}
                                >
                                  {item.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact */}
          <button
            type="button"
            onClick={() => handleNavigate("/contact")}
            className={`hidden rounded-xl px-6 py-2.5 text-sm font-semibold text-white shadow-[0px_18px_30px_rgba(92,45,213,0.25)] transition-colors md:inline-flex ${
              location.pathname === "/contact"
                ? "bg-[#4C2CC9]"
                : "bg-[#5C2DD5] hover:bg-[#4C1DBC]"
            }`}
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

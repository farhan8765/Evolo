import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NAV_TABS = [
  { label: "Home", path: "/" },
  { label: "Students", path: "/student" },
  { label: "Employers", path: "/employee" },
  { label: "Institutions", path: "/institute" },
  {
    label: "About Us",
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
    <nav ref={navRef} className="w-full bg-white py-4 text-[#5A666E] shadow-lg">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 md:px-0">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
            <img
              src="/images/Vector.png"
              alt="Evolo AI logo"
              className="h-7 w-7 object-contain"
            />
          </div>
          <span className="text-xl text-[#2B1BDD] font-bold">Evolo AI</span>
        </div>

        {/* Nav links */}
        <div className="hidden items-center gap-10 text-[15px] font-medium md:flex">
          {NAV_TABS.map(({ label, path, subItems }) => {
            const isActive =
              path === location.pathname ||
              (subItems &&
                subItems.some((item) => item.path === location.pathname));

            return (
              <div key={label} className="relative">
                <div
                  onClick={() =>
                    subItems ? toggleDropdown(label) : handleNavigate(path)
                  }
                  className={`flex items-center gap-2 cursor-pointer select-none ${
                    isActive ? "text-[#2B1BDD] font-semibold" : "hover:text-[#2B1BDD]"
                  }`}
                >
                  {label}
                  {subItems && <DropdownIcon open={openTab === label} />}
                </div>

                {/* Dropdown */}
                {subItems && openTab === label && (
                  <div className="absolute left-1/2 top-9 w-52 -translate-x-1/2 rounded-2xl bg-white py-3 text-[14px] text-[#1b1833] shadow-xl z-30">
                    {subItems.map((item) => (
                      <div
                        key={item.label}
                        onClick={() => handleNavigate(item.path)}
                        className={`block w-full px-5 py-2 text-left cursor-pointer transition hover:bg-[#f2f1ff] ${
                          location.pathname === item.path
                            ? "text-[#2B1BDD] font-semibold"
                            : ""
                        }`}
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact */}
        <div
          onClick={() => handleNavigate("/contact")}
          className={`rounded-md border border-white/40 px-5 py-2 text-sm font-semibold uppercase tracking-wide cursor-pointer transition ${
            location.pathname === "/contact"
              ? "bg-white text-[#130046]"
              : "bg-[#2B1BDD] text-white hover:bg-white hover:text-[#130046]"
          }`}
        >
          Contact
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

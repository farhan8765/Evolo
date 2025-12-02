import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
        path: "/mental",
        items: [
          { label: "Counselors", path: "/counselors" },
          { label: "Administrators", path: "/administrators" },
          { label: "Classified Staff", path: "/districts" },
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
      { label: "Past Events", path: "/eventone" },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef();

  const handleNavigate = (path) => {
    if (!path) return;
    navigate(path);
    setMobileMenuOpen(false);
  };

  const toggleDropdown = (label) => {
    setOpenTab((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    setOpenTab(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Desktop-only: mobile drawer is rendered outside navRef,
      // so we don't want to immediately close dropdowns on mobile.
      if (mobileMenuOpen) return;

      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenTab(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="w-full text-[#5C6174]">
      <nav className="w-full px-4 py-6">
        <div
          ref={navRef}
          className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 rounded-[32px] border border-[#EAECF4] bg-white px-6 py-4"
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/images/evolologo.png"
              alt="Evolo AI logo"
              className="h-8 w-auto object-contain cursor-pointer"
              onClick={() => handleNavigate("/")}
            />
          </div>

          {/* Desktop Nav links */}
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

          {/* Desktop Contact */}
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

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-[#5C2DD5] transition-all ${
                mobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-[#5C2DD5] transition-all ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-[#5C2DD5] transition-all ${
                mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-40 bg-black/50 transition-opacity md:hidden ${
            mobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => {
            setMobileMenuOpen(false);
            setOpenTab(null);
          }}
        >
          <div
            className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-xl transition-transform ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex h-full flex-col overflow-y-auto">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between border-b border-[#EAECF4] px-6 py-5">
                <img
                  src="/images/evolologo.png"
                  alt="Evolo AI logo"
                  className="h-10 w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#4D4F58]"
                  aria-label="Close menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Nav Items */}
              <div className="flex-1 px-6 py-4">
                {NAV_TABS.map(({ label, path, subItems, columns }) => {
                  const isActive =
                    path === location.pathname ||
                    (subItems &&
                      subItems.some(
                        (item) => item.path === location.pathname
                      )) ||
                    (columns &&
                      columns.some(
                        (group) =>
                          group.path === location.pathname ||
                          group.items.some(
                            (item) => item.path === location.pathname
                          )
                      ));

                  return (
                    <div key={label} className="border-b border-[#EAECF4] py-3">
                      <div
                        onClick={() =>
                          subItems || columns
                            ? toggleDropdown(label)
                            : handleNavigate(path)
                        }
                        className={`flex cursor-pointer items-center justify-between text-[15px] font-medium ${
                          isActive
                            ? "text-[#5C2DD5] font-semibold"
                            : "text-[#4D4F58]"
                        }`}
                      >
                        {label}
                        {(subItems || columns) && (
                          <DropdownIcon open={openTab === label} />
                        )}
                      </div>

                      {/* Mobile Dropdown - subItems */}
                      {subItems && openTab === label && (
                        <div className="mt-3 space-y-2 pl-4">
                          {subItems.map((item) => (
                            <div
                              key={item.label}
                              onClick={() => handleNavigate(item.path)}
                              className={`cursor-pointer py-2 text-[14px] ${
                                location.pathname === item.path
                                  ? "text-[#5C2DD5] font-semibold"
                                  : "text-[#4D4F58]"
                              }`}
                            >
                              {item.label}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Mobile Dropdown - columns */}
                      {columns && openTab === label && (
                        <div className="mt-3 space-y-4 pl-4">
                          {columns.map((group) => (
                            <div key={group.title}>
                              {group.path ? (
                                <button
                                  type="button"
                                  onClick={() => handleNavigate(group.path)}
                                  className={`text-left text-[15px] font-semibold ${
                                    location.pathname === group.path
                                      ? "text-[#5C2DD5]"
                                      : "text-[#151532]"
                                  }`}
                                >
                                  {group.title}
                                </button>
                              ) : (
                                <p className="text-[15px] font-semibold text-[#151532]">
                                  {group.title}
                                </p>
                              )}
                              <div className="mt-2 space-y-2 pl-3">
                                {group.items.map((item) => (
                                  <button
                                    key={item.label}
                                    type="button"
                                    onClick={() => handleNavigate(item.path)}
                                    className={`block w-full text-left text-[14px] ${
                                      location.pathname === item.path
                                        ? "text-[#5C2DD5] font-semibold"
                                        : "text-[#4D4F58]"
                                    }`}
                                  >
                                    {item.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Mobile Contact Button */}
              <div className="border-t border-[#EAECF4] p-6">
                <button
                  type="button"
                  onClick={() => handleNavigate("/contact")}
                  className={`w-full rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-[0px_18px_30px_rgba(92,45,213,0.25)] transition-colors ${
                    location.pathname === "/contact"
                      ? "bg-[#4C2CC9]"
                      : "bg-[#5C2DD5]"
                  }`}
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
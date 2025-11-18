// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const navigate = useNavigate();

//   const NAV_ITEMS = [
//     { label: "Home", active: true, path: "/" },
//     {
//       label: "Solutions",
//       hasDropdown: true,
//       subItems: [
//         {
//           name: "Adult Education",
//           path: "/adult",
//           description: [
//             { label: "Students", path: "/student" },
//             { label: "Employers", path: "/employee" },
//             { label: "Institutions", path: "/institute" },
//           ],
//         },
//         {
//           name: "K-12 Mental Health (CYBHI)",
//           description: [
//             { label: "Counselors" },
//             { label: "Administrators" },
//             { label: "Districts" },
//           ],
//         },
//       ],
//     },
//     { label: "Resources", path: "/resources" },
//     {
//       label: "About us",
//       hasDropdown: true,
//       subItems: [
//         {
//           name: "Learn more",
//           description: [
//             { label: "About Evolo", path: "/about" },
//             { label: "FAQs", path: "/faqs" },
//           ],
//         },
//       ],
//     },
//     { label: "Events", path: "/events" },
//   ];

//   const handleNavigate = (path) => {
//     if (!path) return;
//     navigate(path);
//     setOpenDropdown(null);
//   };

//   return (
// <nav className="absolute top-12 left-1/2 -translate-x-1/2 w-[92%] bg-white rounded-2xl shadow-lg z-50 px-6 py-3">      <div className="w-full max-w-6xl bg-[#f9f8ff] rounded-3xl shadow-[0px_18px_32px_rgba(0,0,0,0.08)] flex items-center justify-between px-8 py-4 font-[Inter,sans-serif]">
//         {/* Logo */}
//       <div className="flex items-center gap-3">
//   <div className="w-11 h-11 rounded-xl bg-[#ece9ff] flex justify-center items-center overflow-hidden">
//     <img
//       src="/images/Vector.png"  // <-- replace with your logo path
//       alt="Evolo AI Logo"
//       className="w-7 h-7 object-contain"
//     />
//   </div>
//   <span className="text-[20px] font-semibold text-[#5533ff]">
//     Evolo AI
//   </span>
// </div>


//         {/* Menu */}
//         <div className="hidden md:flex flex-1 justify-center gap-10">
//           {NAV_ITEMS.map(({ label, active, hasDropdown, subItems, path }) => (
//             <div
//               key={label}
//               className="relative group"
//               onMouseEnter={() =>
//                 hasDropdown && setOpenDropdown(label)
//               }
//               onMouseLeave={() => setOpenDropdown(null)}
//             >
//               <button
//                 onClick={() => {
//                   if (hasDropdown) {
//                     setOpenDropdown(
//                       openDropdown === label ? null : label
//                     );
//                   } else {
//                     handleNavigate(path);
//                   }
//                 }}
//                 className={`flex items-center gap-1 text-[16px] font-medium transition ${
//                   active
//                     ? "text-[#6b3dff] font-semibold"
//                     : "text-[#6f7177] hover:text-[#6b3dff]"
//                 }`}
//               >
//                 {label}
//                 {hasDropdown && (
//                   <svg
//                     viewBox="0 0 12 7"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-3 h-3 text-current"
//                   >
//                     <path
//                       d="M1 1.5L6 6l5-4.5"
//                       stroke="currentColor"
//                       strokeWidth="1.6"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 )}
//               </button>

//               {/* First-level dropdown */}
//               {hasDropdown && subItems && (
//                 <div
//                   className={`absolute left-1/2 -translate-x-1/2 top-10 bg-white rounded-2xl shadow-lg p-5 grid grid-cols-1 sm:grid-cols-2 gap-8 min-w-[360px] transition-all duration-200 ${
//                     openDropdown === label
//                       ? "opacity-100 visible"
//                       : "opacity-0 invisible"
//                   }`}
//                 >
//                   {subItems.map((item) => (
//                     <div key={item.name} className="flex flex-col gap-2">
//                       {item.path ? (
//                         <button
//                           onClick={() => handleNavigate(item.path)}
//                           className="text-left text-[16px] font-semibold text-[#1f2233] hover:text-[#6b3dff] transition"
//                         >
//                           {item.name}
//                         </button>
//                       ) : (
//                         <span className="text-[16px] font-semibold text-[#1f2233]">
//                           {item.name}
//                         </span>
//                       )}
//                       {item.description ? (
//                         <div className="flex flex-col gap-1">
//                           {item.description.map((desc) =>
//                             desc.path ? (
//                               <button
//                                 key={desc.label}
//                                 onClick={() => handleNavigate(desc.path)}
//                                 className="text-left text-[14px] text-[#5d5f66] hover:text-[#6b3dff] cursor-pointer transition"
//                               >
//                                 {desc.label}
//                               </button>
//                             ) : (
//                               <span
//                                 key={desc.label}
//                                 className="text-[14px] text-[#5d5f66] cursor-default"
//                               >
//                                 {desc.label}
//                               </span>
//                             )
//                           )}
//                         </div>
//                       ) : (
//                         <span className="text-[14px] text-[#5d5f66] hover:text-[#6b3dff] cursor-pointer transition">
//                           Learn more
//                         </span>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <button
//           onClick={() => handleNavigate("/contact")}
//           className="px-6 py-2.5 bg-[#6b3dff] text-white rounded-full font-semibold text-[15px] shadow-[0px_6px_12px_rgba(107,61,255,0.32)] hover:bg-[#5327ff] transition"
//         >
//           Contact Us
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







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

  // Keep dropdown open if child route is active
  useEffect(() => {
    NAV_TABS.forEach((tab) => {
      if (
        tab.subItems &&
        tab.subItems.some((item) => item.path === location.pathname)
      ) {
        setOpenTab(tab.label);
      }
    });
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
                  <div className="absolute left-1/2 top-9 w-52 -translate-x-1/2 rounded-2xl bg-white py-3 text-[14px] text-[#1b1833] shadow-xl">
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

import React from "react";
import { FiCheck, FiCircle } from "react-icons/fi";

const FUNCTION_CARDS = [
  {
    title: "Timezone Detection",
    icon: "check",
    line1: "Ensure the app can detect and adjust to the user's current timezone automatically.",
    subTitle: "W3C Relevance/Considerations",
    line2: "Device capabilities API usage, potential privacy considerations for location data."
  },
  {
    title: "Automatic Timezone Adjustment",
    icon: "check",
    line1: "Automatically adjust the displayed time based on the detected timezone.",
    subTitle: "W3C Relevance/Considerations",
    line2: "User experience, consistency."
  },
  {
    title: "Multilingual Support",
    icon: "check",
    line1: "Support multiple languages, including text, images, and region-specific content.",
    subTitle: "W3C Relevance/Considerations",
    line2: "I18n best practices, text direction (CSS), language tags (HTML)."
  },
  {
    title: "Cultural Sensitivity",
    icon: "check",
    line1: "Use culturally appropriate elements (design, colors, images, references).",
    subTitle: "W3C Relevance/Considerations",
    line2: "User experience, inclusivity."
  },
  {
    title: "Date and Number Formatting",
    icon: "check",
    line1: "Format data based on local standards (e.g., dd/mm/yyyy).",
    subTitle: "W3C Relevance/Considerations",
    line2: "I18n best practices."
  },
  {
    title: "Screen Size Adaptability",
    icon: "check",
    line1: "Optimize layout for different screen sizes and resolutions.",
    subTitle: "W3C Relevance/Considerations",
    line2: "Responsive Web Design (CSS media queries, viewport meta tag)."
  },
  {
    title: "Orientation Support",
    icon: "check",
    line1: "Support both portrait and landscape orientations.",
    subTitle: "W3C Relevance/Considerations",
    line2: "CSS layout techniques (Flexbox, Grid)."
  },
  {
    title: "User Authentication",
    icon: "check",
    line1: "Secure user login system.",
    subTitle: "W3C Relevance/Considerations",
    line2: "WCAG-compliant authentication methods."
  },
  {
    title: "Push Notification Preferences",
    icon: "check",
    line1: "Let users manage or disable notifications.",
    subTitle: "W3C Relevance/Considerations",
    line2: "User privacy and control."
  },
  {
    title: "Graceful Error Handling",
    icon: "check",
    line1: "Show clear error messages when connectivity is lost.",
    subTitle: "W3C Relevance/Considerations",
    line2: "Usability and accessibility."
  },
  {
    title: "Screen Reader Compatibility",
    icon: "check",
    line1: "Ensure screen reader support for visually impaired users.",
    subTitle: "W3C Relevance/Considerations",
    line2: "WCAG 2.1 (alt text, ARIA attributes)."
  },
  {
    title: "High Contrast Support",
    icon: "check",
    line1: "Ensure high contrast between text and backgrounds.",
    subTitle: "W3C Relevance/Considerations",
    line2: "WCAG 2.1 contrast minimum standards."
  },
  {
    title: "Data Encryption",
    icon: "check",
    line1: "Encrypt sensitive data in transit and at rest.",
    subTitle: "W3C Relevance/Considerations",
    line2: "Web security (HTTPS), secure storage."
  },
  {
    title: "Privacy Settings",
    icon: "check",
    line1: "Allow users to control data sharing preferences.",
    subTitle: "W3C Relevance/Considerations",
    line2: "Transparency and data protection principles."
  },
  {
    title: "UI Design Consistency",
    icon: "check",
    line1: "Follow platform-specific UI guidelines.",
    subTitle: "W3C Relevance/Considerations",
    line2: "Consistent navigation improves accessibility."
  },
  {
    title: "App Speed and Responsiveness",
    icon: "check",
    line1: "Ensure minimal lag and responsiveness.",
    subTitle: "W3C Relevance/Considerations",
    line2: "Best practices in front-end performance optimization."
  },
  {
    title: "Over-the-Air Updates",
    icon: "check",
    line1: "Allow easy updates without losing user data.",
    subTitle: "W3C Relevance/Considerations",
    line2: "Enhances user accessibility and continuity."
  },
  {
    title: "App Permissions",
    icon: "check",
    line1: "Be transparent about app permissions and give users control.",
    subTitle: "W3C Relevance/Considerations",
    line2: "User trust, privacy laws compliance."
  },
  {
    title: "Timezone Switching",
    icon: "circle",
    line1: "Let users manually change time zones.",
    subTitle: "W3C Relevance/Considerations",
    line2: "User accessibility control."
  },
  {
    title: "Social Media Sign-ins",
    icon: "circle",
    line1: "Allow sign-in via Google, Facebook, Apple ID, etc.",
    subTitle: "W3C Relevance/Considerations",
    line2: "Reduces login barriers; accessibility boost."
  },
  {
    title: "Two-Factor Authentication",
    icon: "circle",
    line1: "Add 2FA for enhanced account security.",
    subTitle: "W3C Relevance/Considerations",
    line2: "Security best practices."
  },
  {
    title: "Time-sensitive Notifications",
    icon: "check",
    line1: "Send alerts based on the user’s timezone preferences.",
    subTitle: "W3C Relevance/Considerations",
    line2: "User respect, optimized engagement."
  },
  {
    title: "Offline Mode",
    icon: "circle",
    line1: "Let users access basic features without the internet.",
    subTitle: "W3C Relevance/Considerations",
    line2: "Service Workers and Cache API."
  },
  {
    title: "Voice Control",
    icon: "check",
    line1: "Enable voice command features for accessibility.",
    subTitle: "W3C Relevance/Considerations",
    line2: "WCAG Input Modalities."
  },
  {
    title: "Gesture Support",
    icon: "check",
    line1: "Support gestures like swipe and pinch.",
    subTitle: "W3C Relevance/Considerations",
    line2: "Common mobile UX practices."
  },
  {
    title: "In-App Feedback",
    icon: "check",
    line1: "Enable bug reports and suggestions directly in the app.",
    subTitle: "W3C Relevance/Considerations",
    line2: "User experience and quality loop."
  },
  {
    title: "FAQ & Help Sections",
    icon: "check",
    line1: "Include support resources for users.",
    subTitle: "W3C Relevance/Considerations",
    line2: "Improves accessibility and user support."
  },
  {
    title: "Battery Efficiency",
    icon: "check",
    line1: "Optimize the app to conserve device battery.",
    subTitle: "W3C Relevance/Considerations",
    line2: "Background processing and performance APIs."
  },
  {
    title: "Native Features Integration",
    icon: "circle",
    line1: "Seamlessly integrate camera, GPS, and sensors.",
    subTitle: "W3C Relevance/Considerations",
    line2: "Device Capabilities APIs."
  },
  {
    title: "Changelog Notifications",
    icon: "check",
    line1: "Notify users of app updates and fixes.",
    subTitle: "W3C Relevance/Considerations",
    line2: "Transparency and engagement."
  },
  {
    title: "Cloud Sync",
    icon: "check",
    line1: "Sync data across devices.",
    subTitle: "W3C Relevance/Considerations",
    line2: "Improves cross-device accessibility."
  },
  {
    title: "Backup and Restore",
    icon: "circle",
    line1: "Allow backup and recovery of user data.",
    subTitle: "W3C Relevance/Considerations",
    line2: "User convenience and trust."
  }
];

const AcessFunction = () => {
  return (
    <section className="w-full py-4 md:py-10 font-[Raleway]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-8 md:mb-10 font-[Raleway]">
          <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
            Functionalities
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          {FUNCTION_CARDS.map((item) => (
            <div
              key={item.title}
              className="bg-[#F7F8FF] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex-shrink-0 font-[Raleway] text-[#1b1b38] text-center flex flex-col"
              style={{ width: "350px" }}
            >
              <div className="flex justify-center mb-4">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full border ${
                    item.icon === "circle"
                      ? "border-[#2B6FEA] bg-transparent"
                      : "border-[#2B6FEA] bg-[#e6edff]"
                  }`}
                >
                  {item.icon === "circle" ? (
                    <FiCircle className="text-[#2B6FEA] text-lg" />
                  ) : (
                    <FiCheck className="text-[#2B6FEA] text-lg" />
                  )}
                </div>
              </div>

              <h3 className="text-lg font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed mb-3 text-[#4b4e63]">
                {item.line1}
              </p>

              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-wide text-[#7f84a9] mb-1">
                {item.subTitle}
              </p>

              <p className="text-sm leading-relaxed text-[#4b4e63]">
                {item.line2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcessFunction;


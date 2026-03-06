import { Link } from "react-router-dom";

// Inline SVG icons to avoid react-icons bundle (Footer loads on every page)
const SocialIcon = ({ href, label, children }) => (
  <a href={href} className="w-8 h-8 bg-white text-[#4D04DB] flex items-center justify-center rounded-lg" aria-label={label}>
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      {children}
    </svg>
  </a>
);

const quickLinks = [
  { label: "About us", to: "/about-us" },
  { label: "Employers", to: "/employers" },
  { label: "Institutions", to: "/institution" },
  { label: "Students", to: "/students" },
];

const supportLinks = [
  { label: "Blog", to: "/blog" },
  { label: "FAQS", to: "/faqs" },
  { label: "Events", to: "/events" },
  { label: "Accessibility", to: "/accessibility" },
  { label: "Contact Us", to: "/contact" },
];

export default function Footer() {
  return (
    <div className="bg-white flex justify-center py-10">
      <footer className="bg-[#4D04DB] text-white rounded-2xl shadow-lg max-w-9xl w-full mx-4 p-10 md:p-14">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Left Section */}
          <div>
            {/* Logo */}
            <div className="flex flex-col items-start mb-4 space-y-3">
              <div className="flex items-center justify-center w-35 h-20 overflow-hidden">
                <img
                  src="/images/Footer-logo.png" // replace with your logo path
                  alt="Evolo AI Logo"
                  width={120}
                  height={80}
                  className="w-30 h-20 object-contain"
                />
              </div>

              {/* WCAG 2.1 Level A badge */}
              <a
                href="https://www.w3.org/WAI/WCAG2A-Conformance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="/images/wcag2.1A-blue-v.png"
                  alt="WCAG 2.1 Level A Conformance (claimed)"
                  className="h-8 object-contain"
                />
              </a>
            </div>
            {/* Text */}
            <p className="text-sm text-gray-100 mb-6 leading-relaxed">
              Evolo AI – Trusted AI solutions for education and student well-being.
            </p>

            {/* App Store Badges */}
            <div className="flex space-x-3">
              <a
                href="https://apps.apple.com/us/app/evolo-ai/id6569237819"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download Evolo AI on the App Store"
                  width={120}
                  height={40}
                  className="h-10"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.hiddenworkers.evoloaiapp&hl=en&pli=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get Evolo AI on Google Play"
                  width={135}
                  height={40}
                  className="h-10"
                />
              </a>
            </div>
          </div>

          {/* Middle Links Section */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="space-y-2">
              <h1 className="font-bold text-lg">Quick Links</h1>
              {quickLinks.map(({ label, to }) => (
                <Link key={label} to={to} className="block hover:underline">
                  {label}
                </Link>
              ))}
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-lg">Resources</h1>
              {supportLinks.map(({ label, to }) => (
                <Link key={label} to={to} className="block hover:underline">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="font-bold text-lg">Address:</h3>
            <p className="text-sm">Adult Ed Pro</p>
            <p className="text-sm">1110 N Virgil Ave</p>
            <p className="text-sm">PMB 98121</p>
            <p className="text-sm mb-4">Los Angeles, CA 90029</p>

            <h3 className="font-semibold mb-2">Follow us:</h3>
            <div className="flex space-x-3">
              <SocialIcon href="https://www.facebook.com/GoEvolo/" label="Facebook">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/evoloai/" label="Instagram">
                <path d="M12 2.16c3.2 0 3.58 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85c.15-3.23 1.69-4.77 4.92-4.92C8.42 2.22 8.8 2.21 12 2.21zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.04 0 8.33 0 8.74 0 12s.01 3.67.07 4.96c.2 4.35 2.77 6.92 7.08 7.08C8.33 24 8.74 24 12 24s3.67-.01 4.96-.07c4.35-.2 6.92-2.77 7.08-7.08C24 15.67 24 15.26 24 12s-.01-3.67-.07-4.96c-.2-4.35-2.77-6.92-7.08-7.08C15.67 0 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-11.84a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/company/evoloai/" label="LinkedIn">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </SocialIcon>
              <SocialIcon href="https://www.youtube.com/@EvoloAI" label="YouTube">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/30 mt-10 pt-6 text-xs text-gray-200 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p>© 2025 Powered by AdultEd Pro. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:underline">
              Terms of Service
            </Link>
            <Link to="/security-privacy" className="hover:underline">
              Security & Privacy
            </Link>
            <Link to="/cookie-policy" className="hover:underline">
              Cookies Settings
            </Link>
           
          </div>
        </div>
      </footer>
    </div>
  );
}

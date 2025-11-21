import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "About us", to: "/about" },
  { label: "Employers", to: "/employee" },
  { label: "Institutions", to: "/institute" },
  { label: "Students", to: "/student" },
];

const supportLinks = [
  { label: "Blog", to: "/resources" },
  { label: "FAQS", to: "/faqs" },
  { label: "Events", to: "/events" },
  { label: "Accessibility", to: "/resources" },
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
           <div className="flex items-center space-x-3 mb-4">
  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg overflow-hidden">
    <img
      src="/images/Vector.png" // replace with your logo path
      alt="Evolo AI Logo"
      className="w-8 h-8 object-contain"
    />
  </div>
  <h2 className="text-2xl font-semibold">Evolo AI</h2>
</div>


            {/* Text */}
            <p className="text-sm text-gray-100 mb-6 leading-relaxed">
              We bridge students, schools, and employers at Evolo AI powered by
              AdultEd Pro, enhancing career opportunities in adult education.
            </p>

            {/* App Store Badges */}
            <div className="flex space-x-3">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-10"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10"
              />
            </div>
          </div>

          {/* Middle Links Section */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="space-y-2">
              <h1>Quick Links</h1>
              {quickLinks.map(({ label, to }) => (
                <Link key={label} to={to} className="block hover:underline">
                  {label}
                </Link>
              ))}
            </div>
            <div className="space-y-2">
              <h1>Resources</h1>
              {supportLinks.map(({ label, to }) => (
                <Link key={label} to={to} className="block hover:underline">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="font-semibold mb-2">Address:</h3>
            <p className="text-sm">Adult Ed Pro</p>
            <p className="text-sm">1110 N Virgil Ave</p>
            <p className="text-sm">PMB 98121</p>
            <p className="text-sm mb-4">Los Angeles, CA 90029</p>

            <h3 className="font-semibold mb-2">Follow us:</h3>
            <div className="flex space-x-3">
              <a
                href="/"
                className="w-8 h-8 bg-white text-[#4D04DB] flex items-center justify-center rounded-lg"
              >
                <FaFacebookF />
              </a>
              <a
                href="/"
                className="w-8 h-8 bg-white text-[#4D04DB] flex items-center justify-center rounded-lg"
              >
                <FaInstagram />
              </a>
              <a
                href="/"
                className="w-8 h-8 bg-white text-[#4D04DB] flex items-center justify-center rounded-lg"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="/"
                className="w-8 h-8 bg-white text-[#4D04DB] flex items-center justify-center rounded-lg"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/30 mt-10 pt-6 text-xs text-gray-200 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p>© 2025 Powered by AdultEd Pro. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="/" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/" className="hover:underline">
              Terms of Service
            </a>
            <a href="/" className="hover:underline">
              Cookies Settings
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

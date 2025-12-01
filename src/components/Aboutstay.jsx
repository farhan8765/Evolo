import React, { useState } from "react";

const Aboutstay = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [message, setMessage] = useState("");

  // HubSpot Configuration - Get these from your HubSpot account
  // Portal ID: Found in your HubSpot account settings
  // Form GUID: Found in your HubSpot form settings
  const HUBSPOT_PORTAL_ID = process.env.REACT_APP_HUBSPOT_PORTAL_ID || "YOUR_PORTAL_ID";
  const HUBSPOT_FORM_GUID = process.env.REACT_APP_HUBSPOT_FORM_GUID || "YOUR_FORM_GUID";

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setSubmitStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setMessage("");

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: [
              {
                name: "email",
                value: email,
              },
            ],
            context: {
              pageUri: window.location.href,
              pageName: document.title,
            },
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setMessage("Thank you! You've been successfully subscribed.");
        setEmail("");
        // Reset message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
          setMessage("");
        }, 5000);
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("HubSpot submission error:", error);
      setSubmitStatus("error");
      setMessage("Failed to subscribe. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#F5F6FF] py-8 px-6 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-snug">
        Stay informed and{" "}
        <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
          ahead of the curve!
        </span>
        <br />
        Sign up and{" "}
        <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
          stay up to date!
        </span>
      </h2>

      {/* Email Input Section */}
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 max-w-md mx-auto">
        <div className="flex items-center justify-center gap-2 w-full bg-white rounded-xl shadow-sm border border-black p-2">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2 outline-none text-gray-700 text-base rounded-lg"
            required
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 bg-[#0D0D21] hover:bg-[#2B1BDD] text-white px-4 py-2 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit"} <span>→</span>
          </button>
        </div>
        
        {/* Status Message */}
        {message && (
          <div
            className={`text-sm font-medium px-4 py-2 rounded-lg ${
              submitStatus === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </section>
  );
};

export default Aboutstay;
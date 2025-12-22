import React, { useEffect } from "react";

const EventTwo = () => {
  useEffect(() => {
    // Document title set karna
    document.title = 'CAEP 2024 - Evolo AI';

    // Canonical link add karna
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://goevolo.com/caep-2024';
  }, []); // Empty dependency array - sirf ek baar run hoga

  return (
    <>
      {/* Hero Banner Section */}
      <section className="w-full sm:pt-4 lg:pt-16 px-4 md:px-8 py-8">
         <img
        src="/images/eventthree.jpeg"   // <-- update your actual image path
        alt="Events Hero Banner"
        className="w-full max-w-8xl rounded-xl"
      />
      </section>

{/* Event Description Section */}
<div className="bg-[#EFF0FF] py-16 px-4 md:px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* LEFT SIDE : Content */}
      <div className="space-y-6 md:pl-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
          Let's Connect Over Coffee At The CAEP Summit!
        </h1>
        
        <p className="text-gray-700">
          We're excited to meet you at the CAEP 2024 Summit, taking place from October 28-30 in beautiful Oakland, California! 
          This is a fantastic opportunity to connect with fellow consortium leaders, school personnel, and vendors. 
          We would love to learn about your institution and discuss how we can help your students while achieving your organizational objectives.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">🎁 Claim Your Stanley Mug!</h3>
          <p className="text-gray-700">
            Fill out the form below, and we will reach out to you to connect at the conference 
            and provide you with a complimentary Stanley Mug!
          </p>
        </div>

        <h3 className="text-xl font-semibold text-gray-800">🤝 Why Meet with Us?</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>
              <strong>Discuss how AI solutions</strong> can enhance student outcomes at your institution.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>
              <strong>Learn how we're already supporting schools</strong> in the Citrus College Consortium, 
              including Monrovia, Claremont, and Azusa.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>
              <strong>Explore strategies to meet AB104</strong> and California's 3-year plan goals.
            </span>
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE : More Content */}
      <div className="space-y-6 md:pr-10">
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Don't Miss This Opportunity!
          </h2>
          <p className="text-gray-700 mb-4">
            Don't miss this chance to connect with us and discover the potential of AI in education! 
            We're excited to meet you at the CAEP 2024 Summit, taking place from October 28-30 in 
            beautiful Oakland, California! This is a fantastic opportunity to connect with fellow 
            consortium leaders, school personnel, and vendors.
          </p>
          <p className="text-gray-700">
            We would love to learn about your institution and discuss how we can help your students 
            while achieving your organizational objectives.
          </p>
        </div>

        <div className="mt-6 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-100">
          <h4 className="text-lg font-semibold text-purple-700 mb-3">📍 Summit Details:</h4>
          <ul className="text-gray-700 space-y-3">
            <li className="flex items-start">
              <span className="mr-3 mt-1">📅</span>
              <div>
                <span className="font-semibold">Dates:</span>
                <span className="ml-2">October 28-30, 2024</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1">🏙️</span>
              <div>
                <span className="font-semibold">Location:</span>
                <span className="ml-2">Oakland, California</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1">🎯</span>
              <div>
                <span className="font-semibold">Event:</span>
                <span className="ml-2">CAEP 2024 Summit</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1">👥</span>
              <div>
                <span className="font-semibold">Attendees:</span>
                <span className="ml-2">Consortium leaders, school personnel, vendors, and educators</span>
              </div>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 font-semibold italic text-center md:text-right">
          We look forward to seeing you at CAEP 2024 and building the future of education together!
        </p>
      </div>
    </div>
  </div>
</div>

      {/* Contact Form & Map Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-[1fr_minmax(0,1.05fr)]">
          
          {/* LEFT SIDE: Map & Info */}
          <div className="space-y-6">
            <div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
                Attending the conference? Let's connect!
              </h2>

              <p className="mt-4 text-lg text-[#666a83]">
                Set up a time to meet with us and you'll be entered to Win an exclusive Stanley Mug! 🎁
              </p>
            </div>

            <div className="flex items-start gap-3 text-[#10122a]">
              <span className="text-2xl" aria-hidden="true">📅</span>
              <div>
                <p className="font-semibold text-[#1b1d3e]">
28th October to 30th October                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-[#10122a]">
              <span className="text-2xl" aria-hidden="true">📍</span>
              <div>
                <p className="font-semibold text-[#1b1d3e]">
                  Oakland Marriott City Center 1001 Broadway Oakland CA 94607
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-[0_18px_45px_rgba(12,11,66,0.12)] border border-[#e5e7f2]">
              <iframe
                title="Shasta College Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.548232002335!2d-122.3758643242981!3d40.587906972855045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54d2f8b0a7a7a7a7%3A0x7c2191e55333dcb5!2sShasta%20College%20Community%20Leadership%20Center!5e0!3m2!1sen!2sus!4v1735743188038!5m2!1sen!2sus"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[280px]"
              />
            </div>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <div className="md:border-l md:border-[#e8e9f5] md:pl-12">
            <form className="grid gap-6 md:grid-cols-2">
              
              <label className="flex flex-col text-sm font-semibold text-[#12132e]">
                Full Name
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="mt-2 rounded-2xl border border-[#dfe3f0] bg-white px-4 py-3 text-base font-normal text-[#1c1c2e] outline-none transition focus:border-[#5b2bff] focus:bg-white"
                />
              </label>

              <label className="flex flex-col text-sm font-semibold text-[#12132e]">
                Email
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2 rounded-2xl border border-[#dfe3f0] bg-white px-4 py-3 text-base font-normal text-[#1c1c2e] outline-none transition focus:border-[#5b2bff] focus:bg-white"
                />
              </label>

              <label className="flex flex-col text-sm font-semibold text-[#12132e]">
                Phone Number
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="mt-2 rounded-2xl border border-[#dfe3f0] bg-white px-4 py-3 text-base font-normal text-[#1c1c2e] outline-none transition focus:border-[#5b2bff] focus:bg-white"
                />
              </label>

              <label className="flex flex-col text-sm font-semibold text-[#12132e]">
                Role
                <select
                  className="mt-2 rounded-2xl border border-[#dfe3f0] bg-white px-4 py-3 text-base font-normal text-[#1c1c2e] outline-none transition focus:border-[#5b2bff] focus:bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>Please Select</option>
                  <option value="administrator">Administrator</option>
                  <option value="counselor">Counselor</option>
                  <option value="instructor">Instructor</option>
                  <option value="other">Other</option>
                </select>
              </label>

              <label className="flex flex-col text-sm font-semibold text-[#12132e]">
                School
                <input
                  type="text"
                  placeholder="Enter your school name"
                  className="mt-2 rounded-2xl border border-[#dfe3f0] bg-white px-4 py-3 text-base font-normal text-[#1c1c2e] outline-none transition focus:border-[#5b2bff] focus:bg-white"
                />
              </label>

              <label className="flex flex-col text-sm font-semibold text-[#12132e]">
                Certificate Number (If Any)
                <input
                  type="text"
                  placeholder="Enter certificate number"
                  className="mt-2 rounded-2xl border border-[#dfe3f0] bg-white px-4 py-3 text-base font-normal text-[#1c1c2e] outline-none transition focus:border-[#5b2bff] focus:bg-white"
                />
              </label>

              <label className="flex flex-col text-sm font-semibold text-[#12132e] md:col-span-2">
                Consortium
                <input
                  type="text"
                  placeholder="Enter consortium name"
                  className="mt-2 rounded-2xl border border-[#dfe3f0] bg-white px-4 py-3 text-base font-normal text-[#1c1c2e] outline-none transition focus:border-[#5b2bff] focus:bg-white"
                />
              </label>

              <label className="flex flex-col text-sm font-semibold text-[#12132e] md:col-span-2">
                Message
                <textarea
                  rows="4"
                  placeholder="Enter your message"
                  className="mt-2 rounded-2xl border border-[#dfe3f0] bg-white px-4 py-3 text-base font-normal text-[#1c1c2e] outline-none transition focus:border-[#5b2bff] focus:bg-white"
                />
              </label>

              <div className="md:col-span-2">
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-2xl bg-[#611dff] px-8 py-3 text-sm font-semibold text-white shadow-[0_15px_30px_rgba(97,29,255,0.35)] transition hover:opacity-95"
                >
                  Submit
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventTwo;
import React from 'react';

export default function EventoneDes() {
  return (
    <div className="bg-[#EFF0FF] py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE : Title + Image (same card) */}
          <div className="space-y-6 md:pl-10">
           <h1 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
Presenting "AI in Adult Education" on Thursday, March 14!</h1>

            <img 
              src="/images/amirimg.jpg" 
              alt="CAEP Summit 2025" 
              className="w-full max-w-md rounded-lg"
            />
             <img 
              src="/images/cup.jpg" 
              alt="CAEP Summit 2025" 
              className="w-full max-w-md rounded-lg"
            />
          </div>

          {/* RIGHT SIDE : Content */}
       <div className="space-y-6 md:pr-10">
    <h2 className="text-2xl font-bold text-gray-900">📢 Exciting News: Evolo AI is Attending the Northern & Bay Section CCAE PD Event!</h2>
    
    <p className="text-gray-700">
        We're thrilled to announce that Evolo AI will be part of the Northern & Bay Section CCAE PD Event, a must-attend gathering for educators, employers, and adult learners looking to enhance career pathways and workforce development. We'll also be presenting a special session "AI in Adult Education" on Thursday, March 14!
    </p>

    <h3 className="text-xl font-semibold text-gray-800">🔹 More About the Event?</h3>
    <p className="text-gray-700">
        This event is designed to fit busy schedules, starting on Thursday afternoon and wrapping up on Friday afternoon to accommodate traffic, travel, and work commitments. It's a perfect opportunity to explore how technology is shaping the future of adult education and job placement.
    </p>

    <h3 className="text-xl font-semibold text-gray-800">Event Details:</h3>
    <p className="text-gray-700">
        <strong>Dates:</strong> March 13-14, 2025<br />
        <strong>Location:</strong> Shasta College Community Leadership Center<br />
        <strong>Address:</strong> 1401 California Street, Redding, CA 96001
    </p>

    <h3 className="text-xl font-semibold text-gray-800">🔹 Why Visit Evolo AI?</h3>
    <ul className="space-y-3 text-gray-700">
        <li className="flex items-start">
            <span className="text-green-600 mr-2">✅</span>
            <span><strong>Live Demos</strong> – See how Evolo AI makes job applications as easy as swiping</span>
        </li>
        <li className="flex items-start">
            <span className="text-green-600 mr-2">✅</span>
            <span><strong>Networking</strong> – Connect with educators, employers, and industry leaders</span>
        </li>
        <li className="flex items-start">
            <span className="text-green-600 mr-2">✅</span>
            <span><strong>AI-Powered Career Solutions</strong> – Discover how we help students land jobs faster</span>
        </li>
        <li className="flex items-start">
            <span className="text-green-600 mr-2">✅</span>
            <span><strong>Career Event Insights</strong> – Learn how AI is transforming job fairs and recruitment</span>
        </li>
    </ul>

    <p className="text-gray-700">
        Whether you're an educator, employer, or student, this is your chance to see firsthand how Evolo AI is revolutionizing job placement and workforce development.
    </p>

    <p className="text-gray-700 font-semibold">
        Stop by our booth and let's build the future together!
    </p>
</div>
        </div>
      </div>
    </div>
  );
}
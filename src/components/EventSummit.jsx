import React from 'react';

export default function EventSummit() {
  return (
    <div className="bg-[#EFF0FF] py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE : Title + Image (same card) */}
          <div className="space-y-6 md:pl-10">
           <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
  Let's Connect at the CAEP Summit 2025!
</h1>

            <img 
              src="/images/eventtwo.png" 
              alt="CAEP Summit 2025" 
              className="w-full max-w-md rounded-lg"
            />
          </div>

          {/* RIGHT SIDE : Content */}
          <div className="space-y-6 md:pr-10">
            <p className="text-gray-700">
              We're excited to share that the{' '}
              <span className="font-semibold">CAEP Summit 2025</span> is taking place from{' '}
              <span className="font-semibold">September 24-26, 2025</span>, at the Anaheim Marriott in Anaheim, California!
            </p>

            <p className="text-gray-700">
              This year's Summit theme, <span className="font-semibold">Building Bridges to Success: Innovate, Integrate, Impact</span>,
              highlights the powerful strategies California Adult Education Programs are using to expand access, close equity gaps, 
              and support adult learners and career pathways.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Attend the CAEP Summit 2025?
              </h2>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Discover innovative practices shaping the future of adult education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Learn how integrated approaches are driving equity and access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Network with leaders and peers that support learners in achieving long-term success</span>
                </li>
              </ul>

              <p className="text-gray-700">
                The California Adult Education Program Summit 2025 is where innovation, practice, and collaboration come together.
                It's the gathering place for those committed to delivering breakthrough practices and drive meaningful, 
                lasting change across the adult education system.
              </p>

              <p className="text-gray-700">
                We look forward to seeing you this September in{' '}
                <span className="font-semibold">Anaheim!</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
import React from 'react';

const GetinTouch = () => {
  return (
    <div className="w-full bg-white py-16 px-6 font-['Raleway']">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Content with Image */}
        <div>
          {/* Image */}
          
          
         <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
  Get in Touch
</h2>

          
          <p className="text-gray-600 mb-8 text-lg">
            Get started for Free and see how quickly Adults@ Pro can help your business, large or small.
          </p>
<div className="mb-8">
            <img
              src="/images/evoloo.png"
              alt="Evolo"
              className="w-full h-auto mb-6"
            />
          </div>
       
        </div>

        {/* Right Side - Form */}
        <div className="p-8">
          <form className="space-y-6">
            {/* Name and Email - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-black mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Photoholder"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F00DA] focus:border-transparent outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Photoholder"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F00DA] focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-bold text-black mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Photoholder"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F00DA] focus:border-transparent outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-bold text-black mb-2">
                Message
              </label>
              <textarea
                placeholder="Photoholder"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F00DA] focus:border-transparent outline-none resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-[150px] bg-[#4F00DA] text-white py-3 rounded-lg font-semibold hover:bg-[#3A00B8] transition-colors flex items-center justify-center gap-2"
            >
              Submit
              <span className="text-lg">→</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default GetinTouch;
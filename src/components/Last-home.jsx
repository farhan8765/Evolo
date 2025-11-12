export default function LastHome() {
  return (
    <section className="bg-[#F9F9FB] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-5">
          <p className="font-semibold text-gray-800">Tagline</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-[#12005E] to-[#4D04DB] bg-clip-text text-transparent">
  Medium length section heading goes here
</h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
            ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>

          {/* App Store Buttons */}
          <div className="flex space-x-4 pt-2">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-12"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-12"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <img
            src="/images/Group 5.png" // ← only one image now
            alt="App preview"
            className="w-[280px] md:w-[330px] lg:w-[350px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

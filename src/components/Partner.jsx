export default function Partner() {
  return (
    <section className="bg-white text-black mb-16">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center px-6 pt-20 pb-10">
        <p className="text-sm font-semibold text-gray-700 mb-2">Tagline</p>
        <h1 className="text-3xl md:text-4xl font-bold leading-snug bg-gradient-to-r from-[#12005E] to-[#4D04DB] bg-clip-text text-transparent">
  AdultED Pro Presents Evolo AI: Your Partner in Adult Education Success
</h1>

        <p className="text-gray-600 mt-4 text-base md:text-lg">
          We proudly present Evolo AI, the app that empowers students to succeed while
          helping schools connect with employers. Together, we can make education more
          effective and impactful.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-16 md:space-y-20">

        {/* Section 1 */}
     <div className="relative bg-[#4D04DB] text-white rounded-2xl max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center p-10 overflow-visible mt-6">
  <div className="md:w-1/2 space-y-4">
    <p className="text-sm font-semibold">Tagline</p>
    <h2 className="text-2xl md:text-3xl font-semibold">
      Medium length section heading goes here
    </h2>
    <p className="text-sm md:text-base leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis viverra
      ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
    </p>
  </div>

  <img
    src="/images/right.png"
    alt="App preview"
    className="md:absolute md:-right-[-40px] md:top-1/2 md:-translate-y-1/2 w-[220px] md:w-[310px] h-[290px] md:h-[430px] rotate-[1deg] drop-shadow-2xl mt-6 md:mt-0"
  />
</div>


        {/* Section 2 */}
        <div className="relative bg-[#4D04DB] text-white rounded-2xl max-w-5xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center p-10 overflow-visible">
       <img
  src="/images/left.png"
  alt="App preview"
  className="md:absolute md:-left-[-40px] md:top-1/2 md:-translate-y-1/2 w-[220px] h-[290px] md:w-[320px] md:h-[430px] rotate-[-1deg] drop-shadow-2xl mt-6 md:mt-0"
/>

          <div className="md:w-1/2 space-y-4 md:ml-auto">
            <p className="text-sm font-semibold">Tagline</p>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Medium length section heading goes here
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Duis cursus, mi quis viverra
              ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="relative bg-[#4D04DB] text-white rounded-2xl max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center p-10 overflow-visible">
          <div className="md:w-1/2 space-y-4">
            <p className="text-sm font-semibold">Tagline</p>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Medium length section heading goes here
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Duis cursus, mi quis viverra
              ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
          </div>
<img
  src="/images/right.png"
  alt="App preview"
  className="md:absolute md:-right-[-40px] md:top-1/2 md:-translate-y-1/2 w-[220px] h-[290px] md:w-[310px] md:h-[430px] rotate-[1deg] drop-shadow-2xl mt-6 md:mt-0"
/>

        </div>

        {/* Section 4 (with button) */}
        <div className="relative bg-[#4D04DB] text-white rounded-2xl max-w-5xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center p-10 overflow-visible">
        <img
  src="/images/left.png"
  alt="App preview"
  className="md:absolute md:-left-[-40px] md:top-1/2 md:-translate-y-1/2 w-[220px] h-[290px] md:w-[320px] md:h-[430px] rotate-[-1deg] drop-shadow-2xl mt-6 md:mt-0"
/>

          <div className="md:w-1/2 space-y-4 md:ml-auto">
            <p className="text-sm font-semibold">Tagline</p>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Medium length section heading goes here
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Duis cursus, mi quis viverra
              ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
            <button className="bg-black text-white text-sm px-4 py-2 rounded mt-2 hover:bg-gray-900">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

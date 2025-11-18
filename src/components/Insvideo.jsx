import React from "react";

const videos = [
  {
    id: 1,
    link: "https://www.youtube.com/watch?v=zPSqLfjj8WM",
  },
  {
    id: 2,
    link: "https://www.youtube.com/watch?v=xzuDTpT7j0s",
  },
];

const fullBleed = {
  width: "100vw",
  marginLeft: "calc(50% - 50vw)",
  marginRight: "calc(50% - 50vw)",
};

// ---------------------- VIDEO CARD ----------------------
const VideoCard = ({ link }) => {
  const embedUrl = link.replace("watch?v=", "embed/");

  return (
    <article className="relative rounded-[26px] overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-transform duration-300">
      {/* YouTube Iframe */}
      <iframe
        src={embedUrl}
        title="Video"
        frameBorder="0"
        className="w-full h-[320px] rounded-[26px]"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </article>
  );
};

// ------------------------- MAIN SECTION -------------------------
const Insvideo = () => {
  return (
    <section
      style={fullBleed}
      className="bg-[#f7f6fb] py-20 font-[Inter,sans-serif]"
    >
      <div className="mx-auto w-full max-w-6xl flex flex-col gap-14 px-6">
        
        {/* Header */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#0f1b66]">
            Tagline
          </span>

          <h2 className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent text-4xl md:text-5xl font-bold">
            Real Stories of Transformation with Evolo
          </h2>

          <p className="mt-4 text-lg text-[#616370] leading-relaxed max-w-3xl mx-auto">
            Our users say it best. Discover how Evolo is transforming adult
            education through real-life experiences from educational leaders and
            career counselors.
          </p>
        </div>

        {/* EXACTLY 2 VIDEOS – SAME WIDTH */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insvideo;

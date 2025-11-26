import React from "react";

const videos = [
  {
    id: 1,
    link: "https://www.youtube.com/watch?v=RwS4MQCVjHg",
  },
  {
    id: 2,
    link: "https://www.youtube.com/watch?v=zPSqLfjj8WM",
  },
  {
    id: 3,
    link: "https://www.youtube.com/watch?v=Q_fFcJqZ4bU",
  },
];

const fullBleed = {
  width: "100vw",
  marginLeft: "calc(50% - 50vw)",
  marginRight: "calc(50% - 50vw)",
};

const VideoCard = ({ link, index }) => {
  // Convert YouTube link to embed format
  const embedUrl = link.replace("watch?v=", "embed/");

  return (
    <article
      className="
        relative overflow-hidden rounded-[26px]
        shadow-[0_15px_35px_rgba(0,0,0,0.15)]
        transition-transform duration-300 hover:-translate-y-1
      animate-hero-reveal
      "
      style={{ animationDelay: `${0.35 + index * 0.1}s` }}
    >
      {/* YouTube Iframe */}
      <iframe
        width="100%"
        height="320"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-[26px]"
      ></iframe>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
    </article>
  );
};

const StudVideo = () => {
  return (
    <section
      style={fullBleed}
      className="bg-[white] py-20 font-[Inter,sans-serif]"
    >
      <div className="mx-auto w-full max-w-6xl flex flex-col gap-14 px-6">
        {/* Header */}
        <div className="text-center">
          {/* <span
            className="text-sm font-semibold uppercase tracking-wide text-[#0f1b66] animate-hero-reveal"
            style={{ animationDelay: "0.05s" }}
          >
            Tagline
          </span> */}

          <h2
            className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent text-4xl md:text-5xl font-bold animate-hero-reveal"
            style={{ animationDelay: "0.15s" }}
          >
            Student Success Stories: How Evolo is Shaping Futures
          </h2>

          <p
            className="mt-4 text-lg text-[#616370] leading-relaxed max-w-3xl mx-auto animate-hero-reveal"
            style={{ animationDelay: "0.25s" }}
          >
            Discover the transformative experiences of students who have used
            Evolo to advance their education and career goals.
          </p>
        </div>

        {/* Equal Width Videos */}
        <div
          className="flex flex-col md:flex-row gap-6 animate-hero-reveal"
          style={{ animationDelay: "0.3s" }}
        >
          {videos.map(({ id, ...video }, index) => (
            <div key={id} className="flex-1">
              <VideoCard {...video} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudVideo;

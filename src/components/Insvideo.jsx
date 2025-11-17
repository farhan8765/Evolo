import React from "react";

const videos = [
  {
    id: 1,
    thumbnail: "/images/thumb.png",
    badge: "/images/video-badge.png",
    highlight: true, // first video special
  },
  {
    id: 2,
    thumbnail: "/images/thumb.png",
  },
  {
    id: 3,
    thumbnail: "/images/thumb.png",
  },
];

const fullBleed = {
  width: "100vw",
  marginLeft: "calc(50% - 50vw)",
  marginRight: "calc(50% - 50vw)",
};

const VideoCard = ({ thumbnail, badge, highlight }) => (
  <article
    className={`relative overflow-hidden rounded-[26px] transition-transform duration-300 hover:-translate-y-1 ${
      highlight
        ? "shadow-[0_20px_45px_rgba(83,39,255,0.4)]"
        : "shadow-[0_15px_35px_rgba(0,0,0,0.15)]"
    }`}
  >
    {/* Thumbnail */}
    <img
      src={thumbnail}
      alt="Evolo transformation story"
      className="h-[320px] w-full object-cover"
    />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

    {/* Text Content */}
    <div className="absolute inset-0 flex flex-col justify-end gap-3 p-6 text-white">
      <span className="text-sm uppercase tracking-wide">Tagline</span>
      <h3 className="text-2xl font-semibold leading-snug">
        Medium length section heading goes here
      </h3>
      <p className="text-base text-white/90">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </p>
      <button
        type="button"
        className={`mt-2 w-max rounded-[14px] px-6 py-3 text-sm font-semibold transition ${
          highlight
            ? "bg-[#5327ff] text-white hover:bg-[#3b1bcc]"
            : "bg-white/20 text-white backdrop-blur hover:bg-white/35"
        }`}
      >
        Watch Now
      </button>
    </div>

    {/* Badge only for first video */}
    {/* {badge && (
      <img
        src={badge}
        alt="Evolo AI badge"
        className="absolute -right-3 top-4 h-16 w-24 object-contain drop-shadow-lg"
      />
    )} */}
  </article>
);

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
            career counselors who have integrated Evolo&apos;s innovative
            platform into their programs. With Evolo, institutions empower
            students to succeed in both their educational and career pursuits.
          </p>
        </div>

        {/* Video Row (1st wider) */}
        <div className="flex flex-col md:flex-row gap-6">
          {videos.map(({ id, ...video }, index) => (
            <div
              key={id}
              className={`${
                index === 0 ? "md:flex-[1.5]" : "md:flex-[1]"
              } flex-1`}
            >
              <VideoCard {...video} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insvideo;

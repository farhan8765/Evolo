import React from 'react';

const videos = [
  {
    id: 1,
    thumbnail: '/images/thumb.png',
    badge: '/images/video-badge.png',
  },
  {
    id: 2,
    thumbnail: '/images/thumb.png',
  },
  {
    id: 3,
    thumbnail: '/images/thumb.png',
  },
];

const fullBleed = {
  width: '100vw',
  marginLeft: 'calc(50% - 50vw)',
  marginRight: 'calc(50% - 50vw)',
};

const VideoCard = ({ thumbnail, badge }) => (
  <article className="relative overflow-hidden rounded-[26px] shadow-[0_20px_45px_rgba(16,16,138,0.25)]">
    <img
      src={thumbnail}
      alt="Evolo transformation story"
      className="h-[320px] w-full object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

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
        className="mt-2 w-max rounded-[14px] bg-white/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/35"
      >
        Watch Now
      </button>
    </div>

    {badge && (
      <img
        src={badge}
        alt="Evolo AI badge"
        className="absolute -right-3 top-4 h-16 w-24 object-contain drop-shadow-lg"
      />
    )}
  </article>
);

const VideoHome = () => {
  return (
    <section
      style={fullBleed}
      className="bg-[#f7f6fb] py-16 font-[Inter,sans-serif]"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <div className="text-center">
          <span className="text-sm uppercase tracking-wide text-[#0f1b66]">
            Tagline
          </span>
          <h2 className="mt-3 text-4xl font-semibold text-[#080a2b]">
            Real Stories of <span className="text-[#5327ff]">Transformation</span> with Evolo
          </h2>
          <p className="mt-4 text-lg text-[#616370]">
            Our users say it best. Discover how Evolo is transforming adult education through
            real-life experiences from educational leaders and career counselors who have integrated
            Evolo&apos;s innovative platform into their programs. With Evolo, institutions empower
            students to succeed in both their educational and career pursuits.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map(({ id, ...video }) => (
            <VideoCard key={id} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoHome;

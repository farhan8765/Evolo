import React, { useState } from "react";

const videos = [
  {
    id: 1,
    videoId: "zPSqLfjj8WM", // YouTube video ID
    thumbnail: "/images/thumb.png",
  },
  {
    id: 2,
    videoId: "xzuDTpT7j0s",
    thumbnail: "/images/thumb.png",
  },
  {
    id: 3,
    videoId: "Q_fFcJqZ4bU",
    thumbnail: "/images/thumb.png",
  },
];

const VideoCard = ({ videoId, thumbnail }) => {
  const [play, setPlay] = useState(false);

  return (
    <article
      onClick={() => setPlay(true)}
      className="relative overflow-hidden rounded-[26px] cursor-pointer transition-transform duration-300 hover:-translate-y-1 shadow-[0_15px_35px_rgba(0,0,0,0.15)]"
    >
      {play ? (
        <iframe
          className="w-full h-[320px] rounded-[26px]"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <>
          <img
            src={thumbnail}
            alt="video thumbnail"
            className="h-[320px] w-full object-cover rounded-[26px]"
          />
          <div className="absolute inset-0 bg-black/40 rounded-[26px]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-16 w-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="#FF0000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      )}
    </article>
  );
};

const VideoHome = () => {
  return (
    <section className="bg-[#f7f6fb] py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10">
        <h2 className="text-4xl font-bold text-center mb-6">
          Real Stories of Transformation
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {videos.map((v) => (
            <div key={v.id} className="md:flex-1">
              <VideoCard {...v} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoHome;

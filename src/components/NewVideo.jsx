import React, { useEffect, useRef, useState } from "react";

const videos = [
  {
    id: 1,
    link: "https://www.youtube.com/watch?v=zPSqLfjj8WM",
    highlight: true,
  },
  {
    id: 2,
    link: "https://www.youtube.com/watch?v=xzuDTpT7j0s",
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

const VideoCard = ({ link, highlight, delay, visible }) => {
  const embedUrl = link.replace("watch?v=", "embed/");

  return (
    <article
      style={{ transitionDelay: delay }}
      className={`relative overflow-hidden rounded-[26px] transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${
        highlight
          ? "shadow-[0_20px_45px_rgba(83,39,255,0.4)] hover:-translate-y-1"
          : "shadow-[0_15px_35px_rgba(0,0,0,0.15)] hover:-translate-y-1"
      }`}
    >
      <iframe
        src={embedUrl}
        width="100%"
        height="320"
        title="Video"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-[320px] object-cover rounded-[26px]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

      <div className="absolute inset-0 flex flex-col justify-end gap-3 p-6 text-white pointer-events-none">
        {/* <span className="text-sm uppercase tracking-wide">Tagline</span> */}
        {/* <h3 className="text-2xl font-semibold">
          Medium length section heading goes here
        </h3> */}
        {/* <p className="text-base text-white/90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p> */}
      </div>
    </article>
  );
};

const NewVideo = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={fullBleed}
      className="bg-[#f7f6fb] py-10 font-[Inter,sans-serif]"
    >
      <div className="mx-auto w-full max-w-6xl flex flex-col gap-14 px-6">
        
        <div className="text-center">
          {/* <span className="text-sm font-semibold uppercase tracking-wide text-[#0f1b66]">
            Tagline
          </span> */}

          <h2
            className={`bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent text-4xl md:text-5xl font-bold transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            Real Stories of Transformation with Evolo
          </h2>

          <p
            className={`mt-4 text-lg text-[#616370] leading-relaxed max-w-3xl mx-auto transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            Our users say it best. Discover how Evolo is transforming adult
            education through real-life experiences from educational leaders and
            career counselors who use Evolo's platform every day.
          </p>
        </div>

        {/* All videos same width */}
        <div className="flex flex-col md:flex-row gap-6">
          {videos.map(({ id, ...video }, index) => (
            <div key={id} className="flex-1 md:flex-1">
              <VideoCard
                {...video}
                visible={visible}
                delay={`${index * 120}ms`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewVideo;

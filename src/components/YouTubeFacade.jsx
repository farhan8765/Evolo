import { useState } from "react";

const YouTubeFacade = ({ videoId, title = "YouTube video", fill = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    );
  }

  const containerStyle = fill
    ? { cursor: "pointer", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }
    : { cursor: "pointer", position: "relative", width: "100%", paddingBottom: "56.25%" };

  return (
    <div
      onClick={() => setIsLoaded(true)}
      style={containerStyle}
      aria-label={`Play ${title}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setIsLoaded(true)}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        width={480}
        height={360}
        loading="lazy"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 68,
          height: 48,
          backgroundColor: "red",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg viewBox="0 0 68 48" width="68" height="48">
          <polygon points="28,16 28,36 46,26" fill="white" />
        </svg>
      </div>
    </div>
  );
};

export default YouTubeFacade;

import React from "react";

const FloatingQr = () => (
  <div className="fixed bottom-6 right-6 z-40">
    <div className="rounded-2xl bg-white p-2 shadow-[0_10px_25px_rgba(0,0,0,0.18)]">
      <img
        src="/images/Evolo-AI.png"
        alt="Scan to learn more about Evolo AI"
        className="h-20 w-20 object-contain"
        loading="lazy"
      />
    </div>
  </div>
);

export default FloatingQr;

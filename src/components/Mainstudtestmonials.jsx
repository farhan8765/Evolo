import React from "react";

const logos = [
  // Original PNG logos
  { name: "Logo 1", src: "/images/student-test/image 6.png" },
  { name: "Logo 2", src: "/images/student-test/image 7.png" },
  { name: "Logo 3", src: "/images/student-test/data.png" },
  { name: "Logo 4", src: "/images/student-test/data2.png" },
  { name: "Logo 5", src: "/images/student-test/image 10.png" },
  { name: "Logo 6", src: "/images/student-test/image 11.png" },
  { name: "Logo 7", src: "/images/student-test/image 12.png" },

  // JPG logos (flogo1–flogo21)
  { name: "Logo 8", src: "/images/student-test/flogo1.jpg" },
  { name: "Logo 9", src: "/images/student-test/flogo2.jpg" },
  { name: "Logo 10", src: "/images/student-test/flogo3.jpg" },
  { name: "Logo 11", src: "/images/student-test/flogo4.jpg" },
  { name: "Logo 12", src: "/images/student-test/flogo5.jpg" },
  { name: "Logo 13", src: "/images/student-test/flogo6.jpg" },
  { name: "Logo 14", src: "/images/student-test/flogo7.jpg" },
  { name: "Logo 15", src: "/images/student-test/flogo8.jpg" },
  { name: "Logo 16", src: "/images/student-test/flogo9.jpg" },
  { name: "Logo 17", src: "/images/student-test/flogo10.jpg" },
  { name: "Logo 18", src: "/images/student-test/flogo11.jpg" },
  { name: "Logo 19", src: "/images/student-test/flogo12.jpg" },
  { name: "Logo 20", src: "/images/student-test/flogo13.jpg" },
  { name: "Logo 21", src: "/images/student-test/flogo14.jpg" },
  { name: "Logo 22", src: "/images/student-test/flogo15.jpg" },
  { name: "Logo 23", src: "/images/student-test/flogo16.jpg" },
  { name: "Logo 24", src: "/images/student-test/flogo17.jpg" },
  { name: "Logo 25", src: "/images/student-test/flogo18.jpg" },
  { name: "Logo 26", src: "/images/student-test/flogo19.jpg" },
  { name: "Logo 27", src: "/images/student-test/flogo20.jpg" },
  { name: "Logo 28", src: "/images/student-test/flogo21.jpg" },
];

const MainStudTestMonials = () => {
  return (
    <section className="bg-white py-14">
      <div className="max-w-full mx-auto px-4">
     <h2 className="text-center text-3xl font-semibold mb-10 bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
  Featured Jobs by
</h2>

        <div className="overflow-hidden relative">
          <div className="flex gap-16 animate-logo-marquee" style={{ width: 'calc(200% + 64px)' }}>
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center justify-center min-w-[150px] max-w-[200px]"
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainStudTestMonials;

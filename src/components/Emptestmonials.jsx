import React from "react";

const logos = [
  { name: "Optum", src: "/images/student-test/image 6.png" },
  { name: "Tarzana Treatment Centers", src: "/images/student-test/image 7.png" },
  { name: "Adventist Health", src: "/images/student-test/data.png" },
  { name: "Arosa", src: "/images/student-test/data2.png" },
  { name: "Bali Construction", src: "/images/student-test/image 10.png" },
  { name: "Glen Park", src: "/images/student-test/image 11.png" },
  { name: "Home Instead", src: "/images/student-test/image 12.png" },
  { name: "Optum", src: "/images/flogo11.jpg" },
  { name: "Optum", src: "/images/flogo12.jpg" },
  { name: "Optum", src: "/images/flogo13.jpg" },
  { name: "Optum", src: "/images/flogo14.jpg" },
  { name: "Optum", src: "/images/flogo15.jpg" },
    { name: "Optum", src: "/images/flogo16.jpg" },
  { name: "Optum", src: "/images/flogo17.jpg" },
  { name: "Optum", src: "/images/flogo19.jpg" },
  { name: "Optum", src: "/images/flogo20.jpg" },
  { name: "Optum", src: "/images/flogo21.jpg" },
  { name: "Optum", src: "/images/flogo22.jpg" },
  { name: "Optum", src: "/images/flogo23.jpg" },
  { name: "Optum", src: "/images/flogo24.jpg" },



];

const EmpTestimonials = () => {
  return (
    <section className="bg-white py-14">
      <div className="max-w-full mx-auto px-4">
     <h2 className="text-center text-3xl font-semibold mb-10 bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
Featured Jobs by </h2>

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

export default EmpTestimonials;

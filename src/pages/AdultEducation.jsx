import React from "react";
import Hero from "../components/Hero";
import PotentialWorkers from "../components/PotentialWorkers";
import Partner from "../components/Partner"
import Skills from "../components/Skills";
import VideoHome from "../components/VideoHome";
import StudentTestimonial from "../components/Student-testmonial";
import LastHome from "../components/Last-home";
import Aboutstay from "../components/Aboutstay";



const AdultEducation = () => {
  return (
    <div className="bg-white">
      <Hero/>
      <PotentialWorkers/>
<Partner/>
<Skills/>
<VideoHome/>
<StudentTestimonial/>
<LastHome/>
<Aboutstay/>
    </div>
  );
};

export default AdultEducation;

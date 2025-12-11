import React from "react";
import StudentHero from "../components/Student-Hero";
import StudentChoose from "../components/Student-choose";
import StudentFeatures from "../components/Student-features";
import StudSlider from "../components/Studslider";  // ✅ Capital 'S'
import MainStudTestMonials from "../components/Mainstudtestmonials";
import Studdowner from "../components/Studdowner";
import StudVideo from "../components/StudVideo";

const Student = () => {
  return (
    <>
      <StudentHero />
      <StudentChoose />
      <StudentFeatures />
      <MainStudTestMonials/>
      <StudSlider />
      <Studdowner/>
      <StudVideo/>
    </>
  );
};

export default Student;
import React, { useEffect, useState } from "react";
import { applyPageMeta } from "../utils/pageMeta";
import StudentHero from "../components/Student-Hero";
import StudentChoose from "../components/Student-choose";
import StudentFeatures from "../components/Student-features";
import StudSlider from "../components/Studslider";
import MainStudTestMonials from "../components/Mainstudtestmonials";
import Studdowner from "../components/Studdowner";
import StudVideo from "../components/StudVideo";
import StudentInterestModal from "../components/StudentInterestModal";

const Student = () => {
  const [showStudentForm, setShowStudentForm] = useState(true);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      applyPageMeta({
        title: "Find Your Next Career Move with Evolo AI's Student Job App",
        description: "Looking for the perfect job? Evolo AI's app connects you with employer in just a swipe. Apply quickly, direct message on app, and land your next career opportunity.",
        canonical: 'https://goevolo.com/students',
        keywords: 'student job app, career move, job search, Evolo AI, student employment, swipe to apply, direct messaging, career opportunities, student jobs',
        ogTags: [
          { property: 'og:title', content: "Find Your Next Career Move with Evolo AI's Student Job App" },
          { property: 'og:description', content: "Looking for the perfect job? Evolo AI's app connects you with employer in just a swipe. Apply quickly, direct message on app, and land your next career opportunity." },
          { property: 'og:url', content: 'https://goevolo.com/students' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Evolo AI' },
        ],
        twitterTags: [
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: "Find Your Next Career Move with Evolo AI's Student Job App" },
          { name: 'twitter:description', content: "Looking for the perfect job? Evolo AI's app connects you with employer in just a swipe. Apply quickly, direct message on app, and land your next career opportunity." },
          { name: 'twitter:url', content: 'https://goevolo.com/students' },
        ],
      })
    })
    return () => cancelAnimationFrame(id)
  }, [])

  const handleCloseForm = () => setShowStudentForm(false);

  return (
    <>
      <StudentInterestModal open={showStudentForm} onClose={handleCloseForm} />
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

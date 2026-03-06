import React, { useEffect } from "react";
import { applyPageMeta } from "../utils/pageMeta";
import Hero from "../components/Hero";
import PotentialWorkers from "../components/PotentialWorkers";
import Partner from "../components/Partner"
import Skills from "../components/Skills";
import VideoHome from "../components/VideoHome";
import StudentTestimonial from "../components/Student-testmonial";
import LastHome from "../components/Last-home";
import Aboutstay from "../components/Aboutstay";

const AdultEducation = () => {
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      applyPageMeta({
        title: 'Evolo AI - Empowering Students and Connecting Schools',
        description: 'Introducing Evolo AI, the app empowering students and connecting schools with employers. Together, we can make education more effective and impactful!',
        canonical: 'https://goevolo.com/adult',
        keywords: 'Evolo AI, student empowerment, school-employer connection, education technology, effective education, impactful learning, education app',
        ogTags: [
          { property: 'og:title', content: 'Evolo AI - Empowering Students and Connecting Schools' },
          { property: 'og:description', content: 'Introducing Evolo AI, the app empowering students and connecting schools with employers. Together, we can make education more effective and impactful!' },
          { property: 'og:url', content: 'https://goevolo.com/adult' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Evolo AI' },
        ],
        twitterTags: [
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Evolo AI - Empowering Students and Connecting Schools' },
          { name: 'twitter:description', content: 'Introducing Evolo AI, the app empowering students and connecting schools with employers. Together, we can make education more effective and impactful!' },
          { name: 'twitter:url', content: 'https://goevolo.com/adult' },
        ],
      })
    })
    return () => cancelAnimationFrame(id)
  }, [])

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
import React, { useEffect, useState } from "react";
import StudentHero from "../components/Student-Hero";
import StudentChoose from "../components/Student-choose";
import StudentFeatures from "../components/Student-features";
import StudSlider from "../components/Studslider";  // ✅ Capital 'S'
import MainStudTestMonials from "../components/Mainstudtestmonials";
import Studdowner from "../components/Studdowner";
import StudVideo from "../components/StudVideo";
import StudentInterestModal from "../components/StudentInterestModal";

const Student = () => {
  const [showStudentForm, setShowStudentForm] = useState(true);

  useEffect(() => {
    // Document title set karna
    document.title = 'Find Your Next Career Move with Evolo AI\'s Student Job App';
    
    // Meta description update karna
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Looking for the perfect job? Evolo AI\'s app connects you with employer in just a swipe. Apply quickly, direct message on app, and land your next career opportunity.';
    
    // Canonical link add karna
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://goevolo.com/students';
    
    // OG tags add/update karna (Facebook/WhatsApp ke liye)
    const ogTags = [
      { property: 'og:title', content: 'Find Your Next Career Move with Evolo AI\'s Student Job App' },
      { property: 'og:description', content: 'Looking for the perfect job? Evolo AI\'s app connects you with employer in just a swipe. Apply quickly, direct message on app, and land your next career opportunity.' },
      { property: 'og:url', content: 'https://goevolo.com/students' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Evolo AI' },
    ];
    
    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });
    
    // Twitter tags add/update karna
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Find Your Next Career Move with Evolo AI\'s Student Job App' },
      { name: 'twitter:description', content: 'Looking for the perfect job? Evolo AI\'s app connects you with employer in just a swipe. Apply quickly, direct message on app, and land your next career opportunity.' },
      { name: 'twitter:url', content: 'https://goevolo.com/students' },
    ];
    
    twitterTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });
    
    // Keywords meta tag bhi add karna
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'student job app, career move, job search, Evolo AI, student employment, swipe to apply, direct messaging, career opportunities, student jobs';
    
  }, []); // Empty dependency array - sirf ek baar run hoga

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

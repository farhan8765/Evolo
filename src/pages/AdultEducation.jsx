import React, { useEffect } from "react";
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
    // Document title set karna
    document.title = 'Evolo AI - Empowering Students and Connecting Schools';
    
    // Meta description update karna
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Introducing Evolo AI, the app empowering students and connecting schools with employers. Together, we can make education more effective and impactful!';
    
    // Canonical link add karna
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://goevolo.com/';
    
    // OG tags add/update karna (Facebook/WhatsApp ke liye)
    const ogTags = [
      { property: 'og:title', content: 'Evolo AI - Empowering Students and Connecting Schools' },
      { property: 'og:description', content: 'Introducing Evolo AI, the app empowering students and connecting schools with employers. Together, we can make education more effective and impactful!' },
      { property: 'og:url', content: 'https://goevolo.com/' },
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
      { name: 'twitter:title', content: 'Evolo AI - Empowering Students and Connecting Schools' },
      { name: 'twitter:description', content: 'Introducing Evolo AI, the app empowering students and connecting schools with employers. Together, we can make education more effective and impactful!' },
      { name: 'twitter:url', content: 'https://goevolo.com/' },
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
    metaKeywords.content = 'Evolo AI, student empowerment, school-employer connection, education technology, effective education, impactful learning, education app';
    
  }, []); // Empty dependency array - sirf ek baar run hoga

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
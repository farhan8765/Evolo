import React, { useEffect } from 'react'
import Abouthero from '../components/Abouthero'
import Abouttagline from '../components/Abouttagline'
import Aboutdriving from '../components/Aboutdriving'
import AboutSol from '../components/AboutSol'
const About = () => {
  useEffect(() => {
    // Document title set karna
    document.title = 'About Evolo AI - Revolutionizing Adult Education';
    
    // Meta description update karna
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Evolo AI connects employers, students, and institutions to enhance career outcomes and meet educational goals through AI-driven solutions for adult education.';
    
    // Canonical link add karna
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://goevolo.com/about-us/';
    
    // OG tags add/update karna (Facebook/WhatsApp ke liye)
    const ogTags = [
      { property: 'og:title', content: 'About Evolo AI - Revolutionizing Adult Education' },
      { property: 'og:description', content: 'Evolo AI connects employers, students, and institutions to enhance career outcomes and meet educational goals through AI-driven solutions for adult education.' },
      { property: 'og:url', content: 'https://goevolo.com/about-us/' },
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
      { name: 'twitter:title', content: 'About Evolo AI - Revolutionizing Adult Education' },
      { name: 'twitter:description', content: 'Evolo AI connects employers, students, and institutions to enhance career outcomes and meet educational goals through AI-driven solutions for adult education.' },
      { name: 'twitter:url', content: 'https://goevolo.com/about-us/' },
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
    metaKeywords.content = 'Evolo AI about, adult education revolution, AI-driven education, career outcomes, educational goals, employer-student connection, institution solutions';
    
  }, []); // Empty dependency array - sirf ek baar run hoga

  return (
    <div>
      <Abouthero/>
      <Abouttagline/>
      <Aboutdriving/>
      <AboutSol/>
    </div>
  )
}

export default About
import React, { useEffect } from 'react'
import EmpHero from '../components/Emp-hero'
import EmpChoose from '../components/Emp-choose'
import EmpGraph from '../components/Emp-graph'
import EmpFeatureCards from '../components/Empfeaturecards'
import EmpTestimonials from '../components/Emptestmonials'
import GetinTouch from '../components/Getintouch'
import EmpdiscoverTalent from '../components/EmpdiscoverTalent'
import EmpTransforming from '../components/EmpTransforming'

const Employee = () => {
  useEffect(() => {
    // Document title set karna
    document.title = 'Recruit the Best: Evolo AI\'s Adult Education Job Platform';
    
    // Meta description update karna
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Evolo AI helps you connect with top talent from adult schools. Simplify your recruitment process, find skilled candidates, and grow your workforce efficiently.';
    
    // Canonical link add karna
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://goevolo.com/employers';
    
    // OG tags add/update karna (Facebook/WhatsApp ke liye)
    const ogTags = [
      { property: 'og:title', content: 'Recruit the Best: Evolo AI\'s Adult Education Job Platform' },
      { property: 'og:description', content: 'Evolo AI helps you connect with top talent from adult schools. Simplify your recruitment process, find skilled candidates, and grow your workforce efficiently.' },
      { property: 'og:url', content: 'https://goevolo.com/employers' },
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
      { name: 'twitter:title', content: 'Recruit the Best: Evolo AI\'s Adult Education Job Platform' },
      { name: 'twitter:description', content: 'Evolo AI helps you connect with top talent from adult schools. Simplify your recruitment process, find skilled candidates, and grow your workforce efficiently.' },
      { name: 'twitter:url', content: 'https://goevolo.com/employers' },
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
    metaKeywords.content = 'adult education job platform, recruit talent, adult schools recruitment, skilled candidates, workforce growth, Evolo AI, recruitment platform, employer solutions';
    
  }, []); // Empty dependency array - sirf ek baar run hoga

  return (
    <div>
      <EmpHero/>
      <EmpChoose/>
      <EmpGraph/>
      <EmpTransforming/>
      <EmpdiscoverTalent/>
      <EmpTestimonials/>
      <EmpFeatureCards/>
      <GetinTouch/>
    </div>
  )
}

export default Employee
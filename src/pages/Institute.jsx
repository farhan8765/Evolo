import React, { useEffect } from 'react'
import Institutehero from '../components/Institutehero'
import Inschoose from '../components/Inschoose'
import Instestmonials from '../components/Instestmonials'
import Insvideo from '../components/Insvideo'
import InsForm from '../components/Insform'
import InstRecruit from '../components/ InstRecruit'

const Institute = () => {
  useEffect(() => {
    // Document title set karna
    document.title = 'Evolution of Instructions: Drive Career Success';
    
    // Meta description update karna
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Empower your institution with Evolo AI\'s tools to connect students with employers, streamline career services, and elevate adult education success rates.';
    
    // Canonical link add karna
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://goevolo.com/institution/';
    
    // OG tags add/update karna (Facebook/WhatsApp ke liye)
    const ogTags = [
      { property: 'og:title', content: 'Evolution of Instructions: Drive Career Success' },
      { property: 'og:description', content: 'Empower your institution with Evolo AI\'s tools to connect students with employers, streamline career services, and elevate adult education success rates.' },
      { property: 'og:url', content: 'https://goevolo.com/institution/' },
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
      { name: 'twitter:title', content: 'Evolution of Instructions: Drive Career Success' },
      { name: 'twitter:description', content: 'Empower your institution with Evolo AI\'s tools to connect students with employers, streamline career services, and elevate adult education success rates.' },
      { name: 'twitter:url', content: 'https://goevolo.com/institution/' },
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
    metaKeywords.content = 'institution tools, career success, student-employer connection, career services, adult education, Evolo AI, education technology, institution platform';
    
  }, []); // Empty dependency array - sirf ek baar run hoga

  return (
    <div>
      <Institutehero/>
      <Inschoose/>
      <Instestmonials/>
      <InstRecruit/>
      <Insvideo/>
      <InsForm/>
    </div>
  )
}

export default Institute
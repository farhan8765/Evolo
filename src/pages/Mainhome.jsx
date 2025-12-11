// Mainhome.jsx
import React, { useEffect } from 'react'
import Homehero from '../components/Homehero'
import HomePlatform from '../components/HomePlatform'
import HomeWho from '../components/HomeWho'
import ConnectStudent from '../components/ConnectStudent'
import Aboutstay from '../components/Aboutstay'
import NewVideo from '../components/NewVideo'
import Homecardsdetail from '../components/Homecardsdetail'

const Mainhome = () => {
  useEffect(() => {
    // Document title set karna
    document.title = 'Evolo AI – K-12 & Adult Education Solutions';
    
    // Meta description update karna
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Empowering K-12 and adult education with AI-driven student support, career connections, and streamlined operations.';
    
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
      { property: 'og:title', content: 'Evolo AI – K-12 & Adult Education Solutions' },
      { property: 'og:description', content: 'Empowering K-12 and adult education with AI-driven student support, career connections, and streamlined operations.' },
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
      { name: 'twitter:title', content: 'Evolo AI – K-12 & Adult Education Solutions' },
      { name: 'twitter:description', content: 'Empowering K-12 and adult education with AI-driven student support, career connections, and streamlined operations.' },
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
    
    // Keywords meta tag bhi add karna agar chahiye
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'Evolo AI, K-12 education, adult education, AI learning, student support, career connections, education technology';
    
  }, []); // Empty dependency array - sirf ek baar run hoga

  return (
    <div className="w-full overflow-x-hidden">
      <Homehero />
      <NewVideo />
      <HomeWho />
      <HomePlatform />
      <ConnectStudent />
      <Homecardsdetail />
      <Aboutstay />
    </div>
  );
};

export default Mainhome;
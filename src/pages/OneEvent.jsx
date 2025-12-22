import React, { useEffect } from 'react'
import Eventsone from '../components/Eventone'
import EventoneDes from '../components/EventoneDes'
import Eventonemap from '../components/Eventonemap'

const OneEvent = () => {
  useEffect(() => {
    // Document title set karna
    document.title = 'CCAE PD - Evolo AI';
    
    // Canonical link add karna
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://goevolo.com/ccae-pd';
    
  }, []); // Empty dependency array - sirf ek baar run hoga

  return (
    <div>
      <Eventsone />
      <EventoneDes />
      <Eventonemap />
    </div>
  )
}

export default OneEvent
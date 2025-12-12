import React, { useEffect } from 'react' 
import EventsHero from '../components/Eventhero' 
import EventSummit from '../components/EventSummit' 
import EventMap from '../components/Eventmap' 

const Events = () => {
  useEffect(() => {
    // Document title set karna
    document.title = 'Events - Evolo AI';
    
    // Canonical link add karna
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://goevolo.com/events/';
    
  }, []); // Empty dependency array - sirf ek baar run hoga

  return ( 
    <div> 
      <EventsHero/> 
      <EventSummit/> 
      <EventMap/> 
    </div> 
  ) 
} 

export default Events
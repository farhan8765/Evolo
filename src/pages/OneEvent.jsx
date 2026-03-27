import React, { useEffect } from 'react'
import Eventsone from '../components/Eventone'
import EventoneDes from '../components/EventoneDes'
import Eventonemap from '../components/Eventonemap'

const OneEvent = () => {
  useEffect(() => {
    // Document title set karna
    document.title = 'Northern California Adult Education Conference 2025';

    // Meta description update karna
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      'Details of the Northern California Adult Education Conference 2025, held in Redding, highlighting sessions and key insights.';
    
    // Canonical link add karna
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://goevolo.com/ccae-pd';

    // OG tags add/update karna
    const ogTags = [
      { property: 'og:title', content: 'NorCal Adult Education Conference 2025' },
      {
        property: 'og:description',
        content:
          'Details of the Northern California Adult Education Conference 2025, held in Redding, highlighting sessions and key insights.',
      },
      { property: 'og:url', content: 'https://goevolo.com/ccae-pd' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Evolo AI' },
    ];

    ogTags.forEach((tag) => {
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
      { name: 'twitter:title', content: 'NorCal Adult Education Conference 2025' },
      {
        name: 'twitter:description',
        content:
          'Details of the Northern California Adult Education Conference 2025, held in Redding, highlighting sessions and key insights.',
      },
      { name: 'twitter:url', content: 'https://goevolo.com/ccae-pd' },
    ];

    twitterTags.forEach((tag) => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });
    
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
import React, { useEffect } from 'react'
import { applyPageMeta } from '../utils/pageMeta'
import EventsHero from '../components/Eventhero' 
import EventSummit from '../components/EventSummit' 
import EventMap from '../components/Eventmap' 

const Events = () => {
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      applyPageMeta({
        title: 'Council for the Accreditation of Educator Preparation Summit 2025 - Evolo AI',
        description: 'Join Evolo AI at the Council for the Accreditation of Educator Preparation Summit 2025 and explore our education and career solutions.',
        canonical: 'https://goevolo.com/events',
        ogTags: [
          { property: 'og:title', content: 'Council for the Accreditation of Educator Preparation Summit 2025 - Evolo AI' },
          { property: 'og:description', content: 'Join Evolo AI at the Council for the Accreditation of Educator Preparation Summit 2025 and explore our education and career solutions.' },
          { property: 'og:url', content: 'https://goevolo.com/events' },
          { property: 'og:type', content: 'website' },
        ],
        twitterTags: [
          { name: 'twitter:title', content: 'Council for the Accreditation of Educator Preparation Summit 2025 - Evolo AI' },
          { name: 'twitter:description', content: 'Join Evolo AI at the Council for the Accreditation of Educator Preparation Summit 2025 and explore our education and career solutions.' },
          { name: 'twitter:url', content: 'https://goevolo.com/events' },
        ],
      })
    })

    return () => cancelAnimationFrame(id)
  }, [])

  return ( 
    <div> 
      <EventsHero/> 
      <EventSummit/> 
      <EventMap/> 
    </div> 
  ) 
} 

export default Events

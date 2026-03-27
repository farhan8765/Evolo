import React, { useEffect } from 'react'
import { applyPageMeta } from '../utils/pageMeta'
import Abouthero from '../components/Abouthero'
import Abouttagline from '../components/Abouttagline'
import Aboutdriving from '../components/Aboutdriving'
import AboutSol from '../components/AboutSol'

const About = () => {
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      applyPageMeta({
        title: 'About Evolo AI - Revolutionizing Adult Education',
        description: 'Evolo AI connects students, employers, and institutions to improve career outcomes and achieve education goals through practical AI solutions.',
        canonical: 'https://goevolo.com/about-us',
        keywords: 'Evolo AI about, adult education revolution, AI-driven education, career outcomes, educational goals, employer-student connection, institution solutions',
        ogTags: [
          { property: 'og:title', content: 'About Evolo AI - Revolutionizing Adult Education' },
          { property: 'og:description', content: 'Evolo AI connects students, employers, and institutions to improve career outcomes and achieve education goals through practical AI solutions.' },
          { property: 'og:url', content: 'https://goevolo.com/about-us' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Evolo AI' },
        ],
        twitterTags: [
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'About Evolo AI - Revolutionizing Adult Education' },
          { name: 'twitter:description', content: 'Evolo AI connects students, employers, and institutions to improve career outcomes and achieve education goals through practical AI solutions.' },
          { name: 'twitter:url', content: 'https://goevolo.com/about-us' },
        ],
      })
    })
    return () => cancelAnimationFrame(id)
  }, [])

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
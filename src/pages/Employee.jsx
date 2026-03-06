import React, { useEffect } from 'react'
import { applyPageMeta } from '../utils/pageMeta'
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
    const id = requestAnimationFrame(() => {
      applyPageMeta({
        title: "Recruit the Best: Evolo AI's Adult Education Job Platform",
        description: 'Evolo AI helps you connect with top talent from adult schools. Simplify your recruitment process, find skilled candidates, and grow your workforce efficiently.',
        canonical: 'https://goevolo.com/employers',
        keywords: 'adult education job platform, recruit talent, adult schools recruitment, skilled candidates, workforce growth, Evolo AI, recruitment platform, employer solutions',
        ogTags: [
          { property: 'og:title', content: "Recruit the Best: Evolo AI's Adult Education Job Platform" },
          { property: 'og:description', content: 'Evolo AI helps you connect with top talent from adult schools. Simplify your recruitment process, find skilled candidates, and grow your workforce efficiently.' },
          { property: 'og:url', content: 'https://goevolo.com/employers' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Evolo AI' },
        ],
        twitterTags: [
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: "Recruit the Best: Evolo AI's Adult Education Job Platform" },
          { name: 'twitter:description', content: 'Evolo AI helps you connect with top talent from adult schools. Simplify your recruitment process, find skilled candidates, and grow your workforce efficiently.' },
          { name: 'twitter:url', content: 'https://goevolo.com/employers' },
        ],
      })
    })
    return () => cancelAnimationFrame(id)
  }, [])

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
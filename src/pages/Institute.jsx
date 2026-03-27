import React, { useEffect } from 'react'
import { applyPageMeta } from '../utils/pageMeta'
import Institutehero from '../components/Institutehero'
import Inschoose from '../components/Inschoose'
import Instestmonials from '../components/Instestmonials'
import Insvideo from '../components/Insvideo'
import InsForm from '../components/Insform'
import InstRecruit from '../components/ InstRecruit'

const Institute = () => {
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      applyPageMeta({
        title: 'Evolution of Instructions: Drive Career Success',
        description: "Empower your institution with Evolo AI to connect students and employers, streamline career services, and improve adult education outcomes with data.",
        canonical: 'https://goevolo.com/institution',
        keywords: 'institution tools, career success, student-employer connection, career services, adult education, Evolo AI, education technology, institution platform',
        ogTags: [
          { property: 'og:title', content: 'Evolution of Instructions: Drive Career Success' },
          { property: 'og:description', content: "Empower your institution with Evolo AI to connect students and employers, streamline career services, and improve adult education outcomes with data." },
          { property: 'og:url', content: 'https://goevolo.com/institution' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Evolo AI' },
        ],
        twitterTags: [
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Evolution of Instructions: Drive Career Success' },
          { name: 'twitter:description', content: "Empower your institution with Evolo AI to connect students and employers, streamline career services, and improve adult education outcomes with data." },
          { name: 'twitter:url', content: 'https://goevolo.com/institution' },
        ],
      })
    })
    return () => cancelAnimationFrame(id)
  }, [])

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
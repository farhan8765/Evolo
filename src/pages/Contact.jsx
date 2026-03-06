import React, { useEffect } from 'react'
import { applyPageMeta } from '../utils/pageMeta'
import Contactfrom from '../components/Contactfrom'
import ContactMap from '../components/Contactmap'

const Contact = () => {
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      applyPageMeta({
        title: 'Contact Evolo AI',
        description: 'Get in touch with the Evolo AI team for support, partnerships, or general inquiries about our education and career solutions.',
        canonical: 'https://goevolo.com/contact/',
      })
    })
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div>
      <Contactfrom />
      <ContactMap/>
      {/* data */}
    </div>
  )
}

export default Contact

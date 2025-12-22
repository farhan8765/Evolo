import React, { useEffect } from 'react'
import Contactfrom from '../components/Contactfrom'
import ContactMap from '../components/Contactmap'

const Contact = () => {
  useEffect(() => {
    // Document title set karna
    document.title = 'Contact Evolo AI';

    // Meta description update karna
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      'Get in touch with the Evolo AI team for support, partnerships, or general inquiries about our education and career solutions.';

    // Canonical link add karna
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://goevolo.com/contact/';
  }, []);

  return (
    <div>
      <Contactfrom />
      <ContactMap/>
      {/* data */}
    </div>
  )
}

export default Contact

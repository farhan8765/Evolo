import React, { useEffect } from 'react';
import AcessHero from '../components/AcessHero';
import AcessFunction from '../components/AcessFunction';
import Aboutstay from '../components/Aboutstay';

const Accessibility = () => {
  useEffect(() => {
    // Document title
    document.title = 'Evolo AI Accessibility Commitment';

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      'Evolo AI is committed to inclusive access for all learners and job seekers. Our platform meets global accessibility standards to support every user.';

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://goevolo.com/accessibility/';

    // Open Graph tags (for social sharing)
    const ogTags = [
      {
        property: 'og:title',
        content: 'Evolo AI Accessibility Commitment',
      },
      {
        property: 'og:description',
        content:
          'Evolo AI is committed to inclusive access for all learners and job seekers. Our platform meets global accessibility standards to support every user.',
      },
      {
        property: 'og:url',
        content: 'https://goevolo.com/accessibility/',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Evolo AI' },
      {
        property: 'og:image',
        content: 'https://goevolo.com/images/wcag2.1A-blue-v.png',
      },
      {
        property: 'og:image:alt',
        content: 'WCAG 2.1 Level A conformance badge for Evolo AI accessibility.',
      },
    ];

    ogTags.forEach((tag) => {
      let metaTag = document.querySelector(
        `meta[property="${tag.property}"]`
      );
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });

    // Twitter meta tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: 'Evolo AI Accessibility Commitment',
      },
      {
        name: 'twitter:description',
        content:
          'Evolo AI is committed to inclusive access for all learners and job seekers. Our platform meets global accessibility standards to support every user.',
      },
      {
        name: 'twitter:url',
        content: 'https://goevolo.com/accessibility/',
      },
      {
        name: 'twitter:image',
        content: 'https://goevolo.com/images/wcag2.1A-blue-v.png',
      },
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

    // Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content =
      'Evolo AI accessibility, WCAG 2.1, inclusive access, learners, job seekers, accessibility commitment, accessible platform';
  }, []);

  return (
    <div>
      <AcessHero />
      <AcessFunction />
      <Aboutstay />
    </div>
  );
};

export default Accessibility;
// Mainhome.jsx
import React, { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import Homehero from '../components/Homehero'
import HomePlatform from '../components/HomePlatform'
import HomeWho from '../components/HomeWho'
import NewVideo from '../components/NewVideo'

// Lazy-load below-the-fold sections to reduce main-thread blocking on initial load
const ConnectStudent = lazy(() => import('../components/ConnectStudent'))
const Homecardsdetail = lazy(() => import('../components/Homecardsdetail'))
const Aboutstay = lazy(() => import('../components/Aboutstay'))

const MAINHOME_META = {
  title: 'Evolo AI – K-12 & Adult Education Solutions Platform',
  description: 'AI-driven platform for K-12 student well-being and adult education, helping schools, employers, and institutions connect learners with meaningful opportunities.',
  keywords: 'Evolo AI, K-12 education, adult education, AI learning, student support, career connections, education technology',
  canonical: 'https://goevolo.com/',
  image: 'https://goevolo.com/images/Homehero.webp',
};

const Mainhome = () => (
  <>
    <Helmet>
      <title>{MAINHOME_META.title}</title>
      <meta name="description" content={MAINHOME_META.description} />
      <meta name="keywords" content={MAINHOME_META.keywords} />
      <link rel="canonical" href={MAINHOME_META.canonical} />
      <meta property="og:title" content={MAINHOME_META.title} />
      <meta property="og:description" content={MAINHOME_META.description} />
      <meta property="og:url" content={MAINHOME_META.canonical} />
      <meta property="og:image" content={MAINHOME_META.image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Evolo AI" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={MAINHOME_META.title} />
      <meta name="twitter:description" content={MAINHOME_META.description} />
      <meta name="twitter:url" content={MAINHOME_META.canonical} />
      <meta name="twitter:image" content={MAINHOME_META.image} />
    </Helmet>
    <div className="w-full overflow-x-hidden">
      <Homehero />
      <NewVideo />
      <HomeWho />
      <HomePlatform />
      <Suspense fallback={<div className="min-h-[120px]" aria-hidden="true" />}>
        <ConnectStudent />
        <Homecardsdetail />
        <Aboutstay />
      </Suspense>
    </div>
  </>
);

export default Mainhome;
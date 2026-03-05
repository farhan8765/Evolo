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
  title: 'Evolo AI – K-12 & Adult Education Solutions',
  description: 'Empowering K-12 and adult education with AI-driven student support, career connections, and streamlined operations.',
  keywords: 'Evolo AI, K-12 education, adult education, AI learning, student support, career connections, education technology',
  canonical: 'https://goevolo.com/',
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
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Evolo AI" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={MAINHOME_META.title} />
      <meta name="twitter:description" content={MAINHOME_META.description} />
      <meta name="twitter:url" content={MAINHOME_META.canonical} />
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
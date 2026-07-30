// Mainhome.jsx
import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Homehero from '../components/Homehero'

// Lazy-load below-the-fold sections to reduce main-thread blocking on initial load
const NewVideo = lazy(() => import('../components/NewVideo'))
const HomeWho = lazy(() => import('../components/HomeWho'))
const HomePlatform = lazy(() => import('../components/HomePlatform'))
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

function DeferredHomepageSections() {
  const [loadSections, setLoadSections] = useState(false);

  useEffect(() => {
    if (loadSections) return undefined;

    const load = () => setLoadSections(true);
    const timer = window.setTimeout(load, 12000);
    const options = { once: true, passive: true };

    window.addEventListener('scroll', load, options);
    window.addEventListener('pointerdown', load, options);
    window.addEventListener('keydown', load, { once: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', load);
      window.removeEventListener('pointerdown', load);
      window.removeEventListener('keydown', load);
    };
  }, [loadSections]);

  if (!loadSections) {
    return <div className="min-h-[720px] bg-[#f7f6fb]" aria-hidden="true" />;
  }

  return (
    <Suspense fallback={<div className="min-h-[720px] bg-[#f7f6fb]" aria-hidden="true" />}>
      <NewVideo />
      <HomeWho />
      <HomePlatform />
      <ConnectStudent />
      <Homecardsdetail />
      <Aboutstay />
    </Suspense>
  );
}

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
      <nav aria-label="Quick internal links" className="sr-only">
        <Link to="/students">Students</Link>
        <Link to="/adult">Adult Education</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <section aria-label="Homepage summary" className="sr-only">
        <p>
          Evolo AI provides AI-powered solutions for education and student well-being across K12 and adult education programs.
          The platform supports students, employers, and institutions through connected learning and career pathways.
        </p>
      </section>
      <Homehero />
      <DeferredHomepageSections />
    </div>
  </>
);

export default Mainhome;

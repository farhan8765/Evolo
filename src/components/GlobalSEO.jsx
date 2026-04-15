import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/** Policy/legal routes use trailing slashes; keep canonical aligned with visible URL. */
const TRAILING_SLASH_ROUTES = [
  '/privacy-policy',
  '/terms-of-service',
  '/security-privacy',
  '/cookie-policy',
];

function normalizeCanonicalPathname(pathname) {
  for (const base of TRAILING_SLASH_ROUTES) {
    if (pathname === base || pathname === `${base}/`) {
      return `${base}/`;
    }
  }
  return pathname;
}

const GlobalSEO = () => {
  const location = useLocation();
  const baseUrl = 'https://goevolo.com';

  // Check if there are query parameters
  const hasQueryParams = location.search.length > 0;
  const rawPath = location.pathname && location.pathname.startsWith('/') ? location.pathname : '/';
  const pathname = normalizeCanonicalPathname(rawPath);
  const canonicalUrl = `${baseUrl}${pathname}`;

  useEffect(() => {
    const canonicalLinks = Array.from(document.head.querySelectorAll('link[rel="canonical"]'));

    if (canonicalLinks.length === 0) {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonicalUrl;
      document.head.appendChild(link);
      return;
    }

    canonicalLinks[0].href = canonicalUrl;
    canonicalLinks.slice(1).forEach((node) => node.remove());
  }, [canonicalUrl]);

  // Determine robots meta
  const robotsContent = hasQueryParams 
    ? 'noindex, follow'
    : 'index, follow';

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={robotsContent} />
    </Helmet>
  );
};

export default GlobalSEO;

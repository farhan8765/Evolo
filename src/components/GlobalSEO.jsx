import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const GlobalSEO = () => {
  const location = useLocation();
  const baseUrl = 'https://goevolo.com';

  // Check if there are query parameters
  const hasQueryParams = location.search.length > 0;
  const pathname = location.pathname && location.pathname.startsWith('/') ? location.pathname : '/';
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

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const GlobalSEO = () => {
  const location = useLocation();
  const baseUrl = 'https://goevolo.com';

  // Check if there are query parameters
  const hasQueryParams = location.search.length > 0;
  const pathname = location.pathname && location.pathname.startsWith('/') ? location.pathname : '/';
  const canonicalUrl = `${baseUrl}${pathname}`;

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

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const GlobalSEO = () => {
  const location = useLocation();
  const baseUrl = 'https://goevolo.com';

  // Check if there are query parameters
  const hasQueryParams = location.search.length > 0;

  // Normalize pathname and keep a trailing slash for all non-root routes.
  let normalizedPath = location.pathname;

  // Ensure leading slash (should already have it from React Router)
  if (!normalizedPath.startsWith('/')) {
    normalizedPath = '/' + normalizedPath;
  }

  if (normalizedPath !== '/' && !normalizedPath.endsWith('/')) {
    normalizedPath = `${normalizedPath}/`;
  }

  // Determine canonical URL
  const canonicalUrl = hasQueryParams 
    ? `${baseUrl}/`
    : normalizedPath === '/'
      ? `${baseUrl}/`
      : `${baseUrl}${normalizedPath}`;

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

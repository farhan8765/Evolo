import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const GlobalSEO = () => {
  const location = useLocation();
  const baseUrl = 'https://goevolo.com';
  
  // Check if there are query parameters
  const hasQueryParams = location.search.length > 0;
  
  // Normalize pathname - ensure consistent format
  // Remove trailing slash except for root, ensure leading slash
  let normalizedPath = location.pathname;
  
  // Remove trailing slash if not root
  if (normalizedPath !== '/' && normalizedPath.endsWith('/')) {
    normalizedPath = normalizedPath.slice(0, -1);
  }
  
  // Ensure leading slash (should already have it from React Router)
  if (!normalizedPath.startsWith('/')) {
    normalizedPath = '/' + normalizedPath;
  }
  
  // For root path, use empty string
  if (normalizedPath === '/') {
    normalizedPath = '';
  }
  
  // Determine canonical URL
  // If query params exist, point to homepage to avoid duplicate content
  // Otherwise, self-referencing canonical (will be green in production)
  const canonicalUrl = hasQueryParams 
    ? `${baseUrl}/`  // Query params = point to homepage
    : `${baseUrl}${normalizedPath}`;  // No query params = self-referencing (green in production)
  
  // Determine robots meta
  const robotsContent = hasQueryParams 
    ? 'noindex, follow'  // Block indexing but allow following links
    : 'index, follow';   // Normal indexing
  
  return (
    <Helmet>
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots meta tag */}
      <meta name="robots" content={robotsContent} />
    </Helmet>
  );
};

export default GlobalSEO;


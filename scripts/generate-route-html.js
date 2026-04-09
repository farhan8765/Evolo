/**
 * Generate route-specific static HTML files with canonical tags.
 * This avoids headless-browser dependencies (e.g. Puppeteer) in CI.
 */
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '../build');
const rootIndexPath = path.join(buildDir, 'index.html');
const baseUrl = 'https://goevolo.com';

const routes = [
  '/',
  '/adult',
  '/students',
  '/employers',
  '/institution',
  '/mental',
  '/about-us',
  '/contact/',
  '/events',
  '/ccae-pd/',
  '/faqs',
  '/accessibility/',
  '/security-privacy/',
  '/terms-of-service/',
  '/cookie-policy/',
  '/privacy-policy/',
  '/caep-2024',
  '/blog',
  '/overcoming-barriers-how-single-parents-benefit-from-adult-schools/',
  '/adult-school-vs-online-college/',
  '/career-switch-strategies-after-30s/',
  '/low-stress-jobs-for-autistic-adults/',
  '/9-benefits-of-work-for-teens-young-adults/',
  '/how-many-teens-and-young-adults-work-retail/',
  '/best-remote-jobs-without-degree/',
  '/upskilling-vs-reskilling-2025/',
  '/the-role-of-ai-in-hiring-how-adult-job-seekers-can-stay-competitive/',
  '/overcoming-employment-gaps-a-guide-for-adult-job-seekers/',
  '/empowering-lifelong-learners-how-adult-education-is-key-to-building-a-sustainable-workforce/',
  '/top-7-in-demand-careers-for-adults-in-2025/',
  '/the-2025-job-search-how-to-stand-out-in-a-competitive-market/',
  '/the-future-of-adult-education-how-technology-is-bridging-the-gap/',
  '/top-5-high-income-skills-young-adults-should-learn-for-2025/',
  '/top-10-career-tips-and-advice-for-young-adults-starting-their-journey/',
  '/caep-2024-summit/',
];

if (!fs.existsSync(rootIndexPath)) {
  console.warn('scripts/generate-route-html: build/index.html not found, skipping');
  process.exit(0);
}

const rootHtml = fs.readFileSync(rootIndexPath, 'utf8');

function toCanonical(route) {
  if (route === '/') return `${baseUrl}/`;
  const normalized = route.startsWith('/') ? route : `/${route}`;
  return `${baseUrl}${normalized}`;
}

function withCanonical(html, canonicalUrl) {
  const canonicalTag = `<link rel="canonical" href="${canonicalUrl}" />`;
  const withoutCanonical = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/gi, '');
  if (withoutCanonical.includes('</head>')) {
    return withoutCanonical.replace('</head>', `  ${canonicalTag}\n</head>`);
  }
  return `${withoutCanonical}\n${canonicalTag}`;
}

for (const route of routes) {
  const canonicalUrl = toCanonical(route);
  const routeHtml = withCanonical(rootHtml, canonicalUrl);

  if (route === '/') {
    fs.writeFileSync(rootIndexPath, routeHtml);
    continue;
  }

  const routePath = route.replace(/^\/|\/$/g, '');
  const routeDir = path.join(buildDir, routePath);
  const routeIndexPath = path.join(routeDir, 'index.html');

  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(routeIndexPath, routeHtml);
}

console.log(`scripts/generate-route-html: generated canonical HTML for ${routes.length} routes`);

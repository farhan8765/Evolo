/**
 * Generate route-specific static HTML files with canonical tags and crawlable
 * noscript route copy (matches in-app headings; no runtime JS required for SEO tools).
 */
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '../build');
const rootIndexPath = path.join(buildDir, 'index.html');
const baseUrl = 'https://goevolo.com';
const siteName = 'Evolo AI';
const siteDescription =
  'Evolo AI provides AI-powered education and career tools for adult education, K-12 student well-being, institutions, employers, counselors, administrators, classified staff, certified health workers, and learners.';
const deploymentDate = '2026-07-30';

const routes = [
  '/',
  '/adult',
  '/students',
  '/employers',
  '/institution',
  '/mental',
  '/cybhi',
  '/counselors',
  '/administrators',
  '/classified-staff',
  '/certified-health-workers',
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

const blogPostRoutes = new Set(routes.slice(routes.indexOf('/overcoming-barriers-how-single-parents-benefit-from-adult-schools/')));

/** Matches visible H1 intent from React pages (noscript fallback for crawlers). */
const routeSeo = {
  '/': {
    h1: 'AI-powered solutions for Education & Student Well-Being',
    intro:
      'Evolo AI provides AI-powered solutions for K-12 student well-being and adult education, connecting learners, institutions, and employers through career-focused pathways.',
  },
  '/adult': {
    h1: 'The Future of Adult Education',
    intro:
      'We connect Students, Employers, and Institutions through Evolo AI—building pathways from adult education to meaningful careers.',
  },
  '/students': {
    h1: 'Welcome to the future of Job Searches',
    intro:
      'Our app connects students from Adult Schools, Community Colleges, and Job Centers with the perfect jobs. Swipe, connect with employers, and boost your chances of landing a successful career—all in one place.',
  },
  '/employers': {
    h1: 'Your future workforce is at your fingertips',
    intro:
      'We work directly with Adult/Technical Schools to help you recruit their best and brightest.',
  },
  '/institution': {
    h1: 'The Future of Adult Education',
    intro:
      'We help improve student outcomes and help you track and showcase your institution’s achievements, connect with employers and improve operations.',
  },
  '/mental': {
    h1: 'K-12 Mental Health (CYBHI)',
    intro:
      'Supporting student mental health through innovative AI-powered solutions. Our CYBHI-aligned platform helps counselors, administrators, and classified staff provide better care and support to students across K-12 education systems.',
  },
  '/cybhi': {
    h1: 'CYBHI Behavioral Incident & Counseling Management App',
    intro:
      'AI-powered, CYBHI-compliant tools built for California school behavioral health teams.',
  },
  '/counselors': {
    h1: 'Empowering Counselors with Smarter Documentation',
    intro:
      'Less paperwork. More time for students. Every session is compliant and billable.',
  },
  '/administrators': {
    h1: 'Full Control. Complete Compliance. Total Visibility.',
    intro:
      'System overseers are responsible for compliance, approvals, and user management.',
  },
  '/classified-staff': {
    h1: 'Classified Staff: You Saw It. The App Documents It.',
    intro:
      'Non-certified school personnel, campus security, instructional aides, and operations staff who witness and report behavioral incidents.',
  },
  '/certified-health-workers': {
    h1: 'Certified Health Workers: One Role. Two Critical Jobs. One Seamless App.',
    intro:
      'Authorized staff who both report incidents and deliver follow-up coaching sessions.',
  },
  '/about-us': {
    h1: 'Empowering growth through Adult Education programs',
    intro:
      'goevolo is revolutionizing adult education by harnessing the power of artificial intelligence to focus on enhancing student career outcomes and helping institutions meet their state-mandated objectives.',
  },
  '/contact/': {
    h1: 'Have questions or need assistance we’re here to help!',
    intro:
      'Whether you’re a student, employee, or institution, feel free to reach out to us for support, inquiries, or collaboration opportunities.',
  },
  '/events': {
    h1: "Let's Connect at the CAEP Summit 2025!",
    intro:
      'Join Evolo AI at the Council for the Accreditation of Educator Preparation Summit 2025 and explore our education and career solutions.',
  },
  '/ccae-pd/': {
    h1: 'Presenting "AI in Adult Education" on Thursday, March 14!',
    intro:
      'Details of the Northern California Adult Education Conference 2025, held in Redding, highlighting sessions and key insights.',
  },
  '/faqs': {
    h1: 'FAQs',
    intro: 'Find answers to common questions about Evolo AI, our platform, and how we support students and institutions.',
  },
  '/accessibility/': {
    h1: 'Accessibility',
    intro:
      'Evolo AI is committed to inclusive access for all learners and job seekers. Our platform meets global accessibility standards to support every user.',
  },
  '/security-privacy/': {
    h1: 'Security and Privacy',
    intro:
      'This document outlines the security measures implemented in our application to ensure data privacy, secure access, and protection against unauthorized usage.',
  },
  '/terms-of-service/': {
    h1: 'Terms of Service',
    intro:
      'Welcome to goevolo.com These Terms of Service govern your use of our website and services. By using our website, you agree to these Terms.',
  },
  '/cookie-policy/': {
    h1: 'Cookies Policy',
    intro:
      'At goevolo.com, we respect the privacy of our visitors and are committed to being transparent about the use of cookies on our website.',
  },
  '/privacy-policy/': {
    h1: 'Privacy Policy',
    intro:
      'This Privacy Policy covers the mobile applications EvoloAI Student and EvoloAI Instructor, published by Yusair, Inc., and our practices for collecting and using information.',
  },
  '/caep-2024': {
    h1: "Let's Connect Over Coffee At The CAEP Summit!",
    intro:
      "We're excited to meet you at the CAEP 2024 Summit in Oakland, California—connect with consortium leaders, school personnel, and vendors.",
  },
  '/blog': {
    h1: 'Explore Our Blog',
    intro: 'Read articles on adult education, careers, hiring trends, and workforce development from Evolo AI.',
  },
  '/overcoming-barriers-how-single-parents-benefit-from-adult-schools/': {
    h1: 'Overcoming Barriers: How Single Parents Benefit from Adult Schools',
    intro:
      'Discover how adult schools help single parents overcome barriers to education and employment with flexible programs and support.',
  },
  '/adult-school-vs-online-college/': {
    h1: 'Adult School vs. Online College: Pros & Cons for Career Changers',
    intro:
      'Compare adult school and online college for career changers—cost, structure, support, and outcomes.',
  },
  '/career-switch-strategies-after-30s/': {
    h1: 'Career Change After 30: How Adults Can Successfully Pivot to New Industries',
    intro:
      'Practical strategies for adults changing careers after 30, including skills, networking, and education paths.',
  },
  '/low-stress-jobs-for-autistic-adults/': {
    h1: 'Low-stress jobs for autistic adults',
    intro:
      'Explore low-stress jobs for autistic adults with clear routines, less overwhelm, and supportive workplaces that fit their strengths.',
  },
  '/9-benefits-of-work-for-teens-young-adults/': {
    h1: '9 Benefits of Work for Teens and Young Adults',
    intro:
      'Learn why early work experience helps teens and young adults build skills, confidence, and career readiness.',
  },
  '/how-many-teens-and-young-adults-work-retail/': {
    h1: 'What Percentage of Teens and Young Adults Have Retail Jobs?',
    intro:
      'Wondering how many teens and young adults work in retail? Discover key stats, trends, and career tips to help guide your journey.',
  },
  '/best-remote-jobs-without-degree/': {
    h1: 'The Best Remote Jobs for Adults Without a College Degree',
    intro:
      'Explore remote roles that value skills and experience over a four-year degree, with paths to grow your career from home.',
  },
  '/upskilling-vs-reskilling-2025/': {
    h1: "Upskilling vs. Reskilling: What's Right for You in a Rapidly Changing Job Market",
    intro:
      'Understand the difference between upskilling and reskilling and how to choose the right path in 2025.',
  },
  '/the-role-of-ai-in-hiring-how-adult-job-seekers-can-stay-competitive/': {
    h1: 'The Role of AI in Hiring: How Adult Job Seekers Can Stay Competitive',
    intro:
      'How AI is changing hiring and what adult job seekers can do to stand out in automated screening and interviews.',
  },
  '/overcoming-employment-gaps-a-guide-for-adult-job-seekers/': {
    h1: 'Overcoming Employment Gaps: A Guide for Adult Job Seekers',
    intro:
      'Practical guidance for explaining employment gaps and positioning your experience for your next role.',
  },
  '/empowering-lifelong-learners-how-adult-education-is-key-to-building-a-sustainable-workforce/': {
    h1: 'Empowering Lifelong Learners: How Adult Education is Key to Building a Sustainable Workforce',
    intro:
      'Why lifelong learning and adult education matter for economic mobility and workforce sustainability.',
  },
  '/top-7-in-demand-careers-for-adults-in-2025/': {
    h1: 'Top 7 In-Demand Careers for Adults in 2025: Opportunities You Should Know About in the U.S.',
    intro:
      'A look at high-demand careers for adults in 2025 and what skills employers are hiring for.',
  },
  '/the-2025-job-search-how-to-stand-out-in-a-competitive-market/': {
    h1: 'The 2025 Job Search: How to Stand Out in a Competitive Market',
    intro:
      'Tactics to differentiate your applications, interviews, and personal brand in a competitive 2025 job market.',
  },
  '/the-future-of-adult-education-how-technology-is-bridging-the-gap/': {
    h1: 'The Future of Adult Education: How Technology is Bridging the Gap Between Students, Institutions, and Employers',
    intro:
      'How technology platforms connect adult learners, schools, and employers to improve outcomes and transparency.',
  },
  '/top-5-high-income-skills-young-adults-should-learn-for-2025/': {
    h1: 'Top 5 High-Income Skills Young Adults Should Learn for 2025',
    intro:
      'High-income skills that can boost earning potential for young adults entering the workforce or upskilling.',
  },
  '/top-10-career-tips-and-advice-for-young-adults-starting-their-journey/': {
    h1: 'Top 10 Career Tips and Advice for Young Adults Starting Their Journey',
    intro:
      'Foundational career advice for young adults building their first jobs, education plans, and long-term goals.',
  },
  '/caep-2024-summit/': {
    h1: 'Evolo AI Shines at the CAEP 2024 Summit: Empowering Adult Education with Innovative AI Solutions',
    intro:
      'Highlights from Evolo AI’s presence at the CAEP 2024 Summit and how we support adult education with AI-powered tools.',
  },
};

if (!fs.existsSync(rootIndexPath)) {
  console.warn('scripts/generate-route-html: build/index.html not found, skipping');
  process.exit(0);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeJsonLd(obj) {
  return JSON.stringify(obj)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}

const rootHtml = fs.readFileSync(rootIndexPath, 'utf8');

function getPageTitle(route) {
  const seo = routeSeo[route] || routeSeo['/'];
  return route === '/' ? 'Evolo AI - K-12 & Adult Education Solutions Platform' : `${seo.h1} | Evolo AI`;
}

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

function upsertHeadTag(html, regex, tag) {
  if (regex.test(html)) {
    return html.replace(regex, tag);
  }
  return html.replace('</head>', `  ${tag}\n</head>`);
}

function withHeadSeo(html, route, canonicalUrl) {
  const seo = routeSeo[route] || routeSeo['/'];
  const title = getPageTitle(route);
  const description = seo.intro;

  let updated = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  updated = upsertHeadTag(
    updated,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${escapeHtml(description)}" />`,
  );
  updated = upsertHeadTag(
    updated,
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
  );
  updated = upsertHeadTag(
    updated,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
  );
  updated = upsertHeadTag(
    updated,
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
  );
  updated = upsertHeadTag(
    updated,
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
  );
  updated = upsertHeadTag(
    updated,
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
  );

  return updated;
}

function getPageSchemaType(route) {
  if (route === '/about-us') return 'AboutPage';
  if (route === '/contact/') return 'ContactPage';
  if (route === '/blog') return 'Blog';
  return 'WebPage';
}

function buildStructuredData(route, canonicalUrl) {
  const seo = routeSeo[route] || routeSeo['/'];
  const title = getPageTitle(route);
  const pageId = `${canonicalUrl}#webpage`;
  const organizationId = `${baseUrl}/#organization`;
  const websiteId = `${baseUrl}/#website`;
  const graph = [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: siteName,
      url: `${baseUrl}/`,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/evolologo.png`,
        width: 182,
        height: 38,
      },
      description: siteDescription,
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      name: siteName,
      url: `${baseUrl}/`,
      publisher: {
        '@id': organizationId,
      },
      inLanguage: 'en-US',
    },
    {
      '@type': getPageSchemaType(route),
      '@id': pageId,
      url: canonicalUrl,
      name: title,
      headline: seo.h1,
      description: seo.intro,
      isPartOf: {
        '@id': websiteId,
      },
      about: {
        '@id': organizationId,
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/Homehero.webp`,
        width: 1200,
        height: 675,
      },
      dateModified: deploymentDate,
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: [],
    },
  ];

  const breadcrumb = graph[3];
  breadcrumb.itemListElement = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${baseUrl}/`,
    },
  ];

  if (route !== '/') {
    breadcrumb.itemListElement.push({
      '@type': 'ListItem',
      position: 2,
      name: seo.h1,
      item: canonicalUrl,
    });
  }

  if (blogPostRoutes.has(route)) {
    const articleId = `${canonicalUrl}#article`;
    graph[2].mainEntity = {
      '@id': articleId,
    };
    graph.push({
      '@type': 'BlogPosting',
      '@id': articleId,
      mainEntityOfPage: {
        '@id': pageId,
      },
      headline: seo.h1,
      description: seo.intro,
      image: `${baseUrl}/images/Homehero.webp`,
      author: {
        '@id': organizationId,
      },
      publisher: {
        '@id': organizationId,
      },
      datePublished: '2025-01-27',
      dateModified: deploymentDate,
      inLanguage: 'en-US',
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

function withStructuredData(html, route, canonicalUrl) {
  const schema = buildStructuredData(route, canonicalUrl);
  const schemaTag = `<script type="application/ld+json" id="evolo-schema">${escapeJsonLd(schema)}</script>`;
  const withoutExisting = html.replace(/<script type="application\/ld\+json" id="evolo-schema">[\s\S]*?<\/script>/gi, '');
  return withoutExisting.replace('</head>', `  ${schemaTag}\n</head>`);
}

function renderRouteList() {
  return routes
    .map((route) => {
      const seo = routeSeo[route];
      if (!seo) return '';

      return [
        '          <li style="margin-bottom:14px;">',
        `            <a href="${escapeHtml(route)}">${escapeHtml(seo.h1)}</a>`,
        `            <p style="margin:4px 0 0;">${escapeHtml(seo.intro)}</p>`,
        '          </li>',
      ].join('\n');
    })
    .filter(Boolean)
    .join('\n');
}

function renderNoscriptMain(route) {
  const seo = routeSeo[route] || routeSeo['/'];

  return [
    '    <noscript>',
    '      <main style="max-width:960px;margin:0 auto;padding:32px 20px;font-family:Raleway,Arial,sans-serif;line-height:1.6;color:#1f2937;">',
    `        <h1 style="font-size:2rem;line-height:1.2;margin-bottom:16px;">${escapeHtml(seo.h1)}</h1>`,
    `        <p style="margin-bottom:16px;">${escapeHtml(seo.intro)}</p>`,
    '        <p style="margin-bottom:20px;">Evolo AI connects adult education, K-12 student support, employers, institutions, counselors, administrators, classified staff, certified health workers, and learners through AI-powered education and career tools.</p>',
    '        <section aria-label="Evolo AI overview">',
    '          <h2 style="font-size:1.35rem;line-height:1.3;margin:24px 0 12px;">Platform overview</h2>',
    '          <p>Evolo AI supports student job matching, institutional reporting, employer recruiting, CYBHI-aligned behavioral incident workflows, counselor documentation, compliance oversight, and practical resources for adult learners and career changers.</p>',
    '        </section>',
    '        <nav aria-label="Static internal links">',
    '          <h2 style="font-size:1.35rem;line-height:1.3;margin:24px 0 12px;">Pages and resources</h2>',
    '          <ul style="padding-left:20px;margin:0;">',
    renderRouteList(),
    '          </ul>',
    '        </nav>',
    '      </main>',
    '    </noscript>',
  ].join('\n');
}

function renderStaticShell(route) {
  const seo = routeSeo[route] || routeSeo['/'];

  if (route === '/') {
    return [
      '      <!-- static-shell:start -->',
      '      <main class="static-shell" data-static-shell style="min-height:100vh;background:linear-gradient(#fff,#f9fafb);font-family:Raleway,Arial,sans-serif;color:#1f2937;">',
      '        <header style="min-height:72px;padding:24px 16px;">',
      '          <nav style="max-width:1152px;min-height:56px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:24px;border:1px solid #eaecf4;border-radius:32px;background:#fff;padding:16px 24px;">',
      '            <a href="/" aria-label="Evolo AI home">',
      '              <img src="/images/evolologo.png" alt="Evolo AI logo" width="120" height="32" style="height:32px;width:auto;object-fit:contain;" />',
      '            </a>',
      '            <a href="/contact" style="border-radius:12px;background:#5c2dd5;color:#fff;padding:10px 24px;font-size:14px;font-weight:700;text-decoration:none;">Contact</a>',
      '          </nav>',
      '        </header>',
      '        <section style="max-width:1536px;margin:0 auto;padding:16px 8px 0;text-align:center;">',
      '          <p style="margin:0 0 16px;font-size:14px;font-weight:700;font-style:italic;color:#374151;">Empowering Education Through Technology</p>',
      '          <h1 style="margin:0 0 16px;font-size:clamp(32px,5vw,60px);line-height:1.1;font-weight:800;color:#111827;">AI-powered solutions for<br />Education &amp; Student Well-Being</h1>',
      '          <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:12px;margin:0 0 32px;padding:0 8px;">',
      '            <a href="/mental" style="min-width:172px;border-radius:8px;background:#5a14ed;color:#fff;padding:12px 40px;font-weight:700;text-decoration:none;">K12</a>',
      '            <a href="/adult" style="min-width:220px;border:2px solid #5a14ed;border-radius:8px;background:#fff;color:#5a14ed;padding:10px 24px;font-weight:700;text-decoration:none;">Adult Education Program</a>',
      '          </div>',
      '          <img src="/images/Homehero.webp" alt="Evolo AI platform preview" width="1200" height="675" fetchpriority="high" decoding="async" style="display:block;width:100%;height:auto;max-width:1200px;margin:0 auto;border-radius:8px;" />',
      '        </section>',
      '      </main>',
      '      <!-- static-shell:end -->',
    ].join('\n');
  }

  return [
    '      <!-- static-shell:start -->',
    '      <main class="static-shell" data-static-shell style="min-height:100vh;background:#fff;font-family:Raleway,Arial,sans-serif;color:#1f2937;">',
    '        <header style="min-height:72px;padding:24px 16px;">',
    '          <nav style="max-width:1152px;min-height:56px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:24px;border:1px solid #eaecf4;border-radius:32px;background:#fff;padding:16px 24px;">',
    '            <a href="/" aria-label="Evolo AI home">',
    '              <img src="/images/evolologo.png" alt="Evolo AI logo" width="120" height="32" style="height:32px;width:auto;object-fit:contain;" />',
    '            </a>',
    '            <a href="/contact" style="border-radius:12px;background:#5c2dd5;color:#fff;padding:10px 24px;font-size:14px;font-weight:700;text-decoration:none;">Contact</a>',
    '          </nav>',
    '        </header>',
    '        <section style="max-width:960px;margin:0 auto;padding:40px 20px;">',
    `          <h1 style="margin:0 0 16px;font-size:clamp(32px,5vw,56px);line-height:1.1;font-weight:800;color:#111827;">${escapeHtml(seo.h1)}</h1>`,
    `          <p style="max-width:760px;margin:0 0 24px;font-size:18px;line-height:1.7;color:#4b5563;">${escapeHtml(seo.intro)}</p>`,
    '          <nav aria-label="Primary links" style="display:flex;flex-wrap:wrap;gap:12px;">',
    '            <a href="/" style="color:#5a14ed;font-weight:700;">Home</a>',
    '            <a href="/adult" style="color:#5a14ed;font-weight:700;">Adult Education</a>',
    '            <a href="/mental" style="color:#5a14ed;font-weight:700;">K-12 Support</a>',
    '            <a href="/blog" style="color:#5a14ed;font-weight:700;">Resources</a>',
    '            <a href="/contact/" style="color:#5a14ed;font-weight:700;">Contact</a>',
    '          </nav>',
    '        </section>',
    '      </main>',
    '      <!-- static-shell:end -->',
  ].join('\n');
}

function withStaticShell(html, route) {
  const shell = renderStaticShell(route);
  const withMarkers = html.replace(
    /<!-- static-shell:start -->[\s\S]*?<!-- static-shell:end -->/,
    shell,
  );
  if (withMarkers !== html) return withMarkers;

  return html.replace(
    /<main[^>]*class="[^"]*\bstatic-shell\b[^"]*"[^>]*>[\s\S]*?<\/main>/,
    shell,
  );
}

/**
 * Replace the body noscript block with route-specific crawler-visible copy.
 */
function withNoscriptSeo(html, route) {
  const noscriptMain = renderNoscriptMain(route);
  const updated = html.replace(/<body>\s*<noscript>[\s\S]*?<\/noscript>/, `<body>\n${noscriptMain}`);
  return updated === html ? html.replace('<body>', `<body>\n${noscriptMain}`) : updated;
}

for (const route of routes) {
  const canonicalUrl = toCanonical(route);
  let routeHtml = withCanonical(rootHtml, canonicalUrl);
  routeHtml = withHeadSeo(routeHtml, route, canonicalUrl);
  routeHtml = withStructuredData(routeHtml, route, canonicalUrl);
  routeHtml = withNoscriptSeo(routeHtml, route);
  routeHtml = withStaticShell(routeHtml, route);

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

console.log(`scripts/generate-route-html: generated canonical + SEO noscript HTML for ${routes.length} routes`);

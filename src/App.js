/* App.css removed - logo-marquee moved to LogoMarquee.css (lazy-loaded in testimonials) */
import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Navbar from './components/Navbar';
import GlobalSEO from './components/GlobalSEO';
import Footer from './components/Footer';
import FloatingQr from './components/FloatingQr';
import ScrollToTop from './components/ScrollToTop';

// Critical path - load immediately (homepage)
import Mainhome from './pages/Mainhome';

// Lazy-load non-critical pages and components
const Student = lazy(() => import('./pages/Student'));
const Employee = lazy(() => import('./pages/Employee'));
const Institute = lazy(() => import('./pages/Institute'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Events = lazy(() => import('./pages/Events'));
const Faqs = lazy(() => import('./pages/Faqs'));
const Resources = lazy(() => import('./pages/Resources'));
const AdultEducation = lazy(() => import('./pages/AdultEducation'));
const MentalHealthCybhi = lazy(() => import('./pages/MentalHealthCybhi'));
const OneEvent = lazy(() => import('./pages/OneEvent'));
const EventTwo = lazy(() => import('./components/EventTwo'));
const Blog1 = lazy(() => import('./components/Blog1'));
const Blog2 = lazy(() => import('./components/Blog2'));
const Blog3 = lazy(() => import('./components/Blog3'));
const Blog4 = lazy(() => import('./components/Blog4'));
const Blog5 = lazy(() => import('./components/Blog5'));
const Blog6 = lazy(() => import('./components/Blog6'));
const Blog7 = lazy(() => import('./components/Blog7'));
const Blog8 = lazy(() => import('./components/Blog8'));
const Blog9 = lazy(() => import('./components/Blog9'));
const Blog10 = lazy(() => import('./components/Blog10'));
const Blog11 = lazy(() => import('./components/Blog11'));
const Blog12 = lazy(() => import('./components/Blog12'));
const Blog13 = lazy(() => import('./components/Blog13'));
const Blog14 = lazy(() => import('./components/Blog14'));
const Blog15 = lazy(() => import('./components/Blog15'));
const Blog16 = lazy(() => import('./components/Blog16'));
const Blog17 = lazy(() => import('./components/Blog17'));
const Accessibility = lazy(() => import('./pages/Accessibility'));
const SecurityPrivacy = lazy(() => import('./pages/SecurityPrivacy'));
const TermsofService = lazy(() => import('./pages/TermsofService'));
const CookiesPolicy = lazy(() => import('./pages/CookiesPolicy'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

const PageFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center" aria-hidden="true">
    <div className="w-8 h-8 border-2 border-[#5A14ED] border-t-transparent rounded-full animate-spin" />
  </div>
);

// ====== YE NAYA COMPONENT HAI - SPAM BLOCKING KE LIYE ======
function SpamBlocker() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Suspicious query parameters ki list
    const spamParams = ['k', 'ref', 'click_id', 'fbclid', 'gclid', 'utm_spam'];
    const params = new URLSearchParams(location.search);
    
    let hasSpam = false;
    
    // Check karo ke koi spam parameter hai ya nahi
    spamParams.forEach(param => {
      if (params.has(param)) {
        params.delete(param);
        hasSpam = true;
      }
    });

    // Agar spam mila to clean URL par redirect karo
    if (hasSpam) {
      const newSearch = params.toString();
      const cleanUrl = location.pathname + (newSearch ? `?${newSearch}` : '');
      navigate(cleanUrl, { replace: true });
    }
  }, [location, navigate]);

  return null; // Ye component kuch render nahi karta
}
// ====== SPAM BLOCKER COMPONENT END ======

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GlobalSEO />
        <ScrollToTop />
        <SpamBlocker /> {/* YE LINE ADD KI HAI - Spam URLs ko block karega */}
        <div className="w-full">
          {/* <Header /> */}
          <Navbar/>
          <Suspense fallback={<PageFallback />}>
          <Routes>
          <Route path="/" element={<Mainhome/>} />
          <Route path="/adult" element={<AdultEducation />} />
          <Route path="/students" element={<Student />} />
          <Route path="/employers" element={<Employee />} />
          <Route path="/institution" element={<Institute />} />
          <Route path="/mental" element={<MentalHealthCybhi />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/ccae-pd" element={<OneEvent />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/security-privacy" element={<SecurityPrivacy />} />
          <Route path="/terms-of-service" element={<TermsofService />} />
          <Route path="/cookie-policy" element={<CookiesPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/caep-2024" element={<EventTwo />} />
          <Route path="/blog" element={<Resources />} />
          <Route path="/overcoming-barriers-how-single-parents-benefit-from-adult-schools/" element={<Blog1 />} />
          <Route path="/adult-school-vs-online-college/" element={<Blog2 />} />
          <Route path="/career-switch-strategies-after-30s/" element={<Blog3 />} />
          <Route path="/low-stress-jobs-for-autistic-adults/" element={<Blog4 />} />
          <Route path="/9-benefits-of-work-for-teens-young-adults/" element={<Blog5 />} />
          <Route path="/how-many-teens-and-young-adults-work-retail/" element={<Blog6 />} />
          <Route path="/best-remote-jobs-without-degree/" element={<Blog7 />} />
          <Route path="/upskilling-vs-reskilling-2025/" element={<Blog8 />} />
          <Route path="/the-role-of-ai-in-hiring-how-adult-job-seekers-can-stay-competitive/" element={<Blog9 />} />
          <Route path="/overcoming-employment-gaps-a-guide-for-adult-job-seekers/" element={<Blog10 />} />
          <Route path="/empowering-lifelong-learners-how-adult-education-is-key-to-building-a-sustainable-workforce/" element={<Blog11 />} />
          <Route path="/top-7-in-demand-careers-for-adults-in-2025/" element={<Blog12 />} />
          <Route path="/the-2025-job-search-how-to-stand-out-in-a-competitive-market/" element={<Blog13 />} />
          <Route path="/the-future-of-adult-education-how-technology-is-bridging-the-gap/" element={<Blog14 />} />
          <Route path="/top-5-high-income-skills-young-adults-should-learn-for-2025/" element={<Blog15 />} />
          <Route path="/top-10-career-tips-and-advice-for-young-adults-starting-their-journey/" element={<Blog16 />} />
          <Route path="/caep-2024-summit/" element={<Blog17 />} />
        </Routes>
          </Suspense>
        <Footer />
        <FloatingQr />
      </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
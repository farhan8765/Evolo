import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
// import Header from './components/Header';

// import LastHome from './components/Last-home';
import Navbar from './components/Navbar';
import GlobalSEO from './components/GlobalSEO';
// import Navbaroriginal from './components/Navbaroriginal';
// import Partner from './components/Partner';
// import PotentialWorkers from './components/PotentialWorkers';
// import Skills from './components/Skills';
// import VideoHome from './components/VideoHome';
// import StudentTestimonial from './components/Student-testmonial';
import Footer from './components/Footer';
import FloatingQr from './components/FloatingQr';
import ScrollToTop from './components/ScrollToTop';
// import Hero from './components/Hero';
import Student from './pages/Student';
import Employee from './pages/Employee';
import Institute from './pages/Institute';
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Faqs from './pages/Faqs';
import Resources from './pages/Resources';
import Mainhome from './pages/Mainhome';
import AdultEducation from './pages/AdultEducation';
import MentalHealthCybhi from './pages/MentalHealthCybhi';
import OneEvent from './pages/OneEvent';
import EventTwo from './components/EventTwo';
import Blog1 from './components/Blog1';
import Blog2 from './components/Blog2';
import Blog3 from './components/Blog3';
import Blog4 from './components/Blog4';
import Blog5 from './components/Blog5';
import Blog6 from './components/Blog6';
import Blog7 from './components/Blog7';
import Blog8 from './components/Blog8';
import Blog9 from './components/Blog9';
import Blog10 from './components/Blog10';
import Blog11 from './components/Blog11';
import Blog12 from './components/Blog12';
import Blog13 from './components/Blog13';
import Blog14 from './components/Blog14';
import Blog15 from './components/Blog15';
import Blog16 from './components/Blog16';
import Blog17 from './components/Blog17';
import Accessibility from './pages/Accessibility';
import SecurityPrivacy from './pages/SecurityPrivacy';
import TermsofService from './pages/TermsofService';
import CookiesPolicy from './pages/CookiesPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';

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
        <Footer />
        <FloatingQr />
      </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
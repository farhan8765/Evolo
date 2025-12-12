
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';

// import LastHome from './components/Last-home';
import Navbar from './components/Navbar';
// import Navbaroriginal from './components/Navbaroriginal';
// import Partner from './components/Partner';
// import PotentialWorkers from './components/PotentialWorkers';
// import Skills from './components/Skills';
// import VideoHome from './components/VideoHome';
// import StudentTestimonial from './components/Student-testmonial';
import Footer from './components/Footer';
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

function App() {
  return (
    <Router>
      <div className="w-full">
        {/* <Header /> */}
        <Navbar/>
        <Routes>
          <Route path="/" element={<Mainhome/>} />
          <Route path="/adult" element={<AdultEducation />} />
          <Route path="/student" element={<Student />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/institute" element={<Institute />} />
          <Route path="/mental" element={<MentalHealthCybhi />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/ccae-pd" element={<OneEvent />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/caep-2024" element={<EventTwo />} />
          <Route path="/resources" element={<Resources />} />
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



        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

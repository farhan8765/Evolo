
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
          <Route path="/eventone" element={<OneEvent />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/eventtwo" element={<EventTwo />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog/blog1" element={<Blog1 />} />
          <Route path="/blog/blog2" element={<Blog2 />} />
          <Route path="/blog/blog3" element={<Blog3 />} />
          <Route path="/blog/blog4" element={<Blog4 />} />


        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

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

function App() {
  return (
    <Router>
      <div className="w-full">
        <Header />
        <Navbar/>
        <Routes>
          <Route path="/" element={<Mainhome/>} />
          <Route path="/adult" element={<AdultEducation />} />
          <Route path="/student" element={<Student />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/institute" element={<Institute />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

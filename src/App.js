
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LastHome from './components/Last-home';
import Navbar from './components/Navbar';
import Partner from './components/Partner';
import PotentialWorkers from './components/PotentialWorkers';
import Skills from './components/Skills';
import VideoHome from './components/VideoHome';
import StudentTestimonial from './components/Student-testmonial';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Student from './pages/Student';

const Home = () => (
  <>
    <Hero />
    <PotentialWorkers />
    <Partner />
    <Skills />
    <VideoHome />
    <StudentTestimonial />
    <LastHome />
  </>
);

function App() {
  return (
    <Router>
      <div className="w-full">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

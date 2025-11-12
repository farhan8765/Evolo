
import './App.css';
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
function App() {
  return (
    <>
    <div className="w-full">
      <Header />        {/* Blue bar at the very top (from your screenshot) */}
      <Navbar />        {/* White navbar appears BELOW header */}
      <Hero />    
       <PotentialWorkers />
      <Partner/>
      <Skills/>
      <VideoHome/>
      <StudentTestimonial/>
      <LastHome/>
      <Footer/>      {/* Hero section appears below navbar */}
    </div>
     
    </>
  );
}

export default App;

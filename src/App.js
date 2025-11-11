
import './App.css';
import Navbar from './components/Navbar';
import PotentialWorkers from './components/PotentialWorkers';
import Partner from './components/Partner';
import Skills from './components/Skills';
import StudentTestimonial from './components/Student-testmonial';
import VideoHome from './components/Video-Home';

function App() {
  return (
    <>
      <Navbar />
      <PotentialWorkers />
      <Partner />
      <VideoHome />
      <Skills />
      <StudentTestimonial />
    </>
  );
}

export default App;

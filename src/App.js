import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Communtiy from './components/Community/Communtiy';
import Career from './components/Career/Career';
import Courses from './components/Courses/Courses';
import Course from './components/Courses/Course/Course';
import Footer from './components/Footer';


function App() {


  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Communtiy />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course" element={<Course />} />

      </Routes>
      <Footer />
    </>

  );
}

export default App;

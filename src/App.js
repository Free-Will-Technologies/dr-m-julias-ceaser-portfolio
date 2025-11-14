import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Research from './pages/Research';
import Awards from './pages/Awards';
import Seminars from './pages/Seminars';
import Publications from './pages/Publications';
import Books from './pages/Books';
import ExpertMemberships from './pages/ExpertMemberships';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/research" element={<Research />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/seminars" element={<Seminars />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/expert-memberships" element={<ExpertMemberships />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

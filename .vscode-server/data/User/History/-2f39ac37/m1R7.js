
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import { Sidebar } from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Particle from './components/ParticleEffects/Particle';
function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/particles" element={<Particle />} />
      </Routes>
    </>
  );
}

export default App;

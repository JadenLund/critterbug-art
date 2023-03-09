
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import { Sidebar } from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ParticleJS from './components/ParticleJS';


<script src="https://cdn.jsdelivr.net/npm/tsparticles-preset-firefly@2/tsparticles.preset.firefly.bundle.min.js"></script>
function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/particles" element={<ParticleJS />} />
      </Routes>
    </>
  );
}

export default App;

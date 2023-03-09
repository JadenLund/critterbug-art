
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import { Sidebar } from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ParticleJS from './components/ParticleJS';



function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

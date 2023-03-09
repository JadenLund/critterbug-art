
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import { Sidebar } from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;

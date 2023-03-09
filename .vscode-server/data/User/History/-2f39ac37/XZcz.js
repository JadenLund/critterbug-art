import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import { Sidebar } from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import { Sidebar } from './components/Sidebar';
import Home from './components/Home';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

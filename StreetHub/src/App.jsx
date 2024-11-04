import { useState } from 'react';
import Home from './components/Home';
import Tenis from './pages/Tenis';
import NavBar from './components/navbar';
import "./style.css";
import { Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tenis" element={<Tenis />} />
      </Routes>
    </>
  );
}

export default App;



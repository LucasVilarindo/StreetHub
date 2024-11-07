import { useState } from 'react';
import Home from './components/Home';
import Tenis from './pages/Tenis';
import NavBar from './components/navbar';
import "./style.css";
import { Routes, Route } from 'react-router-dom';
import Roupas from './pages/Roupas';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tenis" element={<Tenis />} />
        <Route path="/Roupas" element={<Roupas />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
    </>
  );
}

export default App;



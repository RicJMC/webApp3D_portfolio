import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Autentica } from './pages/autentica';
import { Navbar } from './components/Navbar';
import {Projectos} from './pages/projectos'
import { About } from './pages/about';
import { Exercicio } from './pages/exerc/exercicio'
import { Alongamento } from './pages/exerc/alongamento';
import { Fortalecimento } from './pages/exerc/fortalecimento';


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/autentica" element={<Autentica />} />
        <Route path="/projectos" element={<Projectos />} />
        <Route path="/about" element={<About />} />
        <Route path="/exercicio" element={<Exercicio />} />
        <Route path="/exercicio/alongamento" element={<Alongamento />} />
        <Route path="/exercicio/fortalecimento" element={<Fortalecimento />} />
      </Routes>
    </Router>
  )
}

export default App

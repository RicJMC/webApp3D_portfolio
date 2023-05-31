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
import { Keepappprincipal } from './pages/keepapp/KeepAppPrincipal';
import { Footer } from './components/Footer'
import { Loginpage } from './pages/login/loginpage';
import { Abouttwo } from './pages/about2'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/autentica" element={<Autentica />} />
        <Route path="/projectos" element={<Projectos />} />
        <Route path="/about" element={<About />} />
        <Route path="/about2" element={<Abouttwo />} />
        <Route path="/exercicio" element={<Exercicio />} />
        <Route path="/exercicio/alongamento" element={<Alongamento />} />
        <Route path="/exercicio/fortalecimento" element={<Fortalecimento />} />
        <Route path="/keepapp" element={<Keepappprincipal />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
      <Footer></Footer>
    </Router>
  )
}

export default App

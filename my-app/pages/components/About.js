import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>Sobre</h1>
      <p>Esta é a página Sobre.</p>
      <Link to="/">Voltar para a página inicial</Link>
      <Link to="/contact">Contato</Link>
    </div>
  );
}

export default About;

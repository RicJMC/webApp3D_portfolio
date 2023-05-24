import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <h1>Contato</h1>
      <p>Esta é a página de contato.</p>
      <Link to="/">Voltar para a página inicial</Link>
      <Link to="/about">Sobre</Link>
    </div>
  );
}

export default Contact;

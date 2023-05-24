import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bem-vind@ ao treino</h1>
      <div>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
      </div>
    </div>
  );
}

export default Home;

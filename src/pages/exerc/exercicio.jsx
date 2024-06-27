import React from 'react';
import { Link } from 'react-router-dom';
import "./exercicio.css"

export const Exercicio = () => {
  return (
    <div>
      <div className="containerhome">
        <h1 className="title">Bem-vind@ ao treino</h1>
        <div className="buttons">
          <Link to="/exercicio/alongamento">
            <span className="button link-zoom">Treino de Alongamento</span>
          </Link>
          <Link to="/exercicio/fortalecimento">
            <span className="button link-zoom">Treino de Fortalecimento</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

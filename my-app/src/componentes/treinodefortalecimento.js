import React from 'react';
import { DataTreinos } from './data/datatreinos';

const TreinoFortalecimento = ({ treino }) => {
  const treinoFortalecimento = DataTreinos.find(
    (item) => item.categoria === 'fortalecimento' && item.treino === treino
  );

  if (!treinoFortalecimento) {
    return <p>Treino não encontrado.</p>;
  }

  return (
    <div className="treino">
      <h2 className="treino-title">{treinoFortalecimento.treino}</h2>
      <ul className="exercicios-list">
        {treinoFortalecimento.exercicios.map((exercicio, index) => (
          <li className="exercicio-item" key={index}>
            <h3 className="exercicio-name custom-h3">{exercicio.nome}</h3>
            <img className="exercicio-image" src={exercicio.imagem} alt={exercicio.nome} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TreinoFortalecimento;

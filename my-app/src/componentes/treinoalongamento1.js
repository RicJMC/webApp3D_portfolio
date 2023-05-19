import React from 'react';
import { DataTreinos } from './data/datatreinos';

const TreinoAlongamento = ({ escolhaTreino }) => {
  const treino = DataTreinos.find(
    (item) =>
      item.categoria === 'alongamentos' && item.treino === escolhaTreino
  );

  if (!treino) {
    return <p>Treino não encontrado.</p>;
  }

  return (
    <div className="treino">
      <h2 className="treino-title">{treino.treino}</h2>
      <ul className="exercicios-list">
        {treino.exercicios.map((exercicio, index) => (
          <li className="exercicio-item" key={index}>
            <h3 className="exercicio-name">{exercicio.nome}</h3>
            <img className="exercicio-image" src={exercicio.imagem} alt={exercicio.nome} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TreinoAlongamento;

import React from 'react'
import {DataTreinos} from '../data/datatreinos'

export const Treinoalongamento1 = ({escolhaTreino}) => {
  //console.table(DataTreinos)
  console.log({escolhaTreino})
  const treino = DataTreinos.find(
    (item) => item.categoria === 'alongamentos' && item.treino === escolhaTreino);
  //console.table(treino)
  return (
    <div className="treino">
      <h2 className="treino-title">{treino.treino}</h2>
      <ul className="exercicios-list">
        {treino.exercicios.map((exercicio, index) => (
          <li className="exercicio-item" key={index}>
            <h3 className="exercicio-name custom-h3">{exercicio.nome}</h3>
            <img className="exercicio-image" src={exercicio.imagem} alt={exercicio.nome} />
          </li>
        ))}
      </ul>
    </div>
  )
};

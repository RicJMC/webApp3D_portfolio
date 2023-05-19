import React from "react";

const TreinoModelo = ({ treino, exercicios }) => {
  return (
    <div className="treino">
      <a className="treino-link" href="#">
        {treino}
      </a>
      <div className="exercicios">
        {exercicios.map((exercicio, index) => (
          <div className="exercicio" key={index}>
            <p>{exercicio.nome}</p>
            <img src={exercicio.iagem} alt="" />
            <p className="tipo-exercicio">{exercicio.tipo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreinoModelo;


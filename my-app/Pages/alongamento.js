import React, { useState } from 'react';
import { useRouter } from 'next/router';
import TreinoAlongamento from "../src/componentes/treinoalongamento1";
import "../src/app/globals.css"

export default function TreinosAlongamento() {
  const [escolhaTreino, setEscolhaTreino] = useState('Treino 1');
  const router = useRouter();

  const handleVoltarInicio = () => {
    router.push('/');
  };

  return (
    <div className="containeralong">
      <h1 className="title">Treino de Alongamento</h1>
      <div className="buttons">
        <button className="button" onClick={() => setEscolhaTreino('Treino 1')}>Treino 1</button>
        <button className="button" onClick={() => setEscolhaTreino('Treino 2')}>Treino 2</button>
        <button className="button" onClick={handleVoltarInicio}>Voltar para a Página Inicial</button>
      </div>
      <div className="exercicios-container">
        <TreinoAlongamento escolhaTreino={escolhaTreino} />
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import TreinoFortalecimento from "../src/componentes/treinodefortalecimento";
import "../src/app/globals.css"

export default function Treinos() {
  const [treinoSelecionado, setTreinoSelecionado] = useState('Treino 1');
  const router = useRouter();

  const handleTreinoSelecionado = (treino) => {
    setTreinoSelecionado(treino);
  };

  const handleVoltarInicio = () => {
    router.push('/');
  };

  return (
    <div className="containeralong">
      <h1 className="title">Fortalecimento</h1>
      <div className="buttons">
        <button className="button" onClick={() => handleTreinoSelecionado('Treino 1')}>Fortalecimento - Treino 1</button>
        <button className="button" onClick={() => handleTreinoSelecionado('Treino 2')}>Fortalecimento - Treino 2</button>
        <button className="button" onClick={() => handleTreinoSelecionado('Treino 3')}>Fortalecimento - Treino 3</button>
        <button className="button" onClick={handleVoltarInicio}>Voltar para a Página Inicial</button>
      </div>
      <TreinoFortalecimento treino={treinoSelecionado} />
    </div>
  );
}

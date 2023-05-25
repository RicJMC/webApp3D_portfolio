// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import TreinoFortalecimento from "./componentes/treinodefortalecimento";
// import "./exercicio.css"

// export default function Treinos() {
//   const [treinoSelecionado, setTreinoSelecionado] = useState('Treino 1');
//   const history = useHistory();

//   const handleTreinoSelecionado = (treino) => {
//     setTreinoSelecionado(treino);
//   };

//   const handleVoltarInicio = () => {
//     history.push('/');
//   };

//   return (
//     <div className="containeralong">
//       <h1 className="title">Fortalecimento</h1>
//       <div className="buttons">
//         <button className="button" onClick={() => handleTreinoSelecionado('Treino 1')}>Fortalecimento - Treino 1</button>
//         <button className="button" onClick={() => handleTreinoSelecionado('Treino 2')}>Fortalecimento - Treino 2</button>
//         <button className="button" onClick={() => handleTreinoSelecionado('Treino 3')}>Fortalecimento - Treino 3</button>
//         <button className="button" onClick={handleVoltarInicio}>Voltar para a Página Inicial</button>
//       </div>
//       <TreinoFortalecimento treino={treinoSelecionado} />
//     </div>
//   );
// }
import React from 'react'
import { useNavigate } from 'react-router-dom';
export const Fortalecimento = () => {
  const navigate = useNavigate();
  const handleVoltarInicio = () => {
    navigate('/exercicio');
  };

  return (
    <div className="containeralong">
      <h1 className="title">Fortalecimento</h1>
      <button className="button" onClick={() => handleTreinoSelecionado('Treino 1')}>Fortalecimento - Treino 1</button>
      <button className="button" onClick={() => handleTreinoSelecionado('Treino 2')}>Fortalecimento - Treino 2</button>
      <button className="button" onClick={() => handleTreinoSelecionado('Treino 3')}>Fortalecimento - Treino 3</button>
      <button className="button" onClick={handleVoltarInicio} >Voltar à pagina anterior </button>
    
    </div>
  )
}


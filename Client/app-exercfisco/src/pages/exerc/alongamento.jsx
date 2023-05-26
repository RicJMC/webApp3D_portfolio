// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import TreinoAlongamento from "./componentes/treinoalongamento1";
// import "./exercicio.css"

// export default function TreinosAlongamento() {
//   const [escolhaTreino, setEscolhaTreino] = useState('Treino 1');
//   const history = useHistory();

//   const handleVoltarInicio = () => {
//     history.push('/');
//   };

//   return (
//     <div className="containeralong">
//       <h1 className="title">Treino de Alongamento</h1>
//       <div className="buttons">
//         <button className="button" onClick={() => setEscolhaTreino('Treino 1')}>Treino 1</button>
//         <button className="button" onClick={() => setEscolhaTreino('Treino 2')}>Treino 2</button>
//         <button className="button" onClick={handleVoltarInicio}>Voltar para a Página Inicial</button>
//       </div>
//       <div className="exercicios-container">
//         <TreinoAlongamento escolhaTreino={escolhaTreino} />
//       </div>
//     </div>
//   );
// }


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Treinoalongamento1 } from './componentes/treinoalongamento1';
  

export const Alongamento = () => {
  const [escolhaTreino, setEscolhaTreino] = useState('Treino 1');

  

  const navigate = useNavigate();
  const handleVoltarInicio = () => {
    navigate('/exercicio');
  };
  return (    
    <div className="containeralong">
      <h1 className="title">Treino de Alongamento</h1>
     
      <button className="button" onClick={() => setEscolhaTreino('Treino 1')}>Treino 1</button>
      
      
      <button className="button" onClick={() => setEscolhaTreino('Treino 2')}>Treino 2</button>
      
      
      <button className="button" onClick={handleVoltarInicio}>Voltar para a Página Anterior</button>
      
      <div className="exercicios-container">
      <Treinoalongamento1 escolhaTreino={escolhaTreino} />
      </div>
      </div>
  )
}

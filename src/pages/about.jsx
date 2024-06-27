import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 p-6 bg-gray-100 flex flex-col items-center">
        <img className="max-w-full h-auto rounded-full" src="../public/capturar.PNG" alt="Minha Foto" />
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold">Seu Nome</h2>
          <p className="text-lg">Título Profissional</p>
          <p className="mt-6 text-gray-500">
            <i className="fas fa-envelope"></i> Email: exemplo@example.com<br />
            <i className="fas fa-phone"></i> Telefone: (XX) XXXX-XXXX<br />
            <i className="fab fa-linkedin"></i> LinkedIn: <a href="https://www.linkedin.com/in/seu-perfil" className="text-blue-600">seu-perfil</a>
          </p>
        </div>
      </div>
      <div className="w-full md:w-2/3 p-6 bg-white">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Educação</h2>
          <p className="mt-2 text-base">
            Formado em Engenharia de Materiais<br />
            Universidade de Aveiro
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Skills</h2>
          <ul className="mt-2 text-base list-disc ml-5">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Git/GitHub</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>React.js</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Projetos</h2>
          <ul className="mt-2 text-base list-disc ml-5">
            <li>Desenvolvimento de um site de portfólio pessoal utilizando HTML, CSS e JavaScript.</li>
            <li>Criação de um aplicativo de lista de tarefas com funcionalidades interativas usando React e manipulação do DOM.</li>
            <li>Implementação de uma API RESTful para um aplicativo de blog utilizando Node.js, Express.js e MongoDB.</li>
            <li>Construção de um jogo da memória utilizando JavaScript e manipulação do DOM.</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Linguagem</h2>
          <p className="mt-2 text-base">
            Além da minha formação e dos projetos realizados, também participei ativamente de comunidades online de desenvolvimento web, onde pude compartilhar conhecimentos, participar de fóruns de discussão e estar atualizado com as últimas tendências da área. Além disso, tenho interesse em continuar expandindo minhas habilidades através de cursos complementares e projetos desafiadores. Estou pronto para contribuir e crescer profissionalmente no campo do desenvolvimento web usando o stack MERN.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Interesses</h2>
          <ul className="mt-2 text-base list-disc ml-5">
            <li>Desenvolvimento web</li>
            <li>Inteligência Artificial</li>
            <li>Design de interfaces</li>
            <li>Tecnologias front-end</li>
            <li>Aplicações mobile</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

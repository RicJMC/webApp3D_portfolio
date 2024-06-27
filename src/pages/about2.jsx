import React from 'react';

export const Abouttwo = () => {
  return (
    <div className="container-about-two">
      <div className="sidebar-about-two">
        <img className="photo" src="../public/capturar.PNG" alt="Minha Foto" />
        <div className="sidebar-info">
          <h2 className="sidebar-name">Seu Nome</h2>
          <p className="sidebar-title">Título Profissional</p>
          <p className="sidebar-contact-info">
            <i className="fas fa-envelope"></i> Email: exemplo@example.com<br />
            <i className="fas fa-phone"></i> Telefone: (XX) XXXX-XXXX<br />
            <i className="fab fa-linkedin"></i> LinkedIn: <a href="https://www.linkedin.com/in/seu-perfil">seu-perfil</a>
          </p>
        </div>
      </div>
      <div className="content-about-two">
        <div className="section-about-two">
          <h2 className="section-title-about-two">Educação</h2>
          <div className="section-content-about-two">
            <p className="education-description-about-two">
              Formado em Engenharia de Materiais<br />
              Universidade de Aveiro
            </p>
          </div>
        </div>
        <div className="section-about-two">
          <h2 className="section-title-about-two">Skills</h2>
          <div className="section-content-about-two">
            <ul className="skills-list-about-two">
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
        </div>
        <div className="section-about-two">
          <h2 className="section-title-about-two">Projetos</h2>
          <div className="section-content-about-two">
            <ul className="project-list-about-two">
              <li>
                Desenvolvimento de um site de portfólio pessoal utilizando HTML, CSS e JavaScript.
              </li>
              <li>
                Criação de um aplicativo de lista de tarefas com funcionalidades interativas usando React e manipulação do DOM.
              </li>
              <li>
                Implementação de uma API RESTful para um aplicativo de blog utilizando Node.js, Express.js e MongoDB.
              </li>
              <li>
                Construção de um jogo da memória utilizando JavaScript e manipulação do DOM.
              </li>
            </ul>
          </div>
        </div>
        <div className="section-about-two">
          <h2 className="section-title-about-two">Linguagem</h2>
          <div className="section-content-about-two">
            <p className="language-description-about-two">
              Além da minha formação e dos projetos realizados, também participei ativamente de comunidades online de desenvolvimento web, onde pude compartilhar conhecimentos, participar de fóruns de discussão e estar atualizado com as últimas tendências da área. Além disso, tenho interesse em continuar expandindo minhas habilidades através de cursos complementares e projetos desafiadores. Estou pronto para contribuir e crescer profissionalmente no campo do desenvolvimento web usando o stack MERN.
            </p>
          </div>
        </div>
        <div className="section-about-two">
          <h2 className="section-title-about-two">Interesses</h2>
          <div className="section-content-about-two">
            <ul className="interests-list-about-two">
              <li>Desenvolvimento web</li>
              <li>Inteligência Artificial</li>
              <li>Design de interfaces</li>
              <li>Tecnologias front-end</li>
              <li>Aplicações mobile</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
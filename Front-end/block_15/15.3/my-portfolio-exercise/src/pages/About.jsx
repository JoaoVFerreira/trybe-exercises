import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About Me</h2>
        <div>
          <h3>Welcome! I am João Ferreira a student of web development </h3>
          <h4>Sou apaixonado por tecnologias, por jogos, séries, filmes, esportes e natureza</h4>
        </div>
        <div id="profile-img">
          <img src="https://ca.slack-edge.com/TMDDFEPFU-U0241REGZU2-a686e24deb3e-48" alt="profile-man" />
        </div>
        <div>
          <h3>Aqui estão algumas habilidades desenvolvidas até o momento</h3>
          <ul>
            <li data-testid="js">JavaScript</li>
            <li>React</li>
            <li>RTL</li>
            <li>HTML e CSS</li>
          </ul>
        </div>
      </div>
    );
  };
}

export default About;
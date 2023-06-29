import React from "react";
import Bibliotechno from "./assets/Screenshot_3.png";
import "./Projetos.css";

function Projetos() {
  return (
    <div className="projetos" id="projetos">
      <div className="project-container">
        <h3 className="title">Projetos.</h3>
        <div className="projects-grid">
          <div className="bibliotechno">
            <div className="img">
              <img src={Bibliotechno} alt="" />
            </div>
            <div className="project-text">
              <h3>Bibliotechno</h3>
              <p>...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projetos;

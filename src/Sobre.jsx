import React from "react";
import "./Sobre.css";
import Spline from "@splinetool/react-spline";

function Sobre() {
  return (
    <div id="sobremim" className="sobremim">
      <div className="container">
        <div className="about-container">
          <div className="img">
            <img
              src="https://gifs.eco.br/wp-content/uploads/2022/11/gifs-de-programador-2.gif"
              alt=""
            />
          </div>
          <div className="sobre-texto">
            <h3>Sobre mim.</h3>
            <p>
              Olá! Sou João Vitor, um desenvolvedor fullstack apaixonado por
              criar aplicativos web. Com 18 anos, moro em Ipatinga, Minas
              Gerais. Tenho experiência em tecnologias como React, Next.js,
              Node.js, TypeScript, TailwindCSS e Prisma. Estou sempre
              aprimorando minhas habilidades e acompanhando as tendências da
              indústria. Sou focado, dedicado e estou em busca de oportunidades
              desafiadoras para colaborar em projetos de sucesso. Se você
              precisa de um desenvolvedor fullstack apaixonado por tecnologia,
              estou pronto para trabalhar com você. Entre em contato e vamos
              criar algo incrível juntos!
            </p>
            <div className="skills-tec">
              <div className="logos">
                <ul>
                  <li>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;

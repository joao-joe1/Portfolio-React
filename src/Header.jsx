import React from "react";
import "./Style.css";
import Logo from "./assets/logolinkedin.svg";
import LogoGitHub from "./assets/logogithub.svg";
import LogoJoe from "./assets/joe.png";

function Header() {
  return (
    <header id="home" className="home">
      <div className="profile-introduction">
        <div className="text-introduction">
          <h1>
            Front-End React <br />
            Developer 👋
          </h1>
          <p>
            Olá, meu nome é <span className="gradient-text">João Vitor</span> Um
            apaixonado desenvolvedor <b>Full Stack</b>
            <br /> com experiência em freelance há quase 1 ano.
          </p>
          <span>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-ts/">
              <img style={{ padding: "0.5rem" }} src={Logo}></img>
            </a>
            <a href="https://github.com/joao-joe1">
              <img style={{ padding: "0.5rem" }} src={LogoGitHub}></img>
            </a>
          </span>
          {/* <div className="skills-tec">
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
          </div> */}
        </div>
        <div className="joeimg">
          <img src={LogoJoe} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;

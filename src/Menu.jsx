/* eslint-disable no-unused-vars */
import React from "react";
import "./MenuBar.css";

function Menu() {
  return (
    <div className="menuBar">
      <nav className="navBar">
        <h3 className="logo">João.dev</h3>
        <ul className="menuItems">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#sobremim">Sobre mim</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;

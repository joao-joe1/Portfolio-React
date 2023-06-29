/* eslint-disable no-unused-vars */
import { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main.css";
import Sobre from "./Sobre";
import Projetos from "./Projetos";

function App() {
  return (
    <section>
      <Menu />
      <Header />
      <Sobre />
      <footer>
        <div className="container">
          <div className="footerc">
            <h3>Copyright © 2023. All rights are reserved</h3>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default App;

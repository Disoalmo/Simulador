import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/Components/Header/Header";
import Main from "./assets/Components/Main/Main";
import Forms from "./assets/Components/Forms";
import Cards from "./assets/Components/Cards/Cards";

function App() {
  return (
    <div id="contenido">
      <Header></Header>
      <Main>
        <ul>
          <Forms>
            <a href="">Registrarme</a>
          </Forms>
          <Forms>
            <a href="">Iniciar sesión</a>
          </Forms>
        </ul>
      </Main>

      <section>
        <h3>Incrementa tu dinero!</h3>
        <ul>
          <Cards title="Elige el tipo de inversion"></Cards>
          <Cards title="Analiza e invierte"></Cards>
          <Cards title="Maneja tu carpeta de inversion"></Cards>
        </ul>
      </section>
    </div>
  );
}

export default App;

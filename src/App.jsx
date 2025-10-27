import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/Components/Header/Header";
import Main from "./assets/Components/Main/Main";
import Cards from "./assets/Components/Cards/Cards";

import crecimiento from "./assets/img/crecimiento";
import precios from "./assets/img/precios";


function App() {
  return (
    <div id="contenido">
      <Header></Header>
      <Main>
        
      </Main>
      <section id="seccion">
        <Cards 
        titulo="Elige el tipo de inversion" 
        img={crecimiento}
        ></Cards>
        <Cards 
        titulo="Analiza e invierte!"
        img={precios}
        ></Cards>
        <Cards 
        titulo="Maneja tu carpeta de inversión"
        ></Cards>
      </section>
    </div>
  );
}

export default App;

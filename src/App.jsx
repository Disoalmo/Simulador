import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/Components/Header/Header";
import Main from "./assets/Components/Main/Main";
import Cards from "./assets/Components/Cards/Cards";

import crecimiento from "./assets/img/crecimiento.png"
import precios from "./assets/img/Precios.png"
import carpeta from "./assets/img/carpeta.jpg"

function App() {
  return (
    <div id="contenido">
      <Header></Header>
      <Main></Main>
      <section id="seccionDeSeparacion"><h3>Inrementa tu dinero!</h3></section>
      <section id="seccionDeDescripcion">
        <Cards 
        title="Elige el tipo de inversion"
        img={crecimiento}
        ></Cards>
        <Cards 
        title="Analiza el mercado"
        img={precios}
        ></Cards>
        <Cards 
        title="Maneja tu carpeta de inversión"
        img={carpeta}
        ></Cards>
      </section>
    </div>
  );
}

export default App;

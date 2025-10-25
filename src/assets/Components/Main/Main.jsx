import "./Main.css"
import principal from "../../img/Imagen-principal2.png"

export default function Main(){
    return(

      <div id='divContenidoInicial'>
        <div id="presentacion">
            <h1 id="titulo">Simulador de inversiones</h1>
            <div id="subtitulo"><h2>Aprende a Invertir</h2></div>
            <div id="descripcion"><p>Desarrolla tus habilidades de inversion y aprende a incrementar tu dinero.</p></div>
        </div>
        <img className="imagenes" src={principal} alt="Imagen Principal" />
      </div>
        
    );
 }
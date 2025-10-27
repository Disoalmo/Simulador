import "./Cards.css";

export default function Cards(props) {
  return (
    <div className="tarjetas" id="tarjeta1">
      <div className="tituloDeTarjeta">
        <h3 >{props.title}</h3>
      </div>
      <div className="imagenDeTarjeta">
        <img src={props.img} alt={props.title} className="imagenes"/>
      </div>
        
    </div>
  );
}

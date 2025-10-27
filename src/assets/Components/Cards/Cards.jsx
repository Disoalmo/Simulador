import "./Cards.css";

export default function Cards(props) {
  return (
    <div className="tarjetas" id="tarjeta1">
      <h3>{props.titulo}</h3>
      <img src={props.img} alt={props.titulo} />
    </div>
  );
}

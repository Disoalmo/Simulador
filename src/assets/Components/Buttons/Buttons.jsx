import "./Buttons.css"

export default function Buttons(props) {
    return (
        <div id="divBoton">
            <button className="botones">{props.children}</button>
        </div>
    )
}
import "./Header.css"
import logo from "../../img/Dika-logo2.png"

export default function Header() {
    return (
        <header id="cabecera">
            <div id="divLogo"><img className="imagenes" src={logo} alt="logo" /></div>
        </header>
    )
}
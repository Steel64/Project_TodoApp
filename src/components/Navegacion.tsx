import { Link } from "react-router-dom"

export enum Pagina {
    Main,
    Historico
}

interface NavegacionProps {
    pagina : Pagina
}

const Navegacion = (props : NavegacionProps) => {
    return <div>
        { /* Seccion de tabs */ }
        <ul className="nav nav-underline">
            <li className="nav-item">
                <Link className={`nav-link ${props.pagina == Pagina.Main ? "active" : ""} `} to={"/"}>
                    Tareas
                </Link>
            </li>
            <li className="nav-item">
                <Link className={`nav-link ${props.pagina == Pagina.Historico ? "active" : ""} `} to={"/historico"}>
                    Historico
                </Link>
            </li>
        </ul>
    </div>
}
export default Navegacion
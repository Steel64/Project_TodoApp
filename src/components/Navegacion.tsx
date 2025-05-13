import { Link } from "react-router-dom"

const Navegacion = () => {
    return <div>
        { /* Seccion de tabs */ }
        <ul className="nav nav-underline">
            <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                    Tareas
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/historico"}>
                    Historico
                </Link>
            </li>
        </ul>
    </div>
}
export default Navegacion
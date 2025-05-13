import Formulario from "../components/Formulario"
import ListaTODOS, { type ToDo } from "../components/ListaTODOS"
import Navegacion from "../components/Navegacion"
import Titulo from "../components/Titulo"

const MainPage = () => {
    const listaTODOS : ToDo[] = [
        {id: 1, descripcion: "Ir al cine"},
        {id: 2, descripcion: "Ecribir un libro"},
        {id: 3, descripcion: "Hornear pastel"},
        {id: 4, descripcion: "Crear app"}
    ]
    return <div className="container">
        <Titulo texto="TODO App-main" />
        <Navegacion />
        <Formulario />
        <ListaTODOS TODOS={listaTODOS}/>
    </div>
}
export default MainPage
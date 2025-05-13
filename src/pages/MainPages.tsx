import { useState } from "react"
import Formulario from "../components/Formulario"
import ListaTODOS, { type ToDo } from "../components/ListaTODOS"
import Navegacion from "../components/Navegacion"
import Titulo from "../components/Titulo"

const MainPage = () => {
    const [listaTODOS,setlistaTODOS] = useState<ToDo[]>([])

    const agregarTODOS = ( texto: string) => {
        listaTODOS.push({
            id: listaTODOS.length + 1,
            descripcion: texto
        })
        setlistaTODOS([...listaTODOS])
    }

    return <div className="container">
        <Titulo texto="TODO App-main" />
        <Navegacion />
        <Formulario agregar={agregarTODOS}/>
        <ListaTODOS TODOS={listaTODOS}/>
    </div>
}
export default MainPage
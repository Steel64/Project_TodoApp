import { useState } from "react"
import Formulario from "../components/Formulario"
import ListaTODOS, { type ToDo } from "../components/ListaTODOS"
import Navegacion, { Pagina } from "../components/Navegacion"
import Titulo from "../components/Titulo"

const MainPage = () => {
    const listaPersistenteStr = sessionStorage.getItem("TODOS")
    let listaPersistente : ToDo[]
    if (listaPersistenteStr == null){
        listaPersistente = []
    } else {
        listaPersistente = JSON.parse(listaPersistenteStr)
    }
    const [listaTODOS,setlistaTODOS] = useState<ToDo[]>(listaPersistente)
    const agregarTODOS = ( texto: string) => {
        console.log("aca")
        listaTODOS.push({
            id: listaTODOS.length + 1,
            descripcion: texto
        })
        sessionStorage.setItem("TODOS",JSON.stringify(listaTODOS))
        setlistaTODOS([...listaTODOS])
    }

    return <div className="container">
        <Titulo texto="TODO App-main" pagina={Pagina.Main}/>
        <Navegacion pagina={Pagina.Main}/>
        <Formulario agregar={agregarTODOS}/>
        <ListaTODOS TODOS={listaTODOS} esHistorico={false}/>
    </div>
}
export default MainPage
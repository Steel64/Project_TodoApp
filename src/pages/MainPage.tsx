import { useEffect, useState } from "react"
import Formulario from "../components/Formulario"
import ListaTODOS, { type ToDo } from "../components/ListaTODOS"
import Navegacion, { Pagina } from "../components/Navegacion"
import Titulo from "../components/Titulo"

const URL = "https://script.google.com/macros/s/AKfycbxR06kwYzBmVIy9NoLCq1ddnLj4PIT9uGvPNiK_I5aAob7qrYUs-Q7XPfLab3Lk1ZD9KQ/exec"

const MainPage = () => {
    /*
    const listaPersistenteStr = sessionStorage.getItem("TODOS")
    let listaPersistente : ToDo[]
    if (listaPersistenteStr == null){
        listaPersistente = []
    } else {
        listaPersistente = JSON.parse(listaPersistenteStr)
    }
    */
    const [listaTODOS,setlistaTODOS] = useState<ToDo[]>([])
    //funcion asicrona
    const httpObtenerTODOSAsyncAwait = async () => {
        try{
            const resp = await fetch(URL)
            const data = await resp.json()
            console.log(data)
            setlistaTODOS(data)
        }catch(error){
            console.error(error)
        }
    }
    //la peticion en fetch como post, body debe enviarse como string(formato JSON  del sevidor)
    const httpGuardarTODO = async (todo: ToDo) => {
        const resp = await fetch(URL, {
            method: "POST",
            body: JSON.stringify(todo)
        })
        const data = await resp.json()
    }

    useEffect(()=> {
        httpObtenerTODOSAsyncAwait()
    }, [])

    const agregarTODOS = ( texto: string) => {
        console.log("aca")
        httpGuardarTODO({
            id: listaTODOS.length + 1,
            descripcion: texto
        })
        listaTODOS.push({
            id: listaTODOS.length + 1,
            descripcion: texto
        })
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
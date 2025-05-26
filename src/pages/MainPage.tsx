import { useState } from "react"
import Formulario from "../components/Formulario"
import ListaTODOS, { type ToDo } from "../components/ListaTODOS"
import Navegacion, { Pagina } from "../components/Navegacion"
import Titulo from "../components/Titulo"

const URL = "https://script.google.com/macros/s/AKfycbxR06kwYzBmVIy9NoLCq1ddnLj4PIT9uGvPNiK_I5aAob7qrYUs-Q7XPfLab3Lk1ZD9KQ/exec"
/*
const httpObtenerTODOS = () => {
    //realiza la peticion web al servidor y recibe una promesa de respuesta
    const resp = fetch(URL)
    //colocar la funcion cuando se recibe la respuesta
    //resp - response
    resp.then((resp)=>{
        //json - promesa
        const resp2 =  resp.json()
        //data obtendida
        resp2.then((data)=>{
            console.log(data)
        })
    })
    //evaluar si hay errores
    resp.catch((error)=> {
        console.error(error)
    })
}
*/
//forma mas simple
const httpObtenerTODOSAsyncAwait = async () => {
    try{
        //await permite que se ejecute como asincrona
        //fetch funciona como sincrono y await lo convierte asincrono
        const resp = await fetch(URL)
        const data = await resp.json()
        console.log(data)
    }catch(error){
        console.error(error)
    }
}
//httpObtenerTODOS()
httpObtenerTODOSAsyncAwait()

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
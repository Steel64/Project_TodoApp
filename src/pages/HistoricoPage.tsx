import ListaTODOS, { type ToDo } from "../components/ListaTODOS"
import Navegacion, { Pagina } from "../components/Navegacion"
import Titulo from "../components/Titulo"

const HistoricoPage = () => {
    const listaHistorico : ToDo[] = [
        {id:1, descripcion: "estudiar"}
    ]
    return <div className="container">
        <Titulo texto="TODO - Historico" />
        <Navegacion pagina={Pagina.Historico}/>
        <ListaTODOS TODOS={listaHistorico} esHistorico={true}/>
    </div>
}
export default HistoricoPage
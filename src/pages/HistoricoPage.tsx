import ListaTODOS, { type ToDo } from "../components/ListaTODOS"
import Navegacion from "../components/Navegacion"
import Titulo from "../components/Titulo"

const HistoricoPage = () => {
    const listaHistorico : ToDo[] = [
        {id:1, descripcion: "estudiar"}
    ]
    return <div className="container">
        <Titulo texto="TODO - Historico" />
        <Navegacion />
        <ListaTODOS TODOS={listaHistorico} esHistorico={true}/>
    </div>
}
export default HistoricoPage
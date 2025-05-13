export interface ToDo {
    id : number
    descripcion : string
}

interface ListaTODOS {
    TODOS : ToDo[]
}

const ListaTODOS = (props: ListaTODOS) => {
    return <div className="mt-4">
        { /*lista TODOs */ }
        <ul className="list-group">
            {
                props.TODOS.map((elemento:ToDo)=> {
                    return <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            { elemento.descripcion }
                        </div>
                        <input className="form-check-input mt-0" type="checkbox"/>
                    </li>
                })
            }
        </ul>
    </div>
}
export default ListaTODOS
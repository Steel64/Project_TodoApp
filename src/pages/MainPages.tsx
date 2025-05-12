const MainPage = () => {
    return <div className="container">
        <h1>TODO App</h1>
        <div>
            { /* Seccion de tabs */ }
            <ul className="nav nav-underline">
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        Tareas
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Terminadas
                    </a>
                </li>
            </ul>
        </div>
        <div className="mt-4">
            { /* Formulario */ }
            <div className="row">
                <div className="col-md-10">
                    <input className="form-control" type="text" />
                </div>
                <div className="col-md-2">
                    <button className="btn btn-primary" type="button">
                        Agregar
                    </button>
                </div>
            </div>
        </div>
        <div className="mt-4">
            { /*lista TODOs */ }
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        Ir de compras
                    </div>
                    <input  className="form-check-input mt-0" type="checkbox"/>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        Leer 20 libros
                    </div>
                    <input  className="form-check-input mt-0" type="checkbox"/>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        Limpiar hogar
                    </div>
                    <input  className="form-check-input mt-0" type="checkbox"/>
                </li>
            </ul>
        </div>
        </div>
}
export default MainPage
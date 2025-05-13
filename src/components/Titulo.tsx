interface TituloProps {
    texto: string
}

const Titulo = (props: TituloProps) => {
    return <div>
        <h1>{props.texto}</h1>
    </div>
}
export default Titulo
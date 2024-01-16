const Detalles = () => {
    return ( 
        <div className="detalles">
            <label htmlFor="titulo">Titulo</label>
            <input type="text" name="titulo" id="titulo" />
            <label htmlFor="autor">Autor</label>
            <input type="text" name="autor" id="autor" />
            <textarea name="body" id="" cols="30" rows="10"></textarea>
        </div>
     );
}
 
export default Detalles;
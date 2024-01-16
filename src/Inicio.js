import BlogList from "./BlogList";
import useFetch from "./usefetch";

const Inicio = () => {

    const { sotad : blogs, cargando, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            { cargando && <div>Cargando...</div> }
            { error && <div>{ error }</div> }
            { blogs && <BlogList blogs = { blogs } titulo = "Listado Completo de Blogs" /> }
        </div>
     );
}
 
export default Inicio;

// useEffect
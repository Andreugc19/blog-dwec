import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Inicio = () => {

    const [blogs, setBlogs] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                console.log(res);
                if(!res.ok) {
                    throw Error('No se ha podido recuperar la informacion');
                }
                return res.json();
            })
            .then(datos => {
                // console.log(datos);
                setBlogs(datos);
                setCargando(false);
                setError(null);
            })
            .catch(err => {
                // console.log('ERROR HelloKittyCagues: ' + err.message);
                setCargando(false);
                setError(err.message)
            })
        }, 300);
    }, []);

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
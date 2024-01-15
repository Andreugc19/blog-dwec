import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Inicio = () => {

    const [blogs, setBlogs] = useState([
        { titulo: "Mi nueva web", body: "texto para mostrar...", autor: "Andreu Garcia", id: 1 },
        { titulo: "Futbol Migjorn", body: "mucho futbol", autor: "Biel Medina", id: 2 },
        { titulo: "Elementos Musicales", body: "fundamentos de la musica", autor: "Tomas Rossello", id: 3 }
    ])

    const [nombre, setNombre] = useState("Ague");

    const handleEliminarBlog = (id) => {
        const nuevoBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(nuevoBlog);
    }

    useEffect(() => {
        console.log("useEffect disparado");
        console.log(blogs);
    }, [nombre]);

    return ( 
        <div className="home">
            <BlogList blogs = { blogs } titulo = "Listado Completo de Blogs"  handleEliminarBlog = { handleEliminarBlog } />
            <p>{ nombre }</p>
            <button onClick={() => setNombre(("Maria"))}>Cambio de nombre</button>
        </div>
     );
}
 
export default Inicio;

// useEffect
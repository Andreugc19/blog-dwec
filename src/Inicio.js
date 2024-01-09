import { useState } from "react";

const Inicio = () => {

    const [blogs, setBlogs] = useState([
        { titulo: "Mi nueva web", body: "texto para mostrar...", autor: "Andreu Garcia", id: 1 },
        { titulo: "Futbol Migjorn", body: "mucho futbol", autor: "Biel Medina", id: 2 },
        { titulo: "Elementos Musicales", body: "fundamentos de la musica", autor: "Tomas Rossello", id: 3 }
    ])

    return ( 
        <div className="home">
            { blogs.map((blog)=>{
                return(
                <div className="blog-preview" key={ blog.id }>
                    <h2>{ blog.titulo }</h2>
                    <p>Escrito por { blog.autor }</p>
                </div>)
            })}
        </div>
     );
}
 
export default Inicio;
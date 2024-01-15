const BlogList = ({titulo, blogs}) => {

    // const blogs = props.blogs;
    // const titulo = props.titulo;

    return ( 
        <div className="blog-list">
            <h2>{ titulo }</h2>
            { blogs.map((blog)=>
                <div className="blog-preview" key={ blog.id }>
                    <h2>{ blog.titulo }</h2>
                    <p>Escrito por { blog.autor }</p>
                </div>
            ) }
        </div>
     );
}
 
export default BlogList;

/*
 *  /blogs      GET     Devuelve todos los blogs
 *  /blogs{id}  GET     Devuelve un unico blog
 *  /blogs      POST    Añadir un nuevo blog
 *  /blogs/{id} DELETE  Eliminar un blog
*/
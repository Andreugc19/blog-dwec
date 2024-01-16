import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return ( 
        <nav className="navBar">
            <h1>El blog de DWEC</h1>
            <div className="links">
                <Link to="/">Inicio</Link>
                <Link to="/create">Nuevo Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
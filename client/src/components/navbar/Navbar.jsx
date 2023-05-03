import "./navbar.css";

const Navbar = () => {
    return(
        <div className="contenedor-search">
            <form className="form">
                <input className="search" placeholder="Buscar..." />
                <button className="button">Buscar</button>
            </form>
        </div>
    )
}

export default Navbar;
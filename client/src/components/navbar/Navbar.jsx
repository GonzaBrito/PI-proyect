import SearchBar from "../searchBar/SearchBar";
import "./navbar.css";

const Navbar = () => {
    return(
        <div className="contenedor-search">
            <form className="form">
                <SearchBar /> 
            </form>
        </div>
    )
}

export default Navbar;
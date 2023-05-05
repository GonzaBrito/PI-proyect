import { useState } from "react";
import { useDispatch } from "react-redux";
import { gamesName } from "../../redux/actions/actions";
import "./searchBar.css";

const SearchBar = () => {

    const dispatch = useDispatch();
    const [ search, setSearch ] = useState("")
    
    const handleChange = (event) => {
        const {value} = event.target;
        setSearch(value);
    }

    const mandar = (event) => {
        event.preventDefault()
        dispatch(gamesName(search));
    }

    return (
        <div className="SearchBar-container">
            <input 
                className = "search" 
                placeholder = "Buscar..."
                value={search}
                onChange = {(event) => handleChange(event)} 
            />
            <button className="button" onClick={(event) => mandar(event)} >Buscar</button>
        </div>
    )
}

export default SearchBar;
import { useState } from "react";
import { useDispatch } from "react-redux";
import { gamesName, getGames } from "../../redux/actions/actions";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./searchBar.css";

const SearchBar = () => {


    const dispatch = useDispatch();
    const [searchParams , setSearchParams] = useSearchParams();
    const [ search, setSearch ] = useState("")
    const navigate = useNavigate()

    const mandar = (event) => {
        event.preventDefault()
        dispatch(gamesName(search));
        setSearchParams({page: 1});
    }

    return (
        <div className="SearchBar-container">
            <input 
                className = "input" 
                placeholder = "Buscar..."
                autocomplete="off"
                value={search}
                onChange = {(event) => setSearch(event.target.value)} 
            />
            <button className="button" onClick={(event) => mandar(event)} >Buscar</button>
            <button className="allGames" onClick={() => dispatch(getGames())} >All Games</button>
            <button className="create" onClick={() => navigate("/create")} >Create</button>
        </div>
    )
}

export default SearchBar;
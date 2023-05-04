import "./searchBar.css";
// import { useState, useEffect } from "react";
// import axios from "axios";

const SearchBar = () => {

    // const [getGameName, setGameName ] = useState([]);

    // useEffect(() => {
    //     const getGame = async (name) => {
    //         try {
    //             const response = await fetch (`http://localhost:3001/videogames?search=${name}`)
    //             const data = await response.json();
    //             setGameName(data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     getGame()
    // }, []);

    return (
        <div className="SearchBar-container">
            <input className="search" placeholder="Buscar..." />
            <button className="button">Buscar</button>
        </div>
    )
}

export default SearchBar;
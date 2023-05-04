import Card from "../card/Card";
import { useState, useEffect } from "react";
import "./cards.css";

const Cards = () => {

    //seteo el estado de los juegos que se van a traer del back, inicializo como array vacio  
    const [gamesData, setGamesData] = useState([]);

    const [loaderGames, setLoaderGames] =useState(false);
    
    useEffect(() => {
        const getGames = async () => {
            try {
                setLoaderGames(true);
                const response = await fetch('http://localhost:3001/videogames');
                const data = await response.json();
                setGamesData(data);
                setLoaderGames(false);
            } catch (error) {
                console.error(error);
            }
        };
        getGames();
    }, []);

    return (
        <div className="card-list">
            { loaderGames ? <h1>Loading...</h1> : gamesData.map((game) => (
                <Card
                    key={game.id}
                    game={game}
                />
            ))}
        </div>
    )
}

export default Cards;



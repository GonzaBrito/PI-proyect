import Card from "../card/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import "./cards.css";

const Cards = () => {

    //seteo el estado de los juegos que se van a traer del back, inicializo como array vacio  
    const [gamesData, setGamesData] = useState([]);


    // useEffect(() => {
    //     const getGames = async () => {
    //         try {
    //             const response = await fetch('http://localhost:3001/videogames');
    //             const data = await response.json();
    //             setGamesData(data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     getGames();
    // }, []);

    const getGames = async () => {
        try {
            const response = await axios.get('http://localhost:3001/videogames');
            const data = await response.data;
            setGamesData(data)
        } catch (error) {
            console.error(error);
        }
    }

    getGames()


    return (
        <div className="card-list">
            {gamesData.map((game) => (
                <Card
                    key={game.id}
                    game={game}
                />
            ))}
        </div>
    )
}

export default Cards;



import Card from "../card/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../../redux/actions/actions"
import "./cards.css";

const Cards = () => {

    const games = useSelector((state) => state.games)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGames());
    }, [dispatch]);

    return (
        <div className="card-list">
            { games.length ?  games.map((game) => (
                <Card
                    key={game.id}
                    game={game}
                />  
            ))
            : <h1>Loading...</h1>}
        </div>
    )
}

export default Cards;



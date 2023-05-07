import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ game}) => {
    // console.log(`game: ${game}`);

    return (
        <Link className="link" to={`/videogames/${game.id}`}>
            <div className="card-container">
                <img className="imgCard" src={game.image} alt={`Game: ${game.name}`} />
                <h4>{game.platforms}</h4>
                <h2>{game.name}</h2>
                <h3>{game.rating}</h3>
            </div>
        </Link>
    )
}

export default Card;
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ game }) => {
    const valoracion = Array.from({ length: Math.round(game.rating) }, (_, i) => i)

    return (
        <Link className="link" to={`/videogames/${game.id}`}>
            <div className="card-container">
                <img className="imgCard" src={game.image} alt={`Game: ${game.name}`} />
                <div>
                    <h2>{game.name}</h2>
                </div>
                <div className="gencss">
                    <h3>Generos:</h3>
                    {game?.genres?.map((gen) => (
                        <span>{gen}</span>
                    ))}
                </div>
                <div>
                    <div>
                        <h3>Rating:</h3>
                        <h3>{game.rating}</h3>
                    </div>
                    {valoracion.map((val, index) => (
                        <span key={index} >⭐</span>
                    ))}
                </div>
            </div>
        </Link>
    )
}

export default Card;
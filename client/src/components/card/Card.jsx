import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ game }) => {
    const valoracion = Array.from({ length: Math.round(game.rating) }, (_, i) => i)

    return (
        <Link className="link" to={`/videogames/${game.id}`}>
            <div className="card-container">
                <img className="imgCard" src={game.image || game.background_image} alt={`Game: ${game.name}`} />
                <div className="card-Container__info">
                    <div className="nameGenContainer">

                        <div className="nameContainer">
                            <h2>{game.name}</h2>
                        </div>

                        <div className="genresContainer">
                            <h3>Genres:</h3>
                            {game?.genres?.map((gen, index) => (
                                <span key={index} className="span" >{gen}</span>
                            ))}
                            {/* <span>{game.genres}</span> */}
                        </div>

                    </div>
                    
                    <div className="ratingContainer">
                        <div className="ratingContainer__rating">
                            <h3>Rating:</h3>
                            <h3 className="rating">{game.rating}</h3>
                        </div>
                        <div>
                            {valoracion.map((val, index) => (
                                <span key={index} className="span" >⭐</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card;
import "./card.css";

const Card = ({ game }) => {
    // console.log(`game: ${game}`);
    return (
        <div className="card-container">
            <img className="img" src={game.image} alt={`Game: ${game.name}`} />
            <div>{game.platforms?.map((plat) => <h3>{plat.platform.name}</h3>)}</div>
            <h2>{game.name}</h2>
            <h3>{game.rating}</h3>
        </div>
    )
}

export default Card;
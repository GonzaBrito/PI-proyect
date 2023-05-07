import Card from "../card/Card";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useSearchParams } from "react-router-dom"
import { useState } from "react";
import { getGames } from "../../redux/actions/actions";
import Paginado from "../../components/paginado/Paginado";
import "./cards.css";

const Cards = () => {

    const porPagina = 15;

    const games = useSelector((state) => state.games)
    

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGames());
    }, [dispatch]);

    //seteamos un estado local de la pagina que estamos
    const [pagina, setPagina] = useState(1)

    //y armamoss la variable de total de paginas
    const totalPage = games.length / porPagina;

    return (
        <div>
            <Paginado pagina={pagina} setPagina={setPagina} totalPage={totalPage}/>
            <div className="card-list">
                {/* preguntamos si hay algo en el array de games, para hacer el loading,
                hacemos un slice a games para cortar los juegos que van por pagina, y vamos cambiando el lugar donde se corta los juegos, utilizando el estado de la pagina
                para luego mapear el array cortado y mostrarlas   */}
                {games.length ? games.slice(
                    (pagina - 1) * porPagina,
                    (pagina - 1) * porPagina + porPagina
                ).map((game) => (
                    <Card
                        key={game.id}
                        game={game}
                    />
                ))
                    : <img className="cardsLoader"></img>}

            </div>
        </div>
    )
}

export default Cards;



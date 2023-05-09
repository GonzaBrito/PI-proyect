import { useDispatch, useSelector } from "react-redux";
import "./detail.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getGameId } from "../../redux/actions/actions";

const Detail = () => {

    //el detail es el videojuego que me traigo del array de gameId del estado global
    const detail = useSelector((state) => state.gameId);

    const navigate = useNavigate();

    // esta linea de codigo es la que me deja hacer dispatch en react
    const dispatch = useDispatch();

    //el useParams es el que me deja traer los parametros que defini en el componente
    const params = useParams();

    //este useEffect es el que me controla el ciclo de vida del componente, o sea es el encargado de controlar cuando se dispare la funcion getGameId 
    useEffect(() => {
        //hace dispatch de la funcion creada en action.js mandandlo los parametros que se definieron en el componente
        dispatch(getGameId(params.id));
        //en el array de depencia sirve para volver a ejecutar la funcion getGameId cuando se haga un cambio en el componente 
        //y que muestre el componentne actualizado sin necesidad de volver a cargar la pagina
    }, [dispatch, params.id]);

    const back = () => {
        navigate("/home");
    }

    const valoracion = Array.from({ length: Math.round(detail?.rating) }, (_, i) => i)

    return (
        <div>
            {detail?.id ?
                <div className="detail-container">
                    <div className="detail-container__title">
                        <button className="button" onClick={back} >Volver</button>
                        <h1 className="title"> {detail?.name} </h1>
                    </div>
                    <div className="detail-container__informacion">
                        <img className="img" src={detail?.image} alt={`Game: ${detail?.name}`} />
                        <div className="detail-container__platform">
                            <h2>PLATFORMS:</h2>
                            {detail?.platforms?.map((plat) => (
                                <span className="platforms">{plat}</span>
                            ))}
                        </div>
                        <div className="detail-container__genres">
                            <h2>GENRES:</h2>
                            {detail?.genres?.map((gen) => (
                                <span className="genres">{gen}</span>
                            ))}
                        </div>
                        <div className="detail-container__rating">
                            <h2>RATING:</h2>
                            <h4> {detail?.rating} </h4>
                            {valoracion.map((val, index) => (
                                <span key={index} >⭐</span>
                            ))}
                        </div>
                        <hr />
                        <h2 className="nameDescription">DESCRIPTION</h2>
                        <div className="detail-container__description">
                            <span> {detail?.description} </span>
                        </div>
                    </div>
                </div>
                : <img className="detailLoader"></img> }
        </div>
    )
}

export default Detail;


// <div className="divGeneral">
//     {detail?.id ?
//         <div className="divItems">
//             <h1 className="title"> {detail?.name} </h1>
//             <div className="divItems2">
//                 <img className="imgDetail" src={detail?.image} alt={`Game: ${detail?.name}`} />
//             </div>
//             <div className="divPlat">
//                 <h2>Platforms:</h2>
//                 {detail?.platforms?.map((plat) => (
//                     <p className="platcss">{plat}</p>
//                 ))}
//             </div>
//             <div>
//                 <p> {detail?.description} </p>
//             </div>
//         </div>
//         : <h3>Cargando...</h3>}
// </div>




{/* <div className="divItems">
            <h1 className="title"> {detail?.name} </h1>
            <div className="divItems2">
                    <img className="imgDetail" src={detail?.image} alt={`Game: ${detail?.name}`} />
                <div>
                    <h2>Platforms:</h2>
                    {detail?.platforms?.map((plat) => (
                        <p className="platcss">{plat}</p>
                    ))}
                </div>
                <div>
                    <h2>Released:</h2>
                    <h4> {detail?.released} </h4>
                    <h2>Rating:</h2>
                    <h4> {detail?.rating} </h4>
                    <h2>Genres:</h2>
                    <div> {detail?.genre?.map((gen)=> (
                        <p className="gencss">{gen}</p>
                    ))} </div>
                </div>
            </div>
            <div>
            <p> {detail?.description} </p>
            </div>
        </div> */}









import { useDispatch, useSelector } from "react-redux";
import "./detail.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getGameId } from "../../redux/actions/actions";

const Detail = () => {

    //el detail es el videojuego que me traigo del array de gameId del estado global
const detail = useSelector((state) => state.gameId);

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
}, []);

// console.log("soy le primero",detalle);

return(
    <div className="detail-container">
        {/* pregunto si hay algo dentro de detail[0].id y si hay algo lo muestro sino muestro un loading */}
        {detail[0]?.id ? 
        <div>
            {/* tengo que usar el "?" para hacer una especie de pausa hasta que me traiga toda la informacion y poder renderizarla, si no lo hago me tira error */}
            <h3> {detail[0]?.id} </h3>
            <h3> {detail[0]?.name} </h3>
            {/* <img src={detail[0]?.image} alt={`Game: ${detail[0]?.name}`} /> */}
            <h3> {detail[0]?.platforms} </h3>
            <h3> {detail[0]?.description} </h3>
            <h3> {detail[0]?.released} </h3>
            <h3> {detail[0]?.rating} </h3>
            <h3> {detail[0]?.genre} </h3>
        </div>
        : <h3>Cargando...</h3> }    
    </div>
    )
}
        
export default Detail;
            
            
            


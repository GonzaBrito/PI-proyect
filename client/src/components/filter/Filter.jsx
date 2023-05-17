import { useDispatch, useSelector } from "react-redux";
import { getGenres, getGamesGen, sortedGames, filterOrigin } from "../../redux/actions/actions";
import "./filter.css";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"

const Filter = () => {

  const genres = useSelector((state) => state.genres);
  const games = useSelector((state) => state.games);

  const [searchParams , setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres())
  }, []);



  return (
    <div className="filter-container">
      <div className="filterContainer-info">

        <div className="generos-container__origin">

          <h2>ORIGIN</h2>
          <button className="originButton" onClick={() => dispatch(filterOrigin("Api", games))} >Api</button>
          <button className="originButton" onClick={() => dispatch(filterOrigin("Local", games))} >Local</button>
        </div>

        <div className="generos-container__sort">

          <h2>ALPHABETICALLY</h2>
          <button className="filButton" onClick={() => dispatch(sortedGames("asc", games))} >upward</button>
          <button className="filButton" onClick={() => dispatch(sortedGames("des", games))} >falling</button>
        </div>
        <div className="generos-container__rating">

          <h2>RATING</h2>
          <button className="filButton" onClick={() => dispatch(sortedGames("max", games))} >max</button>
          <button className="filButton" onClick={() => dispatch(sortedGames("min", games))} >min</button>
        </div>
        
          <h2 style={{marginTop: "50px"}}>GENRES</h2>
        <div className="generos-container__generos">

          {genres?.map((gen, index) => (
            <span key={index} className="span" onClick={() => {dispatch(getGamesGen(gen.name), setSearchParams({page: 1}))}} >{gen.name}</span>
          ))}
        </div>
      </div>
    </div >
  )
}

export default Filter;



import { useDispatch, useSelector } from "react-redux";
import { getGenres, getGamesGen, sortedGames } from "../../redux/actions/actions";
import "./filter.css";
import { useEffect, useState } from "react";

const Filter = () => {

  const genres = useSelector((state) => state.genres);
  const games = useSelector((state) => state.games);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getGenres())
  }, []);
  
  return (
    <div className="filter-container">
         <h1>Filters</h1>
         {genres?.map((gen) => (
          <span onClick={() => dispatch(getGamesGen(gen.name))} >{gen.name}</span>
         ))}
         <h1>Alfabeticamente</h1>
         <button onClick={() => dispatch(sortedGames("asc", games))} >ascendente</button>
         <button onClick={() => dispatch(sortedGames("des", games))} >descendente</button>
         <h1>RATING</h1>
         <button onClick={() => dispatch(sortedGames("max", games))} >max</button>
         <button onClick={() => dispatch(sortedGames("min", games))} >min</button>
         {console.log("filtrado por rating", games)}
    </div >
  )
}

export default Filter;



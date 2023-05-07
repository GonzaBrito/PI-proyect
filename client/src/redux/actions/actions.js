import axios from "axios";

export const GET_GAMES = "GET_GAMES";
export const GET_GAME_NAME = "GET_GAME_NAME";
export const GET_GAME_ID = "GET_GAME_ID"


// export const getGames = () => {
//     return function(dispatch){
//         fetch(`http://localhost:3001/videogames`)
//         .then((response) => response.json())
//         .then((data) => dispatch({ type: GET_GAMES, payload: data }));
//     };
// };

export const getGames = () => {
    return async function (dispatch){
        const games = await axios.get(`http://localhost:3001/videogames`) 
        const gamesData = games.data;
        return dispatch({type: GET_GAMES, payload: gamesData })
    }
}


export const gamesName = (search) => {
    return async function(dispatch){
        const game = await axios.get(`http://localhost:3001/videogames?search=${search}`)
        const gameData = game.data;
        return dispatch({type: GET_GAME_NAME, payload: gameData})
    }
}

export const getGameId = (id) => {
    return async function(dispatch){
        const game = await axios.get(`http://localhost:3001/videogames/${id}`)
        const gameData = game.data;
        return dispatch({type: GET_GAME_ID, payload: gameData})
    }
}



import axios from "axios";

export const GET_GAMES = "GET_GAMES";
export const GET_GAME_NAME = "GET_GAME_NAME";
export const GET_GAME_ID = "GET_GAME_ID"
export const GET_GENRES = "GET_GENRES"
export const FILTER_GENRES = "FILTER_GENRES"
export const FILTER_SORTED = "FILTER_SORTED"
export const GET_PLATFORMS = "GET_PLATFORMS"
export const POST_GAMES = "POST_GAMES"
export const FILTER_ORIGIN = "FILTER_ORIGIN"




// export const getGames = () => {
//     return function(dispatch){
//         fetch(`http://localhost:3001/videogames`)
//         .then((response) => response.json())
//         .then((data) => dispatch({ type: GET_GAMES, payload: data }));
//     };
// };

export const getGames = () => {
    return async function (dispatch) {
        const games = await axios.get(`http://localhost:3001/videogames`)
        const gamesData = games.data;
        // console.log("soy gamesData", gamesData);
        return dispatch({ type: GET_GAMES, payload: gamesData })
    }
}

export const gamesName = (search) => {
    return async function (dispatch) {
        const game = await axios.get(`http://localhost:3001/videogames?search=${search}`)
        const gameData = game.data;
        return dispatch({ type: GET_GAME_NAME, payload: gameData })
    }
}

export const getGameId = (id) => {
    return async function (dispatch) {
        const game = await axios.get(`http://localhost:3001/videogames/${id}`)
        const gameData = game.data;
        return dispatch({ type: GET_GAME_ID, payload: gameData })
    }
}

export const postGame = async (payload) => {
    // return async (dispatch) => {
    try {
        const response = await axios.post(`http://localhost:3001/videogames/`, payload);
        return response.data;
    } catch (error) {
        console.error("error", error)
    }
    // };
};

// export const postGame = (data) => {
//         const post = axios.post(`http://localhost:3001/videogames/`, data)
//         return post.data;
//     }  

export const getGenres = () => {
    return async function (dispatch) {
        const genres = await axios.get(`http://localhost:3001/genres`)
        const genresData = genres.data;
        return dispatch({ type: GET_GENRES, payload: genresData })
    }
}


export const getGamesGen = (gen) => {
    return async function (dispatch) {
        const games = await axios.get(`http://localhost:3001/videogames`)
        const gamesData = games.data;
        const filtrados = gamesData.filter((game) => game.genres.includes(gen))
        return dispatch({ type: FILTER_GENRES, payload: filtrados })
    }
}


export const sortedGames = (order) => {
    return async function (dispatch) {
        const games = await axios.get(`http://localhost:3001/videogames`)
        const gamesData = games.data;
        let filtrados = [];
        if (order === "asc") {
            filtrados = gamesData.sort((a, b) => a.name.localeCompare(b.name))
        }
        if (order === "des") {
            filtrados = gamesData.sort((a, b) => b.name.localeCompare(a.name))
        }
        if (order === "max") {
            filtrados = gamesData.sort((a, b) => b.rating - a.rating)
        }
        if (order === "min") {
            filtrados = gamesData.sort((a, b) => a.rating - b.rating)
        }
        return dispatch({ type: FILTER_SORTED, payload: filtrados })
    }
}


export const getPlatforms = () => {
    return async function (dispatch) {
        const plat = await axios.get(`http://localhost:3001/videosgames`)
        const platforms = plat.data;
        const filterPlat = platforms.filter(plat => plat)
        return dispatch({ type: GET_PLATFORMS, payload: filterPlat })
    }
}


export const filterOrigin = (status) => {
    return { type: FILTER_ORIGIN, payload: status};
};











// export const filterOrigin = (status, games) => {
//     return async function (dispatch) {
//         let filterXorigin;

//         if (status === "Local") {
//             filterXorigin = games.allVideogames?.filter(
//                 (videogame) => typeof videogame.id === "string"
//             );
//         }
//         if (status === "Api") {
//             filterXorigin = games.allVideogames?.filter(
//                 (videogame) => typeof videogame.id === "number"
//             );
//         }
//         return dispatch({ type: FILTER_ORIGIN, payload: filterXorigin })
//     }
// }



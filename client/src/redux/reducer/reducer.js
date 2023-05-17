import { GET_GAMES, GET_GAME_NAME, GET_GAME_ID, GET_GENRES, FILTER_GENRES, FILTER_SORTED, GET_PLATFORMS, POST_GAMES, FILTER_ORIGIN } from "../actions/actions";


const initialState = {
    games: [],
    gameId: [],
    genres: [],
    platforms: [],
    allVideogames: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GAMES:
            return { ...state, games: action.payload, allVideogames: action.payload };

        case GET_GAME_NAME:
            return { ...state, games: action.payload };

        case GET_GAME_ID:
            return { ...state, gameId: action.payload };

        case GET_GENRES:
            return { ...state, genres: action.payload };

        case FILTER_GENRES:
            return { ...state, games: action.payload };

        case FILTER_SORTED:
            return { ...state, games: action.payload };

        case GET_PLATFORMS:
            return { ...state, platforms: action.payload };

        case POST_GAMES:
            return { ...state };

        case FILTER_ORIGIN:
            let filterOrigin;

            if (action.payload === "Local") {
                filterOrigin = state.allVideogames.filter(
                    (videogame) => typeof videogame.id === "string"
                );
            }
            if (action.payload === "Api") {
                filterOrigin = state.allVideogames.filter(
                    (videogame) => typeof videogame.id === "number"
                );
            }
            return {...state,  games: filterOrigin};


        default:
            return { ...state };
    }
};

export default rootReducer;
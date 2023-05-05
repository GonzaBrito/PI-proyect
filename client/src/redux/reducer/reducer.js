import { GET_GAMES, GET_GAME_NAME, GET_GAME_ID } from "../actions/actions";


const initialState = {
    games: [],
    gameId: [],
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_GAMES:
            return {...state, games: action.payload};
            
        case GET_GAME_NAME:
        return {...state, games: action.payload};

        case GET_GAME_ID:
            return {...state, gameId:action.payload};

        default:
            return {...state};
    }
};
 
export default rootReducer;
require('dotenv').config();
const {API_KEY} = process.env;
const axios = require("axios");
const { Videogame } = require("../db");


const getGameId = async (id) => {
    if(Number(id)){
        const apiGames = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
        const games = [apiGames.data]
    
        const gameApi = games.map((game) =>{
            return {
                id: game.id,
                name: game.name,
                genres: game.genres?.map((gen) => gen.name),
                platforms: game.platforms?.map((plat) => plat.platform.name),
                released: game.released,
                image: game.image,
                rating: game.rating,
            };
        })
        return gameApi;
    }else{
        const dbGame = await Videogame.findByPk(id);
        return dbGame
    }
}

module.exports = {
    getGameId
}
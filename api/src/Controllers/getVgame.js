require('dotenv').config();
const {API_KEY} = process.env;
const axios = require("axios");
const { Videogame } = require("../db");


const getGames = async () => {
    const apiGames = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
    const games = apiGames.data.results;

    const dbGames = await Videogame.findAll();
    const allGames = games.concat(dbGames);

    const gameApi = allGames.map((game) =>{
        return {
            id: game.id,
            name: game.name,
            // genres: game.genres?.map((gen) => gen.name),
            // platforms: game.platforms?.map((plat) => plat.platform.name),
            // released: game.released,
            image: game.background_image,
            // rating: game.rating,
        };
    })

    if (allGames) {
        return gameApi;
    } else {
        throw Error('Juegos no encontrados');
    }
}

module.exports = {
    getGames
}


require('dotenv').config();
const {API_KEY} = process.env;
const axios = require("axios");
const { Videogame } = require("../db");


const getGameId = async (id) => {
    if(Number(id)){
        const apiGames = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
        const game = apiGames.data
    
            return {
                id: game.id,
                name: game.name,
                description: game.description,
                genres: game.genres?.map((gen) => gen.name),
                platforms: game.platforms?.map((plat) => plat.platform.name),
                released: game.released,
                image: game.background_image,
                rating: game.rating,
            };
    } else {
        const dbGame = await Videogame.findByPk(id, {
            include: { model: Genre, attributes: ["name"] },
        });
        if(dbGame) {
            return {
                id: dbGame.id,
                name: dbGame.name,
                description: db.description,
                genres: dbGame.genres?.map((gen) => gen.name),
                platforms: dbGame.platforms?.map((plat) => plat.name),
                released: dbGame.released,
                image: dbGame.image,
                rating: dbGame.rating,
            };
        } else {
            return "Game not found";
        }
    }
}

module.exports = {
    getGameId
}
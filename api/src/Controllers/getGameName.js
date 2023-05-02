require('dotenv').config();
const {API_KEY} = process.env;
const axios = require("axios");
const { Videogame } = require("../db");
const { Op } = require('sequelize');

const getApi = async (name) => {
    //console.log(name);
    const apiGames = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
    const games = apiGames.data.results;

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
}

const getDb = async (name) => {
    const dbGames = await Videogame.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        }
    });
    return dbGames
}
 
const getGameName = async (name) => {
    const getApii = await getApi(name);
    const getDbb = await getDb(name);
    const allGamesname = [...getApii, ...getDbb];

    if(allGamesname){
        return allGamesname;
    }else{
        throw Error('Juegos no encontrados');
    }
}

module.exports = {
    getGameName
}
require('dotenv').config();
const {API_KEY} = process.env;
const axios = require("axios");
const { Videogame } = require("../db");


const getGames = async () => {
    let apiUrls = [];
    for (let i = 1; i <= 5; i++){
        apiUrls = [...apiUrls, `https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`]
    };
    let apiGames = apiUrls.map((url) => axios.get(url));
    apiGames = await Promise.all(apiGames);
    apiGames = apiGames?.map((response) => response.data.results).flat();

    // const apiGames = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
    // const games = apiGames.data.results;

    const dbGames = await Videogame.findAll();
    const allGames = apiGames.concat(dbGames);

    const gameApi = allGames.map((game) =>{
        return {
            id: game.id,
            name: game.name,
            genres: game.genres?.map((gen) => gen.name),
            platforms: game.platforms?.map((plat) => plat.platform.name),
            released: game.released,
            image: game.background_image,
            rating: game.rating,
        };
    })

    if (allGames) {
        console.log("esto es gameApi", gameApi);
        return gameApi;
    } else {
        throw Error('Juegos no encontrados');
    }
}

module.exports = {
    getGames
}
















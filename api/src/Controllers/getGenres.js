require('dotenv').config();
const {API_KEY} = process.env;
const axios = require("axios");
const { Videogame, Genre } = require("../db");


const getGeneros = async () => {
    const apiGenre = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    const genre = apiGenre.data.results;
    
    const genreApi = genre.map((genre) =>{
        return {
            id: genre.id,
            name: genre.name,
        };
    })

    if (genreApi) {
        console.log(genreApi);
        return genreApi;
    } else {
        throw Error('Generos no encontrados');
    }
}

module.exports = {
    getGeneros
}

require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const { Genre } = require('../db');


const getGeneros = async () => {
    try {
    const apiGenre = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
   // mapeo la respuesta para obtener solo el nombre
   // de cada genero y lo almaceno en un arreglo 'genres'
    const genres = apiGenre.data.results.map((genre) => ({
    //     ^
            name: genre.name,

        }));
// recorro el arreglo de géneros y para cada género uso el metodo findOrCreate
// creando un registro en la tabla 'Genre' de la base de datos si no existe.
   genres.forEach(async (genre) => {
    await Genre.findOrCreate({
        where: {
            name: genre.name,
        },
    });
   });
   let genresList = await Genre.findAll();
   return genresList;
} catch (error) {
    throw new Error(error)
}
};

module.exports = {getGeneros};

//Los handlers lo que van a hacer es recibir toda la info que llega por query, params, id o body y se la van a mandar a los controladores y/o respuestas al servidor
const { getGames } = require("../Controllers/getVgame") 
const { getGameId } = require("../Controllers/getGameId")
const { postGame } = require("../Controllers/postGame")
const { getGameName } = require("../Controllers/getGameName")
const { Videogame, Genre } = require('../db')


//handle para pedir los juegos 
const getVGames = async (req, res) => {
    const { search } = req.query;
    try {
        //console.log(`El nombre que esta llegando por query es ${search}`);
        if(search){ 
            const getGameByName = await getGameName(search)
            res.status(200).json(getGameByName);
        }else{
            const allGames = await getGames();
            res.status(200).json(allGames);
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

//handle para pedir los juegos por id 
const getIdVGames = async (req, res) => {
    const { id } = req.params
    try {
        const gamesId = await getGameId(id)
        res.status(200).json(gamesId);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


//handle para postear un nuevo juego 
const postVGame = async (req, res) => {
    const { name, description, platforms, background_image, genres, released, rating } = req.body
    try {
        const newGame = await postGame(name, description, platforms, background_image, genres, released, rating);

        const genresDb = await Genre.findAll({
            where: {
                name: genres
            }
        })
        // console.log("*********",genres)
        newGame.addGenre(genresDb)

        res.status(200).json(newGame)
        // const gameNew = await Videogame.findOne({
        //     where:{
        //         id:newGame.id
        //     },
        //     include:{
        //         model:Genre
        //     }
        // })
        // res.status(200).json(gameNew);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    getVGames,
    getIdVGames,
    postVGame,
};

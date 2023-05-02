const { Videogame } = require('../db')

const postGame = async (name, description, platforms, image, released, rating) =>{
    const newGame = await Videogame.create({
        name, description, platforms, image, released, rating
    })
    return newGame;
}

module.exports = {
    postGame
}
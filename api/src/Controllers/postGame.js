const { Videogame, Genre } = require('../db')

const postGame = async (name, description, platforms, image, released, rating, genres) =>{
    
    let dbgenres = [];
    for (let genre of genres) {
        const genresDb = await Genre.findOne({
            where:{
                name: genre
            }
        })
        if(genresDb){
            dbgenres.push(genresDb)
        }

    }
    // console.log("soy el map", dbgenres.map(gen=> gen.dataValues.name));
    const newGame = await Videogame.create({
        name: name, description: description, platforms:platforms, image:image, released:released, rating:rating, genres:genres
    })
    await newGame.addGenres(dbgenres)
    // newGame.save()
    return newGame;
}

module.exports = {
    postGame
}
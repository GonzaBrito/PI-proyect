const { Videogame } = require("../db");
require("dotenv").config();
const { Op } = require ("sequelize")
// ------------POST -------------------
const postGame = async (
  name,
  description,
  platforms,
  background_image,
  genres,
  released,
  rating
) => {
  // console.log("soy image en post game",background_image);
  const [new_game, boolean] = await Videogame.findOrCreate({
    where: {
      name: {[Op.iLike]: `%${name}%`}
    },
    defaults: {
      name,
      description,
      platforms,
      background_image,
      genres,
      released,
      rating,
    },
  });
  // console.log("soy new_game en post game", new_game);
  if (!boolean) throw new Error("The game already exists");
  return new_game;
};

module.exports = { postGame };












// const { Videogame, Genre } = require('../db')

// const postGame = async (name, description, platforms, image, released, rating, genres) =>{
    
//     let dbgenres = [];
//     for (let genre of genres) {
//         const genresDb = await Genre.findOne({
//             where:{
//                 name: genre
//             }
//         })
//         if(genresDb){
//             dbgenres.push(genresDb)
//         }
//     }
//     // console.log("soy el map", dbgenres.map(gen=> gen.dataValues.name));
//     const newGame = await Videogame.create({
//         name: name, description: description, platforms:platforms, image:image, released:released, rating:rating, genres:genres
//     })
//     await newGame.addGenres(dbgenres)
//     // newGame.save()
//     return newGame;
// }

// module.exports = {
//     postGame
// }
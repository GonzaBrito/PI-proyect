const { Router } = require('express');
const vGamesRouter = require("./vGamesRouter");
const genresRouter = require("./genresRouter");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//rutas del back
const router = Router();

router.use("/videogames", vGamesRouter);

router.use("/genres", genresRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
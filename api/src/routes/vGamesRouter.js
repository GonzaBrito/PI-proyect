const {Router} = require("express");
const {
  getVGames, 
  getIdVGames, 
  postVGame
} = require("../handlers/vGamesHandlers");

const vGamesRouter = Router();

vGamesRouter.get("/", getVGames);
vGamesRouter.get("/:id", getIdVGames);
vGamesRouter.post("/", postVGame);

module.exports = vGamesRouter;
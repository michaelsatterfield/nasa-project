const express = require("express");

const planetsRouter = express.Router();

planetsRouter.get("/planets", getAllPLanets);


module.exports = planetsRouter;

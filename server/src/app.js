const express = require("express");

const planetsRouter = require("./routes/planets/planets.router");

const app = express();
app.use(express.json());

module.exports = app;

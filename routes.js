// Importação do modulo de rotas Express
const express = require("express");
const routes = express.Router();

//! Declarando  criadas por mim
const MyRoutes = require("./app/routes");

routes.get("/", MyRoutes.listAllStates);
module.exports = routes;
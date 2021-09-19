// Importação do modulo de rotas Express
const express = require("express");
const routes = express.Router();

//! Declarando  criadas por mim
const MyRoutes = require("./app/routes");

routes.get("/", MyRoutes.listAllStates);
routes.get("/:id", MyRoutes.findState);
routes.post("/", MyRoutes.insertState);
routes.put("/:id", MyRoutes.updateState);
routes.delete("/:id", MyRoutes.deleteState);
module.exports = routes;
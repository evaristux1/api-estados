// Configuração do Express
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

// Importação das rotas
const routes = require("../routes.js");

module.exports = () => {
  // Utilizando módulos do express
  app.use(morgan("dev"));
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api/states", routes);
  return app;
};

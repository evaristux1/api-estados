const express = require("express");
const { states } = require("./app/models");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const response = states.create({
    nome: "teste",
    regiao: "TESTE1",
    populacao: 42526,
    capital: "teste2",
    area: 45.2,
  });
  res.send(response);
});

app.listen(3000);

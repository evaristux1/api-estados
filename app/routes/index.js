const statesController = require("../controllers/state");

async function listAllStates(req, res) {
  try {
    const resultado = await statesController.list();

    res.status(200).send(resultado);
  } catch (err) {
    res.status(500).send({ status: false, erro: err });
  }
}
async function findState(req, res) {
  try {
    const id = req.params.id;

    const resultado = await statesController.find(id);
    let status = resultado.status ? 200 : 404;
    res.status(status).send(resultado);
  } catch (err) {
    res.status(500).send({ status: false, erro: err });
  }
}
async function insertState(req, res) {
  try {
    const state = req.body;

    const resultado = await statesController.insert(state);

    res.status(201).send(resultado);
  } catch (err) {
    res.status(500).send({ status: false, erro: err });
  }
}
async function updateState(req, res) {
  try {
    const id = req.params.id;
    const state = req.body;
    const resultado = await statesController.update(id, state);
    let status = resultado.status ? 200 : 404;
    res.status(status).send(resultado);
  } catch (err) {
    res.status(500).send({ status: false, erro: err });
  }
}
async function deleteState(req, res) {
  try {
    const id = req.params.id;
    const resultado = await statesController.remove(id);
    let status = resultado.status ? 200 : 404;
    res.status(status).send(resultado);
  } catch (err) {
    res.status(500).send({ status: false, erro: err });
  }
}
module.exports = {
  listAllStates,
  findState,
  insertState,
  updateState,
  deleteState,
};

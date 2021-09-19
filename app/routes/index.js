const statesController = require("../controllers/state");

async function listAllStates(req, res) {
  try {
    const resultado = await statesController.list();

    res.send(resultado);
  } catch (err) {
    res.status(500).send({ status: false, erro: err });
  }
}

module.exports = {
  listAllStates,
};

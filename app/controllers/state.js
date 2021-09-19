const { states } = require("../models");

// Lista todos os chamados
async function list() {
  try {
    const resultado = await states.findAll();
    return { status: resultado.length > 0, data: resultado };
  } catch (err) {
    throw "List all states error:" + err;
  }
}

module.exports = {
    list,
};

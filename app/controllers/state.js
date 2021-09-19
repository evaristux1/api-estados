const { states } = require("../models");

async function list() {
  try {
    const STATES = await states.findAll();
    return { status: STATES.length > 0, data: STATES };
  } catch (err) {
    throw "List all states error:" + err;
  }
}
async function find(id) {
  try {
    const STATE = await states.findAll({
      where: {
        id: id,
      },
    });
    return { status: STATE.length > 0, data: STATE };
  } catch (err) {
    throw "List this states error:" + err;
  }
}
async function insert(state) {
  try {
    const NEWSTATE = await states.create({
      nome: state.nome.toUpperCase(),
      regiao: state.regiao.toUpperCase(),
      populacao: state.populacao,
      capital: state.capital.toUpperCase(),
      area: state.area,
    });

    return {
      status: NEWSTATE ? true : false,
      data: NEWSTATE,
    };
  } catch (err) {
    throw "insert newstate error:" + err;
  }
}
async function update(id, state) {
  try {
    const VerifyExists = await states.findAll({
      where: {
        id: id,
      },
    });
    if (!VerifyExists.length) {
      return {
        status: false,
        data: "this id  not exist.",
      };
    } else {
      const UPDATESTATE = await states.update(
        state,

        {
          where: {
            id: id,
          },
        }
      );

      const UPDATEDSTATE = await states.findAll({
        where: {
          id: id,
        },
      });
      return {
        status: UPDATESTATE ? true : false,
        data: UPDATEDSTATE,
      };
    }
  } catch (err) {
    throw "update new state error:" + err;
  }
}
async function remove(id, state) {
  try {
    const VerifyExists = await states.findAll({
      where: {
        id: id,
      },
    });
    if (!VerifyExists.length) {
      return {
        status: false,
        data: "this id not exist.",
      };
    } else {
      const DELETESTATE = await states.destroy({
        where: {
          id: id,
        },
      });

      return {
        status: DELETESTATE ? true : false,
        data: [],
      };
    }
  } catch (err) {
    throw "delete this state error:" + err;
  }
}

module.exports = {
  list,
  find,
  insert,
  update,
  remove,
};

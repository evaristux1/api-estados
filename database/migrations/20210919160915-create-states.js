module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("states", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      regiao: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      populacao: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      area: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable("states");
  },
};

module.exports = (sequelize, DataTypes) => {
  const STATES = sequelize.define(
    "states",
    {
      id: { primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true },
      nome: DataTypes.STRING,
      regiao: DataTypes.STRING,
      populacao: DataTypes.FLOAT,
      capital: DataTypes.STRING,
      area: DataTypes.FLOAT,
    },
    {
      tableName: "states", // Tabela utilizada
      timestamps: false, // Retira colunas padroes na inserção
    }
  );

  return STATES;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Countries', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    abbreviation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Country.associate = function(models) {
    Country.belongsTo(models.Continents, {
      foreignKey: "continent",
      onDelete: "CASCADE"
    });
  };
  return Country;
};
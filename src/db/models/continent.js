'use strict';
module.exports = (sequelize, DataTypes) => {
  const Continent = sequelize.define('Continents', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    acronym: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {});
  Continent.associate = function(models) {
    Continent.hasMany(models.Countries, {
      foreignKey: "continent",
      as: "countries"
    });
  };
  return Continent;
};
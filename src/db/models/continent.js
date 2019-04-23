'use strict';
module.exports = (sequelize, DataTypes) => {
  const Continent = sequelize.define('Continents', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    acronym: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Continent.associate = function(models) {
    // associations can be defined here
  };
  return Continent;
};
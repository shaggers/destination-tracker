'use strict';
const country = require("./countries.json");

let countries = [];
let names = [];
let abbreviations = [];
let continents = [];
let values = [];

Object.keys(country).map((item) => {
  abbreviations.push(item);
})

Object.values(country).map((item) => {
  values.push(item);
})

values.forEach((item) => {
  names.push(item.name);
  continents.push(item.continent);
})

let countryLength = abbreviations.length;

for(let i = 0 ; i < countryLength ; i++){
  countries.push({
    name: names[i],
    abbreviation: abbreviations[i],
    continent: continents[i],
    createdAt: new Date(),
    updatedAt: new Date()
  })
}


module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert("Countries", countries, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete("Countries", null, {});
  }
};

'use strict';
const continent = require("./continents.json");

let continents = [];
let acronyms = [];
let names = [];

Object.keys(continent).map((item) => {
  acronyms.push(item);
})

Object.values(continent).map((item) => {
  names.push(item)
})

let continentLength = acronyms.length;

for(let i = 0 ; i < continentLength ; i++){
  continents.push({
    name: names[i],
    acronym: acronyms[i],
    createdAt: new Date(),
    updatedAt: new Date()
  })
}

/*
  for(let i = 0 ; i < continent.length ; i++) {
    let item = continent[i];
    console.log('Reached the loop');
    continents.push({
      name: Object.values(item),
      acronym: Object.keys(item),
      id: i
    })
  }
*/ 
  
console.log(continents);


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
   return queryInterface.bulkInsert("Continents", continents, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete("Continents", null, {});
  }
};

'use strict';

const bcrypt = require("bcrypt");

const salt = bcrypt.genSaltSync();

let users = [];

users.push({
  email: "theHashSlinging@gmail.com",
  password: bcrypt.hashSync("slasher", salt),
  createdAt: new Date(),
  updatedAt: new Date()
})

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
   return queryInterface.bulkInsert("Users", users, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete("Users", null, {});
  }
};

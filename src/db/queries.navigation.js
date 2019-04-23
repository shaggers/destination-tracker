const Continent = require("./models").Continents;

module.exports = {

  getAllContinents(callback){
    return Continent.findAll()
    .then((continents) => {
      callback(null, continents);
    })
    .catch((err) => {
      callback(err);
    })
  },
  getContinent(id, callback){
    return Continent.findByPk(id)
    .then((continent) => {
      callback(null, continent);
    })
    .catch((err) => {
      callback(err);
    })
  }
}
const Continent = require("./models").Continents;
const Country = require("./models").Countries;

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
  getContinent(name, callback){
    return Continent.findOne({where: {name: name},
        include: [{
            model: Country,
            as: "countries"
        }]
    })
        
    .then((continent) => {
      callback(null, continent);
    })
    .catch((err) => {
      callback(err);
    })
  }
}
const Country = require("./models").Countries;
const Continent = require("./models").Continents;

module.exports = {
    getCountry(name, callback){
        return Country.findOne({where: {name: name}})
        .then((country) => {
          callback(null, country);
        })
        .catch((err) => {
          callback(err);
        })
    }
}
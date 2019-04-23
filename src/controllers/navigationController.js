const navigationQueries = require("../db/queries.navigation.js");

module.exports = {
    index(req, res, next){
        navigationQueries.getAllContinents((err, continents) => {
            if(err){
                res.redirect(500, "static/index");
            } else {
                res.render("navigation/index", {continents});
            }
        })
    },
    show(req, res, next){

        navigationQueries.getContinent(req.params.id, (err, continent) => {

        if(err || continent == null){
            res.redirect(404, "/");
        } else {
            res.render("navigation/show", {continent});
        }
     });
   }
  }
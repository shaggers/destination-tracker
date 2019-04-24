const navigationQueries = require("../db/queries.navigation.js");

module.exports = {
    index(req, res, next){

        if(req.user){

            navigationQueries.getAllContinents((err, continents) => {
                if(err){
                    res.redirect(500, "static/index");
                } else {
                    res.render("navigation/index", {continents});
                }
            })

        } else {
            req.flash("notice", "You must be signed in to do that")
            res.redirect("/")
        }
    },
    show(req, res, next){

        if(req.user){

            navigationQueries.getContinent(req.params.name, (err, continent) => {
                if(err || continent == null){
                    res.redirect(404, "/");
                } else {
                    res.render("navigation/show", {continent});
                }
            });

        } else {
            req.flash("notice", "You must be signed in to do that")
            res.redirect("/")
        } 
   }
}
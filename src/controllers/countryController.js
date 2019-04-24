const countryQueries = require("../db/queries.countries.js");

module.exports = {
    show(req, res, next){

        if(req.user) {

            countryQueries.getCountry(req.params.name, (err, country) => {
            if(err || country == null){
                res.redirect(404, "/");
            } else {
                res.render("countries/show", {country});
            }
            });

        } else {
            req.flash("notice", "You must be signed in to do that")
            res.redirect("/")
        }
    }
}

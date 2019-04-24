module.exports = {
    index(req, res, next){

      if(!req.user){
        res.render("static/index", {title: "Welcome to the destination tracker"});
      } else {
        req.flash("notice", "You cannot do that")
        res.redirect("/navigation")
      }
    }
}
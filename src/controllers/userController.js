const userQueries = require("../db/queries.users.js");
const passport = require("passport");

module.exports = {
    signUp(req, res, next){

      if(!req.user) {
        res.render("users/sign_up");
      } else {
        req.flash("notice", "You are already signed in")
        res.redirect("/navigation")
      }
    },
    create(req, res, next){

     let newUser = {
       email: req.body.email,
       password: req.body.password,
       passwordConfirmation: req.body.passwordConfirmation
     };

     userQueries.createUser(newUser, (err, user) => {
       if(err){
         req.flash("error", err);
         res.redirect("/users/sign_up");
       } else {
         passport.authenticate("local")(req, res, () => {
           req.flash("notice", "You've successfully signed in!");
           res.redirect("/navigation");
         })
       }
     });
    },
    signInForm(req, res, next){
        
        if(!req.user) {
          res.render("users/sign_in");
        } else {
          req.flash("notice", "You are already signed in")
          res.redirect("/navigation")
        }
    },
    signIn(req, res, next){

      passport.authenticate('local', function(err, user, info) {
 
        if(err){
          req.flash("notice", "Sign in failed. Please try again.")
          return next(err);
        }
        if(!user){
            req.flash("notice", "The email or password you entered was incorrect");
            return res.redirect('/users/sign_in')
        } 
        req.login(user, function(err) {
            req.flash("notice", "You've successfully signed in!");
            if(err){return next(err);}
            return res.redirect("/navigation");
        })
      })(req, res, next);

      /*
        passport.authenticate("local")(req, res, function () {
          if(!req.user){
            console.log("reached the controller");
            req.flash("notice", "Sign in failed. Please try again.")
            res.redirect("/users/sign_in");
          } else {
            req.flash("notice", "You've successfully signed in!");
            res.redirect("/navigation");
          }
        })
      */
    },
    signOut(req, res, next){
        req.logout();
        req.flash("notice", "You've successfully signed out!");
        res.redirect("/");
    }
  }
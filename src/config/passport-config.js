const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../db/models").Users;
const authHelper = require("../auth/helpers");

module.exports = {
  init(app){

    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new LocalStrategy({
      usernameField: "email"
    }, (email, password, done) => {
      User.findOne({
        where: { email }
      })
      .then((user) => {
        
        if (!user || !authHelper.comparePass(password, user.password)) {
          return done(null, false);
        }
        return done(null, user);
      }).catch((err) => {
        return done(err);
      })
    }));

    passport.serializeUser((user, callback) => {
      callback(null, user.id);
    });

    passport.deserializeUser((id, callback) => {
      User.findByPk(id)
      .then((user) => {
        callback(null, user);
      })
      .catch((err =>{
        callback(err, user);
      }))

    });
  }
}
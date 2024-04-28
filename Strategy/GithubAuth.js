const passport = require('passport');
require('dotenv').config();
const GitHubStrategy = require('passport-github').Strategy;


passport.serializeUser(function(name, done) {
  done(null, name);
});

passport.deserializeUser(function(name, done) {
  done(null, name);
});

passport.use(new GitHubStrategy({
    clientID: "083ae95b40b40a524a27",
    clientSecret: "f4b1a8fdc302b3c451309a54fcf391699d44afba",
    callbackURL: "http://localhost:3002/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null , profile)
  }
));



module.exports = passport;
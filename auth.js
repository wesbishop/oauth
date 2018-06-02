const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');

const setupAuth = (app) => {

  // #1 setup cookie middleware
  app.use(cookieParser());

  // #2 set up session middleware
  app.use(session( {
    secret: 'secretserverword',
    resave: true;
    saveUnitialized: true
  }));

  passport.use(new GitHubStrategy({
    clientID: "84952512d30f410f653c",
    clientSecret: "d38c3b59615df4ee394416e7b61670c25b8c4579",
    callbackURL: "http://localhost:3000/github/auth"
  }, (accessToken, refreshToken, profile, done) => {
    //Will be filled in later
  }
))
}

module.exports = setupAuth;



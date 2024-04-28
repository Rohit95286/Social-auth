const  passport = require('passport');
const githubAuthRouter =  require('express').Router();
require('./../Strategy/GithubAuth');


githubAuthRouter.get('/' ,  
passport.authenticate('github', { scope: ['profile' ] }));

githubAuthRouter.get( '/callback',
  passport.authenticate( 'github', {
    successRedirect: 'http://localhost:3002/auth/success',
    failureRedirect: '/auth/failure'
  })
);

module.exports = githubAuthRouter;
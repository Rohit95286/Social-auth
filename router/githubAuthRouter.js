const  passport = require('passport');
const githubAuthRouter =  require('express').Router();
require('./../Strategy/GithubAuth');


githubAuthRouter.get('/' ,  
passport.authenticate('github', { scope: ['profile' ] }));

githubAuthRouter.get( '/callback',
  passport.authenticate( 'github', {
    successRedirect: 'https://social-auth-8kl8.onrender.com/auth/success',
    failureRedirect: '/auth/failure'
  })
);

module.exports = githubAuthRouter;
const googleAuthRouter =  require('express').Router()
const passport = require('passport');
require('./../Strategy/GoogleAuth');

googleAuthRouter.get('/',
  passport.authenticate('google', { scope: ['profile' ] }
));

googleAuthRouter.get( '/callback',
    passport.authenticate( 'google', {
      successRedirect: 'https://social-auth-8kl8.onrender.com/auth/success',
      failureRedirect: '/auth/failure'
    })
  );



module.exports = googleAuthRouter


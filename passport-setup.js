const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keysConfig=require('./config/keys')

passport.use(
    new GoogleStrategy(
    {
    //options
        callbackURL:keysConfig.google.callbackURL,
        clientID:keysConfig.google.clientID,
        clientSecret:keysConfig.google.clientSecret
    },
    (accessToken,refreshToken,profile,done)=>{
    //passport callback
        console.log('passport callback called');
        console.log(profile);
        // done();
    })
);

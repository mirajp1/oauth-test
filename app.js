const express = require('express');
const envConfig = require('./config/environment')[process.env.NODE_ENV || 'development'];
const db = require('./db');
const passportSetup = require('./passport-setup');
const passport=require('passport');
const app=express();
const cookieSession=require('cookie-session');
const keys=require('./config/keys');

app.set('view engine','ejs');

app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[keys.encryption_session.key]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.get('/',(req,res)=>{
    res.render('home',{profile:req.user});
});

app.use('/auth',require('./routes/auth-routes.js'));
app.use('/profile',require('./routes/profile-routes.js'));

app.listen( process.env.port || envConfig['server'].port,()=>{
    console.log('Server now listening for requests')
});

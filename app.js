const express = require('express');
const envConfig = require('./config/environment')[process.env.NODE_ENV || 'development'];
const db = require('./config/db');
const passportSetup = require('./passport-setup');
const app=express();
app.set('view engine','ejs');


app.get('/',(req,res)=>{
    res.render('home');
});

app.use('/auth',require('./routes/auth-routes.js'));

app.listen( process.env.port || envConfig['server'].port,()=>{
    console.log('Server now listening for requests')
});

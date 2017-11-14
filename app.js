const express = require('express');
const config = require('./config')[process.env.NODE_ENV || 'development'];

const app=express();
app.set('view engine','ejs');


app.get('/',(req,res)=>{
    res.render('home');
});

app.use('/auth',require('./routes/auth-routes.js'));

app.listen( process.env.port || config['server'].port,()=>{
    console.log('Server now listening for requests')
});

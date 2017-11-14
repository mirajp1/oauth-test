const router = require('express').Router();
const passport = require('passport');

router.get('/login',(req,res)=>{
    res.render('login');
});

router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));

router.get('/google/callback',passport.authenticate('google'),(req,res)=>{
    res.send('you reached callback url');
});

router.get('/logout',(req,res)=>{
    //TODO: handle with passport
    res.send('logging out');
})

module.exports=router;

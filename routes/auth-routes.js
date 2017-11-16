const router = require('express').Router();
const passport = require('passport');

router.get('/login',(req,res)=>{
    if(req.user)
        res.redirect('/profile');
    res.render('login',{profile:req.user});
});

router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));

router.get('/google/callback',passport.authenticate('google'),(req,res)=>{
    // res.send(req.user);
    res.redirect('/profile/');
});

router.get('/logout',(req,res)=>{
    //TODO: handle with passport
    // res.send('logging out');
    req.logout();
    res.redirect('/');
})

module.exports=router;

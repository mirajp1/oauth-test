const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keysConfig=require('./config/keys')
const User = require('./models/user');

passport.serializeUser((user,done)=>{
    done(null,user.id);
})

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user);
    });
});

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
        // console.log('passport callback called');
        // console.log(profile);

        User.findOne({googleID:profile.id}).then((data)=>{
            if(data){
                console.log('user found');
                console.log(data);
                done(null,data);
            }
            else{
                var user=User({
                    googleID:profile.id,
                    userName:profile.displayName,
                    thumbnail:profile._json.image.url
                }).save().then((data)=>{
                    console.log('saved new user.');
                    console.log(data);
                    done(null,data);
                }).catch((err)=>{

                });
            }
        }).catch((err)=>{

        });
        // done();
    })
);

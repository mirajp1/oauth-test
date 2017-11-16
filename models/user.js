const mongoose = require('mongoose');

const UserSchema=mongoose.Schema({
    userName:String,
    googleID:Number,
    thumbnail:String
});

const User = mongoose.model('user',UserSchema);

module.exports=User;

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    imageName : {
        type:String
    } 
})

const UserModel = mongoose.model("users",UserSchema);
module.exports = UserModel;
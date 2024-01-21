const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name is required'],
        minLength:[2,'Herbs name should be at least 2 characters long']
    },
    email:{
        type:String,
        required:[true, 'Email is required'],
        minLength:[2,'Email should be at least 2 characters long']
    },
    password:{
        type:String,
        required:[true, 'Password is required'],
        minLength:[2,'Passwod should be at least 2 characters long']
    },
});



const User = mongoose.model('User', userSchema);

module.exports = User;
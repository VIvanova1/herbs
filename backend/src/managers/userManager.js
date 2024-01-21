const User = require("../models/User");


exports.findOne = (userData) => User.findOne({ email: userData.email });
// exports.findOne = (email) => console.log(email);;

exports.register = (user) => User.create(user);

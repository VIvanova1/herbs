const User = require("../models/User");


exports.findOne = (userData) => User.findOne({ email: userData.email });

exports.register = (user) => User.create(user);

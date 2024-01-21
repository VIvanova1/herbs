const User = require("../models/User");


exports.findOne = (email) => User.findOne(email);
exports.register = (user) => User.create(user);

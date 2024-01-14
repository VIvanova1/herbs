const Herbs = require('../models/Herbs');

exports.getAll = () => Herbs.find();
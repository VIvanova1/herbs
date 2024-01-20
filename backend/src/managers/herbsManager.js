const Herbs = require('../models/Herbs');

exports.getAll = () => Herbs.find();
exports.create = (data) => Herbs.create(data);
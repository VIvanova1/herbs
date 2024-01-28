const Herbs = require('../models/Herbs');

exports.getAll = () => Herbs.find();
exports.create = (data) => Herbs.create(data);
exports.edit = (id, data) => Herbs.findByIdAndUpdate(id, data)
exports.findById = (id) => Herbs.findById(id);
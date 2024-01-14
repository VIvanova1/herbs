const { mongoose } = require("mongoose");


mongoose.connect('mongodb+srv://venetaivanova:Ivanova1996V@cluster0.czclffj.mongodb.net/')
    .then(() => console.log('DB connected'))
    .catch(err => console.log('DB Error, ', err.message));

module.exports = mongoose
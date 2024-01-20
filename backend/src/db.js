const { mongoose } = require("mongoose");
const connectionString  = require("./config/pass");


mongoose.connect(connectionString)

    .then(() => console.log('DB connected'))
    .catch(err => console.log('DB Error, ', err.message));

module.exports = mongoose
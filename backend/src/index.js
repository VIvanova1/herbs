const express = require("express");
const mongoClient = require('mongodb').MongoClient;
const cors = require("cors");
const dbConfig = require('./config')
const connection = require('./config/pass');
const routes = require('./routes');

const app = express();


app.use(cors());
app.use(routes);



const PORT = dbConfig.PORT || 8080;
app.listen(connection.connectionString, () => {
  console.log(`Server is running on port ${PORT}.`);
});

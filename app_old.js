//Initliaze the required packages.
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const expressSanitizer = require('express-sanitizer');

//Port the App Connects To.
const port = 3000
//app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//express sanitizer - To remove any illegitimate javascript code as part of the request.
//Note that is should be used after  the bodyParser.urlencoded line
app.use(expressSanitizer());

// parse application/json
app.use(bodyParser.json())

//Initialise and Connection to POSTGRESQL
const sequelize = new Sequelize(
  "postgres://postgres:xthno221286@localhost:5432/postgres"
);

//Connect to POSTGRESQL
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);  
});


//Default Root .
app.get('/', (req, res) => res.json({ message: 'RESTFULAPI' }));

//Setup the port where the application listens to for requests. 
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

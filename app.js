const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

//Require Databse Connection
const databaseConnection = require("./api/config/database");

//Setup Http-Logger Middleware
app.use(logger('dev'));

//Setup body parser & cookie parser middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());


//Route for index
const indexRoute = require('./api/routes/index');
app.use('/api', indexRoute );

//Route for user
const userRoute = require('./api/routes/user');
app.use('/api/user', userRoute );

module.exports = app;
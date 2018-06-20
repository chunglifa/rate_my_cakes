//CONFIGURATIONS
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var path = require("path");
app.use(bodyParser.json()); //JSON
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static( __dirname + '/public/dist/public' )); 

//SERVER & MODELS
require('./server/config/mongoose.js');

//ROUTES
require('./server/config/routes.js')(app);

//LISTEN
const server = app.listen(8000);
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/rate_cakes_db');
// mongoose.Promise = global.Promise;

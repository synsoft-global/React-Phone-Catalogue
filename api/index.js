/***
 * Import depency and npm packages
 */
const mysql = require('mysql');
var express = require('express');
var app = express();

const http = require('http').Server(app);
var env = "dev";
var routes = require("./routes")(env);
var path = require('path');
var models = require('./models/index')(env);
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/**
 * Needed if need support of ejs templates
 */
//var ejs = require('ejs').renderFile;
// app.engine('html', ejs);
// app.set('view engine', 'html');

/**
 * Define header request type supported for APIs
 * allowed acess controll headers
 */
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Content-Length, Authorization, Accept, X-Requested-With");
    next();
});

// define static assets directory...
app.use(express.static(path.join(__dirname, 'public')));

// port at which the REST apis will up
var port = process.env.PORT || 8000;

app.use('/phones',routes.phones)
app.use('/uploads', express.static(path.join(__dirname, './uploads')));

/* Start server */
http.listen(port, function() {
    console.log('listening on *:8000', port);
});

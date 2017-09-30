// Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// files where comparison array lives
var freinds = require("./app/data/friends.js");

// logic to pull in API's
var apiRoutes = require("./app/routing/apiRoutes.js");

// logic to determine HTML routes
var htmlRoutes = require("./app/routing/htmlRoutes.js");


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
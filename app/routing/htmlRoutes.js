var express = require("express");
var path = require("path");

var app = express();

// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

function showPage(app, __dirname) {
    app.get("/", function (req, res) {
        console.log("showHome function");
        res.sendFile(path.join(__dirname, "/app/public/home.html"));
    });

    app.get("/survey", function (req, res) {
        console.log("showSurvey function");
        res.sendFile(path.join(__dirname, "/app/public/survey.html"));
    });
}

module.exports = showPage;
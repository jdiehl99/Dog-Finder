var express = require("express");
var path = require("path");

var app = express();

var friends = require("./../data/friends.js");

function apiStuff(app, __dirname) {
    // Show all matches in the arrary
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //  do logic after user submits form to determine best match
    app.post("/api/new", function (req, res) {
        var userAnswers = [];
        var differenceArr = [];
        var diff = 0;

        // take user inputs and shove them into an array
        var formData = req.body;
        userAnswers.push(formData);
        
        // res.json(formData);
        console.log("useranswers",userAnswers);
        // console.log("user score length",userAnswers.scores);
        console.log("friends score length",friends.scores.length);

        // // run through the friends array
        // for (i = 0; i < friends.length; i++) {

        //     for (s = 0; s < friends[i].scores.length; s++) {
        //         diffval = Math.abs(userAnswers.scores.scores[s] - friends[i].scores[s]);
        //         differenceArr.push(diffval);
        //     }

        //     console.log("dff arr",differenceArr);

        //     // for (d = 0; d < differenceArr.length; d++) {
        //     //     diff += differenceArr[d];
        //     // }
        //     // console.log("diff",diff);
        // }
    });
}

module.exports = apiStuff;
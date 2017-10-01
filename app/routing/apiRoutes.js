const express = require("express");
const path = require("path");

const app = express();

var userAnswers = [];

function apiStuff(app, __dirname) {
    const friends = require("./../data/friends.js");
    // Show all matches in the arrary
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //  do logic after user submits form to determine best match
    app.post("/api/new", function (req, res) {

        var toBeat = 50;
        var bestMatch = "";
        var bestImg = "";
        var yourDog = [];

        // take user inputs and shove them into an array
        var formData = req.body;
        userAnswers.push(formData);
        console.log("tobeat", toBeat);
        console.log("useranswers", userAnswers);
        // console.log("user score length",req.body.scores.length);
        // console.log("friends score length",friends[0].scores.length);

        // // run through the friends array
        for (i = 0; i < friends.length; i++) {
            var differenceArr = [];
            console.log("friends length", friends.length);


            for (s = 0; s < friends[i].scores.length; s++) {
                // console.log(friends[i].name + " score value q" + [s], friends[i].scores[s]);
                // console.log("user score value q" + [s], formData.scores[s]);
                // console.log("user scores",req.body.scores[s]);
                // console.log("friend score",friends[i].scores[s].length);
                var diff = 0;
                diffval = Math.abs(formData.scores[s] - friends[i].scores[s]);
                differenceArr.push(diffval);
            }
            console.log(friends[i].name + "diff arr", differenceArr);
            for (d = 0; d < differenceArr.length; d++) {
                diff += differenceArr[d];
            }
            console.log(friends[i].name + " diff", diff);
            console.log("tobeat", toBeat);
            if (diff < toBeat) {
                toBeat = diff;
                bestMatch = friends[i].name;
                bestImg = friends[i].photo;
            }
        }
        console.log("best match", bestMatch);
        yourDog.push(bestMatch);
        yourDog.push(bestImg);
        res.json(yourDog);
        console.log("your dog array",yourDog);
    });
}

module.exports = apiStuff;
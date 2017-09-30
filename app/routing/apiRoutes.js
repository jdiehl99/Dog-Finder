// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// Show all matches in the arrary
app.get("/api/friends", function(req, res) {
    res.json(friends);
});


//  do logic after user submits form to determine best match
app.post("/api/new", function (req, res) {


// calculate results for each possible match, then push difference to array
// sort score array, then display the one with smallest value

    var newtable = req.body;
    newtable.routeName = newtable.name.replace(/\s+/g, "").toLowerCase();

    console.log(newtable);

    tables.push(newtable);

    res.json(newtable);
});
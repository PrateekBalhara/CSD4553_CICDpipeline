// Import Express
var express = require("express");
var server = express();

// Hnadling get request
server.get("/", function(req, res){
    res.send("HelloZ! This is the home page.");
})


// Run Server on 5000 port
server.listen(process.env.PORT || 5001);
// Import Express
var express = require("express");
var server = express();

// Hnadling get request
server.get("/", function(req, res){
    res.send("Hello! This is the home page.");
})

//Callback Function
function start(){
    console.log("Server started on port 8080");
}

// Run Server on 8080 port
server.listen(8080, start);
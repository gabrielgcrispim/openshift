var express = require("express");

var app = express ();



app.get('/', function(req,resp){
    resp.send('Hello, World!!!!!!!\n');
})




app.listen(8080,function(){
    console.log("Listening on port 8080 !!!!!!")
});


module.exports = app;
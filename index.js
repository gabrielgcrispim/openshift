var express = require("express");

var app = express ();



app.get('/', function(req,resp){
    resp.send('Hello, World!!!!!!!\n');
})


app.get('/newbranch', function(req,resp){
    resp.send('That is new branch');
})

app.get('/mars', function(req,resp){
    resp.send('Hello, Mars !!!!!!!!');
})


app.get('/name/:name', function(req,resp){
    name = req.params.name
    resp.send('My name is' + name);
})

app.listen(8080,function(){
    console.log("Listening on port 8080 !!!!!!")
});


module.exports = app;





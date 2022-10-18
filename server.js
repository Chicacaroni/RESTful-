var express = require('express');
var app = express();
var fs = require("fs");

var user = {
   "theArchons4" : {
      "name" : "Kusanali",
      "element" : "Dendro",
      "alias" : "Nahida",
      "id": 4
   }
}

app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["theArchons" + req.params.id] 
      console.log( user );
      res.end( JSON.stringify(user));
   });
})

app.delete('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["theArchons" + req.params.id];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

app.post('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["theArchons4"] = user["theArchons4"];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
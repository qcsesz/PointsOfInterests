var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["user" + req.params.id] 
      console.log( user );
      res.end( JSON.stringify(user));
   });
})

app.get('/getPOI', function (req, res) {
   fs.readFile( __dirname + "/resources/" + "maps.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

/*app.get('/getPOI/:mapId', function (req, res) {
   fs.readFile( __dirname + "/resources/" + "maps.json", 'utf8', function (err, data) {
      if (err) {
        throw err;
      }
      //var parsedmap = JSON.parse( data );
      //console.log(data['maps'][0]['mapName'])
      //console.log(data["maps"])
      res.end( data);
   });
})
*/

var server = app.listen(process.env.PORT, function () {
   var host = process.env.IP
   var port = process.env.PORT
   console.log("Example app listening at http://%s:%s", host, port)
})
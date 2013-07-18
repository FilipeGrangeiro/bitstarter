var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var data = fs.readFileSync('index.html');
var buf = new Buffer(data);

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

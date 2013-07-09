var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buf = new Buffer(256);

fs.readFile('./index.html', function (err, data) {
  if (err) throw err;
  buf.write(data);
});

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

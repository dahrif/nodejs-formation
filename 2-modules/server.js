// Utiliser le module que j'ai utilisé

var http = require('http');
var temps = require('./mymodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + temps.myDateTime());
  res.end();
}).listen(8080);
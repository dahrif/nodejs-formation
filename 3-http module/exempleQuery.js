var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var quer = url.parse(req.url, true).query;
  var txt = quer.year + " " + quer.month;
  res.end(txt);
}).listen(8080);
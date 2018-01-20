const http = require("http");
const querystring = require("querystring");

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('hello world');
// }).listen(1337, '127.0.0.1');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('hello world');
}).listen(1338, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');


console.log(querystring.parse("name=111&pwd=111"))


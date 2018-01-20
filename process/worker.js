const http = require("http");

const port = Math.round((Math.random() + 1) * 1000);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(port, '127.0.0.1');
console.log("-----服务启动啦端口-----" + port);

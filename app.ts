const http = require('http');

const requestListener = (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html><body><h1>Hi</h1></body></html>');
  res.end()
};

const server = http.createServer(requestListener);

server.listen(3000);

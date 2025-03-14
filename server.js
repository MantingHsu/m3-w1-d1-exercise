var http = require('http');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer((req, res) => {
    console.log(`Request for ${req.url} received`);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Hello World!</h1></body></html>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


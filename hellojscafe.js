var http = require('http');

var server = http.createServer(function(req, res) {
    res.end("Hello JSCafe");
});

server.listen(3000);

console.log('Server started, listeing on: 3000');

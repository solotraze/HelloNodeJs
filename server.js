/* Kabir */

var http = require('http');

var startServer = function() {
    var server = http.createServer(function(req, res) {
        console.log('Request received.');
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hello World!');
    });
    server.listen(4444, '127.0.0.1');
    console.log('Server started at http://127.0.0.1:4444/');
};

startServer();

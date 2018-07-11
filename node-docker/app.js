const http = require('http');
const os = require('os');

var server = http.createServer(function (req, res) {
    console.log('receive request from ' + req.connection.remoteAddress);
    res.writeHead(200);
    res.end('you hit ' + os.hostname + '\n');
});
server.listen(1234);

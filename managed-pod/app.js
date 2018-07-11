const http = require('http');
const os = require('os');
var count = 1;

var server = http.createServer(function (req, res) {
	if (count++ > 3) {
		res.writeHead(500);
		res.end('server is crash');
	} else {
		console.log('receive request from ' + req.connection.remoteAddress);
    	res.writeHead(200);
    	res.end('you hit ' + os.hostname + '\n');
	}
});
server.listen(1234);
console.log('server starts at 1234');

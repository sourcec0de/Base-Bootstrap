var connect = require("connect");
var serverPort = 8080,
	serverRoot = __dirname + '/public';

var app = connect()
	.use(connect.logger('dev'))
	.use(connect.static(serverRoot))
	.listen(serverPort);

console.log('Server Port: ' + serverPort);
console.log('Server Root: ' + serverRoot);
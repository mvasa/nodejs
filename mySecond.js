var browser = require('http');
var dt = require('./myFirstModule');

browser.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("the date and time are currently: " + dt.myDateTime());
	res.end();
}).listen(8080);
var http = require('http');
var static = require('node-static');

var file = new static.Server('./js', {cache : 3600});


http.createServer(function(req, res) {
	req.addListener('end', function() {
		fileServer.serveFile('font-awesome/css/font-awesome.min.css' , req , res);
		fileServer.serveFile('css/muzit-font.css' , req , res);
		fileServer.serveFile('css/style.css' , req , res);
		fileServer.serve(req, res);
	}).resume();
}).listen(8000);
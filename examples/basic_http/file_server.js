var http = require('http');
var parse = require('url').parse;
var join = require('path').join;
var fs = require('fs');
var root = __dirname;
var server = http.createServer(function (req, res) {
	var url = parse(req.url);
	var path = join(root, url.pathname);
	var stream = fs.createReadStream(path);
	// Old streaming
	// stream.on('data', function (chunk) {
	// 	res.write(chunk);
	// });
	// stream.on('end', function() {
	// 	res.end();
	// });
	// Optimized streaming with .pipe()
	stream.pipe(res);
});
server.listen(3000);
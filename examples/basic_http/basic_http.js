// How Node presents incoming HTTP requests to developers
// How to write  basic HTTP server that responds åwith "Hello World"
// How to read incoming request headers and set outgoing response headers
// How to set the status code of an HTTP response

// Node provides HTTP server and client interfaces through the http module:
var http = require('http');

// To create an HTTP server, call the http.createServer() function.
// It accepts a single argument, a callback function, that will be called on each HTTP request received by the server.
// The request callback receives, as arguments, the request and response objects.
var server = http.createServer(function (request, response) {
	// handle request/ do some asynchronous stuff
	// It's our responsibility to end the response using the res.end()
	// If you fail to end the response, the request will hang until the client times out or it will just remain open.
	// res.end();
	// Respond with hello world
	// response.end('Hello world!');
	// or 
	response.write('Hello world!');
	response.end();
});

// The last thing we are going to do is bind it to a port so it can listen for incoming requests.
server.listen(3000);

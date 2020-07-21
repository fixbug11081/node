var http = require('http');

var server = http.createServer(function(request,response){

response.writeHead(200,{"Content-Type":"text/plain"});
response.end("Hello Worlf");
});

server.listen(3000);
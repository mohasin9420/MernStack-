import http from "node:http";

http.createServer(function (request, response) {

    response.writeHead(200, { "Content-Type": "text/plain" });

    response.end("This is full stack MERN Course");

}).listen(8085);

console.log("Server is available on : http://localhost:8085");
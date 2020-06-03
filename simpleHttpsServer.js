const http = require("http");
const server = http.createServer(function (request, response) {
  response.writeHead(
    200,

    {
      "Content-Type": "text/plain",
    }
  );
  response.end("New Webserver");
});
server.listen(3000);
const request = require("request");
request("http://www.google.com", function (error, response, body) {
  console.log(body);
});

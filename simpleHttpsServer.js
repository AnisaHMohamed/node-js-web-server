// const http = require("http");
// //Create the server Object
// const server = http
//   .createServer((req, res) => {
//     //Write Response
//     res.write("I'm a node server");
//     res.end();
//   })
//   .listen(5000, () => console.log("Node server running"));

const http = require("http");
const server = http
  .createServer((request, response) => {
    response.writeHead(
      200,

      {
        "Content-Type": "text/plain",
      }
    );
    response.end("New Webserver");
  })
  .listen(3000, () => console.log("Node server running"));
const request = require("request");
request("http://www.google.com", function (error, response, body) {
  console.log(body);
});

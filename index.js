// const Book = require("./book");
// const myBook = new Book("How to be great", "Anisa Mohamed");
// myBook.info();

// const Logger = require("./logger");
// const logger = new Logger();

// logger.on("message", (data) => console.log("Called Listener:", data));
// logger.log("Hello World");
// logger.log("heyy girl");
// logger.log("haalloo");
const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home</h1>");
  }
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

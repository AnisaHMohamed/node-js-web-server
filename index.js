// const Book = require("./book");
// const myBook = new Book("How to be great", "Anisa Mohamed");
// myBook.info();

// const Logger = require("./logger");
// const logger = new Logger();

// logger.on("message", (data) => console.log("Called Listener:", data));
// logger.log("Hello World");
// logger.log("heyy girl");
// logger.log("haalloo");

// const http = require("http");
// const path = require("path");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     fs.readFile(
//       path.join(__dirname, "public", "index.html"),
//       (err, content) => {
//         if (err) throw err;
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(content);
//       }
//     );
//   }
//   if (req.url === "/about") {
//     fs.readFile(
//       path.join(__dirname, "public", "about.html"),
//       (err, content) => {
//         if (err) throw err;
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(content);
//       }
//     );
//   }
//   if (req.url === "/api/users") {
//     const users = [
//       { name: "Anisa Mohamed", age: 29 },
//       { name: "Mohamed Anisa", age: 30 },
//     ];
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(users));
//   }
// });
// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //Build FilePath
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // Extension of file
  let extname = path.extname(filePath);
  // Initial content type

  let contentType = "text/html";

  //Check Ext type and set Content Type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/jpg";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }
  // Check if contentType is text/html but no .html file extension
  if (contentType == "text/html" && extname == "") filePath += ".html";

  //Read File
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        //Page is not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //Server Error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      //Sucessful Load
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
  // res.end();
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

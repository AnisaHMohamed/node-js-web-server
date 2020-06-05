// const Book = require("./book");
// const myBook = new Book("How to be great", "Anisa Mohamed");
// myBook.info();
const Logger = require("./logger");
const logger = new Logger();

logger.on("message", (data) => console.log("Called Listener:", data));
logger.log("Hello World");
logger.log("heyy girl");
logger.log("haalloo");

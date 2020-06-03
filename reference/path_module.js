const path = require("path");
//Base File Name
console.log(path.basename(__filename));
//Base Directory Name
console.log(path.dirname(__filename));
//File Extension
console.log(path.extname(__filename));
//Create Path Object
console.log(path.parse(__filename));
//Create Path Object base
console.log(path.parse(__filename).base);
//Concatenate Paths
console.log(path.join(__dirname, "book", "library.html"));

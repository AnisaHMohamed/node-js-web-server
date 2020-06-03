const fs = require("fs");
const path = require("path");
// //Create a folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder Created!!!!");
// });
// //Create a and write to a file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello I am a new file",
//   (err) => {
//     if (err) throw err;
//     console.log("Created hello file in test folder");
//     //Append to the file
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       "\nI was appended afterwards to the existing file",
//       (err) => {
//         if (err) throw err;
//         console.log("Created hello file in test folder");
//       }
//     );
//   }
// );
//Read  a File
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
//Rename a File
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloWorld.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed");
  }
);

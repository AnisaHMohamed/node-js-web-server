const url = require("url");
const myUrl = new URL(
  "http://anisatalkstech.com:8000/hi.html?id=10000&status=active"
);
//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
//Host or root domain (will include the port)
console.log(myUrl.host);
//Hostname(will not include the port)
console.log(myUrl.hostname);
//Pathname
console.log(myUrl.pathname);
//Serialized Query
console.log(myUrl.search);
//Params Object
console.log(myUrl.searchParams);
//Add a Param
myUrl.searchParams.append("new", "param");
console.log(myUrl.searchParams);
//Loop through Params
myUrl.searchParams.forEach((value, name) => console.log(`${value}  ${name}`));

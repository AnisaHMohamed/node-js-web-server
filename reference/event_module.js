const EventEmitter = require("events");
//Create Emmitter class
class MyEmitter extends EventEmitter {}
//Initialize Event Emitter
const myEmitter = new MyEmitter();
//Event Listener
myEmitter.on("event", () => console.log("Event Fired"));
//Initialize Event
myEmitter.emit("event");
//2nd Event Listener
myEmitter.on("event2", () => console.log("2nd Event Fired"));
//2nd Initialize Event
myEmitter.emit("event2");

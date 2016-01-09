// Dependencies
const Electronify = require("electronify");

// Create the app
var app = Electronify(__dirname + "/app/index.html", {
    resizable: false
});

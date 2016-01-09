"use strict";

// Dependencies
const electronify = require("electronify")
    , menu = require('menu')
    ;

// Create the app
let app = electronify(__dirname + "/app/index.html");

app.on("ready", () => {
    var appMenu = require("./menu")(app, app.mainWindow);
    app.mainWindow.setMenu(menu.buildFromTemplate(appMenu));
});

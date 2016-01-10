"use strict";

const electronify = require("electronify")
    , BrowserWindow = require("browser-window")
    , Menu = require('menu')
    ;

module.exports = function menu (app, mainWindow) {

    function openWindow(doc, options) {
        let win = new BrowserWindow(options);
        win.loadURL(`file://${__dirname}/../app/${doc}.html`);
        win.setMenu(Menu.buildFromTemplate([{
            label: "Magnesium",
            submenu: [
                {
                    label: "Close"
                  , selector: "orderFrontStandardAboutPanel:"
                  , click: function () {
                        win.close();
                    }
                }
            ]
        }]));
    }

    var menu = [
        {
            label: "Magnesium"
          , submenu: [
                {
                    label: "About Magnesium"
                  , selector: "orderFrontStandardAboutPanel:"
                  , click: function () {
                        openWindow("about", {
                            height: 420,
                            width: 500,
                            resizable: false
                        });
                    }
                }
              , {
                    label: "Preferences"
                  , selector: "orderFrontStandardAboutPanel:"
                  , click: function () {
                        openWindow("settings", {
                            height: 500,
                            width: 890,
                            resizable: false
                        });
                    }
                }
              , {
                    type: "separator"
                }
              , {
                    label: "New Terminal"
                  , click: () => {
                        require("child_process").exec(process.execPath + " .", { cwd: process.cwd() });
                    }
                }
              , {
                    type: "separator"
                }
              , {
                    label: "Quit"
                  , accelerator: "Command+Q"
                  , click: function () { app.quit() }
                }
            ]
        }
      , {
            label: "Development"
          , submenu: [
                {
                    label: "Open Developer Tools"
                  , click: function () { mainWindow.openDevTools(); }
                }
              , {
                    label: "Reload"
                  , click: function () { mainWindow.reload(); }
                }
            ]
        }
      , {
            label: "Help"
          , submenu: [
                {
                    label: "Repository"
                  , click: function () { require("shell").openExternal("http://github.com/IonicaBizau/magnesium") }
                }
            ]
        }
    ];
    return menu;
};

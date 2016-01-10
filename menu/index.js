module.exports = function menu (app, mainWindow) {
    var menu = [
        {
            label: "Magnesium"
          , submenu: [
                {
                    label: "About Magnesium"
                  , selector: "orderFrontStandardAboutPanel:"
                  , click: function () { require("shell").openExternal("http://github.com/IonicaBizau/magnesium") }
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

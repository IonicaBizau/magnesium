const WebTerm = require("web-term");

var $ = require("web-term/bin/public/js/jquery.js");
$.ajax = function (options) {
    if (options.url === "/api/settings/get") {
        WebTerm.readSettings(function (err, data) {
            options.success(data);
        });
    }
};
require("web-term/bin/public/js/term.js");
require("web-term/bin/public/js/blm.js");
require("web-term/bin/public/js/web-term.js");
require("./electron-io");

var appIo = SocketIO.listen();

appIo.sockets.on("connection", socket => {
    var req = socket.handshake;

    // One terminal per web-socket
    var terminal = null;

    socket.on("create", function(cols, rows, callback) {
        terminal = new WebTerm({
            cols: cols
          , rows: rows
          , cwd: process.cwd()
          , socket: socket
        });
        process.nextTick(callback);
    });

    socket.on("dataToServer", function(data) {
        if (!terminal) { return; }
        terminal.data(data);
    });

    socket.on("kill", function() {
        if (!terminal) { return; }
        terminal.kill();
    });

    socket.on("resize", function(cols, rows) {
        if (!terminal) { return; }
        terminal.resize(cols, rows);
    });

    socket.on("disconnect", function() {
        if (!terminal) { return; }
        terminal.kill();
        terminal = null;
    });

    socket.on("request paste", function(callback) {
        if (!terminal) { return; }
        terminal.paste(callback);
    });
});

WebTerm._watchConfig();

const EventEmitter = require("events").EventEmitter;

const link = new EventEmitter();

const io = window.io = {
    sockets: new EventEmitter()
  , connect () {
        this.sockets.emit("connection", link);
        return link;
    }
};

const SocketIO = window.SocketIO = {
    listen (options) {
        return io;
    }
};

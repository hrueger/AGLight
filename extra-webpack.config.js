module.exports = {
    target: 'electron-renderer',
    // don't remove this comments it is used for parsing by postinstall.config.js
    // start of extra configs
    externals: {
        dmx: "require('dmx')",
        serialport: "require('serialport')",
        ws: "require('ws')",
        "socket.io": "require('socket.io')",
        "express": "require('express')",
    },
    // end of extra configs
};
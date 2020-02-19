const file =  require("../functions/file.js")
const fs = require('fs')
module.exports = function Mysocket(server) {
    try {
        const io = require('socket.io')(server);
        io.on('connect', function (socket) {
            socket.on('getFileTree', (data) => {
                let oriPath = process.pwd()
                let tree = file.readDir(oriPath)
                socket.emit('_getFileTree',tree)
            })
        });
    }catch (e) {
        console.log(e)
    }
}
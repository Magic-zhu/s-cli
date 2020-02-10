

module.exports = function Mysocket(server) {
    const io = require('socket.io')(server);
    var userIO = {};
    io.on('connect', function (socket) {
        //广播消息
        socket.on('say', (data) => {
            
        })
    });
}
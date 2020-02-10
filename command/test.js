var child = require('child_process')
var path = require('path')
const message = require('../utils/message')
const Shell = Rx.Observable.bindNodeCallback(child.exec);
module.exports = function(){
    let server = __dirname.replace(/\\/g, "/").split("command")[0] + 'server/bin/www';
    message.success('启动服务')
    try{
        Shell(`node  ${server}`)
    }catch(err){
        message.error(err)
    }
}
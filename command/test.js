var child = require('child_process')
var path = require('path')
const message = require('../utils/message')
const Rx = require('rxjs/Rx')
const Shell = Rx.Observable.bindNodeCallback(child.exec)
const open = require('../utils/openBrowser')
module.exports = function(){
    let ui = __dirname.replace(/\\/g, "/").split("command")[0] + 'ui/index.html'
    message.success('启动服务')
    try{
        Shell(`node ${ui}`).subscribe(buffer=>{
            open('localhost:8080')
        })
    }catch(err){
        message.error(err)
    }
}
var child = require('child_process')
var path = require('path')
const message = require('../utils/message')
const open = require('../utils/openBrowser')
module.exports = function(){
    startServer();
    startUiServer();
}

function startUiServer() {
    let rootPath = __dirname.replace(/\\/g, "/").split("command")[0]
    message.info('🚀starting GUI')
    try{
        let worker = child.exec(`cd ${rootPath} && npm run ui`,(err)=>{
            if(err){
                message.fail('启动失败')
            }
        });
        worker.stdout.on('data',(data)=>{
            console.log(data.toString())
        })
    }catch(err){
        message.error(err)
    }
}

function startServer() {
    let rootPath = __dirname.replace(/\\/g, "/").split("command")[0]
    try{
        let worker = child.exec(`cd ${rootPath} && npm start`,(err)=>{
            if(err){
                message.fail('启动失败')
            }
        });
    }catch(err){
        message.error(err)
    }
}
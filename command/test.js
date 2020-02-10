var child = require('child_process')
var path = require('path')
const message = require('../utils/message')
const open = require('../utils/openBrowser')
module.exports = function(){
    let ui = __dirname.replace(/\\/g, "/").split("command")[0]
    message.info('启动服务中')
    try{
        child.exec(`cd ${ui} && npm run ui`)
        setTimeout(()=>{
            message.success('http://localhost:8080/weapp')
            open('http://localhost:8080/weapp')
        },500)
    }catch(err){
        message.error(err)
    }
}
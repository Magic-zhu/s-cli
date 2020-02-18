var child = require('child_process')
var path = require('path')
const message = require('../utils/message')
const open = require('../utils/openBrowser')
module.exports = function(){
    let rootPath = __dirname.replace(/\\/g, "/").split("command")[0]
    message.info('🚀starting GUI')
    try{
        child.exec(`cd ${rootPath} && npm run ui && npm start`)
        setTimeout(()=>{
            message.success('http://localhost:8080')
            open('http://localhost:8080')
        },500)
    }catch(err){
        message.error(err)
    }
}
const child = require('child_process')
const path = require('path')
const fs = require('fs')
const message = require('../utils/message')
const open = require('../utils/openBrowser')
module.exports = function(){
    console.log(process.execPath)
    console.log(__dirname)
    console.log(process.cwd())
    let oriPath = process.cwd()
    let states = fs.statSync(oriPath);
    if(states.isDirectory()){
        let result = fs.readdirSync(oriPath);
        console.log(result)
    }
}

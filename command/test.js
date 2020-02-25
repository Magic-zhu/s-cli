const child = require('child_process')
const path = require('path')
const fs = require('fs')
const message = require('../utils/message')

function outputPath(){
    console.log(process.execPath)
    console.log(__dirname)
    console.log(process.cwd())
}

module.exports =  async function(){
    outputPath()
}



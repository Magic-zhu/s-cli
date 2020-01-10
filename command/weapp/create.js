const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const spinner = require('ora')()
const Rx = require('rxjs/Rx')
const Writer = Rx.Observable.bindNodeCallback(fs.writeFile)
const Reader = Rx.Observable.bindNodeCallback(fs.readFile)
module.exports = function (option) {

}
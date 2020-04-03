const child = require('child_process');
const fs = require('fs');
const path = require('path');
const Rx = require('rxjs/Rx');
const Writer = Rx.Observable.bindNodeCallback(fs.writeFile);
const Reader = Rx.Observable.bindNodeCallback(fs.readFile);
const message = require('../utils/message');
module.exports=function(){
    message.info('啊啊啊')
}
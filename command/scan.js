const child = require('child_process');
const fs = require('fs');
const path = require('path');
const Rx = require('rxjs/Rx');
const Writer = Rx.Observable.bindNodeCallback(fs.writeFile);
const Reader = Rx.Observable.bindNodeCallback(fs.readFile);
const message = require('../utils/message');
module.exports=function(){
    Reader('/Users/alex.zhu/Desktop/MCNweapp1912/pages/my_task/index.wxml').subscribe(buffer=>{
        let string = buffer.toString();
        string = string.replace(/[\t\n]/g,"");
        const startTagOpen = /^<[a-zA-Z_-]+/;
        let res = string.match('true');
        console.log(res[0],res.index)
    })
}
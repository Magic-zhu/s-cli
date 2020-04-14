const child = require('child_process');
const fs = require('fs');
const path = require('path');
const Rx = require('rxjs/Rx');
const Writer = Rx.Observable.bindNodeCallback(fs.writeFile);
const Reader = Rx.Observable.bindNodeCallback(fs.readFile);
const message = require('../utils/message');
const wxmlParse = require('../utils/wxmlParse')
module.exports=function(){
    Reader('/Users/alex.zhu/Desktop/MCNweapp1912/pages/my_task/index.wxml')
        .subscribe(buffer=>{
            let string = buffer.toString();
            wxmlParse(string)
        })
}